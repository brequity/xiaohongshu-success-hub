import { useState } from "react";
import { Users, Pencil } from "lucide-react";
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
import { UserDialog } from "./user-registrations/UserDialog";

const formatDateTime = (dateString: string) => {
  return new Date(dateString).toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  });
};

export const UserRegistrationsTable = () => {
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const { data: users, isLoading: isUsersLoading, refetch } = useQuery({
    queryKey: ['user-registrations'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data;
    }
  });

  const handleEditClick = (user: any) => {
    setSelectedUser(user);
    setDialogOpen(true);
  };

  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
      <div className="flex items-center gap-2 p-6 border-b">
        <Users className="h-5 w-5" />
        <h2 className="text-xl font-semibold">User Registrations</h2>
      </div>
      <div className="p-6">
        {isUsersLoading ? (
          <p>Loading users...</p>
        ) : !users?.length ? (
          <p>No registered users found.</p>
        ) : (
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Email</TableHead>
                  <TableHead>Created At</TableHead>
                  <TableHead>Last Updated</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>{user.email || '-'}</TableCell>
                    <TableCell>{formatDateTime(user.created_at)}</TableCell>
                    <TableCell>{formatDateTime(user.updated_at)}</TableCell>
                    <TableCell>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleEditClick(user)}
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
      <UserDialog
        user={selectedUser}
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        onUserUpdated={() => {
          refetch();
          setDialogOpen(false);
        }}
      />
    </div>
  );
};