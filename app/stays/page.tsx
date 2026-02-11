import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { StaysContent } from "@/components/stays/stays-content"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Stays | Blacksheep Moto Adventure",
  description:
    "Rider dormitories, private mountain rooms, and expedition basecamps in Manali. Rest where the mountains begin.",
}

export default function StaysPage() {
  return (
    <main>
      <Navigation />
      <StaysContent />
      <Footer />
    </main>
  )
}
