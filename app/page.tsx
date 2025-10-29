import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { ProcessSection } from "@/components/process-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { PricingSection } from "@/components/pricing-section"
import { ContactSection } from "@/components/contact-section"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ScrollNavigation } from "@/components/scroll-navigation"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProcessSection />
      <PortfolioSection />
      <TestimonialsSection />
      <PricingSection />
      <ContactSection />
      <Footer />
      <ScrollNavigation />
    </main>
  )
}
