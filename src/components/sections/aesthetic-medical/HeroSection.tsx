import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const HeroSection = () => {
  return (
    <section className="relative h-[60vh] overflow-hidden">
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/lovable-uploads/bf0c26bc-8eca-47ed-a3e5-ccade9d6f18d.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </motion.div>
      
      <div className="relative z-10 h-full flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center text-white px-4"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Aesthetic Medical Marketing
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Strategic marketing solutions for aesthetic medical clinics on Xiaohongshu
          </p>
          <Button 
            size="lg" 
            className="bg-coral hover:bg-coral/90 animate-fade-in"
          >
            Get Started
          </Button>
        </motion.div>
      </div>
    </section>
  );
};