"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Calendar, MapPin, AlertCircle } from "lucide-react"

// Mock booking data
const bookings = [
  {
    id: "B12345",
    hotel: {
      id: "1",
      name: "Grand Plaza Hotel",
      image: "/placeholder.svg?height=200&width=300",
      location: "New York, NY",
    },
    status: "upcoming",
    dates: {
      checkIn: "May 15, 2023",
      checkOut: "May 18, 2023",
    },
    guests: 2,
    room: "Deluxe King Room",
    price: 897,
    cancellable: true,
  },
  {
    id: "B12346",
    hotel: {
      id: "2",
      name: "Oceanfront Resort & Spa",
      image: "/placeholder.svg?height=200&width=300",
      location: "Miami Beach, FL",
    },
    status: "completed",
    dates: {
      checkIn: "March 10, 2023",
      checkOut: "March 15, 2023",
    },
    guests: 2,
    room: "Ocean View Suite",
    price: 1250,
    cancellable: false,
  },
  {
    id: "B12347",
    hotel: {
      id: "3",
      name: "Mountain View Lodge",
      image: "/placeholder.svg?height=200&width=300",
      location: "Aspen, CO",
    },
    status: "cancelled",
    dates: {
      checkIn: "February 5, 2023",
      checkOut: "February 10, 2023",
    },
    guests: 4,
    room: "Family Suite",
    price: 1450,
    cancellable: false,
  },
]

function getStatusBadge(status: string) {
  switch (status) {
    case "upcoming":
      return <Badge className="bg-green-500">Upcoming</Badge>
    case "completed":
      return <Badge variant="outline">Completed</Badge>
    case "cancelled":
      return <Badge variant="destructive">Cancelled</Badge>
    default:
      return null
  }
}

export function BookingHistory() {
  const [cancelBookingId, setCancelBookingId] = useState<string | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const handleCancelBooking = () => {
    // In a real app, we would make an API call to cancel the booking
    setIsDialogOpen(false)
    setCancelBookingId(null)
  }

  return (
    <div>
      <Tabs defaultValue="all">
        <TabsList className="mb-6">
          <TabsTrigger value="all">All Bookings</TabsTrigger>
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
          <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-6">
          {bookings.map((booking) => (
            <BookingCard
              key={booking.id}
              booking={booking}
              onCancelClick={() => {
                setCancelBookingId(booking.id)
                setIsDialogOpen(true)
              }}
            />
          ))}
        </TabsContent>

        <TabsContent value="upcoming" className="space-y-6">
          {bookings
            .filter((booking) => booking.status === "upcoming")
            .map((booking) => (
              <BookingCard
                key={booking.id}
                booking={booking}
                onCancelClick={() => {
                  setCancelBookingId(booking.id)
                  setIsDialogOpen(true)
                }}
              />
            ))}
        </TabsContent>

        <TabsContent value="completed" className="space-y-6">
          {bookings
            .filter((booking) => booking.status === "completed")
            .map((booking) => (
              <BookingCard
                key={booking.id}
                booking={booking}
                onCancelClick={() => {
                  setCancelBookingId(booking.id)
                  setIsDialogOpen(true)
                }}
              />
            ))}
        </TabsContent>

        <TabsContent value="cancelled" className="space-y-6">
          {bookings
            .filter((booking) => booking.status === "cancelled")
            .map((booking) => (
              <BookingCard
                key={booking.id}
                booking={booking}
                onCancelClick={() => {
                  setCancelBookingId(booking.id)
                  setIsDialogOpen(true)
                }}
              />
            ))}
        </TabsContent>
      </Tabs>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Cancel Booking</DialogTitle>
            <DialogDescription>
              Are you sure you want to cancel this booking? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <div className="flex items-center gap-4 py-4">
            <AlertCircle className="h-10 w-10 text-destructive" />
            <div>
              <p className="font-medium">Cancellation Policy</p>
              <p className="text-sm text-muted-foreground">
                You will receive a full refund if you cancel at least 48 hours before check-in.
              </p>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
              Keep Booking
            </Button>
            <Button variant="destructive" onClick={handleCancelBooking}>
              Cancel Booking
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

interface BookingCardProps {
  booking: (typeof bookings)[0]
  onCancelClick: () => void
}

function BookingCard({ booking, onCancelClick }: BookingCardProps) {
  return (
    <Card>
      <CardContent className="p-0">
        <div className="flex flex-col md:flex-row">
          <div className="relative w-full md:w-1/4 h-48 md:h-auto">
            <Image
              src={booking.hotel.image || "/placeholder.svg"}
              alt={booking.hotel.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex-1 p-6">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-cal-sans text-xl font-semibold">{booking.hotel.name}</h3>
                  {getStatusBadge(booking.status)}
                </div>
                <div className="flex items-center text-muted-foreground">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-sm">{booking.hotel.location}</span>
                </div>
              </div>
              <div className="text-right">
                <div className="font-cal-sans font-semibold">${booking.price}</div>
                <div className="text-sm text-muted-foreground">Total</div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div>
                <div className="flex items-center mb-2">
                  <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span className="text-sm font-medium">Check-in</span>
                </div>
                <p>{booking.dates.checkIn}</p>
              </div>
              <div>
                <div className="flex items-center mb-2">
                  <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span className="text-sm font-medium">Check-out</span>
                </div>
                <p>{booking.dates.checkOut}</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-between">
              <div>
                <div className="text-sm font-medium mb-1">Booking Details</div>
                <p className="text-sm text-muted-foreground">
                  {booking.room} · {booking.guests} {booking.guests === 1 ? "guest" : "guests"} · Booking #{booking.id}
                </p>
              </div>
              <div className="flex gap-3">
                {booking.status === "upcoming" && booking.cancellable && (
                  <Button variant="outline" onClick={onCancelClick}>
                    Cancel
                  </Button>
                )}
                <Button asChild>
                  <Link href={`/hotels/${booking.hotel.id}`}>View Hotel</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
