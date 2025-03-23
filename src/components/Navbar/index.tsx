'use client'

import Link from 'next/link'
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { NavbarClient } from './navbar-client'
import { useScrollTo } from '@/hooks/useScrollTo'
import { usePathname } from 'next/navigation'

const navigation = [
  { name: "Home", href: "/#home", id: "home" },
  { name: "Features", href: "/#features", id: "features" },
  { name: "Pricing", href: "/#pricing", id: "pricing" },
  { name: "FAQ", href: "/#faq", id: "faq" },
  { name: "Contact", href: "/contact" }
]

export default function Navbar() {
  const scrollTo = useScrollTo()
  const pathname = usePathname()
  const isHomePage = pathname === '/'

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id?: string) => {
    if (isHomePage && id) {
      e.preventDefault()
      scrollTo(id)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out-expo py-4 px-6 md:px-8 bg-background/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <span className="font-display font-bold text-primary-foreground text-lg">C</span>
          </div>
          <span className="font-display text-xl font-semibold">CanteenX</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-muted-foreground hover:text-foreground transition-colors"
              onClick={(e) => handleClick(e, item.id)}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Link 
            href="/login"
            className="hidden md:inline-flex text-muted-foreground hover:text-foreground transition-colors"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="hidden md:inline-flex items-center justify-center rounded-full bg-primary px-4 py-1.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Sign Up
          </Link>
          
          {/* Mobile Menu Button - Client Side */}
          <NavbarClient navigation={navigation} />
        </div>
      </div>
    </header>
  )
} 