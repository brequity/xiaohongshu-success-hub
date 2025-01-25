import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Shield, LogIn, AlertOctagon } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

const AdminLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setIsLoading(true);
      setError(null);
      
      console.log("Starting login process for:", values.email);
      
      // First attempt to sign in
      const { data: signInData, error: signInError } = await supabase.auth.signInWithPassword({
        email: values.email,
        password: values.password,
      });

      if (signInError) {
        console.error("Sign in error details:", {
          code: signInError.status,
          message: signInError.message,
          details: signInError
        });
        throw signInError;
      }

      if (!signInData.user) {
        console.error("No user data returned after sign in");
        throw new Error("Authentication failed - no user data");
      }

      console.log("Successfully signed in, checking admin role for user:", signInData.user.id);

      // Check if user has admin role
      const { data: roles, error: rolesError } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", signInData.user.id)
        .eq("role", "admin")
        .single();

      if (rolesError) {
        console.error("Error checking admin role:", rolesError);
        await supabase.auth.signOut();
        throw new Error("Error verifying admin privileges");
      }

      if (!roles) {
        console.error("No admin role found");
        await supabase.auth.signOut();
        throw new Error("Access denied - Admin privileges required");
      }

      console.log("Admin role verified, proceeding to dashboard");

      toast({
        title: "Success",
        description: "Welcome back, admin!",
      });

      navigate("/admin");
    } catch (error) {
      console.error("Login process failed:", error);
      
      let errorMessage = "Failed to login. Please check your credentials.";
      
      if (error instanceof Error) {
        errorMessage = error.message;
        if (errorMessage.includes("Invalid login credentials")) {
          errorMessage = "Invalid email or password. Please try again.";
        }
      }
      
      setError(errorMessage);
      
      toast({
        variant: "destructive",
        title: "Error",
        description: errorMessage,
      });
      
      // Only reset form for certain errors
      if (error instanceof Error && 
          (error.message.includes("Invalid login credentials") || 
           error.message.includes("Access denied"))) {
        form.reset();
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-lg">
        <div className="text-center">
          <Shield className="mx-auto h-12 w-12 text-primary" />
          <h2 className="mt-6 text-3xl font-bold text-gray-900">Admin Login</h2>
          <p className="mt-2 text-sm text-gray-600">
            Please sign in with your admin credentials
          </p>
        </div>

        {error && (
          <div className="flex items-center gap-2 p-4 text-sm text-red-800 bg-red-50 rounded-md">
            <AlertOctagon className="h-4 w-4" />
            <span>{error}</span>
          </div>
        )}

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="mt-8 space-y-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="admin@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="••••••" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-full"
              disabled={isLoading}
            >
              {isLoading ? (
                "Signing in..."
              ) : (
                <>
                  <LogIn className="mr-2 h-4 w-4" />
                  Sign in
                </>
              )}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default AdminLogin;