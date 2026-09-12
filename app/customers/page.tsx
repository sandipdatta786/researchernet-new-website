import Link from "next/link";
import type { Metadata } from "next";
import { caseStudies, allCaseStudiesDraft } from "@/content/customers";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumb, Eyebrow, CtaBand } from "@/components/Blocks";
import { Check } from "@/components/Icons";

/** Noindex while every study is still a draft; remove the draft flag to publish. */
export const metadata: Metadata = pageMetadata({
  title: "Customer stories — institutional case studies",
  description: "How universities and research institutes use ResearcherNet: what each pilot measured, the numbers it produced and what happened next.",
  path: "/customers",
  noIndex: allCaseStudiesDraft(),
});

export default function CustomersPage() {
  const crumbs = [{ name: "Home", path: "/" }, { name: "Customers", path: "/customers" }];
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <section className="section">
        <div className="container container--narrow">
          <Breadcrumb crumbs={crumbs} />
          <Eyebrow>Customer stories</Eyebrow>
          <h1 className="h1">What institutions measured</h1>
          <p className="lead mt-3">Every study below states what was agreed as the measure before the pilot began, what it produced, and what the institution decided afterwards. Numbers are published only after they are signed off at the month-six review.</p>
        </div>
      </section>

      {caseStudies.map((c) => (
        <section key={c.slug} className="section section--line">
          <div className="container container--narrow">
            {c.draft && (
              <div className="card mb-4" style={{ borderColor: "var(--orange-line)" }}>
                <div className="mono accent tiny mb-2">Not published</div>
                <p className="small">{c.draftNote}. Placeholders are written in double brackets and must be replaced with signed-off figures. This page is excluded from search engines and the sitemap until the last draft flag is removed.</p>
              </div>
            )}

            <h2 className="h2">{c.institutionFull ?? c.institution}</h2>
            <div className="grid grid-3 mt-3">
              <div className="card card--flat"><div className="mono accent tiny mb-2">Department</div><p className="small">{c.department}</p></div>
              <div className="card card--flat"><div className="mono accent tiny mb-2">Pilot dates</div><p className="small">{c.pilotStart} — {c.pilotEnd}</p></div>
              <div className="card card--flat"><div className="mono accent tiny mb-2">Track</div><p className="small">{c.track}</p></div>
            </div>

            <h3 className="h3 mt-6 mb-2">What was measured</h3>
            <ul className="list-check">{c.measured.map((m) => <li key={m}><Check /><span>{m}</span></li>)}</ul>

            <h3 className="h3 mt-6 mb-3">The numbers</h3>
            <div className="stats" aria-label="Pilot outcomes">
              {c.numbers.map((n) => (
                <div key={n.label}>
                  <div className="stat-value">{n.value}</div>
                  <div className="stat-label">{n.label}</div>
                  {n.note && <div className="stat-note">{n.note}</div>}
                </div>
              ))}
            </div>

            <figure className="card card--flat mt-6" style={{ margin: 0 }}>
              <blockquote className="serif" style={{ margin: 0, fontSize: "1.25rem", lineHeight: 1.4, color: "var(--text)" }}>“{c.quote.text}”</blockquote>
              <figcaption className="mt-3 small">
                <span style={{ fontWeight: 600, color: "var(--text)", display: "block" }}>{c.quote.name}</span>
                <span className="dim">{c.quote.role}</span>
              </figcaption>
            </figure>

            <h3 className="h3 mt-6 mb-2">What happens next</h3>
            <p className="lead">{c.next}</p>

            <p className="small mt-4">
              <Link href="/institutional-pilot" className="accent">How an institutional pilot runs →</Link>
              {"  ·  "}
              <Link href="/pilot/provenance" className="accent">The 90-day provenance pilot →</Link>
            </p>
          </div>
        </section>
      ))}

      <section className="section"><div className="container"><CtaBand location="customers-bottom" /></div></section>
    </>
  );
}
