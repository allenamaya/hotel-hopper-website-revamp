import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"

export default function NotFound() {
  return (
    <div className="container flex flex-col items-center justify-center min-h-[70vh] px-4 py-16 text-center">
      <Logo className="h-16 w-auto mb-8" />
      <h1 className="font-cal-sans text-6xl font-bold text-primary mb-4">404</h1>
      <h2 className="font-cal-sans text-3xl font-semibold mb-4">Page Not Found</h2>
      <p className="text-muted-foreground max-w-md mb-8">
        Oops! It seems like the page you're looking for has checked out early.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button asChild size="lg">
          <Link href="/">Return Home</Link>
        </Button>
        <Button variant="outline" size="lg" asChild>
          <Link href="/hotels">Browse Hotels</Link>
        </Button>
      </div>
    </div>
  )
}
