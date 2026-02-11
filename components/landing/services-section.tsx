"use client"

import Link from "next/link"
import Image from "next/image"
import { ScrollReveal } from "@/components/scroll-reveal"
import { motion } from "framer-motion"

const services = [
  {
    title: "Motorcycle Expeditions",
    description: "Guided group rides across the highest passes",
    image: "/images/expedition.jpg",
    href: "/trips",
  },
  {
    title: "Self Ride Rentals",
    description: "Well-maintained machines, your own route",
    image: "/images/self-ride.jpg",
    href: "/bikes",
  },
  {
    title: "4x4 Adventure Trails",
    description: "Command the terrain on four wheels",
    image: "/images/4x4-adventure.jpg",
    href: "/4x4-luxury",
  },
  {
    title: "Luxury Expeditions",
    description: "Premium stays, private routes, zero compromise",
    image: "/images/luxury-expedition.jpg",
    href: "/4x4-luxury",
  },
]

export function ServicesSection() {
  return (
    <section className="noise-overlay bg-charcoal px-6 py-24 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <h2 className="mb-4 font-heading text-sm uppercase tracking-[0.3em] text-primary">
            What We Do
          </h2>
        </ScrollReveal>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 0.1}>
              <Link href={service.href} className="group relative block aspect-[4/3] overflow-hidden">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-charcoal/50 transition-colors duration-500 group-hover:bg-charcoal/30" />
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <motion.div
                    initial={false}
                    className="transition-transform duration-500 group-hover:translate-y-[-4px]"
                  >
                    <h3 className="font-heading text-2xl uppercase tracking-wider text-foreground md:text-3xl">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm text-foreground/70">
                      {service.description}
                    </p>
                  </motion.div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
