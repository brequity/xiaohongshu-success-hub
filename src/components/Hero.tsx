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
      <img 
        src="/lovable-uploads/be80b333-e12f-4cac-8731-d442fa67f8bf.png"
        alt="Hero background"
        className="absolute inset-0 w-full h-full object-cover object-center"
        style={{ objectPosition: "center 25%" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />

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
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
            Your Gateway to China's Leading Lifestyle Platform
          </h1>
          <p className="text-base md:text-xl text-gray-100 mb-8">
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