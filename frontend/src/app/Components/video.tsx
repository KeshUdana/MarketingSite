"use client"

import type React from "react"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const AutoPlayVideo: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const descriptionRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const video = videoRef.current
    const container = containerRef.current
    const title = titleRef.current
    const description = descriptionRef.current

    if (video && container && title && description) {
      const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      }

      const handleIntersect: IntersectionObserverCallback = (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play()
          } else {
            video.pause()
          }
        })
      }

      const observer = new IntersectionObserver(handleIntersect, options)
      observer.observe(container)

      gsap.from(container, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: container,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      })

      gsap.from(title, {
        opacity: 0,
        y: -30,
        duration: 0.8,
        delay: 0.2,
        scrollTrigger: {
          trigger: container,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      })

      gsap.from(description, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.4,
        scrollTrigger: {
          trigger: container,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      })

      return () => {
        observer.unobserve(container)
      }
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="flex flex-col justify-center items-center py-16 pb-32 px-4 w-full max-w-[100vw] mx-auto bg-white rounded-xl shadow-lg overflow-hidden"
    >
      <h2 ref={titleRef} className="text-4xl font-bold mb-6 text-gray-800">
        Discover Our App
      </h2>
      <p ref={descriptionRef} className="text-center mb-8 text-gray-700 max-w-3xl text-lg">
        Experience the best features and seamless performance.
      </p>
      <div className="relative w-full max-w-[60vw] rounded-lg overflow-hidden shadow-xl">
        <video
          ref={videoRef}
          className="w-full h-auto"
          loop
          muted
          playsInline
          preload="metadata"
          poster="/placeholder.svg?height=600&width=1200"
        >
          <source src="./images/modde.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  )
}

export default AutoPlayVideo

