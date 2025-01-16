import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Gift, ArrowRight, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";

export const ExitPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
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

  const handleSubscribe = async () => {
    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('subscribe-newsletter', {
        body: { email }
      });

      if (error) throw error;

      toast({
        title: "Success!",
        description: "You've been subscribed to our newsletter.",
        className: "bg-jade text-white",
      });
      setIsOpen(false);
      setEmail("");
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to subscribe. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const whatsappNumber = "+6582029372";
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/\+/g, '')}`;

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
        <div className="space-y-4">
          <div className="flex gap-3">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1"
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button 
              onClick={handleSubscribe} 
              className="flex-1"
              disabled={isLoading}
            >
              {isLoading ? "Subscribing..." : "Subscribe & Stay"}
            </Button>
            <Button variant="outline" onClick={() => setIsOpen(false)} className="flex-1">
              Maybe Later
            </Button>
          </div>
          <div className="pt-4 border-t">
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
              Contact us on WhatsApp: {whatsappNumber}
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
