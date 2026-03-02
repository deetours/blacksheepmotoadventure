"use client"

import Image from "next/image"
import Link from "next/link"
import { ScrollReveal } from "@/components/scroll-reveal"
import { motion } from "framer-motion"
import { Mountain, Wrench, Shield, Users, Map, Award, Heart, Compass } from "lucide-react"

const timeline = [
  {
    year: "2014",
    title: "First Ride",
    description:
      "Kshitiz made his first solo ride from Delhi to Leh on a beat-up Royal Enfield. Broke down twice. Fell in love with the mountains forever.",
  },
  {
    year: "2016",
    title: "Moved to Manali",
    description:
      "Left a corporate job in Delhi. Moved to Manali full-time. Started fixing bikes in a small garage in Vashist.",
  },
  {
    year: "2017",
    title: "Blacksheep Is Born",
    description:
      "First guided expedition to Ladakh with 6 riders. Zero breakdowns. Every rider came back different. The name stuck.",
  },
  {
    year: "2018",
    title: "Raman Joins",
    description:
      "Raman, a trained automobile engineer from Chandigarh, joins as lead mechanic. The fleet grows to 12 bikes.",
  },
  {
    year: "2020",
    title: "Survived The Pause",
    description:
      "The world stopped. We used the downtime to rebuild every engine, redesign every route, and plan the comeback.",
  },
  {
    year: "2022",
    title: "4x4 & Luxury Launch",
    description:
      "Expanded beyond motorcycles. Added 4x4 adventures and luxury expeditions. The mountains opened up to a wider audience.",
  },
  {
    year: "2024",
    title: "2000+ Riders",
    description:
      "Crossed the milestone. 2000 riders trusted Blacksheep with their Himalayan dream. Zero serious incidents. Not one rider left behind.",
  },
]

const values = [
  {
    icon: Shield,
    title: "Unfiltered",
    description:
      "No safe itineraries pretending to be wild. No Instagram checkpoints. No watered-down routes. You ride what we ride. Raw passes. Real altitude. Earned respect.",
  },
  {
    icon: Heart,
    title: "Earned",
    description:
      "Comfort is expensive. Growth is priceless. You don't coast through these mountains. You climb. You struggle. You become stronger. That's the trade.",
  },
  {
    icon: Users,
    title: "Brotherhood",
    description:
      "The mountains don't care who you are. The altitude strips titles and egos. Here, you're a rider. Your crew is sacred. No one gets left behind.",
  },
  {
    icon: Mountain,
    title: "Scarcity",
    description:
      "Some roads reject people. We respect that. Expeditions are limited. Routes are earned. Not everyone makes it. Those who do understand they survived something real.",
  },
]

