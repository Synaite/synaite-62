import { Check } from "lucide-react";
import { GradientButton } from "./ui/gradient-button";
const PricingSection = () => {
  const pricingPlans = [{
    name: "Basic",
    price: "$49",
    period: "/month",
    description: "Perfect for small websites and applications",
    features: ["4 CPU Cores", "8 GB RAM", "120 GB SSD", "5 TB Bandwidth", "Ubuntu/CentOS", "Basic Control Panel", "1 Dedicated IP", "Basic Support"],
    isPopular: false
  }, {
    name: "Professional",
    price: "$99",
    period: "/month",
    description: "Ideal for growing businesses and e-commerce",
    features: ["8 CPU Cores", "16 GB RAM", "240 GB SSD", "10 TB Bandwidth", "Any Linux OS / Windows", "Advanced Control Panel", "3 Dedicated IPs", "24/7 Priority Support", "Free SSL Certificates", "Daily Backups"],
    isPopular: true
  }, {
    name: "Enterprise",
    price: "$199",
    period: "/month",
    description: "For high-traffic sites and complex applications",
    features: ["16 CPU Cores", "32 GB RAM", "500 GB SSD", "Unlimited Bandwidth", "Any OS of Choice", "Premium Control Panel", "5 Dedicated IPs", "24/7 Priority Support", "Free SSL Certificates", "Daily Backups", "Load Balancer", "Advanced DDoS Protection"],
    isPopular: false
  }];
  return;
};
export default PricingSection;