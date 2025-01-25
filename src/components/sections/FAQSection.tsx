import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does Xiaohongshu differ from Instagram?",
    answer: "Xiaohongshu focuses more on product discovery and has a built-in shopping feature, making it a unique hybrid of social media and e-commerce. Unlike Instagram, it's specifically designed for detailed product reviews and lifestyle sharing with direct shopping integration."
  },
  {
    question: "What type of content performs best on Xiaohongshu?",
    answer: "Authentic, detailed content with high-quality visuals performs best. This includes in-depth product reviews, lifestyle tips, and personal experiences. The platform favors genuine, relatable content over heavily promotional material."
  },
  {
    question: "How can brands get started on Xiaohongshu?",
    answer: "Brands should start by setting up an official account, understanding the platform's guidelines, and creating authentic content that resonates with the audience. It's important to learn the platform's best practices and consider partnering with experienced agencies for guidance."
  },
  {
    question: "What are the key challenges for international brands?",
    answer: "The main challenges include understanding Chinese cultural nuances, navigating regulatory requirements, and creating content that resonates with the local audience. Working with local experts or agencies can help overcome these challenges."
  }
];

export const FAQSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};