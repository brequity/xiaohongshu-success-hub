import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Shield, FileSpreadsheet } from "lucide-react";
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

const Admin = () => {
  const navigate = useNavigate();

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
                        <TableRow key={lead.id}>
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
    </div>
  );
};

export default Admin;