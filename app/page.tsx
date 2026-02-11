import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/landing/hero-section"
import { PauseSection } from "@/components/landing/pause-section"
import { ServicesSection } from "@/components/landing/services-section"
import { ProofSection } from "@/components/landing/proof-section"
import { TerrainSection } from "@/components/landing/terrain-section"
import { TestimonialsSection } from "@/components/landing/testimonials-section"
import { CtaSection } from "@/components/landing/cta-section"

export default function Page() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <PauseSection />
      <ServicesSection />
      <ProofSection />
      <TerrainSection />
      <TestimonialsSection />
      <CtaSection />
      <Footer />
    </main>
  )
}
