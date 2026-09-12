import Link from "next/link";
import type { Metadata } from "next";
import { facts } from "@/content/facts";
import { generalFaqs } from "@/content/product";
import { blogPosts } from "@/content/blog";
import { pageMetadata, softwareJsonLd, appSignup } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { Eyebrow, StatBand, InstitutionStrip, RecognitionStrip, EngineGrid, Workflow, Testimonials, Faq, CtaBand } from "@/components/Blocks";
import { SearchMock } from "@/components/Mocks";
import { DemoVideo } from "@/components/Video";
import { PricingTable } from "@/components/PricingTable";
import { SignupLink } from "@/components/TrackLink";
import { ArrowRight, Sparkle, Globe, Award, Network } from "@/components/Icons";

export const metadata: Metadata = pageMetadata({
  title: "ResearcherNet — AI Research Collaboration, From Paper to Product",
  titleAbsolute: true,
  description: `Discover literature, find collaborators, write together, fund and commercialise — in one AI workspace. ${facts.researchersRegistered} researchers. Patent-pending. Start free.`,
  path: "/",
});

const problems = [
  { n: "6+ months", t: "to find the right collaborator", d: "Researchers work in institutional silos; the co-author who changes the paper is two departments away.", src: 1, cite: "[source 1]" },
  { n: "6–12 months", t: "for a literature review", d: "Critical gaps stay hidden and effort is duplicated across labs.", src: 2, cite: "[source 2]" },
  { n: "90%", t: "of research never commercialises", d: "No clear path from lab bench to market; billions in potential innovation stays locked.", src: 3, cite: "[source 3]" },
];

const differentiators = [
  { icon: Sparkle, t: "Patent-pending AI orchestration", d: "A research knowledge graph with LLM synthesis and adaptive pruning drives recommendations — the system in Indian patent application 202531120470." },
  { icon: Network, t: "One workflow, not five tabs", d: "Discovery, collaborators, writing, publishing, funding and commercialisation share one workspace and one graph." },
  { icon: Globe, t: "Built in India, validated globally", d: "Headquartered at IIC Jadavpur University; showcased at IEEE ICME 2026 in Bangkok and ICPR 2026 in Lyon." },
  { icon: Award, t: "A research-to-industry bridge", d: "The only research platform whose job ends at market — readiness signals, industry connections and SDG-mapped impact." },
];

