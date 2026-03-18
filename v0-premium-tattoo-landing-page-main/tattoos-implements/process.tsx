"use client"

import { MessageSquare, Pencil, Sparkles } from "lucide-react"

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

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative group"
            >
              {/* Connector Line (desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-full h-px bg-border" />
              )}

              <div className="relative bg-background p-8 lg:p-10 transition-transform duration-300 group-hover:-translate-y-2">
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
          ))}
        </div>
      </div>
    </section>
  )
}
