import { motion } from "framer-motion";

export const HashtagHero = () => {
  return (
    <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/lovable-uploads/d546e03c-f5db-416b-90df-f51daf01e9c5.png"
          alt="Hashtag Generator Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative text-center text-white px-4"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Xiaohongshu Hashtag Generator
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Discover trending hashtags across popular categories to boost your content visibility
        </p>
      </motion.div>
    </section>
  );
};