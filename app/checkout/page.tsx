import { CheckoutForm } from "@/components/checkout-form"
import { BookingSummary } from "@/components/booking-summary"

export default function CheckoutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="font-cal-sans text-3xl font-bold mb-6">Complete Your Booking</h1>
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-8">
        <CheckoutForm />
        <div className="lg:sticky lg:top-24 h-fit">
          <BookingSummary />
        </div>
      </div>
    </div>
  )
}
