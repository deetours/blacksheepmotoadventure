import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ContactContent } from "@/components/contact/contact-content"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact | Blacksheep Moto Adventure",
  description:
    "Get in touch with Blacksheep Moto Adventure. Based in Manali & Vashist. Call, email, or drop by.",
}

export default function ContactPage() {
  return (
    <main>
      <Navigation />
      <ContactContent />
      <Footer />
    </main>
  )
}
