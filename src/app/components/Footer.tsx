"use client";

import Link from 'next/link';
import styles from './styles/Footer.module.css';

export default function Footer() {
  return (
    <section id="section-footer" className={styles['footer-section']}>
      <footer className={styles['main-footer']}>
        <div className={`${styles.container} ${styles['footer-container']}`}>
          <p className={styles.copyright}>Brocado Food - Todos os direitos reservados</p>
          
        </div>
      </footer>
    </section>
  );
}

