import type { FaqItem } from "./types";

export type DocPage = {
  slug: string;
  nav: string;          // short label for the Resources menu
  title: string;
  description: string;  // meta, <=155 chars
  content: string;      // markdown
  related?: { label: string; href: string }[];
  faqs?: FaqItem[];
};

/**
 * Product documentation. Every statement here is drawn from copy that already exists
 * elsewhere on the site; anything not yet shipped is labelled "in development".
 */
export const docPages: DocPage[] = [
  {
    slug: "getting-started",
    nav: "Getting started",
    title: "Getting started: importing your profile from Google Scholar or ORCID",
    description: "Create a ResearcherNet profile in minutes with one-click Google Scholar, ORCID or ResearchGate import, then start searching and matching.",
    content: `
Individual researchers can use ResearcherNet free, so nothing here needs a purchase order or an institutional decision. The fastest route to a working profile is to import the publication record you already maintain somewhere else.

## Import your publications

Profiles can be created via one-click Google Scholar, ORCID or ResearchGate import. That matters for more than convenience. Collaborator matching ranks people using a research knowledge graph built from publications, expertise domains and projects, so a complete publication record is what makes the recommendations useful. A profile with three hand-typed fields is a thin input, and the suggestions will reflect that.

If you maintain more than one of those records, import the most complete one.

## Verify with an institutional email

Verifying with an institutional email address unlocks academic pricing when the Professional and Team plans launch. It is also how the platform establishes that you belong to a given institution, which matters if your university later runs a campus-wide licence or a pilot.

Single sign-on is **in development**; institutional email verification is what exists today.

## What to do first

Three things are worth trying before you decide whether the platform is useful to you.

**Search for something you already know well.** Semantic search covers 300M+ papers and retrieves by meaning rather than keyword overlap, so describe the problem the way you would to a colleague rather than as a query string. The useful test is whether it returns the foundational papers you would expect, plus something you had not seen.

**Open Chat with Paper on a paper you have read carefully.** You are checking whether the answers hold up against your own understanding, not whether they sound fluent.

**Look at your collaborator suggestions.** They are ranked by the semantic similarity of your work adjusted for position in the graph, which means an adjacent researcher can rank above an exact keyword match. That is deliberate: for most projects you want a complementary skill, not a competitor.

## Where your work sits

Unpublished manuscripts are never used to train public models. Data is encrypted at rest and in transit, and access is role-based. If your institution has data-residency requirements, on-premise deployment is available; see the data and privacy page for the detail.
`,
    related: [
      { label: "Lab spaces and projects", href: "/docs/lab-spaces-and-projects" },
      { label: "Data and privacy settings", href: "/docs/data-and-privacy" },
    ],
  },
  {
    slug: "lab-spaces-and-projects",
    nav: "Lab spaces & projects",
    title: "Lab spaces and projects",
    description: "How lab spaces, shared projects, roles and meetings work in ResearcherNet, and which capabilities arrive with which plan.",
    content: `
A project in ResearcherNet is the unit that holds work together: the literature you saved, the manuscript you are drafting, the people who have access, and the history of what changed.

## Projects

Search results can be saved straight into a project, so the reading that led to a paper stays attached to the paper. Because the collaborative LaTeX editor carries version control, the draft and its history live in the same place rather than in a separate file share.

## Lab spaces

Lab spaces group projects for a research group, with shared projects, a feed, chat and HD video meetings with recording. The intention is that the path from finding a collaborator to working with one stays inside a single workspace rather than crossing three products.

## Roles and access

Access is role-based, and the level of granularity depends on the plan.

- **Free and Professional:** role-based access at project level.
- **Team:** lab-level roles and audit logs, alongside team analytics and milestone tracking.
- **Institution:** role-based access at project, lab and institution level, with audit trails.

The Professional and Team plans are **coming soon**. Individual researchers can use ResearcherNet free today, and institutions can license the platform campus-wide or lab-wide now.

Optional end-to-end encryption is available for sensitive work, which is worth knowing before a lab puts unpublished results into a shared project.

## For institutions

An institutional licence adds a dashboard covering research output, collaboration signals and SDG-mapped impact, and a trained campus ambassador to support adoption. Institutional licences are billed annually in INR with a GST invoice.

Several capabilities relevant to lab management are **in development**: institutional research-output dashboards beyond the current view, no-code statistical analysis, and a scientific visualisation suite. A smart deadline tracker is also in development. None of these should be counted in a procurement decision today.

## Bringing an existing group across

The cheapest way to move a group is to start with a project that has not started yet rather than one mid-flight. Publication records import in one click from Google Scholar or ORCID, so the profiles are quick; the habits are the slow part.
`,
    related: [
      { label: "Collaborative LaTeX and LaTeX to Word", href: "/docs/collaborative-latex" },
      { label: "How an institutional pilot runs", href: "/docs/institutional-pilot" },
    ],
  },
  {
    slug: "collaborative-latex",
    nav: "Collaborative LaTeX",
    title: "Collaborative LaTeX and LaTeX to Word conversion",
    description: "Writing together in ResearcherNet: a real-time collaborative LaTeX editor with version control, LaTeX to Word conversion and a publication navigator.",
    content: `
ResearcherNet includes a real-time collaborative LaTeX editor with version control. It is available on every plan, including the free one.

## Writing together

Co-authors edit the same document at the same time, and version control keeps the history of what changed. Because the editor sits in the same workspace as semantic search across 300M+ papers, Chat with Paper and research-gap analysis, reading and writing happen in one place rather than across two subscriptions.

Chat, HD video meetings and lab spaces are in the same workspace, so a question about a paragraph does not have to leave the tool the paragraph is in.

## LaTeX to Word

LaTeX to Word conversion covers the point where a journal or a funder requires a .docx and your manuscript is in LaTeX. This is a common failure point at submission, and it is not a core focus for dedicated LaTeX editors.

## Choosing where to submit

A publication navigator suggests journals and conferences for the manuscript you are actually writing, matched against its content rather than against a generic list. It is available on the Professional plan, which is **coming soon**.

## An honest comparison

Overleaf is the most mature collaborative LaTeX editor available, with extensive template coverage, track changes and history that co-authors already know, ISO 27001 certification and widely held university-wide licences. If LaTeX editing is the only capability you need, it is the better tool, and if your university already provides a licence the case for changing is weak.

The argument for writing here instead is the surrounding workspace: literature, collaborators, funding alerts and the manuscript in one subscription, with INR billing and an on-premise option for institutions that need them. The full, dated feature-by-feature comparison is on the [ResearcherNet vs Overleaf](/compare/overleaf) page, including the rows where Overleaf wins.

## What is not ready

Multilingual plagiarism and AI-content detection is **in development**. So is the Research Ledger, which records what a model contributed to a result and produces an exportable provenance report; it is being shaped with pilot departments rather than designed in isolation.
`,
    related: [
      { label: "Lab spaces and projects", href: "/docs/lab-spaces-and-projects" },
      { label: "ResearcherNet vs Overleaf", href: "/compare/overleaf" },
    ],
  },
  {
    slug: "data-and-privacy",
    nav: "Data & privacy",
    title: "Data and privacy settings",
    description: "Encryption, role-based access, model policy, DPDP and GDPR alignment, and the on-premise option for unpublished research.",
    content: `
Researchers put manuscripts into this platform before they are public. What follows is what protects them, stated plainly enough to check.

## Encryption

All data is encrypted at rest and in transit. Optional end-to-end encryption is available for sensitive work.

## Access control

Access is role-based at project, lab and institution level, with audit trails. On an institutional licence that means a research office can see what it needs to without a lab losing control of unpublished material.

## What the AI is allowed to do

Documents are processed to provide the features you use. **Unpublished manuscripts are never used to train public models.** Aggregated, de-identified interaction data may improve the platform's own recommendation systems, and that is described in the privacy policy.

Institutions can substitute models or run constrained configurations. The multi-LLM orchestration layer routes tasks across models, which is what makes substitution possible rather than theoretical.

## Regulatory alignment

The platform is designed in line with India's Digital Personal Data Protection Act 2023 and the GDPR, with a named grievance and data-protection contact. There is no certification scheme for either law, so the honest statement is that the platform is designed and operated in line with both, not that it is certified against them.

## Deployment

On-premise deployment is available for institutions with data-residency or AI-policy requirements. The same search, gap analysis, editor and matching run either way; the deployment choice governs where data sits and which models touch it, not which features you get.

## On the trust roadmap

Two items are **in development** and should not be counted in a procurement decision today: **single sign-on**, where institutional email verification is the current mechanism, and **SOC 2 preparation**.

The **Research Ledger** is also in development: a contribution and model ledger on every project, a verification step before a result is marked accepted, and an exportable provenance report for journals, funders and IP cells.

## Reading further

The full [privacy policy](/privacy) sets out data handling and the contacts for exercising your rights. The [security and privacy](/product/security) page covers the same ground from a product perspective.
`,
    related: [
      { label: "How an institutional pilot runs", href: "/docs/institutional-pilot" },
      { label: "Security and privacy", href: "/product/security" },
    ],
  },
  {
    slug: "institutional-pilot",
    nav: "Institutional pilot",
    title: "How an institutional pilot runs",
    description: "The ninety-day institutional pilot: three phases, a complimentary MOU year, a campus ambassador and a joint outcomes review at month six.",
    content: `
There are two tracks. Most institutions start with the first.

## Track 1: the institution-wide MOU year

The institution-wide MOU year is complimentary. It provides access for every researcher, a trained campus ambassador and a joint outcomes review at month six. The campus track creates no financial commitment.

**Phase 1, weeks 1 to 4 — onboarding.** Researcher profiles for participating faculty and scholars are created via one-click Google Scholar or ORCID import. The lab technology portfolio is listed for discovery. A campus ambassador is nominated and trained. No cost under the campus MOU, minimal effort.

**Phase 2, months 2 to 3 — activation.** AI matchmaking goes live: research gap analysis, collaborator suggestions and inbound industry queries routed to your research office or business-development team.

**Phase 3, months 4 to 6 — measurement.** A joint review of engagement metrics against your current baseline: collaboration requests, industry enquiries, technology views and publications supported, with a translation-outcomes report for institutional review.

## Track 2: the 90-day provenance pilot

A department that wants the provenance pilot pays a fixed departmental fee, credited in full against the campus licence if the institution proceeds at the month-six review.

It is scoped to one department of 25 to 50 researchers, with a faculty lead and a research-office or IP-cell nominee. It builds a provenance and integrity record for AI-assisted work: who proposed each idea, which model and which papers it drew on, and who changed it when. The contribution and model ledger, the verification step and the provenance export are **in development**, and the department shapes the fields.

## What the MOU records

The MOU is between AIMTECH Dynamics Private Limited, which operates ResearcherNet, and the institution. It records complimentary access, the campus ambassador programme, the review cadence and the option — never an obligation — of a continuing institutional licence. The full text is shared on request.

## What we ask for

A faculty lead, a research-office nominee, two half-day onboarding sessions, and a letter of intent so the pilot can be named in our public materials.

## Next step

The [institutional pilot programme](/institutional-pilot) page covers the MOU in plain language. The [provenance pilot](/pilot/provenance) page covers track 2 in full. For the institutional view of the platform, see [ResearcherNet for universities and institutions](/for/institutions).
`,
    related: [
      { label: "Institutional pilot programme", href: "/institutional-pilot" },
      { label: "Provenance pilot", href: "/pilot/provenance" },
    ],
  },
];
