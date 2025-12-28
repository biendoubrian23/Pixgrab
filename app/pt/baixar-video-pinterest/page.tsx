'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import DownloadForm from '@/components/DownloadForm';
import Result from '@/components/Result';
import Footer from '@/components/Footer';
import { MediaResult } from '@/types';
import { en } from '@/locales/en';
import styles from '../../pinterest-video-downloader/page.module.css';

export default function BaixarVideoPinterestPage() {
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
    { question: 'Como baixar vídeos do Pinterest?', answer: 'Simplesmente copie a URL do vídeo do Pinterest, cole no campo acima e clique em Baixar. Seu vídeo estará pronto em segundos.' },
    { question: 'É grátis baixar vídeos do Pinterest?', answer: 'Sim, Pixgrab é 100% grátis. Sem registro, sem taxas ocultas.' },
    { question: 'Posso baixar vídeos do Pinterest no iPhone?', answer: 'Sim! Pixgrab funciona em todos os dispositivos incluindo iPhone, Android, iPad e navegadores desktop.' },
    { question: 'Qual qualidade de vídeo posso baixar?', answer: 'Fornecemos a mais alta qualidade disponível, até 1080p HD e 4K quando disponível.' },
  ];

  return (
    <div className={styles.page}>
      <Header dict={dict} />
      
      <main className={styles.main}>
        <div className="container">
          <section className={styles.hero}>
            <h1 className={styles.title}>
              Baixar Vídeos do Pinterest
              <span className={styles.highlight}> — Download HD Grátis</span>
            </h1>
            <p className={styles.subtitle}>
              Baixe vídeos do Pinterest em qualidade HD. Sem marca d'água, sem registro necessário. 
              Salve pins de vídeo do Pinterest no seu dispositivo com um clique.
            </p>
            
            <div className={styles.features}>
              <span className={styles.feature}>✓ Qualidade HD</span>
              <span className={styles.feature}>✓ Sem Marca d'Água</span>
              <span className={styles.feature}>✓ Grátis Sempre</span>
              <span className={styles.feature}>✓ Funciona no Celular</span>
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
            <h2>Como Baixar Vídeos do Pinterest</h2>
            <div className={styles.steps}>
              <div className={styles.step}>
                <span className={styles.stepNumber}>1</span>
                <h3>Copie a URL do Pinterest</h3>
                <p>Abra o Pinterest, encontre o vídeo que deseja baixar e copie sua URL da barra de endereços ou botão compartilhar.</p>
              </div>
              <div className={styles.step}>
                <span className={styles.stepNumber}>2</span>
                <h3>Cole o Link</h3>
                <p>Cole o link do vídeo do Pinterest copiado no campo de entrada acima.</p>
              </div>
              <div className={styles.step}>
                <span className={styles.stepNumber}>3</span>
                <h3>Baixe Seu Vídeo</h3>
                <p>Clique no botão Baixar e salve o vídeo no seu dispositivo. Simples assim!</p>
              </div>
            </div>
          </section>

          <section className={styles.content}>
            <h2>O Melhor Baixador de Vídeos do Pinterest Online</h2>
            <p>
              Pixgrab é o baixador de vídeos do Pinterest mais rápido e confiável disponível online. 
              Nossa ferramenta permite salvar qualquer vídeo do Pinterest no seu dispositivo na mais alta qualidade possível, 
              completamente grátis.
            </p>
            
            <h3>Por Que Escolher Pixgrab para Downloads do Pinterest?</h3>
            <ul>
              <li><strong>Alta Qualidade:</strong> Baixe vídeos em qualidade original, até 1080p HD</li>
              <li><strong>Sem Registro:</strong> Comece a baixar imediatamente sem criar uma conta</li>
              <li><strong>Sem Marca d'Água:</strong> Seus vídeos baixados são limpos e sem marca d'água</li>
              <li><strong>Rápido e Grátis:</strong> Downloads instantâneos sem custo</li>
              <li><strong>Compatível com Celular:</strong> Funciona perfeitamente em iPhone, Android e tablets</li>
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
            "name": "Pixgrab Baixador de Vídeos do Pinterest",
            "url": "https://pixgrab.com/pt/baixar-video-pinterest",
            "description": "Baixe vídeos do Pinterest em qualidade HD grátis. Sem marca d'água, sem registro.",
            "applicationCategory": "MultimediaApplication",
            "operatingSystem": "Any",
            "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
          })
        }}
      />
    </div>
  );
}
