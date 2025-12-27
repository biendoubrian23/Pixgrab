import { Dictionary } from '@/types';
import styles from './Hero.module.css';

interface HeroProps {
  dict: Dictionary;
}

export default function Hero({ dict }: HeroProps) {
  return (
    <section className={styles.hero}>
      <h1 className={styles.title}>
        {dict.hero.titleLine1}{' '}
        {dict.hero.titleLine2}{' '}
        <span className={styles.highlight}>{dict.hero.titleHighlight}</span>
      </h1>
      <p className={styles.subtitle}>{dict.hero.subtitle}</p>
      
      <ul className={styles.features}>
        {dict.hero.features.map((feature, index) => (
          <li key={index} className={styles.feature}>
            <span className={styles.checkmark}>✓</span>
            {feature}
          </li>
        ))}
      </ul>
    </section>
  );
}
