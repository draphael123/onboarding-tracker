'use client';

import { OwnerType, EmployeeStatus, RoleType } from '@/lib/types';
import { roleTypes } from '@/lib/templates';

interface FilterBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  ownerFilter: OwnerType | 'all';
  onOwnerFilterChange: (owner: OwnerType | 'all') => void;
  statusFilter: EmployeeStatus | 'all';
  onStatusFilterChange: (status: EmployeeStatus | 'all') => void;
  roleFilter: RoleType | 'all';
  onRoleFilterChange: (role: RoleType | 'all') => void;
}

export default function FilterBar({
  searchQuery,
  onSearchChange,
  ownerFilter,
  onOwnerFilterChange,
  statusFilter,
  onStatusFilterChange,
  roleFilter,
  onRoleFilterChange,
}: FilterBarProps) {
  const owners: (OwnerType | 'all')[] = ['all', 'HR', 'IT', 'Provider', 'Training'];
  const statuses: (EmployeeStatus | 'all')[] = ['all', 'not_started', 'in_progress', 'almost_done', 'complete'];
  const roles: (RoleType | 'all')[] = ['all', ...roleTypes];

  const statusLabels: Record<EmployeeStatus | 'all', string> = {
    all: 'All Statuses',
    not_started: 'Not Started',
    in_progress: 'In Progress',
    almost_done: 'Almost Done',
    complete: 'Complete',
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4 mb-6">
      <div className="flex flex-wrap gap-4">
        {/* Search */}
        <div className="flex-1 min-w-[200px]">
          <input
            type="text"
            placeholder="Search employees..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-colors"
          />
        </div>

        {/* Owner Filter */}
        <select
          value={ownerFilter}
          onChange={(e) => onOwnerFilterChange(e.target.value as OwnerType | 'all')}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-colors bg-white"
        >
          {owners.map(owner => (
            <option key={owner} value={owner}>
              {owner === 'all' ? 'All Owners' : owner}
            </option>
          ))}
        </select>

        {/* Status Filter */}
        <select
          value={statusFilter}
          onChange={(e) => onStatusFilterChange(e.target.value as EmployeeStatus | 'all')}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-colors bg-white"
        >
          {statuses.map(status => (
            <option key={status} value={status}>
              {statusLabels[status]}
            </option>
          ))}
        </select>

        {/* Role Filter */}
        <select
          value={roleFilter}
          onChange={(e) => onRoleFilterChange(e.target.value as RoleType | 'all')}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-colors bg-white"
        >
          {roles.map(role => (
            <option key={role} value={role}>
              {role === 'all' ? 'All Roles' : role}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
