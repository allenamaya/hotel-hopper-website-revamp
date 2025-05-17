import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <div className="relative overflow-hidden rounded-2xl">
      <div className="absolute inset-0">
        <Image
          src="/placeholder.svg?height=600&width=1200"
          alt="Luxury hotel view"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/20" />
      </div>
      <div className="relative z-10 px-6 py-16 sm:px-8 sm:py-24 md:py-32 lg:py-40 max-w-3xl">
        <h1 className="font-cal-sans text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
          Find Your Perfect Stay
        </h1>
        <p className="text-white/90 text-lg md:text-xl mb-8 max-w-xl">
          Discover and book the ideal hotel for your next adventure. From luxury resorts to cozy boutique stays, we've
          got you covered.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild size="lg" className="font-medium">
            <Link href="/hotels">Browse Hotels</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="bg-white/20 text-white border-white/40 hover:bg-white/30 font-medium"
          >
            <Link href="/sign-up">Sign Up for Deals</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
