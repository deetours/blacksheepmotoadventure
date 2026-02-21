"use client"

import Link from "next/link"
import Image from "next/image"
import { ScrollReveal } from "@/components/scroll-reveal"
import { motion } from "framer-motion"

const services = [
  {
    title: "Road Captains, Not Tour Guides",
    description: "Forged by 10+ years in the Himalayas. Unfiltered riding with trust under pressure.",
    image: "/images/expedition.jpg",
    href: "/trips",
  },
  {
    title: "Machines That Survive The Mountain",
    description: "Altitude-tested, battle-worn, mechanically perfect. Confidence at 18,000 feet.",
    image: "/images/bike-closeup.jpg",
    href: "/bikes",
  },
  {
    title: "Routes That Aren't Designed For Comfort",
    description: "Raw passes, earned respect, zero handholding. This is the real expedition.",
    image: "/images/spiti.jpg",
    href: "/trips",
  },
  {
    title: "Backup That Actually Backs You",
    description: "Full-time mechanic, spare parts, oxygen, 4x4 support. Because at altitude, trust is not optional.",
    image: "/images/4x4-adventure.jpg",
    href: "/trips",
  },
]

export function ServicesSection() {
  return (
    <section className="noise-overlay bg-charcoal px-6 py-28 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <h2 className="font-heading text-sm uppercase tracking-[0.3em] text-primary">
            Expedition Riding
          </h2>
          <p className="mt-6 max-w-2xl font-heading text-4xl uppercase leading-tight tracking-wider text-foreground md:text-5xl">
            This Is Expedition Riding.
          </p>
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
