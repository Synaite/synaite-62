
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

interface CalendlyDialogProps {
  children: React.ReactNode;
}

const CalendlyDialog = ({ children }: CalendlyDialogProps) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-4xl h-[80vh] p-0">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-background/80 z-10">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
              <p className="mt-4 text-foreground">Loading calendar...</p>
            </div>
          </div>
        )}
        <iframe
          src="https://calendly.com/tom-synaite/30min"
          style={{ width: "100%", height: "100%" }}
          frameBorder="0"
          onLoad={() => setIsLoading(false)}
          title="Book a call with Synaite"
        ></iframe>
      </DialogContent>
    </Dialog>
  );
};

export default CalendlyDialog;
