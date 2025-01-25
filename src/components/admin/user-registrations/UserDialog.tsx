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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

interface UserDialogProps {
  user: {
    id: string;
    email: string | null;
    created_at: string;
    updated_at: string;
    user_roles?: Array<{ role: 'admin' | 'user' }>;
  } | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onUserUpdated: () => void;
}

export const UserDialog = ({ user, open, onOpenChange, onUserUpdated }: UserDialogProps) => {
  const [editedEmail, setEditedEmail] = useState("");
  const [selectedRole, setSelectedRole] = useState<'admin' | 'user'>('user');

  // Reset form when user changes
  useEffect(() => {
    if (user) {
      setEditedEmail(user.email || "");
      setSelectedRole(user.user_roles?.[0]?.role || 'user');
    }
  }, [user]);

  const handleEdit = async () => {
    if (!user) return;

    try {
      // Update email in profiles table
      const { error: profileError } = await supabase
        .from('profiles')
        .update({
          email: editedEmail,
          updated_at: new Date().toISOString(),
        })
        .eq('id', user.id);

      if (profileError) throw profileError;

      // Update or insert role in user_roles table
      const { error: roleError } = await supabase
        .from('user_roles')
        .upsert(
          {
            user_id: user.id,
            role: selectedRole,
          },
          {
            onConflict: 'user_id',
          }
        );

      if (roleError) throw roleError;

      toast.success("User details updated successfully");
      onUserUpdated();
    } catch (error: any) {
      console.error('Error updating user:', error);
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
            <h3 className="font-medium text-sm mb-2">Email</h3>
            <Input 
              value={editedEmail}
              onChange={(e) => setEditedEmail(e.target.value)}
            />
          </div>
          <div>
            <h3 className="font-medium text-sm mb-2">Role</h3>
            <RadioGroup
              value={selectedRole}
              onValueChange={(value: 'admin' | 'user') => setSelectedRole(value)}
              className="flex flex-col space-y-2"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="user" id="user" />
                <Label htmlFor="user">User</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="admin" id="admin" />
                <Label htmlFor="admin">Admin</Label>
              </div>
            </RadioGroup>
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