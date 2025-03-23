import { Container } from "@/components/ui/container"

const faqs = [
  {
    question: "How does CanteenX help manage orders?",
    answer: "CanteenX provides a comprehensive order management system that tracks orders in real-time, manages queues efficiently, and sends notifications to both staff and customers."
  },
  {
    question: "Can I customize the menu items?",
    answer: "Yes, you have full control over your menu items, including prices, descriptions, and availability. You can also create special menus for different times of the day."
  },
  {
    question: "What kind of analytics are available?",
    answer: "Our analytics dashboard provides insights into sales trends, popular items, peak hours, customer preferences, and inventory management to help you make data-driven decisions."
  },
  {
    question: "Is technical support included?",
    answer: "Yes, all plans include technical support. Premium plans include priority support with faster response times and dedicated support channels."
  }
]

export default function FAQ() {
  return (
    <section id="faq" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-[0.1] z-0"></div>
      <Container className="relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg">
            Find answers to common questions about CanteenX
          </p>
        </div>

        <div className="max-w-4xl mx-auto divide-y divide-border">
          {faqs.map((faq, index) => (
            <div key={index} className="py-6">
              <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
              <p className="text-muted-foreground">{faq.answer}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
} 