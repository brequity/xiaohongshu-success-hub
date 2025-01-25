import { useState } from "react";
import { UserPlus } from "lucide-react";
import { useForm } from "react-hook-form";
import { supabase } from "@/integrations/supabase/client";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface CreateUserForm {
  email: string;
  password: string;
}

interface CreateUserDialogProps {
  onUserCreated: () => void;
}

export const CreateUserDialog = ({ onUserCreated }: CreateUserDialogProps) => {
  const [open, setOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const form = useForm<CreateUserForm>({
    defaultValues: {
      email: "",
      password: ""
    }
  });

  const checkExistingUser = async (email: string) => {
    const { data } = await supabase.auth.admin.listUsers({
      page: 1,
      perPage: 1,
      search: email.trim().toLowerCase()
    });
    return data?.users?.some(user => user.email === email.trim().toLowerCase());
  };

  const handleCreateUser = async (email: string, password: string) => {
    const { data: functionData, error: functionError } = await supabase.functions.invoke('create-admin-user', {
      body: { email, password }
    });

    if (functionError) {
      let errorMessage = functionError.message;
      try {
        const parsedError = JSON.parse(functionError.message);
        errorMessage = parsedError.error || errorMessage;
      } catch (e) {
        console.error('Error parsing error message:', e);
      }
      throw new Error(errorMessage);
    }

    return functionData;
  };

  const handleSuccess = () => {
    toast({
      title: "Success",
      description: "User created successfully",
    });
    form.reset();
    setOpen(false);
    onUserCreated();
  };

  const onSubmit = async (data: CreateUserForm) => {
    try {
      setIsSubmitting(true);
      setError(null);
      
      const userExists = await checkExistingUser(data.email);
      if (userExists) {
        setError("A user with this email address already exists. Please use a different email.");
        return;
      }

      const functionData = await handleCreateUser(
        data.email.trim().toLowerCase(),
        data.password
      );

      if (functionData?.warning) {
        toast({
          title: "Warning",
          description: functionData.warning,
          variant: "destructive",
        });
      } else {
        handleSuccess();
      }
    } catch (error: any) {
      setError(error.message);
      toast({
        title: "Error",
        description: error.message || "Failed to create user",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <UserPlus className="h-4 w-4 mr-2" />
          Create User
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create New User</DialogTitle>
        </DialogHeader>
        {error && (
          <Alert variant="destructive">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              rules={{
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address"
                }
              }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input 
                      type="email" 
                      placeholder="user@example.com" 
                      {...field} 
                      onChange={(e) => field.onChange(e.target.value.toLowerCase())}
                      disabled={isSubmitting}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              rules={{
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters"
                }
              }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input 
                      type="password" 
                      placeholder="••••••••" 
                      {...field} 
                      disabled={isSubmitting}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Creating..." : "Create User"}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};