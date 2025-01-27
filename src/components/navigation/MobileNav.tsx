import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Menu, Home, BookOpen, Hash, Mail, UserPlus, GraduationCap, Stethoscope } from "lucide-react";

interface MobileNavProps {
  isNavigating: boolean;
  scrollToSection: (sectionId: string) => Promise<void>;
}

export const MobileNav = ({ isNavigating, scrollToSection }: MobileNavProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleAcademyClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsOpen(false);
  };

  const handleHomeClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsOpen(false);
  };

  const handleXiaohongshuClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsOpen(false);
  };

  const handleContactClick = async () => {
    await scrollToSection('contact');
    setIsOpen(false);
  };

  return (
    <div className="flex items-center justify-between h-16">
      <Link to="/" onClick={handleHomeClick}>
        <Button variant="ghost" size="sm" className="flex items-center gap-2">
          <Home className="h-4 w-4" />
          Home
        </Button>
      </Link>

      <Drawer open={isOpen} onOpenChange={setIsOpen}>
        <DrawerTrigger asChild>
          <Button variant="ghost" size="icon">
            <Menu className="h-6 w-6" />
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <div className="p-4 space-y-4">
            <Link to="/xhs" onClick={handleXiaohongshuClick} className="w-full">
              <Button variant="ghost" className="w-full justify-start gap-2">
                <BookOpen className="h-4 w-4" />
                Xiaohongshu
              </Button>
            </Link>

            <Link to="/aesthetic-medical" onClick={() => setIsOpen(false)} className="w-full">
              <Button variant="ghost" className="w-full justify-start gap-2">
                <Stethoscope className="h-4 w-4" />
                Aesthetic Medical
              </Button>
            </Link>

            <Link to="/hashtag-generator" onClick={() => setIsOpen(false)} className="w-full">
              <Button variant="ghost" className="w-full justify-start gap-2">
                <Hash className="h-4 w-4" />
                Hashtag Generator
              </Button>
            </Link>

            <Link to="/academy" onClick={handleAcademyClick} className="w-full">
              <Button variant="ghost" className="w-full justify-start gap-2">
                <GraduationCap className="h-4 w-4" />
                Academy
              </Button>
            </Link>

            <Link to="/starter-guide" onClick={() => setIsOpen(false)} className="w-full">
              <Button variant="ghost" className="w-full justify-start gap-2">
                <BookOpen className="h-4 w-4" />
                Starter Guide
              </Button>
            </Link>

            <Link to="/quiz" onClick={() => setIsOpen(false)} className="w-full">
              <Button variant="ghost" className="w-full justify-start gap-2">
                <BookOpen className="h-4 w-4" />
                Quiz
              </Button>
            </Link>

            <Button
              variant="ghost"
              className="w-full justify-start gap-2"
              onClick={handleContactClick}
              disabled={isNavigating}
            >
              <Mail className="h-4 w-4" />
              Contact Us
            </Button>

            <Link to="/register" onClick={() => setIsOpen(false)} className="w-full">
              <Button className="w-full justify-start gap-2">
                <UserPlus className="h-4 w-4" />
                Sign Up
              </Button>
            </Link>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
};