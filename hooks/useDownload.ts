'use client';

import { useState, useCallback } from 'react';
import { MediaResult, DownloadResponse } from '@/types';

interface UseDownloadOptions {
  onSuccess?: (result: MediaResult) => void;
  onError?: (error: string) => void;
}

interface UseDownloadReturn {
  isLoading: boolean;
  error: string | null;
  result: MediaResult | null;
  download: (url: string) => Promise<void>;
  reset: () => void;
}

export function useDownload(options: UseDownloadOptions = {}): UseDownloadReturn {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<MediaResult | null>(null);

  const download = useCallback(async (url: string) => {
    setIsLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await fetch('/api/download', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }),
      });

      const data: DownloadResponse = await response.json();

      if (!response.ok) {
        const errorMessage = data.error || 'Something went wrong. Please try again.';
        setError(errorMessage);
        options.onError?.(errorMessage);
        return;
      }

      if (data.success && data.data) {
        // Handle single result (not array for now)
        const mediaResult = Array.isArray(data.data) ? data.data[0] : data.data;
        setResult(mediaResult);
        options.onSuccess?.(mediaResult);
      } else {
        const errorMessage = data.error || 'No downloadable media found';
        setError(errorMessage);
        options.onError?.(errorMessage);
      }
    } catch (err) {
      const errorMessage = 'Connection error. Check your internet.';
      setError(errorMessage);
      options.onError?.(errorMessage);
    } finally {
      setIsLoading(false);
    }
  }, [options]);

  const reset = useCallback(() => {
    setResult(null);
    setError(null);
  }, []);

  return {
    isLoading,
    error,
    result,
    download,
    reset,
  };
}

/**
 * Télécharge un fichier depuis une URL via notre proxy
 */
export async function downloadFile(
  mediaUrl: string, 
  filename: string
): Promise<boolean> {
  try {
    const response = await fetch(`/api/proxy?url=${encodeURIComponent(mediaUrl)}`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch media');
    }

    const blob = await response.blob();
    const downloadUrl = window.URL.createObjectURL(blob);
    
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    window.URL.revokeObjectURL(downloadUrl);
    return true;
  } catch (error) {
    console.error('Download failed:', error);
    // Fallback: ouvrir dans un nouvel onglet
    window.open(mediaUrl, '_blank');
    return false;
  }
}
