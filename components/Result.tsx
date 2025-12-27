'use client';

import { useState } from 'react';
import { MediaResult, Dictionary } from '@/types';
import styles from './Result.module.css';

interface ResultProps {
  dict: Dictionary;
  result: MediaResult;
}

type Resolution = 'original' | 'high' | 'medium' | 'low';

const resolutions: { id: Resolution; label: string; free: boolean }[] = [
  { id: 'original', label: 'Original (4K)', free: true },
  { id: 'high', label: 'High (1080p)', free: true },
  { id: 'medium', label: 'Medium (720p)', free: true },
  { id: 'low', label: 'Low (480p)', free: true },
];

export default function Result({ dict, result }: ResultProps) {
  const [selectedResolution, setSelectedResolution] = useState<Resolution>('original');
  const [isDownloading, setIsDownloading] = useState(false);

  const getFileExtension = (url: string): string => {
    const match = url.match(/\.(\w+)(?:\?|$)/);
    return match ? match[1].toUpperCase() : result.type === 'video' ? 'MP4' : 'JPG';
  };

  const handleDownload = async () => {
    setIsDownloading(true);
    try {
      const response = await fetch(`/api/proxy?url=${encodeURIComponent(result.url)}`);
      const blob = await response.blob();
      
      const downloadUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = result.filename;
      link.style.display = 'none';
      document.body.appendChild(link);
      link.click();
      
      setTimeout(() => {
        if (link.parentNode) {
          link.parentNode.removeChild(link);
        }
        window.URL.revokeObjectURL(downloadUrl);
      }, 100);
    } catch (error) {
      window.open(result.url, '_blank');
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className={`${styles.result} fade-in`}>
      {/* Layout horizontal: contrôles à gauche, preview à droite */}
      <div className={styles.controls}>
        <div className={styles.meta}>
          <span className={styles.badge}>{getFileExtension(result.url)}</span>
          <span className={styles.typeLabel}>
            {result.type === 'video' ? 'Video' : 'Image'}
          </span>
        </div>
        
        {/* Sélecteur de résolution */}
        <div className={styles.resolutionSelector}>
          <label className={styles.resolutionLabel}>Quality:</label>
          <div className={styles.resolutionOptions}>
            {resolutions.map((res) => (
              <button
                key={res.id}
                type="button"
                className={`${styles.resolutionOption} ${selectedResolution === res.id ? styles.resolutionActive : ''}`}
                onClick={() => setSelectedResolution(res.id)}
              >
                {res.label}
                {res.free && <span className={styles.freeTag}>Free</span>}
              </button>
            ))}
          </div>
        </div>
        
        <button
          onClick={handleDownload}
          disabled={isDownloading}
          className={`btn btn-primary btn-large ${styles.downloadBtn}`}
        >
          {isDownloading ? (
            <>
              <span className="spinner" aria-hidden="true"></span>
              Downloading...
            </>
          ) : (
            <>
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M12 16l-6-6h4V4h4v6h4l-6 6zm-6 4h12v2H6v-2z"/>
              </svg>
              {dict.result.download}
            </>
          )}
        </button>
      </div>
      
      <div className={styles.preview}>
        {result.type === 'image' ? (
          <img 
            src={result.thumbnailUrl || result.url} 
            alt="Preview"
            className={styles.image}
          />
        ) : (
          <video 
            src={result.url}
            className={styles.video}
            controls
            playsInline
            preload="metadata"
          />
        )}
      </div>
    </div>
  );
}
