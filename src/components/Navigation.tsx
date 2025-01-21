import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Menu, Home, Info, ShoppingBag, Contact, Book } from "lucide-react"
import { cn } from "@/lib/utils"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Link, useNavigate, useLocation } from "react-router-dom"
import { useState } from "react"

export const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isNavigating, setIsNavigating] = useState(false);

  const scrollToSection = async (sectionId: string) => {
    setIsNavigating(true);
    
    if (sectionId === 'starter-guide') {
      navigate('/starter-guide');
      setIsNavigating(false);
      return;
    }

    if (location.pathname !== '/') {
      navigate('/');
      // Add a small delay to ensure the navigation completes before scrolling
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

  const NavItems = () => (
    <NavigationMenuList className="gap-6">
      <NavigationMenuItem>
        <button
          onClick={() => scrollToSection('top')}
          className={cn(
            navigationMenuTriggerStyle(),
            "flex items-center gap-2 bg-transparent hover:bg-transparent",
            isNavigating && "opacity-50 pointer-events-none"
          )}
          disabled={isNavigating}
        >
          <Home className="h-4 w-4" />
          <span>Home</span>
        </button>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <button
          onClick={() => scrollToSection('what-is-xiaohongshu')}
          className={cn(
            navigationMenuTriggerStyle(),
            "flex items-center gap-2 bg-transparent hover:bg-transparent",
            isNavigating && "opacity-50 pointer-events-none"
          )}
          disabled={isNavigating}
        >
          <Info className="h-4 w-4" />
          <span>Xiaohongshu</span>
        </button>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <button
          onClick={() => scrollToSection('pricing')}
          className={cn(
            navigationMenuTriggerStyle(),
            "flex items-center gap-2 bg-transparent hover:bg-transparent",
            isNavigating && "opacity-50 pointer-events-none"
          )}
          disabled={isNavigating}
        >
          <ShoppingBag className="h-4 w-4" />
          <span>Rednote vs Tiktok</span>
        </button>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <button
          onClick={() => scrollToSection('starter-guide')}
          className={cn(
            navigationMenuTriggerStyle(),
            "flex items-center gap-2 bg-transparent hover:bg-transparent",
            isNavigating && "opacity-50 pointer-events-none"
          )}
          disabled={isNavigating}
        >
          <Book className="h-4 w-4" />
          <span>Starter Guide</span>
        </button>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <button
          onClick={() => scrollToSection('contact')}
          className={cn(
            navigationMenuTriggerStyle(),
            "flex items-center gap-2 bg-transparent hover:bg-transparent",
            isNavigating && "opacity-50 pointer-events-none"
          )}
          disabled={isNavigating}
        >
          <Contact className="h-4 w-4" />
          <span>Contact</span>
        </button>
      </NavigationMenuItem>
    </NavigationMenuList>
  );

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b">
      <div className="container mx-auto">
        {/* Desktop Navigation */}
        <NavigationMenu className="mx-auto my-2 hidden md:flex">
          <NavItems />
        </NavigationMenu>

        {/* Mobile Navigation */}
        <div className="flex md:hidden justify-end p-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4">
                <button
                  onClick={() => scrollToSection('top')}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 hover:bg-accent rounded-md transition-colors",
                    isNavigating && "opacity-50 pointer-events-none"
                  )}
                  disabled={isNavigating}
                >
                  <Home className="h-5 w-5" />
                  Home
                </button>
                <button
                  onClick={() => scrollToSection('what-is-xiaohongshu')}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 hover:bg-accent rounded-md transition-colors",
                    isNavigating && "opacity-50 pointer-events-none"
                  )}
                  disabled={isNavigating}
                >
                  <Info className="h-5 w-5" />
                  Xiaohongshu
                </button>
                <button
                  onClick={() => scrollToSection('pricing')}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 hover:bg-accent rounded-md transition-colors",
                    isNavigating && "opacity-50 pointer-events-none"
                  )}
                  disabled={isNavigating}
                >
                  <ShoppingBag className="h-5 w-5" />
                  Rednote vs Tiktok
                </button>
                <button
                  onClick={() => scrollToSection('starter-guide')}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 hover:bg-accent rounded-md transition-colors",
                    isNavigating && "opacity-50 pointer-events-none"
                  )}
                  disabled={isNavigating}
                >
                  <Book className="h-5 w-5" />
                  Starter Guide
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 hover:bg-accent rounded-md transition-colors",
                    isNavigating && "opacity-50 pointer-events-none"
                  )}
                  disabled={isNavigating}
                >
                  <Contact className="h-5 w-5" />
                  Contact
                </button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};