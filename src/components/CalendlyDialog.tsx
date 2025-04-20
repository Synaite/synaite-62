
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ReactNode } from "react";

interface CalendlyDialogProps {
  children: ReactNode;
}

const CalendlyDialog = ({ children }: CalendlyDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-4xl h-[80vh] p-0">
        <iframe
          src="https://calendly.com/fusentra/discovery-call"
          width="100%"
          height="100%"
          frameBorder="0"
        />
      </DialogContent>
    </Dialog>
  );
};

export default CalendlyDialog;
