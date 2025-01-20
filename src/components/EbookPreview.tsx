import { motion } from "framer-motion";

export const EbookPreview = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 mb-16">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-2xl shadow-lg overflow-hidden"
      >
        <div className="grid md:grid-cols-2 gap-8 p-8">
          <div className="flex items-center justify-center">
            <img
              src="/lovable-uploads/5e81858d-ab51-48e2-a60f-f4b633728fc3.png"
              alt="Mastering Xiaohongshu Ebook Cover"
              className="rounded-lg shadow-md w-full max-w-md object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-3xl font-bold mb-4 text-[#1A1F2C]">
              Mastering Xiaohongshu
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              The Definitive Playbook for Content Creators Transitioning to China's Most Engaging Social Commerce Platform
            </p>
            <div className="space-y-4 text-gray-700">
              <p>
                Dive deep into the world of Xiaohongshu with our comprehensive guide designed specifically for content creators looking to expand their presence in the Chinese market.
              </p>
              <p>
                Learn proven strategies, understand the platform's unique features, and discover how to create content that resonates with the Xiaohongshu community.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};