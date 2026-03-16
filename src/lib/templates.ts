import { RoleTemplate, TaskTemplate, RoleType } from './types';

const physicianTasks: TaskTemplate[] = [
  // Pre-Onboarding
  { phase: 'Pre-Onboarding', name: 'Send 1099 Contract', description: 'Prepare and send contractor agreement via DocuSign', owner: 'HR', targetDays: 1 },
  { phase: 'Pre-Onboarding', name: 'Background Check - Checkr', description: 'Order background check', owner: 'HR', targetDays: 2 },
  { phase: 'Pre-Onboarding', name: 'NPDB Self-Query', description: 'Request provider to submit NPDB self-query results', owner: 'HR', targetDays: 1 },
  { phase: 'Pre-Onboarding', name: 'Contract Signed', description: 'Confirm both parties have signed 1099 agreement', owner: 'HR', targetDays: 0 },
  { phase: 'Pre-Onboarding', name: 'Background Cleared', description: 'Verify Checkr results show cleared status', owner: 'HR', targetDays: 0 },
  { phase: 'Pre-Onboarding', name: 'Schedule Onboarding Call', description: 'Send Calendly link for onboarding video call', owner: 'HR', targetDays: 1 },
  // System Access
  { phase: 'System Access', name: 'Request IT Access', description: 'Message Lindsay on workforce channel for system access', owner: 'HR', targetDays: 1 },
  { phase: 'System Access', name: 'Verify Work Computer', description: 'Confirm provider using work computer during call', owner: 'HR/IT', targetDays: 0 },
  { phase: 'System Access', name: 'Slack Login', description: 'Walk through Slack login and setup', owner: 'HR', targetDays: 0 },
  { phase: 'System Access', name: 'Intercom Login', description: 'Walk through Intercom login and setup', owner: 'HR', targetDays: 0 },
  { phase: 'System Access', name: 'Akute Login', description: 'Walk through Akute login and setup', owner: 'HR', targetDays: 0 },
  { phase: 'System Access', name: 'Email Forwarding & 2FA', description: 'Set up email forwarding and 2FA during call', owner: 'HR', targetDays: 0 },
  { phase: 'System Access', name: 'HIPAA Signature', description: 'Complete HIPAA signature', owner: 'Provider', targetDays: 0 },
  // Platform Setup
  { phase: 'Platform Setup', name: 'Doxy.me Invite', description: 'Send and confirm Doxy invite', owner: 'HR', targetDays: 1 },
  { phase: 'Platform Setup', name: 'Doxy Headshot', description: 'Request professional headshot for waiting room', owner: 'Provider', targetDays: 1 },
  { phase: 'Platform Setup', name: 'OnceHub Setup', description: 'Create OnceHub account for provider', owner: 'HR', targetDays: 1 },
  // Security
  { phase: 'Security', name: 'ThreatDown Install', description: 'Execute ThreatDown installation (post-call)', owner: 'IT', targetDays: 1 },
  { phase: 'Security', name: 'Akute Identity Proofing', description: 'Complete identity proofing via Slack (post-call)', owner: 'IT', targetDays: 2 },
  // Compliance
  { phase: 'Compliance', name: 'Abyde Access', description: 'Add user to Abyde HIPAA compliance platform', owner: 'HR', targetDays: 1 },
  { phase: 'Compliance', name: 'Abyde Training', description: 'Provider completes Abyde training via email', owner: 'Provider', targetDays: 3 },
  { phase: 'Compliance', name: 'Heidi Access', description: 'Email Mary Ellen for Heidi transcription access', owner: 'HR', targetDays: 1 },
  { phase: 'Compliance', name: 'Malpractice Insurance', description: 'Add provider to malpractice insurance policy', owner: 'HR', targetDays: 2 },
  // Payroll
  { phase: 'Payroll', name: 'Explain Pay Schedule', description: 'Review bi-monthly payroll (10th-24th, 25th-9th)', owner: 'HR', targetDays: 0 },
  { phase: 'Payroll', name: 'Send Policy Docs', description: 'Send contractor scheduling & timekeeping policy', owner: 'HR', targetDays: 0 },
  { phase: 'Payroll', name: 'Direct Deposit Setup', description: 'Provider completes direct deposit form', owner: 'Provider', targetDays: 1 },
  { phase: 'Payroll', name: 'Complete Onboarding Form', description: 'Provider fills out Google onboarding form', owner: 'Provider', targetDays: 1 },
  // Pharmacy Access
  { phase: 'Pharmacy Access', name: 'Curexa Setup', description: 'Send license list to jewilson@curexa.com', owner: 'HR', targetDays: 1 },
  { phase: 'Pharmacy Access', name: 'TPH Setup', description: 'Send provider info to support@thepharmacyhub.com', owner: 'HR', targetDays: 0 },
  { phase: 'Pharmacy Access', name: 'Empower Setup', description: 'Send forms/licenses to dlaubert@empowerpharmacy.com', owner: 'HR', targetDays: 0 },
  { phase: 'Pharmacy Access', name: 'Belmar Setup', description: 'Send licenses to jonathan.banks@belmarpharma.com', owner: 'HR', targetDays: 0 },
  { phase: 'Pharmacy Access', name: 'Curexa Samples', description: 'Request demo T-cream and syringes via Slack', owner: 'HR', targetDays: 1 },
  // Training
  { phase: 'Training', name: 'System Training Call', description: 'Daniel conducts Intercom, Akute, Doxy, Calendar training', owner: 'Training', targetDays: 1 },
  { phase: 'Training', name: 'Update Slack/Intercom Photo', description: 'Provider adds photo to profiles', owner: 'Provider', targetDays: 0 },
  // Slack/Calendar
  { phase: 'Slack/Calendar', name: 'Add to Provider Channels', description: 'Add to: Provider Meeting, All Providers & CS, Tech_CS, Providers, Payroll Announce', owner: 'HR', targetDays: 1 },
  { phase: 'Slack/Calendar', name: 'Google Calendar Invite', description: 'Add to recurring provider meetings', owner: 'HR', targetDays: 1 },
  // Final Steps
  { phase: 'Final Steps', name: 'Send To-Do List Email', description: 'Send complete task list for provider self-service items', owner: 'HR', targetDays: 0 },
  { phase: 'Final Steps', name: 'Coordinate Shadowing', description: 'Coordinate shadowing with Ashley Gwinn; notify Lindsay when complete', owner: 'HR', targetDays: 1 },
];

