'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Dictionary } from '@/types';
import styles from './Header.module.css';

interface HeaderProps {
  dict?: Dictionary;
  dictionary?: { title?: string; nav?: { home?: string; legal?: string } };
  locale?: 'en' | 'fr' | 'es' | 'pt' | 'it' | 'de' | 'nl';
}

const languages = [
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
  { code: 'es', label: 'Español', flag: '🇪🇸' },
  { code: 'pt', label: 'Português', flag: '🇧🇷' },
  { code: 'it', label: 'Italiano', flag: '🇮🇹' },
  { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
  { code: 'nl', label: 'Nederlands', flag: '🇳🇱' },
];

export default function Header({ dict, dictionary, locale = 'en' }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  const currentLang = languages.find(l => l.code === locale) || languages[0];

  // Éviter les erreurs d'hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  // Fermer le dropdown quand on clique dehors
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className={styles.header} role="banner">
      <div className={`container ${styles.container}`}>
        <Link href="/" className={styles.logo} aria-label="Pixgrab - Home">
          <Image
            src="/logo.jpeg"
            alt="Pixgrab"
            width={120}
            height={36}
            className={styles.logoImage}
            priority
          />
        </Link>
        
        <nav className={styles.nav} role="navigation" aria-label="Main navigation">
          <div className={styles.langDropdown} ref={dropdownRef}>
            <button 
              className={styles.langButton}
              onClick={() => setIsOpen(!isOpen)}
              aria-label={`Change language. Current: ${currentLang.label}`}
              suppressHydrationWarning
            >
              <span className={styles.langFlag} suppressHydrationWarning>{currentLang.flag}</span>
              <span className={styles.langCode}>{currentLang.code.toUpperCase()}</span>
              <svg 
                className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ''}`}
                width="12" 
                height="12" 
                viewBox="0 0 12 12" 
                fill="none"
              >
                <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            
            {mounted && isOpen && (
              <div className={styles.langMenu}>
                {languages.map((lang) => (
                  <Link
                    key={lang.code}
                    href={`/${lang.code}`}
                    className={`${styles.langOption} ${lang.code === locale ? styles.langOptionActive : ''}`}
                    onClick={() => setIsOpen(false)}
                  >
                    <span className={styles.langFlag}>{lang.flag}</span>
                    <span>{lang.label}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
