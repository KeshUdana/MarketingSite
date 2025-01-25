"use client"
import { useEffect, useRef } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import styles from "../Pages/LandingPage.module.css"
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
      // Section Fade-In Animation
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

      // Feature cards animation with rotation and floating effect
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
        scale: 1, // Increase initial scale to make the cards larger
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      })

      // Floating effect for feature cards
      featureElements.forEach((featureEl) => {
        gsap.to(featureEl, {
          y: "random(-10, 10)", // Slight vertical movement to simulate floating
          repeat: -1, // Loop infinitely
          yoyo: true, // Reverse the direction
          duration: 2, // Time for each cycle
          ease: "sine.inOut", // Smooth easing for floating effect
        })
      })
    }

    if (buttonElement) {
      // Button pulse effect with color transition
      gsap.to(buttonElement, {
        scale: 1.1,
        duration: 0.8,
        repeat: -1,
        yoyo: true,
        ease: "power3.inOut",
        backgroundColor: "#ff6347", // Color change on pulse
      })
    }
  }, [])

  const handleRequest = () => {
    router.push("/User")
  }

  return (
    <section
      ref={sectionRef}
      className="py-20 pb-16 -mt-10 bg-[#ffd4d4] rounded-tl-[400px] relative min-h-screen flex flex-col"
    >
      <div className="max-w-10xl mx-auto px-6 md:px-12 h-full flex flex-col justify-between">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#333] mb-4">Snap, Style, and Slay</h2>
          <p className="text-2xl text-[#666]">Effortless Style with Just One Snap</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 flex-grow">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={(el) => (featuresRef.current[index] = el)}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-transform duration-300 hover:scale-105 transform" // Increase padding and make the card larger
            >
              <div
                className={`${feature.bgColor} rounded-full w-20 h-20 mb-6 flex items-center justify-center mx-auto`} // Increased size of the icon container
              >
                <Image src={feature.icon || "/placeholder.svg"} alt={feature.title} width={48} height={48} /> {/* Increased icon size */}
              </div>
              <h3 className="text-xl font-bold mb-2 text-[#333] text-center">{feature.title}</h3> {/* Increased text size */}
              <p className="text-[#666] text-sm leading-relaxed text-center">{feature.description}</p>
            </div>
          ))}
        </div>
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-full md:w-auto">
          <button
            ref={buttonRef}
            className={`${styles.ctaButton} shadow-lg`}
            onClick={handleRequest}
          >
            Join the Waitlist!
          </button>
        </div>
      </div>
    </section>
  )
}
