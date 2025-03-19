
import FAQ from "@/components/FAQ";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import PricingPlans from "@/components/PricingPlans";
import { MotionDiv } from "@/components/ui/motion";
import { useEffect } from "react";

const Index = () => {
  // Smooth scroll function for anchor links
  const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");
    if (!href?.startsWith("#")) return;
    
    const targetId = href === "#" ? "" : href.substring(1);
    const targetElement = targetId ? document.getElementById(targetId) : document.body;
    
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth"
      });
    }
  };

  // Add event listener for all anchor links
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', smoothScroll as any);
    });

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', smoothScroll as any);
      });
    };
  }, []);

  return (
    <MotionDiv
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background"
    >
      <Navbar />
      <Hero />
      <Features />
      <PricingPlans />
      <FAQ />
      <Footer />
    </MotionDiv>
  );
};

export default Index;
