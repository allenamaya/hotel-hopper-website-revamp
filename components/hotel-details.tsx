import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, MapPin, Share, Heart } from "lucide-react"

interface HotelDetailsProps {
  id: string
}

export function HotelDetails({ id }: HotelDetailsProps) {
  // Mock hotel data
  const hotel = {
    id,
    name: "Grand Plaza Hotel",
    location: "123 Main Street, New York, NY 10001",
    rating: 4.8,
    reviews: 324,
    description:
      "Experience luxury and comfort in the heart of New York City. Our hotel offers spacious rooms with stunning city views, a rooftop pool, and a world-class restaurant. Located just steps away from major attractions, shopping, and dining, the Grand Plaza Hotel is the perfect base for your New York adventure.",
    features: ["City Center", "Luxury", "Family Friendly", "Business Center"],
  }

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
        <h1 className="font-cal-sans text-3xl font-bold">{hotel.name}</h1>
        <div className="flex items-center mt-2 sm:mt-0">
          <Button variant="ghost" size="sm" className="gap-1">
            <Share className="h-4 w-4" />
            Share
          </Button>
          <Button variant="ghost" size="sm" className="gap-1">
            <Heart className="h-4 w-4" />
            Save
          </Button>
        </div>
      </div>

      <div className="flex items-center gap-4 mb-6">
        <div className="flex items-center">
          <Star className="h-5 w-5 fill-primary text-primary mr-1" />
          <span className="font-medium">{hotel.rating}</span>
          <span className="text-muted-foreground ml-1">({hotel.reviews} reviews)</span>
        </div>
        <div className="flex items-center">
          <MapPin className="h-5 w-5 text-muted-foreground mr-1" />
          <span className="text-muted-foreground">{hotel.location}</span>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {hotel.features.map((feature, index) => (
          <Badge key={index} variant="secondary">
            {feature}
          </Badge>
        ))}
      </div>

      <div className="prose max-w-none">
        <p>{hotel.description}</p>
      </div>
    </div>
  )
}
