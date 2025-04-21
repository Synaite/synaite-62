import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FeaturesSection from "@/components/FeaturesSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingBookButton from "@/components/FloatingBookButton";
const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <FeaturesSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingBookButton />
    </div>
  );
};
export default Index;
