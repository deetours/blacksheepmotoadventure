import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AboutContent } from "@/components/about/about-content"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About | Blacksheep Moto Adventure",
  description:
    "The story of Blacksheep. Built by Kshitiz and Raman in Manali. 10+ years of Himalayan riding, 2000+ riders trusted.",
}

export default function AboutPage() {
  return (
    <main>
      <Navigation />
      <AboutContent />
      <Footer />
    </main>
  )
}
