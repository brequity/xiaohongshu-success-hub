import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu, Home, Info, ShoppingBag, Contact, Book, Brain } from "lucide-react"
import { cn } from "@/lib/utils"
import { useNavigate } from "react-router-dom"

interface MobileNavProps {
  isNavigating: boolean;
  scrollToSection: (sectionId: string) => Promise<void>;
}

export const MobileNav = ({ isNavigating, scrollToSection }: MobileNavProps) => {
  const navigate = useNavigate();

  const handleQuizClick = () => {
    navigate('/quiz');
  };

  return (
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
              onClick={handleQuizClick}
              className="flex items-center gap-2 px-4 py-2 hover:bg-accent rounded-md transition-colors"
            >
              <Brain className="h-5 w-5" />
              Quiz
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
  )
}