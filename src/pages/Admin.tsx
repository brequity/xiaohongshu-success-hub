import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Shield } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { UserRegistrationsTable } from "@/components/admin/UserRegistrationsTable";
import { GrowthStrategyLeadsTable } from "@/components/admin/GrowthStrategyLeadsTable";
import { ContactFormSubmissionsTable } from "@/components/admin/ContactFormSubmissionsTable";
import { DashboardStats } from "@/components/admin/DashboardStats";

const Admin = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkAdminAccess = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        navigate('/admin-login');
        return;
      }

      const { data: roles, error } = await supabase
        .from('user_roles')
        .select('role')
        .eq('user_id', user.id)
        .single();

      if (error || roles?.role !== 'admin') {
        navigate('/');
      }
    };

    checkAdminAccess();
  }, [navigate]);

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex items-center gap-2 mb-8">
        <Shield className="h-6 w-6" />
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      </div>
      
      <div className="space-y-8">
        <DashboardStats />
        <ContactFormSubmissionsTable />
        <UserRegistrationsTable />
        <GrowthStrategyLeadsTable />
      </div>
    </div>
  );
};

export default Admin;