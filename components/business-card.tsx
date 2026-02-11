"use client"

import Image from "next/image"
import { Instagram, Globe, Mail, Download } from "lucide-react"
import { useRef } from "react"

const portfolioImages = [
  {
    src: "/images/work-living.jpg",
    alt: "Modern living room with exposed beams and elegant furnishings",
    label: "Interior",
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
    label: "Bedroom",
  },
  {
    src: "/images/work-rustic.jpg",
    alt: "Grand rustic living room with high timber ceilings",
    label: "Living Space",
  },
]

export function BusinessCard() {
  const cardRef = useRef<HTMLDivElement>(null)

  const handleDownloadPDF = () => {
    window.print()
  }

  return (
    <div className="min-h-screen bg-[#f7f5f2] flex flex-col items-center justify-center px-4 py-10">
      {/* Download PDF button - hidden in print */}
      <div className="mb-6 print:hidden">
        <button
          onClick={handleDownloadPDF}
          className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[#2c3631] text-[#f7f5f2] hover:bg-[#3a4a43] transition-colors duration-300 font-sans text-sm font-medium cursor-pointer"
        >
          <Download className="w-4 h-4" />
          Download PDF
        </button>
      </div>

      {/* Card Container - Landscape */}
      <div
        ref={cardRef}
        id="business-card"
        className="w-full max-w-[960px] print:max-w-none print:w-full"
      >
        <div className="bg-[#ffffff] rounded-2xl overflow-hidden shadow-[0_4px_40px_rgba(0,0,0,0.08)] print:shadow-none print:rounded-none">
          {/* Top Row: Brand header + Team Photo + Contact */}
          <div className="flex">
            {/* Left: Dark brand panel */}
            <div className="bg-[#2c3631] w-[320px] shrink-0 flex flex-col items-center justify-center px-8 py-8">
              <div className="w-36 mb-4">
                <Image
                  src="/images/logo.png"
                  alt="toVIZy Studio Logo"
                  width={400}
                  height={160}
                  className="w-full h-auto brightness-0 invert"
                  priority
                />
              </div>
              <p className="text-[#a8b5a0] text-[11px] font-light tracking-[0.2em] uppercase text-center">
                3D Visualization Studio
              </p>

              {/* Team Photo */}
              <div className="mt-6 relative w-20 h-20 rounded-full overflow-hidden border-[3px] border-[#a8b5a0]/30">
                <Image
                  src="/images/team.jpeg"
                  alt="toVIZy Studio Team"
                  fill
                  className="object-cover object-top"
                />
              </div>

              <p className="mt-4 text-[#c8d4c0] text-[11px] leading-relaxed text-center max-w-[200px]">
                Photorealistic 3D visualization for architecture, interiors & commercial spaces
              </p>
            </div>

            {/* Right: Content area */}
            <div className="flex-1 flex flex-col">
              {/* Portfolio heading + Contact row */}
              <div className="flex items-center justify-between px-6 pt-5 pb-3">
                <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#2c3631]">
                  Selected Work
                </p>
                <div className="flex items-center gap-4">
                  <a
                    href="https://tovizy.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-[#2c3631] hover:text-[#4a5e53] transition-colors"
                  >
                    <Globe className="w-3.5 h-3.5" />
                    <span className="text-[11px] font-medium">tovizy.com</span>
                  </a>
                  <a
                    href="https://instagram.com/tovizystudio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-[#2c3631] hover:text-[#4a5e53] transition-colors"
                  >
                    <Instagram className="w-3.5 h-3.5" />
                    <span className="text-[11px] font-medium">@tovizystudio</span>
                  </a>
                  <a
                    href="mailto:contact@tovizy.com"
                    className="flex items-center gap-1.5 text-[#2c3631] hover:text-[#4a5e53] transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span className="text-[11px] font-medium">contact@tovizy.com</span>
                  </a>
                </div>
              </div>

              {/* Portfolio Grid - Horizontal layout */}
              <div className="px-6 pb-6 flex-1">
                {/* Top row: 1 large featured + 1 medium */}
                <div className="flex gap-3 mb-3">
                  <div className="relative flex-[3] aspect-[16/10] rounded-xl overflow-hidden group">
                    <Image
                      src={portfolioImages[0].src}
                      alt={portfolioImages[0].alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2c3631]/50 to-transparent" />
                    <span className="absolute bottom-2.5 left-3.5 text-[#ffffff] text-[10px] font-medium tracking-wide">
                      {portfolioImages[0].label}
                    </span>
                  </div>
                  <div className="relative flex-[2] aspect-[16/10] rounded-xl overflow-hidden group">
                    <Image
                      src={portfolioImages[1].src}
                      alt={portfolioImages[1].alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2c3631]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="absolute bottom-2.5 left-3.5 text-[#ffffff] text-[10px] font-medium tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {portfolioImages[1].label}
                    </span>
                  </div>
                </div>

                {/* Bottom row: 3 equal images */}
                <div className="flex gap-3">
                  {portfolioImages.slice(2).map((img, index) => (
                    <div
                      key={index}
                      className="relative flex-1 aspect-[4/3] rounded-lg overflow-hidden group"
                    >
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#2c3631]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <span className="absolute bottom-2 left-3 text-[#ffffff] text-[10px] font-medium tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {img.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom accent line */}
          <div className="h-1 bg-[#2c3631]" />
        </div>
      </div>
    </div>
  )
}