const nursePractitionerTasks: TaskTemplate[] = [
  // Pre-Onboarding
  { phase: 'Pre-Onboarding', name: 'Send 1099 Contract', description: 'Prepare and send contractor agreement via DocuSign', owner: 'HR', targetDays: 1 },
  { phase: 'Pre-Onboarding', name: 'Background Check - Checkr', description: 'Order background check', owner: 'HR', targetDays: 3 },
  { phase: 'Pre-Onboarding', name: 'NPDB Self-Query', description: 'Request provider to submit NPDB self-query results', owner: 'HR', targetDays: 5 },
  { phase: 'Pre-Onboarding', name: 'Contract Signed', description: 'Confirm both parties have signed 1099 agreement', owner: 'HR', targetDays: 3 },
  { phase: 'Pre-Onboarding', name: 'Background Cleared', description: 'Verify Checkr results show cleared status', owner: 'HR', targetDays: 5 },
  { phase: 'Pre-Onboarding', name: 'Schedule Onboarding Call', description: 'Send Calendly link for onboarding video call', owner: 'HR', targetDays: 1 },
  // System Access
  { phase: 'System Access', name: 'Request IT Access', description: 'Message Rob for Gmail, Akute, Intercom, Slack access', owner: 'HR', targetDays: 1 },
  { phase: 'System Access', name: 'Verify Work Computer', description: 'Confirm provider using work computer during call', owner: 'HR/IT', targetDays: 0 },
  { phase: 'System Access', name: 'Slack Login', description: 'Walk through Slack login and setup', owner: 'HR', targetDays: 0 },
  { phase: 'System Access', name: 'Intercom Login', description: 'Walk through Intercom login and setup', owner: 'HR', targetDays: 0 },
  { phase: 'System Access', name: 'Akute Login', description: 'Walk through Akute login and setup', owner: 'HR', targetDays: 0 },
  { phase: 'System Access', name: 'Email Forwarding & 2FA', description: 'Set up email forwarding and 2FA during call', owner: 'HR', targetDays: 0 },
  { phase: 'System Access', name: 'HIPAA Signature', description: 'Complete HIPAA signature', owner: 'Provider', targetDays: 0 },
  // Platform Setup
  { phase: 'Platform Setup', name: 'Doxy.me Invite', description: 'Send and confirm Doxy invite', owner: 'HR', targetDays: 1 },
  { phase: 'Platform Setup', name: 'Doxy Headshot', description: 'Request professional headshot for waiting room', owner: 'Provider', targetDays: 1 },
  { phase: 'Platform Setup', name: 'OnceHub Setup', description: 'Create OnceHub account for provider', owner: 'HR', targetDays: 1 },
  // Security
  { phase: 'Security', name: 'ThreatDown Install', description: 'Execute ThreatDown installation (post-call)', owner: 'IT', targetDays: 1 },
  { phase: 'Security', name: 'Akute Identity Proofing', description: 'Complete identity proofing via Slack (post-call)', owner: 'IT', targetDays: 2 },
  // Compliance
  { phase: 'Compliance', name: 'Abyde Access', description: 'Add user to Abyde HIPAA compliance platform', owner: 'HR', targetDays: 1 },
  { phase: 'Compliance', name: 'Abyde Training', description: 'Provider completes Abyde training via email', owner: 'Provider', targetDays: 3 },
  { phase: 'Compliance', name: 'Heidi Access', description: 'Email Mary Ellen for Heidi transcription access', owner: 'HR', targetDays: 1 },
  { phase: 'Compliance', name: 'Malpractice Insurance', description: 'Add provider to malpractice insurance policy', owner: 'HR', targetDays: 2 },
  // Payroll
  { phase: 'Payroll', name: 'Explain Pay Schedule', description: 'Review bi-monthly payroll (10th-24th, 25th-9th)', owner: 'HR', targetDays: 0 },
  { phase: 'Payroll', name: 'Send Policy Docs', description: 'Send contractor scheduling & timekeeping policy', owner: 'HR', targetDays: 0 },
  { phase: 'Payroll', name: 'Direct Deposit Setup', description: 'Provider completes direct deposit form', owner: 'Provider', targetDays: 1 },
  { phase: 'Payroll', name: 'Complete Onboarding Form', description: 'Provider fills out Google onboarding form', owner: 'Provider', targetDays: 1 },
  // Pharmacy Access
  { phase: 'Pharmacy Access', name: 'Curexa Setup', description: 'Send license list to jewilson@curexa.com', owner: 'HR', targetDays: 1 },
  { phase: 'Pharmacy Access', name: 'TPH Setup', description: 'Send provider info to support@thepharmacyhub.com', owner: 'HR', targetDays: 0 },
  { phase: 'Pharmacy Access', name: 'Empower Setup', description: 'Send forms/licenses to dlaubert@empowerpharmacy.com', owner: 'HR', targetDays: 0 },
  { phase: 'Pharmacy Access', name: 'Belmar Setup', description: 'Send licenses to jonathan.banks@belmarpharma.com', owner: 'HR', targetDays: 0 },
  { phase: 'Pharmacy Access', name: 'Curexa Samples', description: 'Request demo T-cream and syringes via Slack', owner: 'HR', targetDays: 1 },
  // Training
  { phase: 'Training', name: 'System Training Call', description: 'Daniel conducts Intercom, Akute, Doxy, Calendar training', owner: 'Training', targetDays: 1 },
  { phase: 'Training', name: 'Update Slack/Intercom Photo', description: 'Provider adds photo to profiles', owner: 'Provider', targetDays: 0 },
  // Slack/Calendar
  { phase: 'Slack/Calendar', name: 'Add to Provider Channels', description: 'Add to: Provider Meeting, All Providers & CS, Tech_CS, Providers, Payroll Announce', owner: 'HR', targetDays: 1 },
  { phase: 'Slack/Calendar', name: 'Google Calendar Invite', description: 'Add to recurring provider meetings', owner: 'HR', targetDays: 1 },
  // Final Steps
  { phase: 'Final Steps', name: 'Send To-Do List Email', description: 'Send complete task list for provider self-service items', owner: 'HR', targetDays: 0 },
  { phase: 'Final Steps', name: 'Coordinate Shadowing', description: 'Coordinate shadowing with Ashley Gwinn; notify Lindsay when complete', owner: 'HR', targetDays: 1 },
];

