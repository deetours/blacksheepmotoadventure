import { Suspense } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { TripDetail } from "@/components/trips/trip-detail-supabase"
import { supabase } from "@/lib/supabase"
import type { Metadata } from "next"

interface TripPageProps {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: TripPageProps): Promise<Metadata> {
  const { id } = await params
  const { data: trip } = await supabase.from("trips").select("*").eq("id", id).single()

  return {
    title: trip ? `${trip.title} | Blacksheep Moto Adventure` : "Trip Not Found",
    description: trip?.description || "Discover our motorcycle expeditions in the Himalayas",
  }
}

async function getTripData(id: string) {
  const { data, error } = await supabase.from("trips").select("*").eq("id", id).single()

  if (error || !data) {
    return null
  }

  return data
}

export default async function TripPage({ params }: TripPageProps) {
  const { id } = await params
  const trip = await getTripData(id)

  if (!trip) {
    return (
      <main>
        <Navigation />
        <div className="flex min-h-screen items-center justify-center bg-charcoal">
          <div className="text-center">
            <h1 className="mb-4 font-heading text-3xl uppercase text-foreground">Expedition Not Found</h1>
            <p className="text-muted-foreground">The expedition you're looking for doesn't exist.</p>
          </div>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-charcoal">
      <Navigation />
      <Suspense fallback={<div className="flex min-h-[50vh] items-center justify-center text-muted-foreground">Loading expedition details...</div>}>
        <TripDetail trip={trip} />
      </Suspense>
      <Footer />
    </main>
  )
}
