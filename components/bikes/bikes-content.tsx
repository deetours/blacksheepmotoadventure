"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { bikes } from "@/lib/data"
import { ScrollReveal } from "@/components/scroll-reveal"
import { IndianRupee, Gauge, Fuel } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const types = ["All", "Adventure", "Cruiser"]

export function BikesContent() {
  const [selectedType, setSelectedType] = useState("All")

  const filtered = bikes.filter(
    (bike) => selectedType === "All" || bike.type === selectedType
  )

  return (
    <div className="noise-overlay min-h-screen bg-charcoal px-6 pt-28 pb-24 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <h1 className="font-heading text-5xl font-bold uppercase tracking-widest text-foreground md:text-7xl">
            Select Your Machine.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-foreground/70">
            Altitude-tested. Battle-worn. Mechanically perfect. Every machine survives what kills lesser bikes. Raman ensures it. You trust it.
          </p>
        </ScrollReveal>

        {/* Filter */}
        <ScrollReveal delay={0.2}>
          <div className="mt-12 flex flex-col gap-2">
            <span className="text-xs uppercase tracking-widest text-muted-foreground">
              Type
            </span>
            <div className="flex flex-wrap gap-2">
              {types.map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setSelectedType(t)}
                  className={`px-4 py-2 font-heading text-xs uppercase tracking-widest transition-colors ${
                    selectedType === t
                      ? "border border-primary bg-primary/10 text-primary"
                      : "border border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Bike cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <AnimatePresence mode="wait">
            {filtered.map((bike, i) => (
              <motion.div
                key={bike.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <Link
                  href={`/bikes/${bike.id}`}
                  className="group block overflow-hidden border border-border"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={bike.image || "/placeholder.svg"}
                      alt={bike.model}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-charcoal/20 transition-colors group-hover:bg-charcoal/0" />
                    <div className="absolute top-4 right-4 bg-charcoal/80 px-3 py-1 font-heading text-xs uppercase tracking-wider text-primary backdrop-blur-sm">
                      {bike.type}
                    </div>
                  </div>
                  <div className="bg-card p-6">
                    <h3 className="font-heading text-xl uppercase tracking-wider text-foreground">
                      {bike.model}
                    </h3>
                    <p className="mt-1 flex items-center gap-2 text-xs text-muted-foreground">
                      <Gauge className="h-3 w-3" />
                      {bike.engine}
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="flex items-center font-heading text-lg text-primary">
                          <IndianRupee className="h-4 w-4" />
                          {bike.dailyRate.toLocaleString("en-IN")}
                          <span className="ml-1 text-xs text-muted-foreground">/day</span>
                        </span>
                        <span className="flex items-center text-xs text-muted-foreground">
                          <IndianRupee className="h-3 w-3" />
                          {bike.weeklyRate.toLocaleString("en-IN")} /week
                        </span>
                      </div>
                      <span className="font-heading text-xs uppercase tracking-widest text-muted-foreground transition-colors group-hover:text-primary">
                        View Details
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Rental terms notice */}
        <ScrollReveal delay={0.3}>
          <div className="mt-16 border border-border p-8">
            <h3 className="font-heading text-sm uppercase tracking-[0.3em] text-primary">
              Rental Terms
            </h3>
            <div className="mt-4 grid gap-4 text-sm text-muted-foreground md:grid-cols-3">
              <div>
                <p className="font-heading text-xs uppercase tracking-wider text-foreground">
                  Documents Required
                </p>
                <p className="mt-1">Valid driving license, ID proof, security deposit</p>
              </div>
              <div>
                <p className="font-heading text-xs uppercase tracking-wider text-foreground">
                  Insurance
                </p>
                <p className="mt-1">Basic insurance included. Comprehensive cover available at extra cost.</p>
              </div>
              <div>
                <p className="font-heading text-xs uppercase tracking-wider text-foreground">
                  Cancellation
                </p>
                <p className="mt-1">Free cancellation up to 48 hours before pickup. 50% refund within 24 hours.</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  )
}
