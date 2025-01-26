import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, ChevronRight, Home, GraduationCap, BookOpen, HelpCircle, ScrollText, UserPlus, Mail, Hash } from "lucide-react";
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

  const handleXiaohongshuClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <SheetHeader className="mb-8">
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <nav className="flex-1 overflow-y-auto">
          <div className="flex flex-col gap-4">
            <Link to="/" onClick={handleHomeClick}>
              <Button variant="ghost" className="w-full justify-start gap-2">
                <Home className="h-4 w-4" />
                Home
              </Button>
            </Link>
            <Link to="/xhs" onClick={handleXiaohongshuClick}>
              <Button variant="ghost" className="w-full justify-start gap-2">
                <BookOpen className="h-4 w-4" />
                Xiaohongshu
              </Button>
            </Link>
            <Link to="/hashtag-generator">
              <Button variant="ghost" className="w-full justify-start gap-2">
                <Hash className="h-4 w-4" />
                Hashtag Generator
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
              <Link to="/starter-guide">
                <Button 
                  variant="ghost" 
                  className="w-full justify-start pl-8 text-sm gap-2"
                >
                  <ChevronRight className="h-4 w-4" />
                  Starter Guide
                </Button>
              </Link>
              <Link to="/quiz">
                <Button 
                  variant="ghost" 
                  className="w-full justify-start pl-8 text-sm gap-2"
                >
                  <ChevronRight className="h-4 w-4" />
                  Quiz
                </Button>
              </Link>
            </div>
            <Button 
              variant="ghost" 
              className="w-full justify-start gap-2"
              onClick={() => scrollToSection('contact')}
              disabled={isNavigating}
            >
              <Mail className="h-4 w-4" />
              Contact Us
            </Button>
            <Link to="/register">
              <Button variant="ghost" className="w-full justify-start gap-2">
                <UserPlus className="h-4 w-4" />
                Sign Up
              </Button>
            </Link>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
};