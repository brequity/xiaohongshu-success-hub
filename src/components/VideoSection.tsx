import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const VideoSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-8 text-[#ea384c]">
            Watch Our Guide in Action
          </h2>
          <div className="relative w-full pt-[56.25%] rounded-xl overflow-hidden shadow-lg">
            <iframe
              src={`https://www.youtube.com/embed/1r92f7AZd0Q?autoplay=${isInView ? 1 : 0}`}
              className="absolute top-0 left-0 w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
};