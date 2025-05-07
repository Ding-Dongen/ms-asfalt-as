"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Briefcase, Mail, Facebook, Menu, X, ImageIcon, Globe } from "lucide-react"
import { useLanguage } from "../LanguageContext"
import { translations } from "../translations"
import styles from "@/styles/Navigation.module.css"

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { language, setLanguage } = useLanguage()
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    document.body.classList.toggle("menu-open", !isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
    document.body.classList.remove("menu-open")
  }

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMenuOpen &&
        !event.target.closest(`.${styles.menuContainer}`) &&
        !event.target.closest(`.${styles.menuButton}`)
      ) {
        closeMenu()
      }
    }

    // Close menu when pressing escape key
    const handleEscKey = (event) => {
      if (isMenuOpen && event.key === "Escape") {
        closeMenu()
      }
    }

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside)
      document.addEventListener("keydown", handleEscKey)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("keydown", handleEscKey)
      document.body.classList.remove("menu-open")
    }
  }, [isMenuOpen])

  // Close menu on route change
  useEffect(() => {
    closeMenu()
  }, [pathname])

  const t = translations[language]

  // Function to match the original changeLanguage function
  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage)
    closeMenu()
  }

  // Check if a link is active
  const isActive = (path) => {
    if (path === "/" && pathname === "/") return true
    if (path !== "/" && pathname.startsWith(path)) return true
    return false
  }

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo} onClick={closeMenu}>
          <img src="/images/logo-header.jpg" alt="MS Asfalt" className={styles.logoImg} />
        </Link>
        <button
          className={styles.menuButton}
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          <Menu size={24} />
        </button>
        <div className={`${styles.menuContainer} ${isMenuOpen ? styles.menuOpen : ""}`}>
          <button className={styles.closeButton} onClick={closeMenu} aria-label="Close menu">
            <X size={24} />
          </button>
          <ul className={styles.menu}>
            <li>
              <Link
                href="/"
                className={`${styles.link} ${isActive("/") ? styles.active : ""}`}
                onClick={closeMenu}
                aria-current={isActive("/") ? "page" : undefined}
              >
                <Home size={18} />
                <span>{t.home}</span>
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className={`${styles.link} ${isActive("/projects") ? styles.active : ""}`}
                onClick={closeMenu}
                aria-current={isActive("/projects") ? "page" : undefined}
              >
                <ImageIcon size={18} />
                <span>{t.projects}</span>
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className={`${styles.link} ${isActive("/services") ? styles.active : ""}`}
                onClick={closeMenu}
                aria-current={isActive("/services") ? "page" : undefined}
              >
                <Briefcase size={18} />
                <span>{t.services}</span>
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={`${styles.link} ${isActive("/contact") ? styles.active : ""}`}
                onClick={closeMenu}
                aria-current={isActive("/contact") ? "page" : undefined}
              >
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
              onClick={closeMenu}
            >
              <Facebook size={18} />
              <span>Facebook</span>
            </a>
            <button
              onClick={() => changeLanguage(language === "no" ? "en" : "no")}
              className={styles.languageToggle}
              aria-label="Toggle language"
            >
              <Globe size={18} />
              <span>{language === "no" ? "EN" : "NO"}</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
