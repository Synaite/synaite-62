
import { Mail, Phone, Linkedin } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-[#050A1A]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">CONNECT WITH US</h2>
          <p className="text-[#B0B5BF] max-w-2xl mx-auto text-lg">
            Let's discuss how our AI solutions can transform your business operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Email */}
          <div className="bg-[#101C3A] rounded-xl p-8 shadow-lg border border-[#4A90E2]/20 hover:border-[#4A90E2]/40 transition-all hover:shadow-[#4A90E2]/10 hover:shadow-lg text-center">
            <div className="inline-flex p-4 rounded-full bg-[#007BFF]/10 mb-6">
              <Mail className="h-8 w-8 text-[#007BFF]" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
            <a href="mailto:contact@fusentra.com" className="text-[#B0B5BF] hover:text-[#007BFF] transition-colors">
              contact@fusentra.com
            </a>
          </div>

          {/* Phone */}
          <div className="bg-[#101C3A] rounded-xl p-8 shadow-lg border border-[#4A90E2]/20 hover:border-[#4A90E2]/40 transition-all hover:shadow-[#4A90E2]/10 hover:shadow-lg text-center">
            <div className="inline-flex p-4 rounded-full bg-[#007BFF]/10 mb-6">
              <Phone className="h-8 w-8 text-[#007BFF]" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
            <a href="tel:+1234567890" className="text-[#B0B5BF] hover:text-[#007BFF] transition-colors">
              +1 (234) 567-890
            </a>
          </div>

          {/* LinkedIn */}
          <div className="bg-[#101C3A] rounded-xl p-8 shadow-lg border border-[#4A90E2]/20 hover:border-[#4A90E2]/40 transition-all hover:shadow-[#4A90E2]/10 hover:shadow-lg text-center">
            <div className="inline-flex p-4 rounded-full bg-[#007BFF]/10 mb-6">
              <Linkedin className="h-8 w-8 text-[#007BFF]" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Connect on LinkedIn</h3>
            <a 
              href="https://linkedin.com/company/fusentra" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#B0B5BF] hover:text-[#007BFF] transition-colors"
            >
              linkedin.com/company/fusentra
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
