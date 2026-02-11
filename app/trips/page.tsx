import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { TripsContent } from "@/components/trips/trips-content"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Expeditions | Blacksheep Moto Adventure",
  description:
    "Explore Himalayan motorcycle expeditions across Ladakh, Spiti, and Zanskar. Filter by region, difficulty, duration, and price.",
}

export default function TripsPage() {
  return (
    <main>
      <Navigation />
      <TripsContent />
      <Footer />
    </main>
  )
}
