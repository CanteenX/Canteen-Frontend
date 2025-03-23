import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { Sparkles, ArrowRight } from "lucide-react"
import Link from "next/link"

export function HeroContent() {
  return (
    <Container className="relative z-10">
      <div className="flex flex-col items-center text-center mb-16">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight max-w-5xl">
          Transform your canteen <br className="hidden sm:block" />
          <span className="text-gradient">operations</span> with CanteenX
        </h1>
        
        <p className="text-xl text-muted-foreground max-w-2xl mb-8">
          Streamline ordering, reduce queues, and gain valuable insights with our 
          all-in-one canteen management solution.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
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
          <Button 
            variant="outline" 
            size="lg" 
            className="border-primary/20 bg-muted/30 text-foreground"
          >
            Book a demo
          </Button>
        </div>
      </div>

      {/* Dashboard Preview - Server Rendered */}
      <div className="relative mx-auto max-w-5xl mt-16">
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
                    <div className="h-6 bg-muted/50 rounded-md w-full"></div>
                    <div className="h-6 bg-muted/50 rounded-md w-full"></div>
                    <div className="h-6 bg-muted/50 rounded-md w-full"></div>
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
      </div>
    </Container>
  )
} 