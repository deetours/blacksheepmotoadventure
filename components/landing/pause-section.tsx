"use client"

import { ScrollReveal } from "@/components/scroll-reveal"

export function PauseSection() {
  return (
    <section className="noise-overlay flex min-h-[70vh] items-center justify-center bg-background px-6 py-32">
      <ScrollReveal>
        <p className="max-w-3xl text-center font-serif text-2xl italic leading-relaxed text-foreground/70 md:text-5xl">
          You're not looking for a trip. <span className="text-foreground">You're looking for proof.</span>
        </p>
      </ScrollReveal>
    </section>
  )
}
