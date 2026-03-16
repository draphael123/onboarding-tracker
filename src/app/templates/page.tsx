'use client';

import { useState } from 'react';
import Link from 'next/link';
import { roleTemplates, roleTypes, getPhases } from '@/lib/templates';
import { RoleType } from '@/lib/types';
import { OwnerBadge } from '@/components/StatusBadge';

export default function TemplatesPage() {
  const [selectedRole, setSelectedRole] = useState<RoleType>('Physician');

  const template = roleTemplates[selectedRole];
  const phases = getPhases(template);

  return (
    <div>
      <Link href="/" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6">
        <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back to Dashboard
      </Link>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Role Templates</h1>
        <p className="text-gray-600 mt-1">View onboarding checklists for each role</p>
      </div>

      {/* Role Selector */}
      <div className="bg-white rounded-xl border border-gray-200 p-4 mb-6">
        <div className="flex flex-wrap gap-2">
          {roleTypes.map(role => (
            <button
              key={role}
              onClick={() => setSelectedRole(role)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedRole === role
                  ? 'bg-teal-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {role}
            </button>
          ))}
        </div>
      </div>

      {/* Template Summary */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">{selectedRole} Onboarding</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="text-sm text-gray-500">Total Tasks</p>
            <p className="text-2xl font-bold text-gray-900">{template.length}</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="text-sm text-gray-500">Phases</p>
            <p className="text-2xl font-bold text-gray-900">{phases.length}</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="text-sm text-gray-500">HR Tasks</p>
            <p className="text-2xl font-bold text-purple-600">
              {template.filter(t => t.owner === 'HR' || t.owner === 'HR/IT').length}
            </p>
          </div>
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="text-sm text-gray-500">Provider Tasks</p>
            <p className="text-2xl font-bold text-teal-600">
              {template.filter(t => t.owner === 'Provider').length}
            </p>
          </div>
        </div>
      </div>

      {/* Tasks by Phase */}
      <div className="space-y-6">
        {phases.map(phase => {
          const phaseTasks = template.filter(t => t.phase === phase);
          return (
            <div key={phase} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <div className="p-4 border-b border-gray-100 bg-gray-50">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">{phase}</h3>
                  <span className="text-sm text-gray-500">{phaseTasks.length} tasks</span>
                </div>
              </div>
              <div className="divide-y divide-gray-100">
                {phaseTasks.map((task, index) => (
                  <div key={index} className="p-4 hover:bg-gray-50">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900">{task.name}</h4>
                        <p className="text-sm text-gray-600 mt-1">{task.description}</p>
                      </div>
                      <div className="flex items-center gap-3 flex-shrink-0">
                        <OwnerBadge owner={task.owner} />
                        <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                          +{task.targetDays} day{task.targetDays !== 1 ? 's' : ''}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
