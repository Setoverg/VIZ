"use client"

import { useState, useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Posana - Italian Restaurant",
    category: "Interior",
    description: "Commercial Project",
    thumbnail: "/images/posana-1.jpg",
    images: [
      "/images/posana-1.jpg",
      "/images/posana-2.jpg",
      "/images/posana-3.jpg",
      "/images/posana-4.jpg",
      "/images/posana-5.jpg",
    ],
  },
  {
    id: 2,
    title: "Ferrell - Kitchen",
    category: "Interior",
    description: "3 Project Versions",
    thumbnail: "/images/ferrell-1.jpg",
    images: ["/images/ferrell-1.jpg", "/images/ferrell-2.jpg", "/images/ferrell-3.jpg", "/images/ferrell-4.jpg"],
  },
  {
    id: 3,
    title: "Alpine Retreat - Great Room",
    category: "Interior",
    description: "Luxury Mountain Lodge",
    thumbnail: "/images/alpine-1.jpg",
    images: ["/images/alpine-1.jpg", "/images/alpine-2.jpg", "/images/alpine-3.jpg"],
  },
  {
    id: 4,
    title: "Green Valley Estate",
    category: "Interior",
    description: "Modern Farmhouse Residence",
    thumbnail: "/images/green-valley-1.jpg",
    images: [
      "/images/green-valley-1.jpg",
      "/images/green-valley-2.jpg",
      "/images/green-valley-3.jpg",
      "/images/green-valley-4.jpg",
    ],
  },
  {
    id: 5,
    title: "Azure Coast Villa",
    category: "Exterior",
    description: "Contemporary Luxury Residence",
    thumbnail: "/images/azure-coast-1.jpg",
    images: ["/images/azure-coast-1.jpg"],
  },
  {
    id: 6,
    title: "Postero Restaurant & Wine Bar",
    category: "Interior",
    description: "Luxury Dining Experience",
    thumbnail: "/images/postero-1.jpg",
    images: ["/images/postero-1.jpg", "/images/postero-2.jpg", "/images/postero-3.jpg"],
  },
  {
    id: 7,
    title: "Timber Ridge Suite",
    category: "Interior",
    description: "Mountain Lodge Bedroom",
    thumbnail: "/images/timber-ridge-1.jpg",
    images: ["/images/timber-ridge-1.jpg", "/images/timber-ridge-2.jpg"],
  },
  {
    id: 8,
    title: "Khouryr - Kitchen",
    category: "Interior",
    thumbnail: "/images/khouryr-1.jpg",
    images: ["/images/khouryr-1.jpg", "/images/khouryr-2.jpg"],
  },
]

export function PortfolioSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)
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

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedProject.images.length)
    }
  }

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length)
    }
  }

  return (
    <section id="portfolio" ref={sectionRef} className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Portfolio</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our latest projects showcasing photorealistic visualization
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Dialog key={project.id}>
              <DialogTrigger asChild>
                <Card
                  className={`group relative overflow-hidden cursor-pointer transition-all duration-700 hover:scale-[1.02] glow-on-hover ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                  onClick={() => {
                    setSelectedProject(project)
                    setCurrentImageIndex(0)
                  }}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={project.thumbnail || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-sm font-medium mb-1">{project.category}</p>
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    {project.description && <p className="text-sm text-white/80 mt-1">{project.description}</p>}
                    <Button variant="secondary" size="sm" className="mt-4">
                      View Project
                    </Button>
                  </div>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 bg-black/95">
                <div className="relative">
                  {selectedProject && (
                    <>
                      <img
                        src={selectedProject.images[currentImageIndex] || "/placeholder.svg"}
                        alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                        className="w-full h-auto max-h-[95vh] object-contain"
                      />
                      {selectedProject.images.length > 1 && (
                        <>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white"
                            onClick={prevImage}
                          >
                            <ChevronLeft className="w-6 h-6" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white"
                            onClick={nextImage}
                          >
                            <ChevronRight className="w-6 h-6" />
                          </Button>
                        </>
                      )}
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                        {selectedProject.images.map((_, idx) => (
                          <div
                            key={idx}
                            className={`w-2 h-2 rounded-full transition-all ${
                              idx === currentImageIndex ? "bg-white w-8" : "bg-white/50"
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  )
}
