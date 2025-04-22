import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import React from "react";

interface CalendlyDialogProps {
  children: React.ReactNode;
}

const CalendlyDialog = ({ children }: CalendlyDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-4xl h-[80vh] p-0">
        <iframe
          src="https://calendly.com/tom-synaite/30min"
          style={{ width: "100%", height: "100%" }}
          frameBorder="0"
        ></iframe>
      </DialogContent>
    </Dialog>
  );
};

export default CalendlyDialog;
