
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Home } from "lucide-react";

export const metadata = {
  title: "Page Not Found - CanteenX",
  description: "The page you're looking for doesn't exist.",
};

export default function NotFound() {
  return (
    <div className="min-h-screen relative bg-background flex flex-col">
      <div className="absolute inset-0 bg-grid opacity-[0.1] z-0 pointer-events-none"></div>
      <div className="bg-glow top-1/3 left-1/4 animate-float pointer-events-none"></div>
      <div className="bg-glow bottom-1/3 right-1/4 animate-float pointer-events-none" style={{ animationDelay: "-3s" }}></div>
      
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center py-20">
        <Container>
          <div className="max-w-md mx-auto text-center">
            <h1 className="text-9xl font-bold text-primary/20 mb-4">404</h1>
            <h2 className="text-2xl font-bold mb-4">Page Not Found</h2>
            <p className="text-muted-foreground mb-8">
              The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
            
            <Button asChild className="bg-gradient-to-r from-primary to-accent hover:opacity-90">
              <Link href="/">
                <Home className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
          </div>
        </Container>
      </main>
      
      <Footer />
    </div>
  );
}
