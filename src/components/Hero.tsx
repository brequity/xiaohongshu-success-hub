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
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/lovable-uploads/21cf5e60-5451-4e74-9b23-1523c24cf140.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20" /> {/* Reduced opacity for better visibility */}
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="inline-block px-3 py-1 mb-4 text-sm font-medium bg-coral/90 text-white rounded-full">
            Welcome to Xiaohongshu Academy
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
            Your Complete Guide to Xiaohongshu Content Creation
          </h1>
          <p className="text-lg md:text-xl text-gray-100 mb-8">
            Learn everything about Xiaohongshu - from understanding the platform to creating engaging content that resonates with Chinese audiences. Perfect for creators migrating from other platforms.
          </p>
          <Button 
            size="lg"
            onClick={scrollToFeatures}
            className="bg-coral hover:bg-coral-light text-white transition-all duration-300 transform hover:scale-105"
          >
            Start Your Xiaohongshu Journey
          </Button>
        </motion.div>
      </div>
    </section>
  );
};