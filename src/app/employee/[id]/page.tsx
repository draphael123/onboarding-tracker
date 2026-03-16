'use client';

import { useParams, useRouter } from 'next/navigation';
import { useMemo, useState } from 'react';
import { useStore } from '@/lib/store';
import { calculateProgress, formatDate, getDaysSinceStart } from '@/lib/utils';
import ProgressBar from '@/components/ProgressBar';
import TaskItem from '@/components/TaskItem';
import { StatusBadge, RoleBadge, OwnerBadge } from '@/components/StatusBadge';
import Link from 'next/link';

export default function EmployeeDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { getEmployee, toggleTaskComplete, updateTask, deleteEmployee, isLoading } = useStore();
  const [ownerFilter, setOwnerFilter] = useState<string>('all');
  const [showCompleted, setShowCompleted] = useState(true);
  const [deleteConfirm, setDeleteConfirm] = useState(false);

  const employee = getEmployee(params.id as string);

  const phases = useMemo(() => {
    if (!employee) return [];
    const uniquePhases: string[] = [];
    employee.tasks.forEach(task => {
      if (!uniquePhases.includes(task.phase)) {
        uniquePhases.push(task.phase);
      }
    });
    return uniquePhases;
  }, [employee]);

  const filteredTasks = useMemo(() => {
    if (!employee) return [];
    return employee.tasks.filter(task => {
      if (ownerFilter !== 'all' && task.owner !== ownerFilter) return false;
      if (!showCompleted && task.isComplete) return false;
      return true;
    });
  }, [employee, ownerFilter, showCompleted]);

  const tasksByPhase = useMemo(() => {
    const grouped: Record<string, typeof filteredTasks> = {};
    phases.forEach(phase => {
      grouped[phase] = filteredTasks.filter(t => t.phase === phase);
    });
    return grouped;
  }, [filteredTasks, phases]);

  const stats = useMemo(() => {
    if (!employee) return null;
    const total = employee.tasks.length;
    const completed = employee.tasks.filter(t => t.isComplete).length;
    const hrTasks = employee.tasks.filter(t => t.owner === 'HR' || t.owner === 'HR/IT');
    const hrCompleted = hrTasks.filter(t => t.isComplete).length;
    const providerTasks = employee.tasks.filter(t => t.owner === 'Provider');
    const providerCompleted = providerTasks.filter(t => t.isComplete).length;
    const itTasks = employee.tasks.filter(t => t.owner === 'IT' || t.owner === 'HR/IT');
    const itCompleted = itTasks.filter(t => t.isComplete).length;
    const overdue = employee.tasks.filter(t => {
      if (t.isComplete || !t.dueDate) return false;
      return new Date(t.dueDate) < new Date();
    }).length;

    return { total, completed, hrTasks: hrTasks.length, hrCompleted, providerTasks: providerTasks.length, providerCompleted, itTasks: itTasks.length, itCompleted, overdue };
  }, [employee]);

  const handleDelete = () => {
    if (employee) {
      deleteEmployee(employee.id);
      router.push('/');
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-600"></div>
      </div>
    );
  }

  if (!employee) {
    return (
      <div className="text-center py-12">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">Employee not found</h2>
        <p className="text-gray-600 mb-4">The employee you're looking for doesn't exist.</p>
        <Link href="/" className="text-teal-600 hover:text-teal-700 font-medium">
          Back to Dashboard
        </Link>
      </div>
    );
  }

  const progress = calculateProgress(employee.tasks);
  const daysSinceStart = getDaysSinceStart(employee.startDate);
  const isPending = new Date(employee.startDate) > new Date();

  return (
    <div>
      {/* Back Link */}
      <Link href="/" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6">
        <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back to Dashboard
      </Link>

      {/* Header */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-2xl font-bold text-gray-900">{employee.name}</h1>
              <StatusBadge status={employee.status} />
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <RoleBadge role={employee.role} />
              <OwnerBadge owner={employee.owner || 'HR'} />
              <span className="text-gray-500">|</span>
              <span className="text-sm text-gray-600">
                Started: {formatDate(employee.startDate)}
              </span>
              <span className="text-sm text-gray-600">
                ({isPending ? `${Math.abs(daysSinceStart)} days until start` : `${daysSinceStart} days ago`})
              </span>
            </div>
          </div>

          <button
            onClick={() => setDeleteConfirm(true)}
            className="px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors text-sm font-medium"
          >
            Delete Employee
          </button>
        </div>

        {/* Progress */}
        <div className="mt-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">Overall Progress</span>
            <span className="text-sm text-gray-600">
              {stats?.completed} of {stats?.total} tasks complete
            </span>
          </div>
          <ProgressBar progress={progress} size="lg" />
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-6">
          <div className="bg-gray-50 rounded-lg p-3">
            <p className="text-xs text-gray-500">HR Tasks</p>
            <p className="text-lg font-semibold">{stats?.hrCompleted}/{stats?.hrTasks}</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-3">
            <p className="text-xs text-gray-500">Provider Tasks</p>
            <p className="text-lg font-semibold">{stats?.providerCompleted}/{stats?.providerTasks}</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-3">
            <p className="text-xs text-gray-500">IT Tasks</p>
            <p className="text-lg font-semibold">{stats?.itCompleted}/{stats?.itTasks}</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-3">
            <p className="text-xs text-gray-500">Overdue</p>
            <p className={`text-lg font-semibold ${stats?.overdue ? 'text-red-600' : 'text-gray-900'}`}>
              {stats?.overdue}
            </p>
          </div>
          <div className="bg-gray-50 rounded-lg p-3">
            <p className="text-xs text-gray-500">Remaining</p>
            <p className="text-lg font-semibold">{(stats?.total || 0) - (stats?.completed || 0)}</p>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl border border-gray-200 p-4 mb-6">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2">
            <label className="text-sm text-gray-600">Filter by owner:</label>
            <select
              value={ownerFilter}
              onChange={(e) => setOwnerFilter(e.target.value)}
              className="px-3 py-1.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
            >
              <option value="all">All</option>
              <option value="HR">HR</option>
              <option value="IT">IT</option>
              <option value="Provider">Provider</option>
              <option value="Training">Training</option>
              <option value="HR/IT">HR/IT</option>
            </select>
          </div>
          <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
            <input
              type="checkbox"
              checked={showCompleted}
              onChange={(e) => setShowCompleted(e.target.checked)}
              className="rounded border-gray-300 text-teal-600 focus:ring-teal-500"
            />
            Show completed tasks
          </label>
        </div>
      </div>

      {/* Tasks by Phase */}
      <div className="space-y-6">
        {phases.map(phase => {
          const phaseTasks = tasksByPhase[phase] || [];
          if (phaseTasks.length === 0) return null;

          const phaseCompleted = phaseTasks.filter(t => t.isComplete).length;
          const phaseProgress = Math.round((phaseCompleted / phaseTasks.length) * 100);

          return (
            <div key={phase} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <div className="p-4 border-b border-gray-100 bg-gray-50">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-gray-900">{phase}</h2>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-gray-600">
                      {phaseCompleted}/{phaseTasks.length} complete
                    </span>
                    <div className="w-24">
                      <ProgressBar progress={phaseProgress} showLabel={false} size="sm" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 space-y-3">
                {phaseTasks.map(task => (
                  <TaskItem
                    key={task.id}
                    task={task}
                    onToggleComplete={() => toggleTaskComplete(employee.id, task.id)}
                    onUpdateNotes={(notes) => updateTask(employee.id, task.id, { notes })}
                    onUpdateWaitingOn={(waitingOn) => updateTask(employee.id, task.id, { waitingOn })}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Delete Confirmation Modal */}
      {deleteConfirm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 max-w-md w-full mx-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Delete Employee?</h3>
            <p className="text-gray-600 mb-6">
              Are you sure you want to delete {employee.name}? This action cannot be undone.
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setDeleteConfirm(false)}
                className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
