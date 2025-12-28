'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import DownloadForm from '@/components/DownloadForm';
import Result from '@/components/Result';
import Footer from '@/components/Footer';
import { MediaResult } from '@/types';
import { en } from '@/locales/en';
import styles from '../../pinterest-video-downloader/page.module.css';

export default function BaixarVideoRedditPage() {
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
        setError(data.error || 'Ocorreu um erro');
        return;
      }

      if (data.success && data.data) {
        setResult(data.data);
      } else {
        setError(data.error || 'Conteúdo não encontrado');
      }
    } catch (err) {
      setError('Erro de rede. Tente novamente.');
    } finally {
      setIsLoading(false);
    }
  };

  const faqs = [
    { question: 'Como baixar vídeos do Reddit com áudio?', answer: 'Pixgrab baixa automaticamente vídeos do Reddit com áudio. Simplesmente cole a URL e nós cuidamos do resto.' },
    { question: 'É grátis baixar vídeos do Reddit?', answer: 'Sim, Pixgrab é 100% grátis. Sem registro, sem taxas ocultas.' },
    { question: 'Funciona com todos os subreddits?', answer: 'Sim! Pixgrab funciona com vídeos de qualquer subreddit público.' },
    { question: 'Qual qualidade de vídeo posso baixar?', answer: 'Fornecemos a mais alta qualidade disponível, incluindo áudio quando disponível.' },
  ];

  return (
    <div className={styles.page}>
      <Header dict={dict} />
      
      <main className={styles.main}>
        <div className="container">
          <section className={styles.hero}>
            <h1 className={styles.title}>
              Baixar Vídeos do Reddit
              <span className={styles.highlight}> — Com Áudio HD</span>
            </h1>
            <p className={styles.subtitle}>
              Baixe vídeos do Reddit com áudio em qualidade HD. Sem marca d'água, sem registro necessário. 
              Salve vídeos de qualquer subreddit no seu dispositivo.
            </p>
            
            <div className={styles.features}>
              <span className={styles.feature}>✓ Com Áudio</span>
              <span className={styles.feature}>✓ Qualidade HD</span>
              <span className={styles.feature}>✓ Grátis Sempre</span>
              <span className={styles.feature}>✓ Todos os Subreddits</span>
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
            <h2>Como Baixar Vídeos do Reddit</h2>
            <div className={styles.steps}>
              <div className={styles.step}>
                <span className={styles.stepNumber}>1</span>
                <h3>Copie a URL do Reddit</h3>
                <p>Abra o Reddit, encontre o vídeo que deseja baixar e copie sua URL da barra de endereços ou botão compartilhar.</p>
              </div>
              <div className={styles.step}>
                <span className={styles.stepNumber}>2</span>
                <h3>Cole o Link</h3>
                <p>Cole o link do vídeo do Reddit copiado no campo de entrada acima.</p>
              </div>
              <div className={styles.step}>
                <span className={styles.stepNumber}>3</span>
                <h3>Baixe Seu Vídeo</h3>
                <p>Clique no botão Baixar e salve o vídeo com áudio no seu dispositivo.</p>
              </div>
            </div>
          </section>

          <section className={styles.content}>
            <h2>O Melhor Baixador de Vídeos do Reddit Online</h2>
            <p>
              Pixgrab é o baixador de vídeos do Reddit mais confiável que combina automaticamente 
              vídeo e áudio. Salve vídeos de qualquer subreddit na mais alta qualidade possível.
            </p>
            
            <h3>Por Que Escolher Pixgrab para Reddit?</h3>
            <ul>
              <li><strong>Vídeo + Áudio:</strong> Combinamos automaticamente vídeo e áudio separados do Reddit</li>
              <li><strong>Sem Registro:</strong> Comece a baixar imediatamente sem criar uma conta</li>
              <li><strong>Todos os Subreddits:</strong> Funciona com qualquer subreddit público</li>
              <li><strong>Rápido e Grátis:</strong> Downloads instantâneos sem custo</li>
            </ul>
          </section>

          <section className={styles.faq}>
            <h2>Perguntas Frequentes</h2>
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
            "name": "Pixgrab Baixador de Vídeos do Reddit",
            "url": "https://pixgrab.com/pt/baixar-video-reddit",
            "description": "Baixe vídeos do Reddit com áudio em HD grátis.",
            "applicationCategory": "MultimediaApplication",
            "operatingSystem": "Any",
            "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
          })
        }}
      />
    </div>
  );
}
