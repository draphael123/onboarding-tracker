import { Employee, Task, TaskTemplate, EmployeeStatus } from './types';

export function generateId(): string {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

export function formatDate(dateString: string | null): string {
  if (!dateString) return '-';
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

export function calculateDueDate(startDate: string, targetDays: number): string {
  const start = new Date(startDate);
  start.setDate(start.getDate() + targetDays);
  return start.toISOString().split('T')[0];
}

export function createTasksFromTemplate(templates: TaskTemplate[], startDate: string): Task[] {
  return templates.map((template, index) => ({
    ...template,
    id: generateId(),
    dueDate: template.targetDays > 0 ? calculateDueDate(startDate, template.targetDays) : startDate,
    completedDate: null,
    isComplete: false,
    notes: '',
    waitingOn: '',
  }));
}

export function calculateProgress(tasks: Task[]): number {
  if (tasks.length === 0) return 0;
  const completed = tasks.filter(t => t.isComplete).length;
  return Math.round((completed / tasks.length) * 100);
}

export function getEmployeeStatus(tasks: Task[]): EmployeeStatus {
  const progress = calculateProgress(tasks);
  if (progress === 0) return 'not_started';
  if (progress === 100) return 'complete';
  if (progress >= 75) return 'almost_done';
  return 'in_progress';
}

export function getDueDateStatus(dueDate: string | null): 'overdue' | 'due_today' | 'upcoming' | 'none' {
  if (!dueDate) return 'none';

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const due = new Date(dueDate);
  due.setHours(0, 0, 0, 0);

  const diffTime = due.getTime() - today.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays < 0) return 'overdue';
  if (diffDays === 0) return 'due_today';
  return 'upcoming';
}

export function getDaysSinceStart(startDate: string): number {
  const start = new Date(startDate);
  const today = new Date();
  const diffTime = today.getTime() - start.getTime();
  return Math.floor(diffTime / (1000 * 60 * 60 * 24));
}

export function getStatusColor(status: EmployeeStatus): string {
  switch (status) {
    case 'not_started': return 'bg-gray-100 text-gray-700';
    case 'in_progress': return 'bg-blue-100 text-blue-700';
    case 'almost_done': return 'bg-amber-100 text-amber-700';
    case 'complete': return 'bg-emerald-100 text-emerald-700';
    default: return 'bg-gray-100 text-gray-700';
  }
}

export function getStatusLabel(status: EmployeeStatus): string {
  switch (status) {
    case 'not_started': return 'Not Started';
    case 'in_progress': return 'In Progress';
    case 'almost_done': return 'Almost Done';
    case 'complete': return 'Complete';
    default: return status;
  }
}

export function getOwnerColor(owner: string): string {
  switch (owner) {
    case 'HR': return 'bg-purple-100 text-purple-700';
    case 'IT': return 'bg-blue-100 text-blue-700';
    case 'Provider': return 'bg-teal-100 text-teal-700';
    case 'Training': return 'bg-orange-100 text-orange-700';
    case 'HR/IT': return 'bg-indigo-100 text-indigo-700';
    default: return 'bg-gray-100 text-gray-700';
  }
}

export function getDueDateColor(status: 'overdue' | 'due_today' | 'upcoming' | 'none'): string {
  switch (status) {
    case 'overdue': return 'text-red-600 bg-red-50';
    case 'due_today': return 'text-amber-600 bg-amber-50';
    case 'upcoming': return 'text-emerald-600 bg-emerald-50';
    default: return 'text-gray-500';
  }
}
