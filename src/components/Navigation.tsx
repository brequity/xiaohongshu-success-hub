import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Home, User, Package, Mail } from "lucide-react"
import { cn } from "@/lib/utils"
import { Link } from "react-router-dom"

export const Navigation = () => {
  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b">
      <div className="container mx-auto">
        <NavigationMenu className="mx-auto my-2">
          <NavigationMenuList className="gap-6">
            <NavigationMenuItem>
              <button
                onClick={() => scrollToSection('top')}
                className={cn(
                  navigationMenuTriggerStyle(),
                  "flex items-center gap-2 bg-transparent hover:bg-transparent"
                )}
              >
                <Home className="w-4 h-4" />
                <span>Home</span>
              </button>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <button
                onClick={() => scrollToSection('what-is-xiaohongshu')}
                className={cn(
                  navigationMenuTriggerStyle(),
                  "flex items-center gap-2 bg-transparent hover:bg-transparent"
                )}
              >
                <User className="w-4 h-4" />
                <span>Xiaohongshu</span>
              </button>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <button
                onClick={() => scrollToSection('pricing')}
                className={cn(
                  navigationMenuTriggerStyle(),
                  "flex items-center gap-2 bg-transparent hover:bg-transparent"
                )}
              >
                <Package className="w-4 h-4" />
                <span>Product</span>
              </button>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <button
                onClick={() => scrollToSection('contact')}
                className={cn(
                  navigationMenuTriggerStyle(),
                  "flex items-center gap-2 bg-transparent hover:bg-transparent"
                )}
              >
                <Mail className="w-4 h-4" />
                <span>Contact</span>
              </button>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
};