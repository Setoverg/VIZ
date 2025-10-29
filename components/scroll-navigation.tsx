"use client"

import { useState, useEffect } from "react"
import { ChevronUp, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ScrollNavigation() {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [currentSection, setCurrentSection] = useState(0)

  const sections = ["hero", "about", "services", "process", "portfolio", "pricing", "contact"]

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)

      // Determine current section
      const scrollPosition = window.scrollY + window.innerHeight / 2
      const sectionElements = sections.map((id) => document.getElementById(id))

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const element = sectionElements[i]
        if (element && element.offsetTop <= scrollPosition) {
          setCurrentSection(i)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (index: number) => {
    const element = document.getElementById(sections[index])
    element?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const goToNextSection = () => {
    if (currentSection < sections.length - 1) {
      scrollToSection(currentSection + 1)
    }
  }

  const goToPrevSection = () => {
    if (currentSection > 0) {
      scrollToSection(currentSection - 1)
    }
  }

  return (
    <div className="fixed right-4 md:right-8 bottom-8 z-40 flex flex-col gap-2">
      {/* Navigate up */}
      {currentSection > 0 && (
        <Button
          size="icon"
          variant="secondary"
          onClick={goToPrevSection}
          className="rounded-full shadow-lg hover:scale-110 transition-transform bg-background/80 backdrop-blur-sm"
        >
          <ChevronUp className="h-5 w-5" />
        </Button>
      )}

      {/* Scroll to top */}
      {showScrollTop && (
        <Button
          size="icon"
          variant="default"
          onClick={scrollToTop}
          className="rounded-full shadow-lg hover:scale-110 transition-transform glow-on-hover"
        >
          <ChevronUp className="h-5 w-5" />
        </Button>
      )}

      {/* Navigate down */}
      {currentSection < sections.length - 1 && (
        <Button
          size="icon"
          variant="secondary"
          onClick={goToNextSection}
          className="rounded-full shadow-lg hover:scale-110 transition-transform bg-background/80 backdrop-blur-sm"
        >
          <ChevronDown className="h-5 w-5" />
        </Button>
      )}
    </div>
  )
}
