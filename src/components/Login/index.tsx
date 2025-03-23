'use client'

import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import Navbar from "@/components/Navbar"

export default function LoginComponent() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Container className="flex-1 flex items-center justify-center py-24">
        <div className="bg-card/50 p-8 rounded-2xl border border-border/50 w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold">Welcome back</h1>
            <p className="text-muted-foreground mt-2">Sign in to your account</p>
          </div>

          <form className="space-y-4">
            <div>
              <Input type="email" placeholder="Email address" />
            </div>
            <div>
              <Input type="password" placeholder="Password" />
            </div>
            <Button className="w-full">Sign in</Button>
          </form>

          <div className="mt-6 text-center text-sm">
            <p className="text-muted-foreground">
              Don't have an account?{' '}
              <Link href="/signup" className="text-primary hover:underline">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </Container>
    </div>
  )
} 