const nurseTasks: TaskTemplate[] = [
  // Pre-Onboarding
  { phase: 'Pre-Onboarding', name: 'Send 1099 Contract', description: 'Prepare and send contractor agreement via DocuSign', owner: 'HR', targetDays: 1 },
  { phase: 'Pre-Onboarding', name: 'Background Check - Checkr', description: 'Order background check', owner: 'HR', targetDays: 3 },
  { phase: 'Pre-Onboarding', name: 'License Verification', description: 'Verify nursing license is active and in good standing', owner: 'HR', targetDays: 2 },
  { phase: 'Pre-Onboarding', name: 'Contract Signed', description: 'Confirm both parties have signed 1099 agreement', owner: 'HR', targetDays: 3 },
  { phase: 'Pre-Onboarding', name: 'Background Cleared', description: 'Verify Checkr results show cleared status', owner: 'HR', targetDays: 5 },
  { phase: 'Pre-Onboarding', name: 'Schedule Onboarding Call', description: 'Send Calendly link for onboarding video call', owner: 'HR', targetDays: 1 },
  // System Access
  { phase: 'System Access', name: 'Request IT Access', description: 'Message Rob for Gmail, Akute, Intercom, Slack access', owner: 'HR', targetDays: 1 },
  { phase: 'System Access', name: 'Verify Work Computer', description: 'Confirm provider using work computer during call', owner: 'HR/IT', targetDays: 0 },
  { phase: 'System Access', name: 'Slack Login', description: 'Walk through Slack login and setup', owner: 'HR', targetDays: 0 },
  { phase: 'System Access', name: 'Intercom Login', description: 'Walk through Intercom login and setup', owner: 'HR', targetDays: 0 },
  { phase: 'System Access', name: 'Akute Login', description: 'Walk through Akute login and setup', owner: 'HR', targetDays: 0 },
  { phase: 'System Access', name: 'Email Forwarding & 2FA', description: 'Set up email forwarding and 2FA during call', owner: 'HR', targetDays: 0 },
  { phase: 'System Access', name: 'HIPAA Signature', description: 'Complete HIPAA signature', owner: 'Provider', targetDays: 0 },
  // Platform Setup
  { phase: 'Platform Setup', name: 'Doxy.me Invite', description: 'Send and confirm Doxy invite', owner: 'HR', targetDays: 1 },
  { phase: 'Platform Setup', name: 'Doxy Headshot', description: 'Request professional headshot for waiting room', owner: 'Provider', targetDays: 1 },
  // Security
  { phase: 'Security', name: 'ThreatDown Install', description: 'Execute ThreatDown installation (post-call)', owner: 'IT', targetDays: 1 },
  { phase: 'Security', name: 'Akute Identity Proofing', description: 'Complete identity proofing via Slack (post-call)', owner: 'IT', targetDays: 2 },
  // Compliance
  { phase: 'Compliance', name: 'Abyde Access', description: 'Add user to Abyde HIPAA compliance platform', owner: 'HR', targetDays: 1 },
  { phase: 'Compliance', name: 'Abyde Training', description: 'Provider completes Abyde training via email', owner: 'Provider', targetDays: 3 },
  // Payroll
  { phase: 'Payroll', name: 'Explain Pay Schedule', description: 'Review bi-monthly payroll (10th-24th, 25th-9th)', owner: 'HR', targetDays: 0 },
  { phase: 'Payroll', name: 'Send Policy Docs', description: 'Send contractor scheduling & timekeeping policy', owner: 'HR', targetDays: 0 },
  { phase: 'Payroll', name: 'Direct Deposit Setup', description: 'Provider completes direct deposit form', owner: 'Provider', targetDays: 1 },
  { phase: 'Payroll', name: 'Complete Onboarding Form', description: 'Provider fills out Google onboarding form', owner: 'Provider', targetDays: 1 },
  // Training
  { phase: 'Training', name: 'System Training Call', description: 'Daniel conducts Intercom, Akute, Doxy training', owner: 'Training', targetDays: 1 },
  { phase: 'Training', name: 'Update Slack/Intercom Photo', description: 'Provider adds photo to profiles', owner: 'Provider', targetDays: 0 },
  // Slack/Calendar
  { phase: 'Slack/Calendar', name: 'Add to Staff Channels', description: 'Add to appropriate Slack channels', owner: 'HR', targetDays: 1 },
  { phase: 'Slack/Calendar', name: 'Google Calendar Invite', description: 'Add to recurring staff meetings', owner: 'HR', targetDays: 1 },
  // Final Steps
  { phase: 'Final Steps', name: 'Send To-Do List Email', description: 'Send complete task list for self-service items', owner: 'HR', targetDays: 0 },
  { phase: 'Final Steps', name: 'Coordinate Shadowing', description: 'Coordinate shadowing with senior nurse', owner: 'HR', targetDays: 1 },
];

