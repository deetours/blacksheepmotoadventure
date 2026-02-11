"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ScrollReveal } from "@/components/scroll-reveal"
import type { Bike } from "@/lib/data"
import { IndianRupee, Check, Shield, Wrench } from "lucide-react"

export function BikeDetail({ bike }: { bike: Bike }) {
  return (
    <div className="noise-overlay min-h-screen bg-charcoal pt-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Hero */}
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={bike.image || "/placeholder.svg"}
                alt={bike.model}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <div>
              <span className="font-heading text-xs uppercase tracking-[0.3em] text-primary">
                {bike.type}
              </span>
              <h1 className="mt-2 font-heading text-4xl font-bold uppercase tracking-wider text-foreground md:text-5xl">
                {bike.model}
              </h1>
              <p className="mt-2 text-sm text-muted-foreground">{bike.engine}</p>
            </div>

            {/* Pricing */}
            <div className="flex gap-8">
              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-wider text-muted-foreground">
                  Daily
                </span>
                <span className="flex items-center font-heading text-2xl text-primary">
                  <IndianRupee className="h-5 w-5" />
                  {bike.dailyRate.toLocaleString("en-IN")}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-wider text-muted-foreground">
                  Weekly
                </span>
                <span className="flex items-center font-heading text-2xl text-foreground">
                  <IndianRupee className="h-5 w-5" />
                  {bike.weeklyRate.toLocaleString("en-IN")}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-wider text-muted-foreground">
                  Deposit
                </span>
                <span className="flex items-center font-heading text-2xl text-muted-foreground">
                  <IndianRupee className="h-5 w-5" />
                  {bike.deposit.toLocaleString("en-IN")}
                </span>
              </div>
            </div>

            <Link
              href={`/booking?type=bike&id=${bike.id}`}
              className="mt-2 w-fit border border-primary bg-primary px-10 py-4 font-heading text-sm uppercase tracking-widest text-foreground transition-colors hover:bg-primary/90"
            >
              Book This Bike
            </Link>
          </motion.div>
        </div>

        {/* Specs */}
        <section className="mt-20">
          <ScrollReveal>
            <h2 className="font-heading text-sm uppercase tracking-[0.3em] text-primary">
              Specifications
            </h2>
          </ScrollReveal>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {bike.specs.map((spec, i) => (
              <ScrollReveal key={spec.label} delay={i * 0.05}>
                <div className="border border-border p-5">
                  <span className="text-xs uppercase tracking-wider text-muted-foreground">
                    {spec.label}
                  </span>
                  <p className="mt-1 font-heading text-lg text-foreground">
                    {spec.value}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Features */}
        <section className="mt-16">
          <ScrollReveal>
            <h2 className="font-heading text-sm uppercase tracking-[0.3em] text-primary">
              Features
            </h2>
          </ScrollReveal>
          <div className="mt-6 flex flex-wrap gap-3">
            {bike.features.map((feature, i) => (
              <ScrollReveal key={feature} delay={i * 0.05}>
                <span className="inline-flex items-center gap-2 border border-border px-4 py-2 text-sm text-foreground">
                  <Check className="h-3 w-3 text-primary" />
                  {feature}
                </span>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Safety & Insurance */}
        <section className="mt-16 pb-24">
          <ScrollReveal>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="border border-border p-8">
                <Shield className="h-6 w-6 text-primary" />
                <h3 className="mt-4 font-heading text-sm uppercase tracking-[0.2em] text-foreground">
                  Insurance & Safety
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Basic third-party insurance included with every rental. Comprehensive insurance 
                  covering accidental damage available at an additional cost. Helmets and basic 
                  riding gear included free of charge.
                </p>
              </div>
              <div className="border border-border p-8">
                <Wrench className="h-6 w-6 text-primary" />
                <h3 className="mt-4 font-heading text-sm uppercase tracking-[0.2em] text-foreground">
                  Mechanical Guarantee
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Every bike undergoes a 47-point inspection before rental. Engine, brakes, tyres, 
                  chain, electricals - all verified by our lead engineer Raman. 24/7 roadside 
                  assistance within Manali region included.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </section>
      </div>
    </div>
  )
}
