import { useState } from "react";

const TestimonialsSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  
  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CTO, TechStart Inc.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
      rating: 5,
      text: "Switching to Serenity Servers was the best decision for our growing startup. The performance is outstanding, and their support team is incredibly responsive. We've seen our page load times decrease by 40%."
    },
    {
      name: "Michael Chen",
      position: "Lead Developer, GameForge",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
      rating: 5,
      text: "Our game servers require exceptional performance and reliability. Serenity Servers delivers on both fronts. Their dedicated hardware and network infrastructure have given us a competitive edge."
    },
    {
      name: "Elena Rodriguez",
      position: "E-commerce Director, StyleHub",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150",
      rating: 4,
      text: "We migrated our entire e-commerce platform to Serenity Servers, and the results have been phenomenal. During holiday sales peaks, our site remains stable and fast, even with thousands of concurrent users."
    },
    {
      name: "David Wilson",
      position: "IT Manager, FinSecure",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150",
      rating: 5,
      text: "Security and compliance are critical for our financial services. Serenity Servers' advanced security features and regulatory compliance have given us peace of mind. Their team goes above and beyond."
    }
  ];

  const handlePrev = () => {
    setActiveTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-[#D6E8FF] to-[#F6FBFF]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">WHAT OUR CLIENTS SAY</h2>
          <p className="text-coolGray max-w-2xl mx-auto text-lg">
            Don't just take our word for it. Here's what our clients have to say about our dedicated server solutions.
          </p>
        </div>

        <div className="relative bg-darkCard rounded-xl p-6 md:p-8 lg:p-12 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-1 flex flex-col items-center">
              <div className="relative w-24 h-24 mb-6">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet to-indigo blur-md opacity-70"></div>
                <img
                  src={testimonials[activeTestimonial].avatar}
                  alt={testimonials[activeTestimonial].name}
                  className="relative w-24 h-24 object-cover rounded-full border-2 border-violet"
                />
              </div>
              <h3 className="text-xl font-bold text-white text-center">{testimonials[activeTestimonial].name}</h3>
              <p className="text-coolGray text-center mb-4">{testimonials[activeTestimonial].position}</p>
              
              <div className="flex items-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${i < testimonials[activeTestimonial].rating ? 'text-violet' : 'text-coolGray/30'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <div className="flex space-x-4">
                <button
                  onClick={handlePrev}
                  className="p-2 rounded-full bg-dark hover:bg-violet/20 text-white transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                  </svg>
                </button>
                <button
                  onClick={handleNext}
                  className="p-2 rounded-full bg-dark hover:bg-violet/20 text-white transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="md:col-span-2">
              <blockquote className="relative">
                <svg
                  className="absolute top-0 left-0 transform -translate-x-6 -translate-y-8 h-16 w-16 text-violet/20"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104-6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="relative text-lg md:text-xl text-white leading-relaxed">
                  {testimonials[activeTestimonial].text}
                </p>
              </blockquote>
            </div>
          </div>

          <div className="absolute bottom-4 left-0 right-0 flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-2.5 h-2.5 rounded-full ${index === activeTestimonial ? 'bg-violet' : 'bg-coolGray/30'}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
