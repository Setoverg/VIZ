"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="py-24 md:py-32 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div
          className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance text-foreground">About toViZy</h2>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              We're <span className="text-primary font-semibold">Alex and Alexandra Lekarev</span> — a creative duo
              specializing in high-end 3D visualization for interior designers and architects.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              With over 12 years of experience, Alex has collaborated with leading designers from Europe and the USA,
              mastering the art of transforming ideas into vivid, realistic imagery. Later, he shared his craft with
              Alexandra, and now we combine our skills to bring a personal touch to every project we create together.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Unlike most studios, we focus on what truly brings a scene to life — the light. Every project we take on
              is built from scratch for each client, with careful attention to mood, detail, and atmosphere. Throughout
              the entire process, we listen closely to our clients' vision to ensure that the final result not only
              meets but exceeds expectations.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              For us, 3D visualization isn't just about technical precision — it's about emotion, storytelling, and the
              perfect play of light.
            </p>

            <div className="grid grid-cols-2 gap-8 mt-12">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">150+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">98%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden glass-dark glow-on-hover relative">
              <Image
                src="/images/team-photo.jpg"
                alt="Alex and Alexandra Lekarev"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
