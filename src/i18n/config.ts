export const locales = ["en", "pt"] as const;

export type Locale = (typeof locales)[number];

/** English is served whenever the visitor's language can't be matched. */
export const defaultLocale: Locale = "en";

/** Set when the visitor picks a language manually; wins over Accept-Language. */
export const localeCookie = "NEXT_LOCALE";

/** BCP 47 tags used for <html lang>, hreflang and Open Graph. */
export const localeTags: Record<Locale, { lang: string; og: string }> = {
  en: { lang: "en", og: "en_US" },
  pt: { lang: "pt-BR", og: "pt_BR" },
};

export function isLocale(value: string | undefined): value is Locale {
  return locales.includes(value as Locale);
}
