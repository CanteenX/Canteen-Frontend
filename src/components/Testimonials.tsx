"use client"

import { Container } from "@/components/ui/container";
import { MotionDiv, containerVariants, fadeIn, itemVariants } from "@/components/ui/motion";
import { Star } from "lucide-react";

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
          variants={containerVariants}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <MotionDiv variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold">
              Trusted by Businesses Worldwide
            </h2>
          </MotionDiv>
          <MotionDiv variants={itemVariants}>
            <p className="text-muted-foreground text-lg">
              Don't just take our word for it. Here's what our customers have to say about their experience.
            </p>
          </MotionDiv>
        </MotionDiv>

        <MotionDiv
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
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
          variants={fadeIn(0.4)}
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
}

const TestimonialCard = ({ quote, author, position, index }: TestimonialCardProps) => {
  return (
    <MotionDiv
      variants={itemVariants}
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
