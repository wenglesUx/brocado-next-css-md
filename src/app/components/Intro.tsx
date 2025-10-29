
import Image from 'next/image';
import styles from './styles/Intro.module.css';

export default function Intro() {
  return (
    <section id="section-intro" className={styles['intro-banner-section']}>
      <div className={styles['intro-bg-graphics']}>
        <Image src="/images/689_109.svg" alt="background pattern" className={styles['bg-pattern-1']} width={1000} height={1000} /> {/* Adjust width/height as needed */}
        
      </div>
      <div className={`container ${styles['intro-banner-container']}`}>
        <h2>Muito além de um <span className={styles.highlight}>app de delivery</span></h2>
        <p>A <strong>Brocado</strong> é uma nova forma de fazer delivery: justa, humana e eficiente. Criada por quem entende a dor dos empreendedores e o valor de quem entrega, nossa plataforma conecta restaurantes, entregadores e clientes em um ciclo de crescimento e respeito.</p>
      </div>
    </section>
  );
}

