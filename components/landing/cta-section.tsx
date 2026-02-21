"use client"

import Link from "next/link"
import { ScrollReveal } from "@/components/scroll-reveal"

export function CtaSection() {
  return (
    <section className="noise-overlay flex min-h-[70vh] flex-col items-center justify-center bg-background px-6 py-32">
      <ScrollReveal>
        <p className="max-w-2xl text-center font-heading text-4xl uppercase leading-tight tracking-wider text-foreground md:text-6xl">
          If You're Ready To Be Tested, We're Ready To Ride.
        </p>
      </ScrollReveal>
      <ScrollReveal delay={0.2}>
        <p className="mt-8 text-center font-serif text-lg italic leading-relaxed text-foreground/60">
          You don't book this. You survive it.
        </p>
      </ScrollReveal>
      <ScrollReveal delay={0.4}>
        <Link
          href="/trips"
          className="mt-12 inline-block border border-primary bg-primary/10 px-12 py-4 font-heading text-xs uppercase tracking-[0.3em] text-primary transition-all duration-500 hover:bg-primary hover:text-background"
        >
          Check Expeditions
        </Link>
      </ScrollReveal>
    </section>
  )
}
