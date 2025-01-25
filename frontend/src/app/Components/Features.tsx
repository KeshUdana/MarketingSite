"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import styles from "../Pages/LandingPage.module.css"
import { setupAnimations } from "./FeatureAnimation"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { gsap } from "gsap"

gsap.registerPlugin(ScrollTrigger)

const features = [
  {
    title: "Enhance Customer Reach",
    description: "Connect your products with a wider audience through AI-driven recommendations.",
    icon: "/images/website.png",
    bgColor: "bg-[#ffded4]",
  },
  {
    title: "Streamline Product Discovery",
    description: "Help customers find similar products effortlessly by uploading an image.",
    icon: "/images/mobilephone.png",
    bgColor: "bg-[#ffeed4]",
  },
  {
    title: "Boost Local Sales",
    description: "Promote Sri Lankan retailers and increase visibility within the local market.",
    icon: "/images/mobilephone.png",
    bgColor: "bg-[#d4f0ff]",
  },
  {
    title: "Improve Shopping Experience",
    description: "Deliver a personalized and intuitive shopping journey for your customers.",
    icon: "/images/rocket.png",
    bgColor: "bg-[#ffd4d4]",
  },
]

export default function Features() {
  const router = useRouter()
  const sectionRef = useRef<HTMLElement>(null)
  const featuresRef = useRef<(HTMLDivElement | null)[]>([])
  const bgRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const featureElements = featuresRef.current
    const sectionElement = sectionRef.current
    const bgElement = bgRef.current
    const titleElement = titleRef.current
    const subtitleElement = subtitleRef.current

    if (sectionElement && bgElement && titleElement && subtitleElement && featureElements.every((el) => el !== null)) {
      setupAnimations(sectionElement, bgElement, titleElement, subtitleElement, featureElements as HTMLDivElement[])

      // Add floating and rotation animation
      featureElements.forEach((feature, index) => {
        if (feature) {
          gsap.to(feature, {
            y: -10,
            rotate: "5deg",
            duration: 2,
            ease: "power1.inOut",
            repeat: -1,
            yoyo: true,
            delay: index * 0.1,
          })
        }
      })
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  const handleRequest = () => {
    router.push("/Retailer")
  }

  return (
    <section
  ref={sectionRef}
  className="py-20 pb-10 mt-[200px] bg-[#ffd4d4] rounded-tr-[400px] relative min-h-screen flex flex-col"
>

      <div ref={bgRef} className="absolute inset-0 bg-[#ffd4d4] rounded-br-[400px] -z-10" />
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <h2 ref={titleRef} className="text-4xl font-bold text-center mb-4 text-[#333]">
          What We Do
        </h2>
        <p ref={subtitleRef} className="text-2xl text-center mb-12 text-[#666]">
          For Your Business
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={(el) => (featuresRef.current[index] = el)}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2"
            >
              <div
                className={`icon-container ${feature.bgColor} rounded-full w-16 h-16 mb-6 flex items-center justify-center mx-auto`}
              >
                <Image src={feature.icon || "/placeholder.svg"} alt={feature.title} width={36} height={36} />
              </div>
              <h3 className="text-lg font-bold mb-2 text-[#333] text-center">{feature.title}</h3>
              <p className="text-[#666] text-sm leading-relaxed text-center">{feature.description}</p>
            </div>
          ))}
        </div>
        <div
  className="absolute top-[600px] left-1/2 transform -translate-x-1/2 w-full md:w-auto"
>
  <button className={`${styles.ctaButton} shadow-lg`} onClick={handleRequest}>
    Request
  </button>
</div>


      </div>
    </section>
  )
}
