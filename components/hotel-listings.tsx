"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Heart } from "lucide-react"

// Mock data for hotel listings
const mockHotels = [
  {
    id: "1",
    name: "Grand Plaza Hotel",
    location: "New York, NY",
    price: 299,
    rating: 4.8,
    reviews: 324,
    image: "/placeholder.svg?height=300&width=500",
    tags: ["Luxury", "City View"],
    saved: false,
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
    saved: false,
  },
  {
    id: "3",
    name: "Mountain View Lodge",
    location: "Aspen, CO",
    price: 249,
    rating: 4.7,
    reviews: 187,
    image: "/placeholder.svg?height=300&width=500",
    tags: ["Mountain View", "Ski-in/Ski-out"],
    saved: false,
  },
  {
    id: "4",
    name: "Urban Boutique Hotel",
    location: "San Francisco, CA",
    price: 279,
    rating: 4.6,
    reviews: 203,
    image: "/placeholder.svg?height=300&width=500",
    tags: ["Boutique", "City Center"],
    saved: false,
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
    saved: false,
  },
  {
    id: "6",
    name: "Historic Downtown Inn",
    location: "Charleston, SC",
    price: 219,
    rating: 4.7,
    reviews: 178,
    image: "/placeholder.svg?height=300&width=500",
    tags: ["Historic", "Breakfast Included"],
    saved: false,
  },
]

export function HotelListings() {
  const [hotels, setHotels] = useState(mockHotels)

  const toggleSaved = (id: string) => {
    setHotels(hotels.map((hotel) => (hotel.id === id ? { ...hotel, saved: !hotel.saved } : hotel)))
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {hotels.map((hotel) => (
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
              className={`absolute top-2 right-2 rounded-full bg-background/80 backdrop-blur-sm ${
                hotel.saved ? "text-red-500" : "text-muted-foreground"
              }`}
              onClick={() => toggleSaved(hotel.id)}
            >
              <Heart className={`h-5 w-5 ${hotel.saved ? "fill-current" : ""}`} />
              <span className="sr-only">Save hotel</span>
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
            <p className="text-sm text-muted-foreground mb-2">{hotel.location}</p>
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
