'use client';

import { useState, FormEvent } from 'react';
import { Dictionary } from '@/types';
import styles from './DownloadForm.module.css';

type Platform = 'pinterest' | 'reddit' | 'x';

interface DownloadFormProps {
  dict: Dictionary;
  isLoading: boolean;
  error: string | null;
  onSubmit: (url: string) => void;
}

const platforms: { id: Platform; name: string; color: string; icon: JSX.Element }[] = [
  {
    id: 'pinterest',
    name: 'Pinterest',
    color: '#E60023',
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
        <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
      </svg>
    ),
  },
  {
    id: 'reddit',
    name: 'Reddit',
    color: '#FF4500',
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6.066 13.066c.081.375.126.772.126 1.181 0 2.409-2.809 4.369-6.273 4.369s-6.273-1.96-6.273-4.369c0-.409.045-.806.126-1.181-.502-.327-.826-.882-.826-1.52 0-.994.806-1.8 1.8-1.8.453 0 .867.168 1.184.444 1.127-.71 2.657-1.166 4.352-1.22l.815-2.586 2.196.52c.096-.462.51-.81 1.006-.81.564 0 1.023.459 1.023 1.023s-.459 1.023-1.023 1.023c-.384 0-.719-.213-.892-.527l-1.758-.415-.633 2.013c1.654.072 3.144.525 4.242 1.225.316-.276.731-.444 1.184-.444.994 0 1.8.806 1.8 1.8 0 .638-.324 1.193-.826 1.52z"/>
      </svg>
    ),
  },
  {
    id: 'x',
    name: 'X',
    color: '#000000',
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
];

export default function DownloadForm({ dict, isLoading, error, onSubmit }: DownloadFormProps) {
  const [url, setUrl] = useState('');
  const [activePlatform, setActivePlatform] = useState<Platform>('pinterest');

  const getPlaceholder = () => {
    switch (activePlatform) {
      case 'pinterest': return dict.input.placeholderPinterest;
      case 'reddit': return dict.input.placeholderReddit;
      case 'x': return dict.input.placeholderX;
      default: return dict.input.placeholder;
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (url.trim() && !isLoading) {
      onSubmit(url.trim());
    }
  };

  return (
    <div className={styles.container}>
      {/* Platform selector badges */}
      <div className={styles.platformSelector}>
        {platforms.map((platform) => (
          <button
            key={platform.id}
            type="button"
            className={`${styles.platformBadge} ${activePlatform === platform.id ? styles.active : ''}`}
            onClick={() => setActivePlatform(platform.id)}
            style={{
              '--platform-color': platform.color,
            } as React.CSSProperties}
          >
            <span className={styles.platformIcon}>{platform.icon}</span>
            <span className={styles.platformName}>{platform.name}</span>
          </button>
        ))}
      </div>

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputGroup}>
          <input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder={getPlaceholder()}
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
