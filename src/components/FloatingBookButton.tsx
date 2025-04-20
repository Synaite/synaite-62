
import { CalendarDays } from "lucide-react";
import CalendlyDialog from "./CalendlyDialog";
import { GradientButton } from "./ui/gradient-button";

const FloatingBookButton = () => {
  return (
    <div className="fixed bottom-8 right-8 z-50">
      <CalendlyDialog>
        <GradientButton size="lg" className="shadow-lg">
          <CalendarDays className="mr-2" />
          Book a Call
        </GradientButton>
      </CalendlyDialog>
    </div>
  );
};

export default FloatingBookButton;
