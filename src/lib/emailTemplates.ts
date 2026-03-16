export interface EmailTemplate {
  id: string;
  name: string;
  whenToUse: string;
  responsible: string;
  recipient: string;
  content: string;
  specialDetails?: string;
}

export const emailTemplates: EmailTemplate[] = [
  {
    id: 'fountain-offer',
    name: 'Fountain Offer',
    whenToUse: 'Offer position',
    responsible: 'Lindsay',
    recipient: 'New hire',
    content: 'Lindsay will send an acceptance offer to the new hire and will await confirmation. Once accepted trigger Workforce slack message and tag Daniel Raphael',
    specialDetails: '',
  },
  {
    id: 'introduction-email',
    name: 'Introduction Email',
    whenToUse: 'To send 1099, background check, NPDB + onboarding form',
    responsible: 'Daniel',
    recipient: 'New hire',
    content: `Subject line: Welcome to Fountain!

Hello [NAME],

Welcome to Fountain! We are happy to hear you have accepted the [insert role- example physician, nurse practitioner, registered nurse] contractor position and look forward to getting you set up and introduced to everything.

We kindly ask that you complete the following steps by:
1099 Contractor Agreement -- Please review, sign, and return the attached agreement.
NPDB Self-Query -- Please complete your self-query at https://www.npdb.hrsa.gov/ and send us a copy of your results.
Background Check -- Please complete this through the invite you received from Checkr.
Onboarding Form -- Please complete the attached onboarding form.

Once we have received everything, we will send you a link to schedule your onboarding call.

Please don't hesitate to reach out if you have any questions along the way. We are happy to help!

Warm regards,
[YOUR NAME]`,
  },
  {
    id: 'it-access-request',
    name: 'IT Access Request',
    whenToUse: 'After background + NPDB cleared',
    responsible: 'Lindsay',
    recipient: 'Rob on Signal',
    content: 'Daniel to send Lindsay DOB + NPI information via slack from completed NPDB. Once received, Lindsay will Signal Rob with details.',
    specialDetails: 'This will be for Lindsay to complete',
  },
  {
    id: 'remaining-system-access',
    name: 'Remaining System Access',
    whenToUse: 'Once general access has been provided by Rob to Lindsay',
    responsible: 'Lindsay',
    recipient: 'Daniel will be notified',
    content: 'Lindsay will give OnceHub + Doxy + Abyde access then trigger Daniel to send the system self-onboarding email',
  },
  {
    id: 'system-self-onboarding',
    name: 'System Self Onboarding',
    whenToUse: 'After system access is granted',
    responsible: 'Daniel',
    recipient: 'New Hire',
    content: `Subject: Welcome to the Team: Your Systems Setup

Hi [Provider Name],

Thank you for completing your 1099 agreement, background check, and onboarding form. We are excited to have you on the team! Your next step is to complete your system setup. I've attached a step-by-step guide that walks you through everything. Your Fountain email is: & temporary password is:

Also attached is the Contractor Handbook. Please take some time to review it, as it covers our policies, expectations, and guidelines for working with us.

Once you've completed all the setup steps, use the link at the bottom of the guide to schedule your onboarding call with me. I'll walk you through your ThreatDown malware setup and answer any questions that you may have. If you run into any issues along the way, feel free to reach out to me on Slack or at Daniel@fountain.net.

Looking forward to working with you!

Daniel
Clinical Operations Manager
Fountain Vitality`,
    specialDetails: 'Be sure to attach the HR handbook + System Guided Sheet. https://docs.google.com/document/d/1HKnyMEtksleiH6Sy6aRwojY1L7wvCkXlVBn0he84t2k/edit?tab=t.0',
  },
  {
    id: 'onboarding-call',
    name: 'Onboarding Call',
    whenToUse: 'This will be prompted and scheduled by the new hire',
    responsible: 'Daniel',
    recipient: "Daniel/Tammy's schedule for onboarding call",
    content: 'New hire will schedule once they have completed the self onboarding steps',
  },
  {
    id: 'post-onboarding-call',
    name: 'Post Onboarding Call',
    whenToUse: 'After onboarding call',
    responsible: 'Daniel',
    recipient: 'Team lead + Lindsay',
    content: 'Send a Slack message to Lindsay and the team lead to start the shadowing process. Provide Name, position, Fountain + Personal email + hours per week (this will be posted in the workforce channel)',
  },
  {
    id: 'heidi-access-request',
    name: 'Heidi Access Request',
    whenToUse: 'New providers needing transcription',
    responsible: 'Daniel',
    recipient: 'maryellen@heidihealth.com',
    content: `Hi Mary,

A new provider needs Heidi access.
Name: [NAME]`,
  },
  {
    id: 'pharmacy-curexa-samples',
    name: 'Pharmacy - Curexa Samples',
    whenToUse: 'Provider pharmacy samples',
    responsible: 'Daniel',
    recipient: 'Jennifer Wilson on Slack',
    content: `Hi Jennifer,

A new TRT provider needs demo T-cream and syringes.
[PROVIDER NAME]
[ADDRESS]
License info: [LICENSE LIST]`,
  },
  {
    id: 'pharmacy-curexa-access',
    name: 'Pharmacy - Curexa Access',
    whenToUse: 'Provider pharmacy access',
    responsible: 'Daniel',
    recipient: 'Jennifer Wilson over email (jewilson@curexa.com)',
    content: `Hello,

New provider: [NAME]
NPI: [NPI] | DEA: [DEA]
State License: [LICENSE] | State: [STATE]
Exp: [DATE] | Phone: [PHONE] | Email: [EMAIL]`,
  },
  {
    id: 'pharmacy-tph',
    name: 'Pharmacy - TPH',
    whenToUse: 'Provider pharmacy access',
    responsible: 'Daniel',
    recipient: 'support@thepharmacyhub.com',
    content: `Hello,

New provider: [NAME]
NPI: [NPI] | DEA: [DEA]
State License: [LICENSE] | State: [STATE]
Exp: [DATE] | Phone: [PHONE] | Email: [EMAIL]`,
  },
  {
    id: 'pharmacy-belmar',
    name: 'Pharmacy - Belmar',
    whenToUse: 'Provider pharmacy access',
    responsible: 'Daniel',
    recipient: 'jonathan.banks@belmarpharma.com',
    content: `Hello,

New provider: [NAME]
NPI: [NPI] | DEA: [DEA]
State License: [LICENSE] | State: [STATE]
Exp: [DATE] | Phone: [PHONE] | Email: [EMAIL]

I have also attached the onboarding form. Let me know if there are any questions. Thanks!`,
  },
  {
    id: 'pharmacy-empower',
    name: 'Pharmacy - Empower',
    whenToUse: 'Provider pharmacy access',
    responsible: 'Daniel',
    recipient: 'dlaubert@empowerpharmacy.com',
    content: `Hello,

New provider: [NAME]
NPI: [NPI] | DEA: [DEA]
State License: [LICENSE] | State: [STATE]
Exp: [DATE] | Phone: [PHONE] | Email: [EMAIL]

I have also attached the onboarding form. Let me know if there are any questions. Thanks!`,
  },
  {
    id: 'malpractice-insurance',
    name: 'Malpractice Insurance',
    whenToUse: 'Adding to malpractice policy',
    responsible: 'Daniel',
    recipient: 'nicole.conley@nfp.com / david.wood@nfp.com',
    content: `Hello,

We have a new provider joining our practice, [NAME]. We'd like to add them to our malpractice insurance. The checklist attached.`,
  },
];