const medicalAssistantTasks: TaskTemplate[] = [
  // Pre-Onboarding
  { phase: 'Pre-Onboarding', name: 'Send 1099 Contract', description: 'Prepare and send contractor agreement via DocuSign', owner: 'HR', targetDays: 1 },
  { phase: 'Pre-Onboarding', name: 'Background Check - Checkr', description: 'Order background check', owner: 'HR', targetDays: 3 },
  { phase: 'Pre-Onboarding', name: 'Contract Signed', description: 'Confirm both parties have signed 1099 agreement', owner: 'HR', targetDays: 3 },
  { phase: 'Pre-Onboarding', name: 'Background Cleared', description: 'Verify Checkr results show cleared status', owner: 'HR', targetDays: 5 },
  { phase: 'Pre-Onboarding', name: 'Schedule Onboarding Call', description: 'Send Calendly link for onboarding video call', owner: 'HR', targetDays: 1 },
  // System Access
  { phase: 'System Access', name: 'Request IT Access', description: 'Message Rob for Gmail, Akute, Intercom, Slack access', owner: 'HR', targetDays: 1 },
  { phase: 'System Access', name: 'Verify Work Computer', description: 'Confirm using work computer during call', owner: 'HR/IT', targetDays: 0 },
  { phase: 'System Access', name: 'Slack Login', description: 'Walk through Slack login and setup', owner: 'HR', targetDays: 0 },
  { phase: 'System Access', name: 'Intercom Login', description: 'Walk through Intercom login and setup', owner: 'HR', targetDays: 0 },
  { phase: 'System Access', name: 'Akute Login', description: 'Walk through Akute login and setup', owner: 'HR', targetDays: 0 },
  { phase: 'System Access', name: 'Email Forwarding & 2FA', description: 'Set up email forwarding and 2FA during call', owner: 'HR', targetDays: 0 },
  { phase: 'System Access', name: 'HIPAA Signature', description: 'Complete HIPAA signature', owner: 'Provider', targetDays: 0 },
  // Security
  { phase: 'Security', name: 'ThreatDown Install', description: 'Execute ThreatDown installation (post-call)', owner: 'IT', targetDays: 1 },
  // Compliance
  { phase: 'Compliance', name: 'Abyde Access', description: 'Add user to Abyde HIPAA compliance platform', owner: 'HR', targetDays: 1 },
  { phase: 'Compliance', name: 'Abyde Training', description: 'Complete Abyde training via email', owner: 'Provider', targetDays: 3 },
  // Payroll
  { phase: 'Payroll', name: 'Explain Pay Schedule', description: 'Review bi-monthly payroll (10th-24th, 25th-9th)', owner: 'HR', targetDays: 0 },
  { phase: 'Payroll', name: 'Send Policy Docs', description: 'Send contractor scheduling & timekeeping policy', owner: 'HR', targetDays: 0 },
  { phase: 'Payroll', name: 'Direct Deposit Setup', description: 'Complete direct deposit form', owner: 'Provider', targetDays: 1 },
  { phase: 'Payroll', name: 'Complete Onboarding Form', description: 'Fill out Google onboarding form', owner: 'Provider', targetDays: 1 },
  // Training
  { phase: 'Training', name: 'System Training Call', description: 'Daniel conducts Intercom, Akute training', owner: 'Training', targetDays: 1 },
  { phase: 'Training', name: 'Update Slack/Intercom Photo', description: 'Add photo to profiles', owner: 'Provider', targetDays: 0 },
  // Slack/Calendar
  { phase: 'Slack/Calendar', name: 'Add to Staff Channels', description: 'Add to appropriate Slack channels', owner: 'HR', targetDays: 1 },
  { phase: 'Slack/Calendar', name: 'Google Calendar Invite', description: 'Add to recurring staff meetings', owner: 'HR', targetDays: 1 },
  // Final Steps
  { phase: 'Final Steps', name: 'Send To-Do List Email', description: 'Send complete task list for self-service items', owner: 'HR', targetDays: 0 },
  { phase: 'Final Steps', name: 'Coordinate Shadowing', description: 'Coordinate shadowing with senior MA', owner: 'HR', targetDays: 1 },
];

