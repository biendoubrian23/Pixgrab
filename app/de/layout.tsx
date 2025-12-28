import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pixgrab - Pinterest, Reddit & X Medien Herunterladen',
  description: 'Laden Sie Pinterest-Fotos und -Videos, Reddit-Videos und X/Twitter-Medien in Originalqualität herunter. Ohne Anmeldung. Ohne Wasserzeichen. Ohne Komprimierung.',
  openGraph: {
    title: 'Pixgrab - Pinterest, Reddit & X Medien Herunterladen',
    description: 'Laden Sie Fotos und Videos in Originalqualität herunter. Ohne Anmeldung. Ohne Wasserzeichen.',
    url: 'https://pixgrab.com/de',
    locale: 'de_DE',
  },
  alternates: {
    canonical: 'https://pixgrab.com/de',
    languages: {
      'en': 'https://pixgrab.com/en',
      'fr': 'https://pixgrab.com/fr',
      'es': 'https://pixgrab.com/es',
      'pt': 'https://pixgrab.com/pt',
      'it': 'https://pixgrab.com/it',
      'de': 'https://pixgrab.com/de',
      'nl': 'https://pixgrab.com/nl',
    },
  },
};

export default function GermanLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
