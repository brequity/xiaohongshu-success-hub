import { LucideIcon } from "lucide-react";

interface InsightCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const InsightCard = ({ icon: Icon, title, description }: InsightCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 bg-coral/10 rounded-lg flex items-center justify-center">
          <Icon className="w-5 h-5 text-coral" />
        </div>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};