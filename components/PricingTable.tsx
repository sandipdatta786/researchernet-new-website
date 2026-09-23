"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { facts } from "@/content/facts";
import { appSignup } from "@/lib/seo";
import { Check, ArrowRight } from "./Icons";
import { track } from "./Analytics";

/** Renders a "(in development)" marker in a feature string as the roadmap tag. */
function Feature({ text }: { text: string }) {
  const marker = " (in development)";
  if (!text.includes(marker)) return <span>{text}</span>;
  const [before, after] = text.split(marker);
  return <span>{before} <span className="mock__tag">in development</span>{after}</span>;
}

export function PricingTable({ compact }: { compact?: boolean }) {
  const [inr, setInr] = useState(true);
  // Default from the cookie middleware set. Runs after hydration, so the static
  // HTML stays identical for every visitor and only the toggle state changes.
  useEffect(() => {
    const match = document.cookie.match(/(?:^|;\s*)currency_pref=(INR|USD)/);
    if (match) setInr(match[1] === "INR");
  }, []);
  useEffect(() => {
    if (compact) return;
    const t = setTimeout(() => track("pricing_view", { currency: inr ? "INR" : "USD" }), 10000);
    return () => clearTimeout(t);
  }, [compact, inr]);
  const visible = facts.pricing.tiers.filter((t) => !t.hidden);
  const hiddenNames = facts.pricing.tiers.filter((t) => t.hidden).map((t) => t.name);
  /** ₹8,00,000 reads badly on a card; lakhs are how Indian institutions quote budgets. */
  const rupees = (n: number) => (n >= 100000 ? `₹${(n / 100000).toLocaleString("en-IN", { maximumFractionDigits: 1 })} L` : `₹${n.toLocaleString("en-IN")}`);
  const dollars = (n: number) => `$${Math.round(n / facts.pricing.inrRate).toLocaleString("en-US")}`;
  const fmt = (t: { inr: number | null; inrMax?: number }) => {
    if (t.inr === null) return "Custom";
    if (t.inr === 0) return inr ? "₹0" : "$0";
    const one = inr ? rupees : dollars;
    // A range keeps one currency symbol: "₹8–12 L", not "₹8 L–₹12 L".
    if (t.inrMax) {
      return inr
        ? `₹${(t.inr / 100000).toLocaleString("en-IN")}–${(t.inrMax / 100000).toLocaleString("en-IN")} L`
        : `${dollars(t.inr)}–${dollars(t.inrMax)}`;
    }
    return one(t.inr);
  };
  return (
    <div>
      <div className="row between mb-3">
        <div className="toggle" role="group" aria-label="Currency">
          <button aria-pressed={inr} onClick={() => { setInr(true); document.cookie = "currency_pref=INR;path=/;max-age=15552000;samesite=lax"; }}>INR</button>
          <button aria-pressed={!inr} onClick={() => { setInr(false); document.cookie = "currency_pref=USD;path=/;max-age=15552000;samesite=lax"; }}>USD</button>
        </div>
        <span className="small dim">{inr ? "Billed in INR with a GST invoice" : "Indicative conversion at ₹" + facts.pricing.inrRate + "/$ · billing is in INR"}</span>
      </div>
      <div className={`tiers tiers--${visible.length}`}>
        {visible.map((t) => {
          const isApp = t.id !== "institution";
          const cls = "btn btn--block " + (t.highlight ? "btn--primary" : "btn--secondary");
          return (
            <div key={t.id} className={`card tier ${t.highlight ? "card--accent" : ""}`}>
              <div>
                <div className="row between"><h3 className="h3" style={{ margin: 0 }}>{t.name}</h3>{t.highlight && <span className="pill pill--orange">Most popular</span>}</div>
                <p className="small mt-1">{t.blurb}</p>
              </div>
              <div className={t.inr === null ? "price price--custom" : "price"}>{fmt(t)}<small>{t.inr === 0 ? "forever" : t.period === "per year" ? "/ year" : "/ month"}</small></div>
              {isApp ? (
                <a href={appSignup} className={cls} onClick={() => track("signup_click", { cta_location: `pricing-${t.id}`, link_url: appSignup })}>{t.cta} <ArrowRight size={16} /></a>
              ) : (
                <Link href="/institutional-pilot" className={cls}>{t.cta} <ArrowRight size={16} /></Link>
              )}
              {!compact && (
                <ul className="list-check">
                  {t.features.map((f) => <li key={f}><Check /><Feature text={f} /></li>)}
                </ul>
              )}
            </div>
          );
        })}
      </div>
      {hiddenNames.length > 0 && <p className="small mt-3">{hiddenNames.join(" and ")} plans: coming soon</p>}
      <p className="tiny dim mt-3">{facts.pricing.currencyNote} Academic discounts available with institutional email verification. Prices as of {facts.pricesAsOf}.</p>
    </div>
  );
}
