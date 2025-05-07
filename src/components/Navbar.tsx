
import { useState, useEffect } from "react";
import { GradientButton } from "./ui/gradient-button";
import { CalendarDays } from "lucide-react";
import CalendlyDialog from "./CalendlyDialog";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className={`py-4 px-6 md:px-12 lg:px-24 w-full fixed top-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-background/90 backdrop-blur-md shadow-lg shadow-primary/10" : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src="/lovable-uploads/f007d2c6-856b-4b52-9436-b79517bb105c.png" alt="Synaite Logo" className="h-11 object-contain" />
        </div>
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection('about')}
            className="text-foreground hover:text-primary transition-colors group relative font-medium"
          >
            About Us
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </button>
          <button
            onClick={() => scrollToSection('features')}
            className="text-foreground hover:text-primary transition-colors group relative font-medium"
          >
            Features
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </button>
          <button
            onClick={() => scrollToSection('faq')}
            className="text-foreground hover:text-primary transition-colors group relative font-medium"
          >
            FAQ
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-foreground hover:text-primary transition-colors group relative font-medium"
          >
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </button>
          <CalendlyDialog>
            <GradientButton size="default" className="animate-pulse hover:animate-none">
              <CalendarDays className="mr-2" />
              Book a Call
            </GradientButton>
          </CalendlyDialog>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-foreground" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {!isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden pt-4 pb-2 bg-background/95 backdrop-blur-md mt-4 rounded-lg shadow-lg">
          <div className="flex flex-col space-y-4 px-4">
            <button
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary transition-colors py-2 font-medium"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection('features')}
              className="text-foreground hover:text-primary transition-colors py-2 font-medium"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-foreground hover:text-primary transition-colors py-2 font-medium"
            >
              FAQ
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-primary transition-colors py-2 font-medium"
            >
              Contact
            </button>
            <CalendlyDialog>
              <GradientButton size="default" className="w-full">
                <CalendarDays className="mr-2" />
                Book a Call
              </GradientButton>
            </CalendlyDialog>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
