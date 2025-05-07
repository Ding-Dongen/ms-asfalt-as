"use client"
import { Facebook, Mail, Phone, MapPin } from "lucide-react"
import { useLanguage } from "../LanguageContext"
import styles from "@/styles/Footer.module.css"

export default function Footer() {
  const { language } = useLanguage()
  const currentYear = new Date().getFullYear()

  // Translations for footer content
  const footerText = {
    no: {
      rights: "Alle rettigheter reservert.",
      address: "Adresse",
      phone: "Telefon",
      email: "E-post",
      followUs: "Følg oss",
    },
    en: {
      rights: "All rights reserved.",
      address: "Address",
      phone: "Phone",
      email: "Email",
      followUs: "Follow us",
    },
  }

  const t = footerText[language]

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerInfo}>
          <div className={styles.footerLogo}>MS Asfalt AS</div>
          <div className={styles.footerContact}>
            <div className={styles.contactItem}>
              <MapPin size={16} />
              <span>{t.address}: Båstad, Norge</span>
            </div>
            <div className={styles.contactItem}>
              <Phone size={16} />
              <span>{t.phone}: +47 906 02 161</span>
            </div>
            <div className={styles.contactItem}>
              <Mail size={16} />
              <span>{t.email}: post@ms-asfalt.no</span>
            </div>
          </div>
        </div>
        <div className={styles.footerSocial}>
          <p>{t.followUs}:</p>
          <a
            href="https://www.facebook.com/MSasfalt/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Besøk vår Facebook-side"
            className={styles.socialLink}
          >
            <Facebook size={18} />
            <span>Facebook</span>
          </a>
        </div>
      </div>
      <div className={styles.footerCopyright}>
        <p>
          &copy; {currentYear} MS Asfalt AS. {t.rights}
        </p>
      </div>
    </footer>
  )
}
