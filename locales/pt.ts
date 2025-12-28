import { Dictionary } from '@/types';

export const pt: Dictionary = {
  meta: {
    title: 'Pixgrab - Baixar Mídias do Pinterest, Reddit e X',
    description: 'Baixe fotos e vídeos do Pinterest, vídeos do Reddit e mídias do X/Twitter em qualidade original. Sem login. Sem marca d\'água. Sem compressão.',
  },
  hero: {
    title: 'Baixe fotos e vídeos em qualidade original',
    titleLine1: 'Baixe',
    titleLine2: 'fotos e vídeos em',
    titleHighlight: 'qualidade original',
    subtitle: 'Pinterest, Reddit, X — Cole um link, receba sua mídia. Simples assim.',
    features: [
      'Sem cadastro',
      'Sem marca d\'água',
      'Qualidade original',
      'Funciona no celular',
    ],
  },
  input: {
    placeholder: 'Cole aqui o link do Pinterest, Reddit ou X...',
    placeholderPinterest: 'Cole aqui seu link do Pinterest...',
    placeholderReddit: 'Cole aqui seu link do Reddit...',
    placeholderX: 'Cole aqui seu link do X/Twitter...',
    button: 'Baixar',
    loading: 'Analisando...',
  },
  result: {
    download: 'Baixar',
    size: 'Tamanho',
    format: 'Formato',
    quality: 'Qualidade original',
    downloadAnother: 'Baixar outro',
  },
  errors: {
    invalidUrl: 'Por favor insira uma URL válida',
    unsupportedPlatform: 'Esta plataforma ainda não é suportada. Tente links do Pinterest, Reddit ou X.',
    noMedia: 'Nenhuma mídia baixável encontrada neste link',
    serverError: 'Algo deu errado. Por favor tente novamente.',
    rateLimited: 'Muitas solicitações. Aguarde um momento.',
    networkError: 'Erro de conexão. Verifique sua internet.',
    comingSoon: 'Esta função estará disponível em breve! Por enquanto, tente Pinterest, Reddit ou X.',
  },
  faq: {
    title: 'Perguntas Frequentes',
    items: [
      {
        question: 'O Pixgrab é gratuito?',
        answer: 'Sim, o Pixgrab é completamente gratuito. Sem conta, sem assinatura.',
      },
      {
        question: 'Quais plataformas são suportadas?',
        answer: 'Pinterest (fotos e vídeos), Reddit (vídeos e imagens) e X/Twitter (vídeos).',
      },
      {
        question: 'A qualidade é preservada?',
        answer: 'Sim. Baixamos e entregamos o arquivo original sem nenhuma compressão ou modificação.',
      },
      {
        question: 'Como salvo no meu celular?',
        answer: 'Após clicar em Baixar, pressione e segure a mídia e selecione "Salvar nas Fotos" (iOS) ou salvará automaticamente (Android).',
      },
      {
        question: 'É seguro?',
        answer: 'Não armazenamos seus dados nem os arquivos baixados. Tudo é processado e entregue imediatamente a você.',
      },
    ],
  },
  mobile: {
    saveGuide: 'Como salvar no seu celular',
    iosInstructions: 'Pressione e segure a mídia, depois toque em "Salvar nas Fotos"',
    androidInstructions: 'Toque em Baixar — o arquivo salva automaticamente na pasta Downloads',
  },
  footer: {
    legal: 'Aviso Legal',
    privacy: 'Política de Privacidade',
    copyright: '© {year} Pixgrab. Todos os direitos reservados.',
  },
  platforms: {
    pinterest: 'Pinterest',
    reddit: 'Reddit',
    twitter: 'X (Twitter)',
  },
};
