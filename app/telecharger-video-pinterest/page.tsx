'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DownloadForm from '@/components/DownloadForm';
import Result from '@/components/Result';
import { MediaResult } from '@/types';
import { getDictionary } from '@/locales';
import styles from '../pinterest-video-downloader/page.module.css';

export default function TelechargerVideoPinterestPage() {
  const dict = getDictionary('fr');
  const [result, setResult] = useState<MediaResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

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
        setError(data.error || 'Une erreur est survenue');
        return;
      }

      if (data.success && data.data) {
        setResult(data.data);
      } else {
        setError(data.error || 'Aucun média trouvé');
      }
    } catch {
      setError('Erreur réseau');
    } finally {
      setIsLoading(false);
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Comment télécharger une vidéo Pinterest ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Copiez l'URL de l'épingle Pinterest, collez-la dans Pixgrab et cliquez sur Télécharger. Votre vidéo HD sera prête instantanément."
        }
      },
      {
        "@type": "Question",
        "name": "Quelle est la qualité des vidéos téléchargées ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Pixgrab télécharge les vidéos Pinterest dans leur qualité originale, généralement en HD ou Full HD."
        }
      },
      {
        "@type": "Question",
        "name": "Faut-il un compte Pinterest ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Non, aucun compte n'est nécessaire. Collez simplement le lien d'une épingle publique."
        }
      },
      {
        "@type": "Question",
        "name": "Est-ce gratuit ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Oui, Pixgrab est 100% gratuit, sans inscription ni limite de téléchargements."
        }
      },
      {
        "@type": "Question",
        "name": "Y a-t-il un filigrane ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Non, les vidéos sont téléchargées dans leur format original, sans filigrane ajouté."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header dict={dict} locale="fr" />
      <main className={styles.main}>
        <section className={styles.heroSection}>
          <h1 className={styles.title}>Télécharger Vidéo Pinterest</h1>
          <p className={styles.subtitle}>
            Téléchargez les vidéos Pinterest en qualité HD. Gratuit, sans inscription et sans filigrane.
          </p>
          <div className={styles.formWrapper}>
            <DownloadForm
              dict={dict}
              isLoading={isLoading}
              error={error}
              onSubmit={handleDownload}
            />
            {result && <Result dict={dict} result={result} />}
          </div>
        </section>

        <section className={styles.contentSection}>
          <h2>Téléchargeur de Vidéos Pinterest Gratuit</h2>
          <p>
            Pinterest est devenu une plateforme majeure pour découvrir des tutoriels vidéo, des recettes, 
            des inspirations DIY et bien plus encore. Ces vidéos sont souvent courtes mais incroyablement 
            utiles - parfaites pour les sauvegarder et les regarder hors ligne.
          </p>
          <p>
            Avec Pixgrab, télécharger une vidéo Pinterest n'a jamais été aussi simple. Pas besoin 
            d'installer une application, pas besoin de créer un compte. Copiez le lien, collez-le, 
            et votre vidéo est prête en quelques secondes.
          </p>

          <h2>Avantages de Pixgrab</h2>
          <div className={styles.features}>
            <div className={styles.feature}>
              <h3>📺 Qualité HD</h3>
              <p>Téléchargez les vidéos dans leur résolution originale.</p>
            </div>
            <div className={styles.feature}>
              <h3>✨ Sans Filigrane</h3>
              <p>Vidéos propres, exactement comme sur Pinterest.</p>
            </div>
            <div className={styles.feature}>
              <h3>⚡ Instantané</h3>
              <p>Téléchargement rapide sans temps d'attente.</p>
            </div>
            <div className={styles.feature}>
              <h3>📱 Tous Appareils</h3>
              <p>Fonctionne sur PC, Mac, iPhone et Android.</p>
            </div>
          </div>

          <h2>Comment Télécharger une Vidéo Pinterest</h2>
          <ol className={styles.steps}>
            <li><strong>Trouvez votre épingle</strong> - Parcourez Pinterest et trouvez la vidéo à télécharger</li>
            <li><strong>Copiez l'URL</strong> - Appuyez sur le bouton partager et copiez le lien</li>
            <li><strong>Collez ici</strong> - Entrez le lien dans la boîte ci-dessus</li>
            <li><strong>Téléchargez</strong> - Cliquez sur le bouton et sauvegardez</li>
          </ol>

          <h2>Catégories Populaires sur Pinterest</h2>
          <ul>
            <li><strong>Tutoriels & DIY</strong> - Projets créatifs, bricolage, artisanat</li>
            <li><strong>Recettes de Cuisine</strong> - Tutoriels culinaires, recettes vidéo</li>
            <li><strong>Fitness & Bien-être</strong> - Exercices, yoga, méditation</li>
            <li><strong>Beauté & Maquillage</strong> - Tutoriels makeup, coiffure</li>
            <li><strong>Décoration Intérieure</strong> - Idées déco, rénovation</li>
          </ul>
        </section>

        <section className={styles.faqSection}>
          <h2>Questions Fréquentes</h2>
          <div className={styles.faqList}>
            <div className={styles.faqItem}>
              <h3>Comment télécharger une vidéo Pinterest ?</h3>
              <p>Copiez l'URL de l'épingle Pinterest, collez-la dans Pixgrab et cliquez sur Télécharger.</p>
            </div>
            <div className={styles.faqItem}>
              <h3>Quelle est la qualité des vidéos ?</h3>
              <p>Pixgrab télécharge les vidéos dans leur qualité originale, généralement en HD.</p>
            </div>
            <div className={styles.faqItem}>
              <h3>Faut-il un compte Pinterest ?</h3>
              <p>Non, aucun compte n'est nécessaire pour les épingles publiques.</p>
            </div>
            <div className={styles.faqItem}>
              <h3>Est-ce gratuit ?</h3>
              <p>Oui, Pixgrab est 100% gratuit, sans limite de téléchargements.</p>
            </div>
            <div className={styles.faqItem}>
              <h3>Y a-t-il un filigrane ?</h3>
              <p>Non, les vidéos sont téléchargées sans filigrane.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer dict={dict} />
    </>
  );
}
