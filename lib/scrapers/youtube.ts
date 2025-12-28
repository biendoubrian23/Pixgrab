/**
 * YouTube Shorts Scraper
 * Extrait les informations des YouTube Shorts
 */

import { MediaResult } from '@/types';

/**
 * Vérifie si l'URL est une URL YouTube Shorts valide
 */
export function isYouTubeShortsUrl(url: string): boolean {
  const patterns = [
    /youtube\.com\/shorts\/[\w-]+/i,
    /youtu\.be\/[\w-]+/i,
  ];
  return patterns.some(pattern => pattern.test(url));
}

/**
 * Extrait l'ID de la vidéo YouTube
 */
export function extractYouTubeId(url: string): string | null {
  // Format: youtube.com/shorts/VIDEO_ID
  const shortsMatch = url.match(/shorts\/([\w-]+)/);
  if (shortsMatch) {
    return shortsMatch[1];
  }
  
  // Format: youtu.be/VIDEO_ID
  const shortMatch = url.match(/youtu\.be\/([\w-]+)/);
  if (shortMatch) {
    return shortMatch[1];
  }
  
  // Format: youtube.com/watch?v=VIDEO_ID
  const watchMatch = url.match(/[?&]v=([\w-]+)/);
  if (watchMatch) {
    return watchMatch[1];
  }
  
  return null;
}

/**
 * Récupère les informations d'un YouTube Short
 */
export async function scrapeYouTubeShort(url: string): Promise<MediaResult> {
  try {
    const videoId = extractYouTubeId(url);
    
    if (!videoId) {
      throw new Error('Could not extract YouTube video ID');
    }
    
    // Utiliser l'API oEmbed de YouTube
    const oembedUrl = `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${videoId}&format=json`;
    const oembedResponse = await fetch(oembedUrl);
    
    if (!oembedResponse.ok) {
      throw new Error('Failed to fetch YouTube video info');
    }
    
    const oembedData = await oembedResponse.json();
    
    // YouTube ne permet pas le téléchargement direct via oEmbed
    // On fournit les informations disponibles
    return {
      success: true,
      platform: 'youtube' as any,
      type: 'video',
      url: `https://www.youtube.com/shorts/${videoId}`,
      thumbnailUrl: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
      filename: `youtube-short-${videoId}.mp4`,
      width: oembedData.thumbnail_width || 1080,
      height: oembedData.thumbnail_height || 1920,
    };
    
  } catch (error) {
    console.error('YouTube scraping error:', error);
    return {
      success: false,
      platform: 'youtube' as any,
      type: 'video',
      url: '',
      filename: '',
      error: error instanceof Error ? error.message : 'Failed to fetch YouTube Short',
    };
  }
}

/**
 * Obtient les différentes qualités de thumbnail disponibles
 */
export function getYouTubeThumbnails(videoId: string): { quality: string; url: string }[] {
  return [
    { quality: 'maxresdefault', url: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` },
    { quality: 'sddefault', url: `https://img.youtube.com/vi/${videoId}/sddefault.jpg` },
    { quality: 'hqdefault', url: `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` },
    { quality: 'mqdefault', url: `https://img.youtube.com/vi/${videoId}/mqdefault.jpg` },
  ];
}

// Alias for API compatibility
export const extractYouTubeMedia = scrapeYouTubeShort;
