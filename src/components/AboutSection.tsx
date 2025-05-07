
import { GradientButton } from "./ui/gradient-button";

const AboutSection = () => {
  return (
    <section id="about" className="px-6 md:px-12 lg:px-24 bg-gradient-to-b from-[#EEF5FF] to-[#D6E8FF] transition-colors duration-300 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">ABOUT US</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed mx-0 my-0 px-0 font-medium">
              Synaite is a consultancy dedicated to crafting bespoke AI solutions that drive efficiency and cost savings across various industries. In this era of rapid technological advancement, businesses that fail to integrate AI risk falling behind.
            </p>
            <h3 className="text-2xl font-semibold text-foreground mb-4">What We're Building:</h3>
            <ul className="list-none space-y-3 mb-6">
              {[
                "Tailored AI assistants that automate routine tasks, from customer inquiries to data analysis.",
                "Integration of AI tools with existing business systems to streamline operations.",
                "End-to-end AI solutions designed to enhance decision-making and operational efficiency."
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/20 text-primary mr-3 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-lg mb-6 leading-relaxed font-semibold text-foreground">
              The AI revolution is not just a trend; it's a fundamental shift in how businesses operate.
            </p>
          </div>
          <div className="relative order-1 lg:order-2">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-xl opacity-70"></div>
            <img src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=1024" 
                 alt="AI Technology" 
                 className="relative rounded-xl w-full shadow-xl transform hover:scale-[1.02] transition-transform duration-300" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
