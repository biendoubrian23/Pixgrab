import { Dictionary } from '@/types';

export const fr: Dictionary = {
  meta: {
    title: 'Pixgrab - Télécharger médias Pinterest, Reddit & X',
    description: 'Téléchargez photos et vidéos Pinterest, vidéos Reddit et médias X/Twitter en qualité originale. Sans compte. Sans filigrane. Sans compression.',
  },
  hero: {
    title: 'Téléchargez photos et vidéos en qualité originale',
    titleLine1: 'Téléchargez',
    titleLine2: 'photos & vidéos en',
    titleHighlight: 'qualité originale',
    subtitle: 'Pinterest, Reddit, X — Collez un lien, récupérez votre média. Simple.',
    features: [
      'Sans inscription',
      'Sans filigrane',
      'Qualité originale',
      'Compatible mobile',
    ],
  },
  input: {
    placeholder: 'Collez un lien Pinterest, Reddit ou X ici...',
    placeholderPinterest: 'Collez votre lien Pinterest ici...',
    placeholderReddit: 'Collez votre lien Reddit ici...',
    placeholderX: 'Collez votre lien X/Twitter ici...',
    button: 'Télécharger',
    loading: 'Analyse en cours...',
  },
  result: {
    download: 'Télécharger',
    size: 'Taille',
    format: 'Format',
    quality: 'Qualité originale',
    downloadAnother: 'Télécharger un autre',
  },
  errors: {
    invalidUrl: 'Veuillez entrer une URL valide',
    unsupportedPlatform: 'Cette plateforme n\'est pas encore supportée. Essayez Pinterest, Reddit ou X.',
    noMedia: 'Aucun média téléchargeable trouvé à ce lien',
    serverError: 'Une erreur s\'est produite. Veuillez réessayer.',
    rateLimited: 'Trop de requêtes. Veuillez patienter un instant.',
    networkError: 'Erreur de connexion. Vérifiez votre internet.',
  },
  faq: {
    title: 'Questions fréquentes',
    items: [
      {
        question: 'Pixgrab est-il gratuit ?',
        answer: 'Oui, Pixgrab est entièrement gratuit. Pas de compte, pas d\'abonnement.',
      },
      {
        question: 'Quelles plateformes sont supportées ?',
        answer: 'Pinterest (photos et vidéos), Reddit (vidéos et images), et X/Twitter (vidéos).',
      },
      {
        question: 'La qualité est-elle préservée ?',
        answer: 'Oui. Nous téléchargeons et livrons le fichier original sans aucune compression ni modification.',
      },
      {
        question: 'Comment sauvegarder sur mon téléphone ?',
        answer: 'Après avoir cliqué sur Télécharger, maintenez appuyé sur le média et sélectionnez "Enregistrer dans Photos" (iOS) ou il s\'enregistrera automatiquement (Android).',
      },
      {
        question: 'Est-ce sécurisé ?',
        answer: 'Nous ne stockons pas vos données ni les fichiers téléchargés. Tout est traité et immédiatement livré.',
      },
    ],
  },
  mobile: {
    saveGuide: 'Comment sauvegarder sur votre téléphone',
    iosInstructions: 'Maintenez appuyé sur le média, puis touchez "Enregistrer dans Photos"',
    androidInstructions: 'Touchez Télécharger — le fichier s\'enregistre automatiquement dans vos Téléchargements',
  },
  footer: {
    legal: 'Mentions légales',
    privacy: 'Politique de confidentialité',
    copyright: '© {year} Pixgrab. Tous droits réservés.',
  },
  platforms: {
    pinterest: 'Pinterest',
    reddit: 'Reddit',
    twitter: 'X (Twitter)',
  },
};
