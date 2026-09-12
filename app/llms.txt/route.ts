import { facts, SITE_URL, APP_URL } from "@/content/facts";
import { productPages, segments } from "@/content/product";
import { comparePages } from "@/content/compare";
import { blogPosts } from "@/content/blog";

export const dynamic = "force-static";

export function GET() {
  const body = `# ResearcherNet

> ${facts.description}

ResearcherNet is developed by ${facts.legalName} (CIN ${facts.cin}), headquartered at ${facts.hq.line1}, ${facts.hq.city}, ${facts.hq.country}. Launched ${facts.launch.display} at ${facts.launch.venue}. ${facts.stats.researchers.value} active researchers from institutions including ${facts.institutions.map((i) => i.name).join(", ")}. Semantic search corpus: ${facts.stats.papers.value} papers.

Patent: "${facts.patent.title}", Indian patent application ${facts.patent.number}, filed ${facts.patent.filedDisplay}, ${facts.patent.claims} claims, ${facts.patent.status.toLowerCase()}.

Recognition: ${facts.recognition.map((r) => `${r.title} (${r.org}, ${r.date})`).join("; ")}.

Founders: ${facts.team.map((t) => `${t.name} (${t.role})`).join("; ")}.${facts.advisors.length ? ` Advisor: ${facts.advisors.map((a) => a.name).join(", ")}.` : ""}

Pricing: ${facts.pricing.tiers.filter((t) => !t.hidden).map((t) => `${t.name} ${t.usd === null ? "custom" : t.usd === 0 ? "free" : `$${t.usd}/month`}`).join(", ")}. Institutional pilots include complimentary first-year access under an MOU.

Application: ${APP_URL}

## Pages
- Home: ${SITE_URL}/
- Product overview: ${SITE_URL}/product
${productPages.map((p) => `- ${p.nav}: ${SITE_URL}/product/${p.slug}`).join("\n")}
${segments.map((s) => `- For ${s.nav}: ${SITE_URL}/for/${s.slug}`).join("\n")}
- Institutional pilot: ${SITE_URL}/institutional-pilot
- Pricing: ${SITE_URL}/pricing
- FAQ: ${SITE_URL}/faq
- About: ${SITE_URL}/about
- Recognition: ${SITE_URL}/recognition
- Investors: ${SITE_URL}/investors
- Press kit: ${SITE_URL}/press
- Privacy: ${SITE_URL}/privacy
- Terms: ${SITE_URL}/terms

## Comparisons
${comparePages.map((c) => `- ResearcherNet vs ${c.competitor}: ${SITE_URL}/compare/${c.slug}`).join("\n")}

## Blog
${blogPosts.filter((b) => !b.draft).map((b) => `- ${b.title}: ${SITE_URL}/blog/${b.slug}`).join("\n")}

Contact: ${facts.emails.hello}
Last updated: ${facts.lastUpdated}
`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "public, max-age=3600" } });
}
