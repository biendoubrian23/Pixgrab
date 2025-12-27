import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://pixgrab.com';
  const currentDate = new Date().toISOString();

  return [
    // Pages principales
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/en`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/fr`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    
    // Pages SEO Pinterest - Haute priorité
    {
      url: `${baseUrl}/pinterest-video-downloader`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/download-pinterest-photos`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/download-pinterest-videos`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    
    // Pages SEO Reddit - Haute priorité
    {
      url: `${baseUrl}/reddit-video-downloader`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/download-reddit-videos`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    
    // Pages SEO Twitter/X - Haute priorité
    {
      url: `${baseUrl}/twitter-video-downloader`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/download-x-videos`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    
    // Pages SEO Images Pinterest
    {
      url: `${baseUrl}/pinterest-image-downloader`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    
    // Pages SEO X.com variant
    {
      url: `${baseUrl}/x-video-downloader`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    
    // Pages SEO Français - Pinterest
    {
      url: `${baseUrl}/telecharger-video-pinterest`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    
    // Pages SEO Français - Reddit
    {
      url: `${baseUrl}/telecharger-video-reddit`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    
    // Pages légales
    {
      url: `${baseUrl}/legal`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];
}
