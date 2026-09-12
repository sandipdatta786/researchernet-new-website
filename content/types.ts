export type FaqItem = { q: string; a: string };

export type CompareRow = {
  feature: string;
  /** "yes" | "no" | "partial" or free text */
  us: string;
  them: string;
};

export type ComparePage = {
  slug: string; // e.g. "scispace"
  competitor: string; // display name, e.g. "SciSpace"
  competitorUrl: string;
  title: string; // SEO title, e.g. "ResearcherNet vs SciSpace (2026): Which AI research platform fits you?"
  description: string; // meta description ≤155 chars
  intro: string; // 2–3 paragraphs markdown: what each is, who it's for, honest framing
  whatTheyDoWell: string[]; // 3–5 honest bullets
  whereWeDiffer: string[]; // 3–5 bullets
  rows: CompareRow[]; // 8–12 feature rows
  chooseThemIf: string[]; // 2–4 bullets
  chooseUsIf: string[]; // 2–4 bullets
  pricingNote: string; // markdown paragraph with public pricing of both, dated
  faqs: FaqItem[]; // 3–4
  lastVerified: string; // ISO date the competitor facts were checked
};

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  keywords: string[];
  category: string;
  readTime: string;
  publishDate: string; // ISO
  updatedDate?: string; // ISO
  author: string;
  authorRole: string;
  content: string; // markdown
  /** Draft: reachable at its URL for review, but kept out of listings, sitemap, llms.txt and search. */
  draft?: boolean;
};

export type LegalDoc = {
  slug: "privacy" | "terms";
  title: string;
  description: string;
  effectiveDate: string;
  content: string; // markdown
};
