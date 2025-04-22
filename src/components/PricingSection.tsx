import { Check } from "lucide-react";
import { GradientButton } from "./ui/gradient-button";

const PricingSection = () => {
  const pricingPlans = [
    {
      name: "Basic",
      price: "$49",
      period: "/month",
      description: "Perfect for small websites and applications",
      features: [
        "4 CPU Cores",
        "8 GB RAM",
        "120 GB SSD",
        "5 TB Bandwidth",
        "Ubuntu/CentOS",
        "Basic Control Panel",
        "1 Dedicated IP",
        "Basic Support"
      ],
      isPopular: false
    },
    {
      name: "Professional",
      price: "$99",
      period: "/month",
      description: "Ideal for growing businesses and e-commerce",
      features: [
        "8 CPU Cores",
        "16 GB RAM",
        "240 GB SSD",
        "10 TB Bandwidth",
        "Any Linux OS / Windows",
        "Advanced Control Panel",
        "3 Dedicated IPs",
        "24/7 Priority Support",
        "Free SSL Certificates",
        "Daily Backups"
      ],
      isPopular: true
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "/month",
      description: "For high-traffic sites and complex applications",
      features: [
        "16 CPU Cores",
        "32 GB RAM",
        "500 GB SSD",
        "Unlimited Bandwidth",
        "Any OS of Choice",
        "Premium Control Panel",
        "5 Dedicated IPs",
        "24/7 Priority Support",
        "Free SSL Certificates",
        "Daily Backups",
        "Load Balancer",
        "Advanced DDoS Protection"
      ],
      isPopular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-[#F6FBFF] via-[#EEF5FF] to-[#D6E8FF]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">TRANSPARENT PRICING PLANS</h2>
          <p className="text-coolGray max-w-2xl mx-auto text-lg">
            Choose the perfect dedicated server plan for your needs with no hidden fees.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan) => (
            <div 
              key={plan.name}
              className={`relative bg-darkCard rounded-xl overflow-hidden shadow-lg border ${
                plan.isPopular ? 'border-violet' : 'border-darkCard'
              } transition-transform hover:scale-105`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 right-0">
                  <div className="bg-gradient-to-r from-violet to-indigo text-white text-xs font-semibold px-4 py-1 rounded-bl-lg">
                    MOST POPULAR
                  </div>
                </div>
              )}
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="flex items-end mb-4">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-coolGray ml-1">{plan.period}</span>
                </div>
                <p className="text-coolGray mb-6">{plan.description}</p>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Check className="h-5 w-5 text-violet shrink-0 mr-3 mt-0.5" />
                      <span className="text-white">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <GradientButton 
                  className="w-full" 
                  variant={plan.isPopular ? "default" : "outline"}
                >
                  Get Started
                </GradientButton>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
