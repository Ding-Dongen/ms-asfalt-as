"use client"
import { useEffect } from "react"
import { useLanguage } from "./LanguageContext"
import { translations } from "./translations"
import HeroSection from "./sections/HeroSection"
import FeaturesSection from "./sections/FeatureSection"
import AboutSection from "./sections/AboutSection"
import CtaSection from "./sections/CtaSection"
import styles from "./page.module.css"

export default function Home() {
  const { language } = useLanguage()
  const t = translations[language]

  useEffect(() => {
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible)
          }
        })
      },
      { threshold: 0.1 },
    )

    // Observe all elements with the animate class
    const animatedElements = document.querySelectorAll(`.${styles.animate}`)
    animatedElements.forEach((el) => observer.observe(el))

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return (
    <div className={styles.container}>
      <HeroSection translations={t} />
      <FeaturesSection translations={t} />
      <AboutSection translations={t} />
      <CtaSection translations={t} />
    </div>
  )
}
