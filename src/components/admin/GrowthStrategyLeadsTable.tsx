import { useState } from "react";
import { FileSpreadsheet, Pencil } from "lucide-react";
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
import { Button } from "@/components/ui/button";
import { LeadDialog } from "./growth-strategy/LeadDialog";
import { StatusSelector } from "./contact-form/StatusSelector";

const formatDateTime = (dateString: string) => {
  return new Date(dateString).toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  });
};

export const GrowthStrategyLeadsTable = () => {
  const [selectedLead, setSelectedLead] = useState<any>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const { data: leads, isLoading: isLeadsLoading, refetch } = useQuery({
    queryKey: ['growth-strategy-leads'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('growth_strategy_leads')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data;
    }
  });

  const handleEditClick = (lead: any) => {
    setSelectedLead(lead);
    setDialogOpen(true);
  };

  const handleStatusChange = async (leadId: string, newStatus: string) => {
    try {
      const { error } = await supabase
        .from('growth_strategy_leads')
        .update({ status: newStatus })
        .eq('id', leadId);

      if (error) throw error;
      refetch();
    } catch (error) {
      console.error('Error updating lead status:', error);
    }
  };

  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
      <div className="flex items-center gap-2 p-6 border-b">
        <FileSpreadsheet className="h-5 w-5" />
        <h2 className="text-xl font-semibold">Growth Strategy Leads</h2>
      </div>
      <div className="p-6">
        {isLeadsLoading ? (
          <p>Loading leads...</p>
        ) : !leads?.length ? (
          <p>No leads found.</p>
        ) : (
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Email</TableHead>
                  <TableHead>Company</TableHead>
                  <TableHead>Contact Number</TableHead>
                  <TableHead>Created At</TableHead>
                  <TableHead>Information</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {leads.map((lead) => (
                  <TableRow key={lead.id}>
                    <TableCell>{lead.email}</TableCell>
                    <TableCell>{lead.company_name || '-'}</TableCell>
                    <TableCell>{lead.contact_number}</TableCell>
                    <TableCell>{formatDateTime(lead.created_at)}</TableCell>
                    <TableCell className="max-w-xs truncate">
                      {lead.information || '-'}
                    </TableCell>
                    <TableCell>
                      <StatusSelector
                        status={lead.status}
                        onStatusChange={(value) => handleStatusChange(lead.id, value)}
                        className="w-32"
                      />
                    </TableCell>
                    <TableCell>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleEditClick(lead)}
                      >
                        <Pencil className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </div>
      <LeadDialog
        lead={selectedLead}
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        onLeadUpdated={() => {
          refetch();
          setDialogOpen(false);
        }}
      />
    </div>
  );
};