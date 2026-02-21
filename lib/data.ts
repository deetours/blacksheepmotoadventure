export interface Trip {
  id: string
  title: string
  region: string
  difficulty: "Moderate" | "Advanced" | "Extreme"
  duration: string
  days: number
  altitude: string
  price: number
  image: string
  description: string
  itinerary: { day: number; title: string; description: string; altitude?: string }[]
  inclusions: string[]
  exclusions: string[]
  bestFor: string[]
  faqs: { question: string; answer: string }[]
}

export interface Bike {
  id: string
  model: string
  engine: string
  type: string
  dailyRate: number
  weeklyRate: number
  deposit: number
  image: string
  specs: { label: string; value: string }[]
  features: string[]
}

export interface Stay {
  id: string
  name: string
  type: "Rider Dorm" | "Private Room" | "Basecamp"
  price: number
  image: string
  description: string
  amenities: string[]
}

export const trips: Trip[] = [
  {
    id: "leh-ladakh-expedition",
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
  },
  {
    id: "spiti-valley-circuit",
    title: "Spiti Valley Circuit",
    region: "Spiti",
    difficulty: "Advanced",
    duration: "9 Days / 8 Nights",
    days: 9,
    altitude: "15,060 ft",
    price: 24999,
    image: "/images/spiti.jpg",
    description:
      "Ride through one of the most remote and beautiful valleys in the Himalayas. Ancient monasteries, tribal villages, and landscapes that look like another planet.",
    itinerary: [
      { day: 1, title: "Manali - Arrival & Briefing", description: "Arrive in Manali. Expedition briefing, bike allocation, and gear check.", altitude: "6,726 ft" },
      { day: 2, title: "Manali to Chatru", description: "Ride through Rohtang Pass into the rugged terrain of Lahaul. Camp at Chatru under the stars.", altitude: "11,024 ft" },
      { day: 3, title: "Chatru to Chandratal", description: "Ride to the mythical Moon Lake. One of the most beautiful high-altitude lakes in India.", altitude: "14,100 ft" },
      { day: 4, title: "Chandratal to Kaza", description: "Enter the heart of Spiti. Ride through Kunzum La pass into the tribal capital of Kaza.", altitude: "12,500 ft" },
      { day: 5, title: "Kaza - Key & Kibber", description: "Visit Key Monastery and ride to Kibber, one of the highest inhabited villages in the world.", altitude: "14,200 ft" },
      { day: 6, title: "Kaza to Tabo", description: "Ride through the dramatic Spiti gorge to the ancient Tabo Monastery, a UNESCO World Heritage site.", altitude: "10,760 ft" },
      { day: 7, title: "Tabo to Kalpa", description: "Exit Spiti Valley and enter Kinnaur. Views of the Kinnaur Kailash range are otherworldly.", altitude: "9,711 ft" },
      { day: 8, title: "Kalpa to Shimla", description: "Ride along the old Hindustan-Tibet highway. Descend through apple orchards back to civilization.", altitude: "7,234 ft" },
      { day: 9, title: "Departure from Shimla", description: "Transfer to Shimla station or airport. End of expedition." },
    ],
    inclusions: [
      "Royal Enfield Himalayan 450 (fuel included)",
      "All accommodations (hotels & camps)",
      "Breakfast & dinner daily",
      "4x4 backup vehicle with mechanic",
      "First aid & oxygen cylinder",
      "Experienced road captain",
    ],
    exclusions: ["Lunch", "Personal expenses", "Riding gear rental", "Travel insurance"],
    bestFor: ["Culture enthusiasts", "Monastery seekers", "Off-road riders", "Photographers"],
    faqs: [
      { question: "Is this easier than Ladakh?", answer: "The terrain is similar but the distances are shorter. Still requires solid riding skills and comfort at altitude." },
      { question: "When is the best time?", answer: "June to September. The Rohtang route opens around mid-June and closes by late October." },
      { question: "Are the roads paved?", answer: "About 60% paved, 40% off-road. Some river crossings and rocky sections require experience." },
    ],
  },
  {
    id: "zanskar-frozen-river",
    title: "Zanskar Expedition",
    region: "Zanskar",
    difficulty: "Extreme",
    duration: "13 Days / 12 Nights",
    days: 13,
    altitude: "17,480 ft",
    price: 35999,
    image: "/images/zanskar.jpg",
    description:
      "The most challenging expedition we offer. Remote river crossings, zero-connectivity zones, and landscapes that will rewrite your definition of isolation. Only for the serious.",
    itinerary: [
      { day: 1, title: "Manali - Arrival", description: "Arrive, briefing, full bike inspection. This one requires extra preparation.", altitude: "6,726 ft" },
      { day: 2, title: "Manali to Jispa", description: "Warm-up ride through Rohtang Pass to Jispa.", altitude: "10,600 ft" },
      { day: 3, title: "Jispa to Darcha", description: "Short ride to Darcha. Prepare for the remote stretch ahead.", altitude: "11,066 ft" },
      { day: 4, title: "Darcha to Padum", description: "The epic day. Cross Shingo La and descend into the Zanskar valley. Expect river crossings.", altitude: "13,800 ft" },
      { day: 5, title: "Padum - Rest Day", description: "Explore the ancient town. Visit Karsha and Phugtal monasteries.", altitude: "12,500 ft" },
      { day: 6, title: "Padum to Rangdum", description: "Ride deeper into isolation. Rangdum monastery sits alone in a vast plain.", altitude: "13,300 ft" },
      { day: 7, title: "Rangdum to Kargil", description: "Cross Pensi La and ride through the dramatic Suru Valley to Kargil.", altitude: "8,780 ft" },
      { day: 8, title: "Kargil to Leh", description: "Ride through Lamayuru moonscapes and arrive in Leh.", altitude: "11,562 ft" },
      { day: 9, title: "Leh - Rest", description: "Recover in Leh. Optional monastery visit.", altitude: "11,562 ft" },
      { day: 10, title: "Leh to Nubra Valley", description: "Cross Khardung La to Nubra Valley.", altitude: "18,380 ft" },
      { day: 11, title: "Nubra to Pangong", description: "Ride to Pangong Lake via Shyok route.", altitude: "14,270 ft" },
      { day: 12, title: "Pangong to Leh", description: "Return ride via Chang La pass.", altitude: "17,480 ft" },
      { day: 13, title: "Departure", description: "End of the most extreme expedition we offer." },
    ],
    inclusions: [
      "Royal Enfield Himalayan 450 (fuel included)",
      "All accommodations (mix of hotels, homestays, camps)",
      "All meals in remote zones",
      "4x4 backup vehicle with full mechanic kit",
      "Satellite phone for emergencies",
      "First aid, oxygen, emergency med kit",
      "Inner line permits",
      "Two experienced road captains",
    ],
    exclusions: ["Lunch in towns", "Personal expenses", "Riding gear rental", "Travel insurance", "Airfare"],
    bestFor: ["Extreme adventure seekers", "Experienced off-road riders", "Those seeking true isolation", "Endurance riders"],
    faqs: [
      { question: "How extreme is this really?", answer: "This is our most challenging expedition. Multiple river crossings, zero-connectivity zones, and high altitude passes. Only for riders with significant experience." },
      { question: "What if there is a medical emergency?", answer: "We carry a satellite phone, comprehensive medical kit, and oxygen. Our road captains are trained in emergency response. Evacuation protocols are in place." },
    ],
  },
]

