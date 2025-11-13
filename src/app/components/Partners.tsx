"use client";
import Image from "next/image";
import Link from "next/link";
import { useCarousel } from "../hooks/useCarousel";
import styles from "./styles/Partners.module.css";

export default function Partners() {
  const {
    sliderRef,
    isDragging,
    handleMouseDown,
    handleMouseLeave,
    handleMouseUp,
    handleMouseMove,
  } = useCarousel(200, 2500); // velocidade e intervalo

// "use client";
// import { useEffect, useRef, useState } from "react";
// import Image from "next/image";
// import styles from './styles/Partners.module.css';
// import Link from "next/link";

// export default function Partners() {
//   const sliderRef = useRef(null);
//   const [isDragging, setIsDragging] = useState(false);
//   const [startX, setStartX] = useState(0);
//   const [scrollLeft, setScrollLeft] = useState(0);

  // // ===== AUTOPLAY =====
  // useEffect(() => {
  //   const slider = sliderRef.current;
  //   if (!slider) return;

  //   const scrollStep = () => {
  //     if (slider.scrollLeft + slider.offsetWidth >= slider.scrollWidth - 10) {
  //       slider.scrollTo({ left: 0, behavior: "smooth" });
  //     } else {
  //       slider.scrollBy({ left: 200, behavior: "smooth" });
  //     }
  //   };

  //   const interval = setInterval(scrollStep, 2500); // muda a cada 2,5s
  //   return () => clearInterval(interval);
  // }, []);

  // // ===== ARRASTAR COM MOUSE =====
  // const handleMouseDown = (e) => {
  //   const slider = sliderRef.current;
  //   if (!slider) return;
  //   setIsDragging(true);
  //   setStartX(e.pageX - slider.offsetLeft);
  //   setScrollLeft(slider.scrollLeft);
  // };

  // const handleMouseLeave = () => setIsDragging(false);
  // const handleMouseUp = () => setIsDragging(false);

  // const handleMouseMove = (e) => {
  //   const slider = sliderRef.current;
  //   if (!isDragging || !slider) return;
  //   e.preventDefault();
  //   const x = e.pageX - slider.offsetLeft;
  //   const walk = (x - startX) * 1.2; // velocidade do arrasto
  //   slider.scrollLeft = scrollLeft - walk;
  // };

  return (
    <section id="section-partners" className={styles['partners-section']}>
      <div className={`container ${styles['partners-container']}`}>
        <h3>Lojas parceiras</h3>
        <div className={styles['categories-wrapper']}>
          <p className={styles['categories-title']}>Os melhores restaurantes</p>

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
        </div>
      </div>
    </section>
  );
}
