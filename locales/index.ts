import { Locale, Dictionary } from '@/types';
import { en } from './en';
import { fr } from './fr';
import { es } from './es';
import { pt } from './pt';
import { it } from './it';
import { de } from './de';
import { nl } from './nl';

const dictionaries: Record<Locale, Dictionary> = {
  en,
  fr,
  es,
  pt,
  it,
  de,
  nl,
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] || dictionaries.en;
}

export function getLocaleFromPath(pathname: string): Locale {
  if (pathname.startsWith('/fr')) return 'fr';
  if (pathname.startsWith('/es')) return 'es';
  if (pathname.startsWith('/pt')) return 'pt';
  if (pathname.startsWith('/it')) return 'it';
  if (pathname.startsWith('/de')) return 'de';
  if (pathname.startsWith('/nl')) return 'nl';
  return 'en';
}

export const locales: Locale[] = ['en', 'fr', 'es', 'pt', 'it', 'de', 'nl'];
export const defaultLocale: Locale = 'en';
