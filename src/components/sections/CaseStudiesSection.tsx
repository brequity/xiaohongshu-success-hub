import { motion } from "framer-motion";

const caseStudies = [
  {
    image: "/lovable-uploads/f33e660f-6b20-402d-b4f2-b54d474cb06e.png",
    title: "International Beauty Brand",
    description: "Achieved 300% growth in Chinese market penetration through strategic Xiaohongshu content marketing",
    metrics: {
      roi: "250%",
      duration: "6 months",
      engagement: "45% engagement rate",
      exposure: "2.5M+ impressions",
      followers: "100K+ new followers"
    }
  },
  {
    image: "/lovable-uploads/644fa23f-ba2e-44e0-a963-72111efc0fc8.png",
    title: "Fashion Retailer",
    description: "Generated 1M+ authentic user engagements and established a loyal customer base",
    metrics: {
      roi: "180%",
      duration: "12 months",
      engagement: "38% engagement rate",
      exposure: "5M+ impressions",
      followers: "250K+ new followers"
    }
  },
  {
    image: "/lovable-uploads/5e81858d-ab51-48e2-a60f-f4b633728fc3.png",
    title: "Lifestyle Brand",
    description: "Expanded market reach by 500% through influencer collaborations and user-generated content",
    metrics: {
      roi: "320%",
      duration: "9 months",
      engagement: "52% engagement rate",
      exposure: "3.8M+ impressions",
      followers: "180K+ new followers"
    }
  }
];

export const CaseStudiesSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Success Stories on Xiaohongshu</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover how brands are achieving remarkable success on Xiaohongshu through strategic content and community engagement
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
            >
              <div className="relative h-48">
                <img
                  src={study.image}
                  alt={`${study.title} Case Study`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{study.title}</h3>
                <p className="text-gray-600 mb-4">
                  {study.description}
                </p>
                <div className="space-y-2 border-t pt-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-sm">
                      <span className="text-coral font-semibold">ROI:</span>
                      <span className="ml-2 text-gray-700">{study.metrics.roi}</span>
                    </div>
                    <div className="text-sm">
                      <span className="text-coral font-semibold">Duration:</span>
                      <span className="ml-2 text-gray-700">{study.metrics.duration}</span>
                    </div>
                  </div>
                  <div className="text-sm">
                    <span className="text-coral font-semibold">Engagement:</span>
                    <span className="ml-2 text-gray-700">{study.metrics.engagement}</span>
                  </div>
                  <div className="text-sm">
                    <span className="text-coral font-semibold">Exposure:</span>
                    <span className="ml-2 text-gray-700">{study.metrics.exposure}</span>
                  </div>
                  <div className="text-sm">
                    <span className="text-coral font-semibold">Growth:</span>
                    <span className="ml-2 text-gray-700">{study.metrics.followers}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};