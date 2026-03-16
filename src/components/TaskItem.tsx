'use client';

import { useState } from 'react';
import { Task } from '@/lib/types';
import { formatDate, getDueDateStatus, getDueDateColor } from '@/lib/utils';
import { OwnerBadge } from './StatusBadge';

interface TaskItemProps {
  task: Task;
  onToggleComplete: () => void;
  onUpdateNotes: (notes: string) => void;
  onUpdateWaitingOn: (waitingOn: string) => void;
}

export default function TaskItem({ task, onToggleComplete, onUpdateNotes, onUpdateWaitingOn }: TaskItemProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [notes, setNotes] = useState(task.notes);
  const [waitingOn, setWaitingOn] = useState(task.waitingOn);

  const dueDateStatus = task.isComplete ? 'none' : getDueDateStatus(task.dueDate);
  const dueDateColorClass = getDueDateColor(dueDateStatus);

  const handleSaveNotes = () => {
    onUpdateNotes(notes);
  };

  const handleSaveWaitingOn = () => {
    onUpdateWaitingOn(waitingOn);
  };

  return (
    <div className={`border rounded-lg transition-all ${task.isComplete ? 'bg-gray-50 border-gray-200' : 'bg-white border-gray-200 hover:border-teal-200'}`}>
      <div className="p-4">
        <div className="flex items-start gap-3">
          {/* Checkbox */}
          <button
            onClick={onToggleComplete}
            className={`mt-0.5 flex-shrink-0 w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
              task.isComplete
                ? 'bg-emerald-500 border-emerald-500'
                : 'border-gray-300 hover:border-teal-500'
            }`}
          >
            {task.isComplete && (
              <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            )}
          </button>

          {/* Task Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2">
              <div className="flex-1">
                <h4 className={`font-medium ${task.isComplete ? 'text-gray-500 line-through' : 'text-gray-900'}`}>
                  {task.name}
                </h4>
                <p className={`text-sm mt-0.5 ${task.isComplete ? 'text-gray-400' : 'text-gray-600'}`}>
                  {task.description}
                </p>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <OwnerBadge owner={task.owner} />
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <svg className={`w-5 h-5 transition-transform ${isExpanded ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Due Date */}
            <div className="flex items-center gap-4 mt-2 text-sm">
              <span className={`px-2 py-0.5 rounded ${dueDateColorClass}`}>
                {task.isComplete ? (
                  <>Completed {formatDate(task.completedDate)}</>
                ) : (
                  <>Due: {formatDate(task.dueDate)}</>
                )}
              </span>
              {task.waitingOn && (
                <span className="text-amber-600">
                  Waiting on: {task.waitingOn}
                </span>
              )}
              {task.notes && !isExpanded && (
                <span className="text-gray-500 truncate max-w-[200px]">
                  Note: {task.notes}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Expanded Details */}
      {isExpanded && (
        <div className="px-4 pb-4 pt-2 border-t border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Notes */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Notes</label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                onBlur={handleSaveNotes}
                placeholder="Add notes..."
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none resize-none"
                rows={2}
              />
            </div>
            {/* Waiting On */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Waiting On</label>
              <input
                type="text"
                value={waitingOn}
                onChange={(e) => setWaitingOn(e.target.value)}
                onBlur={handleSaveWaitingOn}
                placeholder="e.g., Provider response, IT setup..."
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
              />
            </div>
          </div>
          <div className="mt-3 text-xs text-gray-500">
            Target: {task.targetDays} day{task.targetDays !== 1 ? 's' : ''} from start
          </div>
        </div>
      )}
    </div>
  );
}
