import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { LuxuryContent } from "@/components/luxury/luxury-content"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "4x4 & Luxury Expeditions | Blacksheep Moto Adventure",
  description:
    "Premium 4x4 adventure trails and luxury Himalayan expeditions. Private routes, personal drivers, premium stays.",
}

export default function LuxuryPage() {
  return (
    <main>
      <Navigation />
      <LuxuryContent />
      <Footer />
    </main>
  )
}
