import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Instrument_Sans, JetBrains_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import { getContent } from "@/content";
import { profile } from "@/content/profile";
import { isLocale, locales, localeTags } from "@/i18n/config";
import "../globals.css";

const sans = Instrument_Sans({ subsets: ["latin"], variable: "--font-instrument", display: "swap" });
const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
  display: "swap",
});

type LocaleParams = { params: Promise<{ locale: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const viewport: Viewport = {
  themeColor: "#0b0d11",
  colorScheme: "dark",
};

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const { meta } = getContent(locale);

  return {
    metadataBase: new URL(profile.siteUrl),
    title: meta.title,
    description: meta.description,
    authors: [{ name: profile.name, url: profile.siteUrl }],
    creator: profile.name,
    alternates: {
      canonical: `/${locale}`,
      languages: { en: "/en", "pt-BR": "/pt", "x-default": "/en" },
    },
    openGraph: {
      type: "profile",
      url: `/${locale}`,
      siteName: profile.name,
      title: meta.title,
      description: meta.description,
      locale: localeTags[locale].og,
      alternateLocale: locales.filter((l) => l !== locale).map((l) => localeTags[l].og),
    },
    twitter: { card: "summary_large_image", title: meta.title, description: meta.description },
  };
}

export default async function LocaleLayout({ children, params }: LocaleParams & { children: ReactNode }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <html lang={localeTags[locale].lang} className={`${sans.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
