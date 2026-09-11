import type { Metadata } from "next";
import { pilotFaqs } from "@/content/product";
import { facts } from "@/content/facts";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { PageHero, Eyebrow, Faq, InstitutionStrip } from "@/components/Blocks";
import { LeadForm } from "@/components/Forms";
import { Check } from "@/components/Icons";

export const metadata: Metadata = pageMetadata({
  title: "Start a 90-Day Institutional Pilot",
  description: "Onboard your researchers in four weeks, activate AI matchmaking, measure outcomes by month six. Complimentary first year under our institutional MOU.",
  path: "/institutional-pilot",
});

const phases = [
  { t: "Phase 1 · Onboarding", w: "Weeks 1–4", d: "Researcher profiles for participating faculty and scholars created via one-click Google Scholar / ORCID import. Lab technology portfolio listed for discovery. Campus ambassador nominated and trained. Zero cost, minimal effort." },
  { t: "Phase 2 · Activation", w: "Months 2–3", d: "AI matchmaking goes live: research gap analysis, collaborator suggestions and inbound industry queries routed to your research office or business-development team." },
  { t: "Phase 3 · Measurement", w: "Months 4–6", d: "Joint review of engagement metrics — collaboration requests, industry enquiries, technology views, publications supported — against your current baseline, with a translation-outcomes report for institutional review." },
];

const gets = [
  "Complimentary, institution-wide access for one year under an MOU — no financial commitment",
  "One faculty member trained and certified as ResearcherNet Campus Ambassador",
  "Orientation and onboarding sessions for the research community",
  "A live institutional dashboard: research output, collaboration signals, SDG-mapped impact",
  "Increased visibility of licensable technologies to industry and MSMEs",
  "Early or preferential access to new features, and a direct line to the product team",
  "Periodic review of adoption, usage and research outcomes",
  "Option — never an obligation — of a continuing institutional licence",
];

export default function PilotPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Institutional pilot", path: "/institutional-pilot" }])} />
      <PageHero eyebrow="Institutional pilot programme" title="Ninety days to a" accent="research-to-market campus." lead="A structured pilot for universities, research institutes and CSIR-style laboratories: onboarding in weeks, matchmaking in months, measured outcomes by month six — with complimentary first-year access under our institutional MOU." />
      <section className="section--tight"><div className="container"><InstitutionStrip label="Institutions whose researchers are already on the platform" /></div></section>
      <section className="section section--line">
        <div className="container">
          <Eyebrow>How a pilot runs</Eyebrow>
          <h2 className="h2 mb-4">Three phases, one review</h2>
          <div className="grid grid-3">
            {phases.map((p) => (
              <div key={p.t} className="card">
                <div className="mono accent tiny">{p.w}</div>
                <h3 className="h3 mt-2">{p.t}</h3>
                <p className="small">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section section--line" id="mou">
        <div className="container">
          <div className="sidebar-layout">
            <div>
              <Eyebrow>What the institution gets</Eyebrow>
              <h2 className="h2 mb-3">The MOU in plain language</h2>
              <ul className="list-check">{gets.map((g) => <li key={g}><Check /><span>{g}</span></li>)}</ul>
              <h3 className="h3 mt-6 mb-2">Security & data governance</h3>
              <p className="muted">Unpublished work stays protected: encryption at rest and in transit, granular role-based access control, optional end-to-end encryption, and privacy-respecting AI that never trains public models on confidential manuscripts. On-premise deployment is available for institutional requirements. Authorised users register with their institutional email address.</p>
              <h3 className="h3 mt-4 mb-2">Who signs</h3>
              <p className="muted">The MOU is between {facts.legalName} (operating ResearcherNet) and the institution. It records complimentary access, the campus ambassador programme, review cadence and the option to explore a continuing licence. Full text is shared on request.</p>
            </div>
            <aside className="card sticky">
              <div className="mono accent tiny mb-2">Request a pilot</div>
              <h3 className="h3 mb-3">Tell us about your institution</h3>
              <LeadForm kind="pilot" />
            </aside>
          </div>
        </div>
      </section>
      <section className="section section--line">
        <div className="container container--narrow"><Faq title="Pilot questions" items={pilotFaqs} /></div>
      </section>
    </>
  );
}
