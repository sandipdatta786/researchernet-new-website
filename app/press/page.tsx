import type { Metadata } from "next";
import Image from "next/image";
import { facts } from "@/content/facts";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { PageHero, Eyebrow, RecognitionStrip } from "@/components/Blocks";

export const metadata: Metadata = pageMetadata({
  title: "Press Kit",
  description: "ResearcherNet boilerplate, facts, founder bios, logos and contact for media. Patent-pending AI research collaboration platform built in Kolkata.",
  path: "/press",
});

export default function PressPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Press", path: "/press" }])} />
      <PageHero eyebrow="Press kit" title="Facts, boilerplate," accent="and assets." lead={`For journalists, conference organisers and partners. Media contact: ${facts.emails.hello}.`} />
      <section className="section--tight">
        <div className="container">
          <div className="grid grid-2">
            <div className="card">
              <Eyebrow>Boilerplate · short</Eyebrow>
              <p className="muted">ResearcherNet is an AI-powered research collaboration and research-to-market platform built in Kolkata, India. Launched in December 2025 at Jadavpur University, it unifies literature discovery, collaborator matching, collaborative writing, funding discovery and commercialisation in one workspace, and is used by 650+ researchers. Its core system is patent-pending (IN {facts.patent.number}).</p>
            </div>
            <div className="card">
              <Eyebrow>Boilerplate · long</Eyebrow>
              <p className="muted small">ResearcherNet, a product of {facts.legalName}, is an AI-powered research collaboration and research-to-market platform headquartered at the IIC, Jadavpur University, Kolkata. Launched on {facts.launch.display}, the platform gives researchers one workspace for semantic literature discovery across 300M+ papers, AI collaborator matching on a research knowledge graph, real-time collaborative LaTeX writing, funding discovery and commercialisation, with UN SDG impact mapping for institutions. More than 650 researchers from institutions including IIT Kharagpur, Jadavpur University, ISI Kolkata, SVIST and the Harare Institute of Technology use the platform. The underlying system is the subject of Indian patent application {facts.patent.number}, filed {facts.patent.filedDisplay}. ResearcherNet was showcased at IEEE ICME 2026 (Bangkok) and ICPR 2026 (Lyon), selected for RISE Conclave 2026, IdeaSync (IDEAS-TIH, ISI Kolkata) and the AI Impact Summit Expo 2026, placed in the Top 30 of Tiger's Pitch, and selected for the Zonal round of Eureka 2026, E-Cell IIT Bombay.</p>
            </div>
          </div>
          <div className="grid grid-3 mt-3">
            <div className="card card--flat">
              <Eyebrow>Logos</Eyebrow>
              <div style={{ background: "#000", padding: 16, borderRadius: 10 }}><Image src="/brand/lockup.png" alt="ResearcherNet logo lockup" width={452} height={123} /></div>
              <div className="row mt-2 small"><a className="accent" href="/brand/lockup.png" download>Lockup (PNG)</a><a className="accent" href="/brand/mark-512.png" download>Mark (PNG)</a></div>
              <p className="tiny dim mt-2">Use on dark backgrounds. Do not recolour, rotate or add effects. Orange #F97316.</p>
            </div>
            <div className="card card--flat">
              <Eyebrow>Founder bios</Eyebrow>
              {facts.team.map((t) => <p key={t.name} className="small"><strong>{t.name}</strong>, {t.role}. {t.bio}</p>)}
            </div>
            <div className="card card--flat">
              <Eyebrow>Key facts</Eyebrow>
              <ul className="list-check small">
                <li><span>·</span><span>Launch: {facts.launch.display}, {facts.launch.venue}</span></li>
                <li><span>·</span><span>Researchers: {facts.stats.researchers.value}</span></li>
                <li><span>·</span><span>Patent: IN {facts.patent.number}, filed {facts.patent.filedDisplay}, {facts.patent.claims} claims</span></li>
                <li><span>·</span><span>Entity: {facts.legalName}, CIN {facts.cin}</span></li>
                <li><span>·</span><span>HQ: {facts.hq.line1}, {facts.hq.city}</span></li>
              </ul>
            </div>
          </div>
          <div className="mt-6"><RecognitionStrip /></div>
        </div>
      </section>
    </>
  );
}
