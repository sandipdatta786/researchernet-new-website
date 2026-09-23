import type { Metadata } from "next";
import { facts } from "@/content/facts";
import { pageMetadata, softwareJsonLd, breadcrumbJsonLd, productJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { PageHero, Faq, CtaBand } from "@/components/Blocks";
import { PricingTable } from "@/components/PricingTable";

export const metadata: Metadata = pageMetadata({
  title: "Pricing — Free for Researchers, Licensed for Institutions (INR)",
  description: "Free for researchers. Professional ₹999/month, Team / Lab ₹4,999/month, Institution ₹8–12 lakh a year. Billed in INR with a GST invoice.",
  path: "/pricing",
});

const faqs = [
  { q: "Is there a free plan?", a: "Yes. The Free plan is free forever for individual researchers and includes semantic search, Chat with Paper within fair-use limits, profiles, collaborator suggestions and the collaborative LaTeX editor." },
  { q: "Do you bill in INR?", a: "Yes. Prices are set in INR and billed with a GST invoice. The USD toggle shows an indicative conversion only; it is not a currency you are charged in." },
  { q: "Is there an academic or student discount?", a: "Yes. Verify with an institutional email to unlock academic pricing on the Professional and Team / Lab plans." },
  { q: "How does institutional licensing work?", a: "Institutions license the platform campus-wide or lab-wide, with dashboards, SSO and on-premise options. Pilot institutions receive complimentary first-year access under an MOU." },
  { q: "Can I cancel any time?", a: "Yes. Monthly plans can be cancelled at any time and remain active until the end of the billing period. See the terms for refund details." },
  { q: "What counts as a 'Team'?", a: "A lab or research group that shares projects, lab spaces and video meetings. Team / Lab is ₹4,999 a month for the group; contact us for larger groups or a campus-wide licence." },
];

export default function PricingPage() {
  return (
    <>
      <JsonLd data={[productJsonLd(), softwareJsonLd(), breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Pricing", path: "/pricing" }])]} />
      <PageHero eyebrow="Pricing" title="Free for researchers. Paid by institutions." accent="Anchored to grants." lead={`No credit card to start. Upgrade when you need more AI capacity or a lab workspace; talk to us for campus-wide licences. ${facts.pricing.currencyNote}`} />
      <section className="section--tight"><div className="container"><PricingTable /></div></section>
      <section className="section section--line">
        <div className="container container--narrow"><Faq title="Pricing questions" items={faqs} /></div>
      </section>
      <section className="section"><div className="container"><CtaBand location="pricing-bottom" title="Not sure which plan?" body="Start free — most researchers do — and we'll help your institution scope a pilot when you're ready." /></div></section>
    </>
  );
}
