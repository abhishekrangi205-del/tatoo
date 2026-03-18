"use client"

import { useState } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel"

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
  {
    id: 7,
    image: "/images/portfolio-electric-1.jpg",
    title: "Lightning Pulse",
    category: "Electric",
    artist: "Marcus Chen",
  },
  {
    id: 8,
    image: "/images/portfolio-electric-2.jpg",
    title: "Cyber Guitar",
    category: "Electric",
    artist: "Elena Vasquez",
  },
  {
    id: 9,
    image: "/images/portfolio-electric-3.jpg",
    title: "Electric Phoenix",
    category: "Electric",
    artist: "Kai Nakamura",
  },
]

const categories = ["All", "Fine Line", "Traditional", "Japanese", "Blackwork", "Realism", "Electric"]

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

        {/* Category Filter - Horizontal Scroll on Mobile */}
        <div className="flex overflow-x-auto pb-4 mb-8 md:mb-12 gap-2 md:gap-3 md:flex-wrap md:justify-center md:overflow-visible scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 md:px-5 py-2 text-xs uppercase tracking-widest transition-all duration-300 whitespace-nowrap flex-shrink-0 ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Mobile Carousel Gallery */}
        <div className="md:hidden">
          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent className="-ml-3">
              {filteredItems.map((item) => (
                <CarouselItem key={item.id} className="pl-3 basis-[75%]">
                  <div
                    className="group relative overflow-hidden cursor-pointer"
                    onClick={() => setSelectedImage(item)}
                  >
                    <div className="relative aspect-[3/4]">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent flex flex-col justify-end p-4">
                        <h3 className="font-serif text-lg text-foreground mb-1">
                          {item.title}
                        </h3>
                        <p className="text-primary text-xs uppercase tracking-wider">
                          {item.category}
                        </p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-4 mt-6">
              <CarouselPrevious className="static translate-y-0 bg-primary/10 border-primary/20 hover:bg-primary/20" />
              <CarouselNext className="static translate-y-0 bg-primary/10 border-primary/20 hover:bg-primary/20" />
            </div>
          </Carousel>
          <p className="text-center text-muted-foreground text-xs mt-4">
            {filteredItems.length} {filteredItems.length === 1 ? 'piece' : 'pieces'} in {activeCategory}
          </p>
        </div>

        {/* Desktop Masonry Gallery */}
        <div className="hidden md:block columns-2 lg:columns-3 gap-4 space-y-4">
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
