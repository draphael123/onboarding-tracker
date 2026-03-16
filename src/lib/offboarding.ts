export interface OffboardingTask {
  category: string;
  task: string;
  description: string;
  owner: string;
  priority: 'High' | 'Medium' | 'Low';
}

export const offboardingTasks: OffboardingTask[] = [
  // System Access
  { category: 'System Access', task: 'Revoke Slack Access', description: 'Remove from all channels and deactivate', owner: 'IT/HR', priority: 'High' },
  { category: 'System Access', task: 'Revoke Intercom Access', description: 'Deactivate and reassign conversations', owner: 'IT/HR', priority: 'High' },
  { category: 'System Access', task: 'Revoke Akute/EHR Access', description: 'Remove patient chart access', owner: 'IT/HR', priority: 'High' },
  { category: 'System Access', task: 'Revoke Doxy Access', description: 'Remove from video visit platform', owner: 'IT/HR', priority: 'High' },
  { category: 'System Access', task: 'Revoke Gmail Access', description: 'Disable or forward email account', owner: 'IT', priority: 'High' },
  { category: 'System Access', task: 'Revoke Gusto Access', description: 'Deactivate payroll access', owner: 'HR', priority: 'High' },
  { category: 'System Access', task: 'Revoke Abyde Access', description: 'Remove HIPAA compliance access', owner: 'HR', priority: 'Medium' },
  // Documentation
  { category: 'Documentation', task: 'Final Timesheet Review', description: 'Verify all hours submitted in Gusto', owner: 'HR', priority: 'High' },
  { category: 'Documentation', task: 'Final Payroll Processing', description: 'Process final payment incl. owed PTO', owner: 'HR/Finance', priority: 'High' },
  { category: 'Documentation', task: 'Update Employee Folder', description: 'Move to offboarded folder, archive docs', owner: 'HR', priority: 'Medium' },
  // Pharmacy/Insurance
  { category: 'Pharmacy/Insurance', task: 'Remove from Malpractice', description: 'Contact NFP to remove from policy', owner: 'HR', priority: 'High' },
  { category: 'Pharmacy/Insurance', task: 'Notify Pharmacies', description: 'Notify Curexa, TPH, Empower, Belmar', owner: 'HR', priority: 'Medium' },
  { category: 'Pharmacy/Insurance', task: 'Remove from OnceHub', description: 'Deactivate booking links', owner: 'HR', priority: 'Medium' },
  // Notifications
  { category: 'Notifications', task: 'Notify Team Lead', description: 'Inform direct supervisor/team lead', owner: 'HR', priority: 'High' },
  { category: 'Notifications', task: 'Update Master Tracker', description: 'Move to archived section', owner: 'HR', priority: 'Low' },
];

export const offboardingCategories = ['System Access', 'Documentation', 'Pharmacy/Insurance', 'Notifications'];
