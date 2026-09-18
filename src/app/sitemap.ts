import type { MetadataRoute } from "next";
import { profile } from "@/content/profile";
import { locales } from "@/i18n/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = { en: `${profile.siteUrl}/en`, "pt-BR": `${profile.siteUrl}/pt` };
  return locales.map((locale) => ({
    url: `${profile.siteUrl}/${locale}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: locale === "en" ? 1 : 0.9,
    alternates: { languages },
  }));
}
