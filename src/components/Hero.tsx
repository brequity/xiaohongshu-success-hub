import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const Hero = () => {
  const scrollToFeatures = () => {
    const featuresSection = document.querySelector('#features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-[80vh] flex items-center justify-center relative">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/lovable-uploads/9c5572d8-6103-42c0-be4c-9fc9041bbb51.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
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
            Understanding Xiaohongshu (RED)
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
            Your Gateway to China's Leading Lifestyle Platform
          </h1>
          <p className="text-lg md:text-xl text-gray-100 mb-8">
            Xiaohongshu is more than just a social media platform; it's a lifestyle and e-commerce hub where over 200 million young, affluent Chinese users share their experiences in fashion, beauty, and travel.
          </p>
          <Button 
            size="lg"
            onClick={scrollToFeatures}
            className="bg-coral hover:bg-coral-light text-white transition-all duration-300 transform hover:scale-105"
          >
            Explore Xiaohongshu Features
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
