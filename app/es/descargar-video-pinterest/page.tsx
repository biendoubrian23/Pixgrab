'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import DownloadForm from '@/components/DownloadForm';
import Result from '@/components/Result';
import Footer from '@/components/Footer';
import { MediaResult } from '@/types';
import { en } from '@/locales/en';
import styles from '../../pinterest-video-downloader/page.module.css';

export default function DescargarVideoPinterestPage() {
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
    { question: '¿Cómo descargar videos de Pinterest?', answer: 'Simplemente copia la URL del video de Pinterest, pégala en el campo de arriba y haz clic en Descargar. Tu video estará listo en segundos.' },
    { question: '¿Es gratis descargar videos de Pinterest?', answer: 'Sí, Pixgrab es 100% gratis. Sin registro, sin cargos ocultos.' },
    { question: '¿Puedo descargar videos de Pinterest en iPhone?', answer: '¡Sí! Pixgrab funciona en todos los dispositivos incluyendo iPhone, Android, iPad y navegadores de escritorio.' },
    { question: '¿Qué calidad de video puedo descargar?', answer: 'Proporcionamos la más alta calidad disponible, hasta 1080p HD y 4K cuando está disponible.' },
  ];

  return (
    <div className={styles.page}>
      <Header dict={dict} />
      
      <main className={styles.main}>
        <div className="container">
          <section className={styles.hero}>
            <h1 className={styles.title}>
              Descargador de Videos de Pinterest
              <span className={styles.highlight}> — Descarga HD Gratis</span>
            </h1>
            <p className={styles.subtitle}>
              Descarga videos de Pinterest en calidad HD. Sin marca de agua, sin registro requerido. 
              Guarda pins de video de Pinterest en tu dispositivo con un solo clic.
            </p>
            
            <div className={styles.features}>
              <span className={styles.feature}>✓ Calidad HD</span>
              <span className={styles.feature}>✓ Sin Marca de Agua</span>
              <span className={styles.feature}>✓ Gratis Siempre</span>
              <span className={styles.feature}>✓ Funciona en Móvil</span>
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
            <h2>Cómo Descargar Videos de Pinterest</h2>
            <div className={styles.steps}>
              <div className={styles.step}>
                <span className={styles.stepNumber}>1</span>
                <h3>Copia la URL de Pinterest</h3>
                <p>Abre Pinterest, encuentra el video que quieres descargar y copia su URL desde la barra de direcciones o el botón compartir.</p>
              </div>
              <div className={styles.step}>
                <span className={styles.stepNumber}>2</span>
                <h3>Pega el Enlace</h3>
                <p>Pega el enlace del video de Pinterest copiado en el campo de entrada de arriba.</p>
              </div>
              <div className={styles.step}>
                <span className={styles.stepNumber}>3</span>
                <h3>Descarga Tu Video</h3>
                <p>Haz clic en el botón Descargar y guarda el video en tu dispositivo. ¡Así de simple!</p>
              </div>
            </div>
          </section>

          <section className={styles.content}>
            <h2>El Mejor Descargador de Videos de Pinterest Online</h2>
            <p>
              Pixgrab es el descargador de videos de Pinterest más rápido y confiable disponible en línea. 
              Nuestra herramienta te permite guardar cualquier video de Pinterest en tu dispositivo en la más alta calidad posible, 
              completamente gratis.
            </p>
            
            <h3>¿Por Qué Elegir Pixgrab para Descargas de Pinterest?</h3>
            <ul>
              <li><strong>Alta Calidad:</strong> Descarga videos en su calidad original, hasta 1080p HD</li>
              <li><strong>Sin Registro:</strong> Comienza a descargar inmediatamente sin crear una cuenta</li>
              <li><strong>Sin Marca de Agua:</strong> Tus videos descargados están limpios y sin marca de agua</li>
              <li><strong>Rápido y Gratis:</strong> Descargas instantáneas sin costo</li>
              <li><strong>Compatible con Móviles:</strong> Funciona perfectamente en iPhone, Android y tablets</li>
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
            "name": "Pixgrab Descargador de Videos de Pinterest",
            "url": "https://pixgrab.com/es/descargar-video-pinterest",
            "description": "Descarga videos de Pinterest en calidad HD gratis. Sin marca de agua, sin registro.",
            "applicationCategory": "MultimediaApplication",
            "operatingSystem": "Any",
            "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
          })
        }}
      />
    </div>
  );
}
