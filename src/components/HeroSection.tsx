import { GradientButton } from "./ui/gradient-button";
import { AuroraBackground } from "./ui/aurora-background";
const HeroSection = () => {
  return <section className="pt-32 pb-16 px-0 md:px-0 lg:px-0 relative overflow-hidden transition-colors duration-300 bg-gradient-to-b from-[#EEF5FF] via-[#D6E8FF] to-[#C4DDFF] py-0">
      <AuroraBackground className="h-full min-h-[80vh] w-full">
        {/* Content */}
        <div className="max-w-7xl mx-auto text-center relative z-10 px-6 md:px-12 lg:px-24">
          <h1 className="text-5xl leading-tight tracking-tighter mb-3 font-extrabold bg-gradient-to-r from-[#1EAEDB] via-blue-500 to-blue-700 text-transparent bg-clip-text drop-shadow-xl animate-fade-in md:text-5xl">Welcome to Synaite</h1>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed font-bold text-foreground md:text-6xl">Bespoke AI Solutions That Automate Operations & Maximize Profit</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12 mt-8">
            <GradientButton size="lg" className="bg-gradient-to-r from-primary to-accent hover:brightness-110">
              Book A Call
            </GradientButton>
          </div>
          <div className="relative w-full max-w-4xl mx-auto"></div>
        </div>
      </AuroraBackground>
    </section>;
};
export default HeroSection;