
import { Puzzle, Link, TrendingUp, Rocket } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Puzzle,
      title: "Custom Solutions",
      description: "We build AI automations specifically designed for your unique business challenges and processes. No off-the-shelf approaches, only solutions crafted for you."
    },
    {
      icon: Link,
      title: "Seamless System Integration",
      description: "Integrate powerful AI capabilities smoothly into your existing workflows and software stack for maximum efficiency without disruption."
    },
    {
      icon: TrendingUp,
      title: "Measurable ROI & Insights",
      description: "Focus on tangible outcomes. Leverage AI for actionable insights and automations designed to demonstrably boost your bottom line."
    },
    {
      icon: Rocket,
      title: "Scalable & Supported Growth",
      description: "Build for tomorrow. Our solutions are designed to scale with your business, backed by expert support for sustained success and evolution."
    }
  ];

  return (
    <section id="features" className="py-20 px-6 md:px-12 lg:px-24 bg-[#050A1A]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="relative">
            <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-[#4A90E2] to-[#007BFF] opacity-75 blur-lg group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <h2 className="relative text-3xl md:text-4xl font-bold text-white mb-4">
              WORLD CLASS FEATURES
            </h2>
          </div>
          <p className="text-[#B0B5BF] max-w-2xl mx-auto text-lg">
            Our AI solutions come with powerful features designed to transform your business operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div 
              key={feature.title} 
              className="bg-gradient-to-b from-[#101C3A] to-[#050A1A] rounded-xl p-8 shadow-lg border border-[#4A90E2]/20 hover:border-[#4A90E2]/40 transition-all hover:shadow-[#4A90E2]/10 hover:shadow-lg"
            >
              <div className="mb-6 inline-flex p-4 rounded-lg bg-[#007BFF]/10">
                <feature.icon className="h-8 w-8 text-[#007BFF]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-[#B0B5BF]">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
