"use client"

import React from "react"

import { useState } from "react"
import { ScrollReveal } from "@/components/scroll-reveal"
import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Clock, Instagram, MessageCircle, Send } from "lucide-react"

export function ContactContent() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="noise-overlay min-h-screen bg-charcoal px-6 pt-28 pb-24 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <h1 className="font-heading text-5xl font-bold uppercase tracking-wider text-foreground md:text-7xl">
            Contact
          </h1>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground">
            Questions about an expedition? Need a custom itinerary? Want to rent a
            bike? Drop us a message or just call.
          </p>
        </ScrollReveal>

        <div className="mt-16 grid gap-16 lg:grid-cols-2">
          {/* Contact Info */}
          <ScrollReveal>
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-6">
                <h2 className="font-heading text-sm uppercase tracking-[0.3em] text-primary">
                  Reach Us
                </h2>

                <a
                  href="tel:+919876543210"
                  className="group flex items-start gap-4 border border-border p-5 transition-colors hover:border-primary/50"
                >
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="font-heading text-sm uppercase tracking-wider text-foreground">
                      Phone
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground transition-colors group-hover:text-foreground">
                      +91 98765 43210
                    </p>
                    <p className="mt-0.5 text-xs text-muted-foreground">
                      WhatsApp available
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:ride@blacksheepmoto.com"
                  className="group flex items-start gap-4 border border-border p-5 transition-colors hover:border-primary/50"
                >
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="font-heading text-sm uppercase tracking-wider text-foreground">
                      Email
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground transition-colors group-hover:text-foreground">
                      ride@blacksheepmoto.com
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4 border border-border p-5">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="font-heading text-sm uppercase tracking-wider text-foreground">
                      Location
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Old Manali Road, Vashist
                      <br />
                      Manali, Himachal Pradesh 175103
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 border border-border p-5">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="font-heading text-sm uppercase tracking-wider text-foreground">
                      Hours
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Open Daily: 8:00 AM - 11:00 PM
                      <br />
                      Season: April - October
                    </p>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div className="flex flex-col gap-3">
                <h3 className="font-heading text-xs uppercase tracking-[0.3em] text-primary">
                  Follow Us
                </h3>
                <div className="flex gap-4">
                  <a
                    href="https://instagram.com/blacksheepmoto"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 border border-border px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
                  >
                    <Instagram className="h-4 w-4" />
                    Instagram
                  </a>
                  <a
                    href="https://wa.me/919876543210"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 border border-border px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
                  >
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Contact Form */}
          <ScrollReveal delay={0.2}>
            <div className="border border-border p-8">
              <h2 className="font-heading text-sm uppercase tracking-[0.3em] text-primary">
                Send A Message
              </h2>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-8 flex flex-col items-center py-12 text-center"
                >
                  <div className="flex h-16 w-16 items-center justify-center border border-primary">
                    <Send className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mt-6 font-heading text-xl uppercase tracking-wider text-foreground">
                    Message Sent
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    We will get back to you within 24 hours. Ride safe until then.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="name"
                      className="text-xs uppercase tracking-wider text-muted-foreground"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) =>
                        setFormState({ ...formState, name: e.target.value })
                      }
                      className="border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary"
                      placeholder="Your name"
                    />
                  </div>

                  <div className="grid gap-5 md:grid-cols-2">
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="email"
                        className="text-xs uppercase tracking-wider text-muted-foreground"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) =>
                          setFormState({ ...formState, email: e.target.value })
                        }
                        className="border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="phone"
                        className="text-xs uppercase tracking-wider text-muted-foreground"
                      >
                        Phone
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        value={formState.phone}
                        onChange={(e) =>
                          setFormState({ ...formState, phone: e.target.value })
                        }
                        className="border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="interest"
                      className="text-xs uppercase tracking-wider text-muted-foreground"
                    >
                      Interested In
                    </label>
                    <select
                      id="interest"
                      value={formState.interest}
                      onChange={(e) =>
                        setFormState({ ...formState, interest: e.target.value })
                      }
                      className="border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary"
                    >
                      <option value="">Select an option</option>
                      <option value="expedition">Motorcycle Expedition</option>
                      <option value="rental">Bike Rental</option>
                      <option value="4x4">4x4 Adventure</option>
                      <option value="luxury">Luxury Expedition</option>
                      <option value="stay">Stays</option>
                      <option value="custom">Custom Itinerary</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="message"
                      className="text-xs uppercase tracking-wider text-muted-foreground"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                      className="resize-none border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary"
                      placeholder="Tell us about your plans, group size, preferred dates..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="mt-2 w-full border border-primary bg-primary py-4 font-heading text-sm uppercase tracking-widest text-foreground transition-colors hover:bg-primary/90"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  )
}
