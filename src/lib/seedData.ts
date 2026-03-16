import { Employee, Task } from './types';

// Pre-populated data from Fountain Onboarding Tracker spreadsheet
export const seedEmployees: Employee[] = [
  {
    id: 'stephen-mooney-001',
    name: 'Stephen Mooney',
    role: 'Physician',
    startDate: '2026-02-26',
    status: 'almost_done',
    owner: 'Daniel Raphael',
    notes: 'F54',
    createdAt: '2026-02-26T00:00:00.000Z',
    tasks: [
      // Pre-Onboarding
      { id: 'sm-1', phase: 'Pre-Onboarding', name: 'Send 1099 Contract', description: 'Prepare and send contractor agreement via DocuSign', owner: 'HR', targetDays: 1, dueDate: '2026-02-27', completedDate: '2026-02-25', isComplete: true, notes: '', waitingOn: '' },
      { id: 'sm-2', phase: 'Pre-Onboarding', name: 'Background Check - Checkr', description: 'Order background check', owner: 'HR', targetDays: 2, dueDate: '2026-02-28', completedDate: '2026-02-26', isComplete: true, notes: '', waitingOn: '' },
      { id: 'sm-3', phase: 'Pre-Onboarding', name: 'NPDB Self-Query', description: 'Request provider to submit NPDB self-query results', owner: 'HR', targetDays: 1, dueDate: '2026-02-27', completedDate: '2026-03-02', isComplete: true, notes: '', waitingOn: '' },
      { id: 'sm-4', phase: 'Pre-Onboarding', name: 'Contract Signed', description: 'Confirm both parties have signed 1099 agreement', owner: 'HR', targetDays: 0, dueDate: '2026-02-26', completedDate: '2026-02-27', isComplete: true, notes: '', waitingOn: '' },
      { id: 'sm-5', phase: 'Pre-Onboarding', name: 'Background Cleared', description: 'Verify Checkr results show cleared status', owner: 'HR', targetDays: 0, dueDate: '2026-02-26', completedDate: '2026-02-26', isComplete: true, notes: '', waitingOn: '' },
      { id: 'sm-6', phase: 'Pre-Onboarding', name: 'Schedule Onboarding Call', description: 'Send Calendly link for onboarding video call', owner: 'HR', targetDays: 1, dueDate: '2026-02-27', completedDate: '2026-03-02', isComplete: true, notes: '', waitingOn: '' },
      // System Access
      { id: 'sm-7', phase: 'System Access', name: 'Request IT Access', description: 'Message Rob for Gmail, Akute, Intercom, Slack access', owner: 'HR', targetDays: 1, dueDate: '2026-02-27', completedDate: '2026-03-02', isComplete: true, notes: '', waitingOn: '' },
      { id: 'sm-8', phase: 'System Access', name: 'Verify Work Computer', description: 'Confirm provider using work computer during call', owner: 'HR/IT', targetDays: 0, dueDate: '2026-02-26', completedDate: '2026-03-02', isComplete: true, notes: '', waitingOn: '' },
      { id: 'sm-9', phase: 'System Access', name: 'Slack Login', description: 'Walk through Slack login and setup', owner: 'HR', targetDays: 0, dueDate: '2026-02-26', completedDate: '2026-03-03', isComplete: true, notes: '', waitingOn: '' },
      { id: 'sm-10', phase: 'System Access', name: 'Intercom Login', description: 'Walk through Intercom login and setup', owner: 'HR', targetDays: 0, dueDate: '2026-02-26', completedDate: '2026-03-03', isComplete: true, notes: '', waitingOn: '' },
      { id: 'sm-11', phase: 'System Access', name: 'Akute Login', description: 'Walk through Akute login and setup', owner: 'HR', targetDays: 0, dueDate: '2026-02-26', completedDate: '2026-03-03', isComplete: true, notes: '', waitingOn: '' },
      { id: 'sm-12', phase: 'System Access', name: 'Email Forwarding & 2FA', description: 'Set up email forwarding and 2FA during call', owner: 'HR', targetDays: 0, dueDate: '2026-02-26', completedDate: '2026-03-03', isComplete: true, notes: '', waitingOn: '' },
      { id: 'sm-13', phase: 'System Access', name: 'HIPAA Signature', description: 'Complete HIPAA signature', owner: 'Provider', targetDays: 0, dueDate: '2026-02-26', completedDate: '2026-03-03', isComplete: true, notes: '', waitingOn: '' },
      // Platform Setup
      { id: 'sm-14', phase: 'Platform Setup', name: 'Doxy.me Invite', description: 'Send and confirm Doxy invite with first/last name', owner: 'HR', targetDays: 1, dueDate: '2026-02-27', completedDate: '2026-03-03', isComplete: true, notes: '', waitingOn: '' },
      { id: 'sm-15', phase: 'Platform Setup', name: 'Doxy Headshot', description: 'Request professional headshot for waiting room', owner: 'Provider', targetDays: 1, dueDate: '2026-02-27', completedDate: '2026-03-03', isComplete: true, notes: '', waitingOn: '' },
      { id: 'sm-16', phase: 'Platform Setup', name: 'OnceHub Setup', description: 'Create OnceHub account for provider', owner: 'HR', targetDays: 1, dueDate: '2026-02-27', completedDate: '2026-03-03', isComplete: true, notes: '', waitingOn: '' },
      // Security
      { id: 'sm-17', phase: 'Security', name: 'ThreatDown Install', description: 'Execute ThreatDown installation (post-call)', owner: 'IT', targetDays: 1, dueDate: '2026-02-27', completedDate: null, isComplete: false, notes: '', waitingOn: '' },
      { id: 'sm-18', phase: 'Security', name: 'Akute Identity Proofing', description: 'Complete identity proofing via Slack (post-call)', owner: 'IT', targetDays: 2, dueDate: '2026-02-28', completedDate: null, isComplete: false, notes: '', waitingOn: '' },
      // Compliance
      { id: 'sm-19', phase: 'Compliance', name: 'Abyde Access', description: 'Add user to Abyde HIPAA compliance platform', owner: 'HR', targetDays: 1, dueDate: '2026-02-27', completedDate: '2026-03-03', isComplete: true, notes: '', waitingOn: '' },
      { id: 'sm-20', phase: 'Compliance', name: 'Abyde Training', description: 'Provider completes Abyde training via email', owner: 'Provider', targetDays: 3, dueDate: '2026-03-01', completedDate: null, isComplete: false, notes: '', waitingOn: '' },
      { id: 'sm-21', phase: 'Compliance', name: 'Heidi Access', description: 'Email Mary Ellen for Heidi transcription access', owner: 'HR', targetDays: 1, dueDate: '2026-02-27', completedDate: '2026-03-09', isComplete: true, notes: '', waitingOn: '' },
      { id: 'sm-22', phase: 'Compliance', name: 'Malpractice Insurance', description: 'Add provider to malpractice insurance policy', owner: 'HR', targetDays: 2, dueDate: '2026-02-28', completedDate: '2026-03-09', isComplete: true, notes: '', waitingOn: '' },
      // Payroll
      { id: 'sm-23', phase: 'Payroll', name: 'Explain Pay Schedule', description: 'Review bi-monthly payroll (10th-24th, 25th-9th)', owner: 'HR', targetDays: 0, dueDate: '2026-02-26', completedDate: '2026-03-03', isComplete: true, notes: '', waitingOn: '' },
      { id: 'sm-24', phase: 'Payroll', name: 'Send Policy Docs', description: 'Send contractor scheduling & timekeeping policy', owner: 'HR', targetDays: 0, dueDate: '2026-02-26', completedDate: '2026-03-09', isComplete: true, notes: '', waitingOn: '' },
      { id: 'sm-25', phase: 'Payroll', name: 'Direct Deposit Setup', description: 'Provider completes direct deposit form', owner: 'Provider', targetDays: 1, dueDate: '2026-02-27', completedDate: null, isComplete: false, notes: '', waitingOn: '' },
      { id: 'sm-26', phase: 'Payroll', name: 'Complete Onboarding Form', description: 'Provider fills out Google onboarding form', owner: 'Provider', targetDays: 1, dueDate: '2026-02-27', completedDate: '2026-03-09', isComplete: true, notes: '', waitingOn: '' },
      // Pharmacy Access
      { id: 'sm-27', phase: 'Pharmacy Access', name: 'Curexa Setup', description: 'Send license list to jewilson@curexa.com alongside docusign form', owner: 'HR', targetDays: 1, dueDate: '2026-02-27', completedDate: null, isComplete: false, notes: '', waitingOn: '' },
      { id: 'sm-28', phase: 'Pharmacy Access', name: 'TPH Setup', description: 'Send provider info to support@thepharmacyhub.com', owner: 'HR', targetDays: 0, dueDate: '2026-02-26', completedDate: '2026-03-09', isComplete: true, notes: '', waitingOn: '' },
      { id: 'sm-29', phase: 'Pharmacy Access', name: 'Empower Setup', description: 'Send forms/licenses to dlaubert@empowerpharmacy.com', owner: 'HR', targetDays: 0, dueDate: '2026-02-26', completedDate: '2026-03-09', isComplete: true, notes: '', waitingOn: '' },
      { id: 'sm-30', phase: 'Pharmacy Access', name: 'Belmar Setup', description: 'Send licenses to jonathan.banks@belmarpharma.com', owner: 'HR', targetDays: 0, dueDate: '2026-02-26', completedDate: null, isComplete: false, notes: '', waitingOn: '' },
      { id: 'sm-31', phase: 'Pharmacy Access', name: 'Curexa Samples', description: 'Request demo T-cream and syringes via Slack', owner: 'HR', targetDays: 1, dueDate: '2026-02-27', completedDate: '2026-03-09', isComplete: true, notes: '', waitingOn: '' },
      // Training
      { id: 'sm-32', phase: 'Training', name: 'System Training Call', description: 'Daniel conducts Intercom, Akute, Doxy, Calendar training', owner: 'Training', targetDays: 1, dueDate: '2026-02-27', completedDate: '2026-03-09', isComplete: true, notes: 'We are skipping this piece for him.', waitingOn: '' },
      { id: 'sm-33', phase: 'Training', name: 'Update Slack/Intercom Photo', description: 'Provider adds photo to profiles', owner: 'Provider', targetDays: 0, dueDate: '2026-02-26', completedDate: null, isComplete: false, notes: 'Slack is done, IC is not done', waitingOn: '' },
      // Slack/Calendar
      { id: 'sm-34', phase: 'Slack/Calendar', name: 'Add to Provider Channels', description: 'Add to: Provider Meeting, All Providers & CS, Tech_CS, Providers, Payroll Announce', owner: 'HR', targetDays: 1, dueDate: '2026-02-27', completedDate: '2026-03-09', isComplete: true, notes: '', waitingOn: '' },
      { id: 'sm-35', phase: 'Slack/Calendar', name: 'Google Calendar Invite', description: 'Add to recurring provider meetings', owner: 'HR', targetDays: 1, dueDate: '2026-02-27', completedDate: null, isComplete: false, notes: '', waitingOn: '' },
      // Final Steps
      { id: 'sm-36', phase: 'Final Steps', name: 'Send To-Do List Email', description: 'Send complete task list for provider self-service items', owner: 'HR', targetDays: 0, dueDate: '2026-02-26', completedDate: '2026-03-09', isComplete: true, notes: '', waitingOn: '' },
      { id: 'sm-37', phase: 'Final Steps', name: 'Coordinate Shadowing', description: 'Coordinate shadowing with Ashley Gwinn; notify Lindsay when complete', owner: 'HR', targetDays: 1, dueDate: '2026-02-27', completedDate: '2026-03-09', isComplete: true, notes: 'Bill will reach out to Stephen', waitingOn: '' },
    ],
  },
  {
    id: 'emmanuel-sonaike-001',
    name: 'Emmanuel Sonaike',
    role: 'Physician',
    startDate: '2026-03-16',
    status: 'in_progress',
    owner: 'Daniel Raphael',
    notes: '',
    createdAt: '2026-03-12T00:00:00.000Z',
    tasks: [
      // Pre-Onboarding
      { id: 'es-1', phase: 'Pre-Onboarding', name: 'Send 1099 Contract', description: 'Prepare and send contractor agreement via DocuSign', owner: 'HR', targetDays: 1, dueDate: '2026-03-17', completedDate: '2026-03-12', isComplete: true, notes: '', waitingOn: '' },
      { id: 'es-2', phase: 'Pre-Onboarding', name: 'Background Check - Checkr', description: 'Order background check', owner: 'HR', targetDays: 2, dueDate: '2026-03-18', completedDate: '2026-03-12', isComplete: true, notes: '', waitingOn: '' },
      { id: 'es-3', phase: 'Pre-Onboarding', name: 'NPDB Self-Query', description: 'Request provider to submit NPDB self-query results', owner: 'HR', targetDays: 1, dueDate: '2026-03-17', completedDate: '2026-03-12', isComplete: true, notes: '', waitingOn: '' },
      { id: 'es-4', phase: 'Pre-Onboarding', name: 'Contract Signed', description: 'Confirm both parties have signed 1099 agreement', owner: 'HR', targetDays: 0, dueDate: '2026-03-16', completedDate: '2026-03-12', isComplete: true, notes: '', waitingOn: '' },
      { id: 'es-5', phase: 'Pre-Onboarding', name: 'Background Cleared', description: 'Verify Checkr results show cleared status', owner: 'HR', targetDays: 0, dueDate: '2026-03-16', completedDate: '2026-03-12', isComplete: true, notes: '', waitingOn: '' },
      { id: 'es-6', phase: 'Pre-Onboarding', name: 'Schedule Onboarding Call', description: 'Send Calendly link for onboarding video call', owner: 'HR', targetDays: 1, dueDate: '2026-03-17', completedDate: '2026-03-12', isComplete: true, notes: '', waitingOn: '' },
      // System Access
      { id: 'es-7', phase: 'System Access', name: 'Request IT Access', description: 'Message Lindsay on workforce channel for system access', owner: 'HR', targetDays: 1, dueDate: '2026-03-17', completedDate: null, isComplete: true, notes: '', waitingOn: '' },
      { id: 'es-8', phase: 'System Access', name: 'Verify Work Computer', description: 'Confirm provider using work computer during call', owner: 'HR/IT', targetDays: 0, dueDate: '2026-03-16', completedDate: null, isComplete: false, notes: '', waitingOn: '' },
      { id: 'es-9', phase: 'System Access', name: 'Slack Login', description: 'Walk through Slack login and setup', owner: 'HR', targetDays: 0, dueDate: '2026-03-16', completedDate: null, isComplete: false, notes: '', waitingOn: '' },
      { id: 'es-10', phase: 'System Access', name: 'Intercom Login', description: 'Walk through Intercom login and setup', owner: 'HR', targetDays: 0, dueDate: '2026-03-16', completedDate: null, isComplete: false, notes: '', waitingOn: '' },
      { id: 'es-11', phase: 'System Access', name: 'Akute Login', description: 'Walk through Akute login and setup', owner: 'HR', targetDays: 0, dueDate: '2026-03-16', completedDate: null, isComplete: false, notes: '', waitingOn: '' },
      { id: 'es-12', phase: 'System Access', name: 'Email Forwarding & 2FA', description: 'Set up email forwarding and 2FA during call', owner: 'HR', targetDays: 0, dueDate: '2026-03-16', completedDate: null, isComplete: false, notes: '', waitingOn: '' },
      { id: 'es-13', phase: 'System Access', name: 'HIPAA Signature', description: 'Complete HIPAA signature', owner: 'Provider', targetDays: 0, dueDate: '2026-03-16', completedDate: null, isComplete: false, notes: '', waitingOn: '' },
      // Platform Setup
      { id: 'es-14', phase: 'Platform Setup', name: 'Doxy.me Invite', description: 'Send and confirm Doxy invite', owner: 'HR', targetDays: 1, dueDate: '2026-03-17', completedDate: null, isComplete: false, notes: '', waitingOn: '' },
      { id: 'es-15', phase: 'Platform Setup', name: 'Doxy Headshot', description: 'Request professional headshot for waiting room', owner: 'Provider', targetDays: 1, dueDate: '2026-03-17', completedDate: null, isComplete: false, notes: '', waitingOn: '' },
      { id: 'es-16', phase: 'Platform Setup', name: 'OnceHub Setup', description: 'Create OnceHub account for provider', owner: 'HR', targetDays: 1, dueDate: '2026-03-17', completedDate: null, isComplete: false, notes: '', waitingOn: '' },
      // Security
      { id: 'es-17', phase: 'Security', name: 'ThreatDown Install', description: 'Execute ThreatDown installation (post-call)', owner: 'IT', targetDays: 1, dueDate: '2026-03-17', completedDate: null, isComplete: false, notes: '', waitingOn: '' },
      { id: 'es-18', phase: 'Security', name: 'Akute Identity Proofing', description: 'Complete identity proofing via Slack (post-call)', owner: 'IT', targetDays: 2, dueDate: '2026-03-18', completedDate: null, isComplete: false, notes: '', waitingOn: '' },
      // Compliance
      { id: 'es-19', phase: 'Compliance', name: 'Abyde Access', description: 'Add user to Abyde HIPAA compliance platform', owner: 'HR', targetDays: 1, dueDate: '2026-03-17', completedDate: null, isComplete: false, notes: '', waitingOn: '' },
      { id: 'es-20', phase: 'Compliance', name: 'Abyde Training', description: 'Provider completes Abyde training via email', owner: 'Provider', targetDays: 3, dueDate: '2026-03-19', completedDate: null, isComplete: false, notes: '', waitingOn: '' },
      { id: 'es-21', phase: 'Compliance', name: 'Heidi Access', description: 'Email Mary Ellen for Heidi transcription access', owner: 'HR', targetDays: 1, dueDate: '2026-03-17', completedDate: null, isComplete: false, notes: '', waitingOn: '' },
      { id: 'es-22', phase: 'Compliance', name: 'Malpractice Insurance', description: 'Add provider to malpractice insurance policy', owner: 'HR', targetDays: 2, dueDate: '2026-03-18', completedDate: null, isComplete: false, notes: '', waitingOn: '' },
      // Payroll
      { id: 'es-23', phase: 'Payroll', name: 'Explain Pay Schedule', description: 'Review bi-monthly payroll (10th-24th, 25th-9th)', owner: 'HR', targetDays: 0, dueDate: '2026-03-16', completedDate: null, isComplete: false, notes: '', waitingOn: '' },
      { id: 'es-24', phase: 'Payroll', name: 'Send Policy Docs', description: 'Send contractor scheduling & timekeeping policy', owner: 'HR', targetDays: 0, dueDate: '2026-03-16', completedDate: null, isComplete: false, notes: '', waitingOn: '' },
      { id: 'es-25', phase: 'Payroll', name: 'Direct Deposit Setup', description: 'Provider completes direct deposit form', owner: 'Provider', targetDays: 1, dueDate: '2026-03-17', completedDate: null, isComplete: false, notes: '', waitingOn: '' },
      { id: 'es-26', phase: 'Payroll', name: 'Complete Onboarding Form', description: 'Provider fills out Google onboarding form', owner: 'Provider', targetDays: 1, dueDate: '2026-03-17', completedDate: null, isComplete: false, notes: '', waitingOn: '' },
      // Pharmacy Access
      { id: 'es-27', phase: 'Pharmacy Access', name: 'Curexa Setup', description: 'Send license list to jewilson@curexa.com', owner: 'HR', targetDays: 1, dueDate: '2026-03-17', completedDate: null, isComplete: false, notes: '', waitingOn: '' },
      { id: 'es-28', phase: 'Pharmacy Access', name: 'TPH Setup', description: 'Send provider info to support@thepharmacyhub.com', owner: 'HR', targetDays: 0, dueDate: '2026-03-16', completedDate: null, isComplete: false, notes: '', waitingOn: '' },
      { id: 'es-29', phase: 'Pharmacy Access', name: 'Empower Setup', description: 'Send forms/licenses to dlaubert@empowerpharmacy.com', owner: 'HR', targetDays: 0, dueDate: '2026-03-16', completedDate: null, isComplete: false, notes: '', waitingOn: '' },
      { id: 'es-30', phase: 'Pharmacy Access', name: 'Belmar Setup', description: 'Send licenses to jonathan.banks@belmarpharma.com', owner: 'HR', targetDays: 0, dueDate: '2026-03-16', completedDate: null, isComplete: false, notes: '', waitingOn: '' },
      { id: 'es-31', phase: 'Pharmacy Access', name: 'Curexa Samples', description: 'Request demo T-cream and syringes via Slack', owner: 'HR', targetDays: 1, dueDate: '2026-03-17', completedDate: null, isComplete: false, notes: '', waitingOn: '' },
      // Training
      { id: 'es-32', phase: 'Training', name: 'System Training Call', description: 'Daniel conducts Intercom, Akute, Doxy, Calendar training', owner: 'Training', targetDays: 1, dueDate: '2026-03-17', completedDate: null, isComplete: false, notes: '', waitingOn: '' },
      { id: 'es-33', phase: 'Training', name: 'Update Slack/Intercom Photo', description: 'Provider adds photo to profiles', owner: 'Provider', targetDays: 0, dueDate: '2026-03-16', completedDate: null, isComplete: false, notes: '', waitingOn: '' },
      // Slack/Calendar
      { id: 'es-34', phase: 'Slack/Calendar', name: 'Add to Provider Channels', description: 'Add to: Provider Meeting, All Providers & CS, Tech_CS, Providers, Payroll Announce', owner: 'HR', targetDays: 1, dueDate: '2026-03-17', completedDate: null, isComplete: false, notes: '', waitingOn: '' },
      { id: 'es-35', phase: 'Slack/Calendar', name: 'Google Calendar Invite', description: 'Add to recurring provider meetings', owner: 'HR', targetDays: 1, dueDate: '2026-03-17', completedDate: null, isComplete: false, notes: '', waitingOn: '' },
      // Final Steps
      { id: 'es-36', phase: 'Final Steps', name: 'Send To-Do List Email', description: 'Send complete task list for provider self-service items', owner: 'HR', targetDays: 0, dueDate: '2026-03-16', completedDate: null, isComplete: false, notes: '', waitingOn: '' },
      { id: 'es-37', phase: 'Final Steps', name: 'Coordinate Shadowing', description: 'Coordinate shadowing with Ashley Gwinn; notify Lindsay when complete', owner: 'HR', targetDays: 1, dueDate: '2026-03-17', completedDate: null, isComplete: false, notes: '', waitingOn: '' },
    ],
  },
];
