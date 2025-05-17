import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function SpecialOffers() {
  return (
    <section className="my-12">
      <h2 className="font-cal-sans text-3xl font-bold text-primary mb-6">Special Offers</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="relative w-full md:w-2/5 aspect-video md:aspect-auto">
              <Image src="/placeholder.svg?height=300&width=300" alt="Luxury suite" fill className="object-cover" />
            </div>
            <CardContent className="flex-1 p-6">
              <Badge className="mb-2 bg-accent text-accent-foreground">Limited Time</Badge>
              <h3 className="font-cal-sans text-xl font-semibold mb-2">Weekend Escape Package</h3>
              <p className="text-muted-foreground mb-4">
                Enjoy 20% off on weekend stays plus complimentary breakfast and spa access.
              </p>
              <div className="flex items-baseline mb-4">
                <span className="font-cal-sans text-2xl font-bold">$199</span>
                <span className="text-muted-foreground ml-2 line-through">$249</span>
                <span className="text-sm text-muted-foreground ml-2">/ night</span>
              </div>
              <Button asChild>
                <Link href="/hotels/special-offers">View Details</Link>
              </Button>
            </CardContent>
          </div>
        </Card>

        <Card className="overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="relative w-full md:w-2/5 aspect-video md:aspect-auto">
              <Image src="/placeholder.svg?height=300&width=300" alt="Family suite" fill className="object-cover" />
            </div>
            <CardContent className="flex-1 p-6">
              <Badge className="mb-2 bg-accent text-accent-foreground">Family Deal</Badge>
              <h3 className="font-cal-sans text-xl font-semibold mb-2">Family Vacation Bundle</h3>
              <p className="text-muted-foreground mb-4">
                Kids stay free plus receive a 15% discount on all family activities and dining.
              </p>
              <div className="flex items-baseline mb-4">
                <span className="font-cal-sans text-2xl font-bold">$279</span>
                <span className="text-muted-foreground ml-2 line-through">$329</span>
                <span className="text-sm text-muted-foreground ml-2">/ night</span>
              </div>
              <Button asChild>
                <Link href="/hotels/special-offers">View Details</Link>
              </Button>
            </CardContent>
          </div>
        </Card>
      </div>
    </section>
  )
}
