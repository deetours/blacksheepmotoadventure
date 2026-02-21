"use client"

import { useState } from "react"
import { useTrips, Trip } from "@/hooks/use-supabase-trips"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"

const LEH_LADAKH_TRIP: Omit<Trip, "id" | "created_at"> = {
  title: "Leh Ladakh Expedition",
  region: "Ladakh",
  difficulty: "Advanced",
  duration: "11 Days / 10 Nights",
  days: 11,
  altitude: "18,380 ft",
  price: 28999,
  image: "/images/ladakh.jpg",
  description:
    "The ultimate Himalayan motorcycle expedition. Ride through the highest motorable passes in the world, witness the surreal beauty of Pangong Lake, and push your limits across Khardung La and Chang La.",
  itinerary: [
    { day: 1, title: "Manali - Arrival & Briefing", description: "Arrive in Manali. Bike inspection, gear check, and expedition briefing at Blacksheep basecamp.", altitude: "6,726 ft" },
    { day: 2, title: "Manali to Jispa", description: "Ride through Rohtang Pass and descend into the Lahaul Valley. First taste of high altitude riding.", altitude: "10,600 ft" },
    { day: 3, title: "Jispa to Sarchu", description: "Cross Baralacha La pass. The landscape transforms from green valleys to barren moonscape.", altitude: "14,070 ft" },
    { day: 4, title: "Sarchu to Leh", description: "The big day. Cross Nakee La, Lachalung La, and the legendary Gata Loops. Arrive in Leh by evening.", altitude: "11,562 ft" },
    { day: 5, title: "Leh - Rest & Acclimatize", description: "Rest day in Leh. Explore the old town, visit Shanti Stupa, and let your body adjust to the altitude." },
    { day: 6, title: "Leh to Nubra Valley", description: "Ride over Khardung La - one of the highest motorable passes. Descend into the sand dunes of Nubra.", altitude: "18,380 ft" },
    { day: 7, title: "Nubra to Pangong Lake", description: "Ride through Shyok River valley to the ethereal Pangong Tso. Camp by the lake under a million stars.", altitude: "14,270 ft" },
    { day: 8, title: "Pangong to Hanle", description: "Ride to the remote Hanle village. Visit the Indian Astronomical Observatory. True isolation.", altitude: "14,764 ft" },
    { day: 9, title: "Hanle to Leh", description: "Return via Chumur and Upshi. Final stretch through dramatic river valleys back to Leh.", altitude: "11,562 ft" },
    { day: 10, title: "Leh - Free Day", description: "Explore Leh at your own pace. Visit monasteries, shop at the market, or simply rest." },
    { day: 11, title: "Departure", description: "Transfer to Leh airport or begin the return ride to Manali. End of expedition." },
  ],
  inclusions: [
    "Royal Enfield Himalayan 450 (fuel included)",
    "All accommodations (hotels & camps)",
    "Breakfast & dinner daily",
    "4x4 backup vehicle with mechanic",
    "First aid & oxygen cylinder",
    "Inner line permits",
    "Experienced road captain",
  ],
  exclusions: ["Lunch", "Personal expenses", "Riding gear rental", "Travel insurance", "Airfare"],
  bestFor: ["Experienced riders", "Adventure seekers", "Photography enthusiasts", "Those who want to conquer the highest passes"],
  faqs: [
    { question: "Do I need a motorcycle license?", answer: "Yes, a valid motorcycle license is mandatory. We verify this during the briefing." },
    { question: "What about altitude sickness?", answer: "We build in acclimatization days. Our backup vehicle carries oxygen cylinders and first aid. Our road captain is trained in high-altitude emergency response." },
    { question: "Can beginners join?", answer: "This is an advanced expedition. We recommend at least 1 year of riding experience and comfort with off-road conditions." },
    { question: "What if my bike breaks down?", answer: "Our 4x4 backup vehicle follows the group with a full-time mechanic and spare parts. No rider is ever left stranded." },
  ],
}

