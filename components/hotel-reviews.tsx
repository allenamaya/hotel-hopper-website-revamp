"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Star } from "lucide-react"

interface HotelReviewsProps {
  id: string
}

export function HotelReviews({ id }: HotelReviewsProps) {
  const [showAllReviews, setShowAllReviews] = useState(false)

  // Mock reviews data
  const reviews = [
    {
      id: "1",
      user: {
        name: "Sarah Johnson",
        avatar: "/placeholder.svg?height=40&width=40",
        location: "New York, USA",
      },
      rating: 5,
      date: "August 2023",
      comment:
        "Absolutely loved my stay at this hotel! The staff was incredibly friendly and attentive. The room was spacious, clean, and had an amazing view of the city. The location is perfect - close to all the major attractions. Would definitely stay here again!",
    },
    {
      id: "2",
      user: {
        name: "Michael Chen",
        avatar: "/placeholder.svg?height=40&width=40",
        location: "Toronto, Canada",
      },
      rating: 4,
      date: "July 2023",
      comment:
        "Great hotel in a convenient location. The room was comfortable and clean. Breakfast was delicious with many options. The only minor issue was that the WiFi was a bit slow at times. Overall, a very pleasant stay.",
    },
    {
      id: "3",
      user: {
        name: "Emma Wilson",
        avatar: "/placeholder.svg?height=40&width=40",
        location: "London, UK",
      },
      rating: 5,
      date: "June 2023",
      comment:
        "Exceptional service and beautiful rooms. The hotel staff went above and beyond to make our anniversary special. The restaurant on site  The hotel staff went above and beyond to make our anniversary special. The restaurant on site serves amazing food - we had dinner there twice! The rooftop pool area is stunning and offers great views of the city. Highly recommend this hotel for any occasion.",
    },
    {
      id: "4",
      user: {
        name: "David Rodriguez",
        avatar: "/placeholder.svg?height=40&width=40",
        location: "Miami, USA",
      },
      rating: 4,
      date: "May 2023",
      comment:
        "Very nice hotel with excellent amenities. The gym was well-equipped and the pool was fantastic. Room service was prompt and the food quality was good. The only reason I'm not giving 5 stars is because the check-in process took longer than expected.",
    },
    {
      id: "5",
      user: {
        name: "Olivia Kim",
        avatar: "/placeholder.svg?height=40&width=40",
        location: "Seoul, South Korea",
      },
      rating: 5,
      date: "April 2023",
      comment:
        "Perfect stay from start to finish. The room was immaculate and the bed was so comfortable. The bathroom was spacious with great toiletries. The staff remembered my name throughout my stay which was a lovely personal touch. Will definitely return!",
    },
  ]

  // Calculate rating statistics
  const totalReviews = reviews.length
  const averageRating = reviews.reduce((acc, review) => acc + review.rating, 0) / totalReviews

  const ratingCounts = [0, 0, 0, 0, 0]
  reviews.forEach((review) => {
    ratingCounts[review.rating - 1]++
  })

  const ratingPercentages = ratingCounts.map((count) => (count / totalReviews) * 100)

  return (
    <div>
      <h2 className="font-cal-sans text-2xl font-semibold mb-6">Guest Reviews</h2>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 mb-8">
        <div className="bg-muted p-6 rounded-lg">
          <div className="text-center mb-4">
            <div className="text-4xl font-cal-sans font-bold">{averageRating.toFixed(1)}</div>
            <div className="flex justify-center my-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`h-5 w-5 ${
                    star <= Math.round(averageRating) ? "fill-primary text-primary" : "text-muted-foreground"
                  }`}
                />
              ))}
            </div>
            <div className="text-sm text-muted-foreground">{totalReviews} reviews</div>
          </div>

          <div className="space-y-3">
            {[5, 4, 3, 2, 1].map((rating, index) => (
              <div key={rating} className="flex items-center gap-2">
                <div className="w-8 text-sm text-right">{rating}</div>
                <Progress value={ratingPercentages[5 - rating - 1]} className="h-2" />
                <div className="w-8 text-sm text-muted-foreground">{ratingCounts[5 - rating - 1]}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          {(showAllReviews ? reviews : reviews.slice(0, 3)).map((review) => (
            <div key={review.id} className="border-b pb-6 last:border-0">
              <div className="flex items-start gap-4 mb-3">
                <Avatar>
                  <AvatarImage src={review.user.avatar || "/placeholder.svg"} alt={review.user.name} />
                  <AvatarFallback>{review.user.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">{review.user.name}</div>
                  <div className="text-sm text-muted-foreground">{review.user.location}</div>
                </div>
              </div>

              <div className="flex items-center gap-2 mb-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`h-4 w-4 ${
                        star <= review.rating ? "fill-primary text-primary" : "text-muted-foreground"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">{review.date}</span>
              </div>

              <p className="text-sm">{review.comment}</p>
            </div>
          ))}

          {!showAllReviews && reviews.length > 3 && (
            <Button variant="outline" onClick={() => setShowAllReviews(true)}>
              Show all {reviews.length} reviews
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
