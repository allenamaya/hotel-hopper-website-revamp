import Image from "next/image"

interface LogoProps {
  className?: string
}

export function Logo({ className }: LogoProps) {
  return <Image src="/logo.svg" alt="Hotel Hopper" width={120} height={40} className={className} />
}
