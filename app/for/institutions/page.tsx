import fs from "node:fs";
import path from "node:path";
import Link from "next/link";
import type { Metadata } from "next";
import { segments } from "@/content/product";
import { publishedCaseStudies } from "@/content/customers";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumb, Eyebrow, Faq, CtaBand, InstitutionStrip, RecognitionStrip, Testimonials } from "@/components/Blocks";
import { Check } from "@/components/Icons";

const s = segments.find((x) => x.slug === "institutions")!;

export const metadata: Metadata = pageMetadata({
  title: "AI Research Platform for Universities and Institutions in India",
  description: s.description,
  path: "/for/institutions",
});

/** A download is only offered when the file actually exists in /public. */
const hasDoc = (rel: string) => fs.existsSync(path.join(process.cwd(), "public", rel));
const MOU_PDF = "/docs/ResearcherNet_MOU_Outline.pdf";

/** Same tag the roadmap uses for capabilities that are not yet live. */
const Dev = () => <span className="mock__tag">in development</span>;

const researchOffice = [
  { t: "A provenance record per project", d: "Who proposed each idea, which model and which papers it drew on, and who changed it when." },
  { t: "Exportable reports", d: "For journal submission, funder audit and patent examiners, produced from the record rather than reconstructed." },
  { t: "NAAC / NIRF / ANRF-ready dashboards", d: "Research output, collaboration signals and SDG-mapped impact in the shape accreditation bodies ask for." },
  { t: "DPDP-aligned hosting", d: "Designed in line with India's Digital Personal Data Protection Act 2023, with an on-premise option." },
  { t: "A trained campus ambassador", d: "One faculty member trained and certified to support adoption across the campus." },
];

const security = [
  "Encryption at rest and in transit — AES-256 and TLS 1.3.",
  "Role-based access at project, lab and institution level, with audit logs.",
  "Unpublished work is never used to train public models.",
  "On-premise deployment for institutions with data-residency or AI-policy requirements.",
];

