import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Menu, Home, BookOpen, Mail, UserPlus, Hash } from "lucide-react";
import { Link } from "react-router-dom";
import { MobileMenuItem } from "./mobile/MobileMenuItem";
import { MobileMenuAcademySection } from "./mobile/MobileMenuAcademySection";

interface MobileNavProps {
  isNavigating: boolean;
  scrollToSection: (sectionId: string) => Promise<void>;
}

export const MobileNav = ({ isNavigating, scrollToSection }: MobileNavProps) => {
  const handleAcademyClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleHomeClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleXiaohongshuClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon"
          className="relative z-[80]"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="relative px-4 pb-6 pt-0">
          <DrawerTitle className="text-center text-lg font-semibold">Menu</DrawerTitle>
        </DrawerHeader>
        <nav className="scrollbar-none flex-1 overflow-y-auto px-4">
          <div className="flex flex-col gap-4 pb-8">
            <Link to="/" onClick={handleHomeClick}>
              <MobileMenuItem 
                icon={Home}
                label="Home"
              />
            </Link>
            <Link to="/xhs" onClick={handleXiaohongshuClick}>
              <MobileMenuItem 
                icon={BookOpen}
                label="Xiaohongshu"
              />
            </Link>
            <MobileMenuItem 
              icon={Hash}
              label="Hashtag Generator"
              to="/hashtag-generator"
            />
            <MobileMenuAcademySection 
              isNavigating={isNavigating}
              scrollToSection={scrollToSection}
              handleAcademyClick={handleAcademyClick}
            />
            <MobileMenuItem 
              icon={Mail}
              label="Contact Us"
              onClick={() => scrollToSection('contact')}
              disabled={isNavigating}
            />
            <MobileMenuItem 
              icon={UserPlus}
              label="Sign Up"
              to="/register"
            />
          </div>
        </nav>
      </DrawerContent>
    </Drawer>
  );
};