import { Container } from "@/components/ui/container";
import { MotionDiv } from "@/components/ui/motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Mail, Phone, Send } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Contact Us - CanteenX',
  description: 'Get in touch with the CanteenX team',
}

export default function Contact() {
  return (
    <MotionDiv
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen relative bg-background"
    >
      <div className="absolute inset-0 bg-grid opacity-[0.1] z-0 pointer-events-none"></div>
      
      <Navbar />
      
      <section className="py-24 pt-32 relative z-10">
        <Container>
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
            <p className="text-lg text-muted-foreground">
              Have questions about CanteenX? We're here to help and would love to hear from you.
            </p>
          </MotionDiv>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <MotionDiv
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="glass-card rounded-xl">
                <div className="p-6 space-y-6">
                  <h2 className="text-xl font-semibold">Contact Information</h2>
                  <p className="text-muted-foreground">Reach out to us using any of these methods</p>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Our Location</h3>
                      <p className="text-muted-foreground">123 Innovation Drive, Tech Park, Bangalore 560103</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Email Us</h3>
                      <p className="text-muted-foreground">hello@canteenx.io</p>
                      <p className="text-muted-foreground">support@canteenx.io</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Call Us</h3>
                      <p className="text-muted-foreground">+91 98765 43210</p>
                      <p className="text-muted-foreground">Monday to Friday, 9am to 6pm</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="glass-card rounded-xl">
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-4">Connect With Us</h2>
                  <p className="text-muted-foreground mb-4">Follow us on social media</p>
                  <div className="flex flex-wrap gap-3">
                    {['Twitter', 'LinkedIn', 'Facebook', 'Instagram'].map((platform, index) => (
                      <Button key={index} variant="outline" size="sm" className="border-primary/20 bg-muted/30 text-foreground hover:bg-muted/50">
                        {platform}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </MotionDiv>
            
            <MotionDiv
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="h-full"
            >
              <div className="glass-card rounded-xl h-full">
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-2">Send us a Message</h2>
                  <p className="text-muted-foreground mb-6">Fill out the form below and we'll get back to you soon</p>
                  
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-foreground">Name</Label>
                        <Input id="name" placeholder="Your name" className="bg-muted/30 border-primary/20" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-foreground">Email</Label>
                        <Input id="email" type="email" placeholder="your@email.com" className="bg-muted/30 border-primary/20" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-foreground">Subject</Label>
                      <Input id="subject" placeholder="How can we help you?" className="bg-muted/30 border-primary/20" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-foreground">Message</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Please describe your question or request in detail" 
                        rows={5}
                        className="bg-muted/30 border-primary/20"
                      />
                    </div>
                    
                    <Button type="submit" className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90">
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </div>
              </div>
            </MotionDiv>
          </div>
        </Container>
      </section>
      
      <Footer />
    </MotionDiv>
  );
}
