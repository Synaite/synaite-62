import { useState } from "react";
import { GradientButton } from "./ui/gradient-button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="py-4 md:py-6 px-6 md:px-12 lg:px-24 w-full fixed top-0 z-50 bg-gradient-to-b from-[#101C3A] to-[#050A1A] backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-white">Fusentra</h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <a href="#about" className="text-white hover:text-violet transition-colors">About Us</a>
          <a href="#faq" className="text-white hover:text-violet transition-colors">FAQ</a>
          <a href="#contact" className="text-white hover:text-violet transition-colors">Contact</a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
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
        <div className="md:hidden pt-4 pb-2">
          <div className="flex flex-col space-y-4 px-4">
            <a href="#about" className="text-white hover:text-violet transition-colors py-2">About Us</a>
            <a href="#faq" className="text-white hover:text-violet transition-colors py-2">FAQ</a>
            <a href="#contact" className="text-white hover:text-violet transition-colors py-2">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
