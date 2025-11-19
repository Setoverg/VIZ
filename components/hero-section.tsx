"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"

export function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-background.jpg"
          alt="Premium 3D Visualization"
          fill
          className="object-cover blur-[1px]"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/65 to-black/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-transparent to-primary/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="mb-8 animate-fade-in-up flex justify-center pt-20 md:pt-0">
          <Image
            src="/tovizy-logo.png"
            alt="toVizy 3D Studio"
            width={320}
            height={96}
            className="drop-shadow-2xl"
            priority
          />
        </div>

        <h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance animate-fade-in-up animation-delay-200 bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-200 bg-clip-text text-transparent drop-shadow-2xl"
          style={{ textShadow: "0 4px 20px rgba(251,191,36,0.3)" }}
        >
          Premium 3D Visualization <span className="text-3xl md:text-4xl lg:text-5xl italic">too easy</span>
        </h1>

        <p
          className="text-lg md:text-xl text-amber-50/95 max-w-3xl mx-auto mb-8 leading-relaxed animate-fade-in-up animation-delay-400 drop-shadow-lg"
          style={{ textShadow: "0 2px 10px rgba(0,0,0,0.7)" }}
        >
          We design photorealistic interiors, exteriors, 360° virtual tours, and cinematic animations — tailored
          uniquely for every client, with a focus on atmosphere, emotion, and perfect lighting.
        </p>

        <Button
          size="lg"
          onClick={scrollToContact}
          className="text-lg px-8 py-6 glow-on-hover animate-fade-in-up animation-delay-600"
        >
          Work With Us
        </Button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/80 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/80 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}
