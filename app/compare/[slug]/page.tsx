import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { comparePages } from "@/content/compare";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { renderMarkdown } from "@/lib/markdown";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumb, Eyebrow, Faq, CtaBand } from "@/components/Blocks";
import { Check } from "@/components/Icons";

export function generateStaticParams() {
  return comparePages.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const c = comparePages.find((x) => x.slug === slug);
  if (!c) return {};
  return pageMetadata({ title: c.title, description: c.description, path: `/compare/${c.slug}` });
}

const Cell = ({ v }: { v: string }) => {
  const k = v.toLowerCase();
  const cls = k === "yes" ? "yes" : k === "no" ? "no" : k === "partial" ? "part" : "";
  return <span className={cls}>{k === "yes" ? "✓ Yes" : k === "no" ? "— No" : k === "partial" ? "◐ Partial" : v}</span>;
};

export default async function ComparePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = comparePages.find((x) => x.slug === slug);
  if (!c) notFound();
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Compare", path: "/compare" }, { name: `vs ${c.competitor}`, path: `/compare/${c.slug}` }])} />
      <section className="section" style={{ paddingBottom: 32 }}>
        <div className="container container--narrow">
          <Breadcrumb crumbs={[{ name: "Home", path: "/" }, { name: "Compare", path: "/compare" }, { name: c.competitor, path: `/compare/${c.slug}` }]} />
          <Eyebrow>Comparison</Eyebrow>
          <h1 className="h1">ResearcherNet <span className="serif accent">vs</span> {c.competitor}</h1>
          <p className="small dim mt-3">Facts about {c.competitor} verified on {c.lastVerified} from <a className="accent" href={c.competitorUrl} rel="noopener nofollow" target="_blank">{c.competitorUrl.replace(/^https?:\/\//, "")}</a>. Tell us if something changed: hello@researchernet.com.</p>
          <div className="prose mt-4" dangerouslySetInnerHTML={{ __html: renderMarkdown(c.intro) }} />
        </div>
      </section>
      <section className="section--tight">
        <div className="container">
          <div className="grid grid-2">
            <div className="card card--flat">
              <h2 className="h3 mb-3">What {c.competitor} does well</h2>
              <ul className="list-check">{c.whatTheyDoWell.map((b) => <li key={b}><Check /><span>{b}</span></li>)}</ul>
            </div>
            <div className="card card--accent">
              <h2 className="h3 mb-3">Where ResearcherNet differs</h2>
              <ul className="list-check">{c.whereWeDiffer.map((b) => <li key={b}><Check /><span>{b}</span></li>)}</ul>
            </div>
          </div>
        </div>
      </section>
      <section className="section--tight">
        <div className="container">
          <h2 className="h2 mb-3">Feature by feature</h2>
          <div className="table-wrap">
            <table className="cmp">
              <thead><tr><th>Capability</th><th>ResearcherNet</th><th>{c.competitor}</th></tr></thead>
              <tbody>
                {c.rows.map((r) => (
                  <tr key={r.feature}><td>{r.feature}</td><td><Cell v={r.us} /></td><td><Cell v={r.them} /></td></tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="tiny dim mt-2">“In development” marks ResearcherNet roadmap items that are not live; we never present roadmap features as shipped.</p>
        </div>
      </section>
      <section className="section--tight">
        <div className="container">
          <div className="grid grid-2">
            <div className="card">
              <h2 className="h3 mb-3">Choose {c.competitor} if…</h2>
              <ul className="list-check">{c.chooseThemIf.map((b) => <li key={b}><Check /><span>{b}</span></li>)}</ul>
            </div>
            <div className="card">
              <h2 className="h3 mb-3">Choose ResearcherNet if…</h2>
              <ul className="list-check">{c.chooseUsIf.map((b) => <li key={b}><Check /><span>{b}</span></li>)}</ul>
            </div>
          </div>
          <div className="prose mt-4 maxw-lg" dangerouslySetInnerHTML={{ __html: renderMarkdown(c.pricingNote) }} />
        </div>
      </section>
      <section className="section section--line">
        <div className="container container--narrow"><Faq title="Questions" items={c.faqs} /></div>
      </section>
      <section className="section--tight">
        <div className="container">
          <div className="badge-row">
            {comparePages.filter((x) => x.slug !== c.slug).map((x) => <Link key={x.slug} href={`/compare/${x.slug}`} className="pill">vs {x.competitor}</Link>)}
          </div>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 0 }}><div className="container"><CtaBand location={`compare-${c.slug}`} /></div></section>
    </>
  );
}
