
import { Mail, Phone, Linkedin } from "lucide-react";
import { Button } from "./ui/button";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  
  const handleCopyText = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied to clipboard",
      description: "Successfully copied to clipboard",
    });
  };
  
  return (
    <section id="contact" className="py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-[#D6E8FF] to-[#F6FBFF] transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">CONNECT WITH US</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground max-w-2xl text-lg text-center mx-auto">
            We're passionate about exploring how AI can transform the way businesses operate. Whether you're an investor, a fellow founder, or just curious about the future of work — we'd love to connect.
            Feel free to reach out, and let's talk about how AI can take your business to the next level. 🚀
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Phone Card */}
          <div className="bg-white/80 dark:bg-gradient-to-b dark:from-card dark:to-background rounded-xl p-8 shadow-lg border border-primary/20 hover:border-primary/40 transition-all hover:shadow-primary/10 hover:shadow-lg transform hover:translate-y-[-5px] group">
            <div className="flex flex-col items-center">
              <div className="inline-flex p-4 rounded-full bg-primary/10 mb-6 group-hover:bg-primary/20 transition-colors">
                <Phone className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Call Us</h3>
              <p className="text-muted-foreground text-sm mb-4">Book a call to discuss your needs</p>
              <p className="text-foreground mb-4 font-medium">07985152844</p>
              <Button 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary/10 w-full" 
                onClick={() => handleCopyText("07985152844")}
              >
                Copy number
              </Button>
            </div>
          </div>
          {/* Email Card */}
          <div className="bg-white/80 dark:bg-gradient-to-b dark:from-card dark:to-background rounded-xl p-8 shadow-lg border border-primary/20 hover:border-primary/40 transition-all hover:shadow-primary/10 hover:shadow-lg transform hover:translate-y-[-5px] group">
            <div className="flex flex-col items-center">
              <div className="inline-flex p-4 rounded-full bg-primary/10 mb-6 group-hover:bg-primary/20 transition-colors">
                <Mail className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Email Us</h3>
              <p className="text-muted-foreground text-sm mb-4">Get in touch via email</p>
              <p className="text-foreground mb-4 font-medium">tom@synaite.com</p>
              <Button 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary/10 w-full" 
                onClick={() => handleCopyText("tom@synaite.com")}
              >
                Copy email
              </Button>
            </div>
          </div>
          {/* LinkedIn Card */}
          <div className="bg-white/80 dark:bg-gradient-to-b dark:from-card dark:to-background rounded-xl p-8 shadow-lg border border-primary/20 hover:border-primary/40 transition-all hover:shadow-primary/10 hover:shadow-lg transform hover:translate-y-[-5px] group">
            <div className="flex flex-col items-center">
              <div className="inline-flex p-4 rounded-full bg-primary/10 mb-6 group-hover:bg-primary/20 transition-colors">
                <Linkedin className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">LinkedIn</h3>
              <p className="text-muted-foreground text-sm mb-4">Connect with us on LinkedIn</p>
              <p className="text-foreground mb-4 font-medium">Tomos Ormsby</p>
              <Button 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary/10 w-full" 
                onClick={() => window.open("https://www.linkedin.com/in/tomos-ormsby-63592134b/", "_blank")}
              >
                Visit Profile
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
