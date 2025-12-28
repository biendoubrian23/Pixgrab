/**
 * TikTok Video Scraper
 * Extrait les informations vidéo de TikTok
 */

import { MediaResult } from '@/types';

interface TikTokVideoInfo {
  videoUrl: string;
  thumbnailUrl: string;
  width: number;
  height: number;
  duration: number;
  author: string;
  description: string;
}

/**
 * Vérifie si l'URL est une URL TikTok valide
 */
export function isTikTokUrl(url: string): boolean {
  const patterns = [
    /tiktok\.com\/@[\w.-]+\/video\/\d+/i,
    /tiktok\.com\/t\/\w+/i,
    /vm\.tiktok\.com\/\w+/i,
    /vt\.tiktok\.com\/\w+/i,
  ];
  return patterns.some(pattern => pattern.test(url));
}

/**
 * Extrait l'ID de la vidéo TikTok
 */
export function extractTikTokId(url: string): string | null {
  // Format: tiktok.com/@user/video/1234567890
  const videoMatch = url.match(/video\/(\d+)/);
  if (videoMatch) {
    return videoMatch[1];
  }
  
  return null;
}

/**
 * Récupère les informations d'une vidéo TikTok
 * Note: TikTok a des protections anti-scraping strictes
 * Cette implémentation utilise des méthodes alternatives
 */
export async function scrapeTikTokVideo(url: string): Promise<MediaResult> {
  try {
    // Résoudre les URLs courtes
    let resolvedUrl = url;
    if (url.includes('vm.tiktok.com') || url.includes('vt.tiktok.com')) {
      const response = await fetch(url, {
        method: 'HEAD',
        redirect: 'follow',
      });
      resolvedUrl = response.url;
    }
    
    const videoId = extractTikTokId(resolvedUrl);
    
    if (!videoId) {
      throw new Error('Could not extract TikTok video ID');
    }
    
    // Utiliser l'API TikTok oEmbed pour obtenir des infos de base
    const oembedUrl = `https://www.tiktok.com/oembed?url=${encodeURIComponent(resolvedUrl)}`;
    const oembedResponse = await fetch(oembedUrl);
    
    if (!oembedResponse.ok) {
      throw new Error('Failed to fetch TikTok video info');
    }
    
    const oembedData = await oembedResponse.json();
    
    // Note: L'API oEmbed ne fournit pas directement l'URL de téléchargement
    // Pour un vrai téléchargement, il faudrait utiliser des services tiers ou
    // des techniques plus avancées de scraping
    
    // Pour l'instant, on retourne les infos disponibles
    return {
      success: true,
      platform: 'tiktok' as any,
      type: 'video',
      url: resolvedUrl, // URL de la page, pas du téléchargement direct
      thumbnailUrl: oembedData.thumbnail_url || '',
      filename: `tiktok-${videoId}.mp4`,
      width: oembedData.thumbnail_width || 720,
      height: oembedData.thumbnail_height || 1280,
    };
    
  } catch (error) {
    console.error('TikTok scraping error:', error);
    return {
      success: false,
      platform: 'tiktok' as any,
      type: 'video',
      url: '',
      filename: '',
      error: error instanceof Error ? error.message : 'Failed to fetch TikTok video',
    };
  }
}

/**
 * Méthode alternative utilisant le HTML de la page
 */
export async function scrapeTikTokFromPage(url: string): Promise<TikTokVideoInfo | null> {
  try {
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.5',
      },
    });
    
    if (!response.ok) {
      return null;
    }
    
    const html = await response.text();
    
    // Chercher les données JSON dans la page
    const scriptMatch = html.match(/<script id="__UNIVERSAL_DATA_FOR_REHYDRATION__"[^>]*>([^<]+)<\/script>/);
    
    if (scriptMatch) {
      const data = JSON.parse(scriptMatch[1]);
      // Extraire les informations vidéo du JSON
      // La structure exacte varie selon les mises à jour de TikTok
      
      const videoData = data?.__DEFAULT_SCOPE__?.['webapp.video-detail']?.itemInfo?.itemStruct;
      
      if (videoData) {
        return {
          videoUrl: videoData.video?.playAddr || videoData.video?.downloadAddr || '',
          thumbnailUrl: videoData.video?.cover || '',
          width: videoData.video?.width || 720,
          height: videoData.video?.height || 1280,
          duration: videoData.video?.duration || 0,
          author: videoData.author?.uniqueId || '',
          description: videoData.desc || '',
        };
      }
    }
    
    return null;
  } catch (error) {
    console.error('TikTok page scraping error:', error);
    return null;
  }
}

// Alias for API compatibility
export const extractTikTokMedia = scrapeTikTokVideo;
