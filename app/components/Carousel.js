"use client"

import { useState, useEffect, useRef } from "react"
import { X, MapPin, Calendar } from "lucide-react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules"
import styles from "@/styles/Carousel.module.css"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/effect-fade"

// Fallback images if no projects are provided
const fallbackImages = ["/images/img1.jpg", "/images/img2.jpg", "/images/img3.jpg", "/images/img4.jpg"]

export default function Carousel({ projects }) {
  const [enhancedImage, setEnhancedImage] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const prevRef = useRef(null)
  const nextRef = useRef(null)

  useEffect(() => {
    // Set loaded state after component mounts to avoid hydration issues
    setIsLoaded(true)
  }, [])

  const handleImageClick = (src) => {
    setEnhancedImage(src)
  }

  const closeEnhancedImage = () => {
    setEnhancedImage(null)
  }

  if (!isLoaded) {
    return <div className={styles.carouselPlaceholder}></div>
  }

  // If projects prop is provided, use it; otherwise, use fallback images
  const hasProjects = projects && Array.isArray(projects) && projects.length > 0

  return (
    <div className={styles.carouselWrapper}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        navigation={true}
        pagination={{ clickable: true }}
        loop={hasProjects && projects.length > 1}
        autoplay={
          hasProjects && projects.length > 1
            ? {
                delay: 7000,
                disableOnInteraction: false,
              }
            : false
        }
        effect="fade"
        fadeEffect={{ crossFade: true }}
        className={styles.swiper}
      >
        {hasProjects
          ? // Render projects if available
            projects.map((project) => (
              <SwiperSlide key={project.id} className={styles.slide}>
                <div className={styles.slideContent} onClick={() => handleImageClick(project.image)}>
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title || `Project slide`}
                    className={styles.slideImage}
                  />
                  {/* <div className={styles.slideInfo}>
                    <h3 className={styles.slideTitle}>{project.title}</h3>
                    <p className={styles.slideDescription}>{project.description}</p>
                    <div className={styles.slideMeta}>
                      <div className={styles.slideLocation}>
                        <MapPin size={16} />
                        <span>{project.location}</span>
                      </div>
                      <div className={styles.slideYear}>
                        <Calendar size={16} />
                        <span>{project.year}</span>
                      </div>
                    </div>
                  </div> */}
                </div>
              </SwiperSlide>
            ))
          : // Fallback to simple images if no projects
            fallbackImages.map((src, index) => (
              <SwiperSlide key={index} className={styles.slide}>
                <div className={styles.slideContent} onClick={() => handleImageClick(src)}>
                  <img src={src || "/placeholder.svg"} alt={`Slide ${index + 1}`} className={styles.slideImage} />
                </div>
              </SwiperSlide>
            ))}
      </Swiper>

      {enhancedImage && (
        <div className={styles.enhancedImageOverlay} onClick={closeEnhancedImage}>
          <div className={styles.enhancedImageContainer}>
            <img src={enhancedImage || "/placeholder.svg"} alt="Enhanced view" className={styles.enhancedImage} />
            <button className={styles.closeButton} onClick={closeEnhancedImage} aria-label="Close enhanced view">
              <X size={24} />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
