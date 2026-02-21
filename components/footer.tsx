import Link from "next/link"
import { MapPin, Phone, Mail, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-charcoal">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-12">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <span className="font-heading text-2xl font-bold uppercase tracking-wider text-foreground">
              Blacksheep
            </span>
            <p className="max-w-xs text-sm leading-relaxed text-foreground/70">
              Unfiltered Himalayan expeditions. Not for tourists. For those ready to be changed. Forged in the mountains. Earned through riding.
            </p>
          </div>

          {/* Explore */}
          <div className="flex flex-col gap-4">
            <h3 className="font-heading text-sm uppercase tracking-widest text-foreground">
              Explore
            </h3>
            <div className="flex flex-col gap-2">
              {[
                { href: "/trips", label: "Expeditions" },
                { href: "/bikes", label: "Bike Rentals" },
                { href: "/4x4-luxury", label: "4x4 & Luxury" },
                { href: "/stays", label: "Stays" },
                { href: "/about", label: "Our Story" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h3 className="font-heading text-sm uppercase tracking-widest text-foreground">
              Contact
            </h3>
            <div className="flex flex-col gap-3">
              <a
                href="tel:+919876543210"
                className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                <Phone className="h-4 w-4 shrink-0" />
                +91 98765 43210
              </a>
              <a
                href="mailto:ride@blacksheepmoto.com"
                className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                <Mail className="h-4 w-4 shrink-0" />
                ride@blacksheepmoto.com
              </a>
              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>Old Manali Road, Vashist, Manali, Himachal Pradesh 175103</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="flex flex-col gap-4">
            <h3 className="font-heading text-sm uppercase tracking-widest text-foreground">
              Hours
            </h3>
            <p className="text-sm text-muted-foreground">
              Open Daily<br />
              8:00 AM - 11:00 PM
            </p>
            <p className="text-sm text-muted-foreground">
              Season: April - October
            </p>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <Instagram className="h-4 w-4" />
              @blacksheepmoto
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center text-xs text-muted-foreground">
          <p>Blacksheep Moto Adventure. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
