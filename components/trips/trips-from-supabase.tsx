"use client"

import { useTrips } from "@/hooks/use-supabase-trips"
import { motion } from "framer-motion"
import { MapPin, Calendar, Zap, Mountain } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function TripsFromSupabase() {
  const { trips, loading, error } = useTrips()

  if (loading) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <p className="text-muted-foreground">Loading expeditions...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <p className="text-red-500">Error loading expeditions. Please try again later.</p>
      </div>
    )
  }

  if (trips.length === 0) {
    return (
      <div className="flex min-h-[400px] flex-col items-center justify-center gap-4">
        <p className="text-muted-foreground">No expeditions available yet.</p>
        <p className="text-sm text-muted-foreground">Check back soon for new adventures!</p>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {trips.map((trip, index) => (
        <motion.div
          key={trip.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="group overflow-hidden rounded-lg border border-border bg-card transition-all duration-300 hover:border-primary"
        >
          <div className="grid gap-6 md:grid-cols-2">
            {/* Image */}
            <div className="relative aspect-video overflow-hidden md:aspect-auto">
              <Image
                src={trip.image}
                alt={trip.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col justify-between p-6">
              <div>
                <div className="mb-2 inline-block rounded bg-primary/10 px-3 py-1 text-xs font-semibold uppercase text-primary">
                  {trip.region}
                </div>
                <h3 className="mb-2 font-heading text-2xl uppercase text-foreground">{trip.title}</h3>
                <p className="mb-4 line-clamp-2 text-sm text-muted-foreground">{trip.description}</p>
              </div>

              {/* Stats */}
              <div className="mb-6 grid grid-cols-2 gap-3">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-primary" />
                  <span className="text-sm font-semibold">{trip.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mountain className="h-4 w-4 text-primary" />
                  <span className="text-sm font-semibold">{trip.altitude}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-primary" />
                  <span className="text-sm font-semibold">{trip.difficulty}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="text-sm font-semibold">{trip.days} Days</span>
                </div>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between border-t border-border pt-4">
                <div>
                  <p className="text-xs text-muted-foreground">Starting from</p>
                  <p className="font-heading text-xl font-bold text-foreground">₹{trip.price.toLocaleString()}</p>
                </div>
                <Link href={`/trips/${trip.id}`}>
                  <button className="rounded border border-primary bg-primary px-6 py-2 text-sm font-semibold uppercase text-background transition-all duration-300 hover:bg-primary/90">
                    Book Expedition
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
