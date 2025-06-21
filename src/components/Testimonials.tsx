"use client"

import { Container } from "@/components/ui/container";
import { MotionDiv } from "@/components/ui/motion";
import { Star } from "lucide-react";
import { Variants } from "framer-motion";

// Define proper types for variants
const testimonialContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const testimonialItemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

// Custom fadeIn function with proper typing
const createFadeIn = (delay: number = 0, direction: string = "up"): Variants => {
  return {
    hidden: {
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
      opacity: 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.6,
        delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};

const testimonials = [
  {
    quote: "Softplan transformed our workflow. We're saving hours every day on tasks that used to be manual and error-prone.",
    author: "Sarah Johnson",
    position: "Operations Director, TechFlow Inc."
  },
  {
    quote: "The analytics dashboard alone is worth the investment. We gained insights we never knew were possible with our previous solution.",
    author: "Michael Chen",
    position: "Data Analyst, Metrics Ltd."
  },
  {
    quote: "Customer support is phenomenal. Any time we've had questions, the team responds quickly and effectively.",
    author: "Emily Rodriguez",
    position: "Project Manager, BuildRight"
  },
  {
    quote: "Switching to Softplan was the best business decision we made last year. The ROI has been significant and measurable.",
    author: "David Patel",
    position: "CEO, StartupForge"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-primary/5 section-transition">
      <Container>
        <MotionDiv
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={testimonialContainerVariants}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <MotionDiv variants={testimonialItemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold">
              Trusted by Businesses Worldwide
            </h2>
          </MotionDiv>
          <MotionDiv variants={testimonialItemVariants}>
            <p className="text-muted-foreground text-lg">
              Don't just take our word for it. Here's what our customers have to say about their experience.
            </p>
          </MotionDiv>
        </MotionDiv>

        <MotionDiv
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={testimonialContainerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              position={testimonial.position}
              index={index}
            />
          ))}
        </MotionDiv>

        <MotionDiv
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={createFadeIn(0.4)}
          className="mt-16 flex flex-wrap justify-center gap-8"
        >
          {['Company A', 'Company B', 'Company C', 'Company D', 'Company E'].map((company, index) => (
            <div key={index} className="text-xl font-display text-muted-foreground/70">
              {company}
            </div>
          ))}
        </MotionDiv>
      </Container>
    </section>
  );
};

interface TestimonialCardProps {
  quote: string;
  author: string;
  position: string;
  index: number;
  visible?: boolean;
}

const TestimonialCard = ({ quote, author, position, index, visible = true }: TestimonialCardProps) => {
  if (!visible) return null;
  
  return (
    <MotionDiv
      variants={testimonialItemVariants}
      className="bg-white rounded-xl p-6 shadow-sm border"
    >
      <div className="flex mb-4">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star key={star} className="h-4 w-4 text-amber-400 fill-amber-400" />
        ))}
      </div>
      <blockquote className="text-lg mb-4">"{quote}"</blockquote>
      <div className="flex items-center">
        <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold">
          {author.charAt(0)}
        </div>
        <div className="ml-3">
          <div className="font-medium">{author}</div>
          <div className="text-sm text-muted-foreground">{position}</div>
        </div>
      </div>
    </MotionDiv>
  );
};

export default Testimonials;
