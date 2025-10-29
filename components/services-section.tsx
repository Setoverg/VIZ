"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { HomeIcon, Video, Globe, TreePine } from "lucide-react"

const services = [
  {
    icon: HomeIcon,
    title: "Interior Visualization",
    description: "Photorealistic interior renders that capture every detail, texture, and lighting nuance.",
  },
  {
    icon: TreePine,
    title: "Exterior Visualization",
    description: "Stunning exterior renders showcasing architecture in perfect harmony with its environment.",
  },
  {
    icon: Globe,
    title: "360° Virtual Tours",
    description: "Immersive virtual tours that let clients explore spaces from every angle.",
  },
  {
    icon: Video,
    title: "3D Animation",
    description: "Cinematic walkthroughs and animations that bring your vision to life with motion.",
  },
]

export function ServicesSection() {
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
    <section id="services" ref={sectionRef} className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance text-foreground">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive 3D visualization solutions tailored to your needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={service.title}
                className={`p-8 glass-dark glow-on-hover cursor-pointer transition-all duration-500 hover:scale-105 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
