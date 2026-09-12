#!/usr/bin/env node
/**
 * JSON-LD validator. Crawls every sitemap route (plus a 404) against a running server,
 * extracts each application/ld+json block and checks it structurally.
 *
 * Usage: node scripts/validate-jsonld.mjs [baseUrl]   (default http://localhost:3000)
 * Exits 1 on any ERROR; WARNs do not fail the build.
 */
const BASE = (process.argv[2] || "http://localhost:3000").replace(/\/+$/, "");

const errors = [];
const warns = [];
const err = (route, msg) => errors.push(`${route}  ERROR  ${msg}`);
const warn = (route, msg) => warns.push(`${route}  WARN   ${msg}`);

const TYPE_REQUIRED = {
  Organization: ["name", "url"],
  SoftwareApplication: ["name", "applicationCategory"],
  Product: ["name", "offers"],
  BreadcrumbList: ["itemListElement"],
  FAQPage: ["mainEntity"],
  Person: ["name"],
  Article: ["headline"],
  BlogPosting: ["headline"],
};

function decode(s) {
  return s.replace(/&quot;/g, '"').replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&#x27;/g, "'");
}

function walk(node, route, path, seen) {
  if (Array.isArray(node)) return node.forEach((n, i) => walk(n, route, `${path}[${i}]`, seen));
  if (!node || typeof node !== "object") return;
  for (const [k, v] of Object.entries(node)) {
    if (v === undefined) err(route, `${path}.${k} is undefined`);
    if (v === null) warn(route, `${path}.${k} is null`);
    if (typeof v === "string" && /\bundefined\b|\bNaN\b/.test(v)) err(route, `${path}.${k} contains "${v}"`);
  }
  const t = node["@type"];
  if (t && TYPE_REQUIRED[t]) {
    for (const req of TYPE_REQUIRED[t]) {
      if (node[req] === undefined) err(route, `${path} ${t} missing required "${req}"`);
    }
  }
  if (t === "Offer") {
    if (node.price === undefined && node.priceSpecification === undefined) {
      warn(route, `${path} Offer has neither price nor priceSpecification`);
    }
    if (node.price !== undefined && node.priceCurrency === undefined) {
      err(route, `${path} Offer has price but no priceCurrency`);
    }
    if (node.availability === undefined) warn(route, `${path} Offer has no availability`);
  }
  if (t === "BreadcrumbList") {
    const list = node.itemListElement || [];
    list.forEach((it, i) => {
      if (it.position !== i + 1) err(route, `${path} breadcrumb ${i} position ${it.position} out of order`);
      if (!it.name) err(route, `${path} breadcrumb ${i} missing name`);
      if (!it.item) warn(route, `${path} breadcrumb ${i} missing item URL`);
    });
  }
  for (const [k, v] of Object.entries(node)) {
    if (typeof v === "object") walk(v, route, `${path}.${k}`, seen);
  }
}

async function checkRoute(route) {
  const res = await fetch(`${BASE}${route}`, { redirect: "follow" });
  const html = await res.text();
  const blocks = [...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map((m) => m[1]);
  if (!blocks.length) return { route, types: [], status: res.status };

  const types = [];
  blocks.forEach((raw, i) => {
    let data;
    try {
      data = JSON.parse(raw);
    } catch (e) {
      err(route, `block ${i} is not valid JSON — ${e.message}`);
      return;
    }
    const nodes = Array.isArray(data) ? data : [data];
    for (const n of nodes) {
      if (!n["@context"]) err(route, `block ${i} missing @context`);
      else if (!String(n["@context"]).includes("schema.org")) err(route, `block ${i} @context is not schema.org`);
      if (!n["@type"]) err(route, `block ${i} missing @type`);
      types.push(n["@type"]);
      walk(n, route, `block${i}`, new Set());

      // FAQPage must only appear where the questions are actually on the page.
      if (n["@type"] === "FAQPage") {
        // Strip script/style bodies first: the JSON-LD block itself is in the HTML, and
        // matching against it would make every FAQPage look trivially "visible".
        const body = html
          .replace(/<script[\s\S]*?<\/script>/g, " ")
          .replace(/<style[\s\S]*?<\/style>/g, " ");
        const visible = decode(body.replace(/<[^>]+>/g, " ")).replace(/\s+/g, " ");
        for (const q of n.mainEntity || []) {
          const needle = decode(String(q.name)).replace(/\s+/g, " ").slice(0, 60);
          if (!visible.includes(needle)) err(route, `FAQPage lists a question not visibly rendered — "${needle}…"`);
        }
      }
    }
  });

  // duplicate top-level types on one page
  const dupes = types.filter((t, i) => types.indexOf(t) !== i && t !== "Person");
  for (const d of new Set(dupes)) warn(route, `emits ${d} more than once`);
  return { route, types, status: res.status };
}

const sitemap = await (await fetch(`${BASE}/sitemap.xml`)).text();
const routes = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)]
  .map((m) => m[1].replace(/^https?:\/\/[^/]+/, ""))
  .map((r) => r || "/");
routes.push("/a-route-that-does-not-exist");

const results = [];
for (const r of routes) results.push(await checkRoute(r));

console.log(`JSON-LD validation — ${routes.length} routes against ${BASE}\n`);
for (const r of results) {
  console.log(`  ${r.route.padEnd(56)} ${r.types.length ? r.types.join(", ") : "(none)"}`);
}
console.log(`\n  routes: ${results.length}   blocks: ${results.reduce((a, b) => a + b.types.length, 0)}`);
console.log(`  errors: ${errors.length}   warnings: ${warns.length}\n`);
if (warns.length) { console.log("WARNINGS"); warns.forEach((w) => console.log("  " + w)); console.log(""); }
if (errors.length) { console.log("ERRORS"); errors.forEach((e) => console.log("  " + e)); process.exit(1); }
console.log("No JSON-LD errors.");
