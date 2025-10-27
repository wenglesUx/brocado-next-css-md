
import Image from 'next/image';
import styles from './styles/Drivers.module.css';

export default function Drivers() {
  return (
    <section id="section-drivers" className={styles['drivers-section']}>
      <div className={`${styles.container} ${styles['drivers-container']}`}>
        <div className={styles['drivers-intro']}>
          <h3>Aqui você tem voz, <span className={styles.highlight}>apoio</span> e <span className={styles.highlight}>oportunidade</span></h3>
          <p>Nada de exploração. Com a <strong>Brocado</strong>, o entregador tem estrutura, pontos de apoio nas cidades, recomendações de melhores rotas e prioridade real. Você trabalha com <strong>liberdade</strong> e ganha com <strong>dignidade</strong>. E ainda pode<strong> indicar restaurantes</strong> e<strong> crescer junto </strong>com a gente.</p>
        </div>
        <div className={styles['drivers-image-wrapper']}>
          <Image src="/images/4fa69c5efe8be3af36da38edc4644c6bc7529ba5.png" alt="Delivery driver holding a paper bag" width={500} height={300} /> {/* Adjust width/height as needed */}
        </div>
        <div className={styles['drivers-benefits-grid']}>
          <div className={styles['benefit-item']}>
            <div className={styles['benefit-title']}>
              <Image src="/images/689_263.svg" alt="icon" width={26} height={26} />
              <h4>Trabalhe com liberdade</h4>
            </div>
            <p>Você escolhe quando e onde quer rodar. Sem pressões, com autonomia real.</p>
          </div>
          <div className={styles.divider}></div>
          <div className={styles['benefit-item']}>
            <div className={styles['benefit-title']}>
              <Image src="/images/689_269.svg" alt="icon" width={26} height={26} />
              <h4>Pontos de apoio nas cidades</h4>
            </div>
            <p>Locais estratégicos pra descansar, se reabastecer e seguir com mais segurança.</p>
          </div>
          <div className={styles.divider}></div>
          <div className={styles['benefit-item']}>
            <div className={styles['benefit-title']}>
              <Image src="/images/689_275.svg" alt="icon" width={26} height={26} />
              <h4>Indique e ganhe com a Brocado</h4>
            </div>
            <p>Convide restaurantes e ganhe por fortalecer a rede. Aqui, a entrega é coletiva.</p>
          </div>
          <div className={styles.divider}></div>
          <div className={styles['benefit-item']}>
            <div className={styles['benefit-title']}>
              <Image src="/images/689_281.svg" alt="icon" width={26} height={26} />
              <h4>App fácil de usar, feito pra você</h4>
            </div>
            <p>Tudo o que você precisa na palma da mão: pedidos, rotas e suporte.</p>
          </div>
          <div className={styles.divider}></div>
          <div className={styles['benefit-item']}>
            <div className={styles['benefit-title']}>
              <Image src="/images/689_287.svg" alt="icon" width={26} height={26} />
              <h4>Receba de forma transparente</h4>
            </div>
            <p>Sem taxas escondidas ou repasses abusivos. Você sabe quanto vai ganhar.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

