"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail } from "lucide-react"
import { toast } from "sonner"

export function ContactSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        toast.success("Message sent successfully!", {
          description: "We'll get back to you within 24 hours.",
        })
        // Reset form
        setFormData({
          name: "",
          email: "",
          message: "",
        })
      } else {
        toast.error("Failed to send message", {
          description: data.error || "Please try again later.",
        })
      }
    } catch (error) {
      console.error("Form submission error:", error)
      toast.error("Failed to send message", {
        description: "Please check your connection and try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" ref={sectionRef} className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div
            className={`text-center mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Let's Create Together</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Let's create something exceptional together. Reach out to discuss your project, timeline, and vision.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <Card
              className={`p-8 glass-dark flex flex-col justify-center transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Email Us</h3>
                  <a href="mailto:contact@tovizy.com" className="text-primary hover:underline">
                    contact@tovizy.com
                  </a>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                We typically respond within 24 hours. Share your project details, and we'll provide a personalized quote
                and timeline.
              </p>
            </Card>

            {/* Contact Form */}
            <Card
              className={`p-8 glass-dark transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Tell us about your project..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <Button type="submit" className="w-full glow-on-hover" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
