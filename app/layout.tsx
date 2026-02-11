import React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Oswald, Playfair_Display } from "next/font/google"

import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  weight: ["400", "500", "600", "700"],
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  style: ["normal", "italic"],
})

export const metadata: Metadata = {
  title: "Blacksheep Moto Adventure | Ride The Altitude",
  description:
    "Himalayan motorcycle expeditions, bike rentals, 4x4 adventure tours, and luxury expeditions across Ladakh, Spiti, and Zanskar. Based in Manali.",
  keywords: [
    "Ladakh bike trip",
    "Manali motorcycle rental",
    "Himalayan expedition",
    "Spiti Valley ride",
    "adventure motorcycle India",
  ],
}

export const viewport: Viewport = {
  themeColor: "#0B0E11",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
