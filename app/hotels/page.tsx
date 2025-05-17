import { HotelListings } from "@/components/hotel-listings"
import { SearchBar } from "@/components/search-bar"
import { HotelFilters } from "@/components/hotel-filters"

export default function HotelsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="font-cal-sans text-3xl font-bold mb-6">Find Your Perfect Stay</h1>
      <div className="mb-8">
        <SearchBar />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8">
        <aside className="hidden lg:block">
          <HotelFilters />
        </aside>
        <div>
          <HotelListings />
        </div>
      </div>
    </div>
  )
}
