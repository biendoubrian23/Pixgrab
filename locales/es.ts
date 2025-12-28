import { Dictionary } from '@/types';

export const es: Dictionary = {
  meta: {
    title: 'Pixgrab - Descargar Medios de Pinterest, Reddit y X',
    description: 'Descarga fotos y videos de Pinterest, videos de Reddit y medios de X/Twitter en calidad original. Sin registro. Sin marca de agua. Sin compresión.',
  },
  hero: {
    title: 'Descarga fotos y videos en calidad original',
    titleLine1: 'Descarga',
    titleLine2: 'fotos y videos en',
    titleHighlight: 'calidad original',
    subtitle: 'Pinterest, Reddit, X — Pega un enlace, obtén tu archivo. Así de simple.',
    features: [
      'Sin registro',
      'Sin marca de agua',
      'Calidad original',
      'Funciona en móvil',
    ],
  },
  input: {
    placeholder: 'Pega aquí el enlace de Pinterest, Reddit o X...',
    placeholderPinterest: 'Pega aquí tu enlace de Pinterest...',
    placeholderReddit: 'Pega aquí tu enlace de Reddit...',
    placeholderX: 'Pega aquí tu enlace de X/Twitter...',
    button: 'Descargar',
    loading: 'Analizando...',
  },
  result: {
    download: 'Descargar',
    size: 'Tamaño',
    format: 'Formato',
    quality: 'Calidad original',
    downloadAnother: 'Descargar otro',
  },
  errors: {
    invalidUrl: 'Por favor ingresa una URL válida',
    unsupportedPlatform: 'Esta plataforma aún no es compatible. Prueba con enlaces de Pinterest, Reddit o X.',
    noMedia: 'No se encontró contenido descargable en este enlace',
    serverError: 'Algo salió mal. Por favor intenta de nuevo.',
    rateLimited: 'Demasiadas solicitudes. Espera un momento.',
    networkError: 'Error de conexión. Verifica tu internet.',
    comingSoon: '¡Esta función estará disponible pronto! Por ahora, prueba con Pinterest, Reddit o X.',
  },
  faq: {
    title: 'Preguntas Frecuentes',
    items: [
      {
        question: '¿Pixgrab es gratis?',
        answer: 'Sí, Pixgrab es completamente gratis. Sin cuenta, sin suscripción.',
      },
      {
        question: '¿Qué plataformas son compatibles?',
        answer: 'Pinterest (fotos y videos), Reddit (videos e imágenes) y X/Twitter (videos).',
      },
      {
        question: '¿Se conserva la calidad?',
        answer: 'Sí. Descargamos y entregamos el archivo original sin ninguna compresión o modificación.',
      },
      {
        question: '¿Cómo guardo en mi teléfono?',
        answer: 'Después de hacer clic en Descargar, mantén presionado el archivo y selecciona "Guardar en Fotos" (iOS) o se guardará automáticamente (Android).',
      },
      {
        question: '¿Es seguro?',
        answer: 'No almacenamos tus datos ni los archivos descargados. Todo se procesa y se te entrega inmediatamente.',
      },
    ],
  },
  mobile: {
    saveGuide: 'Cómo guardar en tu teléfono',
    iosInstructions: 'Mantén presionado el archivo, luego toca "Guardar en Fotos"',
    androidInstructions: 'Toca Descargar — el archivo se guarda automáticamente en tu carpeta de Descargas',
  },
  footer: {
    legal: 'Aviso Legal',
    privacy: 'Política de Privacidad',
    copyright: '© {year} Pixgrab. Todos los derechos reservados.',
  },
  platforms: {
    pinterest: 'Pinterest',
    reddit: 'Reddit',
    twitter: 'X (Twitter)',
  },
};
