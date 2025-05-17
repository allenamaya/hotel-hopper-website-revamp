import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"

export function BookingSummary() {
  // Mock booking data
  const booking = {
    hotel: {
      name: "Grand Plaza Hotel",
      image: "/placeholder.svg?height=200&width=300",
      location: "New York, NY",
    },
    dates: {
      checkIn: "May 15, 2023",
      checkOut: "May 18, 2023",
      nights: 3,
    },
    guests: 2,
    room: "Deluxe King Room",
    price: {
      perNight: 299,
      subtotal: 897,
      taxes: 107.64,
      serviceFee: 25,
      total: 1029.64,
    },
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Booking Summary</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex gap-4">
          <div className="relative w-24 h-24 rounded-md overflow-hidden flex-shrink-0">
            <Image
              src={booking.hotel.image || "/placeholder.svg"}
              alt={booking.hotel.name}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="font-cal-sans font-semibold">{booking.hotel.name}</h3>
            <p className="text-sm text-muted-foreground">{booking.hotel.location}</p>
            <p className="text-sm mt-1">{booking.room}</p>
          </div>
        </div>

        <Separator />

        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="font-medium">Dates</span>
            <span>
              {booking.dates.checkIn} - {booking.dates.checkOut}
            </span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="font-medium">Guests</span>
            <span>{booking.guests} guests</span>
          </div>
        </div>

        <Separator />

        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>
              ${booking.price.perNight} x {booking.dates.nights} nights
            </span>
            <span>${booking.price.subtotal}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Taxes</span>
            <span>${booking.price.taxes.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Service fee</span>
            <span>${booking.price.serviceFee}</span>
          </div>
        </div>

        <Separator />

        <div className="flex justify-between font-semibold">
          <span>Total</span>
          <span>${booking.price.total.toFixed(2)}</span>
        </div>
      </CardContent>
    </Card>
  )
}
