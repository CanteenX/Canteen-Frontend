import Hero from "@/components/Hero";
import Features from "@/components/Features";
import PricingPlans from "@/components/PricingPlans";
import FAQ from "@/components/FAQ";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Home - CanteenX',
  description: 'Transform your canteen operations with our all-in-one platform',
}

export default function Home() {
  return (
    <>
      <div className="min-h-screen relative bg-background">
        <div className="absolute inset-0 bg-grid opacity-[0.1] z-0 pointer-events-none"></div>
        <Navbar />
        <main>
          <section id="home" className="scroll-mt-20">
            <Hero />
          </section>
          <section id="features" className="scroll-mt-20">
            <Features />
          </section>
          <section id="pricing" className="scroll-mt-20">
            <PricingPlans />
          </section>
          <section id="faq" className="scroll-mt-20">
            <FAQ />
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
