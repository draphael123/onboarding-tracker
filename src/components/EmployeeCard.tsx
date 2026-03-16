'use client';

import Link from 'next/link';
import { Employee } from '@/lib/types';
import { calculateProgress, formatDate, getDaysSinceStart } from '@/lib/utils';
import ProgressBar from './ProgressBar';
import { StatusBadge, RoleBadge, OwnerBadge } from './StatusBadge';

interface EmployeeCardProps {
  employee: Employee;
}

export default function EmployeeCard({ employee }: EmployeeCardProps) {
  const progress = calculateProgress(employee.tasks);
  const completedTasks = employee.tasks.filter(t => t.isComplete).length;
  const totalTasks = employee.tasks.length;
  const daysSinceStart = getDaysSinceStart(employee.startDate);
  const isPending = new Date(employee.startDate) > new Date();

  return (
    <Link href={`/employee/${employee.id}`}>
      <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg hover:border-teal-200 transition-all cursor-pointer">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{employee.name}</h3>
            <div className="flex items-center gap-2 mt-1">
              <RoleBadge role={employee.role} />
              <OwnerBadge owner={employee.owner || 'HR'} />
            </div>
          </div>
          <StatusBadge status={employee.status} />
        </div>

        <div className="mb-4">
          <ProgressBar progress={progress} size="md" />
        </div>

        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-gray-500">Start Date</span>
            <p className="font-medium text-gray-900">{formatDate(employee.startDate)}</p>
          </div>
          <div>
            <span className="text-gray-500">Days {isPending ? 'Until Start' : 'Since Start'}</span>
            <p className="font-medium text-gray-900">
              {isPending ? Math.abs(daysSinceStart) : daysSinceStart}
            </p>
          </div>
          <div>
            <span className="text-gray-500">Tasks Completed</span>
            <p className="font-medium text-gray-900">{completedTasks} / {totalTasks}</p>
          </div>
          <div>
            <span className="text-gray-500">Remaining</span>
            <p className="font-medium text-gray-900">{totalTasks - completedTasks} tasks</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
