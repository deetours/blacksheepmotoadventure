import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AdminTripsManager } from "@/components/admin/admin-trips-manager"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Admin - Manage Trips",
  description: "Admin panel for managing Blacksheep trips",
}

export default function AdminPage() {
  return (
    <main>
      <Navigation />
      <div className="min-h-screen bg-charcoal px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-8 font-heading text-4xl uppercase tracking-wider text-foreground">Admin Panel</h1>
          <AdminTripsManager />
        </div>
      </div>
      <Footer />
    </main>
  )
}
