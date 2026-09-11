"use client";
import { useState, type FormEvent } from "react";
import { track } from "./Analytics";

type Kind = "pilot" | "contact" | "investor";

export function LeadForm({ kind, defaultTopic }: { kind: Kind; defaultTopic?: string }) {
  const [state, setState] = useState<"idle" | "sending" | "ok" | "err">("idle");
  const [msg, setMsg] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setState("sending");
    try {
      const res = await fetch("/api/lead", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ kind, ...data }) });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Something went wrong");
      setState("ok");
      setMsg(json.message);
      track(kind === "pilot" ? "pilot_request" : "contact_submit", { form: kind, topic: String(data.topic ?? "") });
      form.reset();
    } catch (err) {
      setState("err");
      setMsg(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  const topics = kind === "pilot"
    ? ["University / college", "Research institute or CSIR lab", "Incubator / TTO", "Other"]
    : kind === "investor"
      ? ["Request the deck", "Schedule a call", "Strategic partnership"]
      : ["General", "Institutional pilot", "Industry partnership", "Funders & government", "Press", "Live demo", "Support"];

  return (
    <form className="form" onSubmit={onSubmit} aria-label={`${kind} form`}>
      <div className="form__row">
        <label>Full name<input name="name" required autoComplete="name" /></label>
        <label>Work email<input name="email" type="email" required autoComplete="email" /></label>
      </div>
      <div className="form__row">
        <label>{kind === "pilot" ? "Institution" : "Organisation"}<input name="org" required autoComplete="organization" /></label>
        <label>Role<input name="role" placeholder={kind === "pilot" ? "Dean / Research Director / Librarian" : "Your role"} /></label>
      </div>
      <label>
        {kind === "pilot" ? "Institution type" : "Topic"}
        <select name="topic" defaultValue={defaultTopic && topics.includes(defaultTopic) ? defaultTopic : topics[0]}>
          {topics.map((t) => <option key={t} value={t}>{t}</option>)}
        </select>
      </label>
      {kind === "pilot" && (
        <label>Approximate number of researchers<input name="size" placeholder="e.g. 250 faculty and 600 scholars" /></label>
      )}
      <label>{kind === "pilot" ? "What would a successful pilot look like for you?" : "Message"}<textarea name="message" required /></label>
      <label className="honeypot" aria-hidden="true">Leave empty<input name="website" tabIndex={-1} autoComplete="off" /></label>
      <label className="small dim" style={{ display: "flex", flexDirection: "row", alignItems: "flex-start", gap: 10, flexWrap: "nowrap" }}>
        <input type="checkbox" name="consent" required style={{ width: "auto", marginTop: 4 }} />
        <span>I agree to be contacted about this request and have read the <a href="/privacy" className="accent">privacy policy</a>.</span>
      </label>
      <div className="row">
        <button className="btn btn--primary btn--lg" type="submit" disabled={state === "sending"}>
          {state === "sending" ? "Sending…" : kind === "pilot" ? "Request the pilot" : kind === "investor" ? "Send request" : "Send message"}
        </button>
      </div>
      {state === "ok" && <div className="notice notice--ok" role="status">{msg}</div>}
      {state === "err" && <div className="notice notice--err" role="alert">{msg} — or email us directly at hello@researchernet.com.</div>}
    </form>
  );
}
