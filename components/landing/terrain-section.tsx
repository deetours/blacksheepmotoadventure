"use client"

import Image from "next/image"
import { ScrollReveal } from "@/components/scroll-reveal"

const terrainImages = [
  { src: "/images/ladakh.jpg", label: "Ladakh", alt: "Pangong Lake with motorcycle, turquoise waters and barren mountains" },
  { src: "/images/spiti.jpg", label: "Spiti", alt: "Winding road through Spiti Valley barren desert landscape" },
  { src: "/images/zanskar.jpg", label: "Zanskar", alt: "River crossing in Zanskar Valley, dramatic rocky gorge" },
]

export function TerrainSection() {
  return (
    <section className="noise-overlay bg-charcoal py-24">
      <ScrollReveal>
        <h2 className="mb-16 px-6 font-heading text-sm uppercase tracking-[0.3em] text-primary lg:px-12">
          The Terrain
        </h2>
      </ScrollReveal>

      <div className="flex flex-col gap-0">
        {terrainImages.map((img, i) => (
          <ScrollReveal key={img.label} delay={i * 0.15}>
            <div className="group relative h-[60vh] w-full overflow-hidden md:h-[70vh]">
              <Image
                src={img.src || "/placeholder.svg"}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-[1.2s] group-hover:scale-105"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-charcoal/30" />
              <div className="absolute bottom-8 left-6 lg:bottom-12 lg:left-12">
                <span className="font-heading text-4xl uppercase tracking-widest text-foreground md:text-6xl">
                  {img.label}
                </span>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
