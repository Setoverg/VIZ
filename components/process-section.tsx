"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import Image from "next/image"

const steps = [
  {
    number: "01",
    title: "Blueprint Analysis",
    description: "We carefully analyze your architectural plans, understanding every detail and spatial relationship.",
    image: "/images/process-step-1.png",
  },
  {
    number: "02",
    title: "White Material Stage",
    description: "Creating the 3D model with precise geometry and establishing the perfect lighting foundation.",
    image: "/images/process-step-2.jpg",
  },
  {
    number: "03",
    title: "Color & Texture",
    description: "Adding realistic materials, textures, and colors that bring authenticity to every surface.",
    image: "/images/process-step-3.jpg",
  },
  {
    number: "04",
    title: "Final Render & Mood",
    description: "Fine-tuning atmosphere, emotion, and lighting to deliver a photorealistic masterpiece.",
    image: "/images/process-step-4.jpg",
  },
]

export function ProcessSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="process" ref={sectionRef} className="py-24 md:py-32 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Our Process</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A meticulous four-stage journey from concept to photorealistic reality
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <Card
              key={step.number}
              className={`p-0 glass-dark relative overflow-hidden transition-all duration-700 hover:scale-105 glow-on-hover ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative h-48 w-full">
                <Image
                  src={step.image || "/placeholder.svg"}
                  alt={step.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/95 to-transparent" />
              </div>

              <div className="p-8 relative">
                <div className="absolute top-4 right-4 text-6xl font-bold text-primary/10">{step.number}</div>
                <div className="relative z-10">
                  <div className="text-3xl font-bold text-primary mb-4">{step.number}</div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
