import { useState } from "react";
import { Trash2 } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { StatusSelector } from "./StatusSelector";
import { Submission } from "../types/contact-form";

type SubmissionDialogProps = {
  submission: Submission | null;
  onClose: () => void;
  onDelete: (id: string) => Promise<void>;
  onUpdate: () => void;
};

export const SubmissionDialog = ({ 
  submission, 
  onClose, 
  onDelete,
  onUpdate 
}: SubmissionDialogProps) => {
  const [editedName, setEditedName] = useState("");
  const [editedEmail, setEditedEmail] = useState("");
  const [editedMessage, setEditedMessage] = useState("");

  const handleEdit = async () => {
    if (!submission) return;

    const { error } = await supabase
      .from('contact_form_submissions')
      .update({
        name: editedName,
        email: editedEmail,
        message: editedMessage
      })
      .eq('id', submission.id);

    if (error) {
      toast.error("Failed to update submission");
      return;
    }

    toast.success("Submission updated successfully");
    onUpdate();
  };

  if (!submission) return null;

  return (
    <Dialog open={!!submission} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Contact Form Submission Details</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div>
            <h3 className="font-medium text-sm">Name</h3>
            <Input 
              value={editedName || submission.name}
              onChange={(e) => setEditedName(e.target.value)}
              className="mt-1"
            />
          </div>
          <div>
            <h3 className="font-medium text-sm">Email</h3>
            <Input 
              value={editedEmail || submission.email}
              onChange={(e) => setEditedEmail(e.target.value)}
              className="mt-1"
            />
          </div>
          <div>
            <h3 className="font-medium text-sm">Message</h3>
            <Textarea 
              value={editedMessage || submission.message}
              onChange={(e) => setEditedMessage(e.target.value)}
              className="mt-1"
            />
          </div>
          <div>
            <h3 className="font-medium text-sm">Status</h3>
            <StatusSelector
              status={submission.status}
              onStatusChange={(value) => {
                supabase
                  .from('contact_form_submissions')
                  .update({ status: value })
                  .eq('id', submission.id)
                  .then(({ error }) => {
                    if (error) {
                      toast.error("Failed to update status");
                      return;
                    }
                    toast.success("Status updated successfully");
                    onUpdate();
                  });
              }}
              className="w-[130px] mt-1"
            />
          </div>
          <div>
            <h3 className="font-medium text-sm">Submitted At</h3>
            <p className="mt-1">
              {new Date(submission.created_at).toLocaleString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
              })}
            </p>
          </div>
          <div className="flex gap-4 pt-4">
            <Button
              onClick={handleEdit}
              className="flex-1"
            >
              Save Changes
            </Button>
            <Button
              variant="destructive"
              onClick={() => onDelete(submission.id)}
              className="flex-1"
            >
              <Trash2 className="mr-2 h-4 w-4" />
              Delete Submission
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};