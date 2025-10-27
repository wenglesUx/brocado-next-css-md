"use client";
import { useState } from "react";
import Image from "next/image";
import styles from './styles/Header.module.css';
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section id="section-header" className={styles['header-section']}>
      <header className={styles['main-header']}>
        <div className={`${styles.container} ${styles['header-container']}`}>
          <Link href="/" className={styles.logo}>
            <div className={styles['logo-images']}>
              <Image
                src="/images/Group 45.png"
                alt="Brocado Logo Text"
                className={styles['logo-text']}
                width={100}
                height={30}
              />
            </div>
          </Link>

          {/* NAV ÚNICO */}
          <nav className={`${styles['main-nav']} ${menuOpen ? styles.open : ''}`}>
            <ul>
              <li><Link href="#section-hero" onClick={() => setMenuOpen(false)}>Início</Link></li>
              <li><Link href="#section-why-us" onClick={() => setMenuOpen(false)}>Sobre nós</Link></li>
              <li><Link href="#section-customers" onClick={() => setMenuOpen(false)}>Clientes</Link></li>
              <li><Link href="#section-drivers" onClick={() => setMenuOpen(false)}>Entregadores</Link></li>
              <li className={styles['mobile-only']}>
                <Link href="/" className={styles['btn-login']} onClick={() => setMenuOpen(false)}>Entrar</Link>
              </li>
            </ul>
          </nav>

          {/* Botão login desktop */}
          <Link href="/" className={`${styles['btn-login']} ${styles['desktop-only']}`}>Entrar</Link>

          {/* BOTÃO HAMBURGUER */}
          <button
            className={`${styles.hamburger} ${menuOpen ? styles.active : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* OVERLAY */}
        <div
          className={`${styles.overlay} ${menuOpen ? styles.show : ''}`}
          onClick={() => setMenuOpen(false)}
        ></div>
      </header>
    </section>
  );
}
