"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { useToast } from "@/components/ui/use-toast";
import { Eye, EyeOff, Lock, Mail, User, ArrowLeft, Check } from "lucide-react";
import { MotionDiv } from "@/components/ui/motion";
import PageTransition from "@/components/PageTransition";

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const { toast } = useToast();
  
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Account created!",
      description: "Welcome to SmartCanteen. You can now log in.",
    });
  };

  const benefits = [
    "Streamline canteen operations",
    "Reduce customer wait times",
    "Get valuable business insights",
    "Enhance customer satisfaction",
    "Scale your business efficiently"
  ];

  return (
    <PageTransition>
      <main className="min-h-screen flex items-center justify-center py-8 md:py-16 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 w-full max-w-6xl">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3 p-8 rounded-xl border border-white/10 bg-card/30 backdrop-blur-sm shadow-lg"
          >
            <div className="mb-6">
              <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to home
              </Link>
            </div>

            <div className="mb-8">
              <motion.h1 
                className="text-2xl font-bold mb-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Create your account
              </motion.h1>
              <motion.p 
                className="text-muted-foreground"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Get started with SmartCanteen dashboard
              </motion.p>
            </div>
            
            <motion.form 
              onSubmit={handleSubmit} 
              className="space-y-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Label htmlFor="firstName" className="text-sm font-medium">First Name</Label>
                    <User className="w-4 h-4 ml-2 text-muted-foreground" />
                  </div>
                  <Input
                    id="firstName"
                    placeholder="John"
                    className="bg-background/50"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-sm font-medium">Last Name</Label>
                  <Input
                    id="lastName"
                    placeholder="Doe"
                    className="bg-background/50"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center">
                  <Label htmlFor="email" className="text-sm font-medium">Email</Label>
                  <Mail className="w-4 h-4 ml-2 text-muted-foreground" />
                </div>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  className="bg-background/50"
                  required
                  autoComplete="email"
                />
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center">
                  <Label htmlFor="password" className="text-sm font-medium">Password</Label>
                  <Lock className="w-4 h-4 ml-2 text-muted-foreground" />
                </div>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="bg-background/50"
                    required
                    autoComplete="new-password"
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  Password must be at least 8 characters long.
                </p>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="businessName" className="text-sm font-medium">Business name</Label>
                <Input
                  id="businessName"
                  placeholder="Your canteen or organization name"
                  className="bg-background/50"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" required />
                  <label
                    htmlFor="terms"
                    className="text-sm text-muted-foreground leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    I agree to the{" "}
                    <Link href="#" className="text-primary hover:underline">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link href="#" className="text-primary hover:underline">
                      Privacy Policy
                    </Link>
                  </label>
                </div>
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/90 backdrop-blur-sm shadow-[0_0_15px_rgba(155,135,245,0.4)] hover:shadow-[0_0_20px_rgba(155,135,245,0.6)] transition-all duration-300"
              >
                Create Account
              </Button>
              
              <div className="relative flex items-center gap-4 py-2">
                <div className="flex-grow border-t border-border/50"></div>
                <span className="text-xs text-muted-foreground">OR</span>
                <div className="flex-grow border-t border-border/50"></div>
              </div>
              
              <Button 
                variant="outline" 
                className="w-full backdrop-blur-sm hover:bg-background/50 border-white/10"
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
                Sign up with Google
              </Button>
              
              <div className="text-center text-sm text-muted-foreground">
                Already have an account?{" "}
                <Link href="/login" className="text-primary hover:underline">
                  Sign in
                </Link>
              </div>
            </motion.form>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden lg:flex lg:col-span-2 bg-primary/5 border border-white/10 backdrop-blur-md rounded-xl p-8 flex-col justify-center"
          >
            <h3 className="text-xl font-semibold mb-6">Why choose SmartCanteen?</h3>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.li 
                  key={index} 
                  className="flex items-start gap-2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 + (index * 0.1) }}
                >
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </motion.li>
              ))}
            </ul>
            <motion.div 
              className="mt-8 p-4 bg-background/20 backdrop-blur-md rounded-lg border border-white/10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <p className="italic text-sm text-muted-foreground">
                "SmartCanteen has transformed our campus dining experience. Order volume is up by 30% and student satisfaction has never been higher."
              </p>
              <p className="mt-2 text-sm font-medium">— Sarah Chen, University Dining Director</p>
            </motion.div>
          </MotionDiv>
        </div>
      </main>
    </PageTransition>
  );
}
