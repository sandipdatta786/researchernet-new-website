/**
 * THE FACTS SHEET — single source of truth for every number, name and claim on the site.
 * Every page, FAQ answer, schema block and footer line reads from here.
 * Update this file (and LinkedIn, and the deck) together so the facts never disagree.
 */

/** Env vars may be present but empty on Vercel; treat blank as unset and strip any trailing slash. */
const env = (v: string | undefined, fallback: string) => (v && v.trim() ? v.trim().replace(/\/+$/, "") : fallback);
export const SITE_URL = env(process.env.NEXT_PUBLIC_SITE_URL, "https://researchernet.com");
export const APP_URL = env(process.env.NEXT_PUBLIC_APP_URL, "https://app.researchernet.com");

export type PricingTier = { id: string; name: string; inr: number | null; inrMax?: number; period: string; blurb: string; features: string[]; cta: string; highlight?: boolean; hidden?: boolean };
export type Person = { name: string; role: string; bio: string; initials: string; slug: string; email?: string; linkedin?: string };
export type Recognition = { id: string; title: string; org: string; short?: string; date: string; kind: string; detail: string; url?: string };
export type Institution = { name: string; short: string; full?: string };

/**
 * Canonical facts. Every number below is referenced, never retyped.
 * researchersActive is null until a monthly-active figure is confirmed; while it is null
 * the researcher stat renders as "<registered> registered researchers".
 */
const researchersRegistered = "650+";
const researchersActive: number | null = null;
const researchersValue = typeof researchersActive === "number" ? String(researchersActive) : researchersRegistered;
const researchersLabel = typeof researchersActive === "number" ? "monthly active researchers" : "registered researchers";
const corpus = "300M+";
const patentNumberRaw = "202531120470";
const patentNumber = `IN ${patentNumberRaw}`;
const patentClaims = 10;
const launchDate = "3 December 2025";
const pricesAsOf = "2026-09-12";
/**
 * Product walkthrough. Accepts a YouTube watch/short URL (rendered as a click-to-load
 * lite embed) or a direct .mp4 (rendered as a <video preload="none">). Empty until the
 * final URL is supplied; while empty the demo block shows the request-a-demo link only.
 */
const walkthroughUrl = "https://www.youtube.com/watch?v=2N99vK-nv38";
const walkthroughPoster = "/media/walkthrough-poster.jpg";

const pricingTiers: PricingTier[] = [
      {
        id: "free",
        name: "Free",
        inr: 0,
        period: "forever",
        blurb: "For individual researchers getting started.",
        features: [
          `Semantic search across ${corpus} papers`,
          "Chat with Paper (fair-use limits)",
          "Researcher profile & network",
          "Collaborator suggestions",
          "Collaborative LaTeX editor",
          "Role-based access at project level",
          "Community feed & messaging",
        ],
        cta: "Start free",
      },
      {
        id: "pro",
        name: "Professional",
        inr: 999,
        period: "per month",
        blurb: "For serious researchers who want full AI capacity.",
        features: [
          "Everything in Free",
          "Higher AI limits for summaries, gap analysis & reviews",
          "Publication navigator (journal & conference matching)",
          "LaTeX ↔ Word conversion",
          "Grant alerts matched to your profile",
          "Role-based access at project level",
          "GrantOS alerts & drafts (in development)",
          "Priority support",
        ],
        cta: "Start Professional",
      },
      {
        id: "team",
        name: "Team / Lab",
        inr: 4999,
        period: "per month",
        blurb: "For labs and research groups working together.",
        features: [
          "Everything in Professional",
          "Lab spaces with shared projects",
          "HD video meetings with recording",
          "Lab-level roles and audit logs",
          "Team analytics & milestone tracking",
          "Onboarding session for your group",
        ],
        cta: "Start Team / Lab",
        highlight: true,
      },
      {
        id: "institution",
        name: "Institution",
        inr: 800000,
        inrMax: 1200000,
        period: "per year",
        blurb: "For universities, research labs and R&D organisations.",
        features: [
          "Billed annually in INR with GST invoice",
          "Campus-wide or lab-wide licence",
          "Campus-wide NAAC / NIRF / SDG dashboards",
          "On-premise deployment option",
          "SSO (in development)",
          "Research Ledger (in development)",
          "Trained campus ambassador programme",
          "Complimentary first year for pilot institutions (MOU)",
          "Dedicated success manager",
        ],
        cta: "Book a pilot",
      },
];

