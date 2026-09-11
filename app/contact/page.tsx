import type { Metadata } from "next";
import { facts } from "@/content/facts";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/Blocks";
import { LeadForm } from "@/components/Forms";
import { Mail, Pin } from "@/components/Icons";

export const metadata: Metadata = pageMetadata({
  title: "Contact ResearcherNet",
  description: "Pilots, partnerships, press and support. Email hello@researchernet.com or use the form — we reply within one working day. IIC Jadavpur University, Kolkata.",
  path: "/contact",
});

const topicMap: Record<string, string> = { industry: "Industry partnership", funders: "Funders & government", press: "Press", demo: "Live demo", pilot: "Institutional pilot", support: "Support" };

export default async function ContactPage({ searchParams }: { searchParams: Promise<{ topic?: string }> }) {
  const { topic } = await searchParams;
  const defaultTopic = topic ? topicMap[topic] : undefined;
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }])} />
      <PageHero eyebrow="Contact" title="Talk to a" accent="human." lead="Pilots, partnerships, press, investors or support — one form, one working day." />
      <section className="section--tight">
        <div className="container">
          <div className="sidebar-layout sidebar-layout--even">
            <div className="stack" style={{ gap: 20 }}>
              <div className="card card--flat">
                <div className="card-icon"><Mail /></div>
                <h2 className="h4">Email</h2>
                <p className="small mt-1"><a href={`mailto:${facts.emails.hello}`}>{facts.emails.hello}</a> — general<br /><a href={`mailto:${facts.emails.partnerships}`}>{facts.emails.partnerships}</a> — institutions & industry<br /><a href={`mailto:${facts.emails.security}`}>{facts.emails.security}</a> — responsible disclosure<br /><a href={`mailto:${facts.emails.privacy}`}>{facts.emails.privacy}</a> — data protection</p>
              </div>
              <div className="card card--flat">
                <div className="card-icon"><Pin /></div>
                <h2 className="h4">Office</h2>
                <p className="small mt-1">{facts.legalName}<br />{facts.hq.line1}<br />{facts.hq.city} {facts.hq.postalCode}, {facts.hq.region}, {facts.hq.country}</p>
              </div>
              <div className="card card--flat">
                <h2 className="h4">Founders</h2>
                <p className="small mt-1">{facts.team.filter((t) => t.email).map((t) => (<span key={t.name}>{t.name} — <a href={`mailto:${t.email}`}>{t.email}</a><br /></span>))}</p>
              </div>
            </div>
            <div className="card">
              <h2 className="h3 mb-3">Send a message</h2>
              <LeadForm kind="contact" defaultTopic={defaultTopic} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
