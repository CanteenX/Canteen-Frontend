
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

export const metadata = {
  title: "Login - CanteenX",
  description: "Sign in to your CanteenX account",
};

export default function Login() {
  return (
    <PageTransition>
      <div className="min-h-screen relative bg-background">
        <div className="absolute inset-0 bg-grid opacity-[0.1] z-0 pointer-events-none"></div>
        <div className="bg-glow top-1/3 left-1/4 animate-float pointer-events-none"></div>
        
        <Navbar />
        
        <section className="py-24 relative z-10">
          <Container>
            <div className="max-w-md mx-auto">
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold mb-2">Welcome back</h1>
                <p className="text-muted-foreground">
                  Enter your credentials to access your account
                </p>
              </div>
              
              <div className="glass-card rounded-xl p-6">
                <form className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="your@email.com" 
                      className="bg-muted/30 border-primary/20"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="password">Password</Label>
                      <Link 
                        href="#" 
                        className="text-sm text-primary hover:text-accent transition-colors"
                      >
                        Forgot password?
                      </Link>
                    </div>
                    <Input 
                      id="password" 
                      type="password" 
                      placeholder="••••••••" 
                      className="bg-muted/30 border-primary/20"
                      required
                    />
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox id="remember" />
                    <Label htmlFor="remember" className="text-sm font-normal">
                      Remember me for 30 days
                    </Label>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90"
                  >
                    Sign in
                  </Button>
                </form>
                
                <div className="mt-6 text-center text-sm">
                  <p>
                    Don't have an account?{" "}
                    <Link 
                      href="/signup" 
                      className="text-primary hover:text-accent transition-colors font-medium"
                    >
                      Sign up
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>
        
        <Footer />
      </div>
    </PageTransition>
  );
}
