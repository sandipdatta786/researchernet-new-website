import type { Metadata } from "next";
import { facts, SITE_URL, APP_URL } from "@/content/facts";
import type { FaqItem } from "@/content/types";

export const appSignup = `${APP_URL}/signup`;
export const appLogin = `${APP_URL}/login`;

/** Resolve the "APP_SIGNUP" sentinel used in content files. */
export const href = (h: string) => (h === "APP_SIGNUP" ? appSignup : h);

export function pageMetadata(input: {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  noIndex?: boolean;
}): Metadata {
  const url = `${SITE_URL}${input.path === "/" ? "" : input.path}`;
  const title = input.title.includes("ResearcherNet") ? input.title : `${input.title} | ResearcherNet`;
  return {
    title,
    description: input.description,
    alternates: { canonical: url },
    robots: input.noIndex ? { index: false, follow: false } : undefined,
    openGraph: {
      title,
      description: input.description,
      url,
      siteName: "ResearcherNet",
      type: input.type ?? "website",
      locale: "en_IN",
      ...(input.publishedTime ? { publishedTime: input.publishedTime } : {}),
      ...(input.modifiedTime ? { modifiedTime: input.modifiedTime } : {}),
    },
    twitter: { card: "summary_large_image", site: facts.social.xHandle, title, description: input.description },
  };
}

export const organizationJsonLd = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: facts.brand,
  legalName: facts.legalName,
  url: SITE_URL,
  logo: `${SITE_URL}/brand/mark-512.png`,
  description: facts.description,
  foundingDate: facts.launch.date,
  address: {
    "@type": "PostalAddress",
    streetAddress: facts.hq.line1,
    addressLocality: facts.hq.city,
    addressRegion: facts.hq.region,
    postalCode: facts.hq.postalCode,
    addressCountry: facts.hq.countryCode,
  },
  email: facts.emails.hello,
  sameAs: [facts.social.x, facts.social.linkedin, facts.social.youtube, facts.social.github].filter(Boolean),
  founder: facts.team.map((t) => ({ "@type": "Person", name: t.name, jobTitle: t.role })),
  contactPoint: [{ "@type": "ContactPoint", contactType: "sales", email: facts.emails.partnerships, availableLanguage: ["en"] }],
});

export const softwareJsonLd = () => ({
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: facts.brand,
  applicationCategory: "Research collaboration platform",
  operatingSystem: "Web",
  url: APP_URL,
  description: facts.description,
  publisher: { "@id": `${SITE_URL}/#organization` },
  offers: facts.pricing.tiers
    .filter((t) => t.usd !== null)
    .map((t) => ({ "@type": "Offer", name: t.name, price: t.usd, priceCurrency: "USD", category: t.period === "forever" ? "free" : "subscription" })),
  featureList: [
    "Semantic search across 300M+ papers", "Chat with Paper", "Research gap analysis", "AI collaborator matching",
    "Collaborative LaTeX editor", "HD video meetings", "Grant alerts", "Commercialisation readiness", "SDG impact mapping",
  ],
});

export const faqJsonLd = (items: FaqItem[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: items.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
});

export const breadcrumbJsonLd = (crumbs: { name: string; path: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: crumbs.map((c, i) => ({ "@type": "ListItem", position: i + 1, name: c.name, item: `${SITE_URL}${c.path}` })),
});

export const articleJsonLd = (p: { title: string; description: string; slug: string; publishDate: string; updatedDate?: string; author: string }) => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: p.title,
  description: p.description,
  url: `${SITE_URL}/blog/${p.slug}`,
  datePublished: p.publishDate,
  dateModified: p.updatedDate ?? p.publishDate,
  author: { "@type": "Person", name: p.author },
  publisher: { "@id": `${SITE_URL}/#organization` },
  image: `${SITE_URL}/blog/${p.slug}/opengraph-image`,
  mainEntityOfPage: `${SITE_URL}/blog/${p.slug}`,
});