const pharmacyLiaisonTasks: TaskTemplate[] = [
  // Pre-Onboarding
  { phase: 'Pre-Onboarding', name: 'Send 1099 Contract', description: 'Prepare and send contractor agreement via DocuSign', owner: 'HR', targetDays: 1 },
  { phase: 'Pre-Onboarding', name: 'Background Check - Checkr', description: 'Order background check', owner: 'HR', targetDays: 3 },
  { phase: 'Pre-Onboarding', name: 'Contract Signed', description: 'Confirm both parties have signed 1099 agreement', owner: 'HR', targetDays: 3 },
  { phase: 'Pre-Onboarding', name: 'Background Cleared', description: 'Verify Checkr results show cleared status', owner: 'HR', targetDays: 5 },
  { phase: 'Pre-Onboarding', name: 'Schedule Onboarding Call', description: 'Send Calendly link for onboarding video call', owner: 'HR', targetDays: 1 },
  // System Access
  { phase: 'System Access', name: 'Request IT Access', description: 'Message Rob for Gmail, Slack access', owner: 'HR', targetDays: 1 },
  { phase: 'System Access', name: 'Verify Work Computer', description: 'Confirm using work computer during call', owner: 'HR/IT', targetDays: 0 },
  { phase: 'System Access', name: 'Slack Login', description: 'Walk through Slack login and setup', owner: 'HR', targetDays: 0 },
  { phase: 'System Access', name: 'Email Forwarding & 2FA', description: 'Set up email forwarding and 2FA during call', owner: 'HR', targetDays: 0 },
  { phase: 'System Access', name: 'HIPAA Signature', description: 'Complete HIPAA signature', owner: 'Provider', targetDays: 0 },
  // Security
  { phase: 'Security', name: 'ThreatDown Install', description: 'Execute ThreatDown installation (post-call)', owner: 'IT', targetDays: 1 },
  // Compliance
  { phase: 'Compliance', name: 'Abyde Access', description: 'Add user to Abyde HIPAA compliance platform', owner: 'HR', targetDays: 1 },
  { phase: 'Compliance', name: 'Abyde Training', description: 'Complete Abyde training via email', owner: 'Provider', targetDays: 3 },
  // Payroll
  { phase: 'Payroll', name: 'Explain Pay Schedule', description: 'Review bi-monthly payroll (10th-24th, 25th-9th)', owner: 'HR', targetDays: 0 },
  { phase: 'Payroll', name: 'Send Policy Docs', description: 'Send contractor scheduling & timekeeping policy', owner: 'HR', targetDays: 0 },
  { phase: 'Payroll', name: 'Direct Deposit Setup', description: 'Complete direct deposit form', owner: 'Provider', targetDays: 1 },
  { phase: 'Payroll', name: 'Complete Onboarding Form', description: 'Fill out Google onboarding form', owner: 'Provider', targetDays: 1 },
  // Pharmacy Training
  { phase: 'Pharmacy Training', name: 'Pharmacy Partner Overview', description: 'Review all pharmacy partners (Curexa, TPH, Empower, Belmar)', owner: 'Training', targetDays: 1 },
  { phase: 'Pharmacy Training', name: 'Order Processing Training', description: 'Training on pharmacy order workflows', owner: 'Training', targetDays: 2 },
  // Slack/Calendar
  { phase: 'Slack/Calendar', name: 'Add to Staff Channels', description: 'Add to appropriate Slack channels including pharmacy channels', owner: 'HR', targetDays: 1 },
  { phase: 'Slack/Calendar', name: 'Google Calendar Invite', description: 'Add to recurring staff meetings', owner: 'HR', targetDays: 1 },
  // Final Steps
  { phase: 'Final Steps', name: 'Send To-Do List Email', description: 'Send complete task list for self-service items', owner: 'HR', targetDays: 0 },
  { phase: 'Final Steps', name: 'Coordinate Shadowing', description: 'Coordinate shadowing with senior pharmacy liaison', owner: 'HR', targetDays: 1 },
];

