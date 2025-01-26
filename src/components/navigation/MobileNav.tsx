import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
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
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="mb-8">
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <nav className="flex-1 overflow-y-auto">
          <div className="flex flex-col gap-4">
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
      </SheetContent>
    </Sheet>
  );
};