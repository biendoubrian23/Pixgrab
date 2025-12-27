'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DownloadForm from '@/components/DownloadForm';
import Result from '@/components/Result';
import { MediaResult } from '@/types';
import { getDictionary } from '@/locales';
import styles from '../pinterest-video-downloader/page.module.css';

export default function TelechargerVideoRedditPage() {
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
        "name": "Comment télécharger une vidéo Reddit ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Copiez l'URL du post Reddit, collez-la dans Pixgrab et cliquez sur Télécharger. Votre vidéo sera prête en quelques secondes."
        }
      },
      {
        "@type": "Question",
        "name": "Les vidéos Reddit téléchargées ont-elles le son ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Oui ! Pixgrab télécharge les vidéos Reddit avec leur piste audio complète, contrairement à d'autres outils."
        }
      },
      {
        "@type": "Question",
        "name": "Est-ce que ça marche avec v.redd.it ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolument, nous supportons tous les formats de vidéos Reddit, y compris les liens v.redd.it."
        }
      },
      {
        "@type": "Question",
        "name": "Le téléchargement est-il gratuit ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Oui, Pixgrab est entièrement gratuit et sans limite de téléchargements."
        }
      },
      {
        "@type": "Question",
        "name": "Fonctionne-t-il sur mobile ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Oui, Pixgrab fonctionne sur iPhone, Android et tout appareil avec un navigateur web."
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
          <h1 className={styles.title}>Télécharger Vidéo Reddit</h1>
          <p className={styles.subtitle}>
            Téléchargez les vidéos Reddit avec le son en qualité HD. Gratuit, rapide et sans filigrane.
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
          <h2>Téléchargeur de Vidéos Reddit avec Audio</h2>
          <p>
            Reddit est une mine d'or de contenu vidéo - des moments viraux aux tutoriels, en passant par 
            les clips de jeux et les documentaires. Malheureusement, Reddit ne propose pas de bouton de 
            téléchargement natif. Pire encore, les vidéos Reddit (v.redd.it) séparent l'audio de la vidéo, 
            ce qui rend le téléchargement compliqué.
          </p>
          <p>
            C'est là que Pixgrab intervient. Notre outil récupère automatiquement la vidéo ET l'audio, 
            les combine, et vous offre un fichier complet en qualité HD. Pas besoin d'application, 
            pas besoin de compte - juste collez le lien et téléchargez.
          </p>

          <h2>Pourquoi Choisir Pixgrab ?</h2>
          <div className={styles.features}>
            <div className={styles.feature}>
              <h3>🔊 Avec le Son</h3>
              <p>Contrairement à d'autres outils, nous incluons l'audio dans vos téléchargements.</p>
            </div>
            <div className={styles.feature}>
              <h3>📺 Qualité HD</h3>
              <p>Obtenez la meilleure qualité disponible, jusqu'à 1080p.</p>
            </div>
            <div className={styles.feature}>
              <h3>⚡ Ultra Rapide</h3>
              <p>Téléchargement instantané, sans temps d'attente.</p>
            </div>
            <div className={styles.feature}>
              <h3>📱 Mobile Friendly</h3>
              <p>Fonctionne parfaitement sur smartphone et tablette.</p>
            </div>
          </div>

          <h2>Comment Télécharger une Vidéo Reddit</h2>
          <ol className={styles.steps}>
            <li><strong>Trouvez la vidéo</strong> - Naviguez sur Reddit et trouvez le post contenant la vidéo</li>
            <li><strong>Copiez le lien</strong> - Appuyez sur Partager puis Copier le lien</li>
            <li><strong>Collez ici</strong> - Entrez l'URL dans la boîte ci-dessus</li>
            <li><strong>Téléchargez</strong> - Cliquez sur Télécharger et sauvegardez sur votre appareil</li>
          </ol>

          <h2>Types de Contenu Reddit Populaires</h2>
          <ul>
            <li><strong>r/videos</strong> - Vidéos virales et contenus divertissants</li>
            <li><strong>r/gaming</strong> - Clips de jeux, moments épiques, fails</li>
            <li><strong>r/funny</strong> - Humour et moments hilarants</li>
            <li><strong>r/aww</strong> - Animaux mignons et moments adorables</li>
            <li><strong>r/sports</strong> - Highlights sportifs et moments mémorables</li>
          </ul>
        </section>

        <section className={styles.faqSection}>
          <h2>Questions Fréquentes</h2>
          <div className={styles.faqList}>
            <div className={styles.faqItem}>
              <h3>Comment télécharger une vidéo Reddit ?</h3>
              <p>Copiez l'URL du post Reddit, collez-la dans Pixgrab et cliquez sur Télécharger.</p>
            </div>
            <div className={styles.faqItem}>
              <h3>Les vidéos ont-elles le son ?</h3>
              <p>Oui ! Pixgrab télécharge les vidéos Reddit avec leur piste audio complète.</p>
            </div>
            <div className={styles.faqItem}>
              <h3>Est-ce que ça marche avec v.redd.it ?</h3>
              <p>Absolument, nous supportons tous les formats de vidéos Reddit.</p>
            </div>
            <div className={styles.faqItem}>
              <h3>Le téléchargement est-il gratuit ?</h3>
              <p>Oui, Pixgrab est entièrement gratuit et sans limite.</p>
            </div>
            <div className={styles.faqItem}>
              <h3>Fonctionne-t-il sur mobile ?</h3>
              <p>Oui, sur iPhone, Android et tout appareil avec un navigateur.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer dict={dict} />
    </>
  );
}
