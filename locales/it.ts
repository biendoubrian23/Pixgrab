import { Dictionary } from '@/types';

export const it: Dictionary = {
  meta: {
    title: 'Pixgrab - Scarica Media da Pinterest, Reddit e X',
    description: 'Scarica foto e video da Pinterest, video da Reddit e media da X/Twitter in qualità originale. Senza login. Senza filigrana. Senza compressione.',
  },
  hero: {
    title: 'Scarica foto e video in qualità originale',
    titleLine1: 'Scarica',
    titleLine2: 'foto e video in',
    titleHighlight: 'qualità originale',
    subtitle: 'Pinterest, Reddit, X — Incolla un link, ottieni i tuoi media. Così semplice.',
    features: [
      'Senza registrazione',
      'Senza filigrana',
      'Qualità originale',
      'Funziona su mobile',
    ],
  },
  input: {
    placeholder: 'Incolla qui il link di Pinterest, Reddit o X...',
    placeholderPinterest: 'Incolla qui il tuo link Pinterest...',
    placeholderReddit: 'Incolla qui il tuo link Reddit...',
    placeholderX: 'Incolla qui il tuo link X/Twitter...',
    button: 'Scarica',
    loading: 'Analisi in corso...',
  },
  result: {
    download: 'Scarica',
    size: 'Dimensione',
    format: 'Formato',
    quality: 'Qualità originale',
    downloadAnother: 'Scarica un altro',
  },
  errors: {
    invalidUrl: 'Inserisci un URL valido',
    unsupportedPlatform: 'Questa piattaforma non è ancora supportata. Prova con link Pinterest, Reddit o X.',
    noMedia: 'Nessun media scaricabile trovato a questo link',
    serverError: 'Qualcosa è andato storto. Riprova.',
    rateLimited: 'Troppe richieste. Attendi un momento.',
    networkError: 'Errore di connessione. Controlla la tua connessione internet.',
    comingSoon: 'Questa funzione sarà disponibile presto! Per ora, prova Pinterest, Reddit o X.',
  },
  faq: {
    title: 'Domande Frequenti',
    items: [
      {
        question: 'Pixgrab è gratuito?',
        answer: 'Sì, Pixgrab è completamente gratuito. Nessun account, nessun abbonamento.',
      },
      {
        question: 'Quali piattaforme sono supportate?',
        answer: 'Pinterest (foto e video), Reddit (video e immagini) e X/Twitter (video).',
      },
      {
        question: 'La qualità viene preservata?',
        answer: 'Sì. Scarichiamo e consegniamo il file originale senza alcuna compressione o modifica.',
      },
      {
        question: 'Come salvo sul mio telefono?',
        answer: 'Dopo aver cliccato Scarica, tieni premuto sul media e seleziona "Salva nelle Foto" (iOS) o si salverà automaticamente (Android).',
      },
      {
        question: 'È sicuro?',
        answer: 'Non memorizziamo i tuoi dati né i file scaricati. Tutto viene elaborato e consegnato immediatamente a te.',
      },
    ],
  },
  mobile: {
    saveGuide: 'Come salvare sul tuo telefono',
    iosInstructions: 'Tieni premuto sul media, poi tocca "Salva nelle Foto"',
    androidInstructions: 'Tocca Scarica — il file si salva automaticamente nella cartella Download',
  },
  footer: {
    legal: 'Note Legali',
    privacy: 'Informativa sulla Privacy',
    copyright: '© {year} Pixgrab. Tutti i diritti riservati.',
  },
  platforms: {
    pinterest: 'Pinterest',
    reddit: 'Reddit',
    twitter: 'X (Twitter)',
  },
};
