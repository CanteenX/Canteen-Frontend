"use client"

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { MotionDiv } from "@/components/ui/motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="pt-32 pb-24 overflow-hidden relative">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid opacity-[0.15] z-0"></div>
      <div className="bg-glow top-20 left-1/4 animate-float"></div>
      <div className="bg-glow bottom-20 right-1/4 animate-float" style={{ animationDelay: "-2s" }}></div>
      
      <Container className="relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-6"
          >
            <Button
              variant="outline"
              className="rounded-full h-10 border-primary/20 bg-muted/30 text-primary gap-2 text-sm"
            >
              <Sparkles className="h-4 w-4" />
              <span>Canteen management reimagined</span>
            </Button>
          </MotionDiv>
          
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight max-w-5xl">
              Transform your canteen <br className="hidden sm:block" />
              <span className="text-gradient">operations</span> with CanteenX
            </h1>
          </MotionDiv>
          
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <p className="text-xl text-muted-foreground max-w-2xl mb-8">
              Streamline ordering, reduce queues, and gain valuable insights with our 
              all-in-one canteen management solution.
            </p>
          </MotionDiv>
          
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90 shadow-lg px-8" 
              asChild
            >
              <Link href="/">
                Start free trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="border-primary/20 bg-muted/30 text-foreground">
              Book a demo
            </Button>
          </MotionDiv>
        </div>

        {/* Dashboard Preview */}
        <MotionDiv
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="relative mx-auto max-w-5xl"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-xl opacity-70"></div>
          <div className="glass-card rounded-2xl border border-white/10 shadow-2xl overflow-hidden relative z-10">
            <div className="p-1">
              <div className="bg-card rounded-xl p-4 overflow-hidden">
                <div className="flex items-center justify-between mb-4 px-2">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500 opacity-70"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500 opacity-70"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500 opacity-70"></div>
                  </div>
                  <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                    <span>CanteenX Dashboard</span>
                    <span>•</span>
                    <span>Admin View</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4 p-2">
                  <div className="col-span-3 md:col-span-2 bg-muted/30 rounded-lg p-4">
                    <h3 className="text-sm font-medium mb-3">Today's Orders</h3>
                    <div className="space-y-2">
                      <div className="h-6 bg-muted/50 rounded-md w-full animate-pulse-subtle"></div>
                      <div className="h-6 bg-muted/50 rounded-md w-full animate-pulse-subtle" style={{ animationDelay: '0.2s' }}></div>
                      <div className="h-6 bg-muted/50 rounded-md w-full animate-pulse-subtle" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                  </div>
                  
                  <div className="col-span-3 md:col-span-1 bg-muted/30 rounded-lg p-4">
                    <h3 className="text-sm font-medium mb-3">Analytics</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between mb-1">
                        <span className="text-xs text-muted-foreground">Orders Completed</span>
                        <span className="text-xs font-medium">85%</span>
                      </div>
                      <div className="w-full bg-muted/40 rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{ width: '85%' }}></div>
                      </div>
                      
                      <div className="flex justify-between mb-1 mt-3">
                        <span className="text-xs text-muted-foreground">Customer Satisfaction</span>
                        <span className="text-xs font-medium">92%</span>
                      </div>
                      <div className="w-full bg-muted/40 rounded-full h-2">
                        <div className="bg-accent h-2 rounded-full" style={{ width: '92%' }}></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="col-span-3 bg-muted/30 rounded-lg p-4">
                    <h3 className="text-sm font-medium mb-3">Recent Activity</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      <div className="bg-muted/40 rounded p-3">
                        <div className="h-8 w-8 rounded-full bg-primary/20 mb-2 flex items-center justify-center">
                          <span className="text-xs text-primary">1</span>
                        </div>
                        <div className="h-3 bg-muted/60 rounded w-3/4 mb-1"></div>
                        <div className="h-3 bg-muted/60 rounded w-1/2"></div>
                      </div>
                      <div className="bg-muted/40 rounded p-3">
                        <div className="h-8 w-8 rounded-full bg-accent/20 mb-2 flex items-center justify-center">
                          <span className="text-xs text-accent">2</span>
                        </div>
                        <div className="h-3 bg-muted/60 rounded w-3/4 mb-1"></div>
                        <div className="h-3 bg-muted/60 rounded w-1/2"></div>
                      </div>
                      <div className="bg-muted/40 rounded p-3">
                        <div className="h-8 w-8 rounded-full bg-purple-500/20 mb-2 flex items-center justify-center">
                          <span className="text-xs text-purple-500">3</span>
                        </div>
                        <div className="h-3 bg-muted/60 rounded w-3/4 mb-1"></div>
                        <div className="h-3 bg-muted/60 rounded w-1/2"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MotionDiv>
      </Container>
    </section>
  );
};

export default Hero;
