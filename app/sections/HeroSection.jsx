import Link from "next/link"
import styles from "@/styles/HeroSection.module.css"
import React from "react"

export default function HeroSection({ translations: t }) {
  // Split the title into individual words and ensure proper spacing
  const titleWords = t.heroTitle ? t.heroTitle.split(" ").filter((word) => word.trim() !== "") : []

  return (
    <section className={styles.hero}>
      <div className={styles.heroBackground}>
        <div className={styles.heroShape}></div>
        <div className={styles.heroShape}></div>
      </div>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          <div className={styles.titleLine}>
            {t.heroTitle.includes("MS Asfalt") ? (
              <>
                {t.heroTitle
                  .replace("MS Asfalt AS", "")
                  .replace("MS Asfalt", "")
                  .trim()
                  .split(" ")
                  .map((word, index) => (
                    <React.Fragment key={index}>
                      <span className={styles.animatedWord} style={{ animationDelay: `${index * 0.1}s` }}>
                        {word}
                      </span>
                      {index <
                        t.heroTitle.replace("MS Asfalt AS", "").replace("MS Asfalt", "").trim().split(" ").length -
                          1 && <span className={styles.wordSpace}> </span>}
                    </React.Fragment>
                  ))}
              </>
            ) : (
              titleWords.map((word, index) => (
                <React.Fragment key={index}>
                  <span className={styles.animatedWord} style={{ animationDelay: `${index * 0.1}s` }}>
                    {word}
                  </span>
                  {index < titleWords.length - 1 && <span className={styles.wordSpace}> </span>}
                </React.Fragment>
              ))
            )}
          </div>

          {t.heroTitle.includes("MS Asfalt") && (
            <div className={styles.titleLine}>
              <span
                className={styles.animatedWord}
                style={{
                  animationDelay: `${t.heroTitle.replace("MS Asfalt AS", "").replace("MS Asfalt", "").trim().split(" ").length * 0.1}s`,
                }}
              >
                MS Asfalt AS
              </span>
            </div>
          )}
        </h1>
        <p className={styles.heroDescription}>{t.heroDescription}</p>
        <p className={styles.heroDescription}>{t.heroDescription2}</p>
        <Link href="/contact" className={styles.ctaButton}>
          <span className={styles.ctaButtonText}>{t.getQuote}</span>
          <span className={styles.ctaButtonIcon}>→</span>
        </Link>
      </div>
      <div className={styles.scrollIndicator}>
        <div className={styles.mouse}>
          <div className={styles.wheel}></div>
        </div>
        <div className={styles.scrollText}>Scroll Down</div>
      </div>
    </section>
  )
}
