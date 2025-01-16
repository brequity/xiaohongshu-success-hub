import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Gift, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const ExitPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsOpen(true);
        setHasShown(true);
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [hasShown]);

  const handleStayClick = () => {
    setIsOpen(false);
    toast({
      title: "Thank you for staying!",
      description: "We appreciate your interest in our content.",
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Gift className="h-5 w-5 text-pink-500" />
            Wait! Don't miss out on exclusive content
          </DialogTitle>
          <DialogDescription className="pt-4">
            Join our newsletter to receive:
            <ul className="mt-2 space-y-2">
              <li className="flex items-center gap-2">
                <ArrowRight className="h-4 w-4 text-blue-500" />
                Expert Xiaohongshu marketing tips
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight className="h-4 w-4 text-blue-500" />
                Weekly content creation strategies
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight className="h-4 w-4 text-blue-500" />
                Exclusive case studies and success stories
              </li>
            </ul>
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col sm:flex-row gap-3 mt-4">
          <Button onClick={handleStayClick} className="flex-1">
            Stay and Learn More
          </Button>
          <Button variant="outline" onClick={() => setIsOpen(false)} className="flex-1">
            Maybe Later
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};