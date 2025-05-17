import { HotelGallery } from "@/components/hotel-gallery"
import { HotelDetails } from "@/components/hotel-details"
import { BookingForm } from "@/components/booking-form"
import { HotelAmenities } from "@/components/hotel-amenities"
import { HotelReviews } from "@/components/hotel-reviews"
import { SimilarHotels } from "@/components/similar-hotels"

export default function HotelDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <HotelGallery id={params.id} />
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-8 mt-8">
        <div className="space-y-8">
          <HotelDetails id={params.id} />
          <HotelAmenities id={params.id} />
          <HotelReviews id={params.id} />
        </div>
        <div className="lg:sticky lg:top-24 h-fit">
          <BookingForm id={params.id} />
        </div>
      </div>
      <div className="mt-16">
        <h2 className="font-cal-sans text-2xl font-bold mb-6">Similar Hotels You Might Like</h2>
        <SimilarHotels id={params.id} />
      </div>
    </div>
  )
}
