'use client';

import { useState } from 'react';
import { Dictionary } from '@/types';
import styles from './FAQ.module.css';

interface FAQProps {
  dict: Dictionary;
}

export default function FAQ({ dict }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.faq}>
      <h2 className={styles.title}>{dict.faq.title}</h2>
      
      <div className={styles.list}>
        {dict.faq.items.map((item, index) => (
          <div 
            key={index} 
            className={`${styles.item} ${openIndex === index ? styles.itemOpen : ''}`}
          >
            <button
              className={styles.question}
              onClick={() => toggleItem(index)}
              aria-expanded={openIndex === index}
            >
              <span>{item.question}</span>
              <span className={styles.icon} aria-hidden="true">
                {openIndex === index ? '−' : '+'}
              </span>
            </button>
            
            {openIndex === index && (
              <div className={styles.answer}>
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
