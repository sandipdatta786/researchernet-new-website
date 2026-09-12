import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import Link from "next/link";
import { facts } from "@/content/facts";
import { ordered } from "@/lib/testimonials";
import { engines } from "@/content/product";
import type { FaqItem } from "@/content/types";
import { appSignup, faqJsonLd, href as resolve } from "@/lib/seo";
import { ArrowRight, Check, engineIcon } from "./Icons";
import { JsonLd } from "./JsonLd";
import { SignupLink } from "./TrackLink";

export function Eyebrow({ children, plain }: { children: React.ReactNode; plain?: boolean }) {
  return <div className={plain ? "eyebrow eyebrow--plain" : "eyebrow"}>{children}</div>;
}

export function StatBand() {
  const s = facts.stats;
  const items = [s.researchers, s.papers, s.institutions, s.patentClaims];
  return (
    <div className="stats" aria-label="Key numbers">
      {items.map((i) => (
        <div key={i.label}>
          <div className="stat-value">{i.value}</div>
          <div className="stat-label">{i.label}</div>
          <div className="stat-note">{i.note}</div>
        </div>
      ))}
    </div>
  );
}

export function InstitutionStrip({ label = "Researchers on the platform come from" }: { label?: string }) {
  return (
    <div className="center">
      <div className="label mb-3">{label}</div>
      <div className="strip">
        {facts.institutions.map((i) => <span key={i.name}>{i.name}</span>)}
        <span>and more</span>
      </div>
    </div>
  );
}

