"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { gsap } from "gsap"

const heroContent = [
  {
    title: ["Experience Fashion", "like never before"],
    description: "Join us as we use AI to take your shopping and fashion experience to the next level",
    image: "/images/pic1.jpg",
  },
  {
    title: ["AI-Powered", "Style Recommendations"],
    description: "Get personalized fashion suggestions tailored just for you",
    image: "/images/pic2.jpg",
  },
  {
    "title": ["Retailer Partnership", "Business Growth"],
    "description": "Partner with us to expand your retail business, connect with more customers,  boost sales through our innovative platform,and gain curated analytics made for you.",
    "image": "/images/analytics.jpg"
  }
  
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slideRefs = useRef(heroContent.map(() => ({ current: null })))
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
    <section className="bg-white relative min-h-screen overflow-hidden">
      <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center">
        {heroContent.map((content, index) => (
          <div
            key={index}
            ref={slideRefs.current[index]}
            className="absolute w-full h-full flex items-center justify-center"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="text-center lg:text-left order-2 lg:order-1">
                <h1 className="text-[#333] text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
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
                <div className="mt-4 mb-6">
                  <Image
                    src="/images/Vector 4.png"
                    alt="Decoration"
                    width={291}
                    height={200}
                    className="inline-block w-auto h-auto max-w-full"
                  />
                </div>
                <p ref={descriptionRefs.current[index]} className="text-[#666] text-lg sm:text-xl">
                  {content.description}
                </p>
              </div>
              <div className="relative order-1 lg:order-2" ref={imageRefs.current[index]}>
                <div className="aspect-square overflow-hidden rounded-full">
                  <Image
                    src={content.image || "/placeholder.svg"}
                    alt="Hero Image"
                    width={1000}
                    height={1000}
                    className="object-cover w-full h-full"
                  />
                </div>
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