const institutionList: Institution[] = [
  { name: "IIT Kharagpur", short: "IIT KGP" },
  { name: "Jadavpur University", short: "JU" },
  { name: "ISI Kolkata", short: "ISI" },
  { name: "SVIST", short: "SVIST", full: "Swami Vivekananda Institute of Science and Technology" },
  { name: "Harare Institute of Technology", short: "HIT" },
];

const teamList: Person[] = [
    {
      name: "Dr. Asfak Ali",
      role: "Founder & CEO",
      bio: "PhD in Engineering from Jadavpur University, where he is guest faculty in Electronics & Telecommunication Engineering. 45+ peer-reviewed papers in computer vision, medical imaging and signal processing, in journals including Pattern Recognition and Scientific Reports, and co-inventor on filed Indian patent applications. Previously a research intern at the Cognitive Analytics Research Lab, Ulster University. Director, Deep Duo Foundation. Leads product and research science.",
      initials: "AA",
      slug: "asfak-ali",
      email: "asfak@researchernet.com",
      linkedin: "https://www.linkedin.com/in/asfakali/",
    },
    {
      name: "Sandip Datta",
      role: "Co-Founder & Director",
      bio: "27+ years at TCS, IBM and EY, where he founded a Generative AI practice. IBM patent holder. Dean of Innovation & Entrepreneurship, SVIST. Founder & CEO, AIMTECH Dynamics.",
      initials: "SD",
      slug: "sandip-datta",
      email: "sandip@researchernet.com",
      linkedin: "https://www.linkedin.com/in/sadatta/",
    },
    {
      name: "Dr. Suvojit Acharjee",
      role: "Co-Founder & Architect",
      bio: "10+ years in academia; researcher with 50+ peer-reviewed publications. Owns platform architecture.",
      initials: "SA",
      slug: "suvojit-acharjee",
      linkedin: "https://www.linkedin.com/in/suvojit-acharjee/",
    },
    {
      name: "Dr. Nandan Gupta",
      role: "Co-Founder",
      bio: "Chairman, Swami Vivekananda Group of Institutes. Co-inventor on the ResearcherNet patent application.",
      initials: "NG",
      slug: "nandan-gupta",
      linkedin: "",
    },
];

