import { Locale, Dictionary } from '@/types';
import { en } from './en';
import { fr } from './fr';

const dictionaries: Record<Locale, Dictionary> = {
  en,
  fr,
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] || dictionaries.en;
}

export function getLocaleFromPath(pathname: string): Locale {
  if (pathname.startsWith('/fr')) return 'fr';
  return 'en';
}

export const locales: Locale[] = ['en', 'fr'];
export const defaultLocale: Locale = 'en';
