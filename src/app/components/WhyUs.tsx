"use client";

import Image from 'next/image';
import styles from './styles/WhyUs.module.css';

export default function WhyUs() {
  return (
    <section id="section-why-us" className={styles['why-us-section']}>
      <div className={`${styles.container} ${styles['why-us-container']}`}>
        <h2>Por que escolher a <span className={styles.highlight}>Brocado</span>?</h2>
        <div className={styles['why-us-grid']}>
          <div className={styles['why-us-item']}>
            <Image src="/images/689_172.svg" alt="Money Icon" width={40} height={40} />
            <p>Taxas mais baixas para restaurantes</p>
          </div>
          <div className={styles['why-us-item']}>
            <Image src="/images/689_178.svg" alt="Moto Icon" width={40} height={40} />
            <p>Entregadores com estrutura e apoio</p>
          </div>
          <div className={styles['why-us-item']}>
            <Image src="/images/689_182.svg" alt="Mobile Icon" width={40} height={40} />
            <p>Plataforma completa com ERP integrado</p>
          </div>
          <div className={styles['why-us-item']}>
            <Image src="/images/689_186.svg" alt="Heart Icon" width={40} height={40} />
            <p>Rede colaborativa e sustentável</p>
          </div>
          <div className={styles['why-us-item']}>
            <Image src="/images/689_190.svg" alt="Company Icon" width={40} height={40} />
            <p>Expansão planejada: capitais e interiores</p>
          </div>
        </div>
      </div>
    </section>
  );
}

