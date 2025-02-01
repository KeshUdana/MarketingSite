"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Github, Linkedin } from "lucide-react"
import Link from "next/link"

gsap.registerPlugin(ScrollTrigger)

const teamMembers = [
  {
    name: "Keshawa Udana",
    title: "ML mode training, deploying & server-side development",
    description: "I lead my team and also train & deploy ML models",
    image: "/images/Keshawa.jpeg",
    github: "https://github.com/KeshUdana",
    linkedin: "https://www.linkedin.com/in/keshawaudana/",
  },
  {
    name: "Kalindu Wijesinghe",
    title: "Server-side Development & marketing",
    description: "I work to build the backend of Modde",
    image: "/images/Kalindu.jpg",
    github: "https://github.com/Kalindukw",
    linkedin: "https://www.linkedin.com/in/kalindu-wijesinghe-8a1a39199/",
  },
  {
    name: "Tharaki Dimithri",
    title: "UI/UX Design & Marketing",
    description: "I design & lay the foundations for the client side",
    image: "/images/Tharaki.jpg",
    github: "https://github.com/Tharakidimithri",
    linkedin: "https://www.linkedin.com/in/tharakii/",
  },
  {
    name: "Sandara Hettiarachchi",
    title: "Client-side development mogul",
    description: "I bring the design to life",
    image: "/images/sandara.jpeg",
    github: "https://github.com/sandaraapoorwa",
    linkedin: "https://www.linkedin.com/in/sandara-hettiarachchi-830bb6202/",
  },
  {
    name: "Ransika Ranaweera",
    title: "Server-side development",
    description: "I'm in charge of databases to aid the server side",
    image: "/images/ransika.jpeg",
    github: "https://github.com/ransicka",
    linkedin: "https://www.linkedin.com/in/ransika-ranaweera/",
  },
  {
    name: "Nelith Nethsanda",
    title: "Client Side development",
    description: "I help make the client side come to life",
    image: "/images/nelith.jpeg",
    github: "https://github.com/nelith-2002",
    linkedin: "https://www.linkedin.com/in/nelith-nethsanda-86bb28271/",
  },
]

export default function TeamMembers() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const sectionElement = sectionRef.current
    const cards = cardRefs.current

    if (sectionElement && cards.every((card) => card !== null)) {
      gsap.fromTo(
        cards,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: sectionElement,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      )
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <section ref={sectionRef} className="min-h-screen flex items-center justify-center bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">Meet the Team</h2>
        <p className="text-lg text-gray-700 mb-10">Get to know the talented individuals who make Modde what it is.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              ref={(el) => {
                cardRefs.current[index] = el
              }}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto mb-6">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={192}
                  height={192}
                  className="object-cover rounded-full border-4 border-gray-300"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
              <p className="text-md text-gray-600 mb-4">{member.title}</p>
              <p className="text-sm text-gray-500 mb-4">{member.description}</p>
              <div className="flex justify-center space-x-4">
                <Link
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900"
                >
                  <Github className="w-6 h-6" />
                  <span className="sr-only">GitHub</span>
                </Link>
                <Link
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900"
                >
                  <Linkedin className="w-6 h-6" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

