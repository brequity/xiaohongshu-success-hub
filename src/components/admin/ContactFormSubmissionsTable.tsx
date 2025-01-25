import { Mail, Trash2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { toast } from "sonner";

const formatDateTime = (dateString: string) => {
  return new Date(dateString).toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  });
};

type Submission = {
  id: string;
  name: string;
  email: string;
  message: string;
  status: string;
  created_at: string;
};

export const ContactFormSubmissionsTable = () => {
  const [selectedSubmission, setSelectedSubmission] = useState<Submission | null>(null);
  const queryClient = useQueryClient();

  const { data: submissions, isLoading } = useQuery({
    queryKey: ['contact-form-submissions'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('contact_form_submissions')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data;
    }
  });

  const handleDelete = async (id: string) => {
    const { error } = await supabase
      .from('contact_form_submissions')
      .delete()
      .eq('id', id);

    if (error) {
      toast.error("Failed to delete submission");
      return;
    }

    toast.success("Submission deleted successfully");
    setSelectedSubmission(null);
    queryClient.invalidateQueries({ queryKey: ['contact-form-submissions'] });
  };

  const handleStatusChange = async (id: string, newStatus: string) => {
    const { error } = await supabase
      .from('contact_form_submissions')
      .update({ status: newStatus })
      .eq('id', id);

    if (error) {
      toast.error("Failed to update status");
      return;
    }

    toast.success("Status updated successfully");
    queryClient.invalidateQueries({ queryKey: ['contact-form-submissions'] });
  };

  return (
    <>
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
        <div className="flex items-center gap-2 p-6 border-b">
          <Mail className="h-5 w-5" />
          <h2 className="text-xl font-semibold">Contact Form Submissions</h2>
        </div>
        <div className="p-6">
          {isLoading ? (
            <p>Loading submissions...</p>
          ) : !submissions?.length ? (
            <p>No contact form submissions found.</p>
          ) : (
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Message</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Submitted At</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {submissions.map((submission) => (
                    <TableRow 
                      key={submission.id}
                      className="cursor-pointer hover:bg-muted/50"
                      onClick={() => setSelectedSubmission(submission)}
                    >
                      <TableCell>{submission.name}</TableCell>
                      <TableCell>{submission.email}</TableCell>
                      <TableCell className="max-w-md truncate">{submission.message}</TableCell>
                      <TableCell>
                        <Select
                          value={submission.status}
                          onValueChange={(value) => {
                            handleStatusChange(submission.id, value);
                          }}
                          // Prevent the row click from triggering when interacting with the select
                          onClick={(e) => e.stopPropagation()}
                        >
                          <SelectTrigger className="w-[130px]">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="uncontacted">Uncontacted</SelectItem>
                            <SelectItem value="contacted">Contacted</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell>{formatDateTime(submission.created_at)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </div>
      </div>

      <Dialog open={!!selectedSubmission} onOpenChange={() => setSelectedSubmission(null)}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Contact Form Submission Details</DialogTitle>
          </DialogHeader>
          {selectedSubmission && (
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-sm">Name</h3>
                <p className="mt-1">{selectedSubmission.name}</p>
              </div>
              <div>
                <h3 className="font-medium text-sm">Email</h3>
                <p className="mt-1">{selectedSubmission.email}</p>
              </div>
              <div>
                <h3 className="font-medium text-sm">Message</h3>
                <p className="mt-1 whitespace-pre-wrap">{selectedSubmission.message}</p>
              </div>
              <div>
                <h3 className="font-medium text-sm">Status</h3>
                <Select
                  value={selectedSubmission.status}
                  onValueChange={(value) => {
                    handleStatusChange(selectedSubmission.id, value);
                  }}
                >
                  <SelectTrigger className="w-[130px] mt-1">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="uncontacted">Uncontacted</SelectItem>
                    <SelectItem value="contacted">Contacted</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <h3 className="font-medium text-sm">Submitted At</h3>
                <p className="mt-1">{formatDateTime(selectedSubmission.created_at)}</p>
              </div>
              <div className="pt-4">
                <Button
                  variant="destructive"
                  onClick={() => handleDelete(selectedSubmission.id)}
                  className="w-full"
                >
                  <Trash2 className="mr-2 h-4 w-4" />
                  Delete Submission
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};