import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pixgrab - Pinterest, Reddit & X Videos Herunterladen | Kostenlos HD',
  description: 'Laden Sie Pinterest-Fotos und -Videos, Reddit-Videos mit Ton, und X/Twitter-Medien in HD-Originalqualität herunter. 100% kostenlos - Ohne Anmeldung. Ohne Wasserzeichen. Ohne Komprimierung.',
  keywords: [
    'pinterest video herunterladen',
    'pinterest foto herunterladen',
    'pinterest downloader deutsch',
    'pinterest hd speichern',
    'reddit video herunterladen',
    'reddit video mit ton',
    'twitter video herunterladen',
    'x video herunterladen',
    'kostenloser video downloader',
    'ohne wasserzeichen',
    'pinterest bilder speichern',
    'download pinterest deutschland',
  ],
  openGraph: {
    title: 'Pixgrab - Pinterest, Reddit & X Videos Herunterladen | Kostenlos HD',
    description: 'Laden Sie Fotos und Videos in HD-Originalqualität herunter. 100% kostenlos - Ohne Anmeldung. Ohne Wasserzeichen.',
    url: 'https://pixgrab.com/de',
    siteName: 'Pixgrab',
    locale: 'de_DE',
    type: 'website',
    images: [
      {
        url: 'https://pixgrab.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Pixgrab - Kostenloser Pinterest, Reddit & X Downloader',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pixgrab - Pinterest, Reddit & X Videos Herunterladen',
    description: 'Laden Sie Fotos und Videos in HD herunter. Kostenlos - Ohne Anmeldung - Ohne Wasserzeichen.',
    images: ['https://pixgrab.com/og-image.png'],
    creator: '@pixgrab',
    site: '@pixgrab',
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
      'x-default': 'https://pixgrab.com',
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
