import { motion } from "framer-motion";
import { BookOpen, Users } from "lucide-react";

export const GettingStartedSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#ea384c]">Getting Started</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-coral/10 rounded-xl flex items-center justify-center text-coral">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold">Platform Basics</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Set up an official account, learn the platform's do's and don'ts, and create content that resonates with the audience.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-coral/10 rounded-xl flex items-center justify-center text-coral">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold">Professional Support</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              For professional guidance, consider partnering with a Xiaohongshu marketing agency like us, Rednote Circle.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};