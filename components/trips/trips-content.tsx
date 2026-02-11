"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { trips } from "@/lib/data"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Mountain, Clock, TrendingUp, IndianRupee } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const regions = ["All", "Ladakh", "Spiti", "Zanskar"]
const difficulties = ["All", "Moderate", "Advanced", "Extreme"]

export function TripsContent() {
  const [selectedRegion, setSelectedRegion] = useState("All")
  const [selectedDifficulty, setSelectedDifficulty] = useState("All")

  const filtered = trips.filter((trip) => {
    const regionMatch = selectedRegion === "All" || trip.region === selectedRegion
    const difficultyMatch =
      selectedDifficulty === "All" || trip.difficulty === selectedDifficulty
    return regionMatch && difficultyMatch
  })

  return (
    <div className="noise-overlay min-h-screen bg-charcoal px-6 pt-28 pb-24 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <h1 className="font-heading text-5xl font-bold uppercase tracking-wider text-foreground md:text-7xl">
            Expeditions
          </h1>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground">
            Choose your terrain. Each expedition is designed, tested, and led by riders who have crossed these passes hundreds of times.
          </p>
        </ScrollReveal>

        {/* Filters */}
        <ScrollReveal delay={0.2}>
          <div className="mt-12 flex flex-wrap gap-8">
            <div className="flex flex-col gap-2">
              <span className="text-xs uppercase tracking-widest text-muted-foreground">
                Region
              </span>
              <div className="flex flex-wrap gap-2">
                {regions.map((r) => (
                  <button
                    key={r}
                    type="button"
                    onClick={() => setSelectedRegion(r)}
                    className={`px-4 py-2 font-heading text-xs uppercase tracking-widest transition-colors ${
                      selectedRegion === r
                        ? "border border-primary bg-primary/10 text-primary"
                        : "border border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
                    }`}
                  >
                    {r}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-xs uppercase tracking-widest text-muted-foreground">
                Difficulty
              </span>
              <div className="flex flex-wrap gap-2">
                {difficulties.map((d) => (
                  <button
                    key={d}
                    type="button"
                    onClick={() => setSelectedDifficulty(d)}
                    className={`px-4 py-2 font-heading text-xs uppercase tracking-widest transition-colors ${
                      selectedDifficulty === d
                        ? "border border-primary bg-primary/10 text-primary"
                        : "border border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
                    }`}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Trip cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="wait">
            {filtered.map((trip, i) => (
              <motion.div
                key={trip.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <Link href={`/trips/${trip.id}`} className="group block overflow-hidden border border-border">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={trip.image || "/placeholder.svg"}
                      alt={trip.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-charcoal/20 transition-colors group-hover:bg-charcoal/0" />
                    <div className="absolute top-4 right-4 bg-charcoal/80 px-3 py-1 font-heading text-xs uppercase tracking-wider text-primary backdrop-blur-sm">
                      {trip.difficulty}
                    </div>
                  </div>
                  <div className="bg-card p-6">
                    <h3 className="font-heading text-xl uppercase tracking-wider text-foreground">
                      {trip.title}
                    </h3>
                    <div className="mt-4 flex flex-wrap gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Mountain className="h-3 w-3" />
                        {trip.altitude}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {trip.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <TrendingUp className="h-3 w-3" />
                        {trip.region}
                      </span>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="flex items-center font-heading text-lg text-primary">
                        <IndianRupee className="h-4 w-4" />
                        {trip.price.toLocaleString("en-IN")}
                      </span>
                      <span className="font-heading text-xs uppercase tracking-widest text-muted-foreground transition-colors group-hover:text-primary">
                        View Expedition
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <div className="mt-20 text-center">
            <p className="font-heading text-lg uppercase tracking-wider text-muted-foreground">
              No expeditions match your filters.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
