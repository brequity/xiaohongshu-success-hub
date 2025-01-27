import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Home, GraduationCap, BookOpen, ScrollText, HelpCircle, UserPlus, Mail, Hash, Stethoscope } from "lucide-react";

interface DesktopNavProps {
  isNavigating: boolean;
  scrollToSection: (sectionId: string) => Promise<void>;
}

export const DesktopNav = ({ isNavigating, scrollToSection }: DesktopNavProps) => {
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
    <div className="hidden md:flex items-center justify-between h-16">
      <div className="flex items-center space-x-4">
        <Link to="/" onClick={handleHomeClick}>
          <Button variant="ghost" className="flex items-center gap-2">
            <Home className="h-4 w-4" />
            Home
          </Button>
        </Link>
        <Link to="/xhs" onClick={handleXiaohongshuClick}>
          <Button variant="ghost" className="flex items-center gap-2">
            <BookOpen className="h-4 w-4" />
            Xiaohongshu
          </Button>
        </Link>
        <Link to="/aesthetic-medical">
          <Button variant="ghost" className="flex items-center gap-2">
            <Stethoscope className="h-4 w-4" />
            Aesthetic/Medical
          </Button>
        </Link>
        <Link to="/hashtag-generator">
          <Button variant="ghost" className="flex items-center gap-2">
            <Hash className="h-4 w-4" />
            Hashtag Generator
          </Button>
        </Link>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link to="/academy" onClick={handleAcademyClick}>
                <NavigationMenuTrigger className="bg-transparent hover:bg-accent flex items-center gap-2">
                  <GraduationCap className="h-4 w-4" />
                  Academy
                </NavigationMenuTrigger>
              </Link>
              <NavigationMenuContent>
                <div className="p-2 w-48 space-y-2">
                  <button
                    onClick={() => scrollToSection('pricing')}
                    className="w-full text-left px-2 py-1.5 text-sm hover:bg-accent rounded-md transition-colors flex items-center gap-2"
                    disabled={isNavigating}
                  >
                    <ScrollText className="h-4 w-4" />
                    RedNote vs TikTok
                  </button>
                  <Link to="/starter-guide">
                    <button
                      className="w-full text-left px-2 py-1.5 text-sm hover:bg-accent rounded-md transition-colors flex items-center gap-2"
                    >
                      <HelpCircle className="h-4 w-4" />
                      Starter Guide
                    </button>
                  </Link>
                  <Link to="/quiz">
                    <button
                      className="w-full text-left px-2 py-1.5 text-sm hover:bg-accent rounded-md transition-colors flex items-center gap-2"
                    >
                      <ScrollText className="h-4 w-4" />
                      Quiz
                    </button>
                  </Link>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <Button
          variant="ghost"
          className="flex items-center gap-2"
          onClick={() => scrollToSection('contact')}
          disabled={isNavigating}
        >
          <Mail className="h-4 w-4" />
          Contact Us
        </Button>
      </div>
      <div>
        <Link to="/register">
          <Button className="flex items-center gap-2">
            <UserPlus className="h-4 w-4" />
            Sign Up
          </Button>
        </Link>
      </div>
    </div>
  );
};