'use client'

import { Truck, Wrench, Shield, PaintBucket, Ruler, Building } from 'lucide-react'
import styles from '@/styles/Service.module.css'
import { useLanguage } from '../LanguageContext'
import { translations } from '../translations'

const icons = [Truck, Wrench, Shield, PaintBucket, Ruler, Building]

export default function Services() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>{t.services}</h1>
        <p className={styles.description}>
          {t.servicesDescription || 
            (language === 'no' 
              ? 'Vi tilbyr et bredt spekter av asfalttjenester for både private og kommersielle kunder.' 
              : 'We offer a wide range of asphalt services for both residential and commercial clients.')}
        </p>
      </div>
      
      <div className={styles.servicesGrid}>
        {t.servicesList.map((service, index) => {
          const Icon = icons[index]
          return (
            <div key={index} className={styles.serviceItem}>
              <div className={styles.serviceIconWrapper}>
                <Icon className={styles.serviceIcon} />
                <div className={styles.serviceIconRing}></div>
              </div>
              <h2 className={styles.serviceTitle}>{service.title}</h2>
              <p className={styles.serviceDescription}>{service.description}</p>
              <div className={styles.serviceItemHover}></div>
            </div>
          )
        })}
      </div>
      
      <div className={styles.ctaSection}>
        <div className={styles.ctaBackground}>
          <div className={styles.ctaShape}></div>
          <div className={styles.ctaShape}></div>
        </div>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>
            {language === 'no' ? 'Trenger du hjelp med ditt asfaltprosjekt?' : 'Need help with your asphalt project?'}
          </h2>
          <p className={styles.ctaDescription}>
            {language === 'no' 
              ? 'Kontakt oss i dag for en gratis befaring og tilbud.' 
              : 'Contact us today for a free site visit and quote.'}
          </p>
          <a href="/contact" className={styles.ctaButton}>
            <span className={styles.ctaButtonText}>
              {language === 'no' ? 'Kontakt oss' : 'Contact us'}
            </span>
            <span className={styles.ctaButtonIcon}>→</span>
          </a>
        </div>
      </div>
    </div>
  )
}
