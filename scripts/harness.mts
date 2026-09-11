/**
 * Local verification harness (dev-only, not shipped): renders every route to static HTML
 * with Next.js modules stubbed, so pages can be checked and screenshotted without `next build`.
 * Run: NODE_PATH=/home/claude/.npm-global/lib/node_modules tsx --tsconfig scripts/tsconfig.harness.json scripts/harness.tsx
 */
import { renderToStaticMarkup } from "react-dom/server";
import { mkdirSync, writeFileSync, readFileSync, copyFileSync, cpSync } from "node:fs";
import { join } from "node:path";
import type { ReactElement } from "react";

const root = process.cwd();
const out = join(root, "scripts", ".harness-out");
mkdirSync(out, { recursive: true });
cpSync(join(root, "public"), join(out, "public"), { recursive: true });
copyFileSync(join(root, "app", "globals.css"), join(out, "globals.css"));

const Layout = (await import("../app/layout.tsx")).default;
const NotFound = (await import("../app/not-found.tsx")).default;

type Mod = Record<string, any>;
type Route = { path: string; mod: () => Promise<Mod>; params?: Record<string, string>; search?: Record<string, string> };
const M = {
  home: () => import("../app/page.tsx"), product: () => import("../app/product/page.tsx"), productSlug: () => import("../app/product/[slug]/page.tsx"),
  forSlug: () => import("../app/for/[slug]/page.tsx"), pilot: () => import("../app/institutional-pilot/page.tsx"), pricing: () => import("../app/pricing/page.tsx"),
  blog: () => import("../app/blog/page.tsx"), blogSlug: () => import("../app/blog/[slug]/page.tsx"), compare: () => import("../app/compare/page.tsx"), compareSlug: () => import("../app/compare/[slug]/page.tsx"),
  faq: () => import("../app/faq/page.tsx"), about: () => import("../app/about/page.tsx"), recognition: () => import("../app/recognition/page.tsx"), investors: () => import("../app/investors/page.tsx"),
  contact: () => import("../app/contact/page.tsx"), press: () => import("../app/press/page.tsx"), privacy: () => import("../app/privacy/page.tsx"), terms: () => import("../app/terms/page.tsx"),
};
const { productPages, segments } = await import("../content/product.ts");
const { blogPosts } = await import("../content/blog.ts");
const { comparePages } = await import("../content/compare.ts");

const routes: Route[] = [
  { path: "/", mod: M.home },
  { path: "/product", mod: M.product },
  ...productPages.map((p) => ({ path: `/product/${p.slug}`, mod: M.productSlug, params: { slug: p.slug } })),
  ...segments.map((s) => ({ path: `/for/${s.slug}`, mod: M.forSlug, params: { slug: s.slug } })),
  { path: "/institutional-pilot", mod: M.pilot },
  { path: "/pricing", mod: M.pricing },
  { path: "/blog", mod: M.blog },
  ...blogPosts.map((b) => ({ path: `/blog/${b.slug}`, mod: M.blogSlug, params: { slug: b.slug } })),
  { path: "/compare", mod: M.compare },
  ...comparePages.map((c) => ({ path: `/compare/${c.slug}`, mod: M.compareSlug, params: { slug: c.slug } })),
  { path: "/faq", mod: M.faq },
  { path: "/about", mod: M.about },
  { path: "/recognition", mod: M.recognition },
  { path: "/investors", mod: M.investors },
  { path: "/contact", mod: M.contact, search: { topic: "industry" } },
  { path: "/press", mod: M.press },
  { path: "/privacy", mod: M.privacy },
  { path: "/terms", mod: M.terms },
];

const fontLink = `<link rel="preconnect" href="https://fonts.googleapis.com"><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Newsreader:ital,wght@0,400;0,500;1,400;1,500&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">`;
const fontVars = `<style>:root{--font-inter:'Inter';--font-newsreader:'Newsreader';--font-mono:'JetBrains Mono'}</style>`;

const results: { path: string; ok: boolean; title?: string; desc?: string; bytes?: number; error?: string; h1?: number; ld?: number }[] = [];
for (const r of routes) {
  try {
    const mod = await r.mod();
    const props = { params: Promise.resolve(r.params ?? {}), searchParams: Promise.resolve(r.search ?? {}) };
    const meta = mod.generateMetadata ? await mod.generateMetadata(props) : mod.metadata;
    const el: ReactElement = await mod.default(props);
    const html = renderToStaticMarkup(Layout({ children: el }) as ReactElement);
    const page = `<!doctype html>${html}`
      .replace("<head>", `<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">${fontLink}${fontVars}<link rel="stylesheet" href="/globals.css"><title>${meta?.title ?? ""}</title>`)
      .replace(/href="\/(?!\/)/g, 'href="/').replace(/src="\/brand/g, 'src="/public/brand');
    const file = join(out, (r.path === "/" ? "index" : r.path.slice(1).replace(/\//g, "__")) + ".html");
    writeFileSync(file, page);
    const h1 = (html.match(/<h1/g) || []).length;
    const ld = (html.match(/application\/ld\+json/g) || []).length;
    results.push({ path: r.path, ok: true, title: String(meta?.title ?? ""), desc: String(meta?.description ?? ""), bytes: page.length, h1, ld });
  } catch (e) {
    results.push({ path: r.path, ok: false, error: e instanceof Error ? e.stack ?? e.message : String(e) });
  }
}
// 404 + sitemap/robots/llms sanity
try {
  const html = renderToStaticMarkup(Layout({ children: NotFound() }) as ReactElement);
  writeFileSync(join(out, "404.html"), `<!doctype html>${html.replace("<head>", `<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">${fontLink}${fontVars}<link rel="stylesheet" href="/globals.css">`)}`);
  const sm = (await import("../app/sitemap.ts")).default();
  const rb = (await import("../app/robots.ts")).default();
  const llms = await (await import("../app/llms.txt/route.ts")).GET().text();
  writeFileSync(join(out, "llms.txt"), llms);
  results.push({ path: `[sitemap ${sm.length} urls]`, ok: true }, { path: `[robots ${JSON.stringify(rb).length}b]`, ok: true }, { path: `[llms.txt ${llms.length}b]`, ok: true });
} catch (e) { results.push({ path: "[meta routes]", ok: false, error: String(e) }); }

writeFileSync(join(out, "results.json"), JSON.stringify(results, null, 2));
for (const r of results) {
  console.log(r.ok ? `OK   ${r.path}  h1=${r.h1 ?? "-"} ld=${r.ld ?? "-"} title(${r.title?.length ?? 0}) desc(${r.desc?.length ?? 0})` : `FAIL ${r.path}\n${r.error}`);
}
const failed = results.filter((r) => !r.ok).length;
console.log(`\n${results.length - failed}/${results.length} routes rendered`);
process.exit(failed ? 1 : 0);
