'use client'

import styles from './contact.module.css'
import { useLanguage } from '../LanguageContext'
import { translations } from '../translations'

const COMPANY_EMAIL = 'post@ms-asfalt.no'

export default function Contact() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{t.contact}</h1>
      <p className={styles.description}>{t.contactDescription}</p>
      <div className={styles.emailContainer}>
        <p className={styles.emailLabel}>{t.emailLabel}</p>
        <p className={styles.email}>{COMPANY_EMAIL}</p>
        <a href={`mailto:${COMPANY_EMAIL}`} className={styles.emailButton}>
          {t.emailButton}
        </a>
      </div>
    </div>
  )
}

