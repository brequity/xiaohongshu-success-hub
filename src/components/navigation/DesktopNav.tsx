import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Home, Info, ShoppingBag, Contact, Book, Brain } from "lucide-react"
import { cn } from "@/lib/utils"

interface DesktopNavProps {
  isNavigating: boolean;
  scrollToSection: (sectionId: string) => Promise<void>;
}

export const DesktopNav = ({ isNavigating, scrollToSection }: DesktopNavProps) => {
  return (
    <NavigationMenu className="mx-auto my-2 hidden md:flex">
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
            onClick={() => scrollToSection('quiz')}
            className={cn(
              navigationMenuTriggerStyle(),
              "flex items-center gap-2 bg-transparent hover:bg-transparent",
              isNavigating && "opacity-50 pointer-events-none"
            )}
            disabled={isNavigating}
          >
            <Brain className="h-4 w-4" />
            <span>Quiz</span>
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
    </NavigationMenu>
  )
}