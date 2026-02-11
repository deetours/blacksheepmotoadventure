"use client"

import Link from "next/link"
import { ScrollReveal } from "@/components/scroll-reveal"

export function CtaSection() {
  return (
    <section className="noise-overlay flex min-h-[60vh] flex-col items-center justify-center bg-charcoal px-6 py-24">
      <ScrollReveal>
        <p className="max-w-lg text-center font-serif text-3xl italic leading-relaxed text-foreground/80 md:text-5xl">
          The mountains are waiting.
        </p>
      </ScrollReveal>
      <ScrollReveal delay={0.2}>
        <p className="mt-4 text-center font-heading text-lg uppercase tracking-widest text-muted-foreground">
          Choose your ride.
        </p>
      </ScrollReveal>
      <ScrollReveal delay={0.4}>
        <Link
          href="/trips"
          className="mt-10 inline-block border border-primary bg-primary/10 px-10 py-4 font-heading text-sm uppercase tracking-[0.2em] text-primary transition-all duration-500 hover:bg-primary hover:text-foreground"
        >
          Explore Trips
        </Link>
      </ScrollReveal>
    </section>
  )
}
