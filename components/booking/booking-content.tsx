"use client"

import React from "react"

import { useState } from "react"
import { useSearchParams } from "next/navigation"
import { trips, bikes, stays } from "@/lib/data"
import { ScrollReveal } from "@/components/scroll-reveal"
import { motion, AnimatePresence } from "framer-motion"
import {
  IndianRupee,
  Calendar,
  Users,
  Bike,
  Car,
  Home,
  Map,
  Check,
  ArrowRight,
  Phone,
} from "lucide-react"

type BookingType = "trip" | "bike" | "stay" | "4x4" | ""

const bookingTypes = [
  { value: "trip" as BookingType, label: "Expedition", icon: Map },
  { value: "bike" as BookingType, label: "Bike Rental", icon: Bike },
  { value: "stay" as BookingType, label: "Stay", icon: Home },
  { value: "4x4" as BookingType, label: "4x4 / Luxury", icon: Car },
]

export function BookingContent() {
  const searchParams = useSearchParams()
  const preselectedType = (searchParams.get("type") || "") as BookingType
  const preselectedId = searchParams.get("id") || ""

  const [step, setStep] = useState(1)
  const [bookingType, setBookingType] = useState<BookingType>(preselectedType)
  const [selectedItem, setSelectedItem] = useState(preselectedId)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    startDate: "",
    endDate: "",
    riders: "1",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const selectedTrip = trips.find((t) => t.id === selectedItem)
  const selectedBike = bikes.find((b) => b.id === selectedItem)
  const selectedStay = stays.find((s) => s.id === selectedItem)

  function getItems() {
    if (bookingType === "trip") return trips.map((t) => ({ id: t.id, name: t.title, detail: t.duration, price: t.price }))
    if (bookingType === "bike") return bikes.map((b) => ({ id: b.id, name: b.model, detail: b.engine, price: b.dailyRate }))
    if (bookingType === "stay") return stays.map((s) => ({ id: s.id, name: s.name, detail: s.type, price: s.price }))
    return []
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  function goNext() {
    if (step < 3) setStep(step + 1)
  }

  function goBack() {
    if (step > 1) setStep(step - 1)
  }

  if (submitted) {
    return (
      <div className="noise-overlay flex min-h-screen items-center justify-center bg-charcoal px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex max-w-md flex-col items-center text-center"
        >
          <div className="flex h-20 w-20 items-center justify-center border-2 border-primary">
            <Check className="h-8 w-8 text-primary" />
          </div>
          <h2 className="mt-8 font-heading text-3xl uppercase tracking-wider text-foreground">
            Booking Request Sent
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            We have received your booking request. Our team will confirm
            availability and reach out within 24 hours with payment details and
            next steps.
          </p>
          <a
            href="tel:+919876543210"
            className="mt-6 flex items-center gap-2 text-sm text-primary transition-colors hover:text-foreground"
          >
            <Phone className="h-4 w-4" />
            Need it faster? Call us directly.
          </a>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="noise-overlay min-h-screen bg-charcoal px-6 pt-28 pb-24 lg:px-12">
      <div className="mx-auto max-w-3xl">
        <ScrollReveal>
          <h1 className="font-heading text-5xl font-bold uppercase tracking-wider text-foreground md:text-7xl">
            Book Now
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Select your adventure, pick your dates, and we will handle the rest.
          </p>
        </ScrollReveal>

        {/* Steps indicator */}
        <div className="mt-12 flex items-center gap-2">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center gap-2">
              <div
                className={`flex h-8 w-8 items-center justify-center font-heading text-sm transition-colors ${
                  step >= s
                    ? "border border-primary bg-primary/10 text-primary"
                    : "border border-border text-muted-foreground"
                }`}
              >
                {s}
              </div>
              {s < 3 && (
                <div
                  className={`h-px w-8 transition-colors md:w-16 ${
                    step > s ? "bg-primary" : "bg-border"
                  }`}
                />
              )}
            </div>
          ))}
          <span className="ml-4 text-xs uppercase tracking-wider text-muted-foreground">
            {step === 1 && "Choose Type"}
            {step === 2 && "Select & Dates"}
            {step === 3 && "Your Details"}
          </span>
        </div>

        <AnimatePresence mode="wait">
          {/* Step 1: Choose booking type */}
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="mt-10"
            >
              <h2 className="font-heading text-sm uppercase tracking-[0.3em] text-primary">
                What Are You Booking?
              </h2>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {bookingTypes.map((bt) => (
                  <button
                    key={bt.value}
                    type="button"
                    onClick={() => {
                      setBookingType(bt.value)
                      setSelectedItem("")
                    }}
                    className={`flex items-center gap-4 border p-6 text-left transition-colors ${
                      bookingType === bt.value
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <bt.icon
                      className={`h-6 w-6 ${
                        bookingType === bt.value
                          ? "text-primary"
                          : "text-muted-foreground"
                      }`}
                    />
                    <span
                      className={`font-heading text-base uppercase tracking-wider ${
                        bookingType === bt.value
                          ? "text-foreground"
                          : "text-muted-foreground"
                      }`}
                    >
                      {bt.label}
                    </span>
                  </button>
                ))}
              </div>

              <button
                type="button"
                disabled={!bookingType}
                onClick={goNext}
                className="mt-8 flex items-center gap-2 border border-primary bg-primary px-8 py-3 font-heading text-sm uppercase tracking-widest text-foreground transition-colors hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-40"
              >
                Continue
                <ArrowRight className="h-4 w-4" />
              </button>
            </motion.div>
          )}

          {/* Step 2: Select item + dates */}
          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="mt-10"
            >
              {bookingType === "4x4" ? (
                <div className="flex flex-col gap-4">
                  <h2 className="font-heading text-sm uppercase tracking-[0.3em] text-primary">
                    4x4 & Luxury Details
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    4x4 and luxury expeditions are custom-planned. Provide your
                    preferred dates and group size, and we will build a route for
                    you.
                  </p>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs uppercase tracking-wider text-muted-foreground">
                        Preferred Start Date
                      </label>
                      <input
                        type="date"
                        value={formData.startDate}
                        onChange={(e) =>
                          setFormData({ ...formData, startDate: e.target.value })
                        }
                        className="border border-border bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-primary"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs uppercase tracking-wider text-muted-foreground">
                        Group Size
                      </label>
                      <input
                        type="number"
                        min="1"
                        max="20"
                        value={formData.riders}
                        onChange={(e) =>
                          setFormData({ ...formData, riders: e.target.value })
                        }
                        className="border border-border bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-primary"
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col gap-6">
                  <h2 className="font-heading text-sm uppercase tracking-[0.3em] text-primary">
                    {bookingType === "trip" && "Select Expedition"}
                    {bookingType === "bike" && "Select Bike"}
                    {bookingType === "stay" && "Select Stay"}
                  </h2>

                  <div className="flex flex-col gap-3">
                    {getItems().map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setSelectedItem(item.id)}
                        className={`flex items-center justify-between border p-5 text-left transition-colors ${
                          selectedItem === item.id
                            ? "border-primary bg-primary/5"
                            : "border-border hover:border-primary/50"
                        }`}
                      >
                        <div>
                          <p
                            className={`font-heading text-sm uppercase tracking-wider ${
                              selectedItem === item.id
                                ? "text-foreground"
                                : "text-muted-foreground"
                            }`}
                          >
                            {item.name}
                          </p>
                          <p className="mt-0.5 text-xs text-muted-foreground">
                            {item.detail}
                          </p>
                        </div>
                        <span className="flex items-center font-heading text-sm text-primary">
                          <IndianRupee className="h-3 w-3" />
                          {item.price.toLocaleString("en-IN")}
                          {bookingType === "bike" && (
                            <span className="ml-0.5 text-xs text-muted-foreground">
                              /day
                            </span>
                          )}
                          {bookingType === "stay" && (
                            <span className="ml-0.5 text-xs text-muted-foreground">
                              /night
                            </span>
                          )}
                        </span>
                      </button>
                    ))}
                  </div>

                  {/* Dates */}
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs uppercase tracking-wider text-muted-foreground">
                        <Calendar className="mr-1 inline h-3 w-3" />
                        {bookingType === "trip"
                          ? "Preferred Batch"
                          : "Start Date"}
                      </label>
                      <input
                        type="date"
                        value={formData.startDate}
                        onChange={(e) =>
                          setFormData({ ...formData, startDate: e.target.value })
                        }
                        className="border border-border bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-primary"
                      />
                    </div>
                    {bookingType !== "trip" && (
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs uppercase tracking-wider text-muted-foreground">
                          End Date
                        </label>
                        <input
                          type="date"
                          value={formData.endDate}
                          onChange={(e) =>
                            setFormData({ ...formData, endDate: e.target.value })
                          }
                          className="border border-border bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-primary"
                        />
                      </div>
                    )}
                  </div>

                  {/* Riders */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs uppercase tracking-wider text-muted-foreground">
                      <Users className="mr-1 inline h-3 w-3" />
                      {bookingType === "stay" ? "Guests" : "Riders"}
                    </label>
                    <input
                      type="number"
                      min="1"
                      max="20"
                      value={formData.riders}
                      onChange={(e) =>
                        setFormData({ ...formData, riders: e.target.value })
                      }
                      className="w-32 border border-border bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-primary"
                    />
                  </div>
                </div>
              )}

              <div className="mt-8 flex gap-4">
                <button
                  type="button"
                  onClick={goBack}
                  className="border border-border px-6 py-3 font-heading text-sm uppercase tracking-widest text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
                >
                  Back
                </button>
                <button
                  type="button"
                  disabled={bookingType !== "4x4" && !selectedItem}
                  onClick={goNext}
                  className="flex items-center gap-2 border border-primary bg-primary px-8 py-3 font-heading text-sm uppercase tracking-widest text-foreground transition-colors hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Continue
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </motion.div>
          )}

          {/* Step 3: Personal details */}
          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="mt-10"
            >
              <h2 className="font-heading text-sm uppercase tracking-[0.3em] text-primary">
                Your Details
              </h2>

              {/* Summary */}
              <div className="mt-6 border border-border bg-card p-5">
                <p className="text-xs uppercase tracking-wider text-muted-foreground">
                  Booking Summary
                </p>
                <div className="mt-2 flex flex-col gap-1">
                  <p className="font-heading text-sm uppercase tracking-wider text-foreground">
                    {bookingType === "trip" && selectedTrip?.title}
                    {bookingType === "bike" && selectedBike?.model}
                    {bookingType === "stay" && selectedStay?.name}
                    {bookingType === "4x4" && "4x4 / Luxury Expedition"}
                  </p>
                  {formData.startDate && (
                    <p className="text-xs text-muted-foreground">
                      Starting: {formData.startDate}
                      {formData.endDate && ` - ${formData.endDate}`}
                    </p>
                  )}
                  <p className="text-xs text-muted-foreground">
                    {formData.riders}{" "}
                    {bookingType === "stay" ? "guest(s)" : "rider(s)"}
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-5">
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="bk-name"
                    className="text-xs uppercase tracking-wider text-muted-foreground"
                  >
                    Full Name
                  </label>
                  <input
                    id="bk-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="border border-border bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-primary"
                    placeholder="Your full name"
                  />
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="bk-email"
                      className="text-xs uppercase tracking-wider text-muted-foreground"
                    >
                      Email
                    </label>
                    <input
                      id="bk-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="border border-border bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-primary"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="bk-phone"
                      className="text-xs uppercase tracking-wider text-muted-foreground"
                    >
                      Phone
                    </label>
                    <input
                      id="bk-phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="border border-border bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-primary"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="bk-message"
                    className="text-xs uppercase tracking-wider text-muted-foreground"
                  >
                    Additional Notes (optional)
                  </label>
                  <textarea
                    id="bk-message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="resize-none border border-border bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-primary"
                    placeholder="Dietary requirements, riding experience, special requests..."
                  />
                </div>

                <div className="mt-2 flex gap-4">
                  <button
                    type="button"
                    onClick={goBack}
                    className="border border-border px-6 py-3 font-heading text-sm uppercase tracking-widest text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="flex-1 border border-primary bg-primary py-4 font-heading text-sm uppercase tracking-widest text-foreground transition-colors hover:bg-primary/90"
                  >
                    Submit Booking Request
                  </button>
                </div>

                <p className="text-xs text-muted-foreground">
                  This is a booking request, not a confirmed reservation. Our team
                  will verify availability and contact you within 24 hours with
                  payment details.
                </p>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
