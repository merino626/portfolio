import type { Locale } from "@/i18n/config";
import { en } from "./en";
import { pt } from "./pt";
import type { Content } from "./types";

const dictionaries: Record<Locale, Content> = { en, pt };

export function getContent(locale: Locale): Content {
  return dictionaries[locale];
}
