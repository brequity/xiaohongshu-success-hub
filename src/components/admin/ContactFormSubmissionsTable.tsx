import { Mail } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useQuery } from "@tanstack/react-query";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const formatDateTime = (dateString: string) => {
  return new Date(dateString).toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  });
};

export const ContactFormSubmissionsTable = () => {
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

  return (
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
                  <TableHead>Submitted At</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {submissions.map((submission) => (
                  <TableRow key={submission.id}>
                    <TableCell>{submission.name}</TableCell>
                    <TableCell>{submission.email}</TableCell>
                    <TableCell className="max-w-md truncate">{submission.message}</TableCell>
                    <TableCell>{formatDateTime(submission.created_at)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </div>
    </div>
  );
};