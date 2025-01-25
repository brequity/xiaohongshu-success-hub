import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="relative">
      <div className="min-h-[80vh] w-full relative overflow-hidden">
        <img
          src="/lovable-uploads/cfa0847e-9f5c-4e97-87bb-371204052bad.png"
          alt="Xiaohongshu content creator using phone"
          className="w-full h-full object-cover absolute inset-0"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center text-white px-4"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Xiaohongshu Academy
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Master the art of content creation on China's most influential lifestyle platform
          </p>
          <Link to="/register">
            <Button size="lg" className="bg-[#ea384c] hover:bg-[#ea384c]/90">
              Get Started
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};