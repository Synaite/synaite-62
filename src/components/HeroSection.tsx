
import { GradientButton } from "./ui/gradient-button";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-16 px-6 md:px-12 lg:px-24 relative overflow-hidden">
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050A1A] to-[#101C3A]" />
      
      {/* Floating tech elements in background */}
      <div className="absolute inset-0 opacity-10 overflow-hidden">
        <div className="absolute top-[10%] right-[20%] w-64 h-64 rounded-full bg-[#4A90E2] blur-3xl" />
        <div className="absolute bottom-[10%] left-[20%] w-80 h-80 rounded-full bg-[#007BFF] blur-3xl" />
      </div>
      
      {/* Content */}
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tighter mb-6">
          Welcome to Fusentra
        </h1>
        
        <p className="text-lg md:text-xl text-[#B0B5BF] max-w-3xl mx-auto mb-8 leading-relaxed">
          Crafting bespoke AI solutions that drive efficiency and cost savings across various industries
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <GradientButton 
            size="lg" 
            className="bg-gradient-to-r from-[#007BFF] to-[#3395FF] hover:brightness-110"
          >
            Book A Call
          </GradientButton>
        </div>
        
        <div className="relative w-full max-w-4xl mx-auto">
          <img 
            src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=1024" 
            alt="AI Technology" 
            className="w-full h-auto rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
