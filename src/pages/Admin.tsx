import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Shield, FileSpreadsheet, X } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useQuery } from "@tanstack/react-query";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Admin = () => {
  const navigate = useNavigate();
  const [selectedLead, setSelectedLead] = useState<any>(null);

  useEffect(() => {
    const checkAdminStatus = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        navigate("/admin-login");
        return;
      }

      const { data: roles } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", session.user.id)
        .eq("role", "admin")
        .single();

      if (!roles) {
        navigate("/admin-login");
      }
    };

    checkAdminStatus();
  }, [navigate]);

  const { data: leads, isLoading: isLeadsLoading } = useQuery({
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

  const formatDateTime = (dateString: string) => {
    return new Date(dateString).toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-4 mb-8">
          <Shield className="h-8 w-8 text-primary" />
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        </div>
        
        <div className="space-y-8">
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
                        <TableHead>Contact</TableHead>
                        <TableHead>Information</TableHead>
                        <TableHead>Created At</TableHead>
                        <TableHead>Last Updated</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {leads.map((lead) => (
                        <TableRow 
                          key={lead.id}
                          className="cursor-pointer hover:bg-muted/50"
                          onClick={() => setSelectedLead(lead)}
                        >
                          <TableCell>{lead.email}</TableCell>
                          <TableCell>{lead.company_name || '-'}</TableCell>
                          <TableCell>{lead.contact_number}</TableCell>
                          <TableCell className="max-w-md truncate">
                            {lead.information || '-'}
                          </TableCell>
                          <TableCell>
                            {formatDateTime(lead.created_at)}
                          </TableCell>
                          <TableCell>
                            {formatDateTime(lead.updated_at)}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Dialog open={!!selectedLead} onOpenChange={() => setSelectedLead(null)}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle className="flex justify-between items-center">
              <span>Lead Details</span>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSelectedLead(null)}
              >
                <X className="h-4 w-4" />
              </Button>
            </DialogTitle>
          </DialogHeader>
          {selectedLead && (
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-sm text-muted-foreground">Email</h3>
                <p className="mt-1">{selectedLead.email}</p>
              </div>
              <div>
                <h3 className="font-semibold text-sm text-muted-foreground">Company</h3>
                <p className="mt-1">{selectedLead.company_name || '-'}</p>
              </div>
              <div>
                <h3 className="font-semibold text-sm text-muted-foreground">Contact Number</h3>
                <p className="mt-1">{selectedLead.contact_number}</p>
              </div>
              <div>
                <h3 className="font-semibold text-sm text-muted-foreground">Additional Information</h3>
                <p className="mt-1 whitespace-pre-wrap">{selectedLead.information || '-'}</p>
              </div>
              <div>
                <h3 className="font-semibold text-sm text-muted-foreground">Created At</h3>
                <p className="mt-1">{formatDateTime(selectedLead.created_at)}</p>
              </div>
              <div>
                <h3 className="font-semibold text-sm text-muted-foreground">Last Updated</h3>
                <p className="mt-1">{formatDateTime(selectedLead.updated_at)}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Admin;