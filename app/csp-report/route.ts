import { NextResponse, type NextRequest } from "next/server";

/**
 * CSP violation sink. The policy is Report-Only, so nothing is blocked; reports land here
 * and are logged so the policy can be tightened before it is enforced.
 */
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    // Browsers send either {"csp-report": {...}} (Level 2) or an array of reports (Level 3).
    const reports = Array.isArray(body) ? body : [body["csp-report"] ?? body];
    for (const r of reports) {
      const d = r.body ?? r;
      console.warn("[csp]", JSON.stringify({
        documentURL: d["document-uri"] ?? d.documentURL,
        blockedURL: d["blocked-uri"] ?? d.blockedURL,
        directive: d["effective-directive"] ?? d["violated-directive"] ?? d.effectiveDirective,
        disposition: d.disposition ?? "report",
      }));
    }
  } catch {
    console.warn("[csp] unparseable report");
  }
  return new NextResponse(null, { status: 204 });
}

export function GET() {
  return NextResponse.json({ ok: true, note: "POST CSP reports here" });
}
