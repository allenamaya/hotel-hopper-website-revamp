import {
  Wifi,
  Coffee,
  Utensils,
  Car,
  Dumbbell,
  Waves,
  ShowerHead,
  AirVent,
  Tv,
  Snowflake,
  Shirt,
  Lock,
} from "lucide-react"

interface HotelAmenitiesProps {
  id: string
}

export function HotelAmenities({ id }: HotelAmenitiesProps) {
  // Mock amenities data
  const amenities = [
    { name: "Free WiFi", icon: <Wifi className="h-5 w-5" /> },
    { name: "Breakfast", icon: <Coffee className="h-5 w-5" /> },
    { name: "Restaurant", icon: <Utensils className="h-5 w-5" /> },
    { name: "Parking", icon: <Car className="h-5 w-5" /> },
    { name: "Fitness Center", icon: <Dumbbell className="h-5 w-5" /> },
    { name: "Swimming Pool", icon: <Waves className="h-5 w-5" /> },
    { name: "Hot Water", icon: <ShowerHead className="h-5 w-5" /> },
    { name: "Air Conditioning", icon: <AirVent className="h-5 w-5" /> },
    { name: "TV", icon: <Tv className="h-5 w-5" /> },
    { name: "Mini Fridge", icon: <Snowflake className="h-5 w-5" /> },
    { name: "Laundry", icon: <Shirt className="h-5 w-5" /> },
    { name: "Safe", icon: <Lock className="h-5 w-5" /> },
  ]

  return (
    <div>
      <h2 className="font-cal-sans text-2xl font-semibold mb-6">Amenities</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-6">
        {amenities.map((amenity, index) => (
          <div key={index} className="flex items-center gap-3">
            <div className="text-primary">{amenity.icon}</div>
            <span>{amenity.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
