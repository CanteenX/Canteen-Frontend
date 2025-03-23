"use client"

import { Container } from "@/components/ui/container";
import { MotionDiv } from "@/components/ui/motion";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-card/50 py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-[0.1] z-0"></div>
      
      <Container className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="col-span-1 md:col-span-2"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="font-display font-bold text-primary-foreground text-lg">C</span>
              </div>
              <span className="font-display text-xl font-semibold">CanteenX</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Streamline your canteen operations, boost efficiency, and enhance the customer experience with our smart canteen management solution.
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
          </MotionDiv>
          
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-3">
              {['Features', 'Pricing', 'Roadmap', 'Updates', 'Beta Program'].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </MotionDiv>
          
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Blog
                </a>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Contact
                </Link>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Legal
                </a>
              </li>
            </ul>
          </MotionDiv>
        </div>
        
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="border-t border-border/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <div className="text-sm text-muted-foreground">
            © {currentYear} CanteenX. All rights reserved.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Cookies Policy
            </a>
          </div>
        </MotionDiv>
      </Container>
    </footer>
  );
};

export default Footer;
