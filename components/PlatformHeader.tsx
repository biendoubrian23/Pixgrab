'use client';

import Link from 'next/link';
import styles from './PlatformHeader.module.css';

export type Platform = 'pinterest' | 'reddit' | 'twitter' | 'tiktok' | 'instagram' | 'youtube' | 'facebook' | 'threads' | 'all';

interface PlatformHeaderProps {
  activePlatform: Platform;
}

const platforms = [
  { id: 'pinterest' as const, name: 'Pinterest', href: '/pinterest-video-downloader', color: '#e60023' },
  { id: 'reddit' as const, name: 'Reddit', href: '/reddit-video-downloader', color: '#ff4500' },
  { id: 'twitter' as const, name: 'X', href: '/twitter-video-downloader', color: '#000000' },
  { id: 'tiktok' as const, name: 'TikTok', href: '/tiktok-video-downloader', color: '#000000' },
  { id: 'instagram' as const, name: 'Instagram', href: '/instagram-reels-downloader', color: '#E4405F' },
  { id: 'youtube' as const, name: 'YouTube', href: '/youtube-shorts-downloader', color: '#FF0000' },
  { id: 'facebook' as const, name: 'Facebook', href: '/facebook-video-downloader', color: '#1877F2' },
  { id: 'threads' as const, name: 'Threads', href: '/threads-video-downloader', color: '#000000' },
];

export default function PlatformHeader({ activePlatform }: PlatformHeaderProps) {
  return (
    <nav className={styles.platformNav}>
      <div className={styles.platformList}>
        {platforms.map((platform) => (
          <Link
            key={platform.id}
            href={platform.href}
            className={`${styles.platformLink} ${activePlatform === platform.id ? styles.active : ''}`}
            style={{ 
              '--platform-color': platform.color,
              backgroundColor: activePlatform === platform.id ? platform.color : undefined,
              color: activePlatform === platform.id ? '#fff' : undefined,
            } as React.CSSProperties}
          >
            {platform.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