export function AboutContent() {
  return (
    <div className="noise-overlay min-h-screen bg-charcoal">
      {/* Hero */}
      <section className="relative flex h-[70vh] items-end">
        <Image
          src="/images/team-riders.png"
          alt="Blacksheep team - Kshitiz and Raman"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent" />
        <div className="relative z-10 w-full px-6 pb-12 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="font-heading text-5xl font-bold uppercase tracking-widest text-foreground md:text-7xl">
                We Believe Roads Should Change People.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-foreground/70">
                This isn't our company. It's a movement. Built by people who refuse to accept that adventure has to be comfortable.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Origin story */}
      <section className="px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-start gap-16 lg:grid-cols-2">
            <ScrollReveal>
              <div className="flex flex-col gap-8">
                <div>
                  <h2 className="font-heading text-sm uppercase tracking-[0.3em] text-primary">
                    War Cry
                  </h2>
                  <h3 className="mt-6 font-heading text-5xl uppercase leading-tight tracking-wider text-foreground md:text-6xl">
                    We Are Not For Tourists.
                  </h3>
                </div>
                <p className="text-base leading-relaxed text-foreground/70 md:text-lg">
                  Blacksheep was never a business plan. It was a rebellion. Kshitiz quit the corporate machine, moved to Manali, and started riding the Himalayas obsessively. When other riders asked him to lead them through the same passes, he realized something: adventure tourism had turned mountains into instagram backdrops. He decided to flip the script.
                </p>
                <p className="text-base leading-relaxed text-foreground/70 md:text-lg">
                  Raman arrived next -- a trained engineer who rebuilds engines by ear and refuses to compromise on mechanical integrity. Together, they built something uncompromising: expeditions led by riders who actually live here, on machines that actually survive here.
                </p>
                <p className="text-base leading-relaxed text-foreground/70 md:text-lg">
                  Every person on a Blacksheep expedition is someone who strayed from the expected path. The safe job. The planned future. The comfort. They left it all for a motorcycle and a mountain road. We are the black sheep. And we ride unfiltered.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src="/images/workshop1.jpg"
                    alt="Blacksheep motorcycle workshop"
                    fill
                    className="object-cover"
                    sizes="25vw"
                  />
                </div>
                <div className="relative mt-12 aspect-[3/4] overflow-hidden">
                  <Image
                    src="/images/expedition.jpg"
                    alt="Motorcycle expedition on mountain road"
                    fill
                    className="object-cover"
                    sizes="25vw"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-background px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <h2 className="font-heading text-sm uppercase tracking-[0.3em] text-primary">
              Expedition Manifesto
            </h2>
            <p className="mt-6 max-w-2xl font-heading text-4xl uppercase leading-tight tracking-wider text-foreground md:text-5xl">
              The Four Pillars.
            </p>
          </ScrollReveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {values.map((value, i) => (
              <ScrollReveal key={value.title} delay={i * 0.1}>
                <div className="flex h-full flex-col border border-border p-8">
                  <value.icon className="h-6 w-6 text-primary" />
                  <h3 className="mt-4 font-heading text-lg uppercase tracking-wider text-foreground">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <h2 className="font-heading text-sm uppercase tracking-[0.3em] text-primary">
              Since 2014
            </h2>
            <p className="mt-6 max-w-2xl font-heading text-4xl uppercase leading-tight tracking-wider text-foreground md:text-5xl">
              The Climb.
            </p>
          </ScrollReveal>

          <div className="mt-12 flex flex-col gap-0">
            {timeline.map((item, i) => (
              <ScrollReveal key={item.year} delay={i * 0.05}>
                <div className="flex gap-6 border-b border-border py-8 md:gap-12">
                  <span className="shrink-0 font-heading text-3xl font-bold text-primary md:text-4xl">
                    {item.year}
                  </span>
                  <div>
                    <h3 className="font-heading text-base uppercase tracking-wider text-foreground md:text-lg">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-background px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-4">
            {[
              { icon: Mountain, value: "10+", label: "Years on the Road" },
              { icon: Users, value: "2000+", label: "Riders Trusted Us" },
              { icon: Map, value: "50+", label: "Routes Mapped" },
              { icon: Award, value: "0", label: "Riders Left Behind" },
            ].map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 0.1}>
                <div className="flex flex-col items-center text-center">
                  <stat.icon className="h-6 w-6 text-primary" />
                  <span className="mt-4 font-heading text-5xl font-bold text-foreground">
                    {stat.value}
                  </span>
                  <span className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">
                    {stat.label}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-charcoal px-6 py-32 text-center">
        <ScrollReveal>
          <p className="font-heading text-4xl uppercase leading-tight tracking-wider text-foreground md:text-6xl">
            You Know What You Want. The Question Is: Do You Have The Grit?
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Link
              href="/trips"
              className="border border-primary bg-primary/10 px-12 py-4 font-heading text-xs uppercase tracking-[0.3em] text-primary transition-all duration-500 hover:bg-primary hover:text-background"
            >
              Prove Yourself
            </Link>
            <Link
              href="/contact"
              className="border border-primary px-12 py-4 font-heading text-xs uppercase tracking-[0.3em] text-primary transition-colors hover:bg-primary/10"
            >
              Start The Conversation
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </div>
  )
}
