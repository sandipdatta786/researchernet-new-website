import type { Metadata } from "next";
import { generalFaqs, pilotFaqs, productPages } from "@/content/product";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { PageHero, Faq, CtaBand } from "@/components/Blocks";
import { facts } from "@/content/facts";

export const metadata: Metadata = pageMetadata({
  title: "Frequently Asked Questions",
  description: "What ResearcherNet is, what it costs, which institutions use it, how the patent-pending AI works and how to run an institutional pilot.",
  path: "/faq",
});

export default function FaqPage() {
  const productFaqs = productPages.flatMap((p) => p.faqs);
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "FAQ", path: "/faq" }])} />
      <PageHero eyebrow="FAQ" title="Straight answers," accent="with the numbers." lead={`Everything here is kept consistent with our facts sheet. Last updated ${facts.lastUpdated}.`} />
      <section className="section--tight">
        <div className="container container--narrow stack" style={{ gap: 56 }}>
          <Faq title="About ResearcherNet" items={generalFaqs} />
          <Faq title="Product" items={productFaqs} withSchema={false} />
          <Faq title="Institutional pilots" items={pilotFaqs} withSchema={false} />
        </div>
      </section>
      <section className="section"><div className="container"><CtaBand location="faq-bottom" /></div></section>
    </>
  );
}
