import { HotelListings } from "@/components/hotel-listings"
import { SearchBar } from "@/components/search-bar"
import { HeroSection } from "@/components/hero-section"
import { FeaturedDestinations } from "@/components/featured-destinations"
import { SpecialOffers } from "@/components/special-offers"

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <HeroSection />
      <div className="my-8">
        <SearchBar />
      </div>
      <FeaturedDestinations />
      <div className="my-12">
        <h2 className="font-cal-sans text-3xl font-bold text-primary mb-6">Popular Hotels</h2>
        <HotelListings />
      </div>
      <SpecialOffers />
    </div>
  )
}
