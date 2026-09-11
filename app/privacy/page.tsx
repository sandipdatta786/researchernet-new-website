import type { Metadata } from "next";
import { legalDocs } from "@/content/legal";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { renderMarkdown } from "@/lib/markdown";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumb } from "@/components/Blocks";

const doc = legalDocs.find((d) => d.slug === "privacy")!;

export const metadata: Metadata = pageMetadata({ title: doc.title, description: doc.description, path: "/privacy" });

export default function LegalPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: doc.title, path: "/privacy" }])} />
      <section className="section">
        <div className="container container--narrow">
          <Breadcrumb crumbs={[{ name: "Home", path: "/" }, { name: doc.title, path: "/privacy" }]} />
          <h1 className="h1">{doc.title}</h1>
          <p className="small dim mt-2">Effective {doc.effectiveDate}</p>
          <div className="prose mt-4" dangerouslySetInnerHTML={{ __html: renderMarkdown(doc.content) }} />
        </div>
      </section>
    </>
  );
}
