"use client"

import { useState, useEffect, useCallback, useMemo } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft } from "lucide-react"

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

  useEffect(() => {
    // Prevent body scroll when menu is open
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    // Cleanup function
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMenuOpen])

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev)
  }, [])

  const handleNavigation = useCallback(
    (sectionId: string) => {
      setIsMenuOpen(false)
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
    },
    [pathname, router],
  )

  const navItems = useMemo(
    () => [
      { id: "Hero", label: "Home" },
      { id: "UserFeatures", label: "For Users" },
      { id: "Features", label: "For Business" },
      { id: "Team", label: "The Team" },
    ],
    [],
  )

  const socialIcons = useMemo(
    () => [
      {
        href: "https://www.linkedin.com/company/moddeapp/posts/?feedView=all",
        bgSrc: "/images/Ellipse 9.png",
        iconSrc: "/images/linkedin.png",
      },
      {
        href: "https://www.instagram.com/modde_fashion_studio/",
        bgSrc: "/images/Ellipse 10.png",
        iconSrc: "/images/instagram.png",
      },
    ],
    [],
  )

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
      <Link href="/" className="relative z-10">
    <div className="relative w-70 h-36 sm:w-44 sm:h-18 md:w-48 md:h-20">
      <Image
        src="/images/Component 1.png"
        alt="Modde Logo"
        fill
        sizes="(max-width: 2040px) 256px, (max-width: 868px) 180px, 192px"
        className="object-contain"
        priority
      />
    </div>
  </Link>

        <nav className="hidden lg:flex items-center space-x-8">
          {navItems.map(({ id, label }) => (
            <motion.button
              key={id}
              onClick={() => handleNavigation(id)}
              className="text-sm font-semibold text-gray-800 hover:text-[#f56d6d] transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {label}
            </motion.button>
          ))}
        </nav>

        <div className="hidden lg:flex space-x-4">
          {socialIcons.map(({ href, bgSrc, iconSrc }, index) => (
            <SocialIcon key={index} href={href} bgSrc={bgSrc} iconSrc={iconSrc} />
          ))}
        </div>

        <motion.button
          className="lg:hidden z-10 p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
          whileTap={{ scale: 0.9 }}
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <motion.div
              animate={isMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="w-full h-0.5 bg-gray-800 origin-left"
            />
            <motion.div animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }} className="w-full h-0.5 bg-gray-800" />
            <motion.div
              animate={isMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="w-full h-0.5 bg-gray-800 origin-left"
            />
          </div>
        </motion.button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 bg-white z-40 lg:hidden overflow-y-auto"
          >
            <div className="flex flex-col h-full justify-between p-6">
              <div className="flex justify-between items-center">
                <motion.button
                  onClick={() => {
                    setIsMenuOpen(false)
                    router.push("/")
                  }}
                  className="flex items-center text-gray-800 hover:text-[#f56d6d] transition duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ArrowLeft className="mr-2" />
                  Back to Home
                </motion.button>
                <motion.button
                  onClick={toggleMenu}
                  className="text-gray-800 hover:text-[#f56d6d] transition duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Close
                </motion.button>
              </div>
              <div className="flex flex-col items-center space-y-8 my-auto">
                {navItems.map(({ id, label }) => (
                  <motion.button
                    key={id}
                    onClick={() => handleNavigation(id)}
                    className="text-xl font-semibold text-gray-800 hover:text-[#f56d6d] transition duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {label}
                  </motion.button>
                ))}
              </div>
              <div className="flex justify-center space-x-6">
                {socialIcons.map(({ href, bgSrc, iconSrc }, index) => (
                  <SocialIcon key={index} href={href} bgSrc={bgSrc} iconSrc={iconSrc} />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

function SocialIcon({ href, bgSrc, iconSrc }: { href: string; bgSrc: string; iconSrc: string }) {
  return (
    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      <Link href={href} target="_blank" rel="noopener noreferrer">
        <div className="relative w-8 h-9 md:w-10 md:h-11">
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
    </motion.div>
  )
}

