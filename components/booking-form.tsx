"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { CalendarIcon, Users } from "lucide-react"
import { format, differenceInDays } from "date-fns"

interface BookingFormProps {
  id: string
}

export function BookingForm({ id }: BookingFormProps) {
  const router = useRouter()
  const [checkIn, setCheckIn] = useState<Date>()
  const [checkOut, setCheckOut] = useState<Date>()
  const [guests, setGuests] = useState("2")

  // Mock hotel price data
  const hotelPrice = 299
  const taxRate = 0.12
  const serviceFee = 25

  const handleBooking = () => {
    // In a real app, we would save the booking details to state/context
    // and then navigate to the checkout page
    router.push("/checkout")
  }

  // Calculate total nights and price
  const nights = checkIn && checkOut ? differenceInDays(checkOut, checkIn) : 0
  const subtotal = nights * hotelPrice
  const taxes = subtotal * taxRate
  const total = subtotal + taxes + serviceFee

  return (
    <Card className="sticky top-24">
      <CardHeader>
        <CardTitle className="flex justify-between items-baseline">
          <span>${hotelPrice}</span>
          <span className="text-sm font-normal text-muted-foreground">night</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-2">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={`justify-start text-left font-normal ${!checkIn ? "text-muted-foreground" : ""}`}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {checkIn ? format(checkIn, "MMM d, yyyy") : <span>Check-in</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={checkIn}
                onSelect={setCheckIn}
                initialFocus
                disabled={(date) => date < new Date()}
              />
            </PopoverContent>
          </Popover>

          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={`justify-start text-left font-normal ${!checkOut ? "text-muted-foreground" : ""}`}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {checkOut ? format(checkOut, "MMM d, yyyy") : <span>Check-out</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={checkOut}
                onSelect={setCheckOut}
                initialFocus
                disabled={(date) => !checkIn || date <= checkIn}
              />
            </PopoverContent>
          </Popover>
        </div>

        <Select value={guests} onValueChange={setGuests}>
          <SelectTrigger>
            <div className="flex items-center">
              <Users className="mr-2 h-4 w-4 text-muted-foreground" />
              <SelectValue placeholder="Number of guests" />
            </div>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">1 Guest</SelectItem>
            <SelectItem value="2">2 Guests</SelectItem>
            <SelectItem value="3">3 Guests</SelectItem>
            <SelectItem value="4">4 Guests</SelectItem>
            <SelectItem value="5">5 Guests</SelectItem>
          </SelectContent>
        </Select>

        {checkIn && checkOut && nights > 0 && (
          <>
            <Separator />

            <div className="space-y-2">
              <div className="flex justify-between">
                <span>
                  ${hotelPrice} x {nights} nights
                </span>
                <span>${subtotal}</span>
              </div>
              <div className="flex justify-between">
                <span>Taxes ({(taxRate * 100).toFixed(0)}%)</span>
                <span>${taxes.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Service fee</span>
                <span>${serviceFee}</span>
              </div>
            </div>

            <Separator />

            <div className="flex justify-between font-semibold">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </>
        )}
      </CardContent>
      <CardFooter>
        <Button className="w-full" size="lg" disabled={!checkIn || !checkOut || nights <= 0} onClick={handleBooking}>
          {checkIn && checkOut && nights > 0 ? "Reserve" : "Select dates"}
        </Button>
      </CardFooter>
    </Card>
  )
}
