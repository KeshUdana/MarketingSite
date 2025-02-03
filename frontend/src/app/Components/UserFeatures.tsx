"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { TextPlugin } from "gsap/TextPlugin"
import Head from "next/head"

gsap.registerPlugin(ScrollTrigger, TextPlugin)

const features = [
  {
    title: "Snap it!",
    description:
      "Take a photo of what inspires you. Our AI finds similar products so you can style your look and slay effortlessly.",
    icon: "/images/website.png",
    bgColor: "bg-[#ffded4]",
  },
  {
    title: "Style it!",
    description: "Filter it out and play around to get what you want",
    icon: "/images/mobilephone.png",
    bgColor: "bg-[#ffeed4]",
  },
  {
    title: "Slay!",
    description: "Discover products inspired by your snaps and bring your vision to life.",
    icon: "/images/mobilephone.png",
    bgColor: "bg-[#d4f0ff]",
  },
  {
    title: "Personalized Shopping",
    description: "Get your own wardrobe just curated for your taste",
    icon: "/images/rocket.png",
    bgColor: "bg-[#ffd4d4]",
  },
]

export default function UserFeatures() {
  const router = useRouter()
  const featuresRef = useRef<(HTMLDivElement | null)[]>([])
  const sectionRef = useRef<HTMLElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const featureElements = featuresRef.current
    const sectionElement = sectionRef.current
    const buttonElement = buttonRef.current
    const titleElement = titleRef.current
    const subtitleElement = subtitleRef.current
    const containerElement = containerRef.current

    if (
      sectionElement &&
      featureElements.every((el) => el !== null) &&
      titleElement &&
      subtitleElement &&
      containerElement
    ) {
      // Create a timeline for the entire section
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionElement,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      })

      // Animate the section background
      tl.fromTo(sectionElement, { borderTopLeftRadius: "0px" }, { borderTopLeftRadius: "400px", duration: 1 })

      // Animate the title and subtitle
      tl.fromTo(
        [titleElement, subtitleElement],
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.2 },
        "-=0.5",
      )

      // Animate the feature cards
      tl.fromTo(featureElements, { opacity: 1, y: 50 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.2 }, "-=0.3")

      // Add a parallax effect to the feature cards
      // featureElements.forEach((feature, index) => {
      //   if (feature) {
      //     gsap.to(feature, {
      //       y: -50,
      //       ease: "none",
      //       scrollTrigger: {
      //         trigger: feature,
      //         start: "top bottom",
      //         end: "bottom top",
      //         scrub: true,
      //       },
      //     })
      //   }
      // })

      // Add a subtle rotation to the feature icons
      featureElements.forEach((feature) => {
        if (feature) {
          const icon = feature.querySelector("div")
          if (icon) {
            gsap.to(icon, {
              rotation: 360,
              duration: 20,
              repeat: -1,
              ease: "linear",
            })
          }
        }
      })
    }

    if (buttonElement) {
      gsap.to(buttonElement, {
        scale: 1.1,
        duration: 0.8,
        repeat: -1,
        yoyo: true,
        ease: "power3.inOut",
      })

      gsap.to(buttonElement, {
        boxShadow: "0 0 20px rgba(255, 255, 255, 0.8)",
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      })
    }
  }, [])

  const handleRequest = () => {
    router.push("/User")
  }

  return (
    <>
      <Head>
        <title>Snap, Style, and Slay | Fashion Inspiration</title>
        <meta
          name="description"
          content="Snap photos of your favorite clothing items and use AI to find similar products and style your look. Shop personalized fashion curated just for you!"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Snap, Style, and Slay | Fashion Inspiration" />
        <meta
          property="og:description"
          content="Snap photos of your favorite clothing items and use AI to find similar products and style your look. Shop personalized fashion curated just for you!"
        />
        <meta property="og:image" content="/images/website.png" />
        <meta property="og:url" content="https://yourwebsite.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Snap, Style, and Slay | Fashion Inspiration" />
        <meta
          name="twitter:description"
          content="Snap photos of your favorite clothing items and use AI to find similar products and style your look. Shop personalized fashion curated just for you!"
        />
        <meta name="twitter:image" content="/images/website.png" />
      </Head>

      <section ref={sectionRef} className="pt-20 pb-0 bg-[#ffd4d4] relative min-h-[80vh] flex flex-col overflow-hidden">
        <div
          ref={containerRef}
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col justify-between relative z-20"
        >
          <div className="text-center mb-10">
            <h2 ref={titleRef} className="text-3xl sm:text-4xl font-bold text-[#333] mb-4">
              Snap, Style, and Slay
            </h2>
            <p ref={subtitleRef} className="text-lg sm:text-2xl text-[#666]">
              Discover the perfect wardrobe inspired by your favorite looks.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                ref={(el) => {
                  featuresRef.current[index] = el
                }}
                className="bg-white bg-opacity-100 rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-2 z-30 opacity-100"
              >
                <div
                  className={`${feature.bgColor} rounded-full w-16 h-16 sm:w-20 sm:h-20 mb-6 flex items-center justify-center mx-auto transition-transform duration-300 hover:rotate-12`}
                >
                  <Image src={feature.icon || "/placeholder.svg"} alt={feature.title} width={40} height={40} />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-[#333] text-center">{feature.title}</h3>
                <p className="text-sm sm:text-base text-[#666] leading-relaxed text-center">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

