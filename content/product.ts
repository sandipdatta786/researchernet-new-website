import type { FaqItem } from "./types";
import { facts } from "./facts";

export type Engine = {
  id: string;
  name: string;
  short: string;
  icon: "search" | "users" | "edit" | "coins" | "shield" | "network";
  live: string[]; // capabilities live today
  href: string;
};

/** The six engines — as published in the Aug-2026 deck and RISE one-pager. */
export const engines: Engine[] = [
  { id: "intelligence", name: "AI Research Intelligence", short: `Semantic search across ${facts.corpus} papers, Chat with Paper, research-gap analysis and systematic-review support.`, icon: "search", live: ["Semantic paper search", "Chat with Paper", "Research gap analysis"], href: "/product/discover" },
  { id: "matchmaking", name: "Smart Matchmaking", short: "Collaborator recommendations ranked on a research knowledge graph — by expertise, co-citation and project fit.", icon: "users", live: ["Collaborator matching", "Expertise & co-citation signals", "Interdisciplinary suggestions"], href: "/product/collaborate" },
  { id: "collab", name: "Real-Time Collaboration", short: "Collaborative LaTeX with version control, chat, HD video meetings and lab spaces for every project.", icon: "edit", live: ["Collaborative LaTeX editor", "HD video meetings", "Lab spaces & projects"], href: "/product/write" },
  { id: "funding", name: "Funding Engine", short: "Grant alerts matched to your profile, commercialisation readiness and industry connections.", icon: "coins", live: ["Grant alerts", "Commercialisation readiness", "Industry connections"], href: "/product/fund-and-commercialise" },
  { id: "integrity", name: "Integrity & Privacy", short: "Encryption at rest and in transit, role-based access control and privacy-respecting AI.", icon: "shield", live: ["Encryption at rest & in transit", "Role-based access control", "On-premise option"], href: "/product/security" },
  { id: "network", name: "Researcher Network", short: "Profiles imported from Google Scholar and ORCID, a research feed, following and community.", icon: "network", live: ["Researcher profiles", "Research feed & following", "One-click profile import"], href: "/product/collaborate" },
];

export type ProductPage = {
  slug: string;
  nav: string;
  eyebrow: string;
  title: string;
  titleAccent: string;
  description: string; // meta
  lead: string;
  sections: { heading: string; body: string; bullets?: string[]; collapsed?: boolean }[];
  mock: "search" | "match" | "latex" | "funding" | "tech" | "security" | "roadmap";
  screenshot?: { file: string; alt: string };
  metaTitle?: string; // overrides the hero-derived <title> where a search-first phrasing is wanted
  crossLinks?: { label: string; href: string }[];
  faqs: FaqItem[];
  cta: { label: string; href: string };
  related: string[]; // slugs
};

