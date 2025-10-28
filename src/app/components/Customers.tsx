"use client";

import Image from 'next/image';
import styles from './styles/Customers.module.css';

export default function Customers() {
  return (
    <section id="section-customers" className={styles['customers-section']}>
      <div className={`container ${styles['customers-container']}`}>
        <div className={styles['customers-image-wrapper']}>
          <Image src="/images/689_209.svg" alt="Illustration of a chef holding a burger" className={styles['customers-illustration']} width={592} height={400} /> {/* Adjust width/height as needed */}
          <div className={styles['customers-app-modal']}>
            <p className="w-1/2"><strong>Baixe o app</strong> e comece a <strong>desfrutar</strong> dos <strong>benefícios</strong></p>
            <div className={styles['app-store-logos']}>
              <Image src="/images/d628eda29dd6dc8d0326a9591dc3119868abc26c.png" alt="Google Play" width={135} height={44} />
              <Image src="/images/fc146e4e63ac5b8ee5760b9e6889eebec393dffc.png" alt="App Store" width={135} height={44} />
            </div>
          </div>
        </div>
        <div className={styles['customers-content']}>
          <h2>Seu pedido com preço justo e entrega com propósito</h2>
          <p>Com a <strong>Brocado</strong>, você apoia restaurantes locais e entregadores que fazem o serviço acontecer de forma justa.</p>
          <ul className={styles.checklist}>
            <li><Image src="/images/689_199.svg" alt="check icon" width={24} height={24} /><span>Sem taxas escondidas</span></li>
            <li><Image src="/images/689_202.svg" alt="check icon" width={24} height={24} /><span>Com comida boa e entrega eficiente</span></li>
            <li><Image src="/images/689_205.svg" alt="check icon" width={24} height={24} /><span>A fome passa, o impacto fica</span></li>
          </ul>
        </div>
      </div>
    </section>
  );
}

