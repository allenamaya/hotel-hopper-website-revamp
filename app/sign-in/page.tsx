import { SignInForm } from "@/components/auth/sign-in-form"
import { Logo } from "@/components/logo"
import Link from "next/link"

export default function SignInPage() {
  return (
    <div className="container flex flex-col items-center justify-center min-h-[80vh] py-12">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <Logo className="mx-auto h-12 w-auto" />
          <h1 className="text-2xl font-semibold tracking-tight">Welcome back</h1>
          <p className="text-sm text-muted-foreground">Enter your email to sign in to your account</p>
        </div>
        <SignInForm />
        <p className="px-8 text-center text-sm text-muted-foreground">
          <Link href="/sign-up" className="hover:text-brand underline underline-offset-4">
            Don't have an account? Sign Up
          </Link>
        </p>
      </div>
    </div>
  )
}
