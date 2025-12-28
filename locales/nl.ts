import { Dictionary } from '@/types';

export const nl: Dictionary = {
  meta: {
    title: 'Pixgrab - Download Pinterest, Reddit & X Media',
    description: 'Download Pinterest-foto\'s en -video\'s, Reddit-video\'s en X/Twitter-media in originele kwaliteit. Geen login. Geen watermerk. Geen compressie.',
  },
  hero: {
    title: 'Download foto\'s en video\'s in originele kwaliteit',
    titleLine1: 'Download',
    titleLine2: 'foto\'s & video\'s in',
    titleHighlight: 'originele kwaliteit',
    subtitle: 'Pinterest, Reddit, X — Plak een link, krijg je media. Zo simpel.',
    features: [
      'Geen login vereist',
      'Geen watermerk',
      'Originele kwaliteit',
      'Werkt op mobiel',
    ],
  },
  input: {
    placeholder: 'Plak hier een Pinterest, Reddit of X link...',
    placeholderPinterest: 'Plak hier je Pinterest-link...',
    placeholderReddit: 'Plak hier je Reddit-link...',
    placeholderX: 'Plak hier je X/Twitter-link...',
    button: 'Downloaden',
    loading: 'Analyseren...',
  },
  result: {
    download: 'Downloaden',
    size: 'Grootte',
    format: 'Formaat',
    quality: 'Originele kwaliteit',
    downloadAnother: 'Nog een downloaden',
  },
  errors: {
    invalidUrl: 'Voer een geldige URL in',
    unsupportedPlatform: 'Dit platform wordt nog niet ondersteund. Probeer Pinterest, Reddit of X links.',
    noMedia: 'Geen downloadbare media gevonden op deze link',
    serverError: 'Er is iets misgegaan. Probeer het opnieuw.',
    rateLimited: 'Te veel verzoeken. Wacht even.',
    networkError: 'Verbindingsfout. Controleer je internet.',
    comingSoon: 'Deze functie komt binnenkort! Probeer voorlopig Pinterest, Reddit of X.',
  },
  faq: {
    title: 'Veelgestelde Vragen',
    items: [
      {
        question: 'Is Pixgrab gratis?',
        answer: 'Ja, Pixgrab is volledig gratis. Geen account, geen abonnement.',
      },
      {
        question: 'Welke platforms worden ondersteund?',
        answer: 'Pinterest (foto\'s en video\'s), Reddit (video\'s en afbeeldingen) en X/Twitter (video\'s).',
      },
      {
        question: 'Blijft de kwaliteit behouden?',
        answer: 'Ja. We downloaden en leveren het originele bestand zonder enige compressie of wijziging.',
      },
      {
        question: 'Hoe sla ik op op mijn telefoon?',
        answer: 'Na het klikken op Downloaden, houd je de media ingedrukt en selecteer "Opslaan in Foto\'s" (iOS) of het wordt automatisch opgeslagen (Android).',
      },
      {
        question: 'Is het veilig?',
        answer: 'We slaan je gegevens of de gedownloade bestanden niet op. Alles wordt verwerkt en direct aan jou geleverd.',
      },
    ],
  },
  mobile: {
    saveGuide: 'Hoe op te slaan op je telefoon',
    iosInstructions: 'Houd de media ingedrukt, tik dan op "Opslaan in Foto\'s"',
    androidInstructions: 'Tik op Downloaden — het bestand wordt automatisch opgeslagen in je Downloads-map',
  },
  footer: {
    legal: 'Juridische Kennisgeving',
    privacy: 'Privacybeleid',
    copyright: '© {year} Pixgrab. Alle rechten voorbehouden.',
  },
  platforms: {
    pinterest: 'Pinterest',
    reddit: 'Reddit',
    twitter: 'X (Twitter)',
  },
};
