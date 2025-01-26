import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does Xiaohongshu differ from other social media platforms?",
    answer: "Xiaohongshu uniquely combines social media with e-commerce, focusing on authentic lifestyle content and product reviews. Unlike platforms that prioritize entertainment, Xiaohongshu emphasizes genuine user experiences and direct shopping integration."
  },
  {
    question: "Can international brands use Xiaohongshu?",
    answer: "Yes, international brands can and do successfully use Xiaohongshu. However, they need to register through proper channels and may require local partnerships to navigate the platform effectively."
  },
  {
    question: "What type of content performs best on Xiaohongshu?",
    answer: "Authentic, detailed content with high-quality visuals performs best. This includes in-depth product reviews, lifestyle tips, and personal experiences. The platform favors genuine, relatable content over heavily promotional material."
  },
  {
    question: "How can brands measure their success on Xiaohongshu?",
    answer: "Brands can track metrics such as follower growth, engagement rates (likes, comments, saves), click-through rates on product links, and conversion rates. The platform provides business accounts with detailed analytics tools."
  }
];

export const XHSFAQ = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#ea384c]">
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