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
      question: "How is this different from a typical receptionist?",
      answer: "Unlike a traditional receptionist, SkyIQ's AI agents work 24/7, never miss a call, and cost a fraction of what a full-time employee would. You get round-the-clock coverage without the payroll or scheduling headaches."
    },
    {
      question: "Can the AI be customized for my business?",
      answer: "Yes! SkyIQ's AI can be fully tailored to your business, including your tone, FAQs, scheduling system, and branding."
    },
    {
      question: "What happens if a customer needs to speak to a real person?",
      answer: "If needed, SkyIQ can transfer calls or send instant notifications to your team, ensuring important calls reach the right person."
    },
    {
      question: "Can I use my business's phone number?",
      answer: "Yes! You can keep your existing phone number, or we can set up a new dedicated number for your SkyIQ assistant, it's completely up to you."
    },
    {
      question: "How is this different from phone tree systems?",
      answer: "Unlike traditional phone menus, SkyIQ uses natural conversation instead of button prompts. Callers can just speak normally, and the AI understands, responds, and handles tasks instantly, no waiting through menus or pressing numbers."
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

        <div className="p-6 sm:p-8 shadow-md">
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
