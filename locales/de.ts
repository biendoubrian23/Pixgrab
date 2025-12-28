import { Dictionary } from '@/types';

export const de: Dictionary = {
  meta: {
    title: 'Pixgrab - Pinterest, Reddit & X Medien Herunterladen',
    description: 'Laden Sie Pinterest-Fotos und -Videos, Reddit-Videos und X/Twitter-Medien in Originalqualität herunter. Ohne Anmeldung. Ohne Wasserzeichen. Ohne Komprimierung.',
  },
  hero: {
    title: 'Fotos und Videos in Originalqualität herunterladen',
    titleLine1: 'Laden Sie',
    titleLine2: 'Fotos & Videos in',
    titleHighlight: 'Originalqualität',
    subtitle: 'Pinterest, Reddit, X — Link einfügen, Medien erhalten. So einfach.',
    features: [
      'Keine Anmeldung erforderlich',
      'Ohne Wasserzeichen',
      'Originalqualität',
      'Funktioniert auf Mobilgeräten',
    ],
  },
  input: {
    placeholder: 'Pinterest-, Reddit- oder X-Link hier einfügen...',
    placeholderPinterest: 'Pinterest-Link hier einfügen...',
    placeholderReddit: 'Reddit-Link hier einfügen...',
    placeholderX: 'X/Twitter-Link hier einfügen...',
    button: 'Herunterladen',
    loading: 'Analysiere...',
  },
  result: {
    download: 'Herunterladen',
    size: 'Größe',
    format: 'Format',
    quality: 'Originalqualität',
    downloadAnother: 'Weiteren herunterladen',
  },
  errors: {
    invalidUrl: 'Bitte geben Sie eine gültige URL ein',
    unsupportedPlatform: 'Diese Plattform wird noch nicht unterstützt. Versuchen Sie Pinterest-, Reddit- oder X-Links.',
    noMedia: 'Keine herunterladbaren Medien an diesem Link gefunden',
    serverError: 'Etwas ist schief gelaufen. Bitte versuchen Sie es erneut.',
    rateLimited: 'Zu viele Anfragen. Bitte warten Sie einen Moment.',
    networkError: 'Verbindungsfehler. Überprüfen Sie Ihre Internetverbindung.',
    comingSoon: 'Diese Funktion kommt bald! Versuchen Sie vorerst Pinterest, Reddit oder X.',
  },
  faq: {
    title: 'Häufig Gestellte Fragen',
    items: [
      {
        question: 'Ist Pixgrab kostenlos?',
        answer: 'Ja, Pixgrab ist völlig kostenlos. Kein Konto, kein Abonnement.',
      },
      {
        question: 'Welche Plattformen werden unterstützt?',
        answer: 'Pinterest (Fotos und Videos), Reddit (Videos und Bilder) und X/Twitter (Videos).',
      },
      {
        question: 'Bleibt die Qualität erhalten?',
        answer: 'Ja. Wir laden die Originaldatei herunter und liefern sie ohne Komprimierung oder Änderung.',
      },
      {
        question: 'Wie speichere ich auf meinem Handy?',
        answer: 'Nach dem Klick auf Herunterladen halten Sie das Medium gedrückt und wählen "In Fotos speichern" (iOS) oder es wird automatisch gespeichert (Android).',
      },
      {
        question: 'Ist es sicher?',
        answer: 'Wir speichern weder Ihre Daten noch die heruntergeladenen Dateien. Alles wird verarbeitet und sofort an Sie geliefert.',
      },
    ],
  },
  mobile: {
    saveGuide: 'So speichern Sie auf Ihrem Handy',
    iosInstructions: 'Halten Sie das Medium gedrückt, dann tippen Sie auf "In Fotos speichern"',
    androidInstructions: 'Tippen Sie auf Herunterladen — die Datei wird automatisch im Download-Ordner gespeichert',
  },
  footer: {
    legal: 'Impressum',
    privacy: 'Datenschutzerklärung',
    copyright: '© {year} Pixgrab. Alle Rechte vorbehalten.',
  },
  platforms: {
    pinterest: 'Pinterest',
    reddit: 'Reddit',
    twitter: 'X (Twitter)',
  },
};
