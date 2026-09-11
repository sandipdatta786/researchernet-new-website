"use client";
import { useEffect, useState } from "react";

/** Lightweight consent banner feeding Google Consent Mode v2. Shown only when GTM is configured. */
export function CookieBanner() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (!process.env.NEXT_PUBLIC_GTM_ID) return;
    try { if (!localStorage.getItem("rn-consent")) setShow(true); } catch { /* storage unavailable */ }
  }, []);
  if (!show) return null;
  const decide = (granted: boolean) => {
    try { localStorage.setItem("rn-consent", granted ? "granted" : "denied"); } catch { /* ignore */ }
    const w = window as unknown as { gtag?: (...a: unknown[]) => void };
    if (granted && w.gtag) w.gtag("consent", "update", { analytics_storage: "granted" });
    setShow(false);
  };
  return (
    <div role="dialog" aria-label="Cookie preferences" style={{ position: "fixed", left: 16, right: 16, bottom: 16, zIndex: 80, maxWidth: 520, marginInline: "auto" }} className="card card--flat">
      <p className="small muted" style={{ marginBottom: 12 }}>
        We use essential cookies to run the site and, with your permission, analytics cookies to understand what helps researchers. No advertising cookies. <a href="/privacy" className="accent">Privacy policy</a>.
      </p>
      <div className="row">
        <button className="btn btn--primary btn--sm" onClick={() => decide(true)}>Allow analytics</button>
        <button className="btn btn--secondary btn--sm" onClick={() => decide(false)}>Essential only</button>
      </div>
    </div>
  );
}
