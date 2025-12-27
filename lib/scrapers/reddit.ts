import { MediaResult } from '@/types';

/**
 * Extrait les URLs des médias depuis une page Reddit
 */
export async function extractRedditMedia(url: string): Promise<MediaResult | null> {
  try {
    // Convertir l'URL en format JSON (ajouter .json)
    let jsonUrl = url;
    if (!jsonUrl.endsWith('.json')) {
      jsonUrl = jsonUrl.replace(/\/?$/, '.json');
    }

    const response = await fetch(jsonUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        'Accept': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch Reddit data: ${response.status}`);
    }

    const data = await response.json();
    
    // Reddit renvoie un tableau, le premier élément contient le post
    const post = data[0]?.data?.children?.[0]?.data;
    
    if (!post) {
      return null;
    }

    // Vérifier si c'est une vidéo Reddit
    if (post.is_video && post.media?.reddit_video) {
      const videoUrl = post.media.reddit_video.fallback_url;
      const audioUrl = videoUrl.replace(/DASH_\d+\.mp4/, 'DASH_audio.mp4');
      
      return {
        success: true,
        platform: 'reddit',
        type: 'video',
        url: videoUrl,
        thumbnailUrl: post.thumbnail !== 'default' ? post.thumbnail : undefined,
        filename: `reddit-video-${post.id}.mp4`,
        duration: post.media.reddit_video.duration,
      };
    }

    // Vérifier si c'est une image
    if (post.post_hint === 'image' || post.url?.match(/\.(jpg|jpeg|png|gif|webp)(\?|$)/i)) {
      const imageUrl = post.url;
      const extension = imageUrl.match(/\.(\w+)(?:\?|$)/)?.[1] || 'jpg';
      
      return {
        success: true,
        platform: 'reddit',
        type: 'image',
        url: imageUrl,
        thumbnailUrl: post.thumbnail !== 'default' ? post.thumbnail : undefined,
        filename: `reddit-image-${post.id}.${extension}`,
      };
    }

    // Vérifier les médias hébergés sur Reddit (i.redd.it)
    if (post.url?.includes('i.redd.it')) {
      const extension = post.url.match(/\.(\w+)(?:\?|$)/)?.[1] || 'jpg';
      
      return {
        success: true,
        platform: 'reddit',
        type: 'image',
        url: post.url,
        filename: `reddit-image-${post.id}.${extension}`,
      };
    }

    // Vérifier les galleries Reddit
    if (post.is_gallery && post.media_metadata) {
      // Pour la V1, on prend juste la première image
      const firstMediaId = Object.keys(post.media_metadata)[0];
      const firstMedia = post.media_metadata[firstMediaId];
      
      if (firstMedia?.s?.u) {
        const imageUrl = firstMedia.s.u.replace(/&amp;/g, '&');
        return {
          success: true,
          platform: 'reddit',
          type: 'image',
          url: imageUrl,
          filename: `reddit-image-${post.id}.jpg`,
        };
      }
    }

    return null;
  } catch (error) {
    console.error('Reddit extraction error:', error);
    return null;
  }
}