export const productPages: ProductPage[] = [
  {
    slug: "discover",
    nav: "Discover",
    eyebrow: "AI Research Intelligence",
    title: "Literature review in minutes,",
    titleAccent: "not months.",
    description: `Search ${facts.corpus} papers semantically, chat with any paper and surface research gaps in minutes, not months. Free for researchers.`,
    lead: `The average literature review takes six to twelve months. ResearcherNet's research intelligence engine reads the field for you — semantically, across ${facts.corpus} indexed papers — and hands back structured summaries, gaps and the journals you should target.`,
    sections: [
      { heading: "Semantic search that understands the question", body: "Describe the problem the way you would to a colleague. The engine retrieves literature, datasets and related work by meaning, not keyword overlap, so the foundational and adjacent papers keyword databases miss come back first." , bullets: [`${facts.corpus} papers indexed`, "Context-first retrieval for literature, datasets and citations", "Save results straight into a project"] },
      { heading: "Chat with Paper", body: "Upload or open any paper and ask it questions — method, assumptions, limitations, how it relates to your draft. Every answer is grounded in the document you are reading, with structured abstracts, key findings and methodological tags generated in seconds.", bullets: ["Structured summaries in ≤5 seconds per document", "Methodology and findings extraction", "Multi-LLM routing picks the right model for the task"] },
      { heading: "Research gap analysis & systematic reviews", body: "Map what has been studied, where the evidence is thin and which questions remain open. Run structured reviews with the same workspace your co-authors use, then move directly into writing.", bullets: ["Gap detection across disciplines", "Systematic-review workflows", "Publication navigator: journal and conference suggestions matched to your manuscript"] },
    ],
    mock: "search",
    screenshot: { file: "discover.png", alt: "Semantic paper search in ResearcherNet: a natural-language research question with ranked results, research-gap labels and Chat with Paper actions." },
    faqs: [
      { q: "How many papers does ResearcherNet search?", a: `The semantic search corpus covers ${facts.corpus} papers across all fields of science, updated continuously.` },
      { q: "Is the AI grounded in the papers, or does it guess?", a: "Answers in Chat with Paper are generated from the document you are reading. Summaries carry the source so you can verify every claim before relying on it." },
      { q: "Can I use it for a systematic review?", a: "Yes. Structured review workflows, gap analysis and export live in the same workspace as your collaborators and your LaTeX draft." },
    ],
    cta: { label: "Start searching free", href: "APP_SIGNUP" },
    related: ["collaborate", "write"],
  },
  {
    slug: "collaborate",
    nav: "Collaborate",
    eyebrow: "Smart Matchmaking & Researcher Network",
    title: "Find the collaborator you'd never",
    titleAccent: "have met.",
    description: "AI collaborator matching on a research knowledge graph, plus profiles, lab spaces, chat and HD meetings. Used at IIT Kharagpur, JU and ISI Kolkata.",
    lead: "Finding the right collaborator takes six months of conferences and cold emails. ResearcherNet ranks candidates on a research knowledge graph — publications, expertise domains, projects — so the introduction that changes your paper happens in a week.",
    sections: [
      { heading: "Matching on a research knowledge graph", body: "Every researcher, publication and expertise domain is a node; semantic and relational edges connect them. Collaborator suitability is computed from the similarity of your work, adjusted for where each person sits in the graph — the mechanism described in our patent application.", bullets: ["Expertise and co-citation signals", "Interdisciplinary suggestions across departments and institutions", "Suggestions improve as you use the platform"] },
      { heading: "A professional identity that imports itself", body: "One-click import from Google Scholar, ORCID and ResearchGate builds a complete profile and portfolio, so your work is discoverable by peers, institutions and industry from day one.", bullets: ["Google Scholar, ORCID and ResearchGate import", "Publication portfolio and impact view", "Follow researchers and build your feed"] },
      { heading: "Lab spaces, chat and HD meetings", body: "Spin up a focused working group with shared projects, notes, milestones and discussion lanes. Meet in HD video with recording and screen sharing without leaving the workspace.", bullets: ["Private lab spaces for institutional teams", "Real-time chat and threads", "HD video meetings with recording"] },
    ],
    mock: "match",
    screenshot: { file: "match.png", alt: "AI collaborator matching in ResearcherNet: suggested co-authors ranked on the research knowledge graph, with expertise and co-citation signals." },
    faqs: [
      { q: "How does ResearcherNet suggest collaborators?", a: "It builds a knowledge graph of publications, researchers and expertise domains and ranks candidates by the semantic similarity of their work, adjusted for graph centrality. The system is described in Indian patent application 202531120470." },
      { q: "Can I collaborate with people at other institutions?", a: "Yes — cross-institution and cross-border collaboration is the point. Researchers at IIT Kharagpur, Jadavpur University, ISI Kolkata, SVIST and the Harare Institute of Technology already work together on the platform." },
      { q: "Is there a cost to join the network?", a: "No. Profiles, the feed, following and collaborator suggestions are free for individual researchers." },
    ],
    cta: { label: "Create your profile", href: "APP_SIGNUP" },
    related: ["discover", "write"],
  },
  {
    slug: "write",
    nav: "Write",
    eyebrow: "Real-Time Collaboration",
    title: "Write the paper together,",
    titleAccent: "in one place.",
    description: "Real-time collaborative LaTeX with version control, LaTeX ↔ Word conversion and citations — in the workspace where you found the papers and co-authors.",
    lead: "Overleaf for editing, WhatsApp for chat, email for versions. ResearcherNet puts the editor, the conversation and the history in the same project as the literature and the team.",
    sections: [
      { heading: "Collaborative LaTeX, natively", body: "Real-time co-editing with themes, templates and full version history. Compile, comment and resolve without switching tools or paying for a separate editor seat.", bullets: ["Real-time multi-author editing", "Version control and history", "Reference management"] },
      { heading: "LaTeX ↔ Word, both directions", body: "Not every co-author writes LaTeX. Universal document conversion lets technical and non-technical collaborators work in the format they know and merge cleanly.", bullets: ["Bi-directional LaTeX and Word conversion", "Consistent formatting on the way back", "Works with journal templates"] },
      { heading: "From draft to the right venue", body: "The publication navigator reads your manuscript and suggests journals and conferences matched to its content and impact goals, with deadlines to track.", bullets: ["Journal and conference suggestions", "Research sessions to organise materials", "Milestones and task boards per project"] },
    ],
    mock: "latex",
    screenshot: { file: "write.png", alt: "The collaborative LaTeX editor in ResearcherNet: two researchers editing a manuscript side by side with version history." },
    faqs: [
      { q: "Does ResearcherNet replace Overleaf?", a: "It includes a real-time collaborative LaTeX editor with version control, so teams can write together without a separate editor. You can also keep using Overleaf alongside ResearcherNet." },
      { q: "Can co-authors who use Word participate?", a: "Yes. Bi-directional LaTeX ↔ Word conversion lets each author work in the format they prefer." },
      { q: "Is plagiarism checking included?", a: "A multilingual plagiarism and AI-content detection suite is in development. Until it ships, we recommend running institutional checks (e.g. iThenticate) before submission." },
    ],
    cta: { label: "Start writing free", href: "APP_SIGNUP" },
    related: ["discover", "collaborate"],
  },
  {
    slug: "fund-and-commercialise",
    nav: "Fund & commercialise",
    eyebrow: "Funding Engine · Research-to-Industry Bridge",
    title: "Take the work from lab",
    titleAccent: "to market.",
    description: "AI grant alerts, commercialisation readiness, industry connections and UN SDG impact mapping — a research platform built to take work to market.",
    lead: "Ninety percent of research never commercialises — not for lack of quality, but for lack of a path. ResearcherNet surfaces the grant, the industry partner and the readiness signals while the work is still being written.",
    sections: [
      { heading: "Grant alerts matched to your profile", body: "Funding calls are matched to your expertise, publications and projects rather than broadcast to everyone. Indian and international opportunities appear in your feed with deadlines.", bullets: ["Profile-matched grant discovery", "Deadline tracking", "Team-level visibility for labs"] },
      { heading: "Commercialisation readiness & industry connections", body: "The platform assesses how close a body of work is to a licensable technology or a venture, and routes enquiries from industry, incubators and investors to the right researcher or lab — a research-to-industry bridge for institutions and CSIR-style laboratories.", bullets: ["Readiness signals for projects", "Industry and investor connections", "Discovery channel for licensable technologies"] },
      { heading: "Impact you can report", body: "Research outputs are mapped to UN Sustainable Development Goal facets so institutions and funders can report societal impact alongside citations, with threshold alerts when a project's impact profile changes.", bullets: ["UN SDG mapping", "Institutional dashboards", "Outcome reports for funders"] },
    ],
    mock: "funding",
    screenshot: { file: "fund.png", alt: "The funding engine in ResearcherNet: grant calls matched to a researcher profile with deadlines and commercialisation-readiness signals." },
    faqs: [
      { q: "Which funding sources does ResearcherNet track?", a: "Indian agency calls (ANRF/DST, DBT, ICMR and state programmes) and international opportunities, matched to your profile. Coverage expands continuously; tell us what you need." },
      { q: "Can industry partners find our lab's technologies?", a: "Yes. Institutions can list technologies and expertise for discovery; enquiries route to the lab's business-development contact." },
      { q: "Is the SDG mapping automatic?", a: "Yes. The impact-alignment module maps outputs to SDG facets automatically; institutions can review and adjust." },
    ],
    cta: { label: "Talk to us about a pilot", href: "/institutional-pilot" },
    related: ["technology", "collaborate"],
  },
  {
    slug: "technology",
    nav: "Technology",
    eyebrow: "Patent-pending AI orchestration",
    title: "The system underneath:",
    titleAccent: "one graph, many models.",
    description: "Indian patent application 202531120470: LLM synthesis, a self-pruning research knowledge graph and workflow orchestration. Showcased at IEEE ICME and ICPR 2026.",
    lead: "ResearcherNet is the commercial embodiment of “A System of AI Driven Research Workflow”, Indian patent application No. 202531120470, filed on 2 December 2025 with a complete specification of ten claims. This page explains the architecture in plain language.",
    sections: [
      { heading: "1 · Ingestion and semantic synthesis", body: "Heterogeneous research documents — papers, theses, reports — are ingested and converted into token sequences. An LLM-based semantic synthesiser generates structured outputs: abstracts, key findings, methodological tags and vector embeddings, at an inference latency of five seconds or less per document." },
      { heading: "2 · A research knowledge graph that prunes itself", body: "Publications, researchers, expertise domains, projects and impact areas become nodes connected by weighted semantic and relational edges, designed to scale beyond a million nodes. A self-adaptive pruning engine scores relevance with temporal decay and feedback, removing stale edges and cutting graph size by 40–60% while a hybrid LLM–GNN module re-embeds what remains." },
      { heading: "3 · Workflow orchestration", body: "On top of the graph, an orchestration engine generates collaborator recommendations (cosine similarity adjusted for graph centrality), detects milestone anomalies, computes project risk and aligns outputs with societal-impact frameworks including the UN SDGs. The collaborator-recommendation, semantic-synthesis and impact-alignment modules are live on the platform today." },
      { heading: "4 · Multi-LLM, model-substitutable", body: "A multi-LLM orchestration layer routes each task to the model best suited to it — GPT, Claude, Llama-class open models or specialised scientific models — and supports model substitution so institutions can meet their own AI policies, including constrained edge deployments with bounded latency.", bullets: ["Held as copyright, trade secret and proprietary know-how alongside the patent application", "Interaction dataset generated across the active researcher base improves recommendations", "Showcased at IEEE ICME 2026 (Bangkok) and ICPR 2026 (Lyon)"] },
    ],
    mock: "tech",
    faqs: [
      { q: "Is the patent granted?", a: "Not yet. Application 202531120470 was filed on 2 December 2025 as an ordinary application with complete specification (10 claims) and is under process at the Indian Patent Office, Kolkata." },
      { q: "Who are the inventors?", a: "Sandip Datta, Dr. Nandan Gupta, Dr. Asfak Ali and Gargi Gupta, all part of the AIMTECH Dynamics leadership team; assignment to the company is being recorded." },
      { q: "Which models does the platform use?", a: "A multi-LLM layer routes tasks across GPT, Claude and Llama-class models and can substitute open-source models where an institution requires it." },
    ],
    cta: { label: "See it in the product", href: "/product" },
    related: ["discover", "security"],
  },
  {
    slug: "security",
    crossLinks: [{ label: "See the 90-day provenance pilot", href: "/pilot/provenance" }],
    metaTitle: "Security and Privacy for Unpublished Research — DPDP and GDPR",
    nav: "Security & privacy",
    eyebrow: "Integrity & Privacy",
    title: "Your unpublished work",
    titleAccent: "stays yours.",
    description: "Encryption at rest and in transit, role-based access, DPDP and GDPR alignment, on-premise option and a clear data-use policy for unpublished research.",
    lead: "Researchers trust the platform with manuscripts before they are public. That trust is engineered: encryption, access control, a plain data-use policy and deployment options for institutions with their own requirements.",
    sections: [
      { heading: "Data protection", body: "All data is encrypted at rest and in transit. Access is role-based at project, lab and institution level, with audit trails. Optional end-to-end encryption is available for sensitive workspaces.", bullets: ["Encryption at rest and in transit", "Granular role-based access control", "Audit logs"] },
      { heading: "AI you can put a policy around", body: "Documents are processed to provide the features you use. Unpublished manuscripts are never used to train public models. Institutions can substitute models or run constrained deployments to satisfy internal AI policies.", bullets: ["No training of public models on your unpublished work", "Model substitution for institutional policies", "Aggregated, de-identified usage only for improving recommendations"] },
      { heading: "Regulatory alignment and deployment", body: "The platform is designed in line with India's Digital Personal Data Protection Act 2023 and the GDPR, with a grievance and data-protection contact. On-premise deployment is available for institutional requirements. SOC 2 preparation and SSO are on the trust roadmap.", bullets: ["DPDP Act 2023 and GDPR aligned", "On-premise deployment option", "Trust roadmap: SSO, SOC 2 preparation"] },
      { heading: "Provenance for AI-assisted work", body: "Journals, funders and patent examiners are starting to ask what a model contributed to a result. The 90-day provenance pilot builds that record for one department: a contribution and model ledger, a verification step, and an exportable provenance report.", bullets: ["Contribution and model ledger", "Verification before a result is accepted", "Exportable provenance report"] },
    ],
    mock: "security",
    faqs: [
      { q: "Is ResearcherNet GDPR or DPDP certified?", a: "There is no certification scheme for either law; ResearcherNet is designed and operated in line with both. Our privacy policy sets out the details and the contacts for exercising your rights." },
      { q: "Do you train AI models on my papers?", a: "No. Unpublished work is never used to train public models. Aggregated, de-identified interaction data may improve the platform's own recommendation systems, as described in the privacy policy." },
      { q: "Can we host it ourselves?", a: "Yes. On-premise deployment is available for institutions with data-residency or policy requirements. Contact us to scope it." },
    ],
    cta: { label: "Read the privacy policy", href: "/privacy" },
    related: ["technology", "fund-and-commercialise"],
  },
  {
    slug: "roadmap",
    nav: "Roadmap",
    eyebrow: "What's next",
    title: "Built in the open:",
    titleAccent: "what's live, what's next.",
    description: "An honest view of ResearcherNet's product roadmap — which capabilities are live today and which are in development, without dates we can't keep.",
    lead: "We publish only what is live as a feature, and everything else here. Roadmap items are in development; we do not promise dates.",
    sections: [
      { heading: "Live today", body: `Semantic search across ${facts.corpus} papers · Chat with Paper · research gap analysis and systematic-review support · publication navigator · collaborator matching on the research knowledge graph · profiles with Google Scholar / ORCID / ResearchGate import · feed, chat and HD video meetings · lab spaces and projects · collaborative LaTeX editor with version control · LaTeX ↔ Word conversion · multi-LLM orchestration · grant alerts · commercialisation readiness and industry connections · SDG impact mapping · encryption, role-based access and on-premise option.` },
      { heading: "Research Ledger — provenance and verification", body: "Contribution and model ledger on every project · verification step before a result is marked accepted · provenance export for journals, funders and IP cells · shaped with pilot departments." },
      { heading: "In development — SSO and SOC 2 preparation", body: "SSO and SOC 2 preparation." },
      { heading: "In development — integrity & analytics", body: "Multilingual plagiarism and AI-content detection · institutional research-output dashboards." },
      { heading: "In development — advanced AI engines", body: "Autonomous hypothesis generator · outcome prediction (feasibility and expected impact of a proposed project) · interdisciplinary discovery engine." },
      { heading: "In development — management & platform", body: "Smart deadline tracker." },
      { heading: "Longer term", collapsed: true, body: "End-to-end conference manager (website builder, abstract management, payments) · dataset marketplace · LMS and HRIS connectors · multilingual interface · scientific investment intelligence for funders · no-code statistical analysis · scientific visualisation suite." },
    ],
    mock: "roadmap",
    faqs: [
      { q: "When will plagiarism detection ship?", a: "It is in active development and a priority for institutional customers. We announce features when they are live, not before." },
      { q: "Can my institution influence the roadmap?", a: "Yes. Pilot institutions get early access to new features and a direct line to the product team." },
    ],
    cta: { label: "Join as a pilot institution", href: "/institutional-pilot" },
    related: ["discover", "technology"],
  },
];

