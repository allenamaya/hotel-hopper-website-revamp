import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

const destinations = [
  {
    name: "New York",
    hotels: 243,
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Miami",
    hotels: 186,
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Los Angeles",
    hotels: 210,
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Chicago",
    hotels: 157,
    image: "/placeholder.svg?height=300&width=300",
  },
]

export function FeaturedDestinations() {
  return (
    <section className="my-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-cal-sans text-3xl font-bold text-primary">Popular Destinations</h2>
        <Link href="/hotels" className="text-sm font-medium text-primary hover:underline">
          View all destinations
        </Link>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {destinations.map((destination, index) => (
          <Link href={`/hotels?location=${destination.name}`} key={index}>
            <Card className="overflow-hidden h-full group">
              <div className="relative aspect-square">
                <Image
                  src={destination.image || "/placeholder.svg"}
                  alt={destination.name}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <CardContent className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="font-cal-sans text-xl font-semibold text-white mb-1">{destination.name}</h3>
                  <p className="text-sm text-white/80">{destination.hotels} hotels</p>
                </CardContent>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  )
}
