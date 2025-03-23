import { Metadata } from 'next'
import dynamic from 'next/dynamic'

// Import the component dynamically to avoid hydration issues
const LoginComponent = dynamic(() => import('@/components/Login/LoginComponent'), {
  ssr: true
})

export const metadata: Metadata = {
  title: "Login - CanteenX",
  description: "Log in to your CanteenX account",
}

export default function LoginPage() {
  return <LoginComponent />
}
