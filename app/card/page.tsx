import type { Metadata } from "next"
import { BusinessCard } from "@/components/business-card"

export const metadata: Metadata = {
  title: "toVIZy Studio - Business Card",
  description:
    "Photorealistic 3D visualization for architecture, interiors & commercial spaces. Contact us at tovizy.com",
}

export default function CardPage() {
  return <BusinessCard />
}
