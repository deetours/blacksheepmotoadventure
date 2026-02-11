"use client"

import { ScrollReveal } from "@/components/scroll-reveal"
import { testimonials } from "@/lib/data"
import { Star } from "lucide-react"

export function TestimonialsSection() {
  return (
    <section className="noise-overlay bg-background px-6 py-24 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <h2 className="font-heading text-sm uppercase tracking-[0.3em] text-primary">
            From The Road
          </h2>
        </ScrollReveal>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 0.1}>
              <div className="flex flex-col gap-4 border border-border p-8">
                <div className="flex gap-1">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star
                      key={`star-${t.name}-${j}`}
                      className="h-4 w-4 fill-primary text-primary"
                    />
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-foreground/80">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-auto">
                  <p className="font-heading text-sm uppercase tracking-wider text-foreground">
                    {t.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {t.location} &middot; {t.trip}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