export default function ForInstitutionsPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Solutions", path: "/for/researchers" }, { name: s.nav, path: "/for/institutions" }])} />

      {/* 1 · hero */}
      <section className="hero" style={{ paddingBottom: "clamp(40px, 6vw, 64px)" }}>
        <div className="hero__glow" /><div className="hero__grid" />
        <div className="container" style={{ position: "relative" }}>
          <Breadcrumb crumbs={[{ name: "Home", path: "/" }, { name: "Solutions", path: "/for/researchers" }, { name: s.nav, path: "/for/institutions" }]} />
          <div className="maxw-lg">
            <Eyebrow>{s.eyebrow}</Eyebrow>
            <h1 className="display">{s.title} <span className="serif accent">{s.titleAccent}</span></h1>
            <p className="lead mt-3 maxw-md">{s.lead}</p>
            <div className="row mt-4">
              <Link href="/institutional-pilot" className="btn btn--primary btn--lg">Book an institutional pilot</Link>
              <Link href="/pilot/provenance" className="btn btn--secondary btn--lg">See the provenance pilot</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2 · what gets in the way */}
      <section className="section section--line">
        <div className="container">
          <Eyebrow>The problem</Eyebrow>
          <h2 className="h2 mb-4">What gets in the way</h2>
          <div className="grid grid-3">
            {s.pains.map((p) => (
              <div key={p.title} className="card card--flat"><h3 className="h4">{p.title}</h3><p className="small mt-1">{p.body}</p></div>
            ))}
          </div>
        </div>
      </section>

      {/* 3 · what the research office gets */}
      <section className="section section--line">
        <div className="container">
          <Eyebrow>For the research office</Eyebrow>
          <h2 className="h2 mb-4">What the research office gets</h2>
          <div className="grid grid-3">
            {researchOffice.map((r) => (
              <div key={r.t} className="card card--flat"><h3 className="h4">{r.t}</h3><p className="small mt-2">{r.d}</p></div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 · with ResearcherNet */}
      <section className="section section--line">
        <div className="container">
          <Eyebrow>What you get</Eyebrow>
          <h2 className="h2 mb-4">With ResearcherNet</h2>
          <div className="grid grid-2">
            {s.gets.map((g) => (
              <div key={g.title} className="card card--accent"><h3 className="h4">{g.title}</h3><p className="small mt-1">{g.body}</p></div>
            ))}
          </div>
          <div className="card mt-4" style={{ borderColor: "var(--orange-line)" }}>
            <div className="mono accent tiny mb-2">Proof</div>
            <p className="lead" style={{ color: "var(--text)" }}>{s.proof}</p>
          </div>
        </div>
      </section>

      {/* 5 · security and compliance */}
      <section className="section section--line">
        <div className="container">
          <Eyebrow>Security &amp; compliance</Eyebrow>
          <h2 className="h2 mb-3">Security and compliance</h2>
          <ul className="list-check maxw-md">
            {security.map((x) => <li key={x}><Check /><span>{x}</span></li>)}
            <li><Check /><span>SSO <Dev /> — institutional email verification is available today.</span></li>
          </ul>
          <p className="small mt-3"><Link href="/product/security" className="accent">Read security &amp; privacy in full →</Link></p>
        </div>
      </section>

      {/* 6 · how a pilot runs */}
      <section className="section section--line">
        <div className="container">
          <Eyebrow>How a pilot runs</Eyebrow>
          <h2 className="h2 mb-4">Two tracks, one review at month six</h2>
          <div className="grid grid-2">
            <div className="card card--accent">
              <div className="mono accent tiny mb-2">Track 1 · complimentary</div>
              <h3 className="h3">Institution-wide MOU year</h3>
              <p className="small mt-2">Onboarding in weeks 1–4, AI matchmaking live in months 2–3, a joint outcomes review by month 6. Access for every researcher and a trained campus ambassador.</p>
              <p className="small mt-2"><Link href="/institutional-pilot" className="accent">Read the MOU programme →</Link></p>
            </div>
            <div className="card">
              <div className="mono accent tiny mb-2">Track 2 · fixed departmental fee</div>
              <h3 className="h3">90-day provenance pilot</h3>
              <p className="small mt-2">One department, 25–50 researchers, building a provenance and integrity record for AI-assisted work. The fee is credited in full against a campus licence if the institution proceeds.</p>
              <p className="small mt-2"><Link href="/pilot/provenance" className="accent">Read the provenance pilot →</Link></p>
            </div>
          </div>
        </div>
      </section>

      {/* 7 · institutions represented */}
      <section className="section--tight section--line">
        <div className="container">
          <InstitutionStrip label="Institutions represented on the platform" />
          {publishedCaseStudies().length > 0 && (
            <p className="small dim mt-3 center"><Link href="/customers" className="accent">Read the institutional case studies →</Link></p>
          )}
        </div>
      </section>

      {/* 7b · what researchers say */}
      <section className="section section--line">
        <div className="container">
          <Eyebrow>In their words</Eyebrow>
          <h2 className="h2 mb-4">What researchers say</h2>
          <Testimonials />
        </div>
      </section>

      {/* 8 · recognition */}
      <section className="section--tight section--line"><div className="container"><RecognitionStrip /></div></section>

      {/* 9 · FAQ */}
      <section className="section section--line">
        <div className="container container--narrow"><Faq title="Questions" items={s.faqs} /></div>
      </section>

      {/* 10 · CTA */}
      <section className="section">
        <div className="container">
          <CtaBand
            location="segment-institutions-bottom"
            primary={{ label: "Book an institutional pilot", href: "/institutional-pilot" }}
            secondary={hasDoc(MOU_PDF) ? { label: "Download the MOU outline (PDF)", href: MOU_PDF } : { label: "How an institutional pilot runs", href: "/institutional-pilot" }}
          />
        </div>
      </section>
    </>
  );
}
