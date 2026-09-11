import Link from "next/link";
import type { Metadata } from "next";
import { productPages, engines } from "@/content/product";
import { facts } from "@/content/facts";
import { pageMetadata, softwareJsonLd, breadcrumbJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { PageHero, EngineGrid, Workflow, CtaBand, Eyebrow, Faq } from "@/components/Blocks";
import { MatchMock } from "@/components/Mocks";
import { ArrowRight } from "@/components/Icons";

export const metadata: Metadata = pageMetadata({
  title: "The Complete Research-to-Market Platform",
  description: "Six AI engines in one workspace: research intelligence, collaborator matching, real-time LaTeX, funding, integrity and network. See what's live today.",
  path: "/product",
});

const integrations = ["Google Scholar import", "ORCID import", "ResearchGate import", "LaTeX ↔ Word", "BibTeX export", "GPT · Claude · Llama-class models", "On-premise deployment"];

export default function ProductPage() {
  return (
    <>
      <JsonLd data={[softwareJsonLd(), breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Product", path: "/product" }])]} />
      <PageHero eyebrow="Product overview" title="Six engines." accent="One research graph." lead={`Everything on this page is live in production. ${facts.brand} is one workspace built on one knowledge graph, so discovery, collaborators, writing, funding and commercialisation reinforce each other instead of living in separate tabs.`} />
      <section className="section--tight">
        <div className="container"><EngineGrid /></div>
      </section>
      <section className="section section--line">
        <div className="container">
          <div className="two-col">
            <div>
              <Eyebrow>The lifecycle</Eyebrow>
              <h2 className="h2">From the first search to the first customer.</h2>
              <p className="lead mt-2">Each step feeds the next: what you discover shapes who the graph recommends, what you write informs which venues and grants surface, and every output is mapped to impact.</p>
              <div className="mt-4"><Workflow /></div>
            </div>
            <MatchMock />
          </div>
        </div>
      </section>
      <section className="section section--line">
        <div className="container">
          <Eyebrow>Deep dives</Eyebrow>
          <h2 className="h2 mb-4">Explore each capability</h2>
          <div className="grid grid-3">
            {productPages.map((p) => (
              <Link key={p.slug} href={`/product/${p.slug}`} className="card card--link">
                <div className="mono accent tiny mb-2">{p.eyebrow}</div>
                <h3 className="h3">{p.title} <span className="serif">{p.titleAccent}</span></h3>
                <p className="small">{p.description}</p>
                <div className="row mt-3 small accent" style={{ fontWeight: 600 }}>Open <ArrowRight size={14} /></div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="section section--line">
        <div className="container">
          <div className="two-col">
            <div>
              <Eyebrow>Integrations & models</Eyebrow>
              <h2 className="h2">Works with what researchers already use.</h2>
              <p className="lead mt-2">Profiles import in one click, documents move between LaTeX and Word, and a multi-LLM layer routes each task to the right model — substitutable for institutional AI policies.</p>
            </div>
            <div className="badge-row">{integrations.map((i) => <span key={i} className="pill">{i}</span>)}</div>
          </div>
        </div>
      </section>
      <section className="section section--line">
        <div className="container container--narrow">
          <Faq title="Product questions" items={[
            { q: "Which capabilities are live today?", a: engines.map((e) => e.live.join(", ")).join("; ") + "." },
            { q: "What is on the roadmap?", a: "Plagiarism and AI-content detection, hypothesis generation, outcome prediction, a conference manager, no-code statistics and a visualisation suite are in development. See the roadmap page." },
            { q: "Can institutions self-host?", a: "Yes — on-premise deployment is available, and models can be substituted to meet institutional policies." },
          ]} />
        </div>
      </section>
      <section className="section"><div className="container"><CtaBand location="product-bottom" /></div></section>
    </>
  );
}
