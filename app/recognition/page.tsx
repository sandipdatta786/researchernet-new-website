import type { Metadata } from "next";
import { facts } from "@/content/facts";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { PageHero, CtaBand } from "@/components/Blocks";

export const metadata: Metadata = pageMetadata({
  title: "Awards, Showcases & Selections",
  description: "IEEE ICME 2026, ICPR 2026, RISE Conclave, Eureka 2026 (IIT Bombay), Tiger's Pitch Top 30, IdeaSync and AI Impact Summit Expo — the timeline.",
  path: "/recognition",
});

export default function RecognitionPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Recognition", path: "/recognition" }])} />
      <PageHero eyebrow="Recognition" title="Where the work has been" accent="put in front of experts." lead="Peer-reviewed venues, deep-tech conclaves and startup competitions — listed with dates so they can be verified." />
      <section className="section--tight">
        <div className="container container--narrow">
          <div className="timeline">
            {facts.recognition.map((r) => (
              <div key={r.id}>
                <div className="t-date">{r.date} · {r.kind}</div>
                <div className="t-title">{r.title}</div>
                <div className="t-org">{r.org}</div>
                <p>{r.detail} {r.url && <a className="accent" href={r.url} rel="noopener" target="_blank">Event site →</a>}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section"><div className="container"><CtaBand location="recognition-bottom" title="See the platform behind the recognition." /></div></section>
    </>
  );
}
