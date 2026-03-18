import { Navigation } from "@/tattoos-implements/navigation"
import { Hero } from "@/tattoos-implements/hero"
import { Artists } from "@/tattoos-implements/artists"
import { Portfolio } from "@/tattoos-implements/portfolio"
import { Process } from "@/tattoos-implements/process"
import { BookingCalendar } from "@/tattoos-implements/booking-calendar"
import { FAQ } from "@/tattoos-implements/faq"
import { Footer } from "@/tattoos-implements/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Artists />
      <Portfolio />
      <Process />
      <BookingCalendar />
      <FAQ />
      <Footer />
    </main>
  )
}
