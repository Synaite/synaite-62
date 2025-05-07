
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FeaturesSection from "@/components/FeaturesSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingBookButton from "@/components/FloatingBookButton";
import { useEffect } from "react";

const Index = () => {
  // Set page metadata for SEO
  useEffect(() => {
    document.title = "Synaite | Bespoke AI Solutions";
    
    // Control smooth scrolling for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      if (target.tagName === 'A' && target.hash) {
        const id = target.hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          e.preventDefault();
          window.scrollTo({
            top: element.offsetTop - 100,
            behavior: 'smooth'
          });
        }
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);
  
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300 overflow-hidden">
      <Navbar />
      <main> {/* Removed the pt-16 padding to let the HeroSection handle it */}
        <HeroSection />
        <AboutSection />
        <FeaturesSection />
        <div id="faq">
          <FAQSection />
        </div>
        <ContactSection />
      </main>
      <Footer />
      <FloatingBookButton />
    </div>
  );
};

export default Index;
