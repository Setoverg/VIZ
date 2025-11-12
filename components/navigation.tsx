"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    if (!isHomePage) {
      window.location.href = `/#${id}`
      return
    }
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass py-3" : "bg-black/40 backdrop-blur-md py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="glow-on-hover cursor-pointer relative w-24 h-6 md:w-32 md:h-8">
          <Image
            src={scrolled ? "/images/logo-accent.png" : "/images/logo-white.png"}
            alt="toVizy"
            fill
            className="object-contain"
            priority
          />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("about")}
            className={`text-sm font-medium transition-colors ${
              scrolled ? "text-foreground hover:text-primary" : "text-white hover:text-primary-light"
            }`}
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("services")}
            className={`text-sm font-medium transition-colors ${
              scrolled ? "text-foreground hover:text-primary" : "text-white hover:text-primary-light"
            }`}
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection("process")}
            className={`text-sm font-medium transition-colors ${
              scrolled ? "text-foreground hover:text-primary" : "text-white hover:text-primary-light"
            }`}
          >
            Process
          </button>
          <button
            onClick={() => scrollToSection("portfolio")}
            className={`text-sm font-medium transition-colors ${
              scrolled ? "text-foreground hover:text-primary" : "text-white hover:text-primary-light"
            }`}
          >
            Portfolio
          </button>
          <button
            onClick={() => scrollToSection("pricing")}
            className={`text-sm font-medium transition-colors ${
              scrolled ? "text-foreground hover:text-primary" : "text-white hover:text-primary-light"
            }`}
          >
            Pricing
          </button>
          <Link
            href="/cv"
            className={`text-sm font-medium transition-colors ${
              scrolled ? "text-foreground hover:text-primary" : "text-white hover:text-primary-light"
            }`}
          >
            CV
          </Link>
          <Button
            onClick={() => scrollToSection("contact")}
            className="glow-on-hover"
            variant={scrolled ? "default" : "secondary"}
          >
            Contact
          </Button>
        </div>
      </div>
    </nav>
  )
}
