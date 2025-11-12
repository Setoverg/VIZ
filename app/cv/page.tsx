import { CVPage } from "@/components/cv-page"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Alex Lekarev - CV | 3D Visualization Artist",
  description:
    "Professional CV of Alex Lekarev - Lead 3D Visualization Artist with over 12 years of experience in photorealistic rendering and architectural visualization.",
}

export default function CV() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <CVPage />
      <Footer />
    </main>
  )
}
