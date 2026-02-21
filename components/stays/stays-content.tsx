"use client"

import Image from "next/image"
import Link from "next/link"
import { stays } from "@/lib/data"
import { ScrollReveal } from "@/components/scroll-reveal"
import { motion } from "framer-motion"
import { IndianRupee, Check, Wifi, Droplets, Car, Flame, MapPin } from "lucide-react"

const amenityIcons: Record<string, typeof Wifi> = {
  "Wi-Fi": Wifi,
  "Hot water": Droplets,
  "Secure bike parking": Car,
  "Secure parking": Car,
  "Campfire dinner": Flame,
}

export function StaysContent() {
  return (
    <div className="noise-overlay min-h-screen bg-charcoal px-6 pt-28 pb-24 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <h1 className="font-heading text-5xl font-bold uppercase tracking-widest text-foreground md:text-7xl">
            Pick Your Basecamp.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-foreground/70">
            Between the road and the mountains. Close to our workshop. Where riders sleep, eat, and become brothers. Not luxury. Real.
          </p>
        </ScrollReveal>

        {/* Location Note */}
        <ScrollReveal delay={0.15}>
          <div className="mt-12 flex items-start gap-3 border border-border p-6">
            <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
            <div>
              <p className="font-heading text-sm uppercase tracking-wider text-foreground">
                Old Manali Road, Vashist
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                All our stays are located in and around Vashist village -- walking
                distance to hot springs, cafes, and the Blacksheep garage.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Stay Cards */}
        <div className="mt-16 flex flex-col gap-16">
          {stays.map((stay, i) => (
            <ScrollReveal key={stay.id} delay={i * 0.1}>
              <div className="grid gap-8 border border-border lg:grid-cols-2">
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto lg:min-h-[400px]">
                  <Image
                    src={stay.image || "/placeholder.svg"}
                    alt={stay.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute top-4 left-4 bg-charcoal/80 px-3 py-1 font-heading text-xs uppercase tracking-wider text-primary backdrop-blur-sm">
                    {stay.type}
                  </div>
                </div>

                {/* Details */}
                <div className="flex flex-col justify-between p-8">
                  <div>
                    <h2 className="font-heading text-2xl uppercase tracking-wider text-foreground md:text-3xl">
                      {stay.name}
                    </h2>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                      {stay.description}
                    </p>

                    {/* Amenities */}
                    <div className="mt-8">
                      <h3 className="font-heading text-xs uppercase tracking-[0.3em] text-primary">
                        Amenities
                      </h3>
                      <div className="mt-4 flex flex-wrap gap-3">
                        {stay.amenities.map((amenity) => (
                          <span
                            key={amenity}
                            className="inline-flex items-center gap-2 border border-border px-3 py-1.5 text-xs text-foreground/80"
                          >
                            <Check className="h-3 w-3 text-primary" />
                            {amenity}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Price & CTA */}
                  <div className="mt-8 flex items-end justify-between">
                    <div>
                      <span className="text-xs uppercase tracking-wider text-muted-foreground">
                        From
                      </span>
                      <div className="flex items-center font-heading text-2xl text-primary">
                        <IndianRupee className="h-5 w-5" />
                        {stay.price.toLocaleString("en-IN")}
                        <span className="ml-1 text-sm text-muted-foreground">
                          /night
                        </span>
                      </div>
                    </div>
                    <Link
                      href={`/booking?type=stay&id=${stay.id}`}
                      className="border border-primary bg-primary px-6 py-3 font-heading text-xs uppercase tracking-widest text-foreground transition-colors hover:bg-primary/90"
                    >
                      Book Stay
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Additional Info */}
        <ScrollReveal delay={0.2}>
          <div className="mt-20 grid gap-6 md:grid-cols-3">
            <div className="border border-border p-6">
              <h3 className="font-heading text-xs uppercase tracking-[0.2em] text-foreground">
                Check-in
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                2:00 PM onwards. Early check-in subject to availability.
              </p>
            </div>
            <div className="border border-border p-6">
              <h3 className="font-heading text-xs uppercase tracking-[0.2em] text-foreground">
                Check-out
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                11:00 AM. Late checkout can be arranged for riders departing on
                expeditions.
              </p>
            </div>
            <div className="border border-border p-6">
              <h3 className="font-heading text-xs uppercase tracking-[0.2em] text-foreground">
                Cancellation
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Free cancellation up to 24 hours before check-in. Full refund
                processed within 5 business days.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  )
}
