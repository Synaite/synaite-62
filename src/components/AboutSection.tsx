import { GradientButton } from "./ui/gradient-button";
const AboutSection = () => {
  return <section className="px-6 md:px-12 lg:px-24 bg-gradient-to-b from-[#C4DDFF] to-[#F6FBFF] transition-colors duration-300 py-[60px]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">ABOUT US</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed mx-0 my-0 px-0 font-medium">Fusentra, is a consultancy dedicated to crafting bespoke AI solutions that drive efficiency and cost savings across various industries. In this era of rapid technological advancement, businesses that fail to integrate AI risk falling behind.</p>
            <h3 className="text-2xl font-semibold text-foreground mb-4">What We're Building:</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
              <li>Tailored AI assistants that automate routine tasks, from customer inquiries to data analysis.</li>
              <li>Integration of AI tools with existing business systems to streamline operations.</li>
              <li>End-to-end AI solutions designed to enhance decision-making and operational efficiency.</li>
            </ul>
            <p className="text-lg mb-6 leading-relaxed font-semibold text-foreground">The AI revolution is not just a trend; it's a fundamental shift in how businesses operate. </p>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-xl opacity-70"></div>
            <img src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=1024" alt="AI Technology" className="relative rounded-xl w-full shadow-xl" />
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;
