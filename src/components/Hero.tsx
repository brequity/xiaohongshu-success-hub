import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="min-h-[80vh] flex items-center justify-center relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/lovable-uploads/d42d5b8e-4024-47c6-be55-5c639dfb6fce.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="inline-block px-3 py-1 mb-4 text-sm font-medium bg-coral/90 text-white rounded-full">
            Master Xiaohongshu
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
            Unlock Your Success on Xiaohongshu
          </h1>
          <p className="text-lg md:text-xl text-gray-100 mb-8">
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