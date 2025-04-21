
import { GradientButton } from "./ui/gradient-button";
import { AuroraBackground } from "./ui/aurora-background";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-16 px-0 md:px-0 lg:px-0 relative overflow-hidden transition-colors duration-300 bg-transparent py-0">
      <AuroraBackground className="h-full min-h-[80vh] w-full">
        {/* Content */}
        <div className="max-w-7xl mx-auto text-center relative z-10 px-6 md:px-12 lg:px-24">
          <h1 className="mb-3 drop-shadow-xl animate-fade-in">
            <img
              src="/lovable-uploads/a2de7b47-17c4-427f-9e96-e31c6bde8745.png"
              alt="Fusentra Logo"
              className="mx-auto"
              style={{ height: '3.5rem', width: 'auto' }}
            />
          </h1>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed font-bold text-foreground md:text-6xl">
            Bespoke AI Solutions That Automate Operations & Maximize Profit
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12 mt-8">
            <GradientButton size="lg" className="bg-gradient-to-r from-primary to-accent hover:brightness-110">
              Book A Call
            </GradientButton>
          </div>
          <div className="relative w-full max-w-4xl mx-auto"></div>
        </div>
      </AuroraBackground>
    </section>
  );
};

export default HeroSection;
