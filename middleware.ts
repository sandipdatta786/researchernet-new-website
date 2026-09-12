import { NextResponse, type NextRequest } from "next/server";

/**
 * Currency default. Sets a `currency` cookie the pricing table reads on mount.
 * Primary signal is the cf-ipcountry header; where that is absent we fall back to
 * an Accept-Language that names en-IN. The cookie is a default only — the manual
 * USD/INR toggle still wins, and writes its own value over this one.
 */
export function middleware(req: NextRequest) {
  const res = NextResponse.next();
  if (req.cookies.get("currency")) return res; // never override a visitor's choice

  const country = req.headers.get("cf-ipcountry")?.toUpperCase();
  const acceptLanguage = req.headers.get("accept-language")?.toLowerCase() ?? "";
  const isIndia = country === "IN" || (!country && acceptLanguage.includes("en-in"));

  res.cookies.set("currency", isIndia ? "INR" : "USD", {
    path: "/",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 180,
  });
  return res;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|brand|docs|.*\\.(?:png|jpg|jpeg|svg|webp|avif|ico|pdf|txt|xml|webmanifest)$).*)"],
};
