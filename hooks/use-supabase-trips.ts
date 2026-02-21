"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"

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
  itinerary: Array<{ day: number; title: string; description: string; altitude?: string }>
  inclusions: string[]
  exclusions: string[]
  bestFor: string[]
  faqs: Array<{ question: string; answer: string }>
  created_at?: string
}

export function useTrips() {
  const [trips, setTrips] = useState<Trip[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        setLoading(true)
        const { data, error } = await supabase.from("trips").select("*").order("created_at", { ascending: false })

        if (error) throw error
        setTrips(data || [])
      } catch (err) {
        setError(err instanceof Error ? err : new Error("Failed to fetch trips"))
      } finally {
        setLoading(false)
      }
    }

    fetchTrips()
  }, [])

  const addTrip = async (trip: Omit<Trip, "id" | "created_at">) => {
    try {
      const { data, error } = await supabase.from("trips").insert([trip]).select()

      if (error) throw error
      if (data) setTrips([data[0], ...trips])
      return data
    } catch (err) {
      setError(err instanceof Error ? err : new Error("Failed to add trip"))
      throw err
    }
  }

  const updateTrip = async (id: string, updates: Partial<Trip>) => {
    try {
      const { data, error } = await supabase
        .from("trips")
        .update(updates)
        .eq("id", id)
        .select()

      if (error) throw error
      if (data) {
        setTrips(trips.map((t) => (t.id === id ? data[0] : t)))
      }
      return data
    } catch (err) {
      setError(err instanceof Error ? err : new Error("Failed to update trip"))
      throw err
    }
  }

  const deleteTrip = async (id: string) => {
    try {
      const { error } = await supabase.from("trips").delete().eq("id", id)

      if (error) throw error
      setTrips(trips.filter((t) => t.id !== id))
    } catch (err) {
      setError(err instanceof Error ? err : new Error("Failed to delete trip"))
      throw err
    }
  }

  return { trips, loading, error, addTrip, updateTrip, deleteTrip }
}
