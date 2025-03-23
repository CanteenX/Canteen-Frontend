"use client"

import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { usePathname } from "next/navigation"
import Link from "next/link"

export default function NotFound() {
  const pathname = usePathname()

  return (
    <Container className="flex items-center justify-center min-h-[calc(100vh-4rem)]">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="text-muted-foreground mb-8">
          The page you're looking for at {pathname} doesn't exist.
        </p>
        <Button asChild>
          <Link href="/">
            Return Home
          </Link>
        </Button>
      </div>
    </Container>
  )
}
