"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, Clock, Zap } from "lucide-react"

const pricingPlans = [
  {
    name: "Single Space",
    price: "From $650",
    description: "Perfect for standard rooms and essential design presentations.",
    features: [
      "1 High-End Interior Render",
      "Photorealistic Lighting & Texturing",
      "AI-Enhanced Detail Refinement",
      { text: "2 Revision Rounds included", bold: true },
      "5-7 day delivery",
    ],
    buttonText: "Get Started",
    scrollToContact: true,
  },
  {
    name: "Full Concept / Multi-View",
    price: "From $950",
    description: "Comprehensive coverage for complex spaces or multiple angles.",
    features: [
      "Up to 3 High-End Renders (Same Room/Space)",
      "Advanced Lighting Scenarios (e.g., Day/Night)",
      "Premium Custom Furniture Integration",
      { text: "2 Revision Rounds included", bold: true },
      "7-10 day delivery",
    ],
    popular: true,
    buttonText: "Get Started",
    scrollToContact: true,
  },
  {
    name: "Immersive & Animation",
    price: "Custom Quote",
    priceSubtext: "Starting from $1,500",
    description: "For large-scale commercial projects and cinematic presentations.",
    features: [
      "Full Project Coverage (Interior + Exterior)",
      "Cinematic 4K Walkthrough Video",
      "360° Virtual Tours",
      "Strictly structured revision timeline",
      "Priority Support",
    ],
    buttonText: "Request a Quote",
    scrollToContact: true,
  },
]

const addOns = [
  {
    icon: Clock,
    title: "Additional Revision Round",
    price: "$150 / per round",
  },
  {
    icon: Zap,
    title: "Rush Delivery (48 hours)",
    price: "+50% of project cost",
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
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
                <div className="text-3xl font-bold text-primary mb-1">{plan.price}</div>
                {plan.priceSubtext && (
                  <div className="text-sm text-muted-foreground mb-2">{plan.priceSubtext}</div>
                )}
                <p className="text-sm text-muted-foreground">{plan.description}</p>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => {
                  const isObject = typeof feature === "object"
                  const text = isObject ? feature.text : feature
                  const isBold = isObject && feature.bold
                  return (
                    <li key={featureIndex} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className={`text-sm ${isBold ? "font-bold" : ""}`}>{text}</span>
                    </li>
                  )
                })}
              </ul>
              <Button 
                onClick={scrollToContact} 
                variant={plan.popular ? "default" : "outline"} 
                className="w-full"
              >
                {plan.buttonText}
              </Button>
            </Card>
          ))}
        </div>

        {/* Add-ons Section */}
        <Card className={`mt-12 p-8 glass-dark max-w-3xl mx-auto transition-all duration-700 delay-300 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <h3 className="text-2xl font-bold mb-4 text-center">Add-ons & A La Carte Services</h3>
          <p className="text-muted-foreground text-center mb-6">
            We value your time and ours. To keep project timelines efficient, all base packages include 2 consolidated rounds of revisions.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {addOns.map((addon, index) => (
              <div 
                key={index} 
                className="flex items-center gap-4 p-4 rounded-lg bg-secondary/30 border border-border/50"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <addon.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-medium">{addon.title}</div>
                  <div className="text-primary font-bold">{addon.price}</div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <p className="text-center text-muted-foreground mt-12 max-w-2xl mx-auto">
          Final pricing depends on project complexity, detail level, and specific requirements. Contact us for a
          personalized quote.
        </p>
      </div>
    </section>
  )
}
