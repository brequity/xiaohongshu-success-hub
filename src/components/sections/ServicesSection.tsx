import { Building, Network, Users, ChartBar, Megaphone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: <Building className="w-10 h-10 text-coral" />,
    title: "Xiaohongshu Account Setup & Management",
    description: "Establish and optimize your official Xiaohongshu account for maximum impact."
  },
  {
    icon: <Network className="w-10 h-10 text-coral" />,
    title: "Content Creation",
    description: "Crafting authentic, high-engagement content that matches the platform's aesthetic and user preferences."
  },
  {
    icon: <Users className="w-10 h-10 text-coral" />,
    title: "Influencer (KOL/KOC) Collaborations",
    description: "Leverage the right influencers to amplify your brand's voice."
  },
  {
    icon: <Megaphone className="w-10 h-10 text-coral" />,
    title: "Ad Campaigns",
    description: "Design and manage ad campaigns with real-time performance tracking."
  },
  {
    icon: <ChartBar className="w-10 h-10 text-coral" />,
    title: "Analytics and Reporting",
    description: "Detailed insights into campaign performance to continually refine strategy."
  }
];

export const ServicesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-gray-600">
            Comprehensive solutions to establish and grow your brand on Xiaohongshu
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="border-2 hover:border-coral transition-colors duration-300"
            >
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  {service.icon}
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};