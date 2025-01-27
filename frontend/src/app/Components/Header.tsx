"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { usePathname } from "next/navigation"

export default function Header() {
  const router = useRouter()
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavigation = (sectionId: string) => {
    setIsMenuOpen(false) // Close mobile menu after navigation
    if (pathname === "/") {
      const section = document.getElementById(sectionId)
      if (section) {
        section.scrollIntoView({ behavior: "smooth" })
      }
    } else {
      router.push(`/#${sectionId}`)
      setTimeout(() => {
        const section = document.getElementById(sectionId)
        if (section) {
          section.scrollIntoView({ behavior: "smooth" })
        }
      }, 100)
    }
  }

  return (
    <header
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/80 backdrop-blur-lg py-2" : "bg-transparent py-4"}`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="relative z-10">
          <div className="relative w-50 h-20 sm:w-44 sm:h-12 md:w-28 md:h-14">
            <Image
              src="/images/Component 1.png"
              alt="Modde Logo"
              fill
              sizes="(max-width: 640px) 80px, (max-width: 768px) 96px, 112px"
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {["Hero", "UserFeatures", "Features", "Team"].map((section) => (
            <button
              key={section}
              onClick={() => handleNavigation(section)}
              className="text-sm font-semibold text-gray-800 hover:text-[#f56d6d] transition duration-300"
            >
              {section === "Hero"
                ? "Home"
                : section === "UserFeatures"
                  ? "For Users"
                  : section === "Features"
                    ? "For Business"
                    : "The Team"}
            </button>
          ))}
        </nav>

        {/* Desktop Social Media Icons */}
        <div className="hidden md:flex space-x-4">
          <SocialIcon
            href="https://www.linkedin.com/company/moddeapp/posts/?feedView=all"
            bgSrc="/images/Ellipse 9.png"
            iconSrc="/images/linkedin.png"
          />
          <SocialIcon
            href="https://www.instagram.com/modde_fashion_studio/"
            bgSrc="/images/Ellipse 10.png"
            iconSrc="/images/instagram.png"
          />
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden z-10" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
          <div
            className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-1.5" : ""}`}
          ></div>
          <div
            className={`w-6 h-0.5 bg-gray-800 mt-1.5 transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`}
          ></div>
          <div
            className={`w-6 h-0.5 bg-gray-800 mt-1.5 transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
          ></div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out transform ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex flex-col h-full justify-center items-center space-y-8">
          {["Hero", "UserFeatures", "Features", "Team"].map((section) => (
            <button
              key={section}
              onClick={() => handleNavigation(section)}
              className="text-xl font-semibold text-gray-800 hover:text-[#f56d6d] transition duration-300"
            >
              {section === "Hero"
                ? "Home"
                : section === "UserFeatures"
                  ? "For Users"
                  : section === "Features"
                    ? "For Business"
                    : "The Team"}
            </button>
          ))}
          <div className="flex space-x-6 mt-8">
            <SocialIcon
              href="https://www.linkedin.com/company/moddeapp/posts/?feedView=all"
              bgSrc="/images/Ellipse 9.png"
              iconSrc="/images/linkedin.png"
            />
            <SocialIcon
              href="https://www.instagram.com/modde_fashion_studio/"
              bgSrc="/images/Ellipse 10.png"
              iconSrc="/images/instagram.png"
            />
          </div>
        </div>
      </div>
    </header>
  )
}

function SocialIcon({ href, bgSrc, iconSrc }: { href: string; bgSrc: string; iconSrc: string }) {
  return (
    <Link href={href} target="_blank" rel="noopener noreferrer">
      <div className="relative w-8 h-8 md:w-10 md:h-10">
        <Image src={bgSrc || "/placeholder.svg"} alt="Social Media Background" fill className="object-contain" />
        <Image
          src={iconSrc || "/placeholder.svg"}
          alt="Social Media Icon"
          width={16}
          height={16}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />
      </div>
    </Link>
  )
}

