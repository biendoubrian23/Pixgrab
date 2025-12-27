'use client';

import styles from './page.module.css';

export default function Offline() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>You&apos;re offline</h1>
        <p className={styles.message}>
          Pixgrab needs an internet connection to work. Please check your connection and try again.
        </p>
        <button 
          className={styles.button}
          onClick={() => window.location.reload()}
        >
          Try again
        </button>
      </div>
    </div>
  );
}
