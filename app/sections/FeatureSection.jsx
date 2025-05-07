import { Award, Clock, Users } from "lucide-react"
import styles from "@/styles/FeatureSection.module.css"

export default function FeaturesSection({ translations: t }) {
  const features = [
    {
      icon: Award,
      title: t.qualityMaterials,
      description: t.qualityMaterialsDesc,
      delay: 0,
    },
    {
      icon: Users,
      title: t.expertTeam,
      description: t.expertTeamDesc,
      delay: 0.2,
    },
    {
      icon: Clock,
      title: t.timelyDelivery,
      description: t.timelyDeliveryDesc,
      delay: 0.4,
    },
  ]

  return (
    <section className={styles.features}>
      <h2 className={`${styles.sectionTitle} ${styles.animate}`}>{t.whyChooseUs}</h2>
      <div className={styles.featureGrid}>
        {features.map((feature, index) => (
          <div
            key={index}
            className={`${styles.featureItem} ${styles.animate}`}
            style={{ animationDelay: `${feature.delay}s` }}
          >
            <div className={styles.featureIconWrapper}>
              <feature.icon className={styles.featureIcon} />
              <div className={styles.featureIconRing}></div>
            </div>
            <h3 className={styles.featureItemTitle}>{feature.title}</h3>
            <p className={styles.featureDescription}>{feature.description}</p>
            <div className={styles.featureItemHover}></div>
          </div>
        ))}
      </div>
    </section>
  )
}
