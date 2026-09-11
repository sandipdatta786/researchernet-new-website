"use client";
import { track } from "./Analytics";
import type { ReactNode, MouseEvent } from "react";

/** Anchor that records a signup_click before navigating to the app. */
export function SignupLink({ href, className, children, location }: { href: string; className?: string; children: ReactNode; location: string }) {
  const onClick = (_e: MouseEvent<HTMLAnchorElement>) => track("signup_click", { cta_location: location, link_url: href });
  return (
    <a href={href} className={className} onClick={onClick} data-cta={location}>
      {children}
    </a>
  );
}
