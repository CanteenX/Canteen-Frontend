
import { Container } from "@/components/ui/container";
import { MotionDiv } from "@/components/ui/motion";
import { 
  ArrowRight, 
  Zap, 
  Shield, 
  BarChart3, 
  RefreshCw, 
  Bell,
  HardDrive
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Experience unparalleled speed and performance across all your devices."
  },
  {
    icon: Shield,
    title: "Secure by Design",
    description: "Enterprise-grade security built into every layer of our software."
  },
  {
    icon: BarChart3,
    title: "Smart Analytics",
    description: "Gain powerful insights with our advanced analytics dashboard."
  },
  {
    icon: RefreshCw,
    title: "Real-time Updates",
    description: "Instant synchronization across all your services and devices."
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    description: "Never miss an important update with our intelligent alert system."
  },
  {
    icon: HardDrive,
    title: "Cloud Storage",
    description: "Secure and unlimited storage for all your canteen data."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-[0.1] z-0"></div>
      <div className="bg-glow top-1/3 right-1/4 animate-float"></div>
      
      <Container className="relative z-10">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Powerful Features, <span className="text-gradient">Simplified Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Discover how our software makes complex tasks effortless with these key features designed for modern businesses.
          </p>
        </MotionDiv>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
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
          <a href="#" className="inline-flex items-center text-primary font-medium hover:text-accent transition-colors">
            Explore all features
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </MotionDiv>
      </Container>
    </section>
  );
};

interface FeatureCardProps {
  icon: React.FC<{ className?: string }>;
  title: string;
  description: string;
  index: number;
}

const FeatureCard = ({ icon: Icon, title, description, index }: FeatureCardProps) => {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="feature-card glass-card rounded-xl overflow-hidden"
    >
      <div className="p-6">
        <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-muted text-primary/80">
          <Icon className="h-6 w-6 feature-icon transition-colors duration-300" />
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </MotionDiv>
  );
};

export default Features;
