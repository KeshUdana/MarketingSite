"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import styles from "./LandingPage.module.css"
import { gsap } from "gsap"

export default function Hero() {
  const titleRef = useRef(null)
  const descriptionRef = useRef(null)
  const decorationRef = useRef(null)
  const heroImageRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } })
    tl.from(titleRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
    })
      .from(
        descriptionRef.current,
        {
          y: 20,
          opacity: 0,
          duration: 0.8,
        },
        "-=0.5",
      )
      .from(
        decorationRef.current,
        {
          scale: 0,
          opacity: 0,
          duration: 0.8,
        },
        "-=0.5",
      )
      .from(
        heroImageRef.current,
        {
          x: 100,
          opacity: 0,
          duration: 1,
        },
        "-=0.5",
      )
  }, [])

  return (
    <section className={`${styles.heroSection} bg-white relative h-screen`}>
      <div className={`${styles.heroContent} max-w-7xl mx-auto px-6 md:px-12`}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center h-full">
          <div>
            <h1 className={`${styles.heroTitle} text-[#333]`} ref={titleRef}>
              <span className="block font-bold">Experience Fashion </span>
              <span className="block font-normal">like never before</span>
            </h1>
            <Image
              src="/images/Vector 4.png"
              alt="Decoration"
              width={291}
              height={200}
              className="block -translate-y-10"
              ref={decorationRef}
            />
            <p className={`${styles.heroDescription} text-[#666]`} ref={descriptionRef}>
              Join us as we use AI to take your shopping and fashion experience to the next level
            </p>
          </div>
          <div className="relative">
            <Image
              src="/images/Group 5.jpg"
              alt="Hero Image"
              width={100}
              height={100}
              sizes="1000vw"
              className="object-contain w-full h-full"
              ref={heroImageRef}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

