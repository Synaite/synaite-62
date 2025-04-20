import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import PricingSection from "@/components/PricingSection";
import FeaturesSection from "@/components/FeaturesSection";
import HardwareSection from "@/components/HardwareSection";
import OSPanelsSection from "@/components/OSPanelsSection";
import PartnersSection from "@/components/PartnersSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import MigrationCTA from "@/components/MigrationCTA";
import FAQSection from "@/components/FAQSection";
import BlogSection from "@/components/BlogSection";
import SupportSection from "@/components/SupportSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-dark text-white">
      <Navbar />
      <main>
        <HeroSection />
        <StatsSection />
        <FeaturesSection />
        <HardwareSection />
        <PricingSection />
        <OSPanelsSection />
        <PartnersSection />
        <TestimonialsSection />
        <MigrationCTA />
        <FAQSection />
        <BlogSection />
        <SupportSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
