
import { useState, useEffect } from "react";
import { CalendarDays } from "lucide-react";
import CalendlyDialog from "./CalendlyDialog";
import { GradientButton } from "./ui/gradient-button";

const FloatingBookButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const showThreshold = 300;
      
      if (scrollY > showThreshold) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className={`fixed bottom-8 right-8 z-50 transition-all duration-500 ease-in-out transform ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
      }`}
    >
      <CalendlyDialog>
        <GradientButton 
          size="lg" 
          className="shadow-lg shadow-primary/20 hover:shadow-primary/30 hover:scale-105 transition-all duration-300"
        >
          <CalendarDays className="mr-2" />
          Book a Call
        </GradientButton>
      </CalendlyDialog>
    </div>
  );
};

export default FloatingBookButton;
