
import { GradientButton } from "./ui/gradient-button";

const AboutSection = () => {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-[#050A1A] to-[#101C3A]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">ABOUT EASY TRADE AI</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[#B0B5BF] text-lg mb-6 leading-relaxed">
              Easy Trade AI, now evolving into a consultancy dedicated to crafting bespoke AI solutions that drive
              efficiency and cost savings across various industries. In this era of rapid technological advancement,
              businesses that fail to integrate AI risk falling behind.
            </p>
            
            <h3 className="text-2xl font-semibold text-white mb-4">💡 What We're Building:</h3>
            <ul className="list-disc list-inside text-[#B0B5BF] space-y-2 mb-6">
              <li>Tailored AI assistants that automate routine tasks, from customer inquiries to data analysis.</li>
              <li>Integration of AI tools with existing business systems to streamline operations.</li>
              <li>End-to-end AI solutions designed to enhance decision-making and operational efficiency.</li>
            </ul>
            
            <p className="text-[#B0B5BF] text-lg mb-6 leading-relaxed">
              The AI revolution is not just a trend; it's a fundamental shift in how businesses operate. Companies
              that embrace AI are seeing significant improvements in productivity and competitiveness. For instance,
              a recent McKinsey survey found that 78% of organizations have adopted AI in at least one business function,
              up from 72% in early 2024 and 55% a year earlier.
            </p>
            
            <h3 className="text-2xl font-semibold text-white mb-4">👥 Let's Connect:</h3>
            <p className="text-[#B0B5BF] text-lg mb-8 leading-relaxed">
              I'm passionate about discussing how AI can transform business operations. Whether you're an investor,
              a fellow founder, or someone interested in the future of work, I'd love to hear your thoughts and
              explore potential collaborations.
            </p>
            
            <p className="text-[#B0B5BF] text-lg mb-8 leading-relaxed">
              Feel free to reach out, and let's explore how AI can propel your business forward. 🚀
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#007BFF]/20 to-[#4A90E2]/20 rounded-2xl blur-xl opacity-70"></div>
            <img 
              src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=1024" 
              alt="AI Technology" 
              className="relative rounded-xl w-full shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
