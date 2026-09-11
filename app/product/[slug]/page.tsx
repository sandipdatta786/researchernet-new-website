import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { productPages } from "@/content/product";
import { pageMetadata, breadcrumbJsonLd, href as resolve } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumb, Eyebrow, Faq, CtaBand } from "@/components/Blocks";
import { mocks } from "@/components/Mocks";
import { ArrowRight, Check } from "@/components/Icons";

export function generateStaticParams() {
  return productPages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = productPages.find((x) => x.slug === slug);
  if (!p) return {};
  return pageMetadata({ title: `${p.title} ${p.titleAccent}`.replace(/[,.]$/, ""), description: p.description, path: `/product/${p.slug}` });
}

export default async function ProductDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = productPages.find((x) => x.slug === slug);
  if (!p) notFound();
  const Mock = mocks[p.mock];
  const related = productPages.filter((x) => p.related.includes(x.slug));
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Product", path: "/product" }, { name: p.nav, path: `/product/${p.slug}` }])} />
      <section className="hero" style={{ paddingBottom: "clamp(40px, 6vw, 64px)" }}>
        <div className="hero__glow" /><div className="hero__grid" />
        <div className="container" style={{ position: "relative" }}>
          <Breadcrumb crumbs={[{ name: "Home", path: "/" }, { name: "Product", path: "/product" }, { name: p.nav, path: `/product/${p.slug}` }]} />
          <div className="hero__inner">
            <div>
              <Eyebrow>{p.eyebrow}</Eyebrow>
              <h1 className="display">{p.title} <span className="serif accent">{p.titleAccent}</span></h1>
              <p className="lead mt-3">{p.lead}</p>
              <div className="row mt-4">
                <Link href={resolve(p.cta.href)} className="btn btn--primary btn--lg">{p.cta.label} <ArrowRight /></Link>
                <Link href="/pricing" className="btn btn--secondary btn--lg">Pricing</Link>
              </div>
            </div>
            <Mock />
          </div>
        </div>
      </section>
      <section className="section section--line">
        <div className="container">
          <div className="stack" style={{ gap: 48 }}>
            {p.sections.map((s, i) => (
              <div key={s.heading} className="two-col" style={{ alignItems: "start" }}>
                <div>
                  <div className="mono accent tiny mb-2">{String(i + 1).padStart(2, "0")}</div>
                  <h2 className="h2">{s.heading}</h2>
                </div>
                <div>
                  <p className="lead">{s.body}</p>
                  {s.bullets && (
                    <ul className="list-check mt-3">
                      {s.bullets.map((b) => <li key={b}><Check /><span>{b}</span></li>)}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {related.length > 0 && (
        <section className="section--tight section--line">
          <div className="container">
            <div className="label mb-3">Related</div>
            <div className="grid grid-2">
              {related.map((r) => (
                <Link key={r.slug} href={`/product/${r.slug}`} className="card card--link">
                  <div className="mono accent tiny mb-2">{r.eyebrow}</div>
                  <h3 className="h3">{r.title} <span className="serif">{r.titleAccent}</span></h3>
                  <div className="row mt-2 small accent" style={{ fontWeight: 600 }}>Open <ArrowRight size={14} /></div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
      <section className="section section--line">
        <div className="container container--narrow"><Faq title="Questions" items={p.faqs} /></div>
      </section>
      <section className="section"><div className="container"><CtaBand location={`product-${p.slug}`} /></div></section>
    </>
  );
}
