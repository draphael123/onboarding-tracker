'use client';

import { useState, useMemo } from 'react';
import { useStore } from '@/lib/store';
import { OwnerType, EmployeeStatus, RoleType } from '@/lib/types';
import { calculateProgress } from '@/lib/utils';
import EmployeeCard from '@/components/EmployeeCard';
import FilterBar from '@/components/FilterBar';
import Link from 'next/link';

export default function Dashboard() {
  const { employees, isLoading } = useStore();
  const [searchQuery, setSearchQuery] = useState('');
  const [ownerFilter, setOwnerFilter] = useState<OwnerType | 'all'>('all');
  const [statusFilter, setStatusFilter] = useState<EmployeeStatus | 'all'>('all');
  const [roleFilter, setRoleFilter] = useState<RoleType | 'all'>('all');

  const filteredEmployees = useMemo(() => {
    return employees.filter(emp => {
      // Search filter
      if (searchQuery && !emp.name.toLowerCase().includes(searchQuery.toLowerCase())) {
        return false;
      }
      // Owner filter
      if (ownerFilter !== 'all' && emp.owner !== ownerFilter) {
        return false;
      }
      // Status filter
      if (statusFilter !== 'all' && emp.status !== statusFilter) {
        return false;
      }
      // Role filter
      if (roleFilter !== 'all' && emp.role !== roleFilter) {
        return false;
      }
      return true;
    });
  }, [employees, searchQuery, ownerFilter, statusFilter, roleFilter]);

  // Stats
  const stats = useMemo(() => {
    const total = employees.length;
    const complete = employees.filter(e => e.status === 'complete').length;
    const inProgress = employees.filter(e => e.status === 'in_progress' || e.status === 'almost_done').length;
    const notStarted = employees.filter(e => e.status === 'not_started').length;
    const avgProgress = total > 0
      ? Math.round(employees.reduce((sum, e) => sum + calculateProgress(e.tasks), 0) / total)
      : 0;

    return { total, complete, inProgress, notStarted, avgProgress };
  }, [employees]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-600"></div>
      </div>
    );
  }

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Onboarding Dashboard</h1>
        <p className="text-gray-600 mt-1">Track and manage employee onboarding progress</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <p className="text-sm text-gray-500">Total Employees</p>
          <p className="text-2xl font-bold text-gray-900">{stats.total}</p>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <p className="text-sm text-gray-500">In Progress</p>
          <p className="text-2xl font-bold text-blue-600">{stats.inProgress}</p>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <p className="text-sm text-gray-500">Not Started</p>
          <p className="text-2xl font-bold text-gray-600">{stats.notStarted}</p>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <p className="text-sm text-gray-500">Completed</p>
          <p className="text-2xl font-bold text-emerald-600">{stats.complete}</p>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <p className="text-sm text-gray-500">Avg Progress</p>
          <p className="text-2xl font-bold text-teal-600">{stats.avgProgress}%</p>
        </div>
      </div>

      {/* Filters */}
      <FilterBar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        ownerFilter={ownerFilter}
        onOwnerFilterChange={setOwnerFilter}
        statusFilter={statusFilter}
        onStatusFilterChange={setStatusFilter}
        roleFilter={roleFilter}
        onRoleFilterChange={setRoleFilter}
      />

      {/* Employee Grid */}
      {filteredEmployees.length === 0 ? (
        <div className="bg-white rounded-xl border border-gray-200 p-12 text-center">
          {employees.length === 0 ? (
            <>
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No employees yet</h3>
              <p className="text-gray-600 mb-6">Get started by adding your first employee to onboard.</p>
              <Link
                href="/add"
                className="inline-flex items-center px-4 py-2 bg-teal-600 text-white rounded-lg font-medium hover:bg-teal-700 transition-colors"
              >
                + Add Employee
              </Link>
            </>
          ) : (
            <>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No matching employees</h3>
              <p className="text-gray-600">Try adjusting your search or filters.</p>
            </>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEmployees.map(employee => (
            <EmployeeCard key={employee.id} employee={employee} />
          ))}
        </div>
      )}
    </div>
  );
}
