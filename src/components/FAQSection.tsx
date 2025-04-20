
import { useState } from "react";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem = ({ question, answer, isOpen, onClick }: FAQItemProps) => {
  return (
    <div className="border-b border-violet/20 last:border-0">
      <button
        className="flex justify-between items-center w-full py-6 text-left"
        onClick={onClick}
      >
        <h3 className="text-lg font-semibold text-white">{question}</h3>
        <span className="ml-6 flex-shrink-0 text-coolGray">
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
          )}
        </span>
      </button>
      {isOpen && (
        <div className="pb-6">
          <p className="text-coolGray">{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What is a dedicated server and why would I need one?",
      answer: "A dedicated server is a physical server where all resources are dedicated to a single client. Unlike shared hosting, you get full access to all CPU, RAM, storage, and bandwidth. Dedicated servers are ideal for websites with high traffic, applications requiring specific configurations, businesses needing enhanced security, or any project demanding superior performance and reliability."
    },
    {
      question: "How quickly can my dedicated server be provisioned?",
      answer: "Most of our standard dedicated server configurations can be provisioned within 4-24 hours. Custom configurations may take 1-3 business days depending on the specifications and availability. For urgent requirements, we offer expedited setup for select configurations, which can be ready in as little as 2 hours."
    },
    {
      question: "Do you offer managed or unmanaged dedicated servers?",
      answer: "We offer both managed and unmanaged dedicated server options. With managed servers, our team handles system updates, security patches, monitoring, and basic troubleshooting. Unmanaged servers provide full root access but leave maintenance responsibilities to you. We also offer semi-managed options if you need a middle ground between these two service levels."
    },
    {
      question: "What kind of support do you provide?",
      answer: "We provide 24/7/365 support via ticket system, live chat, and phone. Our support team includes skilled technicians who can assist with hardware issues, network problems, OS questions, and control panel configurations. For managed servers, we also provide proactive monitoring and maintenance. Additionally, all clients have access to our extensive knowledge base and tutorial library."
    },
    {
      question: "Can I upgrade my server specifications later if needed?",
      answer: "Yes, you can upgrade your server specifications as your needs evolve. RAM, storage, and bandwidth upgrades can typically be performed without significant downtime. CPU upgrades or major hardware changes may require scheduling a maintenance window. Our flexible infrastructure allows for vertical scaling to accommodate your growing business needs."
    },
    {
      question: "What is your uptime guarantee and refund policy?",
      answer: "We guarantee 99.9% network uptime on all our dedicated servers. If we fail to meet this guarantee, you'll receive credits proportional to the downtime experienced. For billing issues, we offer a 14-day money-back guarantee on new server orders if you're not satisfied with our service, excluding domain registration fees and custom setup fees. Detailed terms are available in our Service Level Agreement."
    }
  ];

  return (
    <section id="faq" className="py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">FREQUENTLY ASKED QUESTIONS</h2>
          <p className="text-coolGray max-w-3xl mx-auto text-lg">
            Get answers to the most common questions about our dedicated server solutions.
          </p>
        </div>

        <div className="bg-darkCard rounded-xl shadow-lg overflow-hidden">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={index === openIndex}
              onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
