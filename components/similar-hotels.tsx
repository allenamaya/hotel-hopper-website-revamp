"use client"

import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"

interface SimilarHotelsProps {
  id: string
}

export function SimilarHotels({ id }: SimilarHotelsProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  // Mock similar hotels data
  const similarHotels = [
    {
      id: "101",
      name: "Luxury Downtown Hotel",
      location: "New York, NY",
      price: 279,
      rating: 4.7,
      image: "/placeholder.svg?height=200&width=300",
      tags: ["Luxury", "City View"],
    },
    {
      id: "102",
      name: "Harbor View Inn",
      location: "New York, NY",
      price: 249,
      rating: 4.5,
      image: "/placeholder.svg?height=200&width=300",
      tags: ["Harbor View", "Spa"],
    },
    {
      id: "103",
      name: "Metropolitan Suites",
      location: "New York, NY",
      price: 319,
      rating: 4.8,
      image: "/placeholder.svg?height=200&width=300",
      tags: ["Suites", "Business"],
    },
    {
      id: "104",
      name: "Central Park Hotel",
      location: "New York, NY",
      price: 289,
      rating: 4.6,
      image: "/placeholder.svg?height=200&width=300",
      tags: ["Park View", "Restaurant"],
    },
  ]

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef
      const scrollAmount = 320

      if (direction === "left") {
        current.scrollBy({ left: -scrollAmount, behavior: "smooth" })
      } else {
        current.scrollBy({ left: scrollAmount, behavior: "smooth" })
      }
    }
  }

  return (
    <div className="relative">
      <div className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 hidden md:block">
        <Button variant="outline" size="icon" className="rounded-full shadow-sm" onClick={() => scroll("left")}>
          <ChevronLeft className="h-5 w-5" />
          <span className="sr-only">Scroll left</span>
        </Button>
      </div>

      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {similarHotels.map((hotel) => (
          <Card key={hotel.id} className="min-w-[280px] max-w-[280px] overflow-hidden flex-shrink-0">
            <div className="relative h-40">
              <Image src={hotel.image || "/placeholder.svg"} alt={hotel.name} fill className="object-cover" />
            </div>
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-2">
                <Link href={`/hotels/${hotel.id}`} className="hover:underline">
                  <h3 className="font-cal-sans font-semibold line-clamp-1">{hotel.name}</h3>
                </Link>
                <div className="flex items-center">
                  <Star className="h-3 w-3 fill-primary text-primary mr-1" />
                  <span className="text-xs font-medium">{hotel.rating}</span>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mb-2">{hotel.location}</p>
              <div className="flex flex-wrap gap-1 mb-3">
                {hotel.tags.map((tag, i) => (
                  <Badge key={i} variant="secondary" className="font-normal text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="flex justify-between items-center mt-2">
                <div>
                  <span className="font-cal-sans font-semibold">${hotel.price}</span>
                  <span className="text-xs text-muted-foreground"> / night</span>
                </div>
                <Button asChild size="sm" variant="outline">
                  <Link href={`/hotels/${hotel.id}`}>View</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 hidden md:block">
        <Button variant="outline" size="icon" className="rounded-full shadow-sm" onClick={() => scroll("right")}>
          <ChevronRight className="h-5 w-5" />
          <span className="sr-only">Scroll right</span>
        </Button>
      </div>
    </div>
  )
}
