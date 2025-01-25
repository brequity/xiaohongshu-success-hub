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
import { Badge } from "@/components/ui/badge";
import { UserDialog } from "./user-registrations/UserDialog";
import { CreateUserDialog } from "./user-registrations/CreateUserDialog";

interface UserRole {
  role: 'admin' | 'user';
}

interface User {
  id: string;
  email: string | null;
  created_at: string;
  updated_at: string;
  user_roles?: UserRole[];
}

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
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const { data: users, isLoading: isUsersLoading, refetch } = useQuery({
    queryKey: ['user-registrations'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('profiles')
        .select(`
          *,
          user_roles (
            role
          )
        `)
        .order('created_at', { ascending: false });
      
      if (error) {
        console.error('Error fetching users:', error);
        throw error;
      }
      return data as User[];
    }
  });

  const handleEditClick = (user: User) => {
    setSelectedUser(user);
    setDialogOpen(true);
  };

  const getRoleColor = (role: string | undefined) => {
    switch (role) {
      case 'admin':
        return 'destructive';
      case 'user':
        return 'secondary';
      default:
        return 'default';
    }
  };

  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
      <div className="flex items-center justify-between p-6 border-b">
        <div className="flex items-center gap-2">
          <Users className="h-5 w-5" />
          <h2 className="text-xl font-semibold">User Registrations</h2>
        </div>
        <CreateUserDialog onUserCreated={refetch} />
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
                  <TableHead>Role</TableHead>
                  <TableHead>Created At</TableHead>
                  <TableHead>Last Updated</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>{user.email || '-'}</TableCell>
                    <TableCell>
                      <Badge variant={getRoleColor(user.user_roles?.[0]?.role)}>
                        {user.user_roles?.[0]?.role || 'user'}
                      </Badge>
                    </TableCell>
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