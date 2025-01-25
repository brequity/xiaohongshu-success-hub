import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  const scrollToFeatures = () => {
    const featuresSection = document.querySelector('#features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-[90vh] flex items-center justify-center relative bg-gradient-to-r from-[#FFA39E] to-[#FF7875]">
      <div className="absolute inset-0 bg-grid-white/25 bg-grid-8" />
      <div className="container px-4 mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-left"
          >
            <span className="inline-block px-4 py-2 mb-6 text-sm font-medium bg-white/90 text-coral rounded-full">
              #1 Xiaohongshu Marketing Platform
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Unlock Your Success on{" "}
              <span className="text-jade-light">Xiaohongshu</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl">
              Join thousands of successful creators who have mastered Xiaohongshu with our comprehensive guide and expert strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                onClick={scrollToFeatures}
                className="bg-white text-coral hover:bg-white/90 transition-all duration-300"
              >
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={scrollToFeatures}
                className="bg-transparent border-white text-white hover:bg-white/10"
              >
                View Success Stories
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block"
          >
            <img 
              src="/lovable-uploads/5e81858d-ab51-48e2-a60f-f4b633728fc3.png" 
              alt="Xiaohongshu Platform Preview" 
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white"
        >
          {[
            { number: "10M+", label: "Active Users" },
            { number: "200%", label: "Average Growth" },
            { number: "24/7", label: "Support" },
            { number: "95%", label: "Success Rate" },
          ].map((stat, index) => (
            <div key={index} className="p-4 rounded-lg bg-white/10 backdrop-blur-sm">
              <h3 className="text-3xl font-bold mb-2">{stat.number}</h3>
              <p className="text-sm text-white/80">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};