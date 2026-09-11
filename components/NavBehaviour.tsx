"use client";
import { useEffect } from "react";

/**
 * Makes the native <details> menus in the desktop nav behave like proper dropdowns:
 * one open at a time, close on outside click / Escape / link click, open on hover.
 */
export function NavBehaviour() {
  useEffect(() => {
    const nav = document.querySelector<HTMLElement>(".nav__links");
    if (!nav) return;
    const all = () => Array.from(nav.querySelectorAll<HTMLDetailsElement>("details"));
    const closeAll = (except?: HTMLDetailsElement) => all().forEach((d) => { if (d !== except) d.open = false; });

    const onToggle = (e: Event) => { const d = e.target as HTMLDetailsElement; if (d.open) closeAll(d); };
    const onDocClick = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest("a")) { closeAll(); return; }
      if (!t.closest(".nav__links details")) closeAll();
    };
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") closeAll(); };
    const timers = new WeakMap<HTMLDetailsElement, number>();
    const onEnter = (e: Event) => {
      if (!window.matchMedia("(hover: hover)").matches) return;
      const d = e.currentTarget as HTMLDetailsElement;
      window.clearTimeout(timers.get(d));
      d.open = true;
    };
    const onLeave = (e: Event) => {
      if (!window.matchMedia("(hover: hover)").matches) return;
      const d = e.currentTarget as HTMLDetailsElement;
      timers.set(d, window.setTimeout(() => { d.open = false; }, 180));
    };

    const items = all();
    items.forEach((d) => { d.addEventListener("toggle", onToggle); d.addEventListener("mouseenter", onEnter); d.addEventListener("mouseleave", onLeave); });
    document.addEventListener("click", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      items.forEach((d) => { d.removeEventListener("toggle", onToggle); d.removeEventListener("mouseenter", onEnter); d.removeEventListener("mouseleave", onLeave); });
      document.removeEventListener("click", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);
  return null;
}
