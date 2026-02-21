"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X, Phone } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

const links = [
  { href: "/trips", label: "Trips" },
  { href: "/bikes", label: "Bikes" },
  { href: "/4x4-luxury", label: "4x4 & Luxury" },
  { href: "/stays", label: "Stays" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
]

export function Navigation() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="absolute inset-0 bg-charcoal/80 backdrop-blur-md" />
      <nav className="relative flex items-center justify-between px-6 py-4 lg:px-12">
        <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="font-heading text-2xl font-bold uppercase tracking-wider text-foreground">
            Blacksheep
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "font-heading text-sm uppercase tracking-widest transition-colors duration-300",
                pathname === link.href
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/booking"
            className="border border-primary bg-primary/10 px-6 py-2.5 font-heading text-xs uppercase tracking-[0.3em] text-primary transition-all duration-500 hover:bg-primary hover:text-background"
          >
            Commit
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="relative z-50 lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? (
            <X className="h-6 w-6 text-foreground" />
          ) : (
            <Menu className="h-6 w-6 text-foreground" />
          )}
        </button>

        {/* Mobile menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 top-0 z-40 flex flex-col items-center justify-center gap-8 bg-charcoal/98 lg:hidden"
            >
              {links.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "font-heading text-3xl uppercase tracking-widest transition-colors",
                      pathname === link.href
                        ? "text-primary"
                        : "text-foreground hover:text-primary"
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: links.length * 0.05, duration: 0.3 }}
              >
                <Link
                  href="/booking"
                  onClick={() => setOpen(false)}
                  className="mt-4 border border-primary bg-primary/10 px-8 py-3 font-heading text-lg uppercase tracking-widest text-primary transition-all duration-500 hover:bg-primary hover:text-background"
                >
                  Commit
                </Link>
              </motion.div>
              <motion.a
                href="tel:+919876543210"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-4 flex items-center gap-2 text-muted-foreground"
              >
                <Phone className="h-4 w-4" />
                <span className="font-sans text-sm">+91 98765 43210</span>
              </motion.a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