const customerSupportTasks: TaskTemplate[] = [
  // Pre-Onboarding
  { phase: 'Pre-Onboarding', name: 'Send 1099 Contract', description: 'Prepare and send contractor agreement via DocuSign', owner: 'HR', targetDays: 1 },
  { phase: 'Pre-Onboarding', name: 'Background Check - Checkr', description: 'Order background check', owner: 'HR', targetDays: 3 },
  { phase: 'Pre-Onboarding', name: 'Contract Signed', description: 'Confirm both parties have signed 1099 agreement', owner: 'HR', targetDays: 3 },
  { phase: 'Pre-Onboarding', name: 'Background Cleared', description: 'Verify Checkr results show cleared status', owner: 'HR', targetDays: 5 },
  { phase: 'Pre-Onboarding', name: 'Schedule Onboarding Call', description: 'Send Calendly link for onboarding video call', owner: 'HR', targetDays: 1 },
  // System Access
  { phase: 'System Access', name: 'Request IT Access', description: 'Message Rob for Gmail, Intercom, Slack access', owner: 'HR', targetDays: 1 },
  { phase: 'System Access', name: 'Verify Work Computer', description: 'Confirm using work computer during call', owner: 'HR/IT', targetDays: 0 },
  { phase: 'System Access', name: 'Slack Login', description: 'Walk through Slack login and setup', owner: 'HR', targetDays: 0 },
  { phase: 'System Access', name: 'Intercom Login', description: 'Walk through Intercom login and setup', owner: 'HR', targetDays: 0 },
  { phase: 'System Access', name: 'Email Forwarding & 2FA', description: 'Set up email forwarding and 2FA during call', owner: 'HR', targetDays: 0 },
  { phase: 'System Access', name: 'HIPAA Signature', description: 'Complete HIPAA signature', owner: 'Provider', targetDays: 0 },
  // Security
  { phase: 'Security', name: 'ThreatDown Install', description: 'Execute ThreatDown installation (post-call)', owner: 'IT', targetDays: 1 },
  // Compliance
  { phase: 'Compliance', name: 'Abyde Access', description: 'Add user to Abyde HIPAA compliance platform', owner: 'HR', targetDays: 1 },
  { phase: 'Compliance', name: 'Abyde Training', description: 'Complete Abyde training via email', owner: 'Provider', targetDays: 3 },
  // Payroll
  { phase: 'Payroll', name: 'Explain Pay Schedule', description: 'Review bi-monthly payroll (10th-24th, 25th-9th)', owner: 'HR', targetDays: 0 },
  { phase: 'Payroll', name: 'Send Policy Docs', description: 'Send contractor scheduling & timekeeping policy', owner: 'HR', targetDays: 0 },
  { phase: 'Payroll', name: 'Direct Deposit Setup', description: 'Complete direct deposit form', owner: 'Provider', targetDays: 1 },
  { phase: 'Payroll', name: 'Complete Onboarding Form', description: 'Fill out Google onboarding form', owner: 'Provider', targetDays: 1 },
  // Training
  { phase: 'Training', name: 'Intercom Training', description: 'Deep-dive Intercom training for customer support', owner: 'Training', targetDays: 2 },
  { phase: 'Training', name: 'Product Knowledge Training', description: 'Overview of Fountain services and products', owner: 'Training', targetDays: 1 },
  { phase: 'Training', name: 'Update Slack/Intercom Photo', description: 'Add photo to profiles', owner: 'Provider', targetDays: 0 },
  // Slack/Calendar
  { phase: 'Slack/Calendar', name: 'Add to CS Channels', description: 'Add to customer support Slack channels', owner: 'HR', targetDays: 1 },
  { phase: 'Slack/Calendar', name: 'Google Calendar Invite', description: 'Add to recurring CS team meetings', owner: 'HR', targetDays: 1 },
  // Final Steps
  { phase: 'Final Steps', name: 'Send To-Do List Email', description: 'Send complete task list for self-service items', owner: 'HR', targetDays: 0 },
  { phase: 'Final Steps', name: 'Coordinate Shadowing', description: 'Coordinate shadowing with senior CS rep', owner: 'HR', targetDays: 1 },
];

