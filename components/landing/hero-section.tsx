"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative flex h-screen items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-black.png"
          alt="Motorcycle on Himalayan mountain road at dawn"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/30 to-charcoal" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <p className="text-sm uppercase tracking-[0.3em] text-primary/80">Expedition</p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
          className="mt-6 font-heading text-5xl font-bold uppercase leading-none tracking-widest text-foreground md:text-7xl lg:text-8xl"
        >
          Some Roads
          <br />
          Don't Want
          <br />
          You There.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.0, ease: [0.25, 0.4, 0.25, 1] }}
          className="mt-8 font-heading text-lg uppercase tracking-[0.3em] text-primary md:text-xl"
        >
          Good. Neither do we.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="mt-8 max-w-md text-sm leading-relaxed text-foreground/70 md:text-base"
        >
          Unfiltered Himalayan motorcycle expeditions. Not for tourists. Not for comfort. For those who believe roads should change people.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.2 }}
        >
          <Link
            href="/trips"
            className="mt-12 inline-block border border-primary bg-primary/10 px-12 py-4 font-heading text-xs uppercase tracking-[0.3em] text-primary transition-all duration-500 hover:bg-primary hover:text-background"
          >
            Enter the Ride
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-6 w-6 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  )
}
