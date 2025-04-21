import { useState } from "react";
import { GradientButton } from "./ui/gradient-button";
import { CalendarDays } from "lucide-react";
import CalendlyDialog from "./CalendlyDialog";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="py-4 px-6 md:px-12 lg:px-24 w-full z-50 bg-gradient-to-r from-background to-background/80 backdrop-blur-md border-b border-border shadow-lg shadow-indigo-500/20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold relative">
            <span className="bg-gradient-to-r from-blue-400 to-violet bg-clip-text text-transparent font-extrabold text-2xl">
              Fusentra
            </span>
          </h1>
        </div>
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-foreground hover:text-violet transition-colors group relative font-medium">
            About Us
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-violet transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#faq" className="text-foreground hover:text-violet transition-colors group relative font-medium">
            FAQ
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-violet transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#contact" className="text-foreground hover:text-violet transition-colors group relative font-medium">
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-violet transition-all duration-300 group-hover:w-full"></span>
          </a>
          <CalendlyDialog>
            <GradientButton size="default">
              <CalendarDays className="mr-2" />
              Book a Call
            </GradientButton>
          </CalendlyDialog>
          <div className="ml-4">
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-foreground" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {!isMenuOpen ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>}
        </button>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && 
        <div className="md:hidden pt-4 pb-2">
          <div className="flex flex-col space-y-4 px-4">
            <a href="#about" className="text-foreground hover:text-violet transition-colors py-2">About Us</a>
            <a href="#faq" className="text-foreground hover:text-violet transition-colors py-2">FAQ</a>
            <a href="#contact" className="text-foreground hover:text-violet transition-colors py-2">Contact</a>
            <CalendlyDialog>
              <GradientButton size="default" className="w-full">
                <CalendarDays className="mr-2" />
                Book a Call
              </GradientButton>
            </CalendlyDialog>
            <div>
              <ThemeToggle />
            </div>
          </div>
        </div>
      }
    </nav>
  );
};

export default Navbar;
