"use client"

import { Container } from "@/components/ui/container";
import { MotionDiv } from "@/components/ui/motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is CanteenX?",
    answer: "CanteenX is an all-in-one platform designed to digitize canteen operations, streamline the ordering process, and enhance the overall dining experience for customers. It includes mobile apps for customers, web-based admin panels for canteen owners, and a super admin panel for platform management."
  },
  {
    question: "How does CanteenX reduce wait times?",
    answer: "CanteenX allows customers to browse menus and order online with digital payments, significantly reducing queues at counters. The system also provides real-time updates on order status, further improving efficiency."
  },
  {
    question: "What features are included in the admin dashboard?",
    answer: "The admin dashboard includes real-time order management, inventory tracking with low stock alerts, menu management tools, customer relationship management features, and comprehensive analytics reporting."
  },
  {
    question: "Is CanteenX suitable for my business size?",
    answer: "Yes! CanteenX is designed to be scalable and can accommodate businesses of all sizes, from small campus canteens to large food courts or corporate cafeterias. Our tiered subscription model ensures you only pay for what you need."
  },
  {
    question: "How is the platform monetized?",
    answer: "CanteenX operates on a subscription-based model with optional advanced features. There's also an optional commission-based structure for businesses that prefer that model."
  },
  {
    question: "Can I integrate with my existing payment systems?",
    answer: "Absolutely! CanteenX integrates with major payment gateways including Razorpay, PhonePe, and Google Pay. Custom integrations can be arranged for specific requirements."
  },
  {
    question: "Is there a trial period available?",
    answer: "Yes, we offer a 14-day free trial that gives you access to all features so you can experience the full benefits of CanteenX before committing to a subscription."
  },
  {
    question: "How secure is the platform?",
    answer: "Security is our priority. CanteenX uses industry-standard encryption for all data, secure payment processing, and regular security audits to ensure your data and your customers' information remains protected."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 section-transition relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-[0.1] z-0"></div>
      <div className="bg-glow bottom-1/3 right-1/3 animate-float"></div>
      
      <Container className="relative z-10">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Find answers to common questions about CanteenX
            </p>
          </div>

          <div className="glass-card rounded-xl p-6">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <MotionDiv 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <AccordionItem value={`item-${index}`} className="border-border/30">
                    <AccordionTrigger className="text-left text-base font-medium hover:text-primary">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </MotionDiv>
              ))}
            </Accordion>
          </div>
          
          <MotionDiv 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-12 text-center"
          >
            <p className="text-muted-foreground mb-4">
              Still have questions?
            </p>
            <div className="inline-flex font-medium text-primary hover:text-accent transition-colors">
              <a href="mailto:support@canteenx.com">Contact our support team</a>
            </div>
          </MotionDiv>
        </MotionDiv>
      </Container>
    </section>
  );
};

export default FAQ;
