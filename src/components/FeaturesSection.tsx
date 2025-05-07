
import { Puzzle, Link, TrendingUp, Rocket } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

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

const FeaturesSection = () => {
  return (
    <section id="features" className="py-28 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-[#D6E8FF] via-[#EEF5FF] to-[#F6FBFF] transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">WORLD CLASS FEATURES</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Our AI solutions come with powerful features designed to transform your business operations.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title} 
              className="relative bg-white/80 dark:bg-gradient-to-b dark:from-card dark:to-background rounded-xl p-8 shadow-lg border border-primary/20 hover:border-primary/40 transition-all hover:shadow-primary/10 hover:transform hover:translate-y-[-5px] hover:shadow-xl"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
                borderWidth={2}
              />
              <div className="relative">
                <div className="mb-6 inline-flex p-4 rounded-lg bg-primary/10">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
