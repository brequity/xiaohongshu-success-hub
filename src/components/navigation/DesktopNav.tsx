import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

interface DesktopNavProps {
  isNavigating: boolean;
  scrollToSection: (sectionId: string) => Promise<void>;
}

export const DesktopNav = ({ isNavigating, scrollToSection }: DesktopNavProps) => {
  return (
    <div className="hidden md:flex items-center justify-between h-16">
      <div className="flex items-center space-x-4">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link to="/academy">
                <NavigationMenuTrigger className="bg-transparent hover:bg-accent">
                  Academy
                </NavigationMenuTrigger>
              </Link>
              <NavigationMenuContent>
                <div className="p-2 w-48">
                  <button
                    onClick={() => scrollToSection('pricing')}
                    className="w-full text-left px-2 py-1.5 text-sm hover:bg-accent rounded-md transition-colors"
                    disabled={isNavigating}
                  >
                    RedNote vs TikTok
                  </button>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <Link to="/xiaohongshu">
          <Button variant="ghost">Xiaohongshu</Button>
        </Link>
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