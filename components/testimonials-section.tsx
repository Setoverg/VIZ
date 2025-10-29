"use client"

import { useState, useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"
import { Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Douglas Stratton",
    title: "Architect & Head of Stratton Group",
    location: "North Carolina, USA",
    text: "Working with this team has transformed how we present our architectural concepts to clients. The photorealistic quality and attention to detail in every render allows our designs to speak for themselves before a single brick is laid.",
    avatar: "/professionals/douglas-stratton.png",
  },
  {
    id: 2,
    name: "Bita Babei",
    title: "Interior Designer",
    location: "San Diego, California",
    text: "The level of craftsmanship in these visualizations is extraordinary. They capture not just the space, but the emotion and atmosphere I envision for each project. My clients can truly see and feel their future homes.",
    avatar: "/professionals/bita-babei.png",
  },
  {
    id: 3,
    name: "Lisa Goh",
    title: "Design Consultant",
    location: "Singapore",
    text: "Exceptional quality and professionalism. The renders are so realistic that clients often mistake them for photographs. This has significantly improved our project approval rates and client satisfaction.",
    avatar: "/professionals/lisa-goh.jpeg",
  },
  {
    id: 4,
    name: "Chiara & Fabio Garonzi",
    title: "Architectural Design Studio",
    location: "Milan, Italy",
    text: "Collaborating across continents has never been easier. The team understands European design sensibilities perfectly, delivering renders that capture the essence of Italian craftsmanship and modern elegance.",
    avatar: "/professional-couple-architects.jpg",
  },
]

export function TestimonialsSection() {
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
    <section id="testimonials" ref={sectionRef} className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">What Our Clients Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trusted by architects and designers worldwide
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.id}
              className={`p-8 relative transition-all duration-700 hover:shadow-xl ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-primary/10" />
              <div className="flex items-start gap-4 mb-6">
                <img
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                  <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  <p className="text-xs text-muted-foreground mt-1">{testimonial.location}</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed italic">{testimonial.text}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