export type Segment = {
  slug: string;
  nav: string;
  audience: string;
  eyebrow: string;
  title: string;
  titleAccent: string;
  description: string;
  lead: string;
  pains: { title: string; body: string }[];
  gets: { title: string; body: string }[];
  proof: string;
  cta: { label: string; href: string };
  secondary?: { label: string; href: string };
  faqs: FaqItem[];
};

export const segments: Segment[] = [
  {
    slug: "researchers",
    nav: "Researchers & students",
    audience: "PhD scholars, post-docs and faculty",
    eyebrow: "For researchers",
    title: "Five tools' worth of research,",
    titleAccent: "one free workspace.",
    description: `One free AI research workspace: literature AI, collaborator matching, LaTeX co-editing and grant alerts. Join ${facts.researchersRegistered} researchers.`,
    lead: "A PhD scholar at a state university cannot afford four subscriptions. A faculty member at an IIT cannot afford four browser tabs. ResearcherNet puts discovery, collaborators, writing and funding in one place — free for individuals.",
    pains: [
      { title: "Literature review eats the first year", body: "Six to twelve months reading, with the important paper still missed." },
      { title: "The right co-author is two departments away", body: "And you will only meet them at a conference, if at all." },
      { title: "Tools don't talk to each other", body: "Overleaf ≠ ResearchGate ≠ Elicit ≠ your grant spreadsheet." },
    ],
    gets: [
      { title: "Semantic search and Chat with Paper", body: `${facts.corpus} papers, structured summaries, research-gap analysis.` },
      { title: "Collaborators found for you", body: "Ranked suggestions across institutions, on a research knowledge graph." },
      { title: "Write together, natively", body: "Collaborative LaTeX with version control and LaTeX ↔ Word conversion." },
      { title: "Funding that finds you", body: "Grant alerts matched to your profile, with deadlines." },
    ],
    proof: "Researchers from IIT Kharagpur, Jadavpur University, ISI Kolkata, SVIST and the Harare Institute of Technology are already on the platform.",
    cta: { label: "Create your free account", href: "APP_SIGNUP" },
    secondary: { label: "See pricing", href: "/pricing" },
    faqs: [
      { q: "Is it really free?", a: "Yes. Search, Chat with Paper (fair-use limits), profiles, collaborator suggestions and the LaTeX editor are free for individual researchers. Professional adds higher AI limits and the publication navigator." },
      { q: "Can I import my Google Scholar profile?", a: "Yes — one-click import from Google Scholar, ORCID and ResearchGate builds your profile and portfolio." },
    ],
  },
  {
    slug: "institutions",
    nav: "Universities & institutions",
    audience: "Deans, research directors, librarians",
    eyebrow: "For universities & institutions",
    title: "One research workspace for",
    titleAccent: "every faculty member.",
    description: "One AI research workspace for every faculty member and scholar. Institution-wide pilots, campus ambassadors and impact dashboards. Book a pilot.",
    lead: "NEP 2020, NAAC and NIRF all reward research output and collaboration. ResearcherNet gives an institution one workspace for its researchers, a dashboard for its leadership and a bridge to industry — starting with a complimentary pilot year under our institutional MOU.",
    pains: [
      { title: "Research happens in silos", body: "Departments and campuses cannot see who works on what, or with whom." },
      { title: "Foreign tools, per-seat pricing", body: "Overleaf, iThenticate and literature tools bought separately, per user, in dollars." },
      { title: "Impact is hard to report", body: "Citations alone do not satisfy funders or accreditation bodies asking about societal outcomes." },
    ],
    gets: [
      { title: "Institution-wide access", body: "Every researcher onboarded via one-click Scholar/ORCID import; verification by institutional email." },
      { title: "Campus ambassador programme", body: "One trained and certified faculty ambassador supports adoption on campus." },
      { title: "Dashboards and SDG mapping", body: "Institutional research output, collaboration signals and SDG-mapped impact in one view." },
      { title: "A research-to-industry channel", body: "Licensable technologies and expertise discoverable by industry and MSMEs." },
    ],
    proof: "Pilot institutions receive complimentary first-year access, a trained campus ambassador and a joint outcomes review at month six.",
    cta: { label: "Book an institutional pilot", href: "/institutional-pilot" },
    secondary: { label: "Download the MOU outline (PDF)", href: "/docs/ResearcherNet_MOU_Outline.pdf" },
    faqs: [
      { q: "What does a pilot cost?", a: "The institution-wide MOU year is complimentary: access for every researcher, a trained campus ambassador and a joint outcomes review at month six. A department that wants the 90-day provenance pilot pays a fixed departmental fee, credited in full against the campus licence if the institution proceeds at the month-six review." },
      { q: "Can we deploy on-premise?", a: "Yes. On-premise deployment and model substitution are available for institutions with data-residency or AI-policy requirements." },
      { q: "Do you support SSO?", a: "SSO is on the trust roadmap; institutional email verification is available today." },
    ],
  },
  {
    slug: "industry",
    nav: "Industry & R&D",
    audience: "R&D teams, technology transfer offices, incubators",
    eyebrow: "For industry, R&D and technology transfer",
    title: "Find the researcher, the lab or the",
    titleAccent: "technology in minutes.",
    description: "Discover researchers, labs and licensable technologies in minutes. A research-to-industry bridge for R&D teams, TTOs and incubators.",
    lead: "India's laboratories are full of licensable technology that industry cannot discover. ResearcherNet makes research expertise and technologies searchable, and routes enquiries to the right lab.",
    pains: [
      { title: "Discovery takes months", body: "Finding who has worked on your problem means conferences, referrals and luck." },
      { title: "No structured route into academia", body: "Enquiries land in inboxes and stall." },
      { title: "Readiness is opaque", body: "Hard to tell a paper from a prototype from a product." },
    ],
    gets: [
      { title: "Expertise and technology discovery", body: "Search researchers, labs and listed technologies semantically." },
      { title: "Routed enquiries", body: "Requests go to the lab's business-development contact with context." },
      { title: "Readiness signals", body: "Commercialisation readiness on projects, not just abstracts." },
      { title: "Co-creation workspace", body: "Run joint projects in a lab space with role-based access." },
    ],
    proof: "Presented as an institutional pilot proposal to CSIR laboratories at RISE Conclave 2026.",
    cta: { label: "Talk to partnerships", href: "/contact?topic=industry" },
    faqs: [
      { q: "Can we list our challenge for researchers?", a: "Industry challenge listing is in development; today, partnerships@researchernet.com routes challenges to matched labs manually while the feature is built." },
      { q: "Is our confidential information protected?", a: "Joint projects run in lab spaces with role-based access, encryption at rest and in transit and optional end-to-end encryption." },
    ],
  },
  {
    slug: "funders",
    nav: "Funders & government",
    audience: "Funding agencies, foundations, policy bodies",
    eyebrow: "For funders & government",
    title: "See where research is going,",
    titleAccent: "and what it changes.",
    description: "Research impact analytics for funders and policy bodies: collaboration signals, SDG-mapped outcomes and dashboards beyond citation counts.",
    lead: "Funding bodies increasingly require measurable impact beyond citations. ResearcherNet maps outputs to UN SDG facets and shows collaboration and momentum across institutions.",
    pains: [
      { title: "Impact reporting is manual", body: "Programme officers assemble outcomes from PDFs and emails." },
      { title: "Duplication is invisible", body: "Similar work funded twice across institutions." },
      { title: "Investment-ready research is hard to spot", body: "Which labs and technologies have the highest potential?" },
    ],
    gets: [
      { title: "SDG-mapped outcomes", body: "Automatic mapping of research outputs to SDG facets with threshold alerts." },
      { title: "Cross-institution view", body: "Collaboration signals and topic momentum across a portfolio." },
      { title: "Readiness and risk", body: "Milestone anomaly detection and project risk from the orchestration engine." },
      { title: "Investment intelligence", body: "In development: a view of labs and technologies with the highest ROI potential." },
    ],
    proof: "The impact-alignment module is part of the claimed system in Indian patent application 202531120470.",
    cta: { label: "Discuss a programme pilot", href: "/contact?topic=funders" },
    faqs: [
      { q: "Can data stay within India?", a: "Yes. On-premise and India-resident deployment options are available." },
    ],
  },
];

