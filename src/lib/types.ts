export type RoleType =
  | 'Physician'
  | 'Nurse Practitioner'
  | 'Nurse'
  | 'Medical Assistant'
  | 'Pharmacy Liaison'
  | 'Customer Support'
  | 'Executive Assistant'
  | 'Licensing Specialist';

export type OwnerType = 'HR' | 'IT' | 'Provider' | 'Training' | 'HR/IT';

export type TaskStatus = 'pending' | 'in_progress' | 'completed' | 'blocked';

export type EmployeeStatus = 'not_started' | 'in_progress' | 'almost_done' | 'complete';

export interface TaskTemplate {
  phase: string;
  name: string;
  description: string;
  owner: OwnerType;
  targetDays: number;
}

export interface Task extends TaskTemplate {
  id: string;
  dueDate: string | null;
  completedDate: string | null;
  isComplete: boolean;
  notes: string;
  waitingOn: string;
}

export interface Employee {
  id: string;
  name: string;
  role: RoleType;
  startDate: string;
  status: EmployeeStatus;
  owner: string;
  tasks: Task[];
  notes: string;
  createdAt: string;
}

export interface RoleTemplate {
  role: RoleType;
  tasks: TaskTemplate[];
}
