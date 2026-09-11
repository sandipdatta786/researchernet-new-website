// Screenshots the harness output with Chromium (dev-only).
import { chromium } from "playwright";
import { createServer } from "node:http";
import { readFileSync, existsSync, mkdirSync } from "node:fs";
import { join, extname } from "node:path";

const out = join(process.cwd(), "scripts/.harness-out");
const shots = join(out, "shots"); mkdirSync(shots, { recursive: true });
const types = { ".html": "text/html", ".css": "text/css", ".png": "image/png", ".txt": "text/plain", ".mjs": "text/javascript" };
const server = createServer((req, res) => {
  let p = decodeURIComponent(new URL(req.url, "http://x").pathname);
  if (p === "/") p = "/index.html";
  else if (!extname(p)) p = "/" + p.slice(1).replace(/\//g, "__") + ".html";
  const f = join(out, p);
  if (!existsSync(f)) { res.writeHead(404); res.end("nf"); return; }
  res.writeHead(200, { "Content-Type": types[extname(f)] || "application/octet-stream" }); res.end(readFileSync(f));
}).listen(4173);

const pages = process.argv.slice(2).length ? process.argv.slice(2) : ["/", "/product", "/product/collaborate", "/for/institutions", "/institutional-pilot", "/pricing", "/blog", "/blog/best-ai-tools-literature-review-2026", "/compare/scispace", "/about", "/recognition", "/investors", "/contact", "/faq"];
const browser = await chromium.launch({ executablePath: "/opt/pw-browsers/chromium", args: ["--no-sandbox"] }).catch(() => chromium.launch({ args: ["--no-sandbox"] }));
for (const [w, tag] of [[1440, "desktop"], [390, "mobile"]]) {
  const ctx = await browser.newContext({ viewport: { width: w, height: 900 }, deviceScaleFactor: 1 });
  const page = await ctx.newPage();
  await page.route(/^(?!http:\/\/localhost)/, (r) => r.abort());
  for (const p of pages) {
    await page.goto("http://localhost:4173" + p, { waitUntil: "domcontentloaded", timeout: 15000 });
    await page.waitForTimeout(300);
    const name = (p === "/" ? "home" : p.slice(1).replace(/\//g, "__")) + `-${tag}.png`;
    await page.screenshot({ path: join(shots, name), fullPage: true });
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth);
    console.log(`${tag} ${p} ${overflow ? "HORIZONTAL OVERFLOW" : "ok"}`);
  }
  await ctx.close();
}
await browser.close(); server.close();
