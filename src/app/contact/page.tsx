import { Metadata } from 'next'
import Contact from "@/components/Contact"

export const metadata: Metadata = {
  title: "Contact Us - CanteenX",
  description: "Get in touch with the CanteenX team",
}

export default function ContactPage() {
  return <Contact />
}
