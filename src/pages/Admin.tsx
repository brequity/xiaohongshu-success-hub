import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Shield } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Navigation } from "@/components/Navigation";

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

  return (
    <div>
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-4 mb-8">
          <Shield className="h-8 w-8 text-primary" />
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Add admin dashboard content here */}
          <div className="p-6 bg-white rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Welcome to Admin Dashboard</h2>
            <p className="text-gray-600">
              This is a protected admin area. More features will be added soon.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;