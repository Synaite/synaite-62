import { GradientButton } from "./ui/gradient-button";

const HardwareSection = () => {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-[#D6E8FF] to-[#F6FBFF]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">HARDWARE ADVANTAGE</h2>
            <p className="text-coolGray text-lg mb-6 leading-relaxed">
              Our servers are powered by cutting-edge hardware that ensures maximum performance and reliability. 
              We utilize the latest Intel and AMD processors, high-performance SSDs, and enterprise-grade networking 
              equipment to deliver the best possible experience for your applications.
            </p>
            <p className="text-coolGray text-lg mb-8 leading-relaxed">
              With redundant power supplies, cooling systems, and network connections, our infrastructure is 
              designed to minimize downtime and provide 99.9% uptime guarantee for all our dedicated servers.
            </p>
            <GradientButton>Learn More</GradientButton>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-violet/20 to-indigo/20 rounded-2xl blur-xl opacity-70"></div>
            <img 
              src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1024" 
              alt="Server hardware" 
              className="relative rounded-xl w-full shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HardwareSection;
