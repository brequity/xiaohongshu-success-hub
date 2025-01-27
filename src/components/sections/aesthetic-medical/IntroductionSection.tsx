import { motion } from "framer-motion";
import { SectionTitle } from "./shared/SectionTitle";

export const IntroductionSection = () => {
  return (
    <section className="mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <SectionTitle title="Introduction" />
        <p className="text-gray-600 leading-relaxed text-center">
          Xiaohongshu (Little Red Book) has emerged as a dominant platform for aesthetic medical marketing, not only in China but also in regions with substantial user bases such as Singapore, Malaysia, Hong Kong, and Taiwan. With a highly engaged audience of young, urban, and affluent individuals across these areas, Xiaohongshu provides an ideal space for aesthetic clinics to build trust, showcase results, and drive inquiries. Here's how your clinic can effectively market itself on Xiaohongshu and navigate the challenges of the platform.
        </p>
      </motion.div>
    </section>
  );
};