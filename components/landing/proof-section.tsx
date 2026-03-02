"use client"

import Image from "next/image"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Wrench, Shield, Mountain, Users } from "lucide-react"

const stats = [
  { icon: Mountain, value: "10+", label: "Years Unfiltered" },
  { icon: Users, value: "2000+", label: "Riders Transformed" },
  { icon: Wrench, value: "100%", label: "Machines Tested" },
  { icon: Shield, value: "4x4", label: "Backup That Shows Up" },
]

export function ProofSection() {
  return (
    <section className="noise-overlay bg-background px-6 py-24 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <h2 className="font-heading text-sm uppercase tracking-[0.3em] text-primary">
            Arsenal
          </h2>
          <p className="mt-6 max-w-2xl font-heading text-4xl uppercase leading-tight tracking-wider text-foreground md:text-5xl">
            Forged in the Himalayas. Earned, Not Given.
          </p>
        </ScrollReveal>

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2">
          {/* Images */}
          <ScrollReveal direction="left">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="/images/team-riders.png"
                  alt="Blacksheep team - Kshitiz and Raman"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <div className="relative mt-8 aspect-[3/4] overflow-hidden">
                <Image
                  src="/images/workshop1.jpg"
                  alt="Motorcycle workshop maintenance"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            </div>
          </ScrollReveal>

          {/* Content */}
          <ScrollReveal direction="right">
            <div className="flex flex-col gap-6">
              <p className="text-sm leading-relaxed text-foreground/70 md:text-base">
                Kshitiz &ldquo;Bantu&rdquo; has been riding these passes for 10+ years. Not as a tour operator. As a rider. Raman builds and maintains machines that survive what kills lesser bikes. Together, they didn't create a business. They created a movement.
              </p>
              <p className="text-sm leading-relaxed text-foreground/70 md:text-base">
                Every expedition has a full-time mechanic in a 4x4 backup vehicle. Spare parts. Oxygen. Real support. Not because we're nice. Because at 18,000 feet, trust isn't a feeling. It's a requirement.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-6">
                {stats.map((stat) => (
                  <div key={stat.label} className="flex flex-col gap-2">
                    <stat.icon className="h-5 w-5 text-primary" />
                    <span className="font-heading text-3xl font-bold text-foreground">
                      {stat.value}
                    </span>
                    <span className="text-xs uppercase tracking-wider text-muted-foreground">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
