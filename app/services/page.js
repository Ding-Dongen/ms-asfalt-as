'use client'

import { Truck, Wrench, Shield, PaintBucket, Ruler, Building } from 'lucide-react'
import styles from './service.module.css'
import { useLanguage } from '../LanguageContext'
import { translations } from '../translations'

const icons = [Truck, Wrench, Shield, PaintBucket, Ruler, Building]

export default function Services() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{t.services}</h1>
      <div className={styles.servicesGrid}>
        {t.servicesList.map((service, index) => {
          const Icon = icons[index]
          return (
            <div key={index} className={styles.serviceItem}>
              <div className={styles.serviceIcon}>
                <Icon size={48} />
              </div>
              <h2 className={styles.serviceTitle}>{service.title}</h2>
              <p className={styles.serviceDescription}>{service.description}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

