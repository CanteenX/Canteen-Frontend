import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Basic",
    price: "29",
    description: "Perfect for small canteens",
    features: [
      "Up to 100 orders per day",
      "Basic analytics",
      "Email support",
      "1 staff account"
    ]
  },
  {
    name: "Pro",
    price: "79",
    description: "For growing businesses",
    features: [
      "Unlimited orders",
      "Advanced analytics",
      "Priority support",
      "5 staff accounts",
      "Inventory management"
    ]
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations",
    features: [
      "Custom order volume",
      "Custom analytics",
      "24/7 support",
      "Unlimited staff accounts",
      "Advanced integrations"
    ]
  }
]

export default function PricingPlans() {
  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-[0.1] z-0"></div>
      <Container className="relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-muted-foreground text-lg">
            Choose the plan that works best for your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-card/50 border border-border/50 rounded-xl p-8 hover:border-primary/50 transition-colors"
            >
              <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold">${plan.price}</span>
                {plan.price !== "Custom" && <span className="text-muted-foreground">/month</span>}
              </div>
              <p className="text-muted-foreground mb-6">{plan.description}</p>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button className="w-full">Get Started</Button>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
} 