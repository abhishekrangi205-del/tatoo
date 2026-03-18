"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Clock, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const artists = [
  { id: 1, name: "Marcus Chen", specialty: "Fine Line & Geometric" },
  { id: 2, name: "Elena Vasquez", specialty: "Traditional & Neo-Traditional" },
  { id: 3, name: "Kai Nakamura", specialty: "Japanese & Blackwork" },
]

const timeSlots = [
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
]

// Simulated availability - in production this would come from a database
const getAvailability = (artistId: number, date: Date) => {
  const dayOfWeek = date.getDay()
  // Artists are off on Sundays
  if (dayOfWeek === 0) return []
  
  // Different availability patterns per artist
  const seed = artistId + date.getDate()
  return timeSlots.filter((_, index) => (seed + index) % 3 !== 0)
}

export function BookingCalendar() {
  const [selectedArtist, setSelectedArtist] = useState<number | null>(null)
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [step, setStep] = useState<"artist" | "date" | "time" | "details" | "confirm">("artist")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    notes: "",
  })

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const daysInMonth = lastDay.getDate()
    const startingDay = firstDay.getDay()

    const days: (Date | null)[] = []
    for (let i = 0; i < startingDay; i++) {
      days.push(null)
    }
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(year, month, i))
    }
    return days
  }

  const isDateAvailable = (date: Date) => {
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    return date >= today && date.getDay() !== 0
  }

  const availableSlots =
    selectedArtist && selectedDate
      ? getAvailability(selectedArtist, selectedDate)
      : []

  const handleSubmit = () => {
    // In production, this would submit to an API
    setStep("confirm")
  }

  const resetBooking = () => {
    setSelectedArtist(null)
    setSelectedDate(null)
    setSelectedTime(null)
    setFormData({ name: "", email: "", phone: "", notes: "" })
    setStep("artist")
  }

  return (
    <section id="booking" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary uppercase tracking-[0.3em] text-xs mb-4">
            Schedule Your Session
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground">
            Book an Appointment
          </h2>
        </div>

        {/* Progress Indicator */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="flex justify-between">
            {["Artist", "Date", "Time", "Details"].map((label, index) => {
              const stepIndex = ["artist", "date", "time", "details"].indexOf(step)
              const isActive = index <= stepIndex
              const isCurrent = index === stepIndex
              return (
                <div key={label} className="flex flex-col items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-sm transition-colors ${
                      isActive
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-muted-foreground"
                    } ${isCurrent ? "ring-2 ring-primary ring-offset-2 ring-offset-background" : ""}`}
                  >
                    {index + 1}
                  </div>
                  <span
                    className={`mt-2 text-xs uppercase tracking-wider ${
                      isActive ? "text-foreground" : "text-muted-foreground"
                    }`}
                  >
                    {label}
                  </span>
                </div>
              )
            })}
          </div>
        </div>

        {/* Booking Steps */}
        <div className="max-w-4xl mx-auto">
          {/* Step 1: Select Artist */}
          {step === "artist" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {artists.map((artist) => (
                <button
                  key={artist.id}
                  onClick={() => {
                    setSelectedArtist(artist.id)
                    setStep("date")
                  }}
                  className={`p-6 border transition-all duration-300 text-left ${
                    selectedArtist === artist.id
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                      <User className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-serif text-lg text-foreground">{artist.name}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{artist.specialty}</p>
                </button>
              ))}
            </div>
          )}

          {/* Step 2: Select Date */}
          {step === "date" && (
            <div className="bg-secondary p-6 md:p-8">
              <div className="flex items-center justify-between mb-6">
                <button
                  onClick={() =>
                    setCurrentMonth(
                      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1)
                    )
                  }
                  className="p-2 hover:bg-background transition-colors"
                  aria-label="Previous month"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <h3 className="font-serif text-xl text-foreground">
                  {currentMonth.toLocaleDateString("en-US", {
                    month: "long",
                    year: "numeric",
                  })}
                </h3>
                <button
                  onClick={() =>
                    setCurrentMonth(
                      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1)
                    )
                  }
                  className="p-2 hover:bg-background transition-colors"
                  aria-label="Next month"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Day Headers */}
              <div className="grid grid-cols-7 gap-2 mb-2">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                  <div
                    key={day}
                    className="text-center text-xs uppercase tracking-wider text-muted-foreground py-2"
                  >
                    {day}
                  </div>
                ))}
              </div>

              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-2">
                {getDaysInMonth(currentMonth).map((date, index) => {
                  if (!date) {
                    return <div key={`empty-${index}`} />
                  }
                  const isAvailable = isDateAvailable(date)
                  const isSelected =
                    selectedDate?.toDateString() === date.toDateString()
                  return (
                    <button
                      key={date.toISOString()}
                      onClick={() => {
                        if (isAvailable) {
                          setSelectedDate(date)
                          setStep("time")
                        }
                      }}
                      disabled={!isAvailable}
                      className={`aspect-square flex items-center justify-center text-sm transition-all ${
                        isSelected
                          ? "bg-primary text-primary-foreground"
                          : isAvailable
                          ? "bg-background hover:bg-primary/10 text-foreground"
                          : "bg-transparent text-muted-foreground/50 cursor-not-allowed"
                      }`}
                    >
                      {date.getDate()}
                    </button>
                  )
                })}
              </div>

              <div className="flex justify-between mt-6">
                <Button
                  variant="outline"
                  onClick={() => setStep("artist")}
                  className="uppercase tracking-widest text-xs"
                >
                  Back
                </Button>
              </div>
            </div>
          )}

          {/* Step 3: Select Time */}
          {step === "time" && (
            <div className="bg-secondary p-6 md:p-8">
              <div className="mb-6">
                <p className="text-sm text-muted-foreground mb-1">Selected Date</p>
                <p className="font-serif text-xl text-foreground">
                  {selectedDate?.toLocaleDateString("en-US", {
                    weekday: "long",
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </p>
              </div>

              <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-4">
                Available Times
              </h3>

              {availableSlots.length > 0 ? (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {availableSlots.map((time) => (
                    <button
                      key={time}
                      onClick={() => {
                        setSelectedTime(time)
                        setStep("details")
                      }}
                      className={`p-4 border transition-all flex items-center justify-center gap-2 ${
                        selectedTime === time
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <Clock className="w-4 h-4 text-primary" />
                      <span className="text-sm">{time}</span>
                    </button>
                  ))}
                </div>
              ) : (
                <p className="text-muted-foreground text-center py-8">
                  No available slots for this date. Please select another date.
                </p>
              )}

              <div className="flex justify-between mt-6">
                <Button
                  variant="outline"
                  onClick={() => setStep("date")}
                  className="uppercase tracking-widest text-xs"
                >
                  Back
                </Button>
              </div>
            </div>
          )}

          {/* Step 4: Contact Details */}
          {step === "details" && (
            <div className="bg-secondary p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-background p-4">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                    Artist
                  </p>
                  <p className="font-serif text-lg text-foreground">
                    {artists.find((a) => a.id === selectedArtist)?.name}
                  </p>
                </div>
                <div className="bg-background p-4">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                    Date & Time
                  </p>
                  <p className="font-serif text-lg text-foreground">
                    {selectedDate?.toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })}{" "}
                    at {selectedTime}
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">
                    Your Name *
                  </label>
                  <Input
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    className="bg-background border-border"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">
                    Email *
                  </label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    className="bg-background border-border"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">
                    Phone
                  </label>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+1 (555) 000-0000"
                    className="bg-background border-border"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">
                    Tattoo Description / Reference Notes
                  </label>
                  <textarea
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Describe your tattoo idea, size, placement, or include any reference information..."
                    rows={4}
                    className="w-full bg-background border border-border px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
              </div>

              <div className="flex justify-between mt-6">
                <Button
                  variant="outline"
                  onClick={() => setStep("time")}
                  className="uppercase tracking-widest text-xs"
                >
                  Back
                </Button>
                <Button
                  onClick={handleSubmit}
                  disabled={!formData.name || !formData.email}
                  className="bg-primary text-primary-foreground hover:bg-primary/90 uppercase tracking-widest text-xs"
                >
                  Confirm Booking
                </Button>
              </div>
            </div>
          )}

          {/* Confirmation */}
          {step === "confirm" && (
            <div className="bg-secondary p-8 md:p-12 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="font-serif text-3xl text-foreground mb-4">
                Booking Confirmed
              </h3>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                Thank you, {formData.name}! Your appointment with{" "}
                {artists.find((a) => a.id === selectedArtist)?.name} has been scheduled for{" "}
                {selectedDate?.toLocaleDateString("en-US", {
                  weekday: "long",
                  month: "long",
                  day: "numeric",
                })}{" "}
                at {selectedTime}. A confirmation email has been sent to {formData.email}.
              </p>
              <Button
                onClick={resetBooking}
                className="bg-primary text-primary-foreground hover:bg-primary/90 uppercase tracking-widest text-xs"
              >
                Book Another Appointment
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
