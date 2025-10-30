"use client";
 
import Image from "next/image";



export default function DesktopPage() {
  return (
    <>
      <header id="section-header" className="header">
        <div className="header__container container">
          <a href="#" className="header__logo">
            <div className="logo-images">
              <Image src="/images/I2_3814_75313_1559.svg" alt="Brocado Logo Icon" className="logo-icon" width={44} height={44} />
              <Image src="/images/I2_3814_75313_1531.svg" alt="Brocado" className="logo-text-brocado" width={180} height={28} />
              <Image src="/images/I2_3814_75313_1541.svg" alt="" className="logo-dot" width={5} height={5} />
              <Image src="/images/I2_3814_75313_1542.svg" alt="Food" className="logo-text-food" width={30} height={20} />
            </div>
          </a>
          <div className="header__search">
            <Image src="/images/I2_3816_1091_63800_1088_11.svg" alt="Search" className="header__search-icon" width={24} height={24} />
            <input type="text" placeholder="Busque por produto ou loja" className="header__search-input" />
          </div>
          <div className="header__delivery">
            <p className="header__delivery-label">Entregar em:</p>
            <p className="header__delivery-address">R. Traíra, 110</p>
          </div>
          <a href="#" className="header__cart">
            <Image src="/images/2_3820.svg" alt="Shopping Bag" width={24} height={24} />
          </a>
          <a href="#" className="header__login-btn">Entrar</a>
        </div>
      </header>
      <main>
        <section id="restaurants" className="restaurants-section">
          <div className="container">
            <h2 className="restaurants-section__title">Os melhores restaurantes</h2>
            <hr className="restaurants-section__divider" />

            <div className="categories-wrapper">
              <nav className="categories">
                <a href="#" className="category-item category-item--active">
                  <div className="category-item__icon-wrapper">
                    <Image src="/images/d944f6ccc4e450a0419d2af138e89d4f482ec889.png" alt="Doces & Bolos icon" className="category-item__icon" width={34} height={34} />
                  </div>
                  <span className="category-item__name">Doces & Bolos</span>
                </a>
                <a href="#" className="category-item">
                  <div className="category-item__icon-wrapper">
                    <Image src="/images/8fe5ed16c6cce61f7b6c4b53aa0c94659719ea2e.png" alt="Árabe icon" className="category-item__icon" width={34} height={34} />
                  </div>
                  <span className="category-item__name">Árabe</span>
                </a>
                <a href="#" className="category-item">
                  <div className="category-item__icon-wrapper">
                    <Image src="/images/da5c4ebb7f5018331cd99772aa3f1ffe2204fb3f.png" alt="Brasileira icon" className="category-item__icon" width={34} height={34} />
                  </div>
                  <span className="category-item__name">Brasileira</span>
                </a>
                <a href="#" className="category-item">
                  <div className="category-item__icon-wrapper">
                    <Image src="/images/ad3af0e7a91576d18aa08bdaadf791c1db09016b.png" alt="Marmita icon" className="category-item__icon" width={34} height={34} />
                  </div>
                  <span className="category-item__name">Marmita</span>
                </a>
                <a href="#" className="category-item">
                  <div className="category-item__icon-wrapper">
                    <Image src="/images/6ce8f5456d63ed571fa60c253be46366fbbc9cf6.png" alt="Padarias icon" className="category-item__icon" width={34} height={34} />
                  </div>
                  <span className="category-item__name">Padarias</span>
                </a>
                <a href="#" className="category-item">
                  <div className="category-item__icon-wrapper">
                    <Image src="/images/51718971c1a5fe0bf605b64bfefed5ab23156eb6.png" alt="Saudável icon" className="category-item__icon" width={34} height={34} />
                  </div>
                  <span className="category-item__name">Saudável</span>
                </a>
                <a href="#" className="category-item">
                  <div className="category-item__icon-wrapper">
                    <Image src="/images/bd6f855eeed20bdc195d27da09b1f22a201ac729.png" alt="Vegetariana icon" className="category-item__icon" width={34} height={34} />
                  </div>
                  <span className="category-item__name">Vegetariana</span>
                </a>
                <a href="#" className="category-item">
                  <div className="category-item__icon-wrapper">
                    <Image src="/images/455e52761450798c214ab75239a52cb0b9d3659f.png" alt="Pizza icon" className="category-item__icon" width={34} height={34} />
                  </div>
                  <span className="category-item__name">Pizza</span>
                </a>
                <a href="#" className="category-item">
                  <div className="category-item__icon-wrapper">
                    <Image src="/images/4922fe8dfc256ceb5ef9353f51a9bdb06e21b151.png" alt="Japonesa icon" className="category-item__icon" width={34} height={34} />
                  </div>
                  <span className="category-item__name">Japonesa</span>
                </a>
                <a href="#" className="category-item">
                  <div className="category-item__icon-wrapper">
                    <Image src="/images/3734aa56e9b8651dca86f61c2fe3cefa25558046.png" alt="Salgados icon" className="category-item__icon" width={34} height={34} />
                  </div>
                  <span className="category-item__name">Salgados</span>
                </a>
              </nav>
            </div>

            <div className="filters">
              <button className="filter-badge">Entrega grátis</button>
              <button className="filter-badge">Valor mínimo</button>
              <button className="filter-badge">Entrega parceira</button>
              <button className="filter-badge">Promoções</button>
            </div>

            <div className="restaurant-grid">
              <article className="restaurant-card">
                <div className="restaurant-card__image"></div>
                <div className="restaurant-card__info">
                  <h3 className="restaurant-card__name">Nome do restaurante</h3>
                  <div className="restaurant-card__meta">
                    <div className="rating">
                      <div className="star-icon">
                        <div className="star-icon__background"></div>
                        <div className="star-icon__foreground"></div>
                      </div>
                      <span>4.2</span>
                    </div>
                    <Image src="/images/I2_3875_2_3863.svg" alt="" className="separator-dot" width={3} height={3} />
                    <span>Categoria</span>
                    <Image src="/images/I2_3875_2_3866.svg" alt="" className="separator-dot" width={3} height={3} />
                    <span>0 km</span>
                  </div>
                  <div className="restaurant-card__delivery">
                    <span>31-41 min</span>
                    <Image src="/images/I2_3875_2_3872.svg" alt="" className="separator-dot" width={3} height={3} />
                    <span>R$ 5,99</span>
                  </div>
                </div>
              </article>
              <article className="restaurant-card">
                <div className="restaurant-card__image"></div>
                <div className="restaurant-card__info">
                  <h3 className="restaurant-card__name">Nome do restaurante</h3>
                  <div className="restaurant-card__meta">
                    <div className="rating">
                      <div className="star-icon">
                        <div className="star-icon__background"></div>
                        <div className="star-icon__foreground"></div>
                      </div>
                      <span>4.2</span>
                    </div>
                    <Image src="/images/I2_3876_2_3863.svg" alt="" className="separator-dot" width={3} height={3} />
                    <span>Categoria</span>
                    <Image src="/images/I2_3876_2_3866.svg" alt="" className="separator-dot" width={3} height={3} />
                    <span>0 km</span>
                  </div>
                  <div className="restaurant-card__delivery">
                    <span>31-41 min</span>
                    <Image src="/images/I2_3876_2_3872.svg" alt="" className="separator-dot" width={3} height={3} />
                    <span>R$ 5,99</span>
                  </div>
                </div>
              </article>
              <article className="restaurant-card">
                <div className="restaurant-card__image"></div>
                <div className="restaurant-card__info">
                  <h3 className="restaurant-card__name">Nome do restaurante</h3>
                  <div className="restaurant-card__meta">
                    <div className="rating">
                      <div className="star-icon">
                        <div className="star-icon__background"></div>
                        <div className="star-icon__foreground"></div>
                      </div>
                      <span>4.2</span>
                    </div>
                    <Image src="/images/I2_3877_2_3863.svg" alt="" className="separator-dot" width={3} height={3} />
                    <span>Categoria</span>
                    <Image src="/images/I2_3877_2_3866.svg" alt="" className="separator-dot" width={3} height={3} />
                    <span>0 km</span>
                  </div>
                  <div className="restaurant-card__delivery">
                    <span>31-41 min</span>
                    <Image src="/images/I2_3877_2_3872.svg" alt="" className="separator-dot" width={3} height={3} />
                    <span>R$ 5,99</span>
                  </div>
                </div>
              </article>
              <article className="restaurant-card">
                <div className="restaurant-card__image"></div>
                <div className="restaurant-card__info">
                  <h3 className="restaurant-card__name">Nome do restaurante</h3>
                  <div className="restaurant-card__meta">
                    <div className="rating">
                      <div className="star-icon">
                        <div className="star-icon__background"></div>
                        <div className="star-icon__foreground"></div>
                      </div>
                      <span>4.2</span>
                    </div>
                    <Image src="/images/I2_3878_2_3863.svg" alt="" className="separator-dot" width={3} height={3} />
                    <span>Categoria</span>
                    <Image src="/images/I2_3878_2_3866.svg" alt="" className="separator-dot" width={3} height={3} />
                    <span>0 km</span>
                  </div>
                  <div className="restaurant-card__delivery">
                    <span>31-41 min</span>
                    <Image src="/images/I2_3878_2_3872.svg" alt="" className="separator-dot" width={3} height={3} />
                    <span>R$ 5,99</span>
                  </div>
                </div>
              </article>
              <article className="restaurant-card">
                <div className="restaurant-card__image"></div>
                <div className="restaurant-card__info">
                  <h3 className="restaurant-card__name">Nome do restaurante</h3>
                  <div className="restaurant-card__meta">
                    <div className="rating">
                      <div className="star-icon">
                        <div className="star-icon__background"></div>
                        <div className="star-icon__foreground"></div>
                      </div>
                      <span>4.2</span>
                    </div>
                    <Image src="/images/I2_3879_2_3863.svg" alt="" className="separator-dot" width={3} height={3} />
                    <span>Categoria</span>
                    <Image src="/images/I2_3879_2_3866.svg" alt="" className="separator-dot" width={3} height={3} />
                    <span>0 km</span>
                  </div>
                  <div className="restaurant-card__delivery">
                    <span>31-41 min</span>
                    <Image src="/images/I2_3879_2_3872.svg" alt="" className="separator-dot" width={3} height={3} />
                    <span>R$ 5,99</span>
                  </div>
                </div>
              </article>
              <article className="restaurant-card">
                <div className="restaurant-card__image"></div>
                <div className="restaurant-card__info">
                  <h3 className="restaurant-card__name">Nome do restaurante</h3>
                  <div className="restaurant-card__meta">
                    <div className="rating">
                      <div className="star-icon">
                        <div className="star-icon__background"></div>
                        <div className="star-icon__foreground"></div>
                      </div>
                      <span>4.2</span>
                    </div>
                    <Image src="/images/I2_3880_2_3863.svg" alt="" className="separator-dot" width={3} height={3} />
                    <span>Categoria</span>
                    <Image src="/images/I2_3880_2_3866.svg" alt="" className="separator-dot" width={3} height={3} />
                    <span>0 km</span>
                  </div>
                  <div className="restaurant-card__delivery">
                    <span>31-41 min</span>
                    <Image src="/images/I2_3880_2_3872.svg" alt="" className="separator-dot" width={3} height={3} />
                    <span>R$ 5,99</span>
                  </div>
                </div>
              </article>
              <article className="restaurant-card">
                <div className="restaurant-card__image"></div>
                <div className="restaurant-card__info">
                  <h3 className="restaurant-card__name">Nome do restaurante</h3>
                  <div className="restaurant-card__meta">
                    <div className="rating">
                      <div className="star-icon">
                        <div className="star-icon__background"></div>
                        <div className="star-icon__foreground"></div>
                      </div>
                      <span>4.2</span>
                    </div>
                    <Image src="/images/I2_3881_2_3863.svg" alt="" className="separator-dot" width={3} height={3} />
                    <span>Categoria</span>
                    <Image src="/images/I2_3881_2_3866.svg" alt="" className="separator-dot" width={3} height={3} />
                    <span>0 km</span>
                  </div>
                  <div className="restaurant-card__delivery">
                    <span>31-41 min</span>
                    <Image src="/images/I2_3881_2_3872.svg" alt="" className="separator-dot" width={3} height={3} />
                    <span>R$ 5,99</span>
                  </div>
                </div>
              </article>
              <article className="restaurant-card">
                <div className="restaurant-card__image"></div>
                <div className="restaurant-card__info">
                  <h3 className="restaurant-card__name">Nome do restaurante</h3>
                  <div className="restaurant-card__meta">
                    <div className="rating">
                      <div className="star-icon">
                        <div className="star-icon__background"></div>
                        <div className="star-icon__foreground"></div>
                      </div>
                      <span>4.2</span>
                    </div>
                    <Image src="/images/I2_3882_2_3863.svg" alt="" className="separator-dot" width={3} height={3} />
                    <span>Categoria</span>
                    <Image src="/images/I2_3882_2_3866.svg" alt="" className="separator-dot" width={3} height={3} />
                    <span>0 km</span>
                  </div>
                  <div className="restaurant-card__delivery">
                    <span>31-41 min</span>
                    <Image src="/images/I2_3882_2_3872.svg" alt="" className="separator-dot" width={3} height={3} />
                    <span>R$ 5,99</span>
                  </div>
                </div>
              </article>
              <article className="restaurant-card">
                <div className="restaurant-card__image"></div>
                <div className="restaurant-card__info">
                  <h3 className="restaurant-card__name">Nome do restaurante</h3>
                  <div className="restaurant-card__meta">
                    <div className="rating">
                      <div className="star-icon">
                        <div className="star-icon__background"></div>
                        <div className="star-icon__foreground"></div>
                      </div>
                      <span>4.2</span>
                    </div>
                    <Image src="/images/I2_3883_2_3863.svg" alt="" className="separator-dot" width={3} height={3} />
                    <span>Categoria</span>
                    <Image src="/images/I2_3883_2_3866.svg" alt="" className="separator-dot" width={3} height={3} />
                    <span>0 km</span>
                  </div>
                  <div className="restaurant-card__delivery">
                    <span>31-41 min</span>
                    <Image src="/images/I2_3883_2_3872.svg" alt="" className="separator-dot" width={3} height={3} />
                    <span>R$ 5,99</span>
                  </div>
                </div>
              </article>
              <article className="restaurant-card">
                <div className="restaurant-card__image"></div>
                <div className="restaurant-card__info">
                  <h3 className="restaurant-card__name">Nome do restaurante</h3>
                  <div className="restaurant-card__meta">
                    <div className="rating">
                      <div className="star-icon">
                        <div className="star-icon__background"></div>
                        <div className="star-icon__foreground"></div>
                      </div>
                      <span>4.2</span>
                    </div>
                    <Image src="/images/I2_3884_2_3863.svg" alt="" className="separator-dot" width={3} height={3} />
                    <span>Categoria</span>
                    <Image src="/images/I2_3884_2_3866.svg" alt="" className="separator-dot" width={3} height={3} />
                    <span>0 km</span>
                  </div>
                  <div className="restaurant-card__delivery">
                    <span>31-41 min</span>
                    <Image src="/images/I2_3884_2_3872.svg" alt="" className="separator-dot" width={3} height={3} />
                    <span>R$ 5,99</span>
                  </div>
                </div>
              </article>
              <article className="restaurant-card">
                <div className="restaurant-card__image"></div>
                <div className="restaurant-card__info">
                  <h3 className="restaurant-card__name">Nome do restaurante</h3>
                  <div className="restaurant-card__meta">
                    <div className="rating">
                      <div className="star-icon">
                        <div className="star-icon__background"></div>
                        <div className="star-icon__foreground"></div>
                      </div>
                      <span>4.2</span>
                    </div>
                    <Image src="/images/I2_3885_2_3863.svg" alt="" className="separator-dot" width={3} height={3} />
                    <span>Categoria</span>
                    <Image src="/images/I2_3885_2_3866.svg" alt="" className="separator-dot" width={3} height={3} />
                    <span>0 km</span>
                  </div>
                  <div className="restaurant-card__delivery">
                    <span>31-41 min</span>
                    <Image src="/images/I2_3885_2_3872.svg" alt="" className="separator-dot" width={3} height={3} />
                    <span>R$ 5,99</span>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>
      </main>
      <footer id="section-footer" className="footer">
        <div className="footer__container container">
          <p className="footer__copyright">Brocado Food - Todos os direitos reservados</p>
          <p className="footer__credits">
            Feito com 💚 por <a href="https://www.behance.net/brotardsgn" target="_blank" rel="noopener noreferrer">BrotarDSGN</a>
          </p>
        </div>
      </footer>
    </>
  );
}
