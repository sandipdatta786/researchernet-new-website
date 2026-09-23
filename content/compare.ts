import type { ComparePage } from "./types";
import { facts } from "./facts";

/**
 * "ResearcherNet vs X" comparison pages.
 * Competitor facts verified against their public sites on 11 September 2026.
 * Only claim ResearcherNet features that are live; roadmap items are labelled "in development".
 */

const VERIFIED = "2026-09-11";
const VERIFIED_DISPLAY = "11 September 2026";

const RN_PRICING = `ResearcherNet: Free for individuals; Professional and Team plans are coming soon; Institution plans are custom, billed annually in INR with a GST invoice, with a complimentary first year for pilot institutions under an MOU.`;

export const compareIndexIntro = `Choosing research software usually means choosing several tools at once: one for finding papers, one for writing, one for talking to co-authors, one for chasing grants. Most of the products on this page are genuinely good at the one thing they were built for, and in some cases they are the better choice for you. These comparisons are meant to help you work that out honestly, not to pretend that every rival is worse at everything.

Each page below sets out what the other product does well, where ResearcherNet takes a different approach, a feature-by-feature table, and a plain statement of who should pick which. Prices are quoted as published on ${VERIFIED_DISPLAY} and will drift; check the vendor's own site before buying. Where we are not certain a competitor lacks a capability we say "not a core focus" rather than "no". Features on our own roadmap are labelled "in development" and never counted as live. If you spot an error, write to hello@researchernet.com and we will correct it.`;

