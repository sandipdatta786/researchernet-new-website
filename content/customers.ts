/**
 * Institutional case studies.
 *
 * A study stays `draft` until its numbers are signed off at the month-six review.
 * While every study is a draft the /customers page is noindex and is kept out of the
 * sitemap, so nothing half-finished is offered to search engines.
 *
 * Placeholders are written [[LIKE_THIS]]. Never replace one with an estimate: these are
 * public claims about a named institution.
 */
export type CaseStudy = {
  slug: string;
  institution: string;
  institutionFull?: string;
  department: string;
  pilotStart: string;
  pilotEnd: string;
  track: string;
  /** What the pilot set out to measure, agreed before it started. */
  measured: string[];
  /** Exactly three headline numbers. */
  numbers: [Metric, Metric, Metric];
  quote: { text: string; name: string; role: string };
  next: string;
  draft?: boolean;
  draftNote?: string;
};

type Metric = { value: string; label: string; note?: string };

export const caseStudies: CaseStudy[] = [
  {
    slug: "svist",
    institution: "SVIST",
    institutionFull: "Swami Vivekananda Institute of Science and Technology",
    department: "[[DEPARTMENT]]",
    pilotStart: "[[PILOT_START]]",
    pilotEnd: "[[PILOT_END]]",
    track: "[[TRACK — institution-wide MOU year, or the 90-day departmental provenance pilot]]",
    measured: [
      "[[MEASURE_1 — e.g. collaboration requests against the pre-pilot baseline]]",
      "[[MEASURE_2 — e.g. time from idea to a submission-ready record]]",
      "[[MEASURE_3 — e.g. industry enquiries routed to the research office]]",
    ],
    numbers: [
      { value: "[[NUMBER_1]]", label: "[[LABEL_1]]", note: "[[BASELINE_1 — what this is measured against]]" },
      { value: "[[NUMBER_2]]", label: "[[LABEL_2]]", note: "[[BASELINE_2]]" },
      { value: "[[NUMBER_3]]", label: "[[LABEL_3]]", note: "[[BASELINE_3]]" },
    ],
    quote: {
      text: "[[QUOTE — verbatim, with written consent on file before publication]]",
      name: "[[QUOTE_NAME]]",
      role: "[[QUOTE_ROLE]]",
    },
    next: "[[WHAT_HAPPENS_NEXT — e.g. continuing licence, wider rollout, or a second department]]",
    draft: true,
    draftNote: "draft — numbers pending month-six review",
  },
];

/** True while nothing is publishable; drives noindex and sitemap exclusion. */
export const allCaseStudiesDraft = () => caseStudies.every((c) => c.draft);
export const publishedCaseStudies = () => caseStudies.filter((c) => !c.draft);
