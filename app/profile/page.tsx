import { ProfileForm } from "@/components/profile-form"
import { BookingHistory } from "@/components/booking-history"
import { SavedHotels } from "@/components/saved-hotels"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProfilePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="font-cal-sans text-3xl font-bold mb-6">Your Profile</h1>
      <Tabs defaultValue="bookings" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="bookings">Bookings</TabsTrigger>
          <TabsTrigger value="saved">Saved Hotels</TabsTrigger>
          <TabsTrigger value="profile">Profile Settings</TabsTrigger>
        </TabsList>
        <TabsContent value="bookings">
          <BookingHistory />
        </TabsContent>
        <TabsContent value="saved">
          <SavedHotels />
        </TabsContent>
        <TabsContent value="profile">
          <ProfileForm />
        </TabsContent>
      </Tabs>
    </div>
  )
}
