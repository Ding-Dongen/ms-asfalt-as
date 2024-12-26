'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Award, Clock, Users } from 'lucide-react'
import styles from './page.module.css'
import { useLanguage } from './LanguageContext'
import { translations } from './translations'

export default function Home() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>{t.heroTitle}</h1>
          <p className={styles.heroDescription}>{t.heroDescription}</p>
          <p className={styles.heroDescription}>{t.heroDescription2}</p>
          <Link href="/contact" className={styles.ctaButton}>
            {t.getQuote}
          </Link>
        </div>
      </section>



      <section className={styles.features}>
        <h2 className={styles.featuresTitle}>{t.whyChooseUs}</h2>
        <div className={styles.featureGrid}>
          <div className={styles.featureItem}>
            <Award size={48} className={styles.featureIcon} />
            <h3 className={styles.featureItemTitle}>{t.qualityMaterials}</h3>
            <p>{t.qualityMaterialsDesc}</p>
          </div>
          <div className={styles.featureItem}>
            <Users size={48} className={styles.featureIcon} />
            <h3 className={styles.featureItemTitle}>{t.expertTeam}</h3>
            <p>{t.expertTeamDesc}</p>
          </div>
          <div className={styles.featureItem}>
            <Clock size={48} className={styles.featureIcon} />
            <h3 className={styles.featureItemTitle}>{t.timelyDelivery}</h3>
            <p>{t.timelyDeliveryDesc}</p>
          </div>
        </div>
      </section>

      <section className={styles.about}>
        <div className={styles.aboutContent}>
          <h2 className={styles.aboutTitle}>{t.aboutTitle}</h2>
          <p className={styles.aboutDescription}>{t.aboutContent}</p>
        </div>
      </section>

      <section className={styles.cta}>
        <h2 className={styles.ctaTitle}>{t.readyToStart}</h2>
        <Link href="/contact" className={styles.ctaButton}>
          {t.contactUsToday}
        </Link>
      </section>
    </div>
  )
}

