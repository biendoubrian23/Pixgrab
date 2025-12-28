'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import DownloadForm from '@/components/DownloadForm';
import Result from '@/components/Result';
import Footer from '@/components/Footer';
import { MediaResult } from '@/types';
import { en } from '@/locales/en';
import styles from '../../pinterest-video-downloader/page.module.css';

export default function DescargarVideoRedditPage() {
  const [result, setResult] = useState<MediaResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const dict = en;

  const handleDownload = async (url: string) => {
    setIsLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await fetch('/api/download', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || 'Ocurrió un error');
        return;
      }

      if (data.success && data.data) {
        setResult(data.data);
      } else {
        setError(data.error || 'No se encontró contenido');
      }
    } catch (err) {
      setError('Error de red. Inténtalo de nuevo.');
    } finally {
      setIsLoading(false);
    }
  };

  const faqs = [
    { question: '¿Cómo descargar videos de Reddit con audio?', answer: 'Pixgrab descarga automáticamente videos de Reddit con audio. Simplemente pega la URL y nosotros nos encargamos del resto.' },
    { question: '¿Es gratis descargar videos de Reddit?', answer: 'Sí, Pixgrab es 100% gratis. Sin registro, sin cargos ocultos.' },
    { question: '¿Funciona con todos los subreddits?', answer: '¡Sí! Pixgrab funciona con videos de cualquier subreddit público.' },
    { question: '¿Qué calidad de video puedo descargar?', answer: 'Proporcionamos la más alta calidad disponible, incluyendo audio cuando está disponible.' },
  ];

  return (
    <div className={styles.page}>
      <Header dict={dict} />
      
      <main className={styles.main}>
        <div className="container">
          <section className={styles.hero}>
            <h1 className={styles.title}>
              Descargador de Videos de Reddit
              <span className={styles.highlight}> — Con Audio HD</span>
            </h1>
            <p className={styles.subtitle}>
              Descarga videos de Reddit con audio en calidad HD. Sin marca de agua, sin registro requerido. 
              Guarda videos de cualquier subreddit en tu dispositivo.
            </p>
            
            <div className={styles.features}>
              <span className={styles.feature}>✓ Con Audio</span>
              <span className={styles.feature}>✓ Calidad HD</span>
              <span className={styles.feature}>✓ Gratis Siempre</span>
              <span className={styles.feature}>✓ Todos los Subreddits</span>
            </div>
          </section>

          <section className={styles.downloadSection}>
            <DownloadForm
              dict={dict}
              isLoading={isLoading}
              error={error}
              onSubmit={handleDownload}
            />
            
            {result && <Result dict={dict} result={result} />}
          </section>

          <section className={styles.howTo}>
            <h2>Cómo Descargar Videos de Reddit</h2>
            <div className={styles.steps}>
              <div className={styles.step}>
                <span className={styles.stepNumber}>1</span>
                <h3>Copia la URL de Reddit</h3>
                <p>Abre Reddit, encuentra el video que quieres descargar y copia su URL desde la barra de direcciones o el botón compartir.</p>
              </div>
              <div className={styles.step}>
                <span className={styles.stepNumber}>2</span>
                <h3>Pega el Enlace</h3>
                <p>Pega el enlace del video de Reddit copiado en el campo de entrada de arriba.</p>
              </div>
              <div className={styles.step}>
                <span className={styles.stepNumber}>3</span>
                <h3>Descarga Tu Video</h3>
                <p>Haz clic en el botón Descargar y guarda el video con audio en tu dispositivo.</p>
              </div>
            </div>
          </section>

          <section className={styles.content}>
            <h2>El Mejor Descargador de Videos de Reddit Online</h2>
            <p>
              Pixgrab es el descargador de videos de Reddit más confiable que combina automáticamente 
              video y audio. Guarda videos de cualquier subreddit en la más alta calidad posible.
            </p>
            
            <h3>¿Por Qué Elegir Pixgrab para Reddit?</h3>
            <ul>
              <li><strong>Video + Audio:</strong> Combinamos automáticamente el video y audio separados de Reddit</li>
              <li><strong>Sin Registro:</strong> Comienza a descargar inmediatamente sin crear una cuenta</li>
              <li><strong>Todos los Subreddits:</strong> Funciona con cualquier subreddit público</li>
              <li><strong>Rápido y Gratis:</strong> Descargas instantáneas sin costo</li>
            </ul>
          </section>

          <section className={styles.faq}>
            <h2>Preguntas Frecuentes</h2>
            <div className={styles.faqList}>
              {faqs.map((faq, index) => (
                <details key={index} className={styles.faqItem}>
                  <summary className={styles.faqQuestion}>{faq.question}</summary>
                  <p className={styles.faqAnswer}>{faq.answer}</p>
                </details>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer dict={dict} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Pixgrab Descargador de Videos de Reddit",
            "url": "https://pixgrab.com/es/descargar-video-reddit",
            "description": "Descarga videos de Reddit con audio en HD gratis.",
            "applicationCategory": "MultimediaApplication",
            "operatingSystem": "Any",
            "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
          })
        }}
      />
    </div>
  );
}
