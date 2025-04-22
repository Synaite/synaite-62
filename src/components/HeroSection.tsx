
import { GradientButton } from "./ui/gradient-button";
import { AuroraBackground } from "./ui/aurora-background";

const HeroSection = () => {
  return (
    <AuroraBackground>
      <section className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4 max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-medium text-primary mb-3">
          Welcome to Synaite
        </h2>
        <h1 className="text-4xl md:text-6xl font-bold text-foreground max-w-5xl leading-tight mb-8">
          Bespoke AI Solutions That Automate Operations & Maximize Profit
        </h1>
        <GradientButton
          size="lg"
          className="rounded-full px-8 py-6 text-lg font-medium"
        >
          Book A Call
        </GradientButton>
      </section>
    </AuroraBackground>
  );
};

export default HeroSection;
