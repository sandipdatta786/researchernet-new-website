import type { Metadata } from "next";
import { facts } from "@/content/facts";
import { pageMetadata, softwareJsonLd, breadcrumbJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { PageHero, Faq, CtaBand } from "@/components/Blocks";
import { PricingTable } from "@/components/PricingTable";

export const metadata: Metadata = pageMetadata({
  title: "Pricing — Free, Professional, Team & Institution",
  description: "Free for individual researchers. Professional $29/mo, Team $99/mo, institutional licences on request. INR billing and academic discounts available.",
  path: "/pricing",
});

const faqs = [
  { q: "Is there a free plan?", a: "Yes. The Free plan is free forever for individual researchers and includes semantic search, Chat with Paper within fair-use limits, profiles, collaborator suggestions and the collaborative LaTeX editor." },
  { q: "Do you bill in INR?", a: "Yes. Indian researchers and institutions can be billed in INR with a GST invoice. USD pricing is shown by default; the INR toggle shows an indicative conversion." },
  { q: "Is there an academic or student discount?", a: "Yes. Verify with an institutional email to unlock academic pricing on Professional and Team plans." },
  { q: "How does institutional licensing work?", a: "Institutions license the platform campus-wide or lab-wide, with dashboards, SSO and on-premise options. Pilot institutions receive complimentary first-year access under an MOU." },
  { q: "Can I cancel any time?", a: "Yes. Monthly plans can be cancelled at any time and remain active until the end of the billing period. See the terms for refund details." },
  { q: "What counts as a 'Team'?", a: "A lab or research group that shares projects, lab spaces and video meetings. Team pricing is per month for the group; contact us for larger groups." },
];

export default function PricingPage() {
  return (
    <>
      <JsonLd data={[softwareJsonLd(), breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Pricing", path: "/pricing" }])]} />
      <PageHero eyebrow="Pricing" title="Free for researchers." accent="Priced for institutions." lead={`No credit card to start. Upgrade when you need more AI capacity or a lab workspace; talk to us for campus-wide licences. ${facts.pricing.currencyNote}`} />
      <section className="section--tight"><div className="container"><PricingTable /></div></section>
      <section className="section section--line">
        <div className="container container--narrow"><Faq title="Pricing questions" items={faqs} /></div>
      </section>
      <section className="section"><div className="container"><CtaBand location="pricing-bottom" title="Not sure which plan?" body="Start free — most researchers do — and we'll help your institution scope a pilot when you're ready." /></div></section>
    </>
  );
}
