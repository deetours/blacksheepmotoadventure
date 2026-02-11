import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { BikesContent } from "@/components/bikes/bikes-content"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Bike Rentals | Blacksheep Moto Adventure",
  description:
    "Rent well-maintained Royal Enfield, KTM, and adventure motorcycles in Manali. Daily and weekly rates with full mechanical inspection.",
}

export default function BikesPage() {
  return (
    <main>
      <Navigation />
      <BikesContent />
      <Footer />
    </main>
  )
}
