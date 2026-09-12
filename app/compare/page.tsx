import Link from "next/link";
import type { Metadata } from "next";
import { comparePages, compareIndexIntro } from "@/content/compare";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { renderMarkdown } from "@/lib/markdown";
import { JsonLd } from "@/components/JsonLd";
import { PageHero, CtaBand } from "@/components/Blocks";
import { ArrowRight } from "@/components/Icons";

export const metadata: Metadata = pageMetadata({
  title: "ResearcherNet vs SciSpace, Elicit, Consensus, Overleaf, Paperpal and ChatGPT",
  description: "Honest, feature-by-feature comparisons of AI research tools — and when to choose each. Compare ResearcherNet with SciSpace, Elicit, Consensus, ResearchGate, Overleaf, Paperpal and ChatGPT.",
  path: "/compare",
});

export default function CompareIndex() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Compare", path: "/compare" }])} />
      <PageHero eyebrow="Compare" title="Which research tool," accent="for which job?" />
      <section className="section--tight">
        <div className="container container--narrow prose" dangerouslySetInnerHTML={{ __html: renderMarkdown(compareIndexIntro) }} />
      </section>
      <section className="section--tight">
        <div className="container">
          <div className="grid grid-3">
            {comparePages.map((c) => (
              <Link key={c.slug} href={`/compare/${c.slug}`} className="card card--link">
                <div className="mono accent tiny mb-2">ResearcherNet vs</div>
                <h2 className="h3">{c.competitor}</h2>
                <p className="small">{c.description}</p>
                <div className="row mt-3 small accent" style={{ fontWeight: 600 }}>Read the comparison <ArrowRight size={14} /></div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="section"><div className="container"><CtaBand location="compare-index" /></div></section>
    </>
  );
}
