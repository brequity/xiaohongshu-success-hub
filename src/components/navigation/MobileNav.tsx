import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

interface MobileNavProps {
  isNavigating: boolean;
  scrollToSection: (sectionId: string) => Promise<void>;
}

export const MobileNav = ({ isNavigating, scrollToSection }: MobileNavProps) => {
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
          <Button 
            variant="ghost" 
            className="w-full justify-start"
            onClick={() => scrollToSection('top')}
            disabled={isNavigating}
          >
            Home
          </Button>
          <Button 
            variant="ghost" 
            className="w-full justify-start"
            onClick={() => scrollToSection('starter-guide')}
            disabled={isNavigating}
          >
            Starter Guide
          </Button>
          <Link to="/quiz">
            <Button variant="ghost" className="w-full justify-start">
              Quiz
            </Button>
          </Link>
          <Link to="/register">
            <Button variant="ghost" className="w-full justify-start">
              Sign Up
            </Button>
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
};