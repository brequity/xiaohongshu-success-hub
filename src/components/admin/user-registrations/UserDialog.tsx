import { useState, useEffect } from "react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface UserDialogProps {
  user: {
    id: string;
    email: string | null;
    created_at: string;
    updated_at: string;
  } | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onUserUpdated: () => void;
}

export const UserDialog = ({ user, open, onOpenChange, onUserUpdated }: UserDialogProps) => {
  const [editedEmail, setEditedEmail] = useState("");

  // Reset form when user changes
  useEffect(() => {
    if (user) {
      setEditedEmail(user.email || "");
    }
  }, [user]);

  const handleEdit = async () => {
    if (!user) return;

    try {
      const { error } = await supabase
        .from('profiles')
        .update({
          email: editedEmail,
          updated_at: new Date().toISOString(),
        })
        .eq('id', user.id);

      if (error) throw error;

      toast.success("User details updated successfully");
      onUserUpdated();
    } catch (error: any) {
      toast.error(`Error updating user: ${error.message}`);
    }
  };

  if (!user) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit User Details</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div>
            <h3 className="font-medium text-sm">Email</h3>
            <Input 
              value={editedEmail}
              onChange={(e) => setEditedEmail(e.target.value)}
              className="mt-1"
            />
          </div>
        </div>
        <div className="flex justify-end space-x-2">
          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
          >
            Cancel
          </Button>
          <Button onClick={handleEdit}>
            Save Changes
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};