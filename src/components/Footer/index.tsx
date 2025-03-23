import { Container } from "@/components/ui/container"
import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  const footerLinks = [
    {
      title: "Product",
      links: ["Features", "Pricing", "Updates", "Beta"]
    },
    {
      title: "Company",
      links: ["About", "Careers", "Contact", "Partners"]
    },
    {
      title: "Resources",
      links: ["Documentation", "Help Center", "Guides", "API Status"]
    }
  ]

  return (
    <footer className="bg-card/50 py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-[0.1] z-0"></div>
      
      <Container className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="font-display font-bold text-primary-foreground text-lg">C</span>
              </div>
              <span className="font-display text-xl font-semibold">CanteenX</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Streamline your canteen operations, boost efficiency, and enhance the customer experience.
            </p>
            <div className="flex space-x-4">
              {['Twitter', 'LinkedIn', 'Facebook', 'GitHub'].map((social, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {footerLinks.map((section, index) => (
            <div key={index} className="space-y-4">
              <h4 className="font-semibold">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href="#"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-border/50 text-center text-muted-foreground">
          <p>&copy; {currentYear} CanteenX. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  )
} 