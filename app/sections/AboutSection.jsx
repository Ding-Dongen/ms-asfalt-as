"use client"

import { useEffect } from "react"
import styles from "@/styles/AboutSection.module.css"

export default function AboutSection({ translations: t }) {
  useEffect(() => {
    // Initialize counter animation when component mounts
    const counters = document.querySelectorAll(`.${styles.statNumber}`)

    counters.forEach((counter) => {
      const target = Number.parseInt(counter.getAttribute("data-count"), 10)
      const duration = 2000 // 2 seconds
      const step = Math.ceil(target / (duration / 16)) // ~60fps
      let current = 0

      const updateCounter = () => {
        current += step
        if (current > target) current = target
        counter.textContent = current

        if (current < target) {
          requestAnimationFrame(updateCounter)
        }
      }

      const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          updateCounter()
          observer.disconnect()
        }
      })

      observer.observe(counter)
    })
  }, [])

  return (
    <section className={styles.about}>
      <div className={styles.aboutBackground}>
        <div className={styles.aboutShape}></div>
      </div>
      <div className={`${styles.aboutContent} ${styles.animate}`}>
        <h2 className={styles.sectionTitle}>{t.aboutTitle}</h2>
        <div className={styles.aboutTextContainer}>
          {t.aboutContent.split(". ").map((sentence, index) => (
            <p key={index} className={styles.aboutDescription}>
              {sentence}
              {index < t.aboutContent.split(". ").length - 1 ? "." : ""}
            </p>
          ))}
        </div>
        <div className={styles.aboutStats}>
          <div className={styles.statItem}>
            <div className={styles.statNumber} data-count="35">
              0
            </div>
            <div className={styles.statLabel}>
              {t.yearsExperience || (t.language === "no" ? "Års Erfaring" : "Years Experience")}
            </div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber} data-count="500">
              0
            </div>
            <div className={styles.statLabel}>
              {t.projectsCompleted || (t.language === "no" ? "Fullførte Prosjekter" : "Projects Completed")}
            </div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber} data-count="100">
              0
            </div>
            <div className={styles.statLabel}>
              {t.happyClients || (t.language === "no" ? "Fornøyde Kunder" : "Happy Clients")}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
