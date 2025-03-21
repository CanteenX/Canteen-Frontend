
import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out-expo py-4 px-6 md:px-8",
        {
          "bg-background/80 backdrop-blur-xl shadow-sm": isScrolled,
          "bg-transparent": !isScrolled,
        }
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="text-xl font-semibold tracking-tight">
            Essence
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#features"
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
          >
            Features
          </a>
          <a
            href="#products"
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
          >
            Products
          </a>
          <a
            href="#about"
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
          >
            About
          </a>
          <Button variant="outline" size="sm">
            Get Started
          </Button>
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-foreground focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="sr-only">Open main menu</span>
          {!mobileMenuOpen ? (
            <svg
              className="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          ) : (
            <svg
              className="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "md:hidden fixed inset-0 top-[64px] z-40 bg-background/95 backdrop-blur-xl transition-transform duration-300 ease-out-expo",
          {
            "translate-x-0": mobileMenuOpen,
            "translate-x-full": !mobileMenuOpen,
          }
        )}
      >
        <div className="px-4 pt-8 pb-3 space-y-8">
          <a
            href="#features"
            className="block text-base font-medium text-foreground py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Features
          </a>
          <a
            href="#products"
            className="block text-base font-medium text-foreground py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Products
          </a>
          <a
            href="#about"
            className="block text-base font-medium text-foreground py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </a>
          <Button className="w-full justify-center" onClick={() => setMobileMenuOpen(false)}>
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
