import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { TripDetail } from "@/components/trips/trip-detail"
import { trips } from "@/lib/data"
import { notFound } from "next/navigation"
import type { Metadata } from "next"

export function generateStaticParams() {
  return trips.map((trip) => ({ id: trip.id }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}): Promise<Metadata> {
  const { id } = await params
  const trip = trips.find((t) => t.id === id)
  if (!trip) return { title: "Trip Not Found" }
  return {
    title: `${trip.title} | Blacksheep Moto Adventure`,
    description: trip.description,
  }
}

export default async function TripDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const trip = trips.find((t) => t.id === id)
  if (!trip) notFound()

  return (
    <main>
      <Navigation />
      <TripDetail trip={trip} />
      <Footer />
    </main>
  )
}
