import type React from "react"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { fontCabin, fontCalSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import "@/app/globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata = {
  title: "Hotel Hopper | Find Your Perfect Stay",
  description: "Book unique hotels and accommodations around the world.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn("min-h-screen bg-background font-cabin antialiased", fontCabin.variable, fontCalSans.variable)}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
