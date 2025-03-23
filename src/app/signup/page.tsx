import { Metadata } from 'next'
import dynamic from 'next/dynamic'

const SignUpComponent = dynamic(() => import('@/components/SignUp/SignUpComponent'), {
  ssr: true
})

export const metadata: Metadata = {
  title: "Sign Up - CanteenX",
  description: "Create your CanteenX account",
}

export default function SignUpPage() {
  return <SignUpComponent />
}
