import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement> & { size?: number };
const base = (size = 18): SVGProps<SVGSVGElement> => ({
  width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor",
  strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": true,
});

export const ArrowRight = ({ size, ...p }: P) => (
  <svg {...base(size)} {...p} className={["arrow", p.className].filter(Boolean).join(" ")}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);
export const Check = ({ size, ...p }: P) => <svg {...base(size ?? 16)} {...p}><path d="M20 6 9 17l-5-5" /></svg>;
export const Search = ({ size, ...p }: P) => <svg {...base(size)} {...p}><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg>;
export const Users = ({ size, ...p }: P) => <svg {...base(size)} {...p}><circle cx="9" cy="8" r="3.5" /><path d="M2.5 20a6.5 6.5 0 0 1 13 0" /><circle cx="17" cy="9" r="2.5" /><path d="M15.5 14.5a5 5 0 0 1 6 5" /></svg>;
export const Edit = ({ size, ...p }: P) => <svg {...base(size)} {...p}><path d="M4 20h4l10-10-4-4L4 16v4Z" /><path d="m12.5 7.5 4 4" /></svg>;
export const Coins = ({ size, ...p }: P) => <svg {...base(size)} {...p}><ellipse cx="12" cy="6" rx="7" ry="3" /><path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6" /><path d="M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" /></svg>;
export const Shield = ({ size, ...p }: P) => <svg {...base(size)} {...p}><path d="M12 3 4 6v6c0 5 3.4 8.4 8 9 4.6-.6 8-4 8-9V6l-8-3Z" /><path d="m9 12 2 2 4-4" /></svg>;
export const Network = ({ size, ...p }: P) => <svg {...base(size)} {...p}><circle cx="12" cy="5" r="2.5" /><circle cx="5" cy="18" r="2.5" /><circle cx="19" cy="18" r="2.5" /><path d="M12 7.5v4M12 11.5 6.5 16M12 11.5l5.5 4.5" /></svg>;
export const Play = ({ size, ...p }: P) => <svg {...base(size)} {...p} fill="currentColor" stroke="none"><path d="M8 5v14l11-7L8 5Z" /></svg>;
export const Menu = ({ size, ...p }: P) => <svg {...base(size)} {...p}><path d="M4 7h16M4 12h16M4 17h16" /></svg>;
export const X = ({ size, ...p }: P) => <svg {...base(size)} {...p}><path d="M6 6l12 12M18 6 6 18" /></svg>;
export const Chevron = ({ size, ...p }: P) => <svg {...base(size ?? 14)} {...p}><path d="m6 9 6 6 6-6" /></svg>;
export const Mail = ({ size, ...p }: P) => <svg {...base(size)} {...p}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>;
export const Pin = ({ size, ...p }: P) => <svg {...base(size)} {...p}><path d="M12 21s-6-5.3-6-11a6 6 0 0 1 12 0c0 5.7-6 11-6 11Z" /><circle cx="12" cy="10" r="2" /></svg>;
export const Sparkle = ({ size, ...p }: P) => <svg {...base(size)} {...p}><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6.5 6.5l2.5 2.5M15 15l2.5 2.5M6.5 17.5 9 15M15 9l2.5-2.5" /></svg>;
export const Globe = ({ size, ...p }: P) => <svg {...base(size)} {...p}><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c3 3.5 3 14.5 0 18M12 3c-3 3.5-3 14.5 0 18" /></svg>;
export const Calendar = ({ size, ...p }: P) => <svg {...base(size)} {...p}><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M8 3v4M16 3v4M3 11h18M8 15h3M8 18h6" /></svg>;
export const Award = ({ size, ...p }: P) => <svg {...base(size)} {...p}><circle cx="12" cy="9" r="5" /><path d="m8.5 13.5-1.5 7 5-2.5 5 2.5-1.5-7" /></svg>;
export const File = ({ size, ...p }: P) => <svg {...base(size)} {...p}><path d="M6 3h8l4 4v14H6V3Z" /><path d="M14 3v4h4M9 12h6M9 16h6" /></svg>;

export const engineIcon = {
  search: Search, users: Users, edit: Edit, coins: Coins, shield: Shield, network: Network, calendar: Calendar,
} as const;