const executiveAssistantTasks: TaskTemplate[] = [
  // Pre-Onboarding
  { phase: 'Pre-Onboarding', name: 'Send 1099 Contract', description: 'Prepare and send contractor agreement via DocuSign', owner: 'HR', targetDays: 1 },
  { phase: 'Pre-Onboarding', name: 'Background Check - Checkr', description: 'Order background check', owner: 'HR', targetDays: 3 },
  { phase: 'Pre-Onboarding', name: 'Contract Signed', description: 'Confirm both parties have signed 1099 agreement', owner: 'HR', targetDays: 3 },
  { phase: 'Pre-Onboarding', name: 'Background Cleared', description: 'Verify Checkr results show cleared status', owner: 'HR', targetDays: 5 },
  { phase: 'Pre-Onboarding', name: 'Schedule Onboarding Call', description: 'Send Calendly link for onboarding video call', owner: 'HR', targetDays: 1 },
  // System Access
  { phase: 'System Access', name: 'Request IT Access', description: 'Message Rob for Gmail, Slack, Google Workspace access', owner: 'HR', targetDays: 1 },
  { phase: 'System Access', name: 'Verify Work Computer', description: 'Confirm using work computer during call', owner: 'HR/IT', targetDays: 0 },
  { phase: 'System Access', name: 'Slack Login', description: 'Walk through Slack login and setup', owner: 'HR', targetDays: 0 },
  { phase: 'System Access', name: 'Google Workspace Setup', description: 'Configure Google Calendar, Drive, Docs access', owner: 'HR', targetDays: 0 },
  { phase: 'System Access', name: 'Email Forwarding & 2FA', description: 'Set up email forwarding and 2FA during call', owner: 'HR', targetDays: 0 },
  { phase: 'System Access', name: 'HIPAA Signature', description: 'Complete HIPAA signature', owner: 'Provider', targetDays: 0 },
  // Security
  { phase: 'Security', name: 'ThreatDown Install', description: 'Execute ThreatDown installation (post-call)', owner: 'IT', targetDays: 1 },
  // Compliance
  { phase: 'Compliance', name: 'Abyde Access', description: 'Add user to Abyde HIPAA compliance platform', owner: 'HR', targetDays: 1 },
  { phase: 'Compliance', name: 'Abyde Training', description: 'Complete Abyde training via email', owner: 'Provider', targetDays: 3 },
  // Payroll
  { phase: 'Payroll', name: 'Explain Pay Schedule', description: 'Review bi-monthly payroll (10th-24th, 25th-9th)', owner: 'HR', targetDays: 0 },
  { phase: 'Payroll', name: 'Send Policy Docs', description: 'Send contractor scheduling & timekeeping policy', owner: 'HR', targetDays: 0 },
  { phase: 'Payroll', name: 'Direct Deposit Setup', description: 'Complete direct deposit form', owner: 'Provider', targetDays: 1 },
  { phase: 'Payroll', name: 'Complete Onboarding Form', description: 'Fill out Google onboarding form', owner: 'Provider', targetDays: 1 },
  // Training
  { phase: 'Training', name: 'Executive Overview', description: 'Introduction to executives and their preferences', owner: 'Training', targetDays: 1 },
  { phase: 'Training', name: 'Calendar Management Training', description: 'Training on calendar and scheduling protocols', owner: 'Training', targetDays: 1 },
  { phase: 'Training', name: 'Update Slack Photo', description: 'Add photo to profile', owner: 'Provider', targetDays: 0 },
  // Slack/Calendar
  { phase: 'Slack/Calendar', name: 'Add to Admin Channels', description: 'Add to executive and admin Slack channels', owner: 'HR', targetDays: 1 },
  { phase: 'Slack/Calendar', name: 'Google Calendar Access', description: 'Grant access to executive calendars', owner: 'HR', targetDays: 1 },
  // Final Steps
  { phase: 'Final Steps', name: 'Send To-Do List Email', description: 'Send complete task list for self-service items', owner: 'HR', targetDays: 0 },
  { phase: 'Final Steps', name: 'Executive Introduction', description: 'Schedule introductory meetings with executives', owner: 'HR', targetDays: 1 },
];

