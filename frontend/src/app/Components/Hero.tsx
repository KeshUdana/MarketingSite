"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import styles from "./LandingPage.module.css"
import { gsap } from "gsap"

const heroContent = [
  {
    title: ["Experience Fashion", "like never before"],
    description: "Join us as we use AI to take your shopping and fashion experience to the next level",
    image: "/images/Group 5.jpg",
  },
  {
    title: ["AI-Powered", "Style Recommendations"],
    description: "Get personalized fashion suggestions tailored just for you",
    image: "/images/Group 6.png",
  },
  {
    title: ["Virtual Try-On", "Technology"],
    description: "See how clothes look on you without stepping into a fitting room",
    image: "/images/Group 7.png",
  },
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slideRefs = useRef(heroContent.map(() => useRef(null)))
  const titleRefs = useRef(heroContent.map(() => [{ current: null }, { current: null }]))
  const descriptionRefs = useRef(heroContent.map(() => ({ current: null })))
  const imageRefs = useRef(heroContent.map(() => ({ current: null })))

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroContent.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const slides = slideRefs.current.map((ref) => ref.current)
    const titles = titleRefs.current.map((refs) => refs.map((ref) => ref.current))
    const descriptions = descriptionRefs.current.map((ref) => ref.current)
    const images = imageRefs.current.map((ref) => ref.current)

    const tl = gsap.timeline()

    slides.forEach((slide, index) => {
      const isActive = index === currentSlide
      const isNext = index === (currentSlide + 1) % heroContent.length

      // Slide animation
      tl.to(
        slide,
        {
          opacity: isActive ? 1 : 0,
          x: isActive ? "0%" : isNext ? "100%" : "-100%",
          zIndex: isActive ? 1 : 0,
          duration: 0.5,
          ease: "power2.inOut",
        },
        0,
      )

      // Title animation
      titles[index].forEach((titlePart, i) => {
        tl.fromTo(
          titlePart,
          { opacity: 0, y: 20 },
          {
            opacity: isActive ? 1 : 0,
            y: isActive ? 0 : 20,
            duration: 0.5,
            delay: i * 0.1,
            ease: "power2.out",
          },
          isActive ? 0.3 : 0,
        )
      })

      // Description animation
      tl.fromTo(
        descriptions[index],
        { opacity: 0, y: 20 },
        {
          opacity: isActive ? 1 : 0,
          y: isActive ? 0 : 20,
          duration: 0.5,
          ease: "power2.out",
        },
        isActive ? 0.5 : 0,
      )

      // Image animation
      tl.fromTo(
        images[index],
        { opacity: 0, scale: 0.9 },
        {
          opacity: isActive ? 1 : 0,
          scale: isActive ? 1 : 0.9,
          duration: 0.5,
          ease: "power2.out",
        },
        isActive ? 0.3 : 0,
      )
    })
  }, [currentSlide])

  return (
    <section className={`${styles.heroSection} bg-white relative h-screen overflow-hidden`}>
      <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center">
        {heroContent.map((content, index) => (
          <div
            key={index}
            ref={slideRefs.current[index]}
            className={`${styles.heroSlide} absolute w-full h-full flex items-center justify-center`}
          >
            <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className={`${styles.heroTitle} text-[#333]`}>
                  {content.title.map((part, i) => (
                    <span
                      key={i}
                      ref={titleRefs.current[index][i]}
                      className={`block ${i === 0 ? "font-bold" : "font-normal"}`}
                    >
                      {part}
                    </span>
                  ))}
                </h1>
                <Image
                  src="/images/Vector 4.png"
                  alt="Decoration"
                  width={291}
                  height={200}
                  className="block -translate-y-10"
                />
                <p ref={descriptionRefs.current[index]} className={`${styles.heroDescription} text-[#666]`}>
                  {content.description}
                </p>
              </div>
              <div className="relative" ref={imageRefs.current[index]}>
                <Image
                  src={content.image || "/placeholder.svg"}
                  alt="Hero Image"
                  width={1000}
                  height={1000}
                  sizes="100vw"
                  className="object-contain w-full h-full"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {heroContent.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${index === currentSlide ? "bg-primary" : "bg-gray-300"}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  )
}

