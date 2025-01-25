import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { StatusSelector } from "../contact-form/StatusSelector";

interface LeadDialogProps {
  lead: any;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onLeadUpdated: () => void;
}

export const LeadDialog = ({ lead, open, onOpenChange, onLeadUpdated }: LeadDialogProps) => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [information, setInformation] = useState("");
  const [status, setStatus] = useState("uncontacted");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (lead) {
      setEmail(lead.email || "");
      setCompanyName(lead.company_name || "");
      setContactNumber(lead.contact_number || "");
      setInformation(lead.information || "");
      setStatus(lead.status || "uncontacted");
    }
  }, [lead]);

  const handleSave = async () => {
    if (!lead?.id) return;

    setIsLoading(true);
    try {
      const { error } = await supabase
        .from("growth_strategy_leads")
        .update({
          email,
          company_name: companyName,
          contact_number: contactNumber,
          information,
          status,
          updated_at: new Date().toISOString(),
        })
        .eq("id", lead.id);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Lead details updated successfully",
      });
      onLeadUpdated();
    } catch (error: any) {
      toast({
        title: "Error",
        description: "Failed to update lead details",
        variant: "destructive",
      });
      console.error("Error updating lead:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Lead Details</DialogTitle>
          <DialogDescription>
            Update the growth strategy lead information below.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="companyName">Company Name</Label>
            <Input
              id="companyName"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="contactNumber">Contact Number</Label>
            <Input
              id="contactNumber"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="information">Information</Label>
            <Textarea
              id="information"
              value={information}
              onChange={(e) => setInformation(e.target.value)}
              rows={4}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="status">Status</Label>
            <StatusSelector
              status={status}
              onStatusChange={setStatus}
              className="w-full"
            />
          </div>
        </div>
        <div className="flex justify-end space-x-2">
          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
            disabled={isLoading}
          >
            Cancel
          </Button>
          <Button onClick={handleSave} disabled={isLoading}>
            Save Changes
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};