import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import type { MetadataRoute } from "next";
import { SITE_URL, facts } from "@/content/facts";
import { productPages, segments } from "@/content/product";
import { blogPosts } from "@/content/blog";
import { comparePages } from "@/content/compare";
import { docPages } from "@/content/docs";
import { allCaseStudiesDraft } from "@/content/customers";

const ROOT = process.cwd();

/**
 * Last commit date per file, from a single `git log` pass. The first time a path appears
 * is its most recent commit, so we keep that and ignore later ones.
 * Returns an empty map when git is unavailable (shallow clone, tarball deploy, no binary);
 * routes then fall back to facts.lastUpdated rather than failing the build.
 */
function gitDates(): Map<string, string> {
  const map = new Map<string, string>();
  try {
    const out = execFileSync("git", ["log", "--no-merges", "--format=%cI", "--name-only"], {
      cwd: ROOT, encoding: "utf8", maxBuffer: 32 * 1024 * 1024, stdio: ["ignore", "pipe", "ignore"],
    });
    let current = "";
    for (const line of out.split("\n")) {
      const l = line.trim();
      if (!l) continue;
      if (/^\d{4}-\d{2}-\d{2}T/.test(l)) { current = l; continue; }
      if (current && !map.has(l)) map.set(l, current);
    }
  } catch {
    // no git here; fall back below
  }
  return map;
}

const DATES = gitDates();
const FALLBACK = new Date(facts.lastUpdated);

/** Most recent commit date across the files a route is actually built from. */
function lastmod(files: string[]): Date {
  const stamps = files.map((f) => DATES.get(f)).filter(Boolean) as string[];
  if (!stamps.length) return FALLBACK;
  return new Date(stamps.sort().at(-1)!);
}

/** Every static route: walk app/ for page files, skipping dynamic segments and private dirs. */
function staticRoutes(): { route: string; file: string }[] {
  const found: { route: string; file: string }[] = [];
  const walk = (dir: string, segs: string[]) => {
    for (const entry of fs.readdirSync(path.join(ROOT, dir), { withFileTypes: true })) {
      if (entry.isDirectory()) {
        const n = entry.name;
        if (n.startsWith("[") || n.startsWith("_") || n.startsWith("@") || n === "api") continue;
        // route groups (folder) do not add a path segment
        const next = n.startsWith("(") && n.endsWith(")") ? segs : [...segs, n];
        walk(path.join(dir, n), next);
      } else if (entry.name === "page.tsx" || entry.name === "page.ts") {
        found.push({ route: "/" + segs.join("/"), file: path.join(dir, entry.name) });
      }
    }
  };
  walk("app", []);
  return found;
}

/** Any document dropped into /public/docs is indexable; none exist until they are added. */
function docRoutes(): { route: string; file: string }[] {
  const dir = path.join(ROOT, "public", "docs");
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir)
    .filter((f) => /\.(pdf|csv|txt)$/i.test(f))
    .map((f) => ({ route: `/docs/${f}`, file: `public/docs/${f}` }));
}

/** Hand-tuned weights; anything not named here takes the default. */
const PRIORITY: Record<string, number> = {
  "/": 1, "/product": 0.9, "/institutional-pilot": 0.9, "/pricing": 0.9, "/customers": 0.8,
  "/pilot/provenance": 0.8, "/for/institutions": 0.8, "/blog": 0.7, "/compare": 0.7,
  "/about": 0.7, "/faq": 0.6, "/recognition": 0.6, "/investors": 0.5, "/contact": 0.5,
  "/press": 0.4, "/privacy": 0.2, "/terms": 0.2,
};
const WEEKLY = new Set(["/", "/blog"]);
const YEARLY = new Set(["/privacy", "/terms"]);

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: { route: string; files: string[]; priority?: number }[] = [];

  // Routes that are deliberately noindex must not be advertised in the sitemap.
  const noIndex = new Set<string>(allCaseStudiesDraft() ? ["/customers"] : []);
  for (const { route, file } of staticRoutes()) {
    if (noIndex.has(route)) continue;
    entries.push({ route, files: [file] });
  }

  const dyn = (route: string, pageFile: string, dataFile: string, priority: number) =>
    entries.push({ route, files: [pageFile, dataFile], priority });

  for (const p of productPages) dyn(`/product/${p.slug}`, "app/product/[slug]/page.tsx", "content/product.ts", 0.8);
  for (const s of segments) {
    if (s.slug === "institutions") continue; // has its own route file, already found above
    dyn(`/for/${s.slug}`, "app/for/[slug]/page.tsx", "content/product.ts", 0.8);
  }
  for (const c of comparePages) dyn(`/compare/${c.slug}`, "app/compare/[slug]/page.tsx", "content/compare.ts", 0.7);
  for (const b of blogPosts.filter((x) => !x.draft)) dyn(`/blog/${b.slug}`, "app/blog/[slug]/page.tsx", "content/blog.ts", 0.6);
  for (const d of docPages) dyn(`/docs/${d.slug}`, "app/docs/[slug]/page.tsx", "content/docs.ts", 0.6);
  for (const { route, file } of docRoutes()) entries.push({ route, files: [file], priority: 0.4 });

  const seen = new Set<string>();
  return entries
    .filter((e) => (seen.has(e.route) ? false : (seen.add(e.route), true)))
    .sort((a, b) => a.route.localeCompare(b.route))
    .map((e) => ({
      url: `${SITE_URL}${e.route === "/" ? "" : e.route}`,
      lastModified: lastmod(e.files),
      changeFrequency: WEEKLY.has(e.route) ? "weekly" : YEARLY.has(e.route) ? "yearly" : "monthly",
      priority: e.priority ?? PRIORITY[e.route] ?? 0.7,
    }));
}
