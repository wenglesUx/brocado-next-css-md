"use client";

import Image from "next/image";
import styles from '../components/styles/Desktop.module.css';




export default function DesktopPage() {
  return (
    <>
      <header id="section-header" className={styles.header}>
        <div className={`${styles.header__container} ${styles.container}`}>
          <a href="#" className={styles.header__logo}>
            <div className={styles['logo-images']}>
              <Image src="/images/I2_3814_75313_1559.svg" alt="Brocado Logo Icon" className={styles['logo-icon']} width={44} height={44} />
              <Image src="/images/I2_3814_75313_1531.svg" alt="Brocado" className={styles['logo-text-brocado']} width={180} height={28} />
              <Image src="/images/I2_3814_75313_1541.svg" alt="" className={styles['logo-dot']} width={5} height={5} />
              <Image src="/images/I2_3814_75313_1542.svg" alt="Food" className={styles['logo-text-food']} width={30} height={20} />
            </div>
          </a>
          <div className={styles.header__search}>
            <Image src="/images/I2_3816_1091_63800_1088_11.svg" alt="Search" className={styles['header__search-icon']} width={24} height={24} />
            <input type="text" placeholder="Busque por produto ou loja" className={styles['header__search-input']} />
          </div>
          <div className={styles.header__delivery}>
            <p className={styles['header__delivery-label']}>Entregar em:</p>
            <p className={styles['header__delivery-address']}>R. Traíra, 110</p>
          </div>
          <a href="#" className={styles.header__cart}>
            <Image src="/images/2_3820.svg" alt="Shopping Bag" width={24} height={24} />
          </a>
          <a href="#" className={styles['header__login-btn']}>Entrar</a>
        </div>
      </header>
      <main>
        <section id="restaurants" className={styles['restaurants-section']}>
          <div className={styles.container}>
            <h2 className={styles['restaurants-section__title']}>Os melhores restaurantes</h2>
            <hr className={styles['restaurants-section__divider']} />

            <div className={styles['categories-wrapper']}>
              <nav className={styles.categories}>
                <a href="#" className={`${styles['category-item']} ${styles['category-item--active']}`}>
                  <div className={styles['category-item__icon-wrapper']}>
                    <Image src="/images/d944f6ccc4e450a0419d2af138e89d4f482ec889.png" alt="Doces & Bolos icon" className={styles['category-item__icon']} width={34} height={34} />
                  </div>
                  <span className={styles['category-item__name']}>Doces & Bolos</span>
                </a>
                <a href="#" className={styles['category-item']}>
                  <div className={styles['category-item__icon-wrapper']}>
                    <Image src="/images/8fe5ed16c6cce61f7b6c4b53aa0c94659719ea2e.png" alt="Árabe icon" className={styles['category-item__icon']} width={34} height={34} />
                  </div>
                  <span className={styles['category-item__name']}>Árabe</span>
                </a>
                <a href="#" className={styles['category-item']}>
                  <div className={styles['category-item__icon-wrapper']}>
                    <Image src="/images/da5c4ebb7f5018331cd99772aa3f1ffe2204fb3f.png" alt="Brasileira icon" className={styles['category-item__icon']} width={34} height={34} />
                  </div>
                  <span className={styles['category-item__name']}>Brasileira</span>
                </a>
                <a href="#" className={styles['category-item']}>
                  <div className={styles['category-item__icon-wrapper']}>
                    <Image src="/images/ad3af0e7a91576d18aa08bdaadf791c1db09016b.png" alt="Marmita icon" className={styles['category-item__icon']} width={34} height={34} />
                  </div>
                  <span className={styles['category-item__name']}>Marmita</span>
                </a>
                <a href="#" className={styles['category-item']}>
                  <div className={styles['category-item__icon-wrapper']}>
                    <Image src="/images/6ce8f5456d63ed571fa60c253be46366fbbc9cf6.png" alt="Padarias icon" className={styles['category-item__icon']} width={34} height={34} />
                  </div>
                  <span className={styles['category-item__name']}>Padarias</span>
                </a>
                <a href="#" className={styles['category-item']}>
                  <div className={styles['category-item__icon-wrapper']}>
                    <Image src="/images/51718971c1a5fe0bf605b64bfefed5ab23156eb6.png" alt="Saudável icon" className={styles['category-item__icon']} width={34} height={34} />
                  </div>
                  <span className={styles['category-item__name']}>Saudável</span>
                </a>
                <a href="#" className={styles['category-item']}>
                  <div className={styles['category-item__icon-wrapper']}>
                    <Image src="/images/bd6f855eeed20bdc195d27da09b1f22a201ac729.png" alt="Vegetariana icon" className={styles['category-item__icon']} width={34} height={34} />
                  </div>
                  <span className={styles['category-item__name']}>Vegetariana</span>
                </a>
                <a href="#" className={styles['category-item']}>
                  <div className={styles['category-item__icon-wrapper']}>
                    <Image src="/images/455e52761450798c214ab75239a52cb0b9d3659f.png" alt="Pizza icon" className={styles['category-item__icon']} width={34} height={34} />
                  </div>
                  <span className={styles['category-item__name']}>Pizza</span>
                </a>
                <a href="#" className={styles['category-item']}>
                  <div className={styles['category-item__icon-wrapper']}>
                    <Image src="/images/4922fe8dfc256ceb5ef9353f51a9bdb06e21b151.png" alt="Japonesa icon" className={styles['category-item__icon']} width={34} height={34} />
                  </div>
                  <span className={styles['category-item__name']}>Japonesa</span>
                </a>
                <a href="#" className={styles['category-item']}>
                  <div className={styles['category-item__icon-wrapper']}>
                    <Image src="/images/3734aa56e9b8651dca86f61c2fe3cefa25558046.png" alt="Salgados icon" className={styles['category-item__icon']} width={34} height={34} />
                  </div>
                  <span className={styles['category-item__name']}>Salgados</span>
                </a>
              </nav>
            </div>

            <div className={styles.filters}>
              <button className={styles['filter-badge']}>Entrega grátis</button>
              <button className={styles['filter-badge']}>Valor mínimo</button>
              <button className={styles['filter-badge']}>Entrega parceira</button>
              <button className={styles['filter-badge']}>Promoções</button>
            </div>

            <div className={styles['restaurant-grid']}>
              <article className={styles['restaurant-card']}>
                <div className={styles['restaurant-card__image']}></div>
                <div className={styles['restaurant-card__info']}>
                  <h3 className={styles['restaurant-card__name']}>Nome do restaurante</h3>
                  <div className={styles['restaurant-card__meta']}>
                    <div className={styles.rating}>
                      <div className={styles['star-icon']}>
                        <div className={styles['star-icon__background']}></div>
                        <div className={styles['star-icon__foreground']}></div>
                      </div>
                      <span>4.2</span>
                    </div>
                    <Image src="/images/I2_3875_2_3863.svg" alt="" className={styles['separator-dot']} width={3} height={3} />
                    <span>Categoria</span>
                    <Image src="/images/I2_3875_2_3866.svg" alt="" className={styles['separator-dot']} width={3} height={3} />
                    <span>0 km</span>
                  </div>
                  <div className={styles['restaurant-card__delivery']}>
                    <span>31-41 min</span>
                    <Image src="/images/I2_3875_2_3872.svg" alt="" className={styles['separator-dot']} width={3} height={3} />
                    <span>R$ 5,99</span>
                  </div>
                </div>
              </article>
              <article className={styles['restaurant-card']}>
                <div className={styles['restaurant-card__image']}></div>
                <div className={styles['restaurant-card__info']}>
                  <h3 className={styles['restaurant-card__name']}>Nome do restaurante</h3>
                  <div className={styles['restaurant-card__meta']}>
                    <div className={styles.rating}>
                      <div className={styles['star-icon']}>
                        <div className={styles['star-icon__background']}></div>
                        <div className={styles['star-icon__foreground']}></div>
                      </div>
                      <span>4.2</span>
                    </div>
                    <Image src="/images/I2_3876_2_3863.svg" alt="" className={styles['separator-dot']} width={3} height={3} />
                    <span>Categoria</span>
                    <Image src="/images/I2_3876_2_3866.svg" alt="" className={styles['separator-dot']} width={3} height={3} />
                    <span>0 km</span>
                  </div>
                  <div className={styles['restaurant-card__delivery']}>
                    <span>31-41 min</span>
                    <Image src="/images/I2_3876_2_3872.svg" alt="" className={styles['separator-dot']} width={3} height={3} />
                    <span>R$ 5,99</span>
                  </div>
                </div>
              </article>
              <article className={styles['restaurant-card']}>
                <div className={styles['restaurant-card__image']}></div>
                <div className={styles['restaurant-card__info']}>
                  <h3 className={styles['restaurant-card__name']}>Nome do restaurante</h3>
                  <div className={styles['restaurant-card__meta']}>
                    <div className={styles.rating}>
                      <div className={styles['star-icon']}>
                        <div className={styles['star-icon__background']}></div>
                        <div className={styles['star-icon__foreground']}></div>
                      </div>
                      <span>4.2</span>
                    </div>
                    <Image src="/images/I2_3877_2_3863.svg" alt="" className={styles['separator-dot']} width={3} height={3} />
                    <span>Categoria</span>
                    <Image src="/images/I2_3877_2_3866.svg" alt="" className={styles['separator-dot']} width={3} height={3} />
                    <span>0 km</span>
                  </div>
                  <div className={styles['restaurant-card__delivery']}>
                    <span>31-41 min</span>
                    <Image src="/images/I2_3877_2_3872.svg" alt="" className={styles['separator-dot']} width={3} height={3} />
                    <span>R$ 5,99</span>
                  </div>
                </div>
              </article>
              <article className={styles['restaurant-card']}>
                <div className={styles['restaurant-card__image']}></div>
                <div className={styles['restaurant-card__info']}>
                  <h3 className={styles['restaurant-card__name']}>Nome do restaurante</h3>
                  <div className={styles['restaurant-card__meta']}>
                    <div className={styles.rating}>
                      <div className={styles['star-icon']}>
                        <div className={styles['star-icon__background']}></div>
                        <div className={styles['star-icon__foreground']}></div>
                      </div>
                      <span>4.2</span>
                    </div>
                    <Image src="/images/I2_3878_2_3863.svg" alt="" className={styles['separator-dot']} width={3} height={3} />
                    <span>Categoria</span>
                    <Image src="/images/I2_3878_2_3866.svg" alt="" className={styles['separator-dot']} width={3} height={3} />
                    <span>0 km</span>
                  </div>
                  <div className={styles['restaurant-card__delivery']}>
                    <span>31-41 min</span>
                    <Image src="/images/I2_3878_2_3872.svg" alt="" className={styles['separator-dot']} width={3} height={3} />
                    <span>R$ 5,99</span>
                  </div>
                </div>
              </article>
              <article className={styles['restaurant-card']}>
                <div className={styles['restaurant-card__image']}></div>
                <div className={styles['restaurant-card__info']}>
                  <h3 className={styles['restaurant-card__name']}>Nome do restaurante</h3>
                  <div className={styles['restaurant-card__meta']}>
                    <div className={styles.rating}>
                      <div className={styles['star-icon']}>
                        <div className={styles['star-icon__background']}></div>
                        <div className={styles['star-icon__foreground']}></div>
                      </div>
                      <span>4.2</span>
                    </div>
                    <Image src="/images/I2_3879_2_3863.svg" alt="" className={styles['separator-dot']} width={3} height={3} />
                    <span>Categoria</span>
                    <Image src="/images/I2_3879_2_3866.svg" alt="" className={styles['separator-dot']} width={3} height={3} />
                    <span>0 km</span>
                  </div>
                  <div className={styles['restaurant-card__delivery']}>
                    <span>31-41 min</span>
                    <Image src="/images/I2_3879_2_3872.svg" alt="" className={styles['separator-dot']} width={3} height={3} />
                    <span>R$ 5,99</span>
                  </div>
                </div>
              </article>
              <article className={styles['restaurant-card']}>
                <div className={styles['restaurant-card__image']}></div>
                <div className={styles['restaurant-card__info']}>
                  <h3 className={styles['restaurant-card__name']}>Nome do restaurante</h3>
                  <div className={styles['restaurant-card__meta']}>
                    <div className={styles.rating}>
                      <div className={styles['star-icon']}>
                        <div className={styles['star-icon__background']}></div>
                        <div className={styles['star-icon__foreground']}></div>
                      </div>
                      <span>4.2</span>
                    </div>
                    <Image src="/images/I2_3880_2_3863.svg" alt="" className={styles['separator-dot']} width={3} height={3} />
                    <span>Categoria</span>
                    <Image src="/images/I2_3880_2_3866.svg" alt="" className={styles['separator-dot']} width={3} height={3} />
                    <span>0 km</span>
                  </div>
                  <div className={styles['restaurant-card__delivery']}>
                    <span>31-41 min</span>
                    <Image src="/images/I2_3880_2_3872.svg" alt="" className={styles['separator-dot']} width={3} height={3} />
                    <span>R$ 5,99</span>
                  </div>
                </div>
              </article>
              <article className={styles['restaurant-card']}>
                <div className={styles['restaurant-card__image']}></div>
                <div className={styles['restaurant-card__info']}>
                  <h3 className={styles['restaurant-card__name']}>Nome do restaurante</h3>
                  <div className={styles['restaurant-card__meta']}>
                    <div className={styles.rating}>
                      <div className={styles['star-icon']}>
                        <div className={styles['star-icon__background']}></div>
                        <div className={styles['star-icon__foreground']}></div>
                      </div>
                      <span>4.2</span>
                    </div>
                    <Image src="/images/I2_3881_2_3863.svg" alt="" className={styles['separator-dot']} width={3} height={3} />
                    <span>Categoria</span>
                    <Image src="/images/I2_3881_2_3866.svg" alt="" className={styles['separator-dot']} width={3} height={3} />
                    <span>0 km</span>
                  </div>
                  <div className={styles['restaurant-card__delivery']}>
                    <span>31-41 min</span>
                    <Image src="/images/I2_3881_2_3872.svg" alt="" className={styles['separator-dot']} width={3} height={3} />
                    <span>R$ 5,99</span>
                  </div>
                </div>
              </article>
              <article className={styles['restaurant-card']}>
                <div className={styles['restaurant-card__image']}></div>
                <div className={styles['restaurant-card__info']}>
                  <h3 className={styles['restaurant-card__name']}>Nome do restaurante</h3>
                  <div className={styles['restaurant-card__meta']}>
                    <div className={styles.rating}>
                      <div className={styles['star-icon']}>
                        <div className={styles['star-icon__background']}></div>
                        <div className={styles['star-icon__foreground']}></div>
                      </div>
                      <span>4.2</span>
                    </div>
                    <Image src="/images/I2_3882_2_3863.svg" alt="" className={styles['separator-dot']} width={3} height={3} />
                    <span>Categoria</span>
                    <Image src="/images/I2_3882_2_3866.svg" alt="" className={styles['separator-dot']} width={3} height={3} />
                    <span>0 km</span>
                  </div>
                  <div className={styles['restaurant-card__delivery']}>
                    <span>31-41 min</span>
                    <Image src="/images/I2_3882_2_3872.svg" alt="" className={styles['separator-dot']} width={3} height={3} />
                    <span>R$ 5,99</span>
                  </div>
                </div>
              </article>
              <article className={styles['restaurant-card']}>
                <div className={styles['restaurant-card__image']}></div>
                <div className={styles['restaurant-card__info']}>
                  <h3 className={styles['restaurant-card__name']}>Nome do restaurante</h3>
                  <div className={styles['restaurant-card__meta']}>
                    <div className={styles.rating}>
                      <div className={styles['star-icon']}>
                        <div className={styles['star-icon__background']}></div>
                        <div className={styles['star-icon__foreground']}></div>
                      </div>
                      <span>4.2</span>
                    </div>
                    <Image src="/images/I2_3883_2_3863.svg" alt="" className={styles['separator-dot']} width={3} height={3} />
                    <span>Categoria</span>
                    <Image src="/images/I2_3883_2_3866.svg" alt="" className={styles['separator-dot']} width={3} height={3} />
                    <span>0 km</span>
                  </div>
                  <div className={styles['restaurant-card__delivery']}>
                    <span>31-41 min</span>
                    <Image src="/images/I2_3883_2_3872.svg" alt="" className={styles['separator-dot']} width={3} height={3} />
                    <span>R$ 5,99</span>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>
      </main>
      <footer className={styles.footer}>
        <div className={`${styles.footer__container} ${styles.container}`}>
          <p className={styles.footer__copyright}>© 2024 Brocado Food. Todos os direitos reservados.</p>
          <p className={styles.footer__credits}>
            Design por <a href="https://www.figma.com/@brocadofood" target="_blank" rel="noopener noreferrer">Brocado Food</a>
          </p>
        </div>
      </footer>
    </>
  );
}