export const bikes: Bike[] = [
  {
    id: "re-himalayan-450",
    model: "Royal Enfield Himalayan 450",
    engine: "452cc Sherpa Single",
    type: "Adventure",
    dailyRate: 2500,
    weeklyRate: 14000,
    deposit: 15000,
    image: "/images/re-himalayan.jpg",
    specs: [
      { label: "Engine", value: "452cc Single Cylinder" },
      { label: "Power", value: "40 HP" },
      { label: "Torque", value: "40 Nm" },
      { label: "Weight", value: "196 kg" },
      { label: "Seat Height", value: "825 mm" },
      { label: "Fuel Tank", value: "17 litres" },
    ],
    features: ["Ride-by-wire", "Tripper Navigation", "Switchable ABS", "6-speed gearbox", "USD forks"],
  },
  {
    id: "re-classic-350",
    model: "Royal Enfield Classic 350",
    engine: "349cc J-Series Single",
    type: "Cruiser",
    dailyRate: 1500,
    weeklyRate: 8500,
    deposit: 10000,
    image: "/images/re-classic.jpg",
    specs: [
      { label: "Engine", value: "349cc Single Cylinder" },
      { label: "Power", value: "20.2 HP" },
      { label: "Torque", value: "27 Nm" },
      { label: "Weight", value: "195 kg" },
      { label: "Seat Height", value: "805 mm" },
      { label: "Fuel Tank", value: "13 litres" },
    ],
    features: ["Retro styling", "Dual channel ABS", "Comfortable for highways", "Easy handling", "Low maintenance"],
  },
  {
    id: "ktm-adventure-390",
    model: "KTM 390 Adventure",
    engine: "373cc Single",
    type: "Adventure",
    dailyRate: 3000,
    weeklyRate: 17500,
    deposit: 20000,
    image: "/images/ktm-adventure.jpg",
    specs: [
      { label: "Engine", value: "373cc Single Cylinder" },
      { label: "Power", value: "43 HP" },
      { label: "Torque", value: "37 Nm" },
      { label: "Weight", value: "177 kg" },
      { label: "Seat Height", value: "855 mm" },
      { label: "Fuel Tank", value: "14.5 litres" },
    ],
    features: ["WP APEX suspension", "Cornering ABS", "Lean-sensitive traction control", "TFT display", "Ride modes"],
  },
  {
    id: "re-himalayan-classic",
    model: "Royal Enfield Himalayan 411",
    engine: "411cc LS Single",
    type: "Adventure",
    dailyRate: 1800,
    weeklyRate: 10000,
    deposit: 12000,
    image: "/images/bike-closeup.jpg",
    specs: [
      { label: "Engine", value: "411cc Single Cylinder" },
      { label: "Power", value: "24.3 HP" },
      { label: "Torque", value: "32 Nm" },
      { label: "Weight", value: "199 kg" },
      { label: "Seat Height", value: "800 mm" },
      { label: "Fuel Tank", value: "15 litres" },
    ],
    features: ["Long stroke engine", "Tripper Navigation", "Switchable ABS", "Proven Himalayan performer", "Easy to maintain"],
  },
]

