"use client"
import { useEffect, useRef } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import styles from "./LandingPage.module.css"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

const features = [
  {
    title: "Snap, Style, and Slay",
    description:
      "Take a photo of what inspires you. Our AI finds similar products so you can style your look and slay effortlessly.",
    icon: "/images/website.png",
    bgColor: "bg-[#ffded4]",
  },
  {
    title: "Find Your Perfect Match",
    description: "Upload a photo and let our AI match it to the best products for your style.",
    icon: "/images/mobilephone.png",
    bgColor: "bg-[#ffeed4]",
  },
  {
    title: "Shop What You Love",
    description: "Discover products inspired by your snaps and bring your vision to life.",
    icon: "/images/mobilephone.png",
    bgColor: "bg-[#d4f0ff]",
  },
  {
    title: "Personalized Shopping",
    description: "Experience a curated journey tailored to your style preferences with just one snap.",
    icon: "/images/rocket.png",
    bgColor: "bg-[#ffd4d4]",
  },
]

export default function UserFeatures() {
  const router = useRouter()
  const featuresRef = useRef<(HTMLDivElement | null)[]>([])
  const sectionRef = useRef<HTMLElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const featureElements = featuresRef.current
    const sectionElement = sectionRef.current
    const buttonElement = buttonRef.current

    if (sectionElement && featureElements.every((el) => el !== null)) {
      gsap.from(sectionElement, {
        opacity: 0,
        scale: 0.9,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionElement,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionElement,
          start: "top 60%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      })

      tl.from(featureElements, {
        y: 100,
        opacity: 0,
        rotateX: -20,
        scale: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      })

      featureElements.forEach((featureEl) => {
        gsap.to(featureEl, {
          y: "random(-10, 10)",
          repeat: -1,
          yoyo: true,
          duration: 2,
          ease: "sine.inOut",
        })
      })
    }

    if (buttonElement) {
      gsap.to(buttonElement, {
        scale: 1.1,
        duration: 0.8,
        repeat: -1,
        yoyo: true,
        ease: "power3.inOut",
        backgroundColor: "#ffffff",
      })
    }
  }, [])

  const handleRequest = () => {
    router.push("/User")
  }

  return (
    <section
      ref={sectionRef}
      className="py-16 pb-12 bg-[#ffd4d4] rounded-tl-[400px] relative min-h-screen flex flex-col"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col justify-between">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#333] mb-4">Snap, Style, and Slay</h2>
          <p className="text-lg sm:text-2xl text-[#666]">Effortless Style with Just One Snap</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) {
                  featuresRef.current[index] = el;
                }
              }}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-transform duration-300 hover:scale-105"
            >
              <div
                className={`${feature.bgColor} rounded-full w-16 h-16 sm:w-20 sm:h-20 mb-6 flex items-center justify-center mx-auto`}
              >
                <Image src={feature.icon || "/placeholder.svg"} alt={feature.title} width={40} height={40} />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-[#333] text-center">{feature.title}</h3>
              <p className="text-sm sm:text-base text-[#666] leading-relaxed text-center">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex justify-center pt-20 pb-5">
          <button
            ref={buttonRef}
            className={`${styles.ctaButton} px-8 py-3 text-white font-bold rounded-full shadow-md hover:shadow-lg`}
            onClick={handleRequest}
          >
            Join the Waitlist!
          </button>
        </div>
      </div>
    </section>
  )
}
