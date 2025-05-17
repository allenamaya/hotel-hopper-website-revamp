"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Heart, MapPin } from "lucide-react"

// Mock saved hotels data
const initialSavedHotels = [
  {
    id: "1",
    name: "Grand Plaza Hotel",
    location: "New York, NY",
    price: 299,
    rating: 4.8,
    reviews: 324,
    image: "/placeholder.svg?height=300&width=500",
    tags: ["Luxury", "City View"],
    saved: true,
  },
  {
    id: "2",
    name: "Oceanfront Resort & Spa",
    location: "Miami Beach, FL",
    price: 399,
    rating: 4.9,
    reviews: 512,
    image: "/placeholder.svg?height=300&width=500",
    tags: ["Beachfront", "Spa"],
    saved: true,
  },
  {
    id: "5",
    name: "Desert Oasis Resort",
    location: "Scottsdale, AZ",
    price: 329,
    rating: 4.8,
    reviews: 156,
    image: "/placeholder.svg?height=300&width=500",
    tags: ["Pool", "Golf"],
    saved: true,
  },
]

export function SavedHotels() {
  const [savedHotels, setSavedHotels] = useState(initialSavedHotels)

  const removeFromSaved = (id: string) => {
    setSavedHotels(savedHotels.filter((hotel) => hotel.id !== id))
  }

  if (savedHotels.length === 0) {
    return (
      <div className="text-center py-12">
        <Heart className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
        <h3 className="font-cal-sans text-xl font-semibold mb-2">No saved hotels yet</h3>
        <p className="text-muted-foreground mb-6">Start saving hotels you like to keep track of them here.</p>
        <Button asChild>
          <Link href="/hotels">Browse Hotels</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {savedHotels.map((hotel) => (
        <Card key={hotel.id} className="overflow-hidden group">
          <div className="relative">
            <Link href={`/hotels/${hotel.id}`}>
              <Image
                src={hotel.image || "/placeholder.svg"}
                alt={hotel.name}
                width={500}
                height={300}
                className="object-cover w-full h-48 transition-transform group-hover:scale-105"
              />
            </Link>
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 rounded-full bg-background/80 backdrop-blur-sm text-red-500"
              onClick={() => removeFromSaved(hotel.id)}
            >
              <Heart className="h-5 w-5 fill-current" />
              <span className="sr-only">Remove from saved</span>
            </Button>
          </div>
          <CardContent className="p-4">
            <div className="flex justify-between items-start mb-2">
              <Link href={`/hotels/${hotel.id}`} className="hover:underline">
                <h3 className="font-cal-sans font-semibold text-lg line-clamp-1">{hotel.name}</h3>
              </Link>
              <div className="flex items-center">
                <Star className="h-4 w-4 fill-primary text-primary mr-1" />
                <span className="text-sm font-medium">{hotel.rating}</span>
              </div>
            </div>
            <div className="flex items-center text-sm text-muted-foreground mb-2">
              <MapPin className="h-4 w-4 mr-1" />
              {hotel.location}
            </div>
            <div className="flex flex-wrap gap-2 mb-3">
              {hotel.tags.map((tag, i) => (
                <Badge key={i} variant="secondary" className="font-normal text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
            <div className="flex justify-between items-center mt-4">
              <div>
                <span className="font-cal-sans font-semibold text-lg">${hotel.price}</span>
                <span className="text-sm text-muted-foreground"> / night</span>
              </div>
              <Button asChild size="sm">
                <Link href={`/hotels/${hotel.id}`}>View Details</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
