import Link from "next/link";
import type { Metadata } from "next";
import { facts } from "@/content/facts";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumb, Eyebrow, CtaBand, Testimonials } from "@/components/Blocks";
import { LeadForm } from "@/components/Forms";
import { Check } from "@/components/Icons";

export const metadata: Metadata = pageMetadata({
  title: "AI Research Provenance Pilot for Universities and CSIR Labs",
  description: "A 90-day provenance and integrity pilot for one department: record what AI contributed, verify results, and export an audit-ready provenance report.",
  path: "/pilot/provenance",
});

/** Same tag the roadmap uses for capabilities that are not yet live. */
const Dev = () => <span className="mock__tag">in development</span>;

const delivers = [
  { t: "Who proposed each idea", d: "Every hypothesis, proof, block of code and passage of text is attributed to the person or model that originated it." },
  { t: "Which model and which papers it drew on", d: "The model invoked and the literature it retrieved are recorded against the project, not left in a chat history." },
  { t: "Who changed it and when", d: "A versioned record of every edit, so contribution can be reconstructed months later." },
  { t: "A verification check before a result is accepted", d: "An explicit step where an AI-assisted result is confirmed or rejected by a named researcher.", dev: true },
  { t: "An exportable provenance report", d: "For journal submission, patent filing or a funder audit.", dev: true },
];

const scope: { k: string; v: React.ReactNode }[] = [
  { k: "Who", v: "One department, 25–50 researchers, a faculty lead, a research-office or IP-cell nominee." },
  { k: "Live from day one", v: "Knowledge graph, semantic search and gap analysis, collaborator matching, versioned LaTeX, encryption, RBAC, on-premise option." },
  { k: "Built with you during the pilot", v: <>Contribution and model ledger <Dev />, verification step <Dev />, provenance export <Dev />. The department shapes the fields.</> },
  { k: "Outcomes at day 90", v: "Projects with a complete provenance record; verified vs rejected AI-assisted results; time from idea to submission-ready record; one provenance report accepted by a journal, examiner or funder." },
  { k: "Commercials", v: "A fixed departmental fee, credited in full against a campus licence if the institution proceeds." },
  { k: "What we ask", v: "A faculty lead, a research-office nominee, two half-day onboarding sessions, and a letter of intent so the pilot can be named in our public materials." },
];

const why = [
  "Vendor-neutral: the record sits above the model, and is hosted by the institution.",
  `Patent-pending workflow system ${facts.patentNumber}, validated at IEEE ICME and ICPR 2026.`,
  "INR billing, on-premise deployment, DPDP-aligned, with NAAC / NIRF / ANRF-ready reporting.",
];

export default function ProvenancePilotPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Provenance pilot", path: "/pilot/provenance" }])} />
      <section className="hero" style={{ paddingBottom: "clamp(40px, 6vw, 64px)" }}>
        <div className="hero__glow" /><div className="hero__grid" />
        <div className="container" style={{ position: "relative" }}>
          <Breadcrumb crumbs={[{ name: "Home", path: "/" }, { name: "Provenance pilot", path: "/pilot/provenance" }]} />
          <div className="maxw-lg">
            <Eyebrow>Provenance &amp; integrity pilot</Eyebrow>
            <h1 className="display">AI-research provenance and integrity pilot — <span className="serif accent">90 days, one department.</span></h1>
            <p className="lead mt-3 maxw-md">AI tools now draft hypotheses, proofs, code and manuscripts. Journals, funders and patent examiners are beginning to ask what a model contributed, whose idea it was, and whether unpublished work was exposed to a vendor. No institution can answer that from a record today.</p>
            <div className="row mt-4">
              <Link href="#request" className="btn btn--primary btn--lg">Request the pilot</Link>
              <a href="/docs/ResearcherNet_Provenance_Pilot_Offer.pdf" className="btn btn--secondary btn--lg" download>Download the pilot offer (PDF)</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--line">
        <div className="container">
          <Eyebrow>What the pilot delivers</Eyebrow>
          <h2 className="h2 maxw-lg">A provenance record for every project.</h2>
          <div className="grid grid-3 mt-4">
            {delivers.map((d) => (
              <div key={d.t} className="card card--flat">
                <h3 className="h4">{d.t} {d.dev ? <Dev /> : null}</h3>
                <p className="small mt-2">{d.d}</p>
              </div>
            ))}
          </div>
          <p className="lead mt-4 maxw-md">Hosted for the institution, on-premise where required, and never used to train any model.</p>
        </div>
      </section>

      <section className="section section--line">
        <div className="container">
          <Eyebrow>Scope</Eyebrow>
          <h2 className="h2 mb-4">What is in the ninety days.</h2>
          <div className="table-wrap">
            <table className="cmp">
              <tbody>
                {scope.map((r) => (
                  <tr key={r.k}><th scope="row" style={{ width: "26%" }}>{r.k}</th><td>{r.v}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="tiny dim mt-2">“In development” marks ResearcherNet roadmap items that are not live; we never present roadmap features as shipped.</p>
        </div>
      </section>

      <section className="section section--line">
        <div className="container">
          <Eyebrow>Why ResearcherNet</Eyebrow>
          <h2 className="h2 maxw-lg">Why ResearcherNet and not the model vendor.</h2>
          <ul className="list-check mt-3 maxw-md">
            {why.map((w) => <li key={w}><Check /><span>{w}</span></li>)}
          </ul>
        </div>
      </section>

      <section className="section section--line">
        <div className="container">
          <Eyebrow>In their words</Eyebrow>
          <h2 className="h2 mb-4">What researchers say</h2>
          <Testimonials />
        </div>
      </section>

      <section className="section section--line" id="request">
        <div className="container">
          <div className="sidebar-layout">
            <div>
              <Eyebrow>Request the pilot</Eyebrow>
              <h2 className="h2">Start with one department.</h2>
              <p className="lead mt-3">Tell us which department, how many researchers, and what a successful ninety days would look like. We reply with the pilot offer and a proposed start date.</p>
              <p className="small mt-3">Or read the <Link href="/institutional-pilot" className="accent">institution-wide MOU programme</Link>, which is complimentary for the first year.</p>
            </div>
            <aside className="card sticky">
              <div className="mono accent tiny mb-2">Provenance pilot</div>
              <h3 className="h3 mb-3">Talk to the team</h3>
              <LeadForm kind="pilot" />
              <p className="tiny dim mt-3">Or email <a className="accent" href={`mailto:${facts.emails.partnerships}`}>{facts.emails.partnerships}</a>.</p>
            </aside>
          </div>
        </div>
      </section>

      <section className="section"><div className="container"><CtaBand location="provenance-pilot-bottom" /></div></section>
    </>
  );
}
