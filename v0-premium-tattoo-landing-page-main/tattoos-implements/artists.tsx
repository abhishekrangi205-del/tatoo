"use client"

import { useState } from "react"
import Image from "next/image"
import { Instagram } from "lucide-react"

const artists = [
  {
    id: 1,
    name: "Marcus Chen",
    specialty: "Fine Line & Geometric",
    image: "/images/artist-1.jpg",
    instagram: "@marcus.ink",
    bio: "15 years of precision artistry, specializing in delicate fine line work and sacred geometry.",
  },
  {
    id: 2,
    name: "Elena Vasquez",
    specialty: "Traditional & Neo-Traditional",
    image: "/images/artist-2.jpg",
    instagram: "@elena.tattoos",
    bio: "Award-winning artist bringing bold colors and classic designs to life with a modern twist.",
  },
  {
    id: 3,
    name: "Kai Nakamura",
    specialty: "Japanese & Blackwork",
    image: "/images/artist-3.jpg",
    instagram: "@kai.irezumi",
    bio: "Master of traditional Japanese techniques combined with contemporary blackwork aesthetics.",
  },
]

export function Artists() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section id="artists" className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary uppercase tracking-[0.3em] text-xs mb-4">
            Meet The Team
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground">
            Our Artists
          </h2>
        </div>

        {/* Artists Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {artists.map((artist) => (
            <div
              key={artist.id}
              className="group relative aspect-[3/4] overflow-hidden cursor-pointer"
              onMouseEnter={() => setHoveredId(artist.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <Image
                src={artist.image}
                alt={artist.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Default Overlay - Name */}
              <div
                className={`absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent flex flex-col justify-end p-6 transition-opacity duration-300 ${
                  hoveredId === artist.id ? "opacity-0" : "opacity-100"
                }`}
              >
                <h3 className="font-serif text-2xl text-foreground">{artist.name}</h3>
                <p className="text-primary text-sm uppercase tracking-wider mt-1">
                  {artist.specialty}
                </p>
              </div>

              {/* Hover Overlay - Full Info */}
              <div
                className={`absolute inset-0 bg-background/95 flex flex-col justify-center items-center p-8 text-center transition-all duration-300 ${
                  hoveredId === artist.id
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4 pointer-events-none"
                }`}
              >
                <h3 className="font-serif text-3xl text-foreground mb-2">{artist.name}</h3>
                <p className="text-primary text-sm uppercase tracking-wider mb-4">
                  {artist.specialty}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-xs">
                  {artist.bio}
                </p>
                <a
                  href={`https://instagram.com/${artist.instagram.replace("@", "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
                >
                  <Instagram size={18} />
                  <span className="text-sm">{artist.instagram}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
