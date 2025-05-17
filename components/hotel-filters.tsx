"use client"

import { useState } from "react"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function HotelFilters() {
  const [priceRange, setPriceRange] = useState([50, 500])

  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-cal-sans text-lg font-semibold mb-4">Filters</h3>
        <Button variant="outline" size="sm" className="w-full justify-start">
          Clear All Filters
        </Button>
      </div>

      <Accordion type="multiple" defaultValue={["price", "property-type", "amenities"]}>
        <AccordionItem value="price">
          <AccordionTrigger className="font-cal-sans">Price Range</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4 pt-2">
              <Slider defaultValue={[50, 500]} max={1000} step={10} value={priceRange} onValueChange={setPriceRange} />
              <div className="flex items-center justify-between">
                <span className="text-sm">${priceRange[0]}</span>
                <span className="text-sm">${priceRange[1]}+</span>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="property-type">
          <AccordionTrigger className="font-cal-sans">Property Type</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-3 pt-2">
              {["Hotel", "Resort", "Boutique Hotel", "Apartment", "Villa"].map((type) => (
                <div key={type} className="flex items-center space-x-2">
                  <Checkbox id={`type-${type}`} />
                  <Label htmlFor={`type-${type}`} className="text-sm font-normal cursor-pointer">
                    {type}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="amenities">
          <AccordionTrigger className="font-cal-sans">Amenities</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-3 pt-2">
              {[
                "Free WiFi",
                "Pool",
                "Spa",
                "Fitness Center",
                "Restaurant",
                "Room Service",
                "Free Parking",
                "Airport Shuttle",
              ].map((amenity) => (
                <div key={amenity} className="flex items-center space-x-2">
                  <Checkbox id={`amenity-${amenity}`} />
                  <Label htmlFor={`amenity-${amenity}`} className="text-sm font-normal cursor-pointer">
                    {amenity}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="rating">
          <AccordionTrigger className="font-cal-sans">Guest Rating</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-3 pt-2">
              {["5 Stars", "4+ Stars", "3+ Stars", "2+ Stars"].map((rating) => (
                <div key={rating} className="flex items-center space-x-2">
                  <Checkbox id={`rating-${rating}`} />
                  <Label htmlFor={`rating-${rating}`} className="text-sm font-normal cursor-pointer">
                    {rating}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Button className="w-full">Apply Filters</Button>
    </div>
  )
}
