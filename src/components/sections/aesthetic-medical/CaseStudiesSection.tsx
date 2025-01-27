import { motion, useInView } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, MapPin, Flag, Users } from "lucide-react";
import { useRef } from "react";

const caseStudies = [
  {
    name: "KCells",
    country: "Korea",
    engagements: "12,100+",
    description: "Utilising contents to drive interest over time, due to the proximity for Chinese audience, it has gathered fans and over time build trust with Chinese audience to turn them from audience to interested clients who are willing to fly over to seek consultation.",
    icon: <Building2 className="w-6 h-6 text-coral" />,
    flag: <Flag className="w-4 h-4 text-red-500" />,
    videoId: "nnF2dHjrHrU"
  },
  {
    name: "Dr Zhang",
    country: "Singapore",
    engagements: "3,200+",
    description: "With the growing numbers of affluence Chinese residing in Singapore, this targets local affluence Chinese who are based in Singapore. Creating educational contents and clinic's USP, this has connected with the targeted audience and driven high number of enquiries and in turn becoming customers at clinic.",
    icon: <Building2 className="w-6 h-6 text-coral" />,
    flag: <Flag className="w-4 h-4 text-red-500" />
  }
];

export const CaseStudiesSection = () => {
  const videoRef = useRef(null);
  const isVideoInView = useInView(videoRef, { once: true });

  return (
    <section className="mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <h2 className="text-2xl font-semibold mb-4">Success Stories</h2>
        <p className="text-gray-600">
          Real examples of clinics achieving remarkable success on Xiaohongshu
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {caseStudies.map((study, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <Card className="h-full hover:border-coral transition-colors duration-300">
              <CardHeader>
                <div className="flex items-center gap-4 mb-2">
                  {study.icon}
                  <CardTitle className="text-xl">{study.name}</CardTitle>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    {study.flag}
                    <MapPin className="w-4 h-4" />
                    {study.country}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {study.engagements} engagements
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{study.description}</p>
                {study.videoId && (
                  <div 
                    ref={videoRef}
                    className="relative w-full max-w-[400px] mx-auto"
                    style={{ paddingBottom: '177.77%' }} // 16:9 aspect ratio for portrait video
                  >
                    <iframe
                      src={`https://www.youtube.com/embed/${study.videoId}?rel=0&modestbranding=1`}
                      className="absolute top-0 left-0 w-full h-full border-0"
                      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};