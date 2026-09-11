/**
 * THE FACTS SHEET — single source of truth for every number, name and claim on the site.
 * Every page, FAQ answer, schema block and footer line reads from here.
 * Update this file (and LinkedIn, and the deck) together so the facts never disagree.
 */

/** Env vars may be present but empty on Vercel; treat blank as unset and strip any trailing slash. */
const env = (v: string | undefined, fallback: string) => (v && v.trim() ? v.trim().replace(/\/+$/, "") : fallback);
export const SITE_URL = env(process.env.NEXT_PUBLIC_SITE_URL, "https://researchernet.com");
export const APP_URL = env(process.env.NEXT_PUBLIC_APP_URL, "https://app.researchernet.com");

export type PricingTier = { id: string; name: string; usd: number | null; period: string; blurb: string; features: string[]; cta: string; highlight?: boolean };
export type Person = { name: string; role: string; bio: string; initials: string; email?: string };
export type Recognition = { id: string; title: string; org: string; date: string; kind: string; detail: string; url?: string };
export type Institution = { name: string; short: string; full?: string };

const pricingTiers: PricingTier[] = [
      {
        id: "free",
        name: "Free",
        usd: 0,
        period: "forever",
        blurb: "For individual researchers getting started.",
        features: [
          "Semantic search across 300M+ papers",
          "Chat with Paper (fair-use limits)",
          "Researcher profile & network",
          "Collaborator suggestions",
          "Collaborative LaTeX editor",
          "Community feed & messaging",
        ],
        cta: "Start free",
      },
      {
        id: "pro",
        name: "Professional",
        usd: 29,
        period: "per month",
        blurb: "For serious researchers who want full AI capacity.",
        features: [
          "Everything in Free",
          "Higher AI limits for summaries, gap analysis & reviews",
          "Publication navigator (journal & conference matching)",
          "LaTeX ↔ Word conversion",
          "Grant alerts matched to your profile",
          "Priority support",
        ],
        cta: "Start Professional",
        highlight: true,
      },
      {
        id: "team",
        name: "Team",
        usd: 99,
        period: "per month",
        blurb: "For labs and research groups working together.",
        features: [
          "Everything in Professional",
          "Lab spaces with shared projects",
          "HD video meetings with recording",
          "Role-based access control",
          "Team analytics & milestone tracking",
          "Onboarding session for your group",
        ],
        cta: "Start Team",
      },
      {
        id: "institution",
        name: "Institution",
        usd: null,
        period: "custom",
        blurb: "For universities, research labs and R&D organisations.",
        features: [
          "Campus-wide or lab-wide licence",
          "Institutional dashboard & SDG impact mapping",
          "SSO and on-premise deployment options",
          "Trained campus ambassador programme",
          "Complimentary first year for pilot institutions (MOU)",
          "Dedicated success manager",
        ],
        cta: "Book a pilot",
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
  launch: { date: "2025-12-03", display: "3 December 2025", venue: "Jadavpur University, Kolkata" },
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
  stats: {
    researchers: { value: "650+", label: "Active researchers", note: "as of September 2026" },
    papers: { value: "300M+", label: "Papers indexed", note: "semantic search corpus" },
    institutions: { value: "5+", label: "Institutions", note: "IIT Kharagpur, JU, ISI Kolkata, SVIST, HIT and more" },
    patentClaims: { value: "10", label: "Patent claims filed", note: "IN 202531120470" },
  },
  institutions: [
    { name: "IIT Kharagpur", short: "IIT KGP" },
    { name: "Jadavpur University", short: "JU" },
    { name: "ISI Kolkata", short: "ISI" },
    { name: "SVIST", short: "SVIST", full: "Swami Vivekananda Institute of Science and Technology" },
    { name: "Harare Institute of Technology", short: "HIT" },
  ] as Institution[],
  patent: {
    title: "A System of AI Driven Research Workflow",
    number: "202531120470",
    filed: "2025-12-02",
    filedDisplay: "2 December 2025",
    office: "Indian Patent Office, Kolkata",
    type: "Ordinary application with complete specification",
    claims: 10,
    status: "Filed — under process",
    inventors: ["Sandip Datta", "Dr. Nandan Gupta", "Dr. Asfak Ali", "Gargi Gupta"],
  },
  pricing: {
    currencyNote: "Prices in USD; INR billing with GST invoice available for Indian institutions.",
    inrRate: 84, // display-only approximation for the INR toggle; confirm before launch
    tiers: pricingTiers,
  },
  team: [
    {
      name: "Dr. Asfak Ali",
      role: "Founder & CEO",
      bio: "PhD, Jadavpur University. Director, Deep Duo Foundation. Leads product and research science.",
      initials: "AA",
      email: "asfak@researchernet.com",
    },
    {
      name: "Sandip Datta",
      role: "Co-Founder & Director",
      bio: "27+ years at TCS, IBM and EY, where he founded a Generative AI practice. IBM patent holder. Dean of Innovation & Entrepreneurship, SVIST. Founder & CEO, AIMTECH Dynamics.",
      initials: "SD",
      email: "sandip@researchernet.com",
    },
    {
      name: "Dr. Suvojit Acharjee",
      role: "Co-Founder & Architect",
      bio: "10+ years in academia; researcher with 50+ peer-reviewed publications. Owns platform architecture.",
      initials: "SA",
    },
    {
      name: "Utathya Aich",
      role: "Co-Founder & Full-Stack Lead",
      bio: "3+ years building production-ready AI applications and research systems. Leads engineering.",
      initials: "UA",
    },
  ] as Person[],
  advisors: [
    {
      name: "Dr. Nandan Gupta",
      role: "Advisor",
      bio: "Chairman, Swami Vivekananda Group of Institutes. Co-inventor on the ResearcherNet patent application.",
      initials: "NG",
    },
  ] as Person[],
  recognition: [
    { id: "eureka", title: "Eureka 2026 — Zonal Round", org: "E-Cell, IIT Bombay", date: "September 2026", kind: "Selection", detail: "Selected for the Zonal round of Eureka, Asia's largest business model competition, run by the Entrepreneurship Cell of IIT Bombay.", url: "https://www.ecell.in/eureka/structure" },
    { id: "rise", title: "RISE Conclave 2026", org: "CSIR-IICB, Kolkata", date: "6–7 September 2026", kind: "Selection", detail: "Research, Industry, Start-up & Entrepreneurship Conclave bringing together researchers, policymakers, industry leaders, venture capitalists and startups around deep-tech commercialisation. ResearcherNet presented a CSIR lab pilot proposal." },
    { id: "icpr", title: "ICPR 2026", org: "International Association for Pattern Recognition · Lyon, France", date: "August 2026", kind: "Showcase", detail: "Showcased at the 28th International Conference on Pattern Recognition, the flagship event of the IAPR.", url: "https://icpr2026.org/" },
    { id: "icme", title: "IEEE ICME 2026", org: "IEEE · Bangkok, Thailand", date: "July 2026", kind: "Showcase", detail: "Showcased at the IEEE International Conference on Multimedia and Expo, sponsored by four IEEE societies.", url: "https://2026.ieeeicme.org/" },
    { id: "ideasync", title: "IdeaSync", org: "IDEAS-TIH, Indian Statistical Institute, Kolkata", date: "2026", kind: "Selection", detail: "Selected for IdeaSync, the industry connect meet organised by the Technology Innovation Hub at ISI Kolkata." },
    { id: "aisummit", title: "AI Impact Summit Expo 2026", org: "AI Impact Summit", date: "2026", kind: "Exhibitor", detail: "Part of the AI Impact Summit Expo 2026." },
    { id: "tigers", title: "Tiger's Pitch — Top 30", org: "Zee 24 Ghanta", date: "2026", kind: "Award", detail: "Among the Top 30 startups in Bengal's first startup reality show on television." },
    { id: "patent", title: "Patent application filed", org: "Indian Patent Office, Kolkata", date: "2 December 2025", kind: "IP", detail: "“A System of AI Driven Research Workflow”, Application No. 202531120470, complete specification, 10 claims." },
    { id: "launch", title: "Platform launch", org: "Jadavpur University, Kolkata", date: "3 December 2025", kind: "Milestone", detail: "ResearcherNet launched at IIC Jadavpur University." },
    { id: "aic", title: "AIC Techno India — Pre-incubation", org: "Atal Incubation Centre", date: "2026", kind: "Selection", detail: "Selected into the pre-incubation programme." },
  ] as Recognition[],
  testimonials: [
    { quote: "The semantic search found critical papers our previous tools missed.", name: "Prof. Sheli Sinha Chaudhuri", role: "Electronics & Tele-communication Engineering, Jadavpur University" },
    { quote: "We finished our last grant proposal faster because the editor and citations finally felt native.", name: "Prof. Sayan Chatterjee", role: "Electronics & Tele-communication Engineering, Jadavpur University" },
    { quote: "Managing climate datasets here feels stable, legible, and built for researchers instead of file storage admins.", name: "Dr. Chinmoy Ghorai", role: "Electronics & Tele-communication Engineering, Jadavpur University" },
  ],
  investors: {
    round: "Seed",
    ask: "₹2–3 Crore",
    runway: "18 months",
    status: "Open",
    milestones: ["Convert active institutional pilots into paid licences", "Integrity suite (plagiarism & AI-content detection) live", "2,500 paid users and ₹2–3 Cr ARR by month 18"],
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
