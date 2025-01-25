import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type StatusSelectorProps = {
  status: string;
  onStatusChange: (value: string) => void;
  className?: string;
};

export const StatusSelector = ({ status, onStatusChange, className }: StatusSelectorProps) => (
  <Select
    value={status}
    onValueChange={onStatusChange}
  >
    <SelectTrigger className={className}>
      <SelectValue />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="uncontacted">Uncontacted</SelectItem>
      <SelectItem value="contacted">Contacted</SelectItem>
    </SelectContent>
  </Select>
);