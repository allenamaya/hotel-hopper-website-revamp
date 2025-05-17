"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Grid3X3 } from "lucide-react"

interface HotelGalleryProps {
  id: string
}

export function HotelGallery({ id }: HotelGalleryProps) {
  const [currentImage, setCurrentImage] = useState(0)

  // Mock images for the gallery
  const images = [
    "/placeholder.svg?height=600&width=800",
    "/placeholder.svg?height=600&width=800",
    "/placeholder.svg?height=600&width=800",
    "/placeholder.svg?height=600&width=800",
    "/placeholder.svg?height=600&width=800",
  ]

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div>
      <div className="hidden md:grid grid-cols-4 grid-rows-2 gap-2 h-[500px]">
        <div className="col-span-2 row-span-2 relative rounded-l-xl overflow-hidden">
          <Image src={images[0] || "/placeholder.svg"} alt="Hotel main view" fill className="object-cover" />
        </div>
        <div className="relative">
          <Image src={images[1] || "/placeholder.svg"} alt="Hotel view" fill className="object-cover" />
        </div>
        <div className="relative">
          <Image src={images[2] || "/placeholder.svg"} alt="Hotel view" fill className="object-cover" />
        </div>
        <div className="relative">
          <Image src={images[3] || "/placeholder.svg"} alt="Hotel view" fill className="object-cover" />
        </div>
        <div className="relative rounded-tr-none rounded-br-xl overflow-hidden">
          <Image src={images[4] || "/placeholder.svg"} alt="Hotel view" fill className="object-cover" />
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="secondary" className="absolute bottom-4 right-4 gap-2">
                <Grid3X3 className="h-4 w-4" />
                Show all photos
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl">
              <div className="relative h-[70vh]">
                <Image
                  src={images[currentImage] || "/placeholder.svg"}
                  alt={`Hotel view ${currentImage + 1}`}
                  fill
                  className="object-contain"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 rounded-full"
                  onClick={prevImage}
                >
                  <ChevronLeft className="h-6 w-6" />
                  <span className="sr-only">Previous image</span>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 rounded-full"
                  onClick={nextImage}
                >
                  <ChevronRight className="h-6 w-6" />
                  <span className="sr-only">Next image</span>
                </Button>
                <div className="absolute bottom-4 left-0 right-0 text-center">
                  {currentImage + 1} / {images.length}
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <div className="md:hidden relative h-72 rounded-xl overflow-hidden">
        <Image
          src={images[currentImage] || "/placeholder.svg"}
          alt={`Hotel view ${currentImage + 1}`}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-between px-2">
          <Button variant="ghost" size="icon" className="bg-background/80 rounded-full" onClick={prevImage}>
            <ChevronLeft className="h-6 w-6" />
            <span className="sr-only">Previous image</span>
          </Button>
          <Button variant="ghost" size="icon" className="bg-background/80 rounded-full" onClick={nextImage}>
            <ChevronRight className="h-6 w-6" />
            <span className="sr-only">Next image</span>
          </Button>
        </div>
        <div className="absolute bottom-4 left-0 right-0 text-center text-white text-sm bg-black/50 py-1">
          {currentImage + 1} / {images.length}
        </div>
      </div>
    </div>
  )
}
