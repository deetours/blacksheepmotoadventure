import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { BookingContent } from "@/components/booking/booking-content"
import type { Metadata } from "next"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Book Now | Blacksheep Moto Adventure",
  description:
    "Book your Himalayan motorcycle expedition, bike rental, or 4x4 adventure with Blacksheep Moto Adventure.",
}

export default function BookingPage() {
  return (
    <main>
      <Navigation />
      <Suspense fallback={<div className="noise-overlay flex min-h-screen items-center justify-center bg-charcoal"><div className="text-foreground">Loading...</div></div>}>
        <BookingContent />
      </Suspense>
      <Footer />
    </main>
  )
}
