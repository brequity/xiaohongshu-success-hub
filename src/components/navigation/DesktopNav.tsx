import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface DesktopNavProps {
  isNavigating: boolean;
  scrollToSection: (sectionId: string) => Promise<void>;
}

export const DesktopNav = ({ isNavigating, scrollToSection }: DesktopNavProps) => {
  return (
    <div className="hidden md:flex items-center justify-between h-16">
      <div className="flex items-center space-x-4">
        <Button 
          variant="ghost"
          onClick={() => scrollToSection('starter-guide')}
          disabled={isNavigating}
        >
          Starter Guide
        </Button>
        <Link to="/quiz">
          <Button variant="ghost">Quiz</Button>
        </Link>
      </div>
      <div>
        <Link to="/register">
          <Button>Sign Up</Button>
        </Link>
      </div>
    </div>
  );
};