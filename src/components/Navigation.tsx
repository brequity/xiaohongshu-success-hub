import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Menu } from "lucide-react"
import { cn } from "@/lib/utils"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"

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

  const NavItems = () => (
    <NavigationMenuList className="gap-6">
      <NavigationMenuItem>
        <button
          onClick={() => scrollToSection('top')}
          className={cn(
            navigationMenuTriggerStyle(),
            "flex items-center gap-2 bg-transparent hover:bg-transparent"
          )}
        >
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
                  className="flex items-center gap-2 px-4 py-2 hover:bg-accent rounded-md transition-colors"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection('what-is-xiaohongshu')}
                  className="flex items-center gap-2 px-4 py-2 hover:bg-accent rounded-md transition-colors"
                >
                  Xiaohongshu
                </button>
                <button
                  onClick={() => scrollToSection('pricing')}
                  className="flex items-center gap-2 px-4 py-2 hover:bg-accent rounded-md transition-colors"
                >
                  Product
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="flex items-center gap-2 px-4 py-2 hover:bg-accent rounded-md transition-colors"
                >
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