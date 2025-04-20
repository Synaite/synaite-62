import { useState } from "react";
const TestimonialsSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const testimonials = [{
    name: "Sarah Johnson",
    position: "CTO, TechStart Inc.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
    rating: 5,
    text: "Switching to Serenity Servers was the best decision for our growing startup. The performance is outstanding, and their support team is incredibly responsive. We've seen our page load times decrease by 40%."
  }, {
    name: "Michael Chen",
    position: "Lead Developer, GameForge",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
    rating: 5,
    text: "Our game servers require exceptional performance and reliability. Serenity Servers delivers on both fronts. Their dedicated hardware and network infrastructure have given us a competitive edge."
  }, {
    name: "Elena Rodriguez",
    position: "E-commerce Director, StyleHub",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150",
    rating: 4,
    text: "We migrated our entire e-commerce platform to Serenity Servers, and the results have been phenomenal. During holiday sales peaks, our site remains stable and fast, even with thousands of concurrent users."
  }, {
    name: "David Wilson",
    position: "IT Manager, FinSecure",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150",
    rating: 5,
    text: "Security and compliance are critical for our financial services. Serenity Servers' advanced security features and regulatory compliance have given us peace of mind. Their team goes above and beyond."
  }];
  const handlePrev = () => {
    setActiveTestimonial(prev => prev === 0 ? testimonials.length - 1 : prev - 1);
  };
  const handleNext = () => {
    setActiveTestimonial(prev => prev === testimonials.length - 1 ? 0 : prev + 1);
  };
  return;
};
export default TestimonialsSection;