import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pixgrab - Descargar Medios de Pinterest, Reddit y X',
  description: 'Descarga fotos y videos de Pinterest, videos de Reddit y medios de X/Twitter en calidad original. Sin registro. Sin marca de agua. Sin compresión.',
  openGraph: {
    title: 'Pixgrab - Descargar Medios de Pinterest, Reddit y X',
    description: 'Descarga fotos y videos en calidad original. Sin registro. Sin marca de agua.',
    url: 'https://pixgrab.com/es',
    locale: 'es_ES',
  },
  alternates: {
    canonical: 'https://pixgrab.com/es',
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

export default function SpanishLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
