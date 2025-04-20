
import { Shield, Settings, ServerCog } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Shield,
      title: "DDoS Protection",
      description: "Advanced protection against distributed denial of service attacks, keeping your servers secure and operational."
    },
    {
      icon: Settings,
      title: "Control Panel",
      description: "Intuitive control panel for easy server management, monitoring, and configuration."
    },
    {
      icon: ServerCog,
      title: "Firewall Settings",
      description: "Customizable firewall configurations to protect your server while maintaining optimal performance."
    }
  ];

  return (
    <section id="features" className="py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">INCLUDED FEATURES</h2>
          <p className="text-coolGray max-w-2xl mx-auto text-lg">
            Every dedicated server includes these essential features to enhance performance and security.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="bg-darkCard rounded-xl p-8 shadow-lg transition-transform hover:scale-105">
              <div className="mb-6 inline-flex p-4 rounded-lg bg-violet/10">
                <feature.icon className="h-8 w-8 text-violet" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-coolGray">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