const MANALI_SACH_PASS_TRIP: Omit<Trip, "id" | "created_at"> = {
  title: "Manali – Sach Pass – Manali Route",
  region: "Himachal Pradesh",
  difficulty: "Advanced",
  duration: "7 Days / 6 Nights",
  days: 7,
  altitude: "4,420 m",
  price: 18999,
  image: "/images/expedition.jpg",
  description:
    "Conquer the infamous Sach Pass, one of India's most adventurous mountain roads. Experience pristine Himalayan terrain, cross glacial rivers, and discover remote valleys untouched by mainstream tourism.",
  itinerary: [
    { day: 1, title: "Manali → Tandi", description: "Cross Atal Tunnel into Lahaul Valley. Ride along Chandra and Bhaga rivers. Visit Sissu Waterfall Viewpoint. Top up fuel here - last petrol pump before Chamba.", altitude: "2,570 m" },
    { day: 2, title: "Tandi → Udaipur → Killar", description: "Visit Trilokinath Temple & Mrikula Devi Temple. Ride along wild Chenab River through dense pine forests and cliffs.", altitude: "2,600 m" },
    { day: 3, title: "Killar → Sach Pass → Bairagarh", description: "Climb the infamous Sach Pass with stunning glacier views. Narrow trails, water crossings, and streams. One of the trip's highlights.", altitude: "4,420 m" },
    { day: 4, title: "Bairagarh → Chamba", description: "Descend from high alpine terrain to lush pine forests. Visit Chamera Lake viewpoint en route.", altitude: "996 m" },
    { day: 5, title: "Chamba → Khajjiar → Dalhousie", description: "Stop at Khajjiar, the 'Mini Switzerland of India.' Gentle scenic day for rest and recovery.", altitude: "1,970 m" },
    { day: 6, title: "Dalhousie → Jot Pass → Palampur", description: "Ride over Jot Pass with superb Himalayan views. Pass through tea estates and charming hill towns.", altitude: "2,400 m" },
    { day: 7, title: "Palampur → Mandi → Manali", description: "Visit Baijnath Temple. Ride alongside Beas River through green valleys. Return to Manali with unforgettable memories.", altitude: "2,050 m" },
  ],
  inclusions: [
    "Royal Enfield Himalayan 450 (fuel included)",
    "All accommodations (mid-range hotels)",
    "Breakfast & dinner daily",
    "4x4 backup vehicle",
    "Experienced road captain",
    "Route briefing and safety gear",
  ],
  exclusions: ["Lunch", "Personal expenses", "Travel insurance", "Airfare", "Bike rental insurance"],
  bestFor: ["Adventure enthusiasts", "Experienced riders", "Off-road enthusiasts", "Nature photographers"],
  faqs: [
    { question: "Is Sach Pass really that difficult?", answer: "Yes, Sach Pass (4,420m) is challenging with steep ascents, water crossings, and narrow trails. It's for experienced riders comfortable with off-road conditions." },
    { question: "What type of bike is required?", answer: "Dual-sport bikes with high ground clearance are ideal. We provide Royal Enfield Himalayan 450 which is perfect for this route." },
    { question: "When is the best time to ride?", answer: "Mid-July to Late September offers the best weather. Passes may be accessible from June, but weather can be unpredictable." },
    { question: "How many kilometers per day?", answer: "Average 100-150 km per day, with Day 3 (Sach Pass) being the most challenging. Riding time: 5-8 hours daily." },
  ],
}

export function AdminTripsManager() {
  const { addTrip, loading } = useTrips()
  const [isAdding, setIsAdding] = useState(false)

  const handleAddLehLadakh = async () => {
    try {
      setIsAdding(true)
      await addTrip(LEH_LADAKH_TRIP)
      toast.success("Leh Ladakh Expedition added!")
    } catch (error) {
      toast.error("Failed to add Leh Ladakh trip")
    } finally {
      setIsAdding(false)
    }
  }

  const handleAddManaliSachPass = async () => {
    try {
      setIsAdding(true)
      await addTrip(MANALI_SACH_PASS_TRIP)
      toast.success("Manali Sach Pass trip added!")
    } catch (error) {
      toast.error("Failed to add Manali Sach Pass trip")
    } finally {
      setIsAdding(false)
    }
  }

  return (
    <div className="rounded-lg border p-6">
      <h2 className="mb-4 font-heading text-2xl uppercase">Add Trips to Supabase</h2>
      <div className="flex gap-4">
        <Button onClick={handleAddLehLadakh} disabled={isAdding || loading} size="lg">
          {isAdding ? "Adding..." : "Add Leh Ladakh Expedition"}
        </Button>
        <Button onClick={handleAddManaliSachPass} disabled={isAdding || loading} size="lg" variant="outline">
          {isAdding ? "Adding..." : "Add Manali Sach Pass"}
        </Button>
      </div>
    </div>
  )
}
