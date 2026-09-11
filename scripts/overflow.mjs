import { chromium } from "playwright";
import { createServer } from "node:http";
import { readFileSync, existsSync } from "node:fs";
import { join, extname } from "node:path";
const out = join(process.cwd(), "scripts/.harness-out");
const server = createServer((req, res) => { let p = new URL(req.url, "http://x").pathname; if (p === "/") p = "/index.html"; else if (!extname(p)) p = "/" + p.slice(1).replace(/\//g, "__") + ".html"; const f = join(out, p); if (!existsSync(f)) { res.writeHead(404); return res.end(); } res.end(readFileSync(f)); }).listen(4174);
const b = await chromium.launch({ args: ["--no-sandbox"] });
const page = await b.newPage({ viewport: { width: 390, height: 800 } });
await page.route(/^(?!http:\/\/localhost)/, (r) => r.abort());
for (const p of process.argv.slice(2)) {
  await page.goto("http://localhost:4174" + p, { waitUntil: "domcontentloaded" });
  const wide = await page.evaluate(() => [...document.querySelectorAll("*")].filter((e) => e.getBoundingClientRect().right > 391).slice(0, 8).map((e) => e.tagName + "." + (e.className && typeof e.className === "string" ? e.className.split(" ").join(".") : "") + " r=" + Math.round(e.getBoundingClientRect().right)));
  console.log(p, wide);
}
await b.close(); server.close();
