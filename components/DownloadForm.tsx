'use client';

import { useState, FormEvent, useEffect } from 'react';
import { Dictionary } from '@/types';
import styles from './DownloadForm.module.css';

interface DownloadFormProps {
  dict: Dictionary;
  isLoading: boolean;
  error: string | null;
  onSubmit: (url: string) => void;
}

// All platforms for the carousel
const allPlatforms = [
  {
    id: 'pinterest',
    name: 'Pinterest',
    color: '#E60023',
    active: true,
    logo: (
      <svg viewBox="0 0 24 24" width="32" height="32">
        <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
      </svg>
    ),
  },
  {
    id: 'reddit',
    name: 'Reddit',
    color: '#FF4500',
    active: true,
    logo: (
      <svg viewBox="0 0 24 24" width="32" height="32">
        <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
      </svg>
    ),
  },
  {
    id: 'x',
    name: 'X',
    color: '#000000',
    active: true,
    logo: (
      <svg viewBox="0 0 24 24" width="32" height="32">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    id: 'tiktok',
    name: 'TikTok',
    color: '#000000',
    active: false,
    logo: (
      <svg viewBox="0 0 24 24" width="32" height="32">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
      </svg>
    ),
  },
  {
    id: 'instagram',
    name: 'Instagram',
    color: '#E4405F',
    active: false,
    logo: (
      <svg viewBox="0 0 24 24" width="32" height="32">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
      </svg>
    ),
  },
  {
    id: 'youtube',
    name: 'YouTube',
    color: '#FF0000',
    active: false,
    logo: (
      <svg viewBox="0 0 24 24" width="32" height="32">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
  },
  {
    id: 'facebook',
    name: 'Facebook',
    color: '#1877F2',
    active: false,
    logo: (
      <svg viewBox="0 0 24 24" width="32" height="32">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
  },
  {
    id: 'threads',
    name: 'Threads',
    color: '#000000',
    active: false,
    logo: (
      <svg viewBox="0 0 24 24" width="32" height="32">
        <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.96-.065-1.182.408-2.256 1.332-3.023.88-.73 2.088-1.146 3.396-1.17 1.211-.024 2.318.138 3.297.482-.038-.744-.2-1.322-.49-1.717-.383-.521-1.029-.785-1.92-.785h-.063c-.63.012-1.368.173-1.888.492l-.972-1.737c.752-.457 1.79-.725 2.906-.752h.094c1.498 0 2.686.457 3.435 1.323.658.762 1.005 1.822 1.032 3.153.578.242 1.09.549 1.528.92 1.145.97 1.858 2.378 2.06 4.073.222 1.858-.303 3.652-1.478 5.049C19.794 22.727 17.14 23.973 12.186 24z"/>
      </svg>
    ),
  },
];

// Platforms that are coming soon
const comingSoonPlatformIds = ['tiktok', 'instagram', 'youtube', 'facebook', 'threads'];

export default function DownloadForm({ dict, isLoading, error, onSubmit }: DownloadFormProps) {
  const [url, setUrl] = useState('');
  const [showComingSoon, setShowComingSoon] = useState(false);

  // Auto-hide popup after 4 seconds
  useEffect(() => {
    if (showComingSoon) {
      const timer = setTimeout(() => setShowComingSoon(false), 4000);
      return () => clearTimeout(timer);
    }
  }, [showComingSoon]);

  // Check if URL is from a coming soon platform
  const isComingSoonPlatform = (inputUrl: string): boolean => {
    const lowerUrl = inputUrl.toLowerCase();
    if (lowerUrl.includes('tiktok.com') || lowerUrl.includes('vm.tiktok.com')) return true;
    if (lowerUrl.includes('instagram.com')) return true;
    if (lowerUrl.includes('youtube.com') || lowerUrl.includes('youtu.be')) return true;
    if (lowerUrl.includes('facebook.com') || lowerUrl.includes('fb.watch')) return true;
    if (lowerUrl.includes('threads.net')) return true;
    return false;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (url.trim() && !isLoading) {
      if (isComingSoonPlatform(url.trim())) {
        setShowComingSoon(true);
      } else {
        onSubmit(url.trim());
      }
    }
  };

  return (
    <div className={styles.container}>
      {/* Infinite Carousel */}
      <div className={styles.carouselWrapper}>
        <div className={styles.carousel}>
          <div className={styles.carouselTrack}>
            {/* First set of logos */}
            {allPlatforms.map((platform) => (
              <div 
                key={`first-${platform.id}`} 
                className={`${styles.carouselItem} ${!platform.active ? styles.carouselItemInactive : ''}`}
                style={{ '--platform-color': platform.color } as React.CSSProperties}
              >
                <div className={styles.platformLogo}>
                  {platform.logo}
                </div>
                <span className={styles.platformName}>{platform.name}</span>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {allPlatforms.map((platform) => (
              <div 
                key={`second-${platform.id}`} 
                className={`${styles.carouselItem} ${!platform.active ? styles.carouselItemInactive : ''}`}
                style={{ '--platform-color': platform.color } as React.CSSProperties}
              >
                <div className={styles.platformLogo}>
                  {platform.logo}
                </div>
                <span className={styles.platformName}>{platform.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Coming Soon Popup */}
      {showComingSoon && (
        <div className={styles.popup}>
          <div className={styles.popupContent}>
            <button 
              className={styles.popupClose}
              onClick={() => setShowComingSoon(false)}
              aria-label="Close"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
              </svg>
            </button>
            <div className={styles.popupIcon}>
              <svg viewBox="0 0 24 24" width="48" height="48" fill="#E60023">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <p className={styles.popupMessage}>{dict.errors.comingSoon}</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputGroup}>
          <input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder={dict.input.placeholder}
            className={`input input-large ${styles.input}`}
            disabled={isLoading}
            required
            aria-label="URL to download"
          />
          
          <button
            type="submit"
            className={`btn btn-primary btn-large ${styles.button}`}
            disabled={isLoading || !url.trim()}
          >
            {isLoading ? (
              <>
                <span className="spinner" aria-hidden="true"></span>
                <span className={styles.loadingText}>{dict.input.loading}</span>
              </>
            ) : (
              <>
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" className={styles.downloadIcon}>
                  <path d="M12 16l-6-6h4V4h4v6h4l-6 6zm-6 4h12v2H6v-2z"/>
                </svg>
                {dict.input.button}
              </>
            )}
          </button>
        </div>
        
        {error && (
          <div className={`message message-error ${styles.error} fade-in`} role="alert">
            {error}
          </div>
        )}
      </form>
    </div>
  );
}
