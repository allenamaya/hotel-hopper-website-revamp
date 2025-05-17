import { Logo } from "@/components/logo"

export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background z-50">
      <div className="flex flex-col items-center gap-4">
        <Logo className="h-16 w-auto animate-pulse" />
        <div className="h-2 w-48 bg-primary/20 rounded-full overflow-hidden">
          <div className="h-full w-1/3 bg-primary rounded-full animate-[loading_1.5s_ease-in-out_infinite]"></div>
        </div>
        <p className="text-muted-foreground font-cal-sans animate-pulse">Finding your perfect stay...</p>
      </div>
    </div>
  )
}
