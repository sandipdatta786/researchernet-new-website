import Link from "next/link";
import type { Metadata } from "next";
import { facts } from "@/content/facts";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { PageHero, Eyebrow, StatBand, RecognitionStrip } from "@/components/Blocks";
import { LeadForm } from "@/components/Forms";
import { Check } from "@/components/Icons";

export const metadata: Metadata = pageMetadata({
  title: "Investors — Seed Round Open",
  description: "Patent-pending AI research infrastructure with 650+ researchers, institutional pilots and IEEE/IAPR showcases. Seed round open — request the deck.",
  path: "/investors",
});

export default function InvestorsPage() {
  const inv = facts.investors;
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Investors", path: "/investors" }])} />
      <PageHero eyebrow={`${inv.round} round · ${inv.status}`} title="The infrastructure layer for" accent="research-to-market." lead="ResearcherNet is building the rails that convert research into collaborations, funding and companies — starting with India's 1,500+ universities and 40 lakh researchers, validated on global stages." />
      <section className="section--tight"><div className="container"><StatBand /></div></section>
      <section className="section section--line">
        <div className="container">
          <div className="sidebar-layout">
            <div className="stack" style={{ gap: 48 }}>
              <div>
                <Eyebrow>Why now</Eyebrow>
                <h2 className="h2">A live product, a filed patent, and institutions asking for pilots.</h2>
                <ul className="list-check mt-3">
                  {[
                    `Live platform since ${facts.launch.display}; ${facts.stats.researchers.value} active researchers across IIT Kharagpur, Jadavpur University, ISI Kolkata, SVIST, Harare Institute of Technology and more`,
                    `Indian patent application ${facts.patent.number} (${facts.patent.claims} claims) — the collaborator-recommendation, semantic-synthesis and impact-alignment modules are already live`,
                    "Further IP held as copyright, trade secret and know-how: the multi-LLM orchestration layer and the interaction dataset generated across the researcher base",
                    "Showcased at IEEE ICME 2026 and ICPR 2026; selected for RISE Conclave, IdeaSync, AI Impact Summit Expo; Tiger's Pitch Top 30; Eureka 2026 Zonals",
                    "Institutional MOU programme with complimentary pilot year and campus ambassadors; research-to-industry bridge presented to CSIR laboratories",
                  ].map((l) => <li key={l}><Check /><span>{l}</span></li>)}
                </ul>
              </div>
              <div>
                <Eyebrow>The round</Eyebrow>
                <div className="grid grid-3">
                  <div className="card card--flat"><div className="stat-value">{inv.ask}</div><div className="stat-label">{inv.round} ask</div></div>
                  <div className="card card--flat"><div className="stat-value">{inv.runway}</div><div className="stat-label">Runway</div></div>
                  <div className="card card--flat"><div className="stat-value">4</div><div className="stat-label">Founders</div></div>
                </div>
                <h3 className="h3 mt-4 mb-2">Use of funds</h3>
                <div className="alloc">
                  {inv.allocation.map((a) => (
                    <div key={a.label}><span>{a.label}</span><span className="num">{a.pct}%</span><div className="bar"><i style={{ width: `${a.pct}%` }} /></div></div>
                  ))}
                </div>
                <h3 className="h3 mt-4 mb-2">Month-18 milestones</h3>
                <ul className="list-check">{inv.milestones.map((m) => <li key={m}><Check /><span>{m}</span></li>)}</ul>
              </div>
              <div>
                <Eyebrow>Market</Eyebrow>
                <p className="lead">India spends over ₹1.2 lakh crore a year on R&D and is the third-largest producer of research papers, yet its research-to-commercialisation conversion rate sits below 3%. Globally, 20,000+ universities, 50,000+ companies with R&D teams and 8M+ active researchers need collaboration infrastructure that ends at market, not at the PDF.</p>
                <div className="mt-3"><RecognitionStrip compact /></div>
              </div>
              <p className="tiny dim">This page is for information only and does not constitute an offer or solicitation of securities. Figures are as published in the company’s September 2026 materials.</p>
            </div>
            <aside className="card sticky">
              <div className="mono accent tiny mb-2">Request the deck</div>
              <h3 className="h3 mb-3">Talk to the founders</h3>
              <LeadForm kind="investor" />
              <p className="tiny dim mt-3">Or email <a className="accent" href={`mailto:${facts.emails.sandip}`}>{facts.emails.sandip}</a> · <Link href="/press" className="accent">press kit</Link></p>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
