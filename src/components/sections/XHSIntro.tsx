import { motion } from "framer-motion";
import { Users, TrendingUp } from "lucide-react";

export const XHSIntro = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#ea384c]">
            Introduction to Xiaohongshu
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Xiaohongshu (小红书), also known as RED, is China's premier lifestyle and e-commerce platform where users share authentic experiences about beauty, fashion, and lifestyle products.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-coral/10 rounded-xl flex items-center justify-center text-coral">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-semibold">Platform Demographics</h3>
            </div>
            <ul className="space-y-4 text-gray-600">
              <li>• Over 200 million monthly active users</li>
              <li>• Predominantly female audience (70%+)</li>
              <li>• Core user age group: 18-35 years</li>
              <li>• High purchasing power demographic</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-coral/10 rounded-xl flex items-center justify-center text-coral">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-semibold">Platform Impact</h3>
            </div>
            <ul className="space-y-4 text-gray-600">
              <li>• Leading lifestyle content platform in China</li>
              <li>• Drives consumer trends and purchasing decisions</li>
              <li>• High user engagement and trust levels</li>
              <li>• Seamless integration of content and commerce</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};