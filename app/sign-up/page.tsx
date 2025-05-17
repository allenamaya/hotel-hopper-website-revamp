import { SignUpForm } from "@/components/auth/sign-up-form"
import { Logo } from "@/components/logo"
import Link from "next/link"

export default function SignUpPage() {
  return (
    <div className="container flex flex-col items-center justify-center min-h-[80vh] py-12">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <Logo className="mx-auto h-12 w-auto" />
          <h1 className="text-2xl font-semibold tracking-tight">Create an account</h1>
          <p className="text-sm text-muted-foreground">Enter your email below to create your account</p>
        </div>
        <SignUpForm />
        <p className="px-8 text-center text-sm text-muted-foreground">
          <Link href="/sign-in" className="hover:text-brand underline underline-offset-4">
            Already have an account? Sign In
          </Link>
        </p>
      </div>
    </div>
  )
}