export const comparePages: ComparePage[] = [
  // ---------------------------------------------------------------------------
  // SciSpace
  // ---------------------------------------------------------------------------
  {
    slug: "scispace",
    competitor: "SciSpace",
    competitorUrl: "https://scispace.com",
    title: "ResearcherNet vs SciSpace (2026): AI reading tools or a full research workspace?",
    description:
      "ResearcherNet vs SciSpace: paper search, Chat with PDF, writing tools, collaborator matching, LaTeX, funding and pricing, verified September 2026.",
    intro: `**SciSpace** (from Typeset, an India-origin company that now markets globally) is one of the most widely used AI reading assistants in academia. Its chat-style search sits over a corpus of more than 300 million papers, and its Chat with PDF, literature-review tables, AI writer, paraphraser, citation generator, AI detector and newer "agents" cover the reading-and-drafting end of a research project very well. With a reported 9.6 million-plus researchers, it is a mature product with a large community and a SOC 2 Type 2 attestation.

**ResearcherNet** overlaps with SciSpace on discovery: semantic search across 300 million-plus papers, Chat with Paper summarisation, research gap analysis and systematic-review support. The difference is what happens after you have read the papers. ResearcherNet adds AI collaborator matching built on a research knowledge graph, researcher profiles and a social feed, real-time chat and HD video meetings, lab spaces with milestones, a collaborative LaTeX editor with version control, grant alerts, commercialisation readiness and SDG impact mapping. It is a newer platform, launched in December 2025 in Kolkata, with a community of 650-plus active researchers rather than millions.

If you mainly need to read, summarise and paraphrase papers quickly, and you value a paraphraser and AI detector that are live today, SciSpace is the better choice and its Premium tier is cheaper than our Professional plan. If you want the reading tools plus the people, the writing environment and the funding pipeline in one workspace, or you need on-premise deployment and INR billing for an Indian institution, ResearcherNet is built for that.`,
    whatTheyDoWell: [
      "Fast, chat-style paper search and Chat with PDF that many researchers already trust daily.",
      "A broad writing toolkit that is live today: AI writer, paraphraser, citation generator and AI-content detector.",
      "Literature-review tables that extract fields across many papers at once.",
      "Scale and maturity: a reported 9.6M+ researchers and SOC 2 Type 2 attestation.",
      "Entry pricing (Premium at roughly $20/month) is lower than our Professional tier.",
    ],
    whereWeDiffer: [
      "ResearcherNet treats collaboration as a first-class feature: AI collaborator matching, profiles, feed, chat and video meetings are all live.",
      "A real-time collaborative LaTeX editor with version control and LaTeX-to-Word conversion sits inside the same workspace.",
      "Grant alerts, funding discovery, commercialisation readiness and SDG mapping extend the workflow beyond the manuscript.",
      "Flat subscription pricing rather than credits, so heavy reading months do not surprise you.",
      "Optional on-premise deployment and GDPR- and DPDP-India-aligned data handling for institutions.",
    ],
    rows: [
      { feature: `Semantic search across ${facts.corpus} papers`, us: "yes", them: "yes" },
      { feature: "Chat with a paper / PDF", us: "yes", them: "yes" },
      { feature: "Literature review and gap analysis", us: "yes", them: "yes" },
      { feature: "Paraphraser and AI-content detector", us: "in development", them: "yes" },
      { feature: "AI collaborator matching", us: "yes", them: "not a core focus" },
      { feature: "Profiles, feed, chat and video meetings", us: "yes", them: "no" },
      { feature: "Collaborative LaTeX editor with versioning", us: "yes", them: "no" },
      { feature: "Grant alerts and funding discovery", us: "yes", them: "no" },
      { feature: "Commercialisation / industry bridge", us: "yes", them: "no" },
      { feature: "Pricing model", us: "flat subscription", them: "credit-based tiers" },
    ],
    chooseThemIf: [
      "Your bottleneck is reading and summarising papers, and you rarely need co-author tooling.",
      "You want a paraphraser and AI-content detector that are live today.",
      "You prefer a large, established product with a long track record and SOC 2 attestation.",
    ],
    chooseUsIf: [
      "You want discovery, collaborators, writing and funding in one workspace instead of four tabs.",
      "You write in LaTeX with co-authors and want version control built in.",
      "You are at an Indian institution and need INR billing, DPDP-aligned handling or on-premise deployment.",
    ],
    pricingNote: `Prices as published on ${VERIFIED_DISPLAY}. SciSpace sells credit-based tiers: Premium at roughly $20/month, Advanced at roughly $90/month and Max at roughly $200/month, plus enterprise plans; some users report that credit consumption is hard to predict on heavy days. ${RN_PRICING} Both products offer a free tier.`,
    faqs: [
      {
        q: "Is ResearcherNet a replacement for SciSpace's Chat with PDF?",
        a: `For summarising and questioning a paper, yes: ResearcherNet's Chat with Paper does the same job over a ${facts.corpus} paper index. SciSpace currently has a broader set of writing add-ons, such as a paraphraser and AI detector, which are still in development on ResearcherNet.`,
      },
      {
        q: "Does SciSpace help me find collaborators?",
        a: "Collaborator matching is not a core focus of SciSpace. ResearcherNet matches researchers by expertise and co-citation using a research knowledge graph and lets you follow, message and meet them on the platform.",
      },
      {
        q: "Which one is cheaper?",
        a: "SciSpace's entry paid tier is about $20/month, credit-based. ResearcherNet's paid individual plans are not on sale yet: today it is free for individuals, with custom institutional licences. Both have free plans, so the honest answer is to try each on a real week of work.",
      },
    ],
    lastVerified: VERIFIED,
  },

  // ---------------------------------------------------------------------------
  // Elicit
  // ---------------------------------------------------------------------------
  {
    slug: "elicit",
    competitor: "Elicit",
    competitorUrl: "https://elicit.com",
    title: "ResearcherNet vs Elicit (2026): systematic review specialist or end-to-end research platform?",
    description:
      "ResearcherNet vs Elicit: evidence synthesis, data extraction, collaboration, LaTeX, funding, security and pricing, verified September 2026.",
    intro: `**Elicit** describes itself as "AI for Scientific Research" and promises work that is "10x more evidence-based". It is the most focused tool in this list: systematic reviews, screening and structured data extraction across a corpus of more than 138 million papers. Its quantified case studies and its strength in pharma and clinical research reflect a product designed for teams whose output is an evidence table, not a manuscript. Enterprise customers get "no training on your data by default", and the Scale tier adds live collaboration on reviews.

**ResearcherNet** covers the same starting point, with semantic search across 300 million-plus papers, Chat with Paper, research gap analysis and systematic-review support, but it is a broader platform rather than a review specialist. Around the evidence work it adds AI collaborator matching on a research knowledge graph, researcher profiles and a social feed, real-time chat and HD video, lab spaces with milestones, a collaborative LaTeX editor, grant alerts and a research-to-industry bridge. Launched in Kolkata in December 2025, it serves 650-plus active researchers, whereas Elicit has years of production use behind it.

If your job is producing rigorous, auditable systematic reviews, particularly in pharma or evidence-based medicine, Elicit is the better choice: its extraction workflows are deeper and more battle-tested than ours. If a review is one step in a longer project that also involves finding co-authors, writing the paper, securing funding and moving toward commercialisation, ResearcherNet keeps all of that in one place at a lower per-seat price.`,
    whatTheyDoWell: [
      "Best-in-class structured data extraction and screening for systematic reviews.",
      "Transparent, citation-linked answers with quantified accuracy case studies.",
      "Strong adoption in pharma and clinical evidence teams.",
      "Enterprise data policy of no training on your data by default.",
      "Live collaboration on reviews at the Scale tier.",
    ],
    whereWeDiffer: [
      `ResearcherNet's corpus is larger (${facts.corpus} vs 138M+) and is paired with Chat with Paper and a publication navigator.`,
      "Collaboration is not a top-tier add-on: matching, profiles, chat, video and lab spaces are included from the free plan upward.",
      "A collaborative LaTeX editor with version control lets the review become the manuscript without leaving the workspace.",
      "Grant alerts, commercialisation readiness and SDG mapping serve the whole project lifecycle, not just the evidence stage.",
      "Individual use is free today, against Elicit Pro at $49/month, and institutional licences are billed in INR with a GST invoice.",
    ],
    rows: [
      { feature: "Paper corpus", us: `${facts.corpus}`, them: "138M+" },
      { feature: "Systematic review and screening", us: "yes", them: "yes, core strength" },
      { feature: "Structured data extraction tables", us: "partial", them: "yes, core strength" },
      { feature: "Chat with a paper", us: "yes", them: "partial" },
      { feature: "Live collaboration", us: "yes, all plans", them: "Scale tier and above" },
      { feature: "AI collaborator matching", us: "yes", them: "no" },
      { feature: "Collaborative LaTeX editor", us: "yes", them: "no" },
      { feature: "Grant alerts and funding discovery", us: "yes", them: "no" },
      { feature: "Commercialisation / industry bridge", us: "yes", them: "no" },
      { feature: "Entry paid plan", us: "free for individuals; paid plans coming soon", them: "$49/month" },
    ],
    chooseThemIf: [
      "You run formal systematic reviews or meta-analyses and need deep, auditable extraction.",
      "You work in pharma, clinical or regulatory settings where Elicit's case studies match your use case.",
      "Your team already has its writing, networking and funding tools and only needs evidence synthesis.",
    ],
    chooseUsIf: [
      "You want evidence work, co-author discovery, LaTeX writing and funding alerts in one subscription.",
      "You need collaboration without paying for a top-tier plan.",
      "Your institution needs INR billing, DPDP-India alignment or on-premise deployment.",
    ],
    pricingNote: `Prices as published on ${VERIFIED_DISPLAY}. Elicit: Basic is free; Pro is $49/month; Scale is $169/month and adds live collaboration; Enterprise is custom. ${RN_PRICING}`,
    faqs: [
      {
        q: "Can ResearcherNet run a systematic review like Elicit?",
        a: `ResearcherNet offers systematic-review support and research gap analysis over a ${facts.corpus} paper index, which is enough for most literature reviews. Elicit's structured extraction and screening workflows are deeper and are the better fit for formal, protocol-driven reviews.`,
      },
      {
        q: "Does Elicit train on my data?",
        a: "Elicit states that enterprise plans do not train on your data by default; check its published policy for other tiers. ResearcherNet encrypts data at rest and in transit, applies role-based access control, and is aligned with GDPR and India's DPDP Act, although not formally certified.",
      },
      {
        q: "Why is ResearcherNet cheaper than Elicit?",
        a: "The two products are priced for different jobs. Elicit charges for specialist extraction depth; ResearcherNet prices for a broader workspace that includes collaboration, writing and funding tools. Individual use of ResearcherNet is free today against $49/month for Elicit Pro, but depth of extraction may justify Elicit's price for review-heavy teams.",
      },
    ],
    lastVerified: VERIFIED,
  },

  // ---------------------------------------------------------------------------
  // Consensus
  // ---------------------------------------------------------------------------
  {
    slug: "consensus",
    competitor: "Consensus",
    competitorUrl: "https://consensus.app",
    title: "ResearcherNet vs Consensus (2026): quick evidence answers or a complete research workspace?",
    description:
      "How ResearcherNet compares with Consensus: AI academic search, Consensus Meter, collaboration, writing, funding and pricing, checked September 2026.",
    intro: `**Consensus** is an AI academic search engine that answers a question with what the literature actually says. Its Consensus Meter summarises whether studies agree, Pro Analysis and Study Snapshots turn a results page into a readable brief, and it indexes more than 200 million papers. With a reported 10 million-plus users across 12,500-plus universities, a 40 percent student discount and a Premium plan under $9 a month, it is arguably the most accessible evidence tool on the market.

**ResearcherNet** also provides semantic search (across 300 million-plus papers), Chat with Paper and research gap analysis, but search is the entry point rather than the product. The platform continues into AI collaborator matching on a research knowledge graph, researcher profiles and a social feed, real-time chat and HD video meetings, lab spaces with milestones, a collaborative LaTeX editor with version control, a publication navigator, grant alerts and a research-to-industry bridge. It was launched in Kolkata in December 2025 and serves 650-plus active researchers, a fraction of Consensus's audience.

If you want fast, trustworthy answers to "does the evidence support X?", or you are a student or clinician who needs a cheap, reliable search tool, Consensus is the better choice and we would not argue otherwise. If search is the first of many steps and you also need to find co-authors, write and submit the paper, and find funding, ResearcherNet does more in one place, and the free plan covers individuals.`,
    whatTheyDoWell: [
      "Consensus Meter gives an at-a-glance view of whether the literature agrees on a claim.",
      "Study Snapshots and Pro Analysis make results readable for non-specialists and clinicians.",
      "Very low price point, with a 40% student discount.",
      "Huge reach: a reported 10M+ users and 12,500+ universities.",
      "A clean, focused interface with almost no learning curve.",
    ],
    whereWeDiffer: [
      `ResearcherNet's index is larger (${facts.corpus} papers) and adds Chat with Paper and gap analysis on top of search.`,
      "It includes a collaboration workspace: matching, profiles, feed, chat, video meetings and lab spaces.",
      "A collaborative LaTeX editor with version control and LaTeX-to-Word conversion is built in.",
      "Grant alerts, funding discovery, commercialisation readiness and SDG mapping extend beyond search.",
      "Team and institution plans include role-based access control and optional on-premise deployment.",
    ],
    rows: [
      { feature: "AI academic search", us: `yes, ${facts.corpus} papers`, them: "yes, 200M+ papers" },
      { feature: "Evidence agreement summary (Consensus Meter)", us: "partial", them: "yes" },
      { feature: "Chat with a paper", us: "yes", them: "partial" },
      { feature: "Research gap analysis", us: "yes", them: "not a core focus" },
      { feature: "AI collaborator matching", us: "yes", them: "no" },
      { feature: "Collaboration workspace (chat, video, labs)", us: "yes", them: "no" },
      { feature: "Collaborative LaTeX editor", us: "yes", them: "no" },
      { feature: "Grant alerts and funding discovery", us: "yes", them: "no" },
      { feature: "Student discount", us: "free plan", them: "40% off Premium" },
      { feature: "Entry paid plan", us: "free for individuals; paid plans coming soon", them: "$8.99/month (annual)" },
    ],
    chooseThemIf: [
      "You mostly need quick, evidence-backed answers rather than a full research workflow.",
      "You are a student or clinician and price is the deciding factor.",
      "You want the simplest possible tool with no setup for a team.",
    ],
    chooseUsIf: [
      "You want search, collaborators, writing and funding in one workspace.",
      "You are building or running a lab and need milestones, shared spaces and video meetings.",
      "You need institutional controls such as role-based access or on-premise deployment.",
    ],
    pricingNote: `Prices as published on ${VERIFIED_DISPLAY}. Consensus: Free; Premium $8.99/month billed annually; Teams $9.99 per seat per month; Enterprise custom; a 40% student discount applies. ${RN_PRICING} Consensus is clearly the cheaper paid product; ResearcherNet's free tier is the fair comparison for individual users.`,
    faqs: [
      {
        q: "Does ResearcherNet have something like the Consensus Meter?",
        a: "Not as a single meter. ResearcherNet's research gap analysis and systematic-review support synthesise across papers, but Consensus's yes/no/possibly summary of agreement is a distinctive feature we do not replicate.",
      },
      {
        q: "Is Consensus enough for a PhD student?",
        a: "For finding and understanding evidence, yes, and it is inexpensive. Most PhD students also need to write with supervisors, find co-authors and track funding calls, which is where ResearcherNet's free plan complements or replaces it.",
      },
      {
        q: "Can I use both?",
        a: "Yes. Several ResearcherNet users keep Consensus for rapid evidence checks and use ResearcherNet for the collaboration, LaTeX writing and funding parts of the project.",
      },
    ],
    lastVerified: VERIFIED,
  },

  // ---------------------------------------------------------------------------
  // ResearchGate
  // ---------------------------------------------------------------------------
  {
    slug: "researchgate",
    competitor: "ResearchGate",
    competitorUrl: "https://www.researchgate.net",
    title: "ResearcherNet vs ResearchGate (2026): the academic social network versus an AI research workspace",
    description:
      "ResearcherNet vs ResearchGate: network size, profiles, Q&A, AI tools, collaborator matching, writing, funding and pricing, verified September 2026.",
    intro: `**ResearchGate** is the world's largest academic social network: more than 25 million researchers, over 160 million publication pages, question-and-answer threads, a jobs board and a profile that many academics treat as their public CV. It is free to use and funded by advertising and recruiting. If you want your papers to be found and your name to be visible to peers across every discipline, ResearchGate's reach is unmatched.

**ResearcherNet** shares the social layer, with researcher profiles, a feed, follow, and one-click profile import from ResearchGate itself, Google Scholar and ORCID, but it is built as a working environment rather than a network. On top of the profile it offers AI collaborator matching by expertise and co-citation on a research knowledge graph, real-time chat and HD video meetings, lab spaces with milestones, semantic search across 300 million-plus papers, Chat with Paper, a collaborative LaTeX editor with version control, grant alerts and a research-to-industry bridge. It launched in Kolkata in December 2025 with 650-plus active researchers, so its network is small by comparison.

If your main goal is visibility, reads, citations and a wide passive audience, ResearchGate is the better choice and it costs nothing. If you want a place where you actively find the right collaborator, talk to them, write the paper together and chase the grant, ResearcherNet is designed for that, and you can bring your ResearchGate profile with you in one click.`,
    whatTheyDoWell: [
      "Unrivalled reach: 25M+ researchers and 160M+ publication pages across every field.",
      "A free, familiar profile that many academics already maintain and cite.",
      "Q&A threads that surface practical answers from working scientists.",
      "A jobs board tied to real institutional recruiting.",
      "Reads, recommendations and citation tracking that help measure visibility.",
    ],
    whereWeDiffer: [
      "ResearcherNet matches collaborators actively, using expertise and co-citation on a research knowledge graph, rather than relying on following and suggestions.",
      "Chat, HD video meetings and lab spaces with milestones let you work with people, not just follow them.",
      "AI reading tools (semantic search, Chat with Paper, gap analysis) and a collaborative LaTeX editor are built in.",
      "Grant alerts, funding discovery, commercialisation readiness and SDG mapping bridge research to market.",
      "No advertising model; paid plans and institutional agreements fund the platform.",
    ],
    rows: [
      { feature: "Researcher profiles and following", us: "yes", them: "yes" },
      { feature: "Network size", us: `${facts.researchersRegistered} active researchers`, them: "25M+ researchers" },
      { feature: "Q&A community", us: "partial (feed)", them: "yes" },
      { feature: "Jobs board", us: "no", them: "yes" },
      { feature: "AI collaborator matching", us: "yes", them: "partial (suggestions)" },
      { feature: "Real-time chat and video meetings", us: "yes", them: "partial (messaging)" },
      { feature: "AI paper search and Chat with Paper", us: "yes", them: "no" },
      { feature: "Collaborative LaTeX editor", us: "yes", them: "no" },
      { feature: "Grant alerts and commercialisation", us: "yes", them: "no" },
      { feature: "Business model", us: "subscriptions", them: "advertising and recruiting" },
    ],
    chooseThemIf: [
      "You want maximum visibility for your publications and profile.",
      "You value a large Q&A community and a jobs board.",
      "You need a free, well-known profile page and nothing more.",
    ],
    chooseUsIf: [
      "You want to actively find collaborators and start working with them, not just follow them.",
      "You need AI reading, LaTeX writing and funding tools alongside the network.",
      "You prefer a platform without advertising, with role-based access and optional on-premise hosting.",
    ],
    pricingNote: `Prices as published on ${VERIFIED_DISPLAY}. ResearchGate is free for researchers and earns revenue from advertising and recruiter products. ${RN_PRICING} Importing your ResearchGate profile into ResearcherNet takes one click on any plan.`,
    faqs: [
      {
        q: "Can I import my ResearchGate profile into ResearcherNet?",
        a: "Yes. ResearcherNet offers one-click profile import from ResearchGate, Google Scholar and ORCID, so your publication list and identity carry over without retyping.",
      },
      {
        q: "Is ResearcherNet trying to replace ResearchGate?",
        a: "No. ResearchGate is the place to be seen; ResearcherNet is the place to work. Many users keep both, using ResearchGate for visibility and ResearcherNet for matching, meetings, LaTeX writing and funding.",
      },
      {
        q: "How does collaborator matching differ from ResearchGate suggestions?",
        a: "ResearchGate suggests people to follow based on activity and co-authorship. ResearcherNet's matching runs on a research knowledge graph that weighs expertise and co-citation, and it is followed by chat and video so a match can become a project.",
      },
    ],
    lastVerified: VERIFIED,
  },

  // ---------------------------------------------------------------------------
  // Overleaf
  // ---------------------------------------------------------------------------
  {
    slug: "overleaf",
    competitor: "Overleaf",
    competitorUrl: "https://www.overleaf.com",
    title: "ResearcherNet vs Overleaf (2026): the LaTeX editor everyone knows versus an all-in-one workspace",
    description:
      "ResearcherNet vs Overleaf: collaborative LaTeX editing, templates, versioning, AI tools, collaborator matching, funding and pricing, verified September 2026.",
    intro: `**Overleaf** is the default collaborative LaTeX editor for a very large share of the world's scientists: more than 30 million users, thousands of journal and university templates, real-time co-editing, track changes and history, and an ISO 27001-certified service that many institutions license campus-wide. Recent releases add basic AI assistance. If your only question is "where do I write my LaTeX paper with co-authors?", Overleaf is a safe, excellent answer.

**ResearcherNet** includes a real-time collaborative LaTeX editor with version control and LaTeX-to-Word conversion, but the editor is one room in a larger building. Before writing, the platform offers semantic search across 300 million-plus papers, Chat with Paper, research gap analysis and a publication navigator that suggests target journals and conferences. Around the writing, it offers AI collaborator matching, profiles, real-time chat, HD video meetings and lab spaces with milestones. After the writing, it offers grant alerts, commercialisation readiness and SDG impact mapping. It launched in Kolkata in December 2025 and is a much younger product.

If you want the deepest LaTeX experience, the widest template library and a campus licence your university probably already holds, Overleaf is the better choice and we say so plainly. If you would rather have an adequate LaTeX editor in the same workspace as your collaborators, your reading and your funding pipeline, ResearcherNet covers that ground on a single subscription, with INR billing and optional on-premise deployment.`,
    whatTheyDoWell: [
      "The most mature collaborative LaTeX editor available, with rich template coverage.",
      "Track changes, comments and a detailed history that co-authors already know how to use.",
      "ISO 27001 certification and widely held university-wide licences.",
      "Free tier that lets you write with one collaborator at no cost.",
      "Growing basic AI assistance inside the editor.",
    ],
    whereWeDiffer: [
      "ResearcherNet's LaTeX editor sits beside AI paper search, Chat with Paper and gap analysis, so reading and writing happen in one place.",
      "AI collaborator matching, chat, HD video and lab spaces bring your co-authors into the workspace rather than just into the document.",
      "A publication navigator suggests journals and conferences for the manuscript you are writing.",
      "LaTeX-to-Word conversion helps when a journal or funder demands a .docx.",
      "Grant alerts, funding discovery and commercialisation readiness extend beyond submission.",
    ],
    rows: [
      { feature: "Real-time collaborative LaTeX editing", us: "yes", them: "yes, best in class" },
      { feature: "Version control / history", us: "yes", them: "yes" },
      { feature: "Template library", us: "partial", them: "yes, extensive" },
      { feature: "LaTeX to Word conversion", us: "yes", them: "not a core focus" },
      { feature: "AI paper search and Chat with Paper", us: "yes", them: "no" },
      { feature: "Journal / conference suggestions", us: "yes", them: "not a core focus" },
      { feature: "AI collaborator matching", us: "yes", them: "no" },
      { feature: "Chat, video meetings, lab spaces", us: "yes", them: "no" },
      { feature: "Grant alerts and funding discovery", us: "yes", them: "no" },
      { feature: "Security certification", us: "GDPR/DPDP aligned, not certified", them: "ISO 27001" },
    ],
    chooseThemIf: [
      "LaTeX editing is the only capability you need and you want the most refined version of it.",
      "Your university already provides an Overleaf licence.",
      "You rely on a specific journal template or a large existing Overleaf project history.",
    ],
    chooseUsIf: [
      "You want your co-authors, literature, writing and funding alerts in one workspace.",
      "You need to hand a Word version of a LaTeX manuscript to a journal or funder.",
      "You are an Indian institution that wants INR billing or on-premise deployment.",
    ],
    pricingNote: `Prices as published on ${VERIFIED_DISPLAY}. Overleaf: Free (one collaborator); Student $8.25/month; Standard $16.75/month; Pro $33.25/month, all billed annually; group and university licences are quoted separately. ${RN_PRICING} Overleaf's paid tiers are cheaper than ResearcherNet Professional if all you need is the editor.`,
    faqs: [
      {
        q: "Is ResearcherNet's LaTeX editor as good as Overleaf's?",
        a: "It is a capable real-time collaborative editor with version control, but Overleaf has had many more years of refinement and a far larger template library. If the editor is your whole workflow, choose Overleaf.",
      },
      {
        q: "Can I move an Overleaf project into ResearcherNet?",
        a: "You can upload your .tex sources and bibliography files into a ResearcherNet project and continue editing collaboratively. Automatic project import from Overleaf is not currently offered.",
      },
      {
        q: "Does ResearcherNet convert LaTeX to Word?",
        a: "Yes. LaTeX-to-Word (and Word-to-LaTeX) conversion is a live feature, useful when a publisher, funder or co-author needs a .docx.",
      },
    ],
    lastVerified: VERIFIED,
  },

  // ---------------------------------------------------------------------------
  // Paperpal
  // ---------------------------------------------------------------------------
  {
    slug: "paperpal",
    competitor: "Paperpal",
    competitorUrl: "https://paperpal.com",
    title: "ResearcherNet vs Paperpal (2026): AI academic writing assistant versus full research platform",
    description:
      "ResearcherNet vs Paperpal: AI editing, citations, plagiarism and submission checks, collaboration, LaTeX, funding and INR pricing, verified September 2026.",
    intro: `**Paperpal**, built by Cactus Communications, is an India-origin AI writing assistant used by researchers and publishers worldwide. It positions itself as covering "search to submission": language editing, paraphrasing, citation help, plagiarism and AI-content checks, and pre-submission checks against journal requirements, all available inside Word, Google Docs and Overleaf through plugins. It carries FERPA, ISO 27001, GDPR, HIPAA and SOC badges and is trusted by a long list of universities and publishers.

**ResearcherNet** also helps you get a paper written and submitted, with a collaborative LaTeX editor, LaTeX-to-Word conversion, a publication navigator that suggests journals and conferences, and AI summarisation and gap analysis over 300 million-plus papers. But its emphasis is on the team and the trajectory of the research rather than the prose. AI collaborator matching, profiles, chat, HD video and lab spaces with milestones bring people together; grant alerts, commercialisation readiness and SDG impact mapping carry the work toward funding and market. A plagiarism and AI-content detection suite is in development, not yet live. ResearcherNet launched in Kolkata in December 2025 and serves 650-plus active researchers.

If you need polished academic English, plagiarism and AI-content checks, and journal-readiness reports today, Paperpal is the better choice, especially if you write in Word. If you want the collaborators, the LaTeX workspace, the funding radar and the industry bridge as well, and you are happy to wait for our integrity suite, ResearcherNet does more for a comparable price, with INR billing available on both.`,
    whatTheyDoWell: [
      "High-quality academic language editing and paraphrasing for non-native English writers.",
      "Plagiarism, AI-content and pre-submission checks that are live and trusted by publishers.",
      "Plugins for Word, Google Docs and Overleaf so you can stay in your editor.",
      "Broad compliance badges: FERPA, ISO 27001, GDPR, HIPAA and SOC.",
      "INR pricing and a publisher-backed reputation in India.",
    ],
    whereWeDiffer: [
      "ResearcherNet is a workspace, not a plugin: writing happens alongside literature search, collaborators and funding tools.",
      "AI collaborator matching, chat, HD video and lab spaces with milestones are live; Paperpal does not aim at team collaboration.",
      "A collaborative LaTeX editor with version control and LaTeX-to-Word conversion is built in.",
      "Grant alerts, commercialisation readiness and SDG impact mapping extend past submission.",
      "Multi-LLM orchestration (GPT, Claude and Llama-class models) rather than a single writing model.",
    ],
    rows: [
      { feature: "Academic language editing and paraphrasing", us: "partial", them: "yes, core strength" },
      { feature: "Plagiarism and AI-content detection", us: "in development", them: "yes" },
      { feature: "Pre-submission journal checks", us: "partial (publication navigator)", them: "yes" },
      { feature: "Word / Google Docs / Overleaf plugins", us: "no", them: "yes" },
      { feature: "AI paper search and Chat with Paper", us: "yes", them: "partial" },
      { feature: "AI collaborator matching", us: "yes", them: "no" },
      { feature: "Chat, video meetings, lab spaces", us: "yes", them: "no" },
      { feature: "Collaborative LaTeX editor", us: "yes", them: "no (plugin only)" },
      { feature: "Grant alerts and commercialisation", us: "yes", them: "no" },
      { feature: "INR billing", us: "yes", them: "yes" },
    ],
    chooseThemIf: [
      "You write mainly in Word and want editing, citations and integrity checks inside it.",
      "You need plagiarism and AI-content detection today.",
      "Your institution requires ISO 27001, HIPAA or SOC certification from the vendor.",
    ],
    chooseUsIf: [
      "You need to find co-authors and work with them in the same place you write.",
      "You write in LaTeX and want version control plus Word conversion.",
      "You want funding alerts and a commercialisation path built into your research workspace.",
    ],
    pricingNote: `Prices as published on ${VERIFIED_DISPLAY}. Paperpal: a free tier and a Prime plan at roughly ₹1,599/month in India (around $19 to $25/month elsewhere), with an annual discount; institutional plans are quoted separately. ${RN_PRICING} Both vendors bill in INR.`,
    faqs: [
      {
        q: "Does ResearcherNet check for plagiarism like Paperpal?",
        a: "Not yet. A plagiarism and AI-content detection suite is on ResearcherNet's roadmap and is labelled in development. Paperpal's checks are live today, so choose Paperpal if that is essential now.",
      },
      {
        q: "Can I use Paperpal inside ResearcherNet?",
        a: "There is no direct integration. You can draft in ResearcherNet's LaTeX editor, export to Word with the built-in converter, and run Paperpal's Word plugin on the result.",
      },
      {
        q: "Which is better for an Indian researcher?",
        a: "Both are India-origin and bill in INR. Paperpal is stronger for language polishing and integrity checks; ResearcherNet is stronger for collaboration, LaTeX, funding and commercialisation, and is aligned with India's DPDP Act with optional on-premise deployment for institutions.",
      },
    ],
    lastVerified: VERIFIED,
  },

  // ---------------------------------------------------------------------------
  // ChatGPT
  // ---------------------------------------------------------------------------
  {
    slug: "chatgpt",
    competitor: "ChatGPT",
    competitorUrl: "https://chatgpt.com",
    title: "ResearcherNet vs ChatGPT (2026): general-purpose AI or a platform built for research?",
    description:
      "ResearcherNet vs ChatGPT: scholarly grounding, citation accuracy, Deep Research, collaboration, LaTeX, funding and pricing, verified September 2026.",
    intro: `**ChatGPT** from OpenAI is the most capable general assistant most researchers have access to. It drafts, explains, rewrites, codes and, with Deep Research, produces long structured reports from the open web. It is available free, with Plus at $20/month, Pro at $200/month and Team plans for organisations. For brainstorming, untangling a method, cleaning up prose or writing analysis scripts, it is extraordinarily useful and often the first tool a researcher opens.

**ResearcherNet** is not a general assistant. It grounds its AI in a scholarly index of more than 300 million papers, so semantic search, Chat with Paper, research gap analysis and the publication navigator answer from real literature rather than from a model's memory. It uses multi-LLM orchestration, drawing on GPT, Claude and Llama-class models, so you are not tied to one vendor. Around that AI sit collaborator matching on a research knowledge graph, profiles and a feed, chat and HD video, lab spaces with milestones, a collaborative LaTeX editor with version control, grant alerts and a research-to-industry bridge. Data is encrypted at rest and in transit with role-based access control, GDPR and DPDP-India alignment and optional on-premise deployment. It launched in Kolkata in December 2025.

If you need a flexible thinking partner for writing, coding and explanation, ChatGPT is the better choice and ResearcherNet does not try to replace it. If you need answers anchored to real papers with checkable citations, plus the people and workflow around a research project, ResearcherNet is the purpose-built option. Many researchers sensibly use both.`,
    whatTheyDoWell: [
      "Exceptional general reasoning, drafting, coding and explanation across any subject.",
      "Deep Research produces long, structured reports from the open web.",
      "Fast iteration on prose, outlines, rebuttals and analysis code.",
      "A generous free tier and a widely understood interface.",
      "Rapid model improvements and a large ecosystem of integrations.",
    ],
    whereWeDiffer: [
      `ResearcherNet's AI is grounded in a ${facts.corpus} paper index, reducing the fabricated citations that general chatbots can produce.`,
      "Multi-LLM orchestration means you can draw on GPT, Claude and Llama-class models inside one research workflow.",
      "Collaborator matching, profiles, chat, HD video and lab spaces are built for research teams, not general users.",
      "A collaborative LaTeX editor, publication navigator and LaTeX-to-Word conversion serve the manuscript directly.",
      "Grant alerts, commercialisation readiness and SDG mapping have no equivalent in a general assistant.",
    ],
    rows: [
      { feature: "Grounded in a scholarly paper index", us: `yes, ${facts.corpus} papers`, them: "not by default" },
      { feature: "Citations traceable to real papers", us: "yes", them: "partial, can hallucinate" },
      { feature: "General drafting, coding and explanation", us: "partial", them: "yes, core strength" },
      { feature: "Long-form web research reports", us: "partial", them: "yes (Deep Research)" },
      { feature: "Multi-LLM orchestration", us: "yes", them: "no (OpenAI models)" },
      { feature: "AI collaborator matching", us: "yes", them: "no" },
      { feature: "Chat, video meetings, lab spaces", us: "yes", them: "no" },
      { feature: "Collaborative LaTeX editor", us: "yes", them: "no" },
      { feature: "Grant alerts and commercialisation", us: "yes", them: "no" },
      { feature: "On-premise deployment option", us: "yes", them: "no" },
    ],
    chooseThemIf: [
      "You want a general-purpose assistant for writing, coding, brainstorming and explanation.",
      "You already verify every citation yourself and do not need scholarly grounding built in.",
      "You need Deep Research-style reports from the open web rather than from the literature.",
    ],
    chooseUsIf: [
      "You need answers tied to real, checkable papers.",
      "Your work involves co-authors, a lab, LaTeX manuscripts and funding calls.",
      "Your institution requires role-based access, DPDP or GDPR alignment, or on-premise hosting.",
    ],
    pricingNote: `Prices as published on ${VERIFIED_DISPLAY}. ChatGPT: Free; Plus $20/month; Pro $200/month; Team roughly $25 to $30 per user per month; Enterprise custom. Data-handling terms vary by plan, so check OpenAI's policy for your tier. ${RN_PRICING}`,
    faqs: [
      {
        q: "Does ChatGPT make up citations?",
        a: `It can. ChatGPT is not grounded in a scholarly corpus by default and may produce plausible but non-existent references. ResearcherNet's search and Chat with Paper answer from an index of ${facts.corpus} real papers, so citations can be traced and checked.`,
      },
      {
        q: "Does ResearcherNet use ChatGPT under the hood?",
        a: "ResearcherNet uses multi-LLM orchestration that draws on GPT, Claude and Llama-class models, selecting per task, and grounds them in its research knowledge graph and paper index rather than relying on any single model's memory.",
      },
      {
        q: "Should I cancel ChatGPT if I subscribe to ResearcherNet?",
        a: "Probably not. They serve different needs. ChatGPT is a general thinking and writing partner; ResearcherNet handles the research-specific work of grounded search, collaboration, LaTeX writing and funding. Most researchers keep both.",
      },
    ],
    lastVerified: VERIFIED,
  },
];
