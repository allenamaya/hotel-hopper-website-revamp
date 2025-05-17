"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, MapPin, CalendarIcon, Users } from "lucide-react"
import { format } from "date-fns"

interface SearchBarProps {
  minimal?: boolean
}

export function SearchBar({ minimal = false }: SearchBarProps) {
  const router = useRouter()
  const [location, setLocation] = useState("")
  const [date, setDate] = useState<Date>()
  const [guests, setGuests] = useState("2")

  const handleSearch = () => {
    // In a real app, we would construct a query string with these parameters
    router.push("/hotels")
  }

  if (minimal) {
    return (
      <div className="flex flex-col sm:flex-row gap-4 p-4 bg-background border rounded-lg shadow-sm">
        <div className="relative flex-1">
          <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Where are you going?"
            className="pl-9"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <Button onClick={handleSearch}>
          <Search className="mr-2 h-4 w-4" />
          Search
        </Button>
      </div>
    )
  }

  return (
    <div className="flex flex-col md:flex-row gap-4 p-6 bg-background border rounded-xl shadow-sm">
      <div className="relative flex-1">
        <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Where are you going?"
          className="pl-9"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>

      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" className="justify-start text-left font-normal">
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date ? format(date, "PPP") : <span>Check-in date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
        </PopoverContent>
      </Popover>

      <div className="flex-1 min-w-[180px]">
        <Select value={guests} onValueChange={setGuests}>
          <SelectTrigger>
            <div className="flex items-center">
              <Users className="mr-2 h-4 w-4 text-muted-foreground" />
              <SelectValue placeholder="Number of guests" />
            </div>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">1 Guest</SelectItem>
            <SelectItem value="2">2 Guests</SelectItem>
            <SelectItem value="3">3 Guests</SelectItem>
            <SelectItem value="4">4 Guests</SelectItem>
            <SelectItem value="5">5+ Guests</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Button onClick={handleSearch} className="md:w-auto">
        <Search className="mr-2 h-4 w-4" />
        Search
      </Button>
    </div>
  )
}
