
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
  title: "Sign Up - CanteenX",
  description: "Create your CanteenX account",
};

export default function SignUp() {
  return (
    <PageTransition>
      <div className="min-h-screen relative bg-background">
        <div className="absolute inset-0 bg-grid opacity-[0.1] z-0 pointer-events-none"></div>
        <div className="bg-glow bottom-1/3 right-1/4 animate-float pointer-events-none"></div>
        
        <Navbar />
        
        <section className="py-24 relative z-10">
          <Container>
            <div className="max-w-md mx-auto">
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold mb-2">Create an account</h1>
                <p className="text-muted-foreground">
                  Join CanteenX to streamline your canteen operations
                </p>
              </div>
              
              <div className="glass-card rounded-xl p-6">
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">First name</Label>
                      <Input 
                        id="first-name" 
                        placeholder="John" 
                        className="bg-muted/30 border-primary/20"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">Last name</Label>
                      <Input 
                        id="last-name" 
                        placeholder="Smith" 
                        className="bg-muted/30 border-primary/20"
                        required
                      />
                    </div>
                  </div>
                  
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
                    <Label htmlFor="password">Password</Label>
                    <Input 
                      id="password" 
                      type="password" 
                      placeholder="Create a password" 
                      className="bg-muted/30 border-primary/20"
                      required
                    />
                    <p className="text-xs text-muted-foreground">
                      Must be at least 8 characters with uppercase, lowercase, and a number
                    </p>
                  </div>
                  
                  <div className="flex items-start space-x-2">
                    <Checkbox id="terms" className="mt-1" />
                    <Label htmlFor="terms" className="text-sm font-normal">
                      I agree to the{" "}
                      <Link 
                        href="#" 
                        className="text-primary hover:text-accent transition-colors"
                      >
                        Terms of Service
                      </Link>
                      {" "}and{" "}
                      <Link 
                        href="#" 
                        className="text-primary hover:text-accent transition-colors"
                      >
                        Privacy Policy
                      </Link>
                    </Label>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90"
                  >
                    Create account
                  </Button>
                </form>
                
                <div className="mt-6 text-center text-sm">
                  <p>
                    Already have an account?{" "}
                    <Link 
                      href="/login" 
                      className="text-primary hover:text-accent transition-colors font-medium"
                    >
                      Sign in
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
