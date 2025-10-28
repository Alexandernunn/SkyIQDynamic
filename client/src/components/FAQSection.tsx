import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import backgroundImage from "@assets/him_1761689734913.png";

export default function FAQSection() {
  const faqs = [
    {
      question: "How does the AI voice agent work?",
      answer: "Our AI voice agents use advanced natural language processing to understand caller intent, respond naturally, and handle conversations just like a human receptionist. They can answer questions, qualify leads, book appointments, and transfer calls when needed - all while learning from every interaction."
    },
    {
      question: "What industries do you serve?",
      answer: "We specialize in service-based businesses including med spas, real estate agencies, contractors, insurance agencies, dental offices, law firms, and other businesses that receive high volumes of phone calls. Our AI adapts to your industry's specific terminology and workflows."
    },
    {
      question: "How long does it take to set up?",
      answer: "Most businesses are up and running within 24-48 hours. We'll work with you to configure your AI agent with your business information, services, pricing, and availability. You can start with a simple setup and add more advanced features as you go."
    },
    {
      question: "Can the AI handle complex questions?",
      answer: "Yes! Our AI is trained to handle nuanced conversations, understand context, and provide detailed answers about your services. If it encounters a question it can't answer confidently, it will smoothly transfer the call to your team or take a message."
    },
    {
      question: "What happens to missed calls?",
      answer: "With SkyIQ, there are no more missed calls. Our AI answers 24/7, even during holidays and after hours. Every caller gets immediate attention, ensuring you never lose a potential customer to voicemail again."
    },
    {
      question: "How much does it cost?",
      answer: "Our pricing is designed to be significantly more affordable than hiring additional staff. Plans start at $299/month with unlimited calls. Contact us for a custom quote based on your specific needs and call volume."
    },
    {
      question: "Can I customize what the AI says?",
      answer: "Absolutely! You have full control over your AI agent's personality, tone, and responses. You can customize greetings, FAQs, service descriptions, and even how it handles specific scenarios. Your AI represents your brand exactly how you want."
    },
    {
      question: "Does it integrate with my existing systems?",
      answer: "Yes, SkyIQ integrates with popular CRM systems, scheduling platforms, and business tools. We can sync with your calendar, update your CRM automatically, and work seamlessly with your existing phone system."
    }
  ];

  return (
    <section 
      className="py-24 relative overflow-hidden"
      style={{ 
        backgroundImage: `url(${backgroundImage})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'calc(50% + 35px) center'
      }}
    >
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about SkyIQ's AI voice agents
          </p>
        </div>

        <div className="p-6 sm:p-8">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} data-testid={`faq-item-${index}`}>
                <AccordionTrigger 
                  className="text-left font-semibold text-gray-900 hover:text-blue-600 transition-colors"
                  data-testid={`faq-question-${index}`}
                >
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent 
                  className="text-gray-600 leading-relaxed"
                  data-testid={`faq-answer-${index}`}
                >
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-4">
            Still have questions?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
            data-testid="button-contact-faq"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
