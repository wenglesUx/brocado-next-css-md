
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link"
import Footer from "../components/Footer";
import styles from '../components/styles/Desktop.module.css';

import { useCarousel } from "../hooks/useCarousel";

export default function Desktop() {
   const [menuOpen, setMenuOpen] = useState(false);
  const {
    sliderRef,
    isDragging,
    handleMouseDown,
    handleMouseLeave,
    handleMouseUp,
    handleMouseMove,
  } = useCarousel(200, 2500); // velocidade e intervalo



  return (
    <>
        <header id="section-header" className={styles.header}>

        <div className={`${styles.header__container} ${styles.container}`}>

          {/* Logo */}
          <Link href="/" className={styles.logo}>
            <div className={styles["logo-images"]}>
              <Image
                src="/images/Group 45.png"
                alt="Brocado Logo Text"
                className={styles["logo-text"]}
                width={100}
                height={30}
              />
            </div>
          </Link>

          {/* Campo de busca */}
          <div className={styles.header__search}>
            <Image
              src="/images/icon.png"
              alt="Search"
              className={styles["header__search-icon"]}
              width={24}
              height={24}
            />
            <input
              type="text"
              placeholder="Busque por produto ou loja"
              className={styles["header__search-input"]}
            />
          </div>

          {/* Itens do menu (entrega, carrinho, entrar) */}
          <div className={`${styles.header__menu} ${
              menuOpen ? styles.menuOpen : ""
            }`}
          >
            <div className={styles.header__delivery}>
              <p className={styles["header__delivery-label"]}>Entregar em:</p>
              <p className={styles["header__delivery-address"]}>R. Traíra, 110</p>
            </div>

            < Link href="#" className={styles.header__cart}>
              <Image
                src="/images/shopping-bag.png"
                alt="Shopping Bag"
                width={24}
                height={24}
              />
              <span>Carrinho</span>
            </Link>

            <Link href="#" className={styles["header__login-btn"]}>
              Entrar
            </Link>
          </div>

          {/* Botão Hamburguer */}
          <button
            className={`${styles.hamburger} ${
              menuOpen ? styles.active : ""
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Overlay escuro */}
        <div
          className={`${styles.overlay} ${menuOpen ? styles.show : ""}`}
          onClick={() => setMenuOpen(false)}
        ></div>
      </header>
      <main>
        <section id="restaurants" className={styles['restaurants-section']}>
          <div className={styles.container}>
            <h2 className={styles['restaurants-section__title']}>Os melhores restaurantes</h2>
            <hr className={styles['restaurants-section__divider']} />

              {/* SLIDER COM AUTOPLAY + GRAB */}
          <div
            ref={sliderRef}
            className={styles['categories-slider']}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            style={{ cursor: isDragging ? "grabbing" : "grab" }}
          >
            <Link href="/" className={styles['category-item']}>
              <div className={styles['category-icon']}>
                <Image
                  src="/images/d944f6ccc4e450a0419d2af138e89d4f482ec889.png"
                  alt=""
                  width={29}
                  height={29}
                />
              </div>
              <span>Doces &amp; Bolos</span>
            </Link>
            <Link href="/" className={styles['category-item']}>
              <div className={styles['category-icon']}>
                <Image
                  src="/images/8fe5ed16c6cce61f7b6c4b53aa0c94659719ea2e.png"
                  alt=""
                  width={29}
                  height={29}
                />
              </div>
              <span>Árabe</span>
            </Link>
            <Link href="/" className={styles['category-item']}>
              <div className={styles['category-icon']}>
                <Image
                  src="/images/da5c4ebb7f5018331cd99772aa3f1ffe2204fb3f.png"
                  alt=""
                  width={29}
                  height={29}
                />
              </div>
              <span>Brasileira</span>
            </Link>
            <Link href="/" className={styles['category-item']}>
              <div className={styles['category-icon']}>
                <Image
                  src="/images/ad3af0e7a91576d18aa08bdaadf791c1db09016b.png"
                  alt=""
                  width={29}
                  height={29}
                />
              </div>
              <span>Marmita</span>
            </Link>
            <Link href="/" className={styles['category-item']}>
              <div className={styles['category-icon']}>
                <Image
                  src="/images/6ce8f5456d63ed571fa60c253be46366fbbc9cf6.png"
                  alt=""
                  width={29}
                  height={29}
                />
              </div>
              <span>Padarias</span>
            </Link>
            <Link href="/" className={styles['category-item']}>
              <div className={styles['category-icon']}>
                <Image
                  src="/images/bd6f855eeed20bdc195d27da09b1f22a201ac729.png"
                  alt=""
                  width={29}
                  height={29}
                />
              </div>
              <span>Italiana</span>
            </Link>
            <Link href="/" className={styles['category-item']}>
              <div className={styles['category-icon']}>
                <Image
                  src="/images/3734aa56e9b8651dca86f61c2fe3cefa25558046.png"
                  alt=""
                  width={29}
                  height={29}
                />
              </div>
              <span>Carnes</span>
            </Link>
            <Link href="/" className={styles['category-item']}>
              <div className={styles['category-icon']}>
                <Image
                  src="/images/51718971c1a5fe0bf605b64bfefed5ab23156eb6.png"
                  alt=""
                  width={29}
                  height={29}
                />
              </div>
              <span>Lanches</span>
            </Link>
            <Link href="/" className={styles['category-item']}>
              <div className={styles['category-icon']}>
                <Image
                  src="/images/4922fe8dfc256ceb5ef9353f51a9bdb06e21b151.png"
                  alt=""
                  width={29}
                  height={29}
                />
              </div>
              <span>Pizza</span>
            </Link>
            <Link href="/" className={styles['category-item']}>
              <div className={styles['category-icon']}>
                <Image
                  src="/images/b57478c2e5d42c8cfda844933554a319de864e5b.png"
                  alt=""
                  width={29}
                  height={29}
                />
              </div>
              <span>Japonesa</span>
            </Link>
            <Link href="/" className={styles['category-item']}>
              <div className={styles['category-icon']}>
                <Image
                  src="/images/455e52761450798c214ab75239a52cb0b9d3659f.png"
                  alt=""
                  width={29}
                  height={29}
                />
              </div>
              <span>Saudável</span>
            </Link>
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


    <Footer></Footer>

    </>
  );
}

