import { NextResponse } from "next/server";

export const runtime = "nodejs";

type Payload = {
  kind: "pilot" | "contact" | "investor";
  name?: string; email?: string; org?: string; role?: string; topic?: string; size?: string; message?: string; website?: string; consent?: string;
};

const bucket = new Map<string, { n: number; t: number }>();
function limited(ip: string) {
  const now = Date.now();
  const b = bucket.get(ip);
  if (!b || now - b.t > 60_000) { bucket.set(ip, { n: 1, t: now }); return false; }
  b.n += 1;
  return b.n > 5;
}

const esc = (s: string) => s.replace(/[<>&]/g, (c) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;" }[c] as string));

export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (limited(ip)) return NextResponse.json({ error: "Too many requests. Please try again in a minute." }, { status: 429 });

  let body: Payload;
  try { body = (await req.json()) as Payload; } catch { return NextResponse.json({ error: "Invalid request" }, { status: 400 }); }

  if (body.website) return NextResponse.json({ ok: true, message: "Thanks — we'll be in touch." }); // honeypot: pretend success
  const email = (body.email || "").trim();
  if (!body.name?.trim() || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email) || !body.message?.trim() || !body.consent) {
    return NextResponse.json({ error: "Please fill in your name, a valid email, a message and the consent box." }, { status: 400 });
  }

  const label = body.kind === "pilot" ? "Institutional pilot request" : body.kind === "investor" ? "Investor enquiry" : "Contact form";
  const lines = [
    `Kind: ${label}`, `Name: ${body.name}`, `Email: ${email}`, `Organisation: ${body.org || "-"}`, `Role: ${body.role || "-"}`,
    `Topic: ${body.topic || "-"}`, body.size ? `Size: ${body.size}` : "", "", body.message || "",
  ].filter((l) => l !== undefined);

  const key = process.env.RESEND_API_KEY;
  const to = (process.env.FORM_TO_EMAIL || "hello@researchernet.com").split(",").map((s) => s.trim());
  const from = process.env.FORM_FROM_EMAIL || "ResearcherNet Website <onboarding@resend.dev>";

  if (!key) {
    // Not configured yet — log so nothing is silently lost on preview deployments.
    console.log("[lead] RESEND_API_KEY not set; submission:", lines.join("\n"));
    return NextResponse.json({ ok: true, message: "Thanks — we've received your request and will reply within one working day." });
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from, to, reply_to: email,
      subject: `[researchernet.com] ${label}: ${body.org || body.name}`,
      text: lines.join("\n"),
      html: `<pre style="font-family:ui-monospace,monospace">${esc(lines.join("\n"))}</pre>`,
    }),
  });
  if (!res.ok) {
    console.error("[lead] Resend error", res.status, await res.text());
    return NextResponse.json({ error: "We couldn't send your message right now." }, { status: 502 });
  }
  return NextResponse.json({ ok: true, message: "Thanks — we've received your request and will reply within one working day." });
}
