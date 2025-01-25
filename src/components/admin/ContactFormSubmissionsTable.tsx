import { Mail } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { StatusSelector } from "./contact-form/StatusSelector";
import { SubmissionDialog } from "./contact-form/SubmissionDialog";
import { useState } from "react";
import { Submission } from "./types/contact-form";

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
      return data as Submission[];
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
                      <TableCell className="max-w-md truncate">
                        {submission.message}
                      </TableCell>
                      <TableCell>
                        <StatusSelector
                          status={submission.status}
                          onStatusChange={(value) => {
                            handleStatusChange(submission.id, value);
                          }}
                          className="w-[130px]"
                        />
                      </TableCell>
                      <TableCell>
                        {new Date(submission.created_at).toLocaleString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                          hour: 'numeric',
                          minute: 'numeric',
                        })}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </div>
      </div>

      <SubmissionDialog
        submission={selectedSubmission}
        onClose={() => setSelectedSubmission(null)}
        onDelete={handleDelete}
        onUpdate={() => {
          queryClient.invalidateQueries({ queryKey: ['contact-form-submissions'] });
        }}
      />
    </>
  );
};