import { Container } from "@/components/ui/container"
import { ArrowRight, Zap, Shield, BarChart2, RefreshCw, Bell, Cloud } from "lucide-react"
import Link from "next/link"

const features = [
  {
    title: "Lightning Fast",
    description: "Experience unparalleled speed and performance across all your devices.",
    icon: <Zap className="w-8 h-8 text-primary" />,
    bgClass: "bg-primary/10"
  },
  {
    title: "Secure by Design",
    description: "Enterprise-grade security built into every layer of our software.",
    icon: <Shield className="w-8 h-8 text-primary" />,
    bgClass: "bg-primary/10"
  },
  {
    title: "Smart Analytics",
    description: "Gain powerful insights with our advanced analytics dashboard.",
    icon: <BarChart2 className="w-8 h-8 text-primary" />,
    bgClass: "bg-primary/10"
  },
  {
    title: "Real-time Updates",
    description: "Instant synchronization across all your services and devices.",
    icon: <RefreshCw className="w-8 h-8 text-primary" />,
    bgClass: "bg-primary/10"
  },
  {
    title: "Smart Notifications",
    description: "Never miss an important update with our intelligent alert system.",
    icon: <Bell className="w-8 h-8 text-primary" />,
    bgClass: "bg-primary/10"
  },
  {
    title: "Cloud Storage",
    description: "Secure and unlimited storage for all your canteen data.",
    icon: <Cloud className="w-8 h-8 text-primary" />,
    bgClass: "bg-primary/10"
  }
]

export default function Features() {
  return (
    <section id="features" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-[0.1] z-0"></div>
      <Container className="relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">
            Powerful Features, <span className="text-gradient">Simplified Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Discover how our software makes complex tasks effortless with these key features
            designed for modern businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative bg-card/50 border border-border/50 rounded-xl p-8 hover:border-primary/50 transition-colors"
            >
              <div className={`${feature.bgClass} w-12 h-12 rounded-lg flex items-center justify-center mb-6`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link 
            href="#"
            className="text-primary hover:text-primary/90 inline-flex items-center gap-2 text-lg font-medium"
          >
            Explore all features
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </Container>
    </section>
  )
} 