export const facts = {
  brand: "ResearcherNet",
  tagline: "Research, from paper to product.",
  description:
    "The AI-powered research collaboration platform where researchers discover literature, find collaborators, write together, secure funding and take their work to market — in one workspace.",
  legalName: "AIMTECH Dynamics Private Limited",
  cin: "U62099WB2025PTC284667",
  dpiit: "DPIIT-recognised startup",
  hq: {
    line1: "IIC, Jadavpur University",
    city: "Kolkata",
    region: "West Bengal",
    postalCode: "700032",
    country: "India",
    countryCode: "IN",
  },
  launch: { date: "2025-12-03", display: launchDate, venue: "Jadavpur University, Kolkata" },
  emails: {
    hello: "hello@researchernet.com",
    sandip: "sandip@researchernet.com",
    asfak: "asfak@researchernet.com",
    partnerships: "partnerships@researchernet.com",
    security: "security@researchernet.com",
    privacy: "privacy@researchernet.com",
  },
  social: {
    x: "https://x.com/researchernet",
    xHandle: "@researchernet",
    // Fill in when confirmed — links render only when non-empty.
    linkedin: "",
    youtube: "",
    github: "https://github.com/sandipdatta786/researchernet-new-website",
  },
  researchersRegistered,
  researchersActive,
  institutionsCount: institutionList.length,
  corpus,
  patentClaims,
  patentNumber,
  launchDate,
  founders: teamList.length,
  pricesAsOf,
  walkthroughUrl,
  walkthroughPoster,
  stats: {
    researchers: { value: researchersValue, label: researchersLabel, note: "as of September 2026" },
    papers: { value: corpus, label: "Papers indexed", note: "semantic search corpus" },
    institutions: { value: String(institutionList.length), label: "Institutions", note: "IIT Kharagpur, JU, ISI Kolkata, SVIST, HIT and more" },
    patentClaims: { value: String(patentClaims), label: "Patent claims filed", note: patentNumber },
  },
  institutions: institutionList,
  patent: {
    title: "A System of AI Driven Research Workflow",
    number: patentNumberRaw,
    filed: "2025-12-02",
    filedDisplay: "2 December 2025",
    office: "Indian Patent Office, Kolkata",
    type: "Ordinary application with complete specification",
    claims: patentClaims,
    status: "Filed — under process",
    inventors: ["Sandip Datta", "Dr. Nandan Gupta", "Dr. Asfak Ali", "Gargi Gupta"],
  },
  pricing: {
    currencyNote: "Prices in INR, billed with a GST invoice. USD is shown as an indicative conversion only.",
    inrRate: 84, // INR per USD; display-only, used to show an indicative USD figure beside the real INR price
    tiers: pricingTiers,
  },
  team: teamList,
  advisors: [] as Person[],
  recognition: [
    { id: "eureka", title: "Eureka 2026 — Zonal Round", org: "E-Cell, IIT Bombay", short: "E-Cell IIT Bombay", date: "September 2026", kind: "Selection", detail: "Selected for the Zonal round of Eureka, Asia's largest business model competition, run by the Entrepreneurship Cell of IIT Bombay.", url: "https://www.ecell.in/eureka/structure" },
    { id: "rise", title: "RISE Conclave 2026", org: "CSIR-IICB, Kolkata", short: "CSIR-IICB Kolkata", date: "6–7 September 2026", kind: "Selection", detail: "Research, Industry, Start-up & Entrepreneurship Conclave bringing together researchers, policymakers, industry leaders, venture capitalists and startups around deep-tech commercialisation. ResearcherNet presented a CSIR lab pilot proposal." },
    { id: "icpr", title: "ICPR 2026", org: "International Association for Pattern Recognition · Lyon, France", short: "IAPR · Lyon", date: "August 2026", kind: "Showcase", detail: "Showcased at the 28th International Conference on Pattern Recognition, the flagship event of the IAPR.", url: "https://icpr2026.org/" },
    { id: "icme", title: "IEEE ICME 2026", org: "IEEE · Bangkok, Thailand", short: "IEEE · Bangkok", date: "July 2026", kind: "Showcase", detail: "Showcased at the IEEE International Conference on Multimedia and Expo, sponsored by four IEEE societies.", url: "https://2026.ieeeicme.org/" },
    { id: "ideasync", title: "IdeaSync", org: "IDEAS-TIH, Indian Statistical Institute, Kolkata", short: "IDEAS-TIH, ISI Kolkata", date: "2026", kind: "Selection", detail: "Selected for IdeaSync, the industry connect meet organised by the Technology Innovation Hub at ISI Kolkata." },
    { id: "aisummit", title: "AI Impact Summit Expo 2026", org: "AI Impact Summit", short: "Expo 2026", date: "2026", kind: "Exhibitor", detail: "Part of the AI Impact Summit Expo 2026." },
    { id: "tigers", title: "Tiger's Pitch — Top 30", org: "Zee 24 Ghanta", short: "Zee 24 Ghanta", date: "2026", kind: "Award", detail: "Among the Top 30 startups in Bengal's first startup reality show on television." },
    { id: "patent", title: "Patent application filed", org: "Indian Patent Office, Kolkata", date: "2 December 2025", kind: "IP", detail: "“A System of AI Driven Research Workflow”, Application No. 202531120470, complete specification, 10 claims." },
    { id: "launch", title: "Platform launch", org: "Jadavpur University, Kolkata", date: "3 December 2025", kind: "Milestone", detail: "ResearcherNet launched at IIC Jadavpur University." },
    { id: "aic", title: "AIC Techno India", org: "Atal Incubation Centre · Pre-incubation", short: "Pre-incubation", date: "2026", kind: "Selection", detail: "Selected into the pre-incubation programme at AIC Techno India (Atal Incubation Centre)." },
  ] as Recognition[],
  // Testimonials moved to lib/testimonials.ts so the home page, /for/institutions
  // and /pilot/provenance share one list.
  investors: {
    round: "Seed",
    ask: "₹2–3 Crore",
    runway: "18 months",
    status: "Open",
    milestones: ["Convert active institutional pilots into paid licences", "Integrity suite (plagiarism & AI-content detection) live", "20–30 institutions on paid campus licences and ₹2–3 Cr ARR by month 18"],
    allocation: [
      { label: "Product & AI development", pct: 45 },
      { label: "Go-to-market & community", pct: 25 },
      { label: "Enterprise & security (SSO, compliance)", pct: 15 },
      { label: "Data & compute", pct: 10 },
      { label: "Legal & IP", pct: 5 },
    ],
  },
  lastUpdated: "2026-09-11",
};

export type Tier = PricingTier;
