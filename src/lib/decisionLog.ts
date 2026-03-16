export interface Decision {
  id: string;
  dateRaised: string;
  provider: string;
  question: string;
  owner: string;
  status: 'Open' | 'In Discussion' | 'Resolved' | 'Deferred';
  outcome: string;
  dateResolved: string | null;
}

export const initialDecisions: Decision[] = [
  {
    id: 'dec-1',
    dateRaised: '2026-03-12',
    provider: 'Template - Physician',
    question: 'Doxy.me invite - discuss with Lindsay for appropriate setup',
    owner: 'Lindsay',
    status: 'Open',
    outcome: '',
    dateResolved: null,
  },
  {
    id: 'dec-2',
    dateRaised: '2026-03-12',
    provider: 'Template - Physician',
    question: 'Doxy headshot - discuss with Lindsay for appropriate setup',
    owner: 'Lindsay',
    status: 'Open',
    outcome: '',
    dateResolved: null,
  },
  {
    id: 'dec-3',
    dateRaised: '2026-03-12',
    provider: 'Template - Physician',
    question: 'OnceHub setup - discuss with Ashley',
    owner: 'Ashley',
    status: 'Open',
    outcome: '',
    dateResolved: null,
  },
];
