import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { docPages } from "@/content/docs";
import { renderMarkdown } from "@/lib/markdown";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumb, Eyebrow, Faq, CtaBand } from "@/components/Blocks";

export function generateStaticParams() {
  return docPages.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const d = docPages.find((x) => x.slug === slug);
  if (!d) return {};
  return pageMetadata({ title: d.title, description: d.description, path: `/docs/${d.slug}` });
}

export default async function DocPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const d = docPages.find((x) => x.slug === slug);
  if (!d) notFound();
  const crumbs = [{ name: "Home", path: "/" }, { name: "Docs", path: `/docs/${docPages[0].slug}` }, { name: d.nav, path: `/docs/${d.slug}` }];
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <section className="section">
        <div className="container container--narrow">
          <Breadcrumb crumbs={crumbs} />
          <Eyebrow>Docs</Eyebrow>
          <h1 className="h1">{d.title}</h1>
          <div className="prose mt-4" dangerouslySetInnerHTML={{ __html: renderMarkdown(d.content) }} />

          {d.related && d.related.length > 0 && (
            <div className="card mt-6">
              <div className="mono accent tiny mb-2">Related</div>
              <p className="small">{d.related.map((r, i) => (
                <span key={r.href}>{i > 0 ? " · " : ""}<Link href={r.href} className="accent">{r.label} →</Link></span>
              ))}</p>
            </div>
          )}

          <div className="mt-6">
            <div className="mono accent tiny mb-2">All docs</div>
            <div className="badge-row">
              {docPages.filter((x) => x.slug !== d.slug).map((x) => (
                <Link key={x.slug} href={`/docs/${x.slug}`} className="pill">{x.nav}</Link>
              ))}
            </div>
          </div>
        </div>
      </section>
      {d.faqs && d.faqs.length > 0 && (
        <section className="section section--line">
          <div className="container container--narrow"><Faq title="Questions" items={d.faqs} /></div>
        </section>
      )}
      <section className="section"><div className="container"><CtaBand location={`docs-${d.slug}`} /></div></section>
    </>
  );
}
