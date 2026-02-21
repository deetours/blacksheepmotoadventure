"use client"

import { useState } from "react"
import { Trip } from "@/hooks/use-supabase-trips"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { MapPin, Mountain, Zap, Users, CheckCircle, ChevronRight } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

interface TripDetailProps {
  trip: Trip
}

export function TripDetail({ trip }: TripDetailProps) {
  const [tab, setTab] = useState("itinerary")

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="relative aspect-video overflow-hidden rounded-lg">
        <Image
          src={trip.image}
          alt={trip.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
          <div className="p-8">
            <div className="mb-4 inline-block rounded bg-primary/90 px-4 py-2 text-sm font-semibold uppercase text-background">
              {trip.region}
            </div>
            <h1 className="mb-2 font-heading text-4xl uppercase text-white">{trip.title}</h1>
            <p className="max-w-2xl text-lg text-gray-100">{trip.description}</p>
          </div>
        </div>
      </div>

      {/* Key Stats */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        <div className="rounded-lg border border-border bg-card p-6">
          <div className="mb-2 flex items-center gap-2">
            <Mountain className="h-5 w-5 text-primary" />
            <span className="text-xs uppercase text-muted-foreground">Altitude</span>
          </div>
          <p className="font-heading text-2xl font-bold">{trip.altitude}</p>
        </div>
        <div className="rounded-lg border border-border bg-card p-6">
          <div className="mb-2 flex items-center gap-2">
            <MapPin className="h-5 w-5 text-primary" />
            <span className="text-xs uppercase text-muted-foreground">Duration</span>
          </div>
          <p className="font-heading text-xl font-bold">{trip.duration}</p>
        </div>
        <div className="rounded-lg border border-border bg-card p-6">
          <div className="mb-2 flex items-center gap-2">
            <Zap className="h-5 w-5 text-primary" />
            <span className="text-xs uppercase text-muted-foreground">Difficulty</span>
          </div>
          <p className="font-heading text-xl font-bold">{trip.difficulty}</p>
        </div>
        <div className="rounded-lg border border-border bg-card p-6">
          <div className="mb-2 flex items-center gap-2">
            <Users className="h-5 w-5 text-primary" />
            <span className="text-xs uppercase text-muted-foreground">Group Size</span>
          </div>
          <p className="font-heading text-xl font-bold">4-8 Riders</p>
        </div>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="itinerary" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3 lg:w-auto">
          <TabsTrigger value=\"itinerary\">Itinerary</TabsTrigger>
          <TabsTrigger value=\"details\">Details</TabsTrigger>
          <TabsTrigger value=\"faqs\">FAQ</TabsTrigger>
        </TabsList>

        {/* Itinerary */}
        <TabsContent value=\"itinerary\" className=\"space-y-6\">
          <div className=\"grid gap-6\">
            {trip.itinerary.map((day, idx) => (
              <motion.div
                key={day.day}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                className=\"relative overflow-hidden rounded-lg border border-border bg-card p-6 hover:border-primary transition-colors\"
              >
                <div className=\"mb-4 flex items-start justify-between\">
                  <div>
                    <div className=\"mb-2 text-sm font-semibold uppercase text-primary\">Day {day.day}</div>
                    <h3 className=\"font-heading text-xl uppercase\">{day.title}</h3>
                  </div>
                  {day.altitude && (
                    <div className=\"text-right\">
                      <p className=\"text-xs text-muted-foreground\">Max Altitude</p>
                      <p className=\"font-heading text-lg font-bold\">{day.altitude}</p>
                    </div>
                  )}
                </div>
                <p className=\"text-sm text-muted-foreground\">{day.description}</p>
              </motion.div>
            ))}
          </div>
        </TabsContent>

        {/* Details */}
        <TabsContent value=\"details\" className=\"space-y-8\">
          <div className=\"grid gap-8 md:grid-cols-2\">
            {/* Inclusions */}
            <div>
              <h3 className=\"mb-4 font-heading text-lg uppercase\">What's Included</h3>
              <ul className=\"space-y-3\">
                {trip.inclusions.map((item, idx) => (
                  <li key={idx} className=\"flex gap-3\">
                    <CheckCircle className=\"h-5 w-5 flex-shrink-0 text-primary\" />
                    <span className=\"text-sm\">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Exclusions */}
            <div>
              <h3 className=\"mb-4 font-heading text-lg uppercase\">Not Included</h3>
              <ul className=\"space-y-3\">
                {trip.exclusions.map((item, idx) => (
                  <li key={idx} className=\"flex gap-3\">
                    <ChevronRight className=\"h-5 w-5 flex-shrink-0 text-muted-foreground\" />
                    <span className=\"text-sm\">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Best For */}
          <div>
            <h3 className=\"mb-4 font-heading text-lg uppercase\">Who Is This For</h3>
            <div className=\"flex flex-wrap gap-2\">
              {trip.bestFor.map((item, idx) => (
                <span key={idx} className=\"rounded-full border border-primary bg-primary/10 px-4 py-2 text-sm font-semibold text-primary\">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </TabsContent>

        {/* FAQ */}
        <TabsContent value=\"faqs\" className=\"space-y-4\">
          <Accordion type=\"single\" collapsible className=\"space-y-2\">
            {trip.faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`faq-${idx}`} className=\"border border-border rounded-lg px-4\">
                <AccordionTrigger className=\"py-4 text-base font-semibold hover:text-primary\">{faq.question}</AccordionTrigger>
                <AccordionContent className=\"pb-4 text-sm text-muted-foreground\">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </TabsContent>
      </Tabs>

      {/* CTA */}
      <div className=\"rounded-lg border-2 border-primary bg-primary/5 p-8 text-center\">
        <h2 className=\"mb-2 font-heading text-2xl uppercase\">Ready for this expedition?</h2>
        <p className=\"mb-6 text-muted-foreground\">Starting from ₹{trip.price.toLocaleString()} per person</p>
        <Button size=\"lg\" className=\"rounded\">
          Book This Expedition
        </Button>
      </div>
    </div>
  )
}
