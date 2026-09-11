"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { facts } from "@/content/facts";
import { appSignup } from "@/lib/seo";
import { Check, ArrowRight } from "./Icons";
import { track } from "./Analytics";

export function PricingTable({ compact }: { compact?: boolean }) {
  const [inr, setInr] = useState(false);
  useEffect(() => {
    if (compact) return;
    const t = setTimeout(() => track("pricing_view", { currency: inr ? "INR" : "USD" }), 10000);
    return () => clearTimeout(t);
  }, [compact, inr]);
  const fmt = (usd: number | null) => {
    if (usd === null) return "Custom";
    if (usd === 0) return inr ? "₹0" : "$0";
    return inr ? `₹${(usd * facts.pricing.inrRate).toLocaleString("en-IN")}` : `$${usd}`;
  };
  return (
    <div>
      <div className="row between mb-3">
        <div className="toggle" role="group" aria-label="Currency">
          <button aria-pressed={!inr} onClick={() => { setInr(false); }}>USD</button>
          <button aria-pressed={inr} onClick={() => { setInr(true); }}>INR</button>
        </div>
        <span className="small dim">{inr ? "Indicative INR at ₹" + facts.pricing.inrRate + "/$ · GST extra on Indian invoices" : "Billed monthly · annual plans on request"}</span>
      </div>
      <div className="tiers">
        {facts.pricing.tiers.map((t) => {
          const isApp = t.id !== "institution";
          const cls = "btn btn--block " + (t.highlight ? "btn--primary" : "btn--secondary");
          return (
            <div key={t.id} className={`card tier ${t.highlight ? "card--accent" : ""}`}>
              <div>
                <div className="row between"><h3 className="h3" style={{ margin: 0 }}>{t.name}</h3>{t.highlight && <span className="pill pill--orange">Most popular</span>}</div>
                <p className="small mt-1">{t.blurb}</p>
              </div>
              <div className={t.usd === null ? "price price--custom" : "price"}>{fmt(t.usd)}<small>{t.usd ? "/ mo" : t.usd === 0 ? "forever" : "per institution"}</small></div>
              {isApp ? (
                <a href={appSignup} className={cls} onClick={() => track("signup_click", { cta_location: `pricing-${t.id}`, link_url: appSignup })}>{t.cta} <ArrowRight size={16} /></a>
              ) : (
                <Link href="/institutional-pilot" className={cls}>{t.cta} <ArrowRight size={16} /></Link>
              )}
              {!compact && (
                <ul className="list-check">
                  {t.features.map((f) => <li key={f}><Check /><span>{f}</span></li>)}
                </ul>
              )}
            </div>
          );
        })}
      </div>
      <p className="tiny dim mt-3">{facts.pricing.currencyNote} Academic discounts available with institutional email verification. Prices as of {facts.lastUpdated}.</p>
    </div>
  );
}
