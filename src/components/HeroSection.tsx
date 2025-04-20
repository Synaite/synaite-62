import { GradientButton } from "./ui/gradient-button";
const HeroSection = () => {
  return <section className="pt-32 pb-16 px-6 md:px-12 lg:px-24 relative overflow-hidden">
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050A1A] to-[#101C3A]" />
      
      {/* Floating tech elements in background */}
      <div className="absolute inset-0 opacity-10 overflow-hidden">
        <div className="absolute top-[10%] right-[20%] w-64 h-64 rounded-full bg-[#4A90E2] blur-3xl" />
        <div className="absolute bottom-[10%] left-[20%] w-80 h-80 rounded-full bg-[#007BFF] blur-3xl" />
      </div>
      
      {/* Content */}
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <h1 className="text-4xl md:text-5xl leading-none tracking-tighter mb-2 font-semibold text-zinc-500 lg:text-4xl">
          Welcome to Fusentra
        </h1>
        
        <p className="text-lg max-w-3xl mx-auto leading-relaxed font-bold text-white md:text-6xl">
          Bespoke AI solutions That Automate Work & Cut Costs Instantly
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12 mt-8">
          <GradientButton size="lg" className="bg-gradient-to-r from-[#007BFF] to-[#3395FF] hover:brightness-110">
            Book A Call
          </GradientButton>
        </div>
        
        <div className="relative w-full max-w-4xl mx-auto">
          
        </div>
      </div>
    </section>;
};
export default HeroSection;