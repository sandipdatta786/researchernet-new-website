import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { segments } from "@/content/product";
import { pageMetadata, breadcrumbJsonLd, href as resolve, appSignup } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumb, Eyebrow, Faq, CtaBand, InstitutionStrip, RecognitionStrip } from "@/components/Blocks";
import { SignupLink } from "@/components/TrackLink";
import { ArrowRight } from "@/components/Icons";

export function generateStaticParams() {
  return segments.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const s = segments.find((x) => x.slug === slug);
  if (!s) return {};
  return pageMetadata({ title: `ResearcherNet for ${s.nav}`, description: s.description, path: `/for/${s.slug}` });
}

export default async function SegmentPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = segments.find((x) => x.slug === slug);
  if (!s) notFound();
  const primary = resolve(s.cta.href);
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Solutions", path: "/for/researchers" }, { name: s.nav, path: `/for/${s.slug}` }])} />
      <section className="hero" style={{ paddingBottom: "clamp(40px, 6vw, 64px)" }}>
        <div className="hero__glow" /><div className="hero__grid" />
        <div className="container" style={{ position: "relative" }}>
          <Breadcrumb crumbs={[{ name: "Home", path: "/" }, { name: "Solutions", path: "/for/researchers" }, { name: s.nav, path: `/for/${s.slug}` }]} />
          <div className="maxw-lg">
            <Eyebrow>{s.eyebrow}</Eyebrow>
            <h1 className="display">{s.title} <span className="serif accent">{s.titleAccent}</span></h1>
            <p className="lead mt-3 maxw-md">{s.lead}</p>
            <div className="row mt-4">
              {primary === appSignup ? (
                <SignupLink href={primary} className="btn btn--primary btn--lg" location={`segment-${s.slug}`}>{s.cta.label} <ArrowRight /></SignupLink>
              ) : (
                <Link href={primary} className="btn btn--primary btn--lg">{s.cta.label} <ArrowRight /></Link>
              )}
              {s.secondary && <Link href={s.secondary.href} className="btn btn--secondary btn--lg">{s.secondary.label}</Link>}
            </div>
          </div>
        </div>
      </section>
      <section className="section section--line">
        <div className="container">
          <div className="two-col" style={{ alignItems: "start" }}>
            <div>
              <Eyebrow>The problem</Eyebrow>
              <h2 className="h2">What gets in the way</h2>
              <div className="stack mt-3">
                {s.pains.map((p) => (
                  <div key={p.title} className="card card--flat"><h3 className="h4">{p.title}</h3><p className="small mt-1">{p.body}</p></div>
                ))}
              </div>
            </div>
            <div>
              <Eyebrow>What you get</Eyebrow>
              <h2 className="h2">With ResearcherNet</h2>
              <div className="stack mt-3">
                {s.gets.map((g) => (
                  <div key={g.title} className="card card--accent"><h3 className="h4">{g.title}</h3><p className="small mt-1">{g.body}</p></div>
                ))}
              </div>
            </div>
          </div>
          <div className="card mt-4" style={{ borderColor: "var(--orange-line)" }}>
            <div className="mono accent tiny mb-2">Proof</div>
            <p className="lead" style={{ color: "var(--text)" }}>{s.proof}</p>
          </div>
        </div>
      </section>
      <section className="section--tight section--line"><div className="container"><InstitutionStrip /></div></section>
      <section className="section--tight section--line"><div className="container"><RecognitionStrip /></div></section>
      <section className="section section--line">
        <div className="container container--narrow"><Faq title="Questions" items={s.faqs} /></div>
      </section>
      <section className="section"><div className="container"><CtaBand location={`segment-${s.slug}-bottom`} primary={{ label: s.cta.label, href: s.cta.href }} secondary={s.slug === "institutions" ? null : { label: "Book an institutional pilot", href: "/institutional-pilot" }} /></div></section>
    </>
  );
}
