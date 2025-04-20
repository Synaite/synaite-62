
import { GradientButton } from "./ui/gradient-button";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-16 px-6 md:px-12 lg:px-24 relative overflow-hidden">
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-violet/10 via-transparent to-transparent" />
      
      {/* Floating tech elements in background */}
      <div className="absolute inset-0 opacity-10 overflow-hidden">
        <div className="absolute top-[10%] right-[20%] w-64 h-64 rounded-full bg-indigo blur-3xl" />
        <div className="absolute bottom-[10%] left-[20%] w-80 h-80 rounded-full bg-violet blur-3xl" />
      </div>
      
      {/* Content */}
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tighter mb-6">
          BEST DEDICATED SERVER<br />SOLUTION FOR YOU
        </h1>
        
        <p className="text-lg md:text-xl text-coolGray max-w-3xl mx-auto mb-8 leading-relaxed">
          Global server locations with lightning-fast SSD storage and optimized infrastructure. 
          Experience superior performance and reliability for your digital presence.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <GradientButton size="lg">Get Started</GradientButton>
          <GradientButton variant="outline" size="lg">Support Center</GradientButton>
        </div>
        
        <div className="relative w-full max-w-4xl mx-auto">
          <img 
            src="https://images.unsplash.com/photo-1560732488-7b5f5b8c8ba6?auto=format&fit=crop&q=80&w=1024" 
            alt="Data center servers" 
            className="w-full h-auto rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
