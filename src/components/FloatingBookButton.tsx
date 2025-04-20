
import { GradientButton } from "./ui/gradient-button";
import { CalendarClock } from "lucide-react";
import CalendlyDialog from "./CalendlyDialog";

const FloatingBookButton = () => {
  return (
    <div className="fixed bottom-8 right-8 z-50">
      <CalendlyDialog>
        <GradientButton size="lg" className="shadow-lg">
          <CalendarClock className="w-5 h-5" />
          Book a Call
        </GradientButton>
      </CalendlyDialog>
    </div>
  );
};

export default FloatingBookButton;
