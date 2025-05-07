"use client"

import { useLanguage } from "../LanguageContext"
import { translations } from "../translations"
import Carousel from "../components/Carousel"
import styles from "@/styles/Projects.module.css"

export default function Projects() {
  const { language } = useLanguage()
  const t = translations[language]

  // Create fallback featured projects for the carousel
  const featuredProjects = t.featuredProjects?.projects || [
    {
      id: 1,
      title: language === "no" ? "Asfaltlegging av parkeringsplass" : "Parking Lot Paving",
      description:
        language === "no"
          ? "Komplett asfaltlegging av en stor kommersiell parkeringsplass med linjemaling."
          : "Complete asphalt paving of a large commercial parking lot with line striping.",
      image: "/placeholder.svg?key=cx4qw",
      location: language === "no" ? "Oslo, Norge" : "Oslo, Norway",
      year: "2023",
    },
    {
      id: 2,
      title: language === "no" ? "Veiresurfacing prosjekt" : "Road Resurfacing Project",
      description:
        language === "no"
          ? "Resurfacing av en 2 km lang veistrekning med ny asfalt og veimerking."
          : "Resurfacing of a 2 km stretch of road with new asphalt and road markings.",
      image: "/placeholder.svg?key=tg2fu",
      location: language === "no" ? "Båstad, Norge" : "Båstad, Norway",
      year: "2022",
    },
    {
      id: 3,
      title: language === "no" ? "Asfaltlegging av parkeringsplass" : "Parking Lot Paving",
      description:
        language === "no"
          ? "Komplett asfaltlegging av en stor kommersiell parkeringsplass med linjemaling."
          : "Complete asphalt paving of a large commercial parking lot with line striping.",
      image: "/placeholder.svg?key=cx4qw",
      location: language === "no" ? "Oslo, Norge" : "Oslo, Norway",
      year: "2023",
    },
    {
      id: 4,
      title: language === "no" ? "Veiresurfacing prosjekt" : "Road Resurfacing Project",
      description:
        language === "no"
          ? "Resurfacing av en 2 km lang veistrekning med ny asfalt og veimerking."
          : "Resurfacing of a 2 km stretch of road with new asphalt and road markings.",
      image: "/placeholder.svg?key=tg2fu",
      location: language === "no" ? "Båstad, Norge" : "Båstad, Norway",
      year: "2022",
    },
  ]

  // Create fallback regular projects for the grid
  const regularProjects = t.regularProjects?.projects || [
    {
      id: 5,
      title: language === "no" ? "Privat innkjørsel" : "Private Driveway",
      description:
        language === "no"
          ? "Installasjon av en elegant asfaltert innkjørsel for en boligeiendom."
          : "Installation of an elegant asphalt driveway for a residential property.",
      image: "/placeholder.svg?key=tsmby",
      location: language === "no" ? "Bergen, Norge" : "Bergen, Norway",
      year: "2023",
    },
    {
      id: 6,
      title: language === "no" ? "Industriområde asfaltarbeid" : "Industrial Area Asphalt Work",
      description:
        language === "no"
          ? "Omfattende asfaltarbeid for et stort industriområde med tung trafikk."
          : "Extensive asphalt work for a large industrial area with heavy traffic.",
      image: "/placeholder.svg?key=njb7k",
      location: language === "no" ? "Trondheim, Norge" : "Trondheim, Norway",
      year: "2021",
    },
    {
      id: 7,
      title: language === "no" ? "Kommunal veiutbedring" : "Municipal Road Improvement",
      description:
        language === "no"
          ? "Utbedring og resurfacing av kommunale veier med fokus på holdbarhet."
          : "Improvement and resurfacing of municipal roads with a focus on durability.",
      image: "/placeholder.svg?key=uyg2x",
      location: language === "no" ? "Stavanger, Norge" : "Stavanger, Norway",
      year: "2022",
    },
    {
      id: 8,
      title: language === "no" ? "Boligområde asfaltering" : "Residential Area Paving",
      description:
        language === "no"
          ? "Komplett asfaltering av veier og gangstier i et nytt boligområde."
          : "Complete paving of roads and walkways in a new residential area.",
      image: "/placeholder.svg?height=300&width=500&query=residential paving",
      location: language === "no" ? "Drammen, Norge" : "Drammen, Norway",
      year: "2023",
    },
  ]

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>{t.projects}</h1>
        <p className={styles.description}>{t.projectsDescription}</p>
      </div>

      {/* Featured projects in the carousel */}
      <Carousel projects={featuredProjects} />

      {/* <div className={styles.featuredProjects}>
        <h2 className={styles.subtitle}>
          {t.regularProjectsTitle || (language === "no" ? "Flere prosjekter" : "More Projects")}
        </h2>
        <div className={styles.projectGrid}>
          {regularProjects.map((project) => (
            <div key={project.id} className={styles.projectCard}>
              <div className={styles.projectImageContainer}>
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className={styles.projectImage}
                  loading="lazy"
                />
              </div>
              <div className={styles.projectInfo}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
                <div className={styles.projectMeta}>
                  <span className={styles.projectLocation}>{project.location}</span>
                  <span className={styles.projectYear}>{project.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  )
}
