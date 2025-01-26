import { motion } from "framer-motion";

export const XHSHero = () => {
  return (
    <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/lovable-uploads/d546e03c-f5db-416b-90df-f51daf01e9c5.png"
          alt="Xiaohongshu Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative text-center text-white px-4"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Xiaohongshu Marketing Guide
        </h1>
        <p className="text-xl md:text-2xl max-w-2xl mx-auto">
          Your comprehensive guide to marketing on China's most influential lifestyle platform
        </p>
      </motion.div>
    </section>
  );
};