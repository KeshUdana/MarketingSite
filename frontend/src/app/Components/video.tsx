"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const toggleMenu = useCallback(() => setIsMenuOpen((prev) => !prev), []);

  const handleNavigation = useCallback(
    (sectionId: string) => {
      setIsMenuOpen(false);
      if (pathname === "/") {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
      } else {
        router.push(`/#${sectionId}`);
      }
    },
    [pathname, router]
  );

  const navItems = useMemo(
    () => [
      { id: "Hero", label: "Home" },
      { id: "UserFeatures", label: "For Users" },
      { id: "Features", label: "For Business" },
      { id: "Team", label: "The Team" },
    ],
    []
  );

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
        <Link href="/">
          <div className="relative w-44 h-24 sm:w-40 sm:h-20 md:w-48 md:h-24">
            <Image src="/images/Component 1.png" alt="Modde Logo" fill className="object-contain" priority />
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
        <motion.button
          className="lg:hidden z-10 p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
          whileTap={{ scale: 0.9 }}
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <motion.div className="w-full h-0.5 bg-gray-800" animate={isMenuOpen ? { rotate: 45, y: 8 } : {}} />
            <motion.div className="w-full h-0.5 bg-gray-800" animate={isMenuOpen ? { opacity: 0 } : {}} />
            <motion.div className="w-full h-0.5 bg-gray-800" animate={isMenuOpen ? { rotate: -45, y: -8 } : {}} />
          </div>
        </motion.button>
      </div>
    </motion.header>
  );
}