const licensingSpecialistTasks: TaskTemplate[] = [
  // Pre-Onboarding
  { phase: 'Pre-Onboarding', name: 'Send 1099 Contract', description: 'Prepare and send contractor agreement via DocuSign', owner: 'HR', targetDays: 1 },
  { phase: 'Pre-Onboarding', name: 'Background Check - Checkr', description: 'Order background check', owner: 'HR', targetDays: 3 },
  { phase: 'Pre-Onboarding', name: 'Contract Signed', description: 'Confirm both parties have signed 1099 agreement', owner: 'HR', targetDays: 3 },
  { phase: 'Pre-Onboarding', name: 'Background Cleared', description: 'Verify Checkr results show cleared status', owner: 'HR', targetDays: 5 },
  { phase: 'Pre-Onboarding', name: 'Schedule Onboarding Call', description: 'Send Calendly link for onboarding video call', owner: 'HR', targetDays: 1 },
  // System Access
  { phase: 'System Access', name: 'Request IT Access', description: 'Message Rob for Gmail, Slack access', owner: 'HR', targetDays: 1 },
  { phase: 'System Access', name: 'Verify Work Computer', description: 'Confirm using work computer during call', owner: 'HR/IT', targetDays: 0 },
  { phase: 'System Access', name: 'Slack Login', description: 'Walk through Slack login and setup', owner: 'HR', targetDays: 0 },
  { phase: 'System Access', name: 'Licensing Database Access', description: 'Grant access to licensing tracking systems', owner: 'HR', targetDays: 1 },
  { phase: 'System Access', name: 'Email Forwarding & 2FA', description: 'Set up email forwarding and 2FA during call', owner: 'HR', targetDays: 0 },
  { phase: 'System Access', name: 'HIPAA Signature', description: 'Complete HIPAA signature', owner: 'Provider', targetDays: 0 },
  // Security
  { phase: 'Security', name: 'ThreatDown Install', description: 'Execute ThreatDown installation (post-call)', owner: 'IT', targetDays: 1 },
  // Compliance
  { phase: 'Compliance', name: 'Abyde Access', description: 'Add user to Abyde HIPAA compliance platform', owner: 'HR', targetDays: 1 },
  { phase: 'Compliance', name: 'Abyde Training', description: 'Complete Abyde training via email', owner: 'Provider', targetDays: 3 },
  // Payroll
  { phase: 'Payroll', name: 'Explain Pay Schedule', description: 'Review bi-monthly payroll (10th-24th, 25th-9th)', owner: 'HR', targetDays: 0 },
  { phase: 'Payroll', name: 'Send Policy Docs', description: 'Send contractor scheduling & timekeeping policy', owner: 'HR', targetDays: 0 },
  { phase: 'Payroll', name: 'Direct Deposit Setup', description: 'Complete direct deposit form', owner: 'Provider', targetDays: 1 },
  { phase: 'Payroll', name: 'Complete Onboarding Form', description: 'Fill out Google onboarding form', owner: 'Provider', targetDays: 1 },
  // Training
  { phase: 'Training', name: 'Licensing Overview', description: 'Overview of state licensing requirements and processes', owner: 'Training', targetDays: 2 },
  { phase: 'Training', name: 'Database Training', description: 'Training on licensing tracking database', owner: 'Training', targetDays: 1 },
  { phase: 'Training', name: 'Update Slack Photo', description: 'Add photo to profile', owner: 'Provider', targetDays: 0 },
  // Slack/Calendar
  { phase: 'Slack/Calendar', name: 'Add to Licensing Channels', description: 'Add to licensing and compliance Slack channels', owner: 'HR', targetDays: 1 },
  { phase: 'Slack/Calendar', name: 'Google Calendar Invite', description: 'Add to recurring licensing team meetings', owner: 'HR', targetDays: 1 },
  // Final Steps
  { phase: 'Final Steps', name: 'Send To-Do List Email', description: 'Send complete task list for self-service items', owner: 'HR', targetDays: 0 },
  { phase: 'Final Steps', name: 'Coordinate Shadowing', description: 'Coordinate shadowing with senior licensing specialist', owner: 'HR', targetDays: 1 },
];

export const roleTemplates: Record<RoleType, TaskTemplate[]> = {
  'Physician': physicianTasks,
  'Nurse Practitioner': nursePractitionerTasks,
  'Nurse': nurseTasks,
  'Medical Assistant': medicalAssistantTasks,
  'Pharmacy Liaison': pharmacyLiaisonTasks,
  'Customer Support': customerSupportTasks,
  'Executive Assistant': executiveAssistantTasks,
  'Licensing Specialist': licensingSpecialistTasks,
};

export const roleTypes: RoleType[] = [
  'Physician',
  'Nurse Practitioner',
  'Nurse',
  'Medical Assistant',
  'Pharmacy Liaison',
  'Customer Support',
  'Executive Assistant',
  'Licensing Specialist',
];

export const getPhases = (tasks: TaskTemplate[]): string[] => {
  const phases: string[] = [];
  tasks.forEach(task => {
    if (!phases.includes(task.phase)) {
      phases.push(task.phase);
    }
  });
  return phases;
};
