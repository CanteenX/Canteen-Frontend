import { Metadata } from 'next'
import LoginComponent from "@/components/Login"

export const metadata: Metadata = {
  title: "Login - CanteenX",
  description: "Log in to your CanteenX account",
}

export default function LoginPage() {
  return <LoginComponent />
}
