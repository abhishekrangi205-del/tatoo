"use client"

import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Instagram, Mail, MapPin, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer id="contact" className="bg-background border-t border-border">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand & Description */}
          <div className="lg:col-span-1">
            <Link href="/" className="text-2xl font-serif tracking-wider text-primary">
              STUDIO 613
            </Link>
            <p className="text-muted-foreground mt-4 leading-relaxed">
              Where art meets skin. Studio 613 Electric Tattoo Co - premium tattoo artistry,
              creating timeless electric pieces.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm uppercase tracking-widest text-foreground mb-6">
              Quick Links
            </h3>
            <nav className="flex flex-col gap-3">
              {[
                { href: "#artists", label: "Our Artists" },
                { href: "#portfolio", label: "Portfolio" },
                { href: "#process", label: "Our Process" },
                { href: "#booking", label: "Book Now" },
                { href: "#faq", label: "FAQ" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm uppercase tracking-widest text-foreground mb-6">
              Contact
            </h3>
            <div className="flex flex-col gap-4">
              <a
                href="tel:+15551234567"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4 text-primary" />
                +1 (555) 123-4567
              </a>
              <a
                href="mailto:hello@obsidianink.studio"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4 text-primary" />
                hello@studio613electric.com
              </a>
              <div className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary mt-1" />
                <span>
                  123 Artisan Avenue
                  <br />
                  Downtown Arts District
                  <br />
                  New York, NY 10012
                </span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm uppercase tracking-widest text-foreground mb-6">
              Stay Updated
            </h3>
            <p className="text-muted-foreground mb-4">
              Subscribe for exclusive flash events and artist spotlights.
            </p>
            <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
              <Input
                type="email"
                placeholder="your@email.com"
                className="bg-secondary border-border"
              />
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 uppercase tracking-widest text-xs">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="TikTok"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
              </svg>
            </a>
          </div>

          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} Studio 613 Electric Tattoo Co. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
