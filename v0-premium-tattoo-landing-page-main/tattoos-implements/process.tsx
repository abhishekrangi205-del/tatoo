"use client"

import { MessageSquare, Pencil, Sparkles } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel"

const steps = [
  {
    number: "01",
    title: "Consultation",
    description:
      "We begin with an in-depth conversation about your vision, placement preferences, and design ideas. This is your time to share references and discuss possibilities.",
    icon: MessageSquare,
  },
  {
    number: "02",
    title: "Design",
    description:
      "Your artist creates a custom design tailored specifically to you. We collaborate until every detail is exactly right, ensuring your vision comes to life.",
    icon: Pencil,
  },
  {
    number: "03",
    title: "Creation",
    description:
      "Using premium equipment and techniques, we bring your design to life in a comfortable, sterile environment. Your masterpiece becomes permanent.",
    icon: Sparkles,
  },
]

function StepCard({ step, index, showConnector = false }: { 
  step: typeof steps[0]
  index: number
  showConnector?: boolean 
}) {
  return (
    <div className="relative group h-full">
      {/* Connector Line (desktop only) */}
      {showConnector && index < steps.length - 1 && (
        <div className="hidden md:block absolute top-12 left-[60%] w-full h-px bg-border" />
      )}

      <div className="relative bg-background p-8 lg:p-10 transition-transform duration-300 group-hover:-translate-y-2 h-full">
        {/* Step Number */}
        <span className="text-primary/20 font-serif text-7xl absolute top-4 right-4">
          {step.number}
        </span>

        {/* Icon */}
        <div className="w-12 h-12 bg-primary/10 flex items-center justify-center mb-6">
          <step.icon className="w-6 h-6 text-primary" />
        </div>

        {/* Content */}
        <h3 className="font-serif text-2xl text-foreground mb-4">{step.title}</h3>
        <p className="text-muted-foreground leading-relaxed">{step.description}</p>
      </div>
    </div>
  )
}

export function Process() {
  return (
    <section id="process" className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary uppercase tracking-[0.3em] text-xs mb-4">
            How It Works
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground">
            Our Process
          </h2>
        </div>

        {/* Mobile Carousel - One at a time */}
        <div className="md:hidden">
          <Carousel opts={{ align: "center", loop: true }} className="w-full">
            <CarouselContent className="-ml-4">
              {steps.map((step, index) => (
                <CarouselItem key={step.number} className="pl-4 basis-full">
                  <StepCard step={step} index={index} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-4 mt-6">
              <CarouselPrevious className="static translate-y-0 bg-primary/10 border-primary/20 hover:bg-primary/20" />
              <CarouselNext className="static translate-y-0 bg-primary/10 border-primary/20 hover:bg-primary/20" />
            </div>
          </Carousel>
          <div className="flex justify-center gap-2 mt-4">
            {steps.map((step) => (
              <div key={step.number} className="w-2 h-2 rounded-full bg-primary/30" />
            ))}
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <StepCard key={step.number} step={step} index={index} showConnector />
          ))}
        </div>
      </div>
    </section>
  )
}
