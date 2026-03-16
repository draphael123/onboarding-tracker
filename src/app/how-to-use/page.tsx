'use client';

import Link from 'next/link';

export default function HowToUsePage() {
  return (
    <div className="max-w-4xl mx-auto">
      <Link href="/" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6">
        <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back to Dashboard
      </Link>

      <div className="bg-white rounded-xl border border-gray-200 p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">How to Use This Tracker</h1>
        <p className="text-gray-600 mb-8">
          A guide to managing employee onboarding at Fountain
        </p>

        {/* Overview */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <span className="w-8 h-8 bg-teal-100 text-teal-700 rounded-full flex items-center justify-center text-sm font-bold">1</span>
            Overview
          </h2>
          <div className="pl-10 space-y-3 text-gray-700">
            <p>
              This tracker manages the complete onboarding process for new Fountain employees.
              Each employee gets a checklist based on their role, with tasks assigned to different owners (HR, IT, Provider, Training).
            </p>
            <p>
              Progress is tracked automatically as tasks are completed, and the dashboard shows overall status at a glance.
            </p>
          </div>
        </section>

        {/* Adding an Employee */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <span className="w-8 h-8 bg-teal-100 text-teal-700 rounded-full flex items-center justify-center text-sm font-bold">2</span>
            Adding a New Employee
          </h2>
          <div className="pl-10 space-y-3 text-gray-700">
            <ol className="list-decimal list-inside space-y-2">
              <li>Click <strong>"+ Add Employee"</strong> in the top navigation</li>
              <li>Enter the employee's full name</li>
              <li>Select their role (Physician, Nurse Practitioner, Nurse, etc.)</li>
              <li>Set their start date</li>
              <li>Enter the assigned owner (person responsible for their onboarding)</li>
              <li>Click <strong>"Create Employee"</strong></li>
            </ol>
            <p className="mt-4">
              The system will automatically generate all onboarding tasks with due dates calculated from the start date.
            </p>
          </div>
        </section>

        {/* Available Role Templates */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <span className="w-8 h-8 bg-teal-100 text-teal-700 rounded-full flex items-center justify-center text-sm font-bold">3</span>
            Role Templates
          </h2>
          <div className="pl-10">
            <p className="text-gray-700 mb-4">Each role has a customized onboarding checklist:</p>
            <div className="grid grid-cols-2 gap-3">
              {[
                { role: 'Physician', tasks: 37 },
                { role: 'Nurse Practitioner', tasks: 37 },
                { role: 'Nurse', tasks: 29 },
                { role: 'Medical Assistant', tasks: 25 },
                { role: 'Pharmacy Liaison', tasks: 23 },
                { role: 'Customer Support', tasks: 25 },
                { role: 'Executive Assistant', tasks: 25 },
                { role: 'Licensing Specialist', tasks: 26 },
              ].map(item => (
                <div key={item.role} className="bg-gray-50 rounded-lg p-3">
                  <p className="font-medium text-gray-900">{item.role}</p>
                  <p className="text-sm text-gray-500">{item.tasks} tasks</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tracking Progress */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <span className="w-8 h-8 bg-teal-100 text-teal-700 rounded-full flex items-center justify-center text-sm font-bold">4</span>
            Tracking Progress
          </h2>
          <div className="pl-10 space-y-3 text-gray-700">
            <p><strong>On the Dashboard:</strong></p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>See all employees with their progress percentage</li>
              <li>Filter by owner, status, or role</li>
              <li>Search by employee name</li>
              <li>View quick stats (total, in progress, completed)</li>
            </ul>
            <p className="mt-4"><strong>On the Employee Detail Page:</strong></p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Click the checkbox to mark tasks complete</li>
              <li>Click the arrow to expand task details</li>
              <li>Add notes to any task</li>
              <li>Mark what you're "waiting on" for blocked tasks</li>
              <li>Filter by owner to see only your tasks</li>
            </ul>
          </div>
        </section>

        {/* Task Ownership */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <span className="w-8 h-8 bg-teal-100 text-teal-700 rounded-full flex items-center justify-center text-sm font-bold">5</span>
            Task Ownership
          </h2>
          <div className="pl-10 space-y-3 text-gray-700">
            <p>Tasks are assigned to different owners based on who is responsible:</p>
            <div className="grid grid-cols-2 gap-3 mt-4">
              <div className="flex items-center gap-2">
                <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-sm font-medium">HR</span>
                <span className="text-gray-600">Human Resources tasks</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-sm font-medium">IT</span>
                <span className="text-gray-600">Technical setup tasks</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-1 bg-teal-100 text-teal-700 rounded text-sm font-medium">Provider</span>
                <span className="text-gray-600">Tasks for the new hire</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-1 bg-orange-100 text-orange-700 rounded text-sm font-medium">Training</span>
                <span className="text-gray-600">Training-related tasks</span>
              </div>
            </div>
          </div>
        </section>

        {/* Due Date Indicators */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <span className="w-8 h-8 bg-teal-100 text-teal-700 rounded-full flex items-center justify-center text-sm font-bold">6</span>
            Due Date Indicators
          </h2>
          <div className="pl-10 space-y-3 text-gray-700">
            <p>Tasks are color-coded based on their due date status:</p>
            <div className="space-y-2 mt-4">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-red-50 text-red-600 rounded">Overdue</span>
                <span className="text-gray-600">Task is past its due date</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-amber-50 text-amber-600 rounded">Due Today</span>
                <span className="text-gray-600">Task is due today</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-emerald-50 text-emerald-600 rounded">Upcoming</span>
                <span className="text-gray-600">Task is due in the future</span>
              </div>
            </div>
          </div>
        </section>

        {/* Onboarding Phases */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <span className="w-8 h-8 bg-teal-100 text-teal-700 rounded-full flex items-center justify-center text-sm font-bold">7</span>
            Onboarding Phases
          </h2>
          <div className="pl-10 space-y-3 text-gray-700">
            <p>Tasks are organized into phases (order may vary by role):</p>
            <ol className="list-decimal list-inside space-y-1 mt-4 ml-4">
              <li><strong>Pre-Onboarding</strong> - Contracts, background checks, scheduling</li>
              <li><strong>System Access</strong> - IT access, login setup, 2FA</li>
              <li><strong>Platform Setup</strong> - Doxy.me, OnceHub configuration</li>
              <li><strong>Security</strong> - ThreatDown, identity proofing</li>
              <li><strong>Compliance</strong> - Abyde, HIPAA, malpractice insurance</li>
              <li><strong>Payroll</strong> - Pay schedule, direct deposit, policies</li>
              <li><strong>Pharmacy Access</strong> - Curexa, TPH, Empower, Belmar setup</li>
              <li><strong>Training</strong> - System training, profile photos</li>
              <li><strong>Slack/Calendar</strong> - Channel access, meeting invites</li>
              <li><strong>Final Steps</strong> - To-do list, shadowing coordination</li>
            </ol>
          </div>
        </section>

        {/* Tips */}
        <section className="bg-teal-50 rounded-lg p-6">
          <h2 className="text-lg font-semibold text-teal-900 mb-3">Tips for Success</h2>
          <ul className="space-y-2 text-teal-800">
            <li className="flex items-start gap-2">
              <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Check off tasks as soon as they're completed to keep progress accurate
            </li>
            <li className="flex items-start gap-2">
              <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Use the "Waiting On" field to track blockers
            </li>
            <li className="flex items-start gap-2">
              <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Add notes for any special circumstances or follow-ups needed
            </li>
            <li className="flex items-start gap-2">
              <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Filter by owner to see just your tasks across all employees
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
