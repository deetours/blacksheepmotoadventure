import React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Bebas_Neue, Playfair_Display } from "next/font/google"

import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  variable: "--font-bebas",
  weight: ["400"],
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  style: ["normal", "italic"],
})

export const metadata: Metadata = {
  title: "Blacksheep Expedition | Some Roads Don't Want You There.",
  description:
    "Unfiltered Himalayan motorcycle expeditions. Not for tourists. Road captains, altitude-tested machines, routes that demand respect. Ladakh, Spiti, Zanskar. Earned riding.",
  keywords: [
    "motorcycle expedition Himalayas",
    "Ladakh expedition ride",
    "hardcore adventure riding",
    "Spiti Valley expedition",
    "mountain motorcycle expedition India",
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
    <html lang="en" className={`${inter.variable} ${bebasNeue.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
