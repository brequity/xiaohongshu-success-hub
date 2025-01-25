import { motion } from "framer-motion";
import { Globe2, Lightbulb } from "lucide-react";

export const AboutUsSection = () => {
  const offices = [
    "Beijing",
    "Shanghai",
    "Hong Kong",
    "Kuala Lumpur",
    "Singapore",
    "Los Angeles",
    "New York",
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About Us</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-coral/10 rounded-xl flex items-center justify-center text-coral shrink-0 mt-1">
                <Lightbulb className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">AI-Powered Excellence</h3>
                <p className="text-gray-600 leading-relaxed">
                  At RedNote Circle, we specialize in Xiaohongshu marketing, utilizing our proprietary AI technology to create impactful campaigns that engage over 200 million users. Our AI tools analyze trends and consumer behavior to optimize strategies, ensuring your brand resonates authentically with its audience.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-coral/10 rounded-xl flex items-center justify-center text-coral shrink-0 mt-1">
                <Globe2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Global Presence</h3>
                <p className="text-gray-600 leading-relaxed">
                  With offices in {offices.slice(0, -1).join(", ")}, and {offices[offices.length - 1]}, we offer a global perspective with localized service. Our team is committed to helping brands increase visibility, drive sales, and build community on Xiaohongshu, leveraging innovation to deliver results across diverse markets and cultures.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};