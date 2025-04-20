
import { Clock, Users, Server, HelpCircle } from "lucide-react";

const SupportSection = () => {
  const supportFeatures = [
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Our support team is available around the clock to assist you with any issues"
    },
    {
      icon: Users,
      title: "Private Network",
      description: "Secure, isolated network infrastructure for enhanced security and performance"
    },
    {
      icon: Server,
      title: "Instant Setup",
      description: "Get your dedicated server up and running quickly with our instant provisioning"
    },
    {
      icon: HelpCircle,
      title: "Knowledge Base",
      description: "Comprehensive resources, guides, and tutorials to help you get the most out of your server"
    }
  ];

  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-darkCard">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">WORLD-CLASS SUPPORT</h2>
          <p className="text-coolGray max-w-2xl mx-auto text-lg">
            Our dedicated support team ensures your servers run smoothly around the clock.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {supportFeatures.map((feature) => (
            <div
              key={feature.title}
              className="bg-dark rounded-xl p-6 text-center shadow-lg transition-transform hover:scale-105"
            >
              <div className="inline-flex p-4 bg-violet/10 rounded-full mb-6">
                <feature.icon className="h-8 w-8 text-violet" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-coolGray">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
