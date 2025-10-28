"use client";

import Image from 'next/image';
import styles from './styles/Restaurants.module.css';

export default function Restaurants() {
  return (
    <section id="section-restaurants" className={styles['restaurants-section']}>
      <div className="container">
        <h2>Mais liberdade para quem vive da cozinha</h2>
        <div className={styles['features-grid']}>
          <div className={styles['feature-card']}>
            <Image src="/images/689_302.svg" alt="Mobile Icon" className={styles['feature-icon']} width={40} height={40} />
            <p>Taxas menores que os apps tradicionais</p>
          </div>
          <div className={styles['feature-card']}>
            <Image src="/images/689_306.svg" alt="Grid Icon" className={styles['feature-icon']} width={40} height={40} />
            <p>Gestão completa com ERP integrado</p>
          </div>
          <div className={styles['feature-card']}>
            <Image src="/images/689_314.svg" alt="Pay Icon" className={styles['feature-icon']} width={40} height={40} />
            <p>Pagamento justo e direto</p>
          </div>
          <div className={styles['feature-card']}>
            <Image src="/images/689_318.svg" alt="Food Icon" className={styles['feature-icon']} width={40} height={40} />
            <p>Controle total sobre pedidos e entregas</p>
          </div>
          <div className={styles['feature-card']}>
            <Image src="/images/689_322.svg" alt="Support Icon" className={styles['feature-icon']} width={40} height={40} />
            <p>Suporte de verdade, sem burocracia</p>
          </div>
        </div>
      </div>
    </section>
  );
}

