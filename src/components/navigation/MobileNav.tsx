import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, ChevronRight, Home, GraduationCap, BookOpen, HelpCircle, ScrollText, UserPlus } from "lucide-react";
import { Link } from "react-router-dom";

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

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="md:hidden"
          size="icon"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-4 mt-4">
          <Link to="/" onClick={handleHomeClick}>
            <Button variant="ghost" className="w-full justify-start gap-2">
              <Home className="h-4 w-4" />
              Home
            </Button>
          </Link>
          <div className="space-y-3">
            <Link to="/academy" onClick={handleAcademyClick}>
              <Button 
                variant="ghost" 
                className="w-full justify-start gap-2"
              >
                <GraduationCap className="h-4 w-4" />
                Academy
              </Button>
            </Link>
            <Button 
              variant="ghost" 
              className="w-full justify-start pl-8 text-sm gap-2"
              onClick={() => scrollToSection('pricing')}
              disabled={isNavigating}
            >
              <ChevronRight className="h-4 w-4" />
              RedNote vs TikTok
            </Button>
          </div>
          <Link to="/xiaohongshu">
            <Button variant="ghost" className="w-full justify-start gap-2">
              <BookOpen className="h-4 w-4" />
              Xiaohongshu
            </Button>
          </Link>
          <Button 
            variant="ghost" 
            className="w-full justify-start gap-2"
            onClick={() => scrollToSection('starter-guide')}
            disabled={isNavigating}
          >
            <HelpCircle className="h-4 w-4" />
            Starter Guide
          </Button>
          <Link to="/quiz">
            <Button variant="ghost" className="w-full justify-start gap-2">
              <ScrollText className="h-4 w-4" />
              Quiz
            </Button>
          </Link>
          <Link to="/register">
            <Button variant="ghost" className="w-full justify-start gap-2">
              <UserPlus className="h-4 w-4" />
              Sign Up
            </Button>
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
};