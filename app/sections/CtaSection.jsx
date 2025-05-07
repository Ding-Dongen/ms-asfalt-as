import Link from "next/link"
import styles from "@/styles/CtaSection.module.css"

export default function CtaSection({ translations: t }) {
  return (
    <section className={styles.cta}>
      <div className={styles.ctaBackground}>
        <div className={styles.ctaShape}></div>
        <div className={styles.ctaShape}></div>
      </div>
      <div className={`${styles.ctaContent} ${styles.animate}`}>
        <h2 className={styles.sectionTitle}>{t.readyToStart}</h2>
        <div className={styles.ctaActions}>
          <Link href="/contact" className={styles.ctaButton}>
            <span className={styles.ctaButtonText}>{t.contactUsToday}</span>
            <span className={styles.ctaButtonIcon}>→</span>
          </Link>
          <Link href="/projects" className={styles.ctaSecondary}>
            {t.viewOurWork || (t.language === "no" ? "Se våre prosjekter" : "View Our Work")}
          </Link>
        </div>
      </div>
    </section>
  )
}
