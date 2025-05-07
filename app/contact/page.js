"use client"

import { Mail, Phone, MapPin, Clock } from "lucide-react"
import styles from "@/styles/contact.module.css"
import { useLanguage } from "../LanguageContext"
import { translations } from "../translations"

const COMPANY_EMAIL = "post@ms-asfalt.no"
const COMPANY_PHONE = "+47 906 02 161"
const COMPANY_ADDRESS = "Båstad, Norge"

export default function Contact() {
  const { language } = useLanguage()
  const t = translations[language]
  const COMPANY_HOURS = language === "no" ? "Man-Fre: 08:00-16:00" : "Mon-Fri: 08:00-16:00"

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>{t.contact}</h1>
        <p className={styles.description}>{t.contactDescription}</p>
      </div>

      <div className={styles.contactContent}>
        <div className={styles.contactInfo}>
          <div className={styles.infoCard}>
            <div className={styles.infoIconWrapper}>
              <Mail className={styles.infoIcon} />
            </div>
            <h3 className={styles.infoTitle}>{t.emailLabel}</h3>
            <p className={styles.infoText}>{COMPANY_EMAIL}</p>
            <a href={`mailto:${COMPANY_EMAIL}`} className={styles.infoButton}>
              {t.emailButton}
            </a>
          </div>

          <div className={styles.infoCard}>
            <div className={styles.infoIconWrapper}>
              <Phone className={styles.infoIcon} />
            </div>
            <h3 className={styles.infoTitle}>{language === "no" ? "Telefon" : "Phone"}</h3>
            <p className={styles.infoText}>{COMPANY_PHONE}</p>
            <a href={`tel:${COMPANY_PHONE.replace(/\s/g, "")}`} className={styles.infoButton}>
              {language === "no" ? "Ring oss" : "Call us"}
            </a>
          </div>

          <div className={styles.infoCard}>
            <div className={styles.infoIconWrapper}>
              <MapPin className={styles.infoIcon} />
            </div>
            <h3 className={styles.infoTitle}>{language === "no" ? "Adresse" : "Address"}</h3>
            <p className={styles.infoText}>{COMPANY_ADDRESS}</p>
            <a
              href="https://maps.google.com/?q=Båstad,Norge"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.infoButton}
            >
              {language === "no" ? "Vis på kart" : "View on map"}
            </a>
          </div>

          <div className={styles.infoCard}>
            <div className={styles.infoIconWrapper}>
              <Clock className={styles.infoIcon} />
            </div>
            <h3 className={styles.infoTitle}>{language === "no" ? "Åpningstider" : "Business Hours"}</h3>
            <p className={styles.infoText}>{COMPANY_HOURS}</p>
            <p className={styles.infoText}>{language === "no" ? "Lør-Søn: Stengt" : "Sat-Sun: Closed"}</p>
          </div>
        </div>

        <div className={styles.ctaSection}>
          <div className={styles.ctaBackground}>
            <div className={styles.ctaShape}></div>
            <div className={styles.ctaShape}></div>
          </div>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>
              {language === "no" ? "Klar til å starte ditt prosjekt?" : "Ready to start your project?"}
            </h2>
            <p className={styles.ctaDescription}>
              {language === "no"
                ? "Vi tilbyr gratis befaring og tilbud på alle prosjekter."
                : "We offer free site visits and quotes for all projects."}
            </p>
            <a href={`mailto:${COMPANY_EMAIL}`} className={styles.ctaButton}>
              <span className={styles.ctaButtonText}>{t.getQuote}</span>
              <span className={styles.ctaButtonIcon}>→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
