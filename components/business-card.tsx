"use client"

import Image from "next/image"
import { Instagram, Globe, ArrowUpRight } from "lucide-react"

const portfolioImages = [
  {
    src: "/images/work-living.jpg",
    alt: "Modern living room with exposed beams and elegant furnishings",
    label: "Interior Design",
  },
  {
    src: "/images/work-exterior.jpeg",
    alt: "Two-story blue house with multi-level deck in forest setting",
    label: "Exterior",
  },
  {
    src: "/images/work-bar.jpg",
    alt: "Upscale bar interior with dramatic chandelier lighting",
    label: "Commercial",
  },
  {
    src: "/images/work-bedroom.jpg",
    alt: "Rustic luxury bedroom with tufted headboard and wood paneling",
    label: "Residential",
  },
  {
    src: "/images/work-rustic.jpg",
    alt: "Grand rustic living room with high timber ceilings",
    label: "Living Space",
  },
]

export function BusinessCard() {
  return (
    <div className="min-h-screen bg-[#f7f5f2] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-[540px]">
        {/* Card Container */}
        <div className="bg-[#ffffff] rounded-2xl overflow-hidden shadow-[0_4px_40px_rgba(0,0,0,0.08)]">
          {/* Header with brand color */}
          <div className="bg-[#2c3631] px-8 pt-10 pb-8 flex flex-col items-center text-center">
            <div className="w-40 mb-5">
              <Image
                src="/images/logo.png"
                alt="toVIZy Studio Logo"
                width={400}
                height={160}
                className="w-full h-auto brightness-0 invert"
                priority
              />
            </div>
            <p className="text-[#a8b5a0] text-sm font-light tracking-widest uppercase">
              3D Visualization Studio
            </p>
          </div>

          {/* Team Photo */}
          <div className="px-6 -mt-6">
            <div className="relative w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-[#ffffff] shadow-lg">
              <Image
                src="/images/team.jpeg"
                alt="toVIZy Studio Team"
                fill
                className="object-cover object-top"
              />
            </div>
          </div>

          {/* Brief intro */}
          <div className="px-8 pt-4 pb-6 text-center">
            <p className="text-[#2c3631] text-sm leading-relaxed">
              Photorealistic 3D visualization for architecture, interiors & commercial spaces
            </p>
          </div>

          {/* Divider */}
          <div className="mx-8">
            <div className="h-px bg-[#e8e4df]" />
          </div>

          {/* Portfolio Grid */}
          <div className="px-6 py-6">
            <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#2c3631] mb-4 px-2">
              Selected Work
            </p>

            {/* Featured large image */}
            <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden mb-3">
              <Image
                src={portfolioImages[0].src}
                alt={portfolioImages[0].alt}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2c3631]/60 to-transparent" />
              <span className="absolute bottom-3 left-4 text-[#ffffff] text-xs font-medium">
                {portfolioImages[0].label}
              </span>
            </div>

            {/* 2x2 grid of smaller images */}
            <div className="grid grid-cols-2 gap-3">
              {portfolioImages.slice(1).map((img, index) => (
                <div
                  key={index}
                  className="relative aspect-[4/3] rounded-lg overflow-hidden group"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2c3631]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="absolute bottom-2 left-3 text-[#ffffff] text-[10px] font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {img.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="mx-8">
            <div className="h-px bg-[#e8e4df]" />
          </div>

          {/* Contact Links */}
          <div className="px-8 py-6 flex flex-col gap-3">
            <a
              href="https://tovizy.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[#2c3631] text-[#ffffff] hover:bg-[#3a4a43] transition-colors duration-300 group"
            >
              <Globe className="w-4 h-4 shrink-0" />
              <span className="text-sm font-medium flex-1">tovizy.com</span>
              <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
            </a>

            <a
              href="https://instagram.com/tovizystudio"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-3 rounded-xl border border-[#2c3631]/15 text-[#2c3631] hover:bg-[#2c3631]/5 transition-colors duration-300 group"
            >
              <Instagram className="w-4 h-4 shrink-0" />
              <span className="text-sm font-medium flex-1">@tovizystudio</span>
              <ArrowUpRight className="w-4 h-4 opacity-30 group-hover:opacity-70 transition-opacity" />
            </a>
          </div>

          {/* Footer */}
          <div className="bg-[#faf8f6] px-8 py-4 text-center">
            <p className="text-[10px] tracking-widest uppercase text-[#2c3631]/40">
              Crafted by light
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
