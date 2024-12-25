'use client'

import styles from './projects.module.css'
import Carousel from '../components/Carousel'
import { useLanguage } from '../LanguageContext'
import { translations } from '../translations'

export default function Projects() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{t.projects}</h1>
      <p className={styles.description}>{t.projectsDescription}</p>
      <Carousel />
      <div className={styles.projectList}>
        <h2 className={styles.subtitle}>{t.featuredProjects}</h2>
        <ul>
          {t.projectsList.map((project, index) => (
            <li key={index}>{project}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

