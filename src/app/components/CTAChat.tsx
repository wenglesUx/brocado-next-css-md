
import Image from 'next/image';
import styles from './styles/CTAChat.module.css';

export default function CTAChat() {
  return (
    <section id="section-cta-chat" className={styles['cta-chat-section']}>
      <div className={`container ${styles['cta-chat-container']}`}>
        <div className={`${styles['chat-bubbles-wrapper']} my-5`}>
          <div className={`${styles['chat-bubble']} ${styles['bubble-1']}`}>
            <p>Chega de explorar quem entrega</p>
          </div>
          <div className={`${styles['chat-bubble']} ${styles['bubble-2']}`}>
            <p>Chega de dificultar quem vende</p>
          </div>
          <div className={`${styles['chat-bubble']} ${styles['bubble-3']}`}>
            <p>Comece hoje um novo ciclo com a Brocado</p>
          </div>
        </div>
        <div className={`${styles["cta-image-wrapper"]} overflow-hidden h-full relative w-full py-5`}>
          <Image src="/images/689_138.svg" alt="Waving chef illustration" className={styles["absolute"]} width={500} height={500} /> {/* Adjust width/height as needed */}
        </div>
      </div>
    </section>
  );
}