export function RecognitionStrip({ compact }: { compact?: boolean }) {
  const order = ["eureka", "rise", "icpr", "icme", "ideasync", "aisummit", "tigers", "aic"];
  const items = order.map((id) => facts.recognition.find((r) => r.id === id)).filter((r): r is NonNullable<typeof r> => Boolean(r));
  if (compact) {
    return (
      <div className="badge-row">
        {items.map((r) => <Link key={r.id} href="/recognition" className="pill" title={r.detail}>{r.title}</Link>)}
      </div>
    );
  }
  // Rotating ribbon: the list is rendered twice so the loop is seamless; pauses on hover, static under reduced-motion.
  return (
    <div className="center">
      <div className="label mb-3">Showcased & selected · 2026</div>
      <div className="ribbon" aria-label="Recognition">
        <div className="ribbon__track">
          {[0, 1].map((copy) => (
            <div className="ribbon__group" key={copy} aria-hidden={copy === 1}>
              {items.map((r) => (
                <Link key={`${copy}-${r.id}`} href="/recognition" className="pill ribbon__item" title={r.detail} tabIndex={copy === 1 ? -1 : undefined}>
                  <span className="dot" style={{ background: "var(--orange)" }} />{r.title}<span className="ribbon__org">{r.short ?? r.org}</span>
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function EngineGrid() {
  return (
    <div className="grid grid-3">
      {engines.map((e) => {
        const Icon = engineIcon[e.icon];
        return (
          <Link key={e.id} href={e.href} className="card card--link">
            <div className="card-icon"><Icon /></div>
            <h3 className="h3">{e.name}</h3>
            <p className="small">{e.short}</p>
            <ul className="list-check mt-3">
              {e.live.map((l) => <li key={l}><Check /><span>{l}</span></li>)}
            </ul>
            <div className="row mt-3 small accent" style={{ fontWeight: 600 }}>Explore <ArrowRight size={14} /></div>
          </Link>
        );
      })}
    </div>
  );
}

const flow = [
  { n: "01", t: "Discover", r: "replaces Elicit / Scholar tabs" },
  { n: "02", t: "Match", r: "replaces cold emails" },
  { n: "03", t: "Write", r: "replaces Overleaf" },
  { n: "04", t: "Publish", r: "replaces venue guesswork" },
  { n: "05", t: "Fund", r: "replaces grant spreadsheets" },
  { n: "06", t: "Commercialise", r: "the step nobody covered" },
];
export function Workflow() {
  return (
    <div className="flow">
      {flow.map((f) => (
        <div key={f.n}>
          <div className="step-n">{f.n}</div>
          <div className="step-t">{f.t}</div>
          <div className="step-r">{f.r}</div>
        </div>
      ))}
    </div>
  );
}

/** Photo slot: /public/people/<slug>.jpg. Missing files simply render no portrait. */
const personPhoto = (slug: string) => {
  const rel = `/people/${slug}.jpg`;
  return fs.existsSync(path.join(process.cwd(), "public", rel)) ? rel : null;
};

export function Testimonials({ limit }: { limit?: number }) {
  const items = limit ? ordered().slice(0, limit) : ordered();
  return (
    <div className={`grid grid-${Math.min(items.length, 3)}`}>
      {items.map((t) => {
        const photo = personPhoto(t.slug);
        return (
          <figure key={t.name} className="card card--flat" style={{ margin: 0 }}>
            <blockquote className="serif" style={{ margin: 0, fontSize: "1.25rem", lineHeight: 1.4, color: "var(--text)" }}>“{t.quote}”</blockquote>
            <figcaption className="mt-3 small row" style={{ gap: 12, alignItems: "center" }}>
              {photo && <Image className="avatar avatar--photo" src={photo} alt="" width={40} height={40} style={{ width: 40, height: 40, borderRadius: "50%" }} />}
              <span>
                <span style={{ fontWeight: 600, color: "var(--text)", display: "block" }}>{t.name}</span>
                <span className="dim" style={{ display: "block" }}>{t.title}</span>
                <span className="dim" style={{ display: "block" }}>{t.institution}</span>
              </span>
            </figcaption>
          </figure>
        );
      })}
    </div>
  );
}

export function Faq({ items, withSchema = true, title }: { items: FaqItem[]; withSchema?: boolean; title?: string }) {
  return (
    <div>
      {withSchema && <JsonLd data={faqJsonLd(items)} />}
      {title && <h2 className="h2 mb-4">{title}</h2>}
      <div className="faq">
        {items.map((f) => (
          <details key={f.q}>
            <summary>{f.q}</summary>
            <div className="faq__a">{f.a}</div>
          </details>
        ))}
      </div>
    </div>
  );
}

export function CtaBand({
  title = "Bring your institution's research to market.",
  body = "Start free as a researcher, or run an institution-wide MOU year with complimentary first-year access.",
  primary = { label: "Start free", href: "APP_SIGNUP" },
  secondary = { label: "Book an institutional pilot", href: "/institutional-pilot" },
  location = "cta-band",
}: {
  title?: string; body?: string; primary?: { label: string; href: string }; secondary?: { label: string; href: string } | null; location?: string;
}) {
  const p = resolve(primary.href);
  return (
    <div className="cta-band">
      <div className="maxw-md">
        <h2 className="display">{title}</h2>
        <p className="lead mt-3">{body}</p>
        <div className="row mt-4">
          {p === appSignup ? (
            <SignupLink href={p} className="btn btn--primary btn--lg" location={location}>{primary.label} <ArrowRight /></SignupLink>
          ) : (
            <Link href={p} className="btn btn--primary btn--lg">{primary.label} <ArrowRight /></Link>
          )}
          {secondary && <Link href={secondary.href} className="btn btn--secondary btn--lg">{secondary.label}</Link>}
        </div>
      </div>
    </div>
  );
}

export function Breadcrumb({ crumbs }: { crumbs: { name: string; path: string }[] }) {
  return (
    <nav className="breadcrumb" aria-label="Breadcrumb">
      {crumbs.map((c, i) => (
        <span key={c.path}>
          {i > 0 && <span style={{ marginRight: 8 }}>/</span>}
          {i === crumbs.length - 1 ? <span style={{ color: "var(--text-2)" }}>{c.name}</span> : <Link href={c.path}>{c.name}</Link>}
        </span>
      ))}
    </nav>
  );
}

export function PageHero({ eyebrow, title, accent, lead, children }: { eyebrow?: string; title: string; accent?: string; lead?: string; children?: React.ReactNode }) {
  return (
    <section className="hero" style={{ paddingBottom: "clamp(40px, 6vw, 64px)" }}>
      <div className="hero__glow" />
      <div className="hero__grid" />
      <div className="container" style={{ position: "relative" }}>
        <div className="maxw-lg">
          {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
          <h1 className="display">{title} {accent && <span className="serif accent">{accent}</span>}</h1>
          {lead && <p className="lead mt-3 maxw-md">{lead}</p>}
          {children}
        </div>
      </div>
    </section>
  );
}
