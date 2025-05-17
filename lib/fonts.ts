import { Cabin, Inter } from "next/font/google"

export const fontCabin = Cabin({
  subsets: ["latin"],
  variable: "--font-cabin",
})

// Replace Cal Sans with Inter (similar clean sans-serif font)
export const fontCalSans = Inter({
  subsets: ["latin"],
  variable: "--font-cal-sans",
  weight: ["600"], // Semibold weight to match Cal Sans SemiBold
})
