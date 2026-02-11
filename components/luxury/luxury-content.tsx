"use client"

import Image from "next/image"
import Link from "next/link"
import { ScrollReveal } from "@/components/scroll-reveal"
import { motion } from "framer-motion"
import { Shield, MapPin, Crown, Car, Mountain, Star } from "lucide-react"

const offerings = [
  {
    icon: Car,
    title: "4x4 Adventure Trails",
    description:
      "Toyota Fortuner and Thar convoys through the most demanding terrain in the Himalayas. Professional drivers who know every switchback.",
    features: ["Experienced drivers", "Off-road rated vehicles", "Full support crew", "Custom routes available"],
  },
  {
    icon: Crown,
    title: "Luxury Expeditions",
    description:
      "Premium SUVs, handpicked stays, private itineraries. The Himalayan experience without the roughness. Comfort at altitude.",
    features: ["Premium accommodations", "Private chef", "Personal guide", "Flexible schedule"],
  },
  {
    icon: MapPin,
    title: "Custom Itineraries",
    description:
      "Tell us where you want to go. We will build the route, arrange the vehicles, book the stays, and handle every detail.",
    features: ["Fully customizable", "Corporate retreats", "Family friendly options", "Photography tours"],
  },
]

const routes = [
  {
    name: "Ladakh Luxury Circuit",
    duration: "8 Days",
    altitude: "18,380 ft",
    price: "From INR 75,000",
    description: "Leh, Nubra Valley, Pangong Lake in premium SUVs with luxury camping and hotel stays.",
  },
  {
    name: "Spiti Premium Explorer",
    duration: "7 Days",
    altitude: "15,060 ft",
    price: "From INR 60,000",
    description: "Chandratal, Kaza, Key Monastery. Boutique homestays and private dining experiences.",
  },
  {
    name: "Manali Off-Road Weekend",
    duration: "3 Days",
    altitude: "13,050 ft",
    price: "From INR 25,000",
    description: "Rohtang, Solang, and hidden trails around Manali. Perfect introduction to Himalayan off-roading.",
  },
]

export function LuxuryContent() {
  return (
    <div className="noise-overlay min-h-screen bg-charcoal">
      {/* Hero */}
      <section className="relative flex h-[70vh] items-end">
        <Image
          src="/images/luxury-expedition.jpg"
          alt="Luxury SUV convoy on Himalayan mountain road"
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
            >
              <h1 className="font-heading text-5xl font-bold uppercase tracking-wider text-foreground md:text-7xl">
                4x4 & Luxury
              </h1>
              <p className="mt-4 max-w-lg text-base leading-relaxed text-foreground/70">
                Not everyone rides. Some command the terrain differently.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Offerings */}
      <section className="px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-3">
            {offerings.map((offering, i) => (
              <ScrollReveal key={offering.title} delay={i * 0.1}>
                <div className="flex h-full flex-col border border-border p-8">
                  <offering.icon className="h-8 w-8 text-primary" />
                  <h3 className="mt-6 font-heading text-xl uppercase tracking-wider text-foreground">
                    {offering.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {offering.description}
                  </p>
                  <ul className="mt-6 flex flex-col gap-2">
                    {offering.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-xs text-foreground/70">
                        <Star className="h-3 w-3 text-primary" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Available Routes */}
      <section className="bg-background px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <h2 className="font-heading text-sm uppercase tracking-[0.3em] text-primary">
              Available Routes
            </h2>
            <p className="mt-2 font-heading text-3xl uppercase tracking-wider text-foreground">
              Choose Your Expedition
            </p>
          </ScrollReveal>

          <div className="mt-12 flex flex-col gap-6">
            {routes.map((route, i) => (
              <ScrollReveal key={route.name} delay={i * 0.1}>
                <div className="flex flex-col justify-between gap-6 border border-border p-8 md:flex-row md:items-center">
                  <div className="flex-1">
                    <h3 className="font-heading text-xl uppercase tracking-wider text-foreground">
                      {route.name}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">{route.description}</p>
                    <div className="mt-3 flex flex-wrap gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Mountain className="h-3 w-3" />
                        {route.altitude}
                      </span>
                      <span>{route.duration}</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-3">
                    <span className="font-heading text-lg text-primary">{route.price}</span>
                    <Link
                      href="/contact"
                      className="border border-primary px-6 py-2 font-heading text-xs uppercase tracking-widest text-primary transition-colors hover:bg-primary hover:text-foreground"
                    >
                      Enquire
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4x4 Gallery */}
      <section className="px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <h2 className="font-heading text-sm uppercase tracking-[0.3em] text-primary">
              The Experience
            </h2>
          </ScrollReveal>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <ScrollReveal>
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/4x4-adventure.jpg"
                  alt="4x4 vehicle on mountain trail"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/luxury-stay.jpg"
                  alt="Luxury mountain lodge interior"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="flex flex-col items-center px-6 py-24 text-center">
        <ScrollReveal>
          <p className="font-serif text-2xl italic text-foreground/80 md:text-3xl">
            Luxury meets altitude.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block border border-primary bg-primary px-10 py-4 font-heading text-sm uppercase tracking-widest text-foreground transition-colors hover:bg-primary/90"
          >
            Plan Your Expedition
          </Link>
        </ScrollReveal>
      </section>
    </div>
  )
}
