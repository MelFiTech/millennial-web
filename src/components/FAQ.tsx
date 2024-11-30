import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function FAQ() {
  const faqs = [
    {
      question: "How do I start the home buying process?",
      answer: "Begin by getting pre-approved for a mortgage and connecting with one of our real estate agents who will guide you through the entire process."
    },
    {
      question: "What documents do I need?",
      answer: "You'll need proof of income, bank statements, tax returns, and other financial documents. Our team will provide a detailed checklist."
    },
    {
      question: "How long does it take to close?",
      answer: "Typically, the closing process takes 30-45 days, but this can vary based on various factors. We'll keep you informed every step of the way."
    }
  ];

  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-white text-5xl font-black uppercase mb-4 tracking-wide" style={{ fontFamily: 'var(--font-redhat)' }}>Frequently Asked Questions</h2>
            <p className="text-gray-600">
              Here&apos;s what you need to know
            </p>
          </div>
          <div>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-xl font-redhat">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-400 font-redhat">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}