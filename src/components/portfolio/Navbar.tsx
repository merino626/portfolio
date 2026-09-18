"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FileDown, Menu, X } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { localeCookie, locales, type Locale } from "@/i18n/config";
import type { Content } from "@/content/types";
import { cn } from "@/lib/utils";

type NavbarProps = {
  nav: Content["nav"];
  locale: Locale;
  shortName: string;
  resumeUrl: string;
};

function rememberLocale(locale: Locale) {
  document.cookie = `${localeCookie}=${locale}; path=/; max-age=31536000; samesite=lax`;
}

function LanguageSwitch({ locale, label }: { locale: Locale; label: string }) {
  return (
    <div
      role="group"
      aria-label={label}
      className="flex items-center rounded-md border border-border p-0.5 font-mono text-[11px]"
    >
      {locales.map((l) => (
        <Link
          key={l}
          href={`/${l}`}
          hrefLang={l === "pt" ? "pt-BR" : "en"}
          aria-current={l === locale ? "true" : undefined}
          // /en and /pt are separate routes, so Next.js treats this as a full navigation and, by default,
          // animates the viewport to the top of the new page (scroll-behavior: smooth makes that motion
          // visible). A language toggle should never move the reader — keep the current scroll position.
          scroll={false}
          onClick={() => rememberLocale(l)}
          className={cn(
            "rounded-[5px] px-2 py-1 uppercase transition-colors",
            l === locale ? "bg-secondary text-foreground" : "text-muted-foreground hover:text-foreground",
          )}
        >
          {l}
        </Link>
      ))}
    </div>
  );
}

export function Navbar({ nav, locale, shortName, resumeUrl }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300",
        scrolled || open ? "border-border bg-background/80 backdrop-blur-xl" : "border-transparent",
      )}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:rounded-md focus:bg-primary focus:px-3 focus:py-2 focus:text-sm focus:text-primary-foreground"
      >
        {nav.skip}
      </a>
      <nav aria-label="Main" className="container-page flex h-16 items-center justify-between gap-6">
        <a href="#home" className="font-mono text-sm tracking-tight text-foreground transition-opacity hover:opacity-70">
          <span className="text-primary">/</span> {shortName}
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {nav.items.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <LanguageSwitch locale={locale} label={nav.language} />
          <a
            href={resumeUrl}
            download
            className={buttonVariants({ variant: "secondary", size: "sm", className: "hidden sm:inline-flex" })}
          >
            <FileDown aria-hidden="true" />
            {nav.resume}
          </a>
          <button
            type="button"
            className={buttonVariants({ variant: "ghost", size: "icon", className: "lg:hidden" })}
            aria-label={open ? nav.closeMenu : nav.openMenu}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {open ? (
        <div id="mobile-menu" className="border-t border-border lg:hidden">
          <ul className="container-page flex flex-col py-3">
            {nav.items.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-2 py-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="sm:hidden">
              <a href={resumeUrl} download className="block rounded-md px-2 py-3 text-sm text-primary">
                {nav.resume}
              </a>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}
