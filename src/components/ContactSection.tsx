import { Mail, Phone, Linkedin } from "lucide-react";
import { Button } from "./ui/button";
const ContactSection = () => {
  const handleCopyText = (text: string) => {
    navigator.clipboard.writeText(text);
  };
  return <section className="py-20 px-6 md:px-12 lg:px-24 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">CONNECT WITH US</h2>
          <p className="text-[#B0B5BF] max-w-2xl text-lg text-center mx-auto flex justify-center items-center">
            We're passionate about exploring how AI can transform the way businesses operate. Whether you're an investor, a fellow founder, or just curious about the future of work — we'd love to connect.
            Feel free to reach out, and let's talk about how AI can take your business to the next level. 🚀
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Phone Card */}
          <div className="bg-[#101C3A] rounded-xl p-8 shadow-lg border border-[#4A90E2]/20 hover:border-[#4A90E2]/40 transition-all hover:shadow-[#4A90E2]/10 hover:shadow-lg">
            <div className="flex flex-col items-center">
              <div className="inline-flex p-4 rounded-full bg-[#007BFF]/10 mb-6">
                <Phone className="h-8 w-8 text-[#007BFF]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
              <p className="text-[#B0B5BF] text-sm mb-4">Book a call to discuss your needs</p>
              <p className="text-white mb-4">07985152844</p>
              <Button variant="outline" className="border-[#4A90E2] text-[#4A90E2] hover:bg-[#4A90E2]/10" onClick={() => handleCopyText("07985152844")}>
                Copy number
              </Button>
            </div>
          </div>

          {/* Email Card */}
          <div className="bg-[#101C3A] rounded-xl p-8 shadow-lg border border-[#4A90E2]/20 hover:border-[#4A90E2]/40 transition-all hover:shadow-[#4A90E2]/10 hover:shadow-lg">
            <div className="flex flex-col items-center">
              <div className="inline-flex p-4 rounded-full bg-[#007BFF]/10 mb-6">
                <Mail className="h-8 w-8 text-[#007BFF]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
              <p className="text-[#B0B5BF] text-sm mb-4">Get in touch via email</p>
              <p className="text-white mb-4">tom@fusentra.com</p>
              <Button variant="outline" className="border-[#4A90E2] text-[#4A90E2] hover:bg-[#4A90E2]/10" onClick={() => handleCopyText("tom@fusentra.com")}>
                Copy email
              </Button>
            </div>
          </div>

          {/* LinkedIn Card */}
          <div className="bg-[#101C3A] rounded-xl p-8 shadow-lg border border-[#4A90E2]/20 hover:border-[#4A90E2]/40 transition-all hover:shadow-[#4A90E2]/10 hover:shadow-lg">
            <div className="flex flex-col items-center">
              <div className="inline-flex p-4 rounded-full bg-[#007BFF]/10 mb-6">
                <Linkedin className="h-8 w-8 text-[#007BFF]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">LinkedIn</h3>
              <p className="text-[#B0B5BF] text-sm mb-4">Connect with us on LinkedIn</p>
              <p className="text-white mb-4">Tomos Ormsby</p>
              <Button variant="outline" className="border-[#4A90E2] text-[#4A90E2] hover:bg-[#4A90E2]/10" onClick={() => window.open("https://linkedin.com/company/fusentra", "_blank")}>
                Copy link
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ContactSection;