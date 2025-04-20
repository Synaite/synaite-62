
import { Facebook, Twitter, Linkedin, Youtube, Mail, Globe } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050A1A] pt-16 pb-8 px-6 md:px-12 lg:px-24 border-t border-[#4A90E2]/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Fusentra</h3>
            <p className="text-[#B0B5BF] mb-6">
              Crafting bespoke AI solutions that drive efficiency and cost savings across various industries.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-[#B0B5BF] hover:text-[#007BFF] transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-[#B0B5BF] hover:text-[#007BFF] transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-[#B0B5BF] hover:text-[#007BFF] transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-[#B0B5BF] hover:text-[#007BFF] transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Services</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-[#B0B5BF] hover:text-[#007BFF] transition-colors">
                  Custom AI Solutions
                </a>
              </li>
              <li>
                <a href="#" className="text-[#B0B5BF] hover:text-[#007BFF] transition-colors">
                  System Integration
                </a>
              </li>
              <li>
                <a href="#" className="text-[#B0B5BF] hover:text-[#007BFF] transition-colors">
                  AI Consulting
                </a>
              </li>
              <li>
                <a href="#" className="text-[#B0B5BF] hover:text-[#007BFF] transition-colors">
                  Business Automation
                </a>
              </li>
              <li>
                <a href="#" className="text-[#B0B5BF] hover:text-[#007BFF] transition-colors">
                  AI Implementation
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Resources</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-[#B0B5BF] hover:text-[#007BFF] transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-[#B0B5BF] hover:text-[#007BFF] transition-colors">
                  Knowledge Base
                </a>
              </li>
              <li>
                <a href="#" className="text-[#B0B5BF] hover:text-[#007BFF] transition-colors">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="text-[#B0B5BF] hover:text-[#007BFF] transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-[#B0B5BF] hover:text-[#007BFF] transition-colors">
                  Webinars
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Legal</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-[#B0B5BF] hover:text-[#007BFF] transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-[#B0B5BF] hover:text-[#007BFF] transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-[#B0B5BF] hover:text-[#007BFF] transition-colors">
                  Cookies Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-[#B0B5BF] hover:text-[#007BFF] transition-colors">
                  Data Processing
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-[#4A90E2]/10">
          <p className="text-[#B0B5BF] text-sm">
            &copy; {currentYear} Fusentra. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
