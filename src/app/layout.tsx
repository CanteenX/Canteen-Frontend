import { Providers } from "@/components/providers"
import { Inter } from "next/font/google"
import "./globals.css"
import { Metadata } from "next"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "CanteenX - Digital Canteen Management System",
    template: "%s | CanteenX"
  },
  description: "Streamline canteen operations with our all-in-one platform",
  keywords: ["canteen", "management", "digital", "food service"],
  authors: [{ name: "CanteenX Team" }],
  creator: "CanteenX",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://canteenx.com",
    title: "CanteenX - Digital Canteen Management System",
    description: "Streamline canteen operations with our all-in-one platform",
    siteName: "CanteenX"
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
