import { useState } from "react";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem = ({ question, answer, isOpen, onClick }: FAQItemProps) => {
  return (
    <div className="border-b border-[#4A90E2]/40 last:border-0 bg-white/80 dark:bg-[#101C3A]/50 hover:bg-[#E1F1FA] dark:hover:bg-[#131a2b] transition-colors duration-300 rounded-lg overflow-hidden">
      <button className="flex justify-between items-center w-full py-6 px-6 text-left" onClick={onClick}>
        <h3 className="text-lg font-semibold text-[#21223f] dark:text-white">{question}</h3>
        <span className="ml-6 flex-shrink-0 text-[#4A90E2]">
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
        <div className="pb-6 px-6">
          <p className="text-[#2e4154] dark:text-[#B0B5BF]">{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(-1);
  const faqs = [
    {
      question: "What types of AI solutions do you offer?",
      answer: "We specialize in creating customized AI solutions that include automated customer service bots, data analysis tools, process automation, predictive analytics, and integration with existing business systems. Our solutions are tailored to address your specific business challenges."
    },
    {
      question: "How do you ensure AI solutions integrate with our existing systems?",
      answer: "Our team conducts thorough assessments of your current infrastructure and workflows. We design solutions with compatibility in mind, utilizing APIs, middleware, and custom connectors when necessary. Throughout implementation, we work closely with your IT team to ensure smooth integration with minimal disruption."
    },
    {
      question: "What ROI can we expect from implementing your AI solutions?",
      answer: "ROI varies based on the specific solution and industry, but our clients typically see significant benefits in operational efficiency, cost reduction, and revenue opportunities. We establish clear metrics at the project outset and provide regular reports to track performance against these benchmarks."
    },
    {
      question: "How long does implementation typically take?",
      answer: "Implementation timelines depend on the complexity of the solution and your organizational requirements. Simple automations might be operational within weeks, while comprehensive enterprise solutions may take several months. We provide detailed timelines during our consultation phase and keep you updated throughout the process."
    },
    {
      question: "What ongoing support do you provide after implementation?",
      answer: "We offer various support packages including regular maintenance, performance monitoring, system updates, user training, and technical support. Our team remains available to address any issues, implement enhancements, and ensure your AI solution continues to deliver value as your business evolves."
    },
    {
      question: "How do you handle data security and privacy concerns?",
      answer: "We prioritize data security at every stage of development. Our solutions comply with relevant regulations like GDPR and industry standards. We implement robust encryption, access controls, and regular security audits. Transparency is key - we clearly communicate how data is used, stored, and protected throughout our engagement."
    }
  ];

  return (
    <section id="faq" className="py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-[#F6FBFF] via-[#EEF5FF] to-[#D6E8FF] transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#214478] dark:text-white mb-4">FREQUENTLY ASKED QUESTIONS</h2>
          <p className="text-[#224366] dark:text-[#B0B5BF] max-w-3xl mx-auto text-lg">
            Get answers to common questions about our AI solutions and services.
          </p>
        </div>

        <div className="bg-gradient-to-b from-white to-[#E0EEFC] dark:from-[#101C3A] dark:to-[#050A1A] rounded-xl shadow-lg border-2 border-[#4A90E2]/30 overflow-hidden">
          {faqs.map((faq, index) => <FAQItem key={index} question={faq.question} answer={faq.answer} isOpen={index === openIndex} onClick={() => setOpenIndex(index === openIndex ? -1 : index)} />)}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
