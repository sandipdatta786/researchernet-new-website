import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts } from "@/content/blog";
import { pageMetadata, articleJsonLd, breadcrumbJsonLd } from "@/lib/seo";
import { renderMarkdown } from "@/lib/markdown";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumb, CtaBand } from "@/components/Blocks";
import { BlogEngagement } from "@/components/BlogEngagement";

export function generateStaticParams() {
  return blogPosts.filter((p) => !p.draft).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = blogPosts.find((x) => x.slug === slug);
  if (!p) return {};
  return { ...pageMetadata({ title: p.title, description: p.description, path: `/blog/${p.slug}`, type: "article", publishedTime: p.publishDate, modifiedTime: p.updatedDate, noIndex: p.draft }), keywords: p.keywords };
}

const fmt = (iso: string) => new Date(iso + "T00:00:00Z").toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = blogPosts.find((x) => x.slug === slug);
  if (!p) notFound();
  const html = renderMarkdown(p.content);
  const more = blogPosts.filter((x) => x.slug !== p.slug && !x.draft).slice(0, 3);
  return (
    <>
      <JsonLd data={[articleJsonLd(p), breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }, { name: p.title, path: `/blog/${p.slug}` }])]} />
      <BlogEngagement slug={p.slug} />
      <article>
        <header className="section" style={{ paddingBottom: 32 }}>
          <div className="container container--narrow">
            <Breadcrumb crumbs={[{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }, { name: p.category, path: "/blog" }]} />
            <h1 className="h1">{p.title}</h1>
            <p className="lead mt-3">{p.description}</p>
            <div className="row mt-3 small dim" style={{ gap: 16 }}>
              <span>By <strong style={{ color: "var(--text-2)" }}>{p.author}</strong>, {p.authorRole}</span>
              <span>·</span>
              <span>Published {fmt(p.publishDate)}</span>
              {p.updatedDate && <><span>·</span><span>Updated {fmt(p.updatedDate)}</span></>}
              <span>·</span><span>{p.readTime}</span>
            </div>
          </div>
        </header>
        <div className="container container--narrow">
          <hr />
          <div className="prose mt-4" dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </article>
      <section className="section section--line">
        <div className="container">
          <div className="label mb-3">Keep reading</div>
          <div className="grid grid-3">
            {more.map((m) => (
              <Link key={m.slug} href={`/blog/${m.slug}`} className="card card--link post-card">
                <div className="post-meta"><span>{m.category}</span><span>{m.readTime}</span></div>
                <h2 className="h3">{m.title}</h2>
                <div className="post-cta">Read →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 0 }}><div className="container"><CtaBand location={`blog-${p.slug}`} /></div></section>
    </>
  );
}
