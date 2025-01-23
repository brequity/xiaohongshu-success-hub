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

export const MobileNav = () => {
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
          <Link to="/starter-guide">
            <Button variant="ghost" className="w-full justify-start">
              Starter Guide
            </Button>
          </Link>
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