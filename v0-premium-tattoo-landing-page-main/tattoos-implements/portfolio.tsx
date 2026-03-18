"use client"

import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"

const portfolioItems = [
  {
    id: 1,
    image: "/images/portfolio-1.jpg",
    title: "Floral Geometry",
    category: "Fine Line",
    artist: "Marcus Chen",
  },
  {
    id: 2,
    image: "/images/portfolio-2.jpg",
    title: "American Traditional Sleeve",
    category: "Traditional",
    artist: "Elena Vasquez",
  },
  {
    id: 3,
    image: "/images/portfolio-3.jpg",
    title: "Minimalist Script",
    category: "Fine Line",
    artist: "Marcus Chen",
  },
  {
    id: 4,
    image: "/images/portfolio-4.jpg",
    title: "Koi Spirit",
    category: "Japanese",
    artist: "Kai Nakamura",
  },
  {
    id: 5,
    image: "/images/portfolio-5.jpg",
    title: "Sacred Mandala",
    category: "Blackwork",
    artist: "Kai Nakamura",
  },
  {
    id: 6,
    image: "/images/portfolio-6.jpg",
    title: "Portrait Realism",
    category: "Realism",
    artist: "Elena Vasquez",
  },
]

const categories = ["All", "Fine Line", "Traditional", "Japanese", "Blackwork", "Realism"]

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [selectedImage, setSelectedImage] = useState<typeof portfolioItems[0] | null>(null)

  const filteredItems =
    activeCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory)

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-primary uppercase tracking-[0.3em] text-xs mb-4">
            Our Work
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground">
            Portfolio
          </h2>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 text-xs uppercase tracking-widest transition-all duration-300 ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Masonry Gallery */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="break-inside-avoid group relative overflow-hidden cursor-pointer"
              onClick={() => setSelectedImage(item)}
            >
              <div
                className={`relative ${
                  index % 3 === 0
                    ? "aspect-[3/4]"
                    : index % 3 === 1
                    ? "aspect-square"
                    : "aspect-[4/3]"
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-background/0 group-hover:bg-background/60 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                    <h3 className="font-serif text-xl text-foreground mb-1">
                      {item.title}
                    </h3>
                    <p className="text-primary text-xs uppercase tracking-wider">
                      {item.category}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-background/95 z-50 flex items-center justify-center p-6"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-foreground hover:text-primary transition-colors"
            onClick={() => setSelectedImage(null)}
            aria-label="Close lightbox"
          >
            <X size={32} />
          </button>
          <div className="max-w-4xl max-h-[80vh] relative">
            <Image
              src={selectedImage.image}
              alt={selectedImage.title}
              width={800}
              height={1000}
              className="object-contain max-h-[70vh] w-auto"
            />
            <div className="text-center mt-6">
              <h3 className="font-serif text-2xl text-foreground">{selectedImage.title}</h3>
              <p className="text-primary text-sm uppercase tracking-wider mt-1">
                {selectedImage.category} by {selectedImage.artist}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
