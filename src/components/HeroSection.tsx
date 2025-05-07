
import { GradientButton } from "./ui/gradient-button";
import { AuroraBackground } from "./ui/aurora-background";
import CalendlyDialog from "./CalendlyDialog";

const HeroSection = () => {
  return (
    <AuroraBackground className="py-16 md:py-24 bg-gradient-to-b from-white via-[#F6FBFF] to-[#EEF5FF] lg:py-0">
      <section className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4 max-w-7xl mx-auto">
        <div className="relative z-10">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-accent/30 rounded-2xl blur-3xl opacity-50 -z-10"></div>
          
          {/* Enhanced subtitle with stronger gradient effect */}
          <h2 className="text-4xl md:text-5xl font-medium bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4 drop-shadow-[0_0_8px_rgba(59,130,246,0.4)]">
            Welcome to Synaite
          </h2>
          
          {/* Enhanced main heading with better contrast and text shadow */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground max-w-5xl leading-tight mb-8 drop-shadow-sm">
            <span className="relative">
              <span className="absolute -inset-1 blur-lg bg-gradient-to-r from-primary/10 to-accent/10 -z-10 rounded-lg"></span>
              Bespoke AI Solutions That Automate Operations & Maximize Profit
            </span>
          </h1>
          
          {/* Enhanced CTA button */}
          <CalendlyDialog>
            <GradientButton 
              size="lg" 
              className="rounded-full px-8 py-6 text-lg font-medium shadow-lg hover:shadow-primary/40 transition-all duration-300 transform hover:scale-105 border border-primary/20"
            >
              Book A Call
            </GradientButton>
          </CalendlyDialog>
        </div>
      </section>
    </AuroraBackground>
  );
};

export default HeroSection;
