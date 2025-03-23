import { Metadata } from 'next'
import SignUp from "@/components/SignUp"

export const metadata: Metadata = {
  title: "Sign Up - CanteenX",
  description: "Create your CanteenX account",
}

export default function SignUpPage() {
  return <SignUp />
}
