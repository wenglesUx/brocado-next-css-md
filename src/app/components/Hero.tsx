
import Image from 'next/image';
import Link from 'next/link';
import styles from './styles/Hero.module.css';

export default function Hero() {
  return (
    <section id="section-hero" className={styles['hero-section']}>
         <div className="container">
        <div className={styles['hero-grid']}>
          <div className={styles['hero-content']}>
            <h1>O delivery que <span className={styles.highlight}>respeita</span> o seu negócio</h1>
            <p>Menos taxas, mais controle, mais lucro. A Brocado é a plataforma de entregas pensada para quem empreende com sabor.</p>
            <div className={styles['hero-buttons']} >
              <Link href="/" className={`${styles.btn} ${styles['btn-primary']}`}>
                <span>Faça seu pedido</span>
                <Image src="/images/689_380.svg" alt="arrow icon" width={24} height={24} /> {/* Adjust width/height as needed */}
              </Link>
              <Link href="/" className={`${styles.btn} ${styles['btn-secondary']}`}>
                <span>Cadastre sua empresa</span>
                <Image src="/images/689_383.svg" alt="arrow icon" width={24} height={24} /> {/* Adjust width/height as needed */}
              </Link>
            </div>
          </div>
          <div className={styles['hero-image-wrapper']}>
            <Image src="/images/689_385.svg" alt="Chef on a scooter illustration" className={styles['hero-illustration']} width={796} height={500} /> {/* Adjust width/height as needed */}
            
          </div>
        </div>
      </div>
    </section>
  );
}

