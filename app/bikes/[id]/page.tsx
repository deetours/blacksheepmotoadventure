import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { BikeDetail } from "@/components/bikes/bike-detail"
import { bikes } from "@/lib/data"
import { notFound } from "next/navigation"
import type { Metadata } from "next"

export function generateStaticParams() {
  return bikes.map((bike) => ({ id: bike.id }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}): Promise<Metadata> {
  const { id } = await params
  const bike = bikes.find((b) => b.id === id)
  if (!bike) return { title: "Bike Not Found" }
  return {
    title: `${bike.model} Rental | Blacksheep Moto Adventure`,
    description: `Rent the ${bike.model} in Manali. ${bike.engine} engine, daily rate INR ${bike.dailyRate}.`,
  }
}

export default async function BikeDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const bike = bikes.find((b) => b.id === id)
  if (!bike) notFound()

  return (
    <main>
      <Navigation />
      <BikeDetail bike={bike} />
      <Footer />
    </main>
  )
}
