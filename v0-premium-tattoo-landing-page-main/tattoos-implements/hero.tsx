"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex">
      {/* Left Content Panel */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 md:px-12 lg:px-16 py-32 lg:py-0 bg-background lg:bg-background bg-transparent relative z-10">
        <div className="max-w-lg">
          <p className="text-primary uppercase tracking-[0.3em] text-xs mb-6">
            Studio 613 Electric Tattoo Co
          </p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-tight mb-6 text-balance">
            Where Art
            <br />
            <span className="text-primary">Meets Skin</span>
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-md">
            Transforming visions into permanent masterpieces. Our world-class
            artists specialize in fine line, traditional, and custom designs
            tailored to your story.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 uppercase tracking-widest text-xs px-8 py-6"
            >
              <Link href="#booking">Book Consultation</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-border text-foreground hover:bg-secondary hover:text-foreground uppercase tracking-widest text-xs px-8 py-6"
            >
              <Link href="#portfolio">View Portfolio</Link>
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-6 md:left-12 lg:left-16 flex items-center gap-3 text-muted-foreground">
          <ArrowDown size={16} className="animate-bounce" />
          <span className="text-xs uppercase tracking-widest">Scroll to explore</span>
        </div>
      </div>

      {/* Right Image Panel */}
      <div className="hidden lg:block w-1/2 relative">
        <Image
          src="/images/hero-tattoo.jpg"
          alt="Tattoo artist at work"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-background/20" />
      </div>

      {/* Mobile Background Image - More Visible */}
      <div className="lg:hidden absolute inset-0 z-0">
        <Image
          src="/images/hero-tattoo.jpg"
          alt="Tattoo artist at work"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/70" />
      </div>
    </section>
  )
}
