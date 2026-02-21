import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { BookingContent } from "@/components/booking/booking-content"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Book Now | Blacksheep Moto Adventure",
  description:
    "Book your Himalayan motorcycle expedition, bike rental, or 4x4 adventure with Blacksheep Moto Adventure.",
}

export default function BookingPage() {
  return (
    <main>
      <Navigation />
      <BookingContent />
      <Footer />
    </main>
  )
}
