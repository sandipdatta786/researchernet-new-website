import Link from "next/link";
import type { Metadata } from "next";
import { facts } from "@/content/facts";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { SITE_URL } from "@/content/facts";
import { JsonLd } from "@/components/JsonLd";
import { PageHero, Eyebrow, StatBand, InstitutionStrip, RecognitionStrip, CtaBand } from "@/components/Blocks";

export const metadata: Metadata = pageMetadata({
  title: "About ResearcherNet — Built at IIC Jadavpur University, Kolkata",
  description: "Launched December 2025 by AIMTECH Dynamics. Meet the founders behind India's AI-powered research-to-market platform, and the story so far.",
  path: "/about",
});

const personJsonLd = facts.team.map((t) => ({
  "@context": "https://schema.org", "@type": "Person", name: t.name, jobTitle: t.role, worksFor: { "@id": `${SITE_URL}/#organization` }, url: `${SITE_URL}/about`,
}));

export default function AboutPage() {
  return (
    <>
      <JsonLd data={[...personJsonLd, breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "About", path: "/about" }])]} />
      <PageHero eyebrow="About" title="Built in Kolkata," accent="for every researcher." lead="ResearcherNet exists because exceptional research deserves a path to real-world impact — and because the tools researchers rely on were fragmented, expensive and built without the Indian academic ecosystem in mind." />
      <section className="section--tight">
        <div className="container container--narrow">
          <div className="card card--accent">
            <div className="mono accent tiny mb-2">ResearcherNet in 100 words · updated {facts.lastUpdated}</div>
            <p className="lead" style={{ color: "var(--text)" }}>
              ResearcherNet is an AI-powered research collaboration and research-to-market platform developed by {facts.legalName} and headquartered at the {facts.hq.line1}, {facts.hq.city}, India. Launched on {facts.launch.display}, it gives researchers one workspace for semantic literature discovery across {facts.stats.papers.value} papers, AI collaborator matching, real-time collaborative LaTeX writing, funding discovery and commercialisation. More than 650 researchers from institutions including IIT Kharagpur, Jadavpur University, ISI Kolkata, SVIST and the Harare Institute of Technology use the platform. Its core system is the subject of Indian patent application {facts.patent.number} (filed {facts.patent.filedDisplay}) and has been showcased at IEEE ICME 2026 and ICPR 2026.
            </p>
          </div>
        </div>
      </section>
      <section className="section--tight"><div className="container"><StatBand /></div></section>
      <section className="section section--line">
        <div className="container">
          <div className="two-col" style={{ alignItems: "start" }}>
            <div>
              <Eyebrow>The story</Eyebrow>
              <h2 className="h2">From a Jadavpur University launch to two IEEE/IAPR stages in nine months.</h2>
            </div>
            <div className="prose">
              <p>India produces the third-largest volume of research publications in the world, yet a PhD scholar at a state university cannot afford four separate platform subscriptions, a researcher at a state institution cannot easily discover collaborators at IITs working on adjacent problems, and none of the incumbent tools help anyone find funding or commercialise their work.</p>
              <p>ResearcherNet launched on {facts.launch.display} at {facts.launch.venue} to unify the research lifecycle — discovery, collaboration, writing, publishing, funding and commercialisation — in a single AI-native workspace. On 2 December 2025 the team filed a patent application for the AI-driven research-workflow system underneath it.</p>
              <p>In 2026 the platform was showcased at IEEE ICME 2026 in Bangkok and ICPR 2026 in Lyon, selected for RISE Conclave 2026, IdeaSync at IDEAS-TIH (ISI Kolkata) and the AI Impact Summit Expo 2026, placed in the Top 30 of Tiger’s Pitch, and selected for the Zonal round of Eureka 2026 at IIT Bombay. Today more than 650 researchers use it.</p>
              <p>ResearcherNet is a product of {facts.legalName}, a {facts.dpiit} incubated at IIC Jadavpur University, with pre-incubation support from AIC Techno India.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section section--line">
        <div className="container">
          <Eyebrow>Leadership</Eyebrow>
          <h2 className="h2 mb-4">Founders</h2>
          <div className="grid grid-4">
            {facts.team.map((t) => (
              <div key={t.name} className="card">
                <div className="avatar avatar--lg mb-3" aria-hidden>{t.initials}</div>
                <h3 className="h4">{t.name}</h3>
                <div className="accent small mt-1">{t.role}</div>
                <p className="small mt-2">{t.bio}</p>
                {t.email && <a className="small dim" href={`mailto:${t.email}`}>{t.email}</a>}
              </div>
            ))}
          </div>
          {facts.advisors.length > 0 && (
            <>
              <h2 className="h3 mt-6 mb-3">Advisory</h2>
              <div className="grid grid-4">
                {facts.advisors.map((t) => (
                  <div key={t.name} className="card card--flat">
                    <div className="avatar avatar--lg avatar--muted mb-3" aria-hidden>{t.initials}</div>
                    <h3 className="h4">{t.name}</h3>
                    <div className="accent small mt-1">{t.role}</div>
                    <p className="small mt-2">{t.bio}</p>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
      <section className="section--tight section--line"><div className="container"><InstitutionStrip /></div></section>
      <section className="section--tight section--line"><div className="container"><RecognitionStrip /></div></section>
      <section className="section section--line">
        <div className="container">
          <div className="grid grid-3">
            <div className="card card--flat"><div className="mono accent tiny mb-2">Entity</div><p className="small">{facts.legalName}<br />CIN {facts.cin}<br />{facts.dpiit}</p></div>
            <div className="card card--flat"><div className="mono accent tiny mb-2">Headquarters</div><p className="small">{facts.hq.line1}<br />{facts.hq.city} {facts.hq.postalCode}, {facts.hq.country}</p></div>
            <div className="card card--flat"><div className="mono accent tiny mb-2">Contact</div><p className="small"><a href={`mailto:${facts.emails.hello}`}>{facts.emails.hello}</a><br /><Link href="/press" className="accent">Press kit →</Link></p></div>
          </div>
        </div>
      </section>
      <section className="section"><div className="container"><CtaBand location="about-bottom" /></div></section>
    </>
  );
}
