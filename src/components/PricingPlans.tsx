
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { MotionDiv } from "@/components/ui/motion";
import { Check } from "lucide-react";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";

const plans = [
  {
    name: "Starter",
    price: { monthly: 29, annually: 290 },
    description: "Perfect for individuals and small teams.",
    features: [
      "Up to 5 team members",
      "10GB storage",
      "Basic analytics",
      "24/7 support",
      "API access"
    ],
    popular: false
  },
  {
    name: "Professional",
    price: { monthly: 79, annually: 790 },
    description: "Ideal for growing businesses and teams.",
    features: [
      "Up to 15 team members",
      "50GB storage",
      "Advanced analytics",
      "24/7 priority support",
      "API access",
      "Admin controls",
      "Custom integrations"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: { monthly: 199, annually: 1990 },
    description: "For large organizations with complex needs.",
    features: [
      "Unlimited team members",
      "500GB storage",
      "Premium analytics",
      "24/7 dedicated support",
      "API access",
      "Advanced admin controls",
      "Custom integrations",
      "On-premise options",
      "SLA agreement"
    ],
    popular: false
  }
];

const PricingPlans = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annually'>('monthly');

  return (
    <section id="pricing" className="py-24 section-transition relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-[0.1] z-0"></div>
      <div className="bg-glow top-1/2 left-1/4 animate-float"></div>
      
      <Container className="relative z-10">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Simple, <span className="text-gradient">Transparent</span> Pricing
          </h2>
          <p className="text-muted-foreground text-lg">
            Choose the plan that works best for your needs, with no hidden fees or surprises.
          </p>
          
          <MotionDiv 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-8 inline-flex items-center rounded-full p-1 border border-border bg-card"
          >
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 text-sm font-medium rounded-full transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-primary text-primary-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('annually')}
              className={`px-6 py-2 text-sm font-medium rounded-full transition-all ${
                billingCycle === 'annually'
                  ? 'bg-primary text-primary-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Annually
              <span className="ml-1 text-xs opacity-90">Save 20%</span>
            </button>
          </MotionDiv>
        </MotionDiv>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <PlanCard
              key={index}
              name={plan.name}
              price={plan.price[billingCycle]}
              description={plan.description}
              features={plan.features}
              popular={plan.popular}
              billingCycle={billingCycle}
              index={index}
            />
          ))}
        </div>

        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="glass-card max-w-4xl mx-auto rounded-xl">
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold mb-2">Need a custom plan?</h3>
              <p className="text-muted-foreground mb-4">
                Contact our sales team to build a plan tailored to your specific requirements.
              </p>
              <Button variant="outline" className="border-primary/30 bg-muted/30 hover:bg-muted/50">
                Contact Sales
              </Button>
            </div>
          </div>
        </MotionDiv>
      </Container>
    </section>
  );
};

interface PlanCardProps {
  name: string;
  price: number;
  description: string;
  features: string[];
  popular: boolean;
  billingCycle: 'monthly' | 'annually';
  index: number;
}

const PlanCard = ({ name, price, description, features, popular, billingCycle, index }: PlanCardProps) => {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative h-full"
    >
      <div className={`gradient-border h-full rounded-xl ${
        popular ? 'purple-glow' : ''
      }`}>
        <div className="gradient-border-content relative">
          {popular && (
            <Badge className="absolute -top-2 -right-2 bg-gradient-to-r from-primary to-accent border-0 text-primary-foreground">
              Most Popular
            </Badge>
          )}
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold">{name}</h3>
            <p className="text-muted-foreground text-sm mt-1">{description}</p>
          </div>
          
          <div className="mb-6 space-y-2">
            <div className="flex items-baseline">
              <span className="text-4xl font-bold">${price}</span>
              <span className="text-muted-foreground ml-2">/{billingCycle === 'monthly' ? 'month' : 'year'}</span>
            </div>
            {billingCycle === 'annually' && (
              <div className="text-primary text-sm font-medium">Save 20% with annual billing</div>
            )}
          </div>
          
          <Button 
            className={`w-full ${
              popular 
                ? 'bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90' 
                : 'bg-muted hover:bg-muted/80'
            }`}
          >
            Get Started
          </Button>
          
          <div className="mt-6 space-y-2">
            <span className="text-sm font-medium">Includes:</span>
            <ul className="space-y-2">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-start">
                  <Check className="h-4 w-4 text-primary mt-1 mr-2 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </MotionDiv>
  );
};

export default PricingPlans;
