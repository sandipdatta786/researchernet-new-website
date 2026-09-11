"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "./Icons";

type Group = { label: string; items: { href: string; title: string }[] };

export function MobileNav({ groups, loginHref }: { groups: Group[]; loginHref: string }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button className="nav__burger" aria-expanded={open} aria-controls="mobile-nav" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen((v) => !v)}>
        {open ? <X /> : <Menu />}
      </button>
      {open && (
        <div id="mobile-nav" className="mnav" data-open="true" style={{ position: "fixed", left: 0, right: 0, top: 66, bottom: 0, background: "var(--bg)", overflowY: "auto", padding: "8px var(--gutter) 40px", zIndex: 49 }}>
          {groups.map((g) => (
            <div key={g.label}>
              <div className="mnav__group">{g.label}</div>
              {g.items.map((i) => (
                <Link key={i.href} href={i.href} onClick={() => setOpen(false)}>{i.title}</Link>
              ))}
            </div>
          ))}
          <div className="row">
            <a href={loginHref} className="btn btn--secondary">Log in</a>
          </div>
        </div>
      )}
    </>
  );
}
