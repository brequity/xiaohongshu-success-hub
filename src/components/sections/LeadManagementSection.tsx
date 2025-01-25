import { Bot, MessageSquare, Zap, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: <Bot className="w-10 h-10 text-jade" />,
    title: "AI-Powered Responses",
    description: "Instant, intelligent responses to lead inquiries 24/7 using advanced AI technology."
  },
  {
    icon: <MessageSquare className="w-10 h-10 text-jade" />,
    title: "Smart Conversation Management",
    description: "Natural, context-aware conversations that keep leads engaged and moving through your pipeline."
  },
  {
    icon: <Zap className="w-10 h-10 text-jade" />,
    title: "Rapid Response Time",
    description: "Immediate engagement with leads when they're most interested, increasing conversion rates."
  },
  {
    icon: <Users className="w-10 h-10 text-jade" />,
    title: "Lead Qualification",
    description: "Automated qualification and scoring of leads based on conversation data and engagement."
  }
];

export const LeadManagementSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">AI-Powered Lead Management</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Supercharge your lead conversion with our intelligent AI system that engages, qualifies, and nurtures leads automatically.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="border-2 hover:border-jade transition-colors duration-300"
            >
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};