
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { MotionDiv } from "@/components/ui/motion";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <MotionDiv
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 ${
        scrolled ? "backdrop-blur-xl bg-background/80 border-b border-border/50" : ""
      }`}
    >
      <Container className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <MotionDiv
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="purple-glow"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <span className="font-display font-bold text-primary-foreground text-lg">C</span>
            </div>
          </MotionDiv>
          <span className="font-display text-xl font-semibold text-foreground">CanteenX</span>
        </div>

        <div className="hidden md:flex items-center">
          <MotionDiv
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-secondary rounded-full py-1 px-1"
          >
            <nav className="flex space-x-1">
              {[
                { name: "Features", href: "/" },
                { name: "Pricing", href: "/" },
                { name: "Company", href: "/" },
                { name: "Blog", href: "/" },
                { name: "Contact", href: "/contact" }
              ].map((item) => (
                <NavItem key={item.name} href={item.href}>
                  {item.name}
                </NavItem>
              ))}
            </nav>
          </MotionDiv>
        </div>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          
          <div className="hidden sm:flex items-center gap-4">
            <Button variant="ghost" asChild className="text-foreground/80 hover:text-foreground hover:bg-secondary">
              <Link to="/login">Login</Link>
            </Button>
            <Button 
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground shadow-[0_0_15px_rgba(155,135,245,0.4)] hover:shadow-[0_0_20px_rgba(155,135,245,0.6)] transition-all duration-300"
              asChild
            >
              <Link to="/signup">Start free trial</Link>
            </Button>
          </div>
          
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </Container>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border shadow-xl">
          <Container className="py-4 flex flex-col space-y-3">
            {[
              { name: "Features", href: "#features" },
              { name: "Pricing", href: "#pricing" },
              { name: "Company", href: "#" },
              { name: "Blog", href: "#" },
              { name: "Contact", href: "/contact" }
            ].map((item) => (
              <NavItemMobile 
                key={item.name} 
                href={item.href} 
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </NavItemMobile>
            ))}
            <div className="pt-2 flex gap-4 border-t border-border/50">
              <Button variant="ghost" size="sm" asChild className="flex-1 text-foreground/80">
                <Link to="/">Login</Link>
              </Button>
              <Button size="sm" asChild className="flex-1 bg-gradient-to-r from-primary to-accent">
                <Link to="/">Start free trial</Link>
              </Button>
            </div>
          </Container>
        </div>
      )}
    </MotionDiv>
  );
};

interface NavItemProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const NavItem = ({ href, children }: NavItemProps) => {
  return (
    <a
      href={href}
      className="px-4 py-2 text-sm font-medium rounded-full text-foreground/70 hover:text-foreground transition-colors duration-200"
    >
      {children}
    </a>
  );
};

const NavItemMobile = ({ href, children, onClick }: NavItemProps) => {
  return (
    <a
      href={href}
      className="text-foreground/70 hover:text-foreground transition-colors duration-200 text-sm font-medium px-2 py-2"
      onClick={onClick}
    >
      {children}
    </a>
  );
};

export default Navbar;
