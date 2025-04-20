
import { Facebook, Twitter, Linkedin, Youtube, Mail, Globe } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark pt-16 pb-8 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Serenity Servers</h3>
            <p className="text-coolGray mb-6">
              High-performance dedicated server hosting solutions for businesses of all sizes.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-coolGray hover:text-violet transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-coolGray hover:text-violet transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-coolGray hover:text-violet transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-coolGray hover:text-violet transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Products</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-coolGray hover:text-violet transition-colors">
                  Dedicated Servers
                </a>
              </li>
              <li>
                <a href="#" className="text-coolGray hover:text-violet transition-colors">
                  Cloud Hosting
                </a>
              </li>
              <li>
                <a href="#" className="text-coolGray hover:text-violet transition-colors">
                  Virtual Private Servers
                </a>
              </li>
              <li>
                <a href="#" className="text-coolGray hover:text-violet transition-colors">
                  Colocation Services
                </a>
              </li>
              <li>
                <a href="#" className="text-coolGray hover:text-violet transition-colors">
                  Backup Solutions
                </a>
              </li>
              <li>
                <a href="#" className="text-coolGray hover:text-violet transition-colors">
                  Domain Registration
                </a>
              </li>
            </ul>
          </div>

          {/* Help Center */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Help Center</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-coolGray hover:text-violet transition-colors">
                  Support Portal
                </a>
              </li>
              <li>
                <a href="#" className="text-coolGray hover:text-violet transition-colors">
                  Knowledge Base
                </a>
              </li>
              <li>
                <a href="#" className="text-coolGray hover:text-violet transition-colors">
                  System Status
                </a>
              </li>
              <li>
                <a href="#" className="text-coolGray hover:text-violet transition-colors">
                  Network Information
                </a>
              </li>
              <li>
                <a href="#" className="text-coolGray hover:text-violet transition-colors">
                  API Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-coolGray hover:text-violet transition-colors">
                  Video Tutorials
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Legal</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-coolGray hover:text-violet transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-coolGray hover:text-violet transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-coolGray hover:text-violet transition-colors">
                  Acceptable Use Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-coolGray hover:text-violet transition-colors">
                  Service Level Agreement
                </a>
              </li>
              <li>
                <a href="#" className="text-coolGray hover:text-violet transition-colors">
                  GDPR Compliance
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col md:flex-row justify-between items-center py-8 border-t border-violet/20">
          <div className="flex items-center mb-4 md:mb-0">
            <Mail className="h-5 w-5 text-violet mr-2" />
            <a href="mailto:support@serenityservers.com" className="text-coolGray hover:text-violet transition-colors">
              support@serenityservers.com
            </a>
          </div>
          <div className="flex items-center">
            <Globe className="h-5 w-5 text-violet mr-2" />
            <a href="https://serenityservers.com" className="text-coolGray hover:text-violet transition-colors">
              www.serenityservers.com
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-violet/10">
          <p className="text-coolGray text-sm">
            &copy; {currentYear} Serenity Servers. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
