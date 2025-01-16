import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-white to-gray-50">
      <div className="container px-4 mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="inline-block px-3 py-1 mb-4 text-sm font-medium bg-coral/10 text-coral rounded-full">
            Master Xiaohongshu
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Unlock Your Success on Xiaohongshu
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            Learn proven strategies to grow your presence and monetize your content on China's fastest-growing social platform
          </p>
          <Button 
            size="lg"
            className="bg-coral hover:bg-coral-light text-white transition-all duration-300 transform hover:scale-105"
          >
            Get Started Today
          </Button>
        </motion.div>
      </div>
    </section>
  );
};