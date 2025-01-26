import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface MobileMenuItemProps {
  icon: LucideIcon;
  label: string;
  to?: string;
  onClick?: () => void;
  disabled?: boolean;
  indent?: boolean;
}

export const MobileMenuItem = ({ 
  icon: Icon, 
  label, 
  to, 
  onClick, 
  disabled, 
  indent = false 
}: MobileMenuItemProps) => {
  const content = (
    <Button 
      variant="ghost" 
      className={`w-full justify-start gap-2 ${indent ? 'pl-8 text-sm' : ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      <Icon className="h-4 w-4" />
      {label}
    </Button>
  );

  if (to) {
    return <Link to={to}>{content}</Link>;
  }

  return content;
};