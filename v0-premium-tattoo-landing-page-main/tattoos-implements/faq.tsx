"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "How do I prepare for my tattoo appointment?",
    answer:
      "Get a good night's sleep, eat a healthy meal beforehand, and stay hydrated. Avoid alcohol for at least 24 hours before your session. Wear comfortable clothing that allows easy access to the area being tattooed. Bring references or images if you haven't already shared them with your artist.",
  },
  {
    question: "What's your pricing structure?",
    answer:
      "Our pricing varies based on size, complexity, placement, and time required. Small pieces start at $150, while larger custom work is quoted during consultation. We require a non-refundable deposit of $100 to book your appointment, which goes toward your final total.",
  },
  {
    question: "How long does a tattoo session last?",
    answer:
      "Session length depends on the design complexity and your comfort level. Small pieces may take 1-2 hours, while larger work can require multiple sessions of 4-6 hours each. We'll discuss timing during your consultation to ensure we plan appropriately.",
  },
  {
    question: "What's the healing process like?",
    answer:
      "Initial healing takes 2-3 weeks, with complete healing in 4-6 weeks. We provide detailed aftercare instructions and premium aftercare products. Keep the area clean, moisturized, and protected from sun exposure. Avoid swimming and excessive sweating during initial healing.",
  },
  {
    question: "Do you do cover-ups or rework existing tattoos?",
    answer:
      "Yes, our artists are experienced in cover-ups and reworking old tattoos. Book a consultation so we can assess your existing tattoo and discuss the best approach. Not all tattoos can be covered with any design, so we'll work together to find the right solution.",
  },
  {
    question: "What's your cancellation policy?",
    answer:
      "We require 48 hours notice for cancellations or rescheduling. Late cancellations or no-shows will forfeit the deposit. We understand emergencies happen, so please communicate with us as soon as possible if something comes up.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-16 md:py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-16">
          <p className="text-primary uppercase tracking-[0.3em] text-xs mb-4">
            Common Questions
          </p>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-foreground">
            FAQ
          </h2>
        </div>

        {/* FAQ Accordion - Mobile Optimized */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3 md:space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-background border border-border px-4 md:px-6 rounded-none"
              >
                <AccordionTrigger className="text-left font-serif text-base md:text-lg hover:text-primary hover:no-underline py-4 md:py-6 gap-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm md:text-base leading-relaxed pb-4 md:pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