export default function Home() {
  const posts = blogPosts.filter((p) => !p.draft).slice(0, 3);
  return (
    <>
      <JsonLd data={softwareJsonLd()} />

      {/* Hero */}
      <section className="hero">
        <div className="hero__glow" />
        <div className="hero__grid" />
        <div className="container">
          <div className="hero__inner">
            <div>
              <Eyebrow>Patent-pending · Made in India · IEEE ICME & ICPR 2026</Eyebrow>
              <h1 className="display">
                Research, <span className="serif accent">from paper to product.</span>
              </h1>
              <p className="lead mt-3 maxw-md">
                The AI-powered workspace where researchers discover literature, find collaborators, write together, secure funding and take their work to market — in one place.
              </p>
              <div className="row mt-4">
                <SignupLink href={appSignup} className="btn btn--primary btn--lg" location="hero">Start free <ArrowRight /></SignupLink>
                <Link href="/institutional-pilot" className="btn btn--secondary btn--lg">Book an institutional pilot</Link>
              </div>
              <p className="small dim mt-3">Free for individual researchers · No credit card · {facts.stats.researchers.value} researchers already on the platform</p>
            </div>
            <SearchMock />
          </div>
          <div className="mt-6">
            <StatBand />
          </div>
        </div>
      </section>

      <section className="section--tight">
        <div className="container"><InstitutionStrip /></div>
      </section>

      {/* Problem */}
      <section className="section section--line">
        <div className="container">
          <Eyebrow>The problem</Eyebrow>
          <h2 className="h2 maxw-lg">Global research is brilliant, fragmented, and disconnected from the market.</h2>
          <div className="grid grid-3 mt-4">
            {problems.map((p) => (
              <div key={p.t} className="card card--flat">
                <div className="stat-value accent">{p.n}<sup className="cite"><a href={`#src-${p.src}`} aria-label={`Source ${p.src}`}>{p.src}</a></sup></div>
                <h3 className="h4 mt-2">{p.t}</h3>
                <p className="small mt-1">{p.d}</p>
              </div>
            ))}
          </div>
          <p className="tiny dim mt-3">Sources: {problems.map((p, i) => (<span key={p.src} id={`src-${p.src}`}>{i > 0 ? " · " : ""}{p.src}. {p.cite}</span>))}</p>
        </div>
      </section>

      {/* Engines */}
      <section className="section section--line">
        <div className="container">
          <div className="row between mb-4" style={{ alignItems: "flex-end" }}>
            <div className="maxw-lg">
              <Eyebrow>The platform</Eyebrow>
              <h2 className="h2">Six engines. One workspace. <span className="serif accent">All live.</span></h2>
            </div>
            <Link href="/product" className="btn btn--secondary">Product overview <ArrowRight size={16} /></Link>
          </div>
          <EngineGrid />
        </div>
      </section>

      {/* Workflow */}
      <section className="section section--line">
        <div className="container">
          <Eyebrow>One workflow</Eyebrow>
          <h2 className="h2 maxw-lg">From the first search to the first customer — without leaving the workspace.</h2>
          <p className="lead mt-2 maxw-md">Point tools solve one step each. ResearcherNet runs the whole lifecycle on one research graph, so what you discover shapes who you meet, what you write and what you fund.</p>
          <div className="mt-4"><Workflow /></div>
        </div>
      </section>

      {/* Demo */}
      <section className="section section--line">
        <div className="container">
          <div className="two-col">
            <div>
              <Eyebrow>See it work</Eyebrow>
              <h2 className="h2">Live platform, <span className="serif accent">not a deck.</span></h2>
              <p className="lead mt-2">Launched on {facts.launch.display} at {facts.launch.venue}. Every capability shown on this site is in production today; everything else lives on the <Link href="/product/roadmap" className="accent">roadmap</Link>.</p>
              <ul className="list-check mt-3">
                {[`Semantic search across ${facts.corpus} papers with Chat with Paper`, "Collaborator matching on a research knowledge graph", "Collaborative LaTeX with version control and LaTeX ↔ Word", "Grant alerts, commercialisation readiness and SDG mapping"].map((l) => (
                  <li key={l}><span style={{ color: "var(--orange)" }}>✓</span><span>{l}</span></li>
                ))}
              </ul>
            </div>
            <DemoVideo />
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="section section--line">
        <div className="container">
          <Eyebrow>How we’re different</Eyebrow>
          <h2 className="h2 maxw-lg">Competitors solve a step. ResearcherNet solves the pipeline.</h2>
          <div className="grid grid-2 mt-4">
            {differentiators.map((d) => (
              <div key={d.t} className="card">
                <div className="card-icon"><d.icon /></div>
                <h3 className="h3">{d.t}</h3>
                <p className="small">{d.d}</p>
              </div>
            ))}
          </div>
          <div className="row mt-3">
            <Link href="/product/technology" className="btn btn--ghost">Read about the technology <ArrowRight size={16} /></Link>
            <Link href="/compare" className="btn btn--ghost">Compare with SciSpace, Elicit, Overleaf… <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      {/* Recognition */}
      <section className="section--tight section--line">
        <div className="container"><RecognitionStrip /></div>
      </section>

      {/* Testimonials */}
      <section className="section section--line">
        <div className="container">
          <Eyebrow>Researcher notes</Eyebrow>
          <h2 className="h2">Built for researchers, <span className="serif accent">by researchers.</span></h2>
          <div className="mt-4"><Testimonials /></div>
        </div>
      </section>

      {/* Who for */}
      <section className="section section--line">
        <div className="container">
          <Eyebrow>Who it’s for</Eyebrow>
          <h2 className="h2">One platform, four kinds of research organisation.</h2>
          <div className="grid grid-4 mt-4">
            {[
              ["Researchers & students", "Five tools' worth of research in one free workspace.", "/for/researchers"],
              ["Universities & institutions", "Institution-wide access, ambassadors, impact dashboards.", "/for/institutions"],
              ["Industry & R&D", "Find the researcher, the lab or the technology in minutes.", "/for/industry"],
              ["Funders & government", "SDG-mapped outcomes and cross-institution analytics.", "/for/funders"],
            ].map(([t, d, h]) => (
              <Link key={h} href={h} className="card card--link">
                <h3 className="h4">{t}</h3>
                <p className="small mt-1">{d}</p>
                <div className="row mt-3 small accent" style={{ fontWeight: 600 }}>Learn more <ArrowRight size={14} /></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing teaser */}
      <section className="section section--line" id="pricing">
        <div className="container">
          <div className="row between mb-4" style={{ alignItems: "flex-end" }}>
            <div className="maxw-md">
              <Eyebrow>Pricing</Eyebrow>
              <h2 className="h2">Free for researchers. <span className="serif accent">Priced for institutions.</span></h2>
            </div>
            <Link href="/pricing" className="btn btn--secondary">Full pricing <ArrowRight size={16} /></Link>
          </div>
          <PricingTable compact />
        </div>
      </section>

      {/* Blog */}
      <section className="section section--line">
        <div className="container">
          <div className="row between mb-4" style={{ alignItems: "flex-end" }}>
            <div>
              <Eyebrow>From the blog</Eyebrow>
              <h2 className="h2">Guides for researchers and institutions.</h2>
            </div>
            <Link href="/blog" className="btn btn--secondary">All posts <ArrowRight size={16} /></Link>
          </div>
          <div className="grid grid-3">
            {posts.map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="card card--link post-card">
                <div className="post-meta"><span>{p.category}</span><span>{p.readTime}</span></div>
                <h3 className="h3">{p.title}</h3>
                <p>{p.description}</p>
                <div className="post-cta">Read →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section--line">
        <div className="container container--narrow">
          <Eyebrow>Straight answers</Eyebrow>
          <h2 className="h2 mb-4">Frequently asked questions</h2>
          <Faq items={generalFaqs.slice(0, 8)} />
          <p className="small mt-3"><Link href="/faq" className="accent">All questions →</Link></p>
        </div>
      </section>

      <section className="section">
        <div className="container"><CtaBand location="home-bottom" /></div>
      </section>
    </>
  );
}
