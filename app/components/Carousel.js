'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import styles from './Carousel.module.css'

const images = [
    '/images/img1.jpg',
    '/images/img2.jpg',
    '/images/img3.jpg',
    '/images/img4.jpg',
  ]

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }, [])

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  useEffect(() => {
    const interval = setInterval(nextSlide, 7000) // Auto-advance every 7 seconds
    return () => clearInterval(interval)
  }, [nextSlide])

  return (
    <div className={`${styles.carousel} carousel`}>
      {images.map((src, index) => (
        <div
          key={index}
          className={`${styles.slide} ${index === currentIndex ? styles.active : ''}`}
        >
          <Image 
            src={src} 
            alt={`Slide ${index + 1}`} 
            width={800} 
            height={400} 
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
      ))}
      <button className={`${styles.navButton} ${styles.prevButton}`} onClick={prevSlide} aria-label="Previous slide">
        <ChevronLeft size={24} />
      </button>
      <button className={`${styles.navButton} ${styles.nextButton}`} onClick={nextSlide} aria-label="Next slide">
        <ChevronRight size={24} />
      </button>
      <div className={styles.indicators}>
        {images.map((_, index) => (
          <button
            key={index}
            className={`${styles.indicator} ${index === currentIndex ? styles.active : ''}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}


