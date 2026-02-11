"use client"

import { ScrollReveal } from "@/components/scroll-reveal"

export function PauseSection() {
  return (
    <section className="noise-overlay flex min-h-[50vh] items-center justify-center bg-charcoal px-6">
      <ScrollReveal>
        <p className="max-w-2xl text-center font-serif text-2xl italic leading-relaxed text-foreground/80 md:text-4xl">
          Some roads are not meant for tourists.
        </p>
      </ScrollReveal>
    </section>
  )
}
