import { EmployeeStatus, OwnerType } from '@/lib/types';
import { getStatusColor, getStatusLabel, getOwnerColor } from '@/lib/utils';

interface StatusBadgeProps {
  status: EmployeeStatus;
}

export function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(status)}`}>
      {getStatusLabel(status)}
    </span>
  );
}

interface OwnerBadgeProps {
  owner: OwnerType | string;
}

export function OwnerBadge({ owner }: OwnerBadgeProps) {
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${getOwnerColor(owner)}`}>
      {owner}
    </span>
  );
}

interface DueDateBadgeProps {
  status: 'overdue' | 'due_today' | 'upcoming' | 'none';
  date?: string;
}

export function DueDateBadge({ status, date }: DueDateBadgeProps) {
  if (status === 'none') return null;

  const config = {
    overdue: { label: 'Overdue', className: 'bg-red-100 text-red-700' },
    due_today: { label: 'Due Today', className: 'bg-amber-100 text-amber-700' },
    upcoming: { label: date || 'Upcoming', className: 'bg-emerald-100 text-emerald-700' },
  };

  const { label, className } = config[status];

  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${className}`}>
      {label}
    </span>
  );
}

interface RoleBadgeProps {
  role: string;
}

export function RoleBadge({ role }: RoleBadgeProps) {
  return (
    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-700">
      {role}
    </span>
  );
}
