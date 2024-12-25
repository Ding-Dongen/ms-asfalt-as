'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Home, Briefcase, Mail, Facebook, Menu, X, Image, Globe } from 'lucide-react'
import styles from './Navigation.module.css'
import { useLanguage } from '../LanguageContext'
import { translations } from '../translations'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { language, changeLanguage } = useLanguage()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    document.body.classList.toggle('menu-open', !isMenuOpen)
  }

  useEffect(() => {
    return () => {
      document.body.classList.remove('menu-open')
    }
  }, [])

  const t = translations[language]

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
        <img src="./images/logo-header.jpg" alt="RoadMasters Asphalt" className={styles.logoImg} />
        </Link>
        <button className={styles.menuButton} onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <div className={`${styles.menuContainer} ${isMenuOpen ? styles.menuOpen : ''}`}>
          <button className={styles.closeButton} onClick={toggleMenu} aria-label="Close menu">
            <X size={24} />
          </button>
          <ul className={styles.menu}>
            <li>
              <Link href="/" className={styles.link} onClick={toggleMenu}>
                <Home size={18} />
                <span>{t.home}</span>
              </Link>
            </li>
            <li>
              <Link href="/projects" className={styles.link} onClick={toggleMenu}>
                <Image size={18} />
                <span>{t.projects}</span>
              </Link>
            </li>
            <li>
              <Link href="/services" className={styles.link} onClick={toggleMenu}>
                <Briefcase size={18} />
                <span>{t.services}</span>
              </Link>
            </li>
            <li>
              <Link href="/contact" className={styles.link} onClick={toggleMenu}>
                <Mail size={18} />
                <span>{t.contact}</span>
              </Link>
            </li>
          </ul>
          <div className={styles.bottomLinks}>
            <a
              href="https://www.facebook.com/MSasfalt/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="Visit our Facebook page"
              onClick={toggleMenu}
            >
              <Facebook size={18} />
              <span>Facebook</span>
            </a>
            <button onClick={() => changeLanguage(language === 'no' ? 'en' : 'no')} className={styles.languageToggle} aria-label="Toggle language">
              <Globe size={18} />
              <span>{language === 'no' ? 'EN' : 'NO'}</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

