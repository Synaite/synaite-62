
import AboutSection from "@/components/AboutSection";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import FAQSection from "@/components/FAQSection";
import FeaturesSection from "@/components/FeaturesSection";
import FloatingBookButton from "@/components/FloatingBookButton";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import MigrationCTA from "@/components/MigrationCTA";
import Navbar from "@/components/Navbar";
import OSPanelsSection from "@/components/OSPanelsSection";
import PartnersSection from "@/components/PartnersSection";
import PricingSection from "@/components/PricingSection";
import StatsSection from "@/components/StatsSection";
import SupportSection from "@/components/SupportSection";
import TestimonialsSection from "@/components/TestimonialsSection";

const Index = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <PartnersSection />
      <FeaturesSection />
      <StatsSection />
      <OSPanelsSection />
      <AboutSection />
      <TestimonialsSection />
      <PricingSection />
      <SupportSection />
      <FAQSection />
      <BlogSection />
      <MigrationCTA />
      <ContactSection />
      <Footer />
      <FloatingBookButton />
    </>
  );
};

export default Index;
