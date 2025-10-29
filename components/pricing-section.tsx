"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const pricingPlans = [
  {
    name: "Basic",
    price: "from $250",
    description: "Perfect for single room visualization",
    features: [
      "Static interior render",
      "One camera angle",
      "Standard resolution",
      "2 revision rounds",
      "5-7 day delivery",
    ],
  },
  {
    name: "Advanced",
    price: "from $400",
    description: "Multiple views with professional lighting",
    features: [
      "Multiple camera angles",
      "Advanced lighting setup",
      "High resolution renders",
      "3 revision rounds",
      "Detailed textures",
      "7-10 day delivery",
    ],
    popular: true,
  },
  {
    name: "Animation",
    price: "from $600",
    description: "Cinematic walkthrough experience",
    features: [
      "Short cinematic video",
      "15-30 seconds duration",
      "4K resolution",
      "Professional editing",
      "Background music",
      "10-14 day delivery",
    ],
  },
  {
    name: "Full Package",
    price: "Custom Quote",
    description: "Complete project visualization",
    features: [
      "Full project coverage",
      "Interior + Exterior",
      "360° virtual tour",
      "Animation included",
      "Unlimited revisions",
      "Priority support",
    ],
  },
]

export function PricingSection() {
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

  const scrollToContact = () => {
    const element = document.getElementById("contact")
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="pricing" ref={sectionRef} className="py-24 md:py-32 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Pricing</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transparent pricing tailored to your project complexity and requirements
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricingPlans.map((plan, index) => (
            <Card
              key={plan.name}
              className={`p-8 glass-dark relative transition-all duration-700 hover:scale-105 glow-on-hover ${
                plan.popular ? "ring-2 ring-primary" : ""
              } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="text-3xl font-bold text-primary mb-2">{plan.price}</div>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button onClick={scrollToContact} variant={plan.popular ? "default" : "outline"} className="w-full">
                Get Started
              </Button>
            </Card>
          ))}
        </div>

        <p className="text-center text-muted-foreground mt-12 max-w-2xl mx-auto">
          Final pricing depends on project complexity, detail level, and specific requirements. Contact us for a
          personalized quote.
        </p>
      </div>
    </section>
  )
}
