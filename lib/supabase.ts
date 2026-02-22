import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ""
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""

// Only create the client if we have the required credentials
// This prevents build-time crashes on Netlify/CI if ENV vars aren't set yet
export const supabase = (supabaseUrl && supabaseAnonKey)
    ? createClient(supabaseUrl, supabaseAnonKey)
    : new Proxy({} as any, {
        get: () => {
            if (typeof window === "undefined") {
                console.warn("Supabase client called without NEXT_PUBLIC_SUPABASE_URL/KEY during build or server-side execution.")
            }
            return () => ({ from: () => ({ select: () => ({ eq: () => ({ single: () => Promise.resolve({ data: null, error: null }) }) }) }) })
        }
    })
