"use client";
import Script from "next/script";

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || "";

/**
 * Google Tag Manager with Consent Mode v2 defaults (analytics denied until the visitor accepts).
 * Renders nothing when NEXT_PUBLIC_GTM_ID is unset, so previews and local dev stay untracked.
 */
export function Analytics() {
  if (!GTM_ID) return null;
  return (
    <>
      <Script id="consent-default" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}
gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'denied',wait_for_update:500});
try{if(localStorage.getItem('rn-consent')==='granted'){gtag('consent','update',{analytics_storage:'granted'});}}catch(e){}`}
      </Script>
      <Script id="gtm" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`}
      </Script>
    </>
  );
}

type EventName = "signup_click" | "pilot_request" | "contact_submit" | "demo_play" | "pricing_view" | "blog_engaged";

export function track(event: EventName, params: Record<string, string | number | boolean> = {}) {
  if (typeof window === "undefined") return;
  const w = window as unknown as { dataLayer?: Record<string, unknown>[] };
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({ event, page_location: window.location.href, ...params });
}