export const generalFaqs: FaqItem[] = [
  { q: "What is ResearcherNet?", a: `ResearcherNet is an AI-powered research collaboration and research-to-market platform built in Kolkata, India, by AIMTECH Dynamics Private Limited. It combines semantic literature discovery, AI collaborator matching, real-time collaborative writing, funding discovery and commercialisation tools in one workspace. It launched on 3 December 2025 at Jadavpur University and is used by ${facts.researchersRegistered} researchers.` },
  { q: "Is ResearcherNet free?", a: "Yes. Individual researchers can use ResearcherNet free. Professional and Team plans are coming soon; institutions can license the platform campus-wide, and pilot institutions receive complimentary first-year access under an MOU." },
  { q: "Which institutions use ResearcherNet?", a: "Researchers from IIT Kharagpur, Jadavpur University, the Indian Statistical Institute Kolkata, Swami Vivekananda Institute of Science and Technology and the Harare Institute of Technology, among others, are active on the platform." },
  { q: "Does ResearcherNet have a patent?", a: "ResearcherNet is the commercial embodiment of Indian patent application No. 202531120470, “A System of AI Driven Research Workflow”, filed on 2 December 2025 with complete specification (10 claims), currently under process. The collaborator-recommendation, semantic-synthesis and impact-alignment modules described in the claims are live on the platform." },
  { q: "How does ResearcherNet find collaborators?", a: "It builds a research knowledge graph from publications, expertise domains and projects, then ranks potential collaborators by the semantic similarity of their work adjusted for their position in the graph — surfacing people you would not find through manual networking." },
  { q: "Is my unpublished research safe on ResearcherNet?", a: "Data is encrypted at rest and in transit, access is role-based, and the platform is designed in line with India's DPDP Act and the GDPR. Unpublished manuscripts are never used to train public AI models. On-premise deployment is available for institutional requirements." },
  { q: "How can a university pilot ResearcherNet?", a: "Request a 90-day pilot: researcher onboarding in weeks 1–4 via one-click Google Scholar/ORCID import, AI matchmaking activation in months 2–3, and a joint outcomes review by month 6. Pilot institutions receive complimentary first-year access and a trained campus ambassador." },
  { q: "Where has ResearcherNet been showcased?", a: "IEEE ICME 2026 in Bangkok (July 2026), ICPR 2026 in Lyon (August 2026), RISE Conclave 2026 at CSIR-IICB Kolkata, IdeaSync at IDEAS-TIH (ISI Kolkata) and the AI Impact Summit Expo 2026. It was a Top 30 startup in Tiger's Pitch and has been selected for the Zonal round of Eureka 2026, E-Cell IIT Bombay." },
  { q: "Which AI models does ResearcherNet use?", a: "A multi-LLM orchestration layer routes tasks across models such as GPT, Claude and Llama-class open models, so each research task uses the model best suited to it, and institutions can substitute models to meet their policies." },
  { q: "Who founded ResearcherNet?", a: "Dr. Asfak Ali (Founder & CEO), Sandip Datta (Co-Founder & Director), Dr. Suvojit Acharjee (Co-Founder & Architect) and Dr. Nandan Gupta (Co-Founder), Chairman of the Swami Vivekananda Group of Institutes." },
  { q: "Where is ResearcherNet based?", a: "ResearcherNet is headquartered at the IIC, Jadavpur University, Kolkata, India, and is a product of AIMTECH Dynamics Private Limited, a DPIIT-recognised startup." },
  { q: "Does ResearcherNet replace Overleaf?", a: "ResearcherNet includes a real-time collaborative LaTeX editor with version control and LaTeX ↔ Word conversion, so teams can write together without a separate editor; you can also keep using Overleaf alongside it." },
];

export const pilotFaqs: FaqItem[] = [
  { q: "What does the pilot cost the institution?", a: "The institution-wide MOU year is complimentary: access for every researcher, a trained campus ambassador and a joint outcomes review at month six. A department that wants the 90-day provenance pilot pays a fixed departmental fee, credited in full against the campus licence if the institution proceeds at the month-six review." },
  { q: "How many users can join?", a: "Institution-wide by default — faculty, research scholars, post-docs and registered students — verified by institutional email." },
  { q: "What is a campus ambassador?", a: "One faculty member nominated by the institution, trained and certified by ResearcherNet, who supports adoption on campus and is the day-to-day contact." },
  { q: "What happens after the pilot year?", a: "A joint review of adoption and outcomes, then the option of a continuing institutional licence. There is no automatic conversion." },
  { q: "Can we run it on-premise?", a: "Yes, on-premise deployment is available for institutional requirements." },
];
