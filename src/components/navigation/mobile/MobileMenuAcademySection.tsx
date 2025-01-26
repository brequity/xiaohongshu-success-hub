import { ChevronRight, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";
import { MobileMenuItem } from "./MobileMenuItem";

interface MobileMenuAcademySectionProps {
  isNavigating: boolean;
  scrollToSection: (sectionId: string) => Promise<void>;
  handleAcademyClick: () => void;
}

export const MobileMenuAcademySection = ({
  isNavigating,
  scrollToSection,
  handleAcademyClick
}: MobileMenuAcademySectionProps) => {
  return (
    <div className="space-y-3">
      <Link to="/academy" onClick={handleAcademyClick}>
        <MobileMenuItem 
          icon={GraduationCap}
          label="Academy"
        />
      </Link>
      <MobileMenuItem 
        icon={ChevronRight}
        label="RedNote vs TikTok"
        onClick={() => scrollToSection('pricing')}
        disabled={isNavigating}
        indent
      />
      <MobileMenuItem 
        icon={ChevronRight}
        label="Starter Guide"
        to="/starter-guide"
        indent
      />
      <MobileMenuItem 
        icon={ChevronRight}
        label="Quiz"
        to="/quiz"
        indent
      />
    </div>
  );
};