export const stays: Stay[] = [
  {
    id: "rider-dorm",
    name: "Rider Dormitory",
    type: "Rider Dorm",
    price: 500,
    image: "/images/rider-dorm.jpg",
    description:
      "Shared dormitory for riders. Clean beds, hot showers, secure parking for your bike. The common area is where stories are shared and routes are planned.",
    amenities: ["Hot water", "Secure bike parking", "Common lounge", "Wi-Fi", "Lockers", "Laundry service"],
  },
  {
    id: "private-mountain-room",
    name: "Private Mountain Room",
    type: "Private Room",
    price: 2500,
    image: "/images/private-room.jpg",
    description:
      "Private room with a view of the Himalayas. Wake up to mountain silence, step out onto your balcony, and breathe air that has touched no city.",
    amenities: ["Mountain view balcony", "Private bathroom", "Hot water", "Room heater", "Wi-Fi", "Breakfast included", "Secure parking"],
  },
  {
    id: "basecamp-stay",
    name: "Blacksheep Basecamp",
    type: "Basecamp",
    price: 1500,
    image: "/images/basecamp.jpg",
    description:
      "Our signature basecamp experience. Premium tents, campfire dinners, and star-gazing sessions. This is how expeditions begin.",
    amenities: ["Premium tents", "Campfire dinner", "Star gazing", "Hot water", "Secure parking", "Guided nature walks"],
  },
]

export const testimonials = [
  {
    name: "Arjun Mehta",
    location: "Mumbai",
    trip: "Leh Ladakh Expedition",
    quote: "I came to survive. I left transformed. Not one breakdown. Not one moment of doubt. Blacksheep doesn't operate expeditions. They lead revolutions on wheels.",
    rating: 5,
  },
  {
    name: "Sarah Chen",
    location: "Singapore",
    trip: "Spiti Valley Circuit",
    quote: "Ridden 23 countries. Spiti stripped me raw. This wasn't a tour. It was a test. And I passed because Blacksheep actually believes in earned riding.",
    rating: 5,
  },
  {
    name: "Vikram Patel",
    location: "Delhi",
    trip: "Zanskar Expedition",
    quote: "Zanskar broke me down to nothing. River crossings that felt like dying. Silence that screamed. Raman kept the machines perfect while I became perfect. Unfiltered doesn't cover it.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    location: "Bangalore",
    trip: "Leh Ladakh Expedition",
    quote: "Solo female rider. 18,000 feet. No compromises. They didn't baby me. They believed in me. That's the difference between a tour operator and Blacksheep.",
    rating: 5,
  },
]
