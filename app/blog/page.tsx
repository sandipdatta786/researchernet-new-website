import Link from "next/link";
import type { Metadata } from "next";
import { blogPosts } from "@/content/blog";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { PageHero, CtaBand } from "@/components/Blocks";

export const metadata: Metadata = pageMetadata({
  title: "Blog — Guides for Researchers and Institutions",
  description: "AI research workflows, finding collaborators, LaTeX, Indian grant calendars, research-to-market and institution playbooks — from the ResearcherNet team.",
  path: "/blog",
});

export default function BlogIndex() {
  const posts = [...blogPosts].sort((a, b) => (a.publishDate < b.publishDate ? 1 : -1));
  const categories = Array.from(new Set(posts.map((p) => p.category)));
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }])} />
      <PageHero eyebrow="Blog" title="Guides for researchers" accent="and the people who fund them." lead="Practical writing on AI research workflows, collaboration, Indian funding, research-to-market and institution playbooks." />
      <section className="section--tight">
        <div className="container">
          <div className="badge-row mb-4">{categories.map((c) => <span key={c} className="pill">{c}</span>)}</div>
          <div className="grid grid-3">
            {posts.map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="card card--link post-card">
                <div className="post-meta"><span>{p.category}</span><span>{p.readTime}</span></div>
                <h2 className="h3">{p.title}</h2>
                <p>{p.description}</p>
                <div className="post-cta">Read →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="section"><div className="container"><CtaBand location="blog-index" /></div></section>
    </>
  );
}
