import Link from "next/link";
import { facts } from "@/content/facts";
import { productPages, segments } from "@/content/product";
import { Brand } from "./Nav";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            <Brand />
            <p className="muted small mt-2" style={{ maxWidth: 320 }}>{facts.tagline} {facts.description}</p>
            <div className="badge-row mt-3">
              <span className="pill">Patent pending · {facts.patentNumber}</span>
              <span className="pill">Made in India</span>
            </div>
            <p className="dim tiny mt-3">
              {facts.legalName} · CIN {facts.cin}<br />
              {facts.hq.line1}, {facts.hq.city} {facts.hq.postalCode}, {facts.hq.country}
            </p>
          </div>
          <div>
            <h4>Product</h4>
            <ul>
              <li><Link href="/product">Overview</Link></li>
              {productPages.map((p) => <li key={p.slug}><Link href={`/product/${p.slug}`}>{p.nav}</Link></li>)}
              <li><Link href="/pricing">Pricing</Link></li>
            </ul>
          </div>
          <div>
            <h4>Solutions</h4>
            <ul>
              {segments.map((s) => <li key={s.slug}><Link href={`/for/${s.slug}`}>{s.nav}</Link></li>)}
              <li><Link href="/institutional-pilot">Institutional pilot</Link></li>
            </ul>
          </div>
          <div>
            <h4>Resources</h4>
            <ul>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/compare">Compare</Link></li>
              <li><Link href="/faq">FAQ</Link></li>
              <li><Link href="/press">Press kit</Link></li>
              <li><a href="/llms.txt">llms.txt</a></li>
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/recognition">Recognition</Link></li>
              <li><Link href="/investors">Investors</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/privacy">Privacy</Link></li>
              <li><Link href="/terms">Terms</Link></li>
              <li><Link href="/product/security">Security</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <span>© {year} {facts.legalName}. All rights reserved.</span>
          <span className="row" style={{ gap: 16 }}>
            <a href={`mailto:${facts.emails.hello}`}>{facts.emails.hello}</a>
            <a href={facts.social.x} rel="noopener" target="_blank">X {facts.social.xHandle}</a>
            {facts.social.linkedin && <a href={facts.social.linkedin} rel="noopener" target="_blank">LinkedIn</a>}
            {facts.social.youtube && <a href={facts.social.youtube} rel="noopener" target="_blank">YouTube</a>}
          </span>
        </div>
      </div>
    </footer>
  );
}
