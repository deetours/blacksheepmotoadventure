"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Trip } from "@/hooks/use-supabase-trips"
import { testimonials } from "@/lib/data"
import {
  Mountain,
  Clock,
  TrendingUp,
  IndianRupee,
  Check,
  X,
  Star,
  ChevronDown,
} from "lucide-react"
import { useState } from "react"

interface TripDetailProps {
  trip: Trip
}

export function TripDetail({ trip }: TripDetailProps) {
  return (
    <div className="noise-overlay min-h-screen bg-charcoal">
      {/* Hero */}
      <section className="relative flex h-[70vh] items-end">
        <Image
          src={trip.image || "/placeholder.svg"}
          alt={trip.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent" />
        <div className="relative z-10 w-full px-6 pb-12 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-wrap items-end justify-between gap-6"
            >
              <div>
                <div className="mb-4 flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-1 border border-primary/40 bg-primary/10 px-3 py-1 font-heading text-xs uppercase tracking-wider text-primary">
                    <Mountain className="h-3 w-3" />
                    {trip.altitude}
                  </span>
                  <span className="inline-flex items-center gap-1 border border-border bg-card/50 px-3 py-1 font-heading text-xs uppercase tracking-wider text-foreground backdrop-blur-sm">
                    <TrendingUp className="h-3 w-3" />
                    {trip.difficulty}
                  </span>
                  <span className="inline-flex items-center gap-1 border border-border bg-card/50 px-3 py-1 font-heading text-xs uppercase tracking-wider text-foreground backdrop-blur-sm">
                    <Clock className="h-3 w-3" />
                    {trip.duration}
                  </span>
                </div>
                <h1 className="font-heading text-4xl font-bold uppercase tracking-wider text-foreground md:text-6xl">
                  {trip.title}
                </h1>
              </div>
              <div className="flex flex-col items-end gap-2">
                <span className="flex items-center font-heading text-3xl text-primary">
                  <IndianRupee className="h-6 w-6" />
                  {trip.price.toLocaleString("en-IN")}
                </span>
                <span className="text-xs text-muted-foreground">per person</span>
                <Link
                  href={`/booking?type=trip&id=${trip.id}`}
                  className="mt-2 border border-primary bg-primary px-8 py-3 font-heading text-sm uppercase tracking-widest text-foreground transition-colors hover:bg-primary/90"
                >
                  Book Expedition
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="px-6 py-16 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {trip.description}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Itinerary */}
      <section className="bg-background px-6 py-16 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <h2 className="font-heading text-sm uppercase tracking-[0.3em] text-primary">
              Day by Day
            </h2>
            <p className="mt-2 font-heading text-3xl uppercase tracking-wider text-foreground">
              The Route
            </p>
          </ScrollReveal>

          <div className="mt-12 flex flex-col gap-0">
            {trip.itinerary.map((day, i) => (
              <ItineraryDay key={day.day} day={day} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Inclusions / Exclusions */}
      <section className="px-6 py-16 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">
          <ScrollReveal>
            <h3 className="font-heading text-sm uppercase tracking-[0.3em] text-primary">
              What's Included
            </h3>
            <ul className="mt-6 flex flex-col gap-3">
              {trip.inclusions.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-foreground/80">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h3 className="font-heading text-sm uppercase tracking-[0.3em] text-muted-foreground">
              Not Included
            </h3>
            <ul className="mt-6 flex flex-col gap-3">
              {trip.exclusions.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-muted-foreground"
                >
                  <X className="mt-0.5 h-4 w-4 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </section>

      {/* Best For */}
      <section className="bg-background px-6 py-16 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <h3 className="font-heading text-sm uppercase tracking-[0.3em] text-primary">
              Who Is This For
            </h3>
            <div className="mt-6 flex flex-wrap gap-3">
              {trip.bestFor.map((item) => (
                <span
                  key={item}
                  className="border border-border px-5 py-2 font-heading text-xs uppercase tracking-wider text-foreground"
                >
                  {item}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 py-16 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <h3 className="font-heading text-sm uppercase tracking-[0.3em] text-primary">
              From The Road
            </h3>
          </ScrollReveal>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {testimonials
              .filter((t) => t.trip === trip.title)
              .slice(0, 2)
              .map((t, i) => (
                <ScrollReveal key={t.name} delay={i * 0.1}>
                  <div className="border border-border p-6">
                    <div className="flex gap-1">
                      {Array.from({ length: t.rating }).map((_, j) => (
                        <Star key={`star-${j}`} className="h-3 w-3 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-foreground/80">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <p className="mt-3 font-heading text-xs uppercase tracking-wider text-muted-foreground">
                      {t.name}, {t.location}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-background px-6 py-16 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <h3 className="font-heading text-sm uppercase tracking-[0.3em] text-primary">
              Questions
            </h3>
            <p className="mt-2 font-heading text-3xl uppercase tracking-wider text-foreground">
              FAQ
            </p>
          </ScrollReveal>
          <div className="mt-8 flex flex-col gap-0">
            {trip.faqs.map((faq, i) => (
              <FaqItem key={faq.question} faq={faq} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="flex flex-col items-center px-6 py-24 text-center lg:px-12">
        <ScrollReveal>
          <p className="font-serif text-2xl italic text-foreground/80 md:text-3xl">
            Ready for {trip.title}?
          </p>
          <Link
            href={`/booking?type=trip&id=${trip.id}`}
            className="mt-8 inline-block border border-primary bg-primary px-10 py-4 font-heading text-sm uppercase tracking-widest text-foreground transition-colors hover:bg-primary/90"
          >
            Book This Expedition
          </Link>
        </ScrollReveal>
      </section>
    </div>
  )
}

function ItineraryDay({
  day,
  index,
}: {
  day: { day: number; title: string; description: string; altitude?: string }
  index: number
}) {
  const [open, setOpen] = useState(index === 0)

  return (
    <ScrollReveal delay={index * 0.05}>
      <div className="border-b border-border">
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="flex w-full items-center justify-between py-6 text-left"
        >
          <div className="flex items-center gap-4">
            <span className="font-heading text-2xl text-primary">
              {String(day.day).padStart(2, "0")}
            </span>
            <span className="font-heading text-sm uppercase tracking-wider text-foreground md:text-base">
              {day.title}
            </span>
            {day.altitude && (
              <span className="hidden text-xs text-muted-foreground md:inline-flex">
                {day.altitude}
              </span>
            )}
          </div>
          <ChevronDown
            className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-300 ${open ? "rotate-180" : ""
              }`}
          />
        </button>
        <motion.div
          initial={false}
          animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <p className="pb-6 pl-14 text-sm leading-relaxed text-muted-foreground">
            {day.description}
          </p>
        </motion.div>
      </div>
    </ScrollReveal>
  )
}

function FaqItem({
  faq,
  index,
}: {
  faq: { question: string; answer: string }
  index: number
}) {
  const [open, setOpen] = useState(false)

  return (
    <ScrollReveal delay={index * 0.05}>
      <div className="border-b border-border">
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="flex w-full items-center justify-between py-5 text-left"
        >
          <span className="pr-4 text-sm text-foreground">{faq.question}</span>
          <ChevronDown
            className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-300 ${open ? "rotate-180" : ""
              }`}
          />
        </button>
        <motion.div
          initial={false}
          animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <p className="pb-5 text-sm leading-relaxed text-muted-foreground">
            {faq.answer}
          </p>
        </motion.div>
      </div>
    </ScrollReveal>
  )
}
