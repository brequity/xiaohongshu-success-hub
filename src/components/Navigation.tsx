import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { DesktopNav } from "./navigation/DesktopNav";
import { MobileNav } from "./navigation/MobileNav";
import { useIsMobile } from "@/hooks/use-mobile";

export const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isNavigating, setIsNavigating] = useState(false);
  const isMobile = useIsMobile();

  const scrollToSection = async (sectionId: string) => {
    setIsNavigating(true);
    
    if (sectionId === 'starter-guide') {
      navigate('/starter-guide');
      setIsNavigating(false);
      return;
    }

    if (location.pathname !== '/') {
      navigate('/');
      await new Promise(resolve => setTimeout(resolve, 100));
      if (sectionId === 'top') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }
      setIsNavigating(false);
      return;
    }

    if (sectionId === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsNavigating(false);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b">
      <div className="container mx-auto">
        {isMobile ? (
          <MobileNav isNavigating={isNavigating} scrollToSection={scrollToSection} />
        ) : (
          <DesktopNav isNavigating={isNavigating} scrollToSection={scrollToSection} />
        )}
      </div>
    </div>
  );
};