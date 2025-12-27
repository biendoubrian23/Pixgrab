import { MediaResult } from '@/types';

/**
 * Extrait les URLs des médias depuis une page X/Twitter
 * Note: Twitter est plus restrictif, cette implémentation utilise des méthodes alternatives
 */
export async function extractTwitterMedia(url: string): Promise<MediaResult | null> {
  try {
    // Essayer avec vxtwitter/fxtwitter (services tiers qui exposent les médias)
    // Convertir twitter.com/x.com en vxtwitter.com
    let apiUrl = url
      .replace('twitter.com', 'api.vxtwitter.com')
      .replace('x.com', 'api.vxtwitter.com');
    
    // Essayer de récupérer via l'API vxtwitter
    const response = await fetch(apiUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        'Accept': 'application/json',
      },
    });

    if (response.ok) {
      const data = await response.json();
      
      // Vérifier s'il y a une vidéo
      if (data.media_extended && data.media_extended.length > 0) {
        const media = data.media_extended[0];
        
        if (media.type === 'video') {
          return {
            success: true,
            platform: 'twitter',
            type: 'video',
            url: media.url,
            thumbnailUrl: media.thumbnail_url,
            filename: `twitter-video-${data.tweetID || Date.now()}.mp4`,
            duration: media.duration_millis ? media.duration_millis / 1000 : undefined,
          };
        }
        
        if (media.type === 'image') {
          return {
            success: true,
            platform: 'twitter',
            type: 'image',
            url: media.url,
            filename: `twitter-image-${data.tweetID || Date.now()}.jpg`,
          };
        }
      }
    }

    // Fallback: essayer avec fxtwitter
    apiUrl = url
      .replace('twitter.com', 'api.fxtwitter.com')
      .replace('x.com', 'api.fxtwitter.com');
    
    const fxResponse = await fetch(apiUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0',
        'Accept': 'application/json',
      },
    });

    if (fxResponse.ok) {
      const fxData = await fxResponse.json();
      
      if (fxData.tweet?.media?.videos && fxData.tweet.media.videos.length > 0) {
        const video = fxData.tweet.media.videos[0];
        return {
          success: true,
          platform: 'twitter',
          type: 'video',
          url: video.url,
          thumbnailUrl: video.thumbnail_url,
          filename: `twitter-video-${fxData.tweet.id || Date.now()}.mp4`,
        };
      }
      
      if (fxData.tweet?.media?.photos && fxData.tweet.media.photos.length > 0) {
        const photo = fxData.tweet.media.photos[0];
        return {
          success: true,
          platform: 'twitter',
          type: 'image',
          url: photo.url,
          filename: `twitter-image-${fxData.tweet.id || Date.now()}.jpg`,
        };
      }
    }

    return null;
  } catch (error) {
    console.error('Twitter extraction error:', error);
    return null;
  }
}
