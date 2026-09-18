import { NextResponse, type NextRequest } from "next/server";
import { isLocale, localeCookie } from "@/i18n/config";
import { negotiateLocale } from "@/i18n/negotiate";

/**
 * Every page lives under /en or /pt. Requests without a locale prefix are
 * redirected based on the visitor's saved choice, then Accept-Language,
 * falling back to English.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (isLocale(pathname.split("/")[1])) return NextResponse.next();

  const saved = request.cookies.get(localeCookie)?.value;
  const locale = isLocale(saved) ? saved : negotiateLocale(request.headers.get("accept-language"));

  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;

  const response = NextResponse.redirect(url);
  response.headers.set("Vary", "Accept-Language, Cookie");
  return response;
}

export const config = {
  // Skip Next internals, metadata routes and any file with an extension (images, PDFs, videos).
  matcher: ["/((?!_next|api|robots.txt|sitemap.xml|opengraph-image|icon|apple-icon|.*\\..*).*)"],
};
