'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Decision, initialDecisions } from '@/lib/decisionLog';

const STORAGE_KEY = 'fountain_decision_log';

export default function DecisionLogPage() {
  const [decisions, setDecisions] = useState<Decision[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  // Form state
  const [formData, setFormData] = useState({
    provider: '',
    question: '',
    owner: '',
    status: 'Open' as Decision['status'],
    outcome: '',
  });

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      setDecisions(JSON.parse(stored));
    } else {
      setDecisions(initialDecisions);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(decisions));
    }
  }, [decisions, isLoading]);

  const handleAddDecision = () => {
    const newDecision: Decision = {
      id: `dec-${Date.now()}`,
      dateRaised: new Date().toISOString().split('T')[0],
      provider: formData.provider,
      question: formData.question,
      owner: formData.owner,
      status: formData.status,
      outcome: formData.outcome,
      dateResolved: formData.status === 'Resolved' ? new Date().toISOString().split('T')[0] : null,
    };
    setDecisions([newDecision, ...decisions]);
    setFormData({ provider: '', question: '', owner: '', status: 'Open', outcome: '' });
    setShowAddForm(false);
  };

  const handleUpdateStatus = (id: string, status: Decision['status']) => {
    setDecisions(decisions.map(d => {
      if (d.id === id) {
        return {
          ...d,
          status,
          dateResolved: status === 'Resolved' ? new Date().toISOString().split('T')[0] : null,
        };
      }
      return d;
    }));
  };

  const handleUpdateOutcome = (id: string, outcome: string) => {
    setDecisions(decisions.map(d => d.id === id ? { ...d, outcome } : d));
  };

  const handleDelete = (id: string) => {
    setDecisions(decisions.filter(d => d.id !== id));
  };

  const getStatusColor = (status: Decision['status']) => {
    switch (status) {
      case 'Open': return 'bg-red-100 text-red-700';
      case 'In Discussion': return 'bg-amber-100 text-amber-700';
      case 'Resolved': return 'bg-emerald-100 text-emerald-700';
      case 'Deferred': return 'bg-gray-100 text-gray-700';
    }
  };

  if (isLoading) {
    return <div className="flex items-center justify-center min-h-[60vh]">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-600"></div>
    </div>;
  }

  const openCount = decisions.filter(d => d.status === 'Open').length;
  const inDiscussionCount = decisions.filter(d => d.status === 'In Discussion').length;
  const resolvedCount = decisions.filter(d => d.status === 'Resolved').length;

  return (
    <div>
      <Link href="/" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6">
        <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back to Dashboard
      </Link>

      <div className="flex items-start justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Decision Log</h1>
          <p className="text-gray-600 mt-1">Track open questions and pending decisions</p>
        </div>
        <button
          onClick={() => setShowAddForm(true)}
          className="px-4 py-2 bg-teal-600 text-white rounded-lg font-medium hover:bg-teal-700 transition-colors"
        >
          + Add Decision
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <p className="text-sm text-gray-500">Open</p>
          <p className="text-2xl font-bold text-red-600">{openCount}</p>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <p className="text-sm text-gray-500">In Discussion</p>
          <p className="text-2xl font-bold text-amber-600">{inDiscussionCount}</p>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <p className="text-sm text-gray-500">Resolved</p>
          <p className="text-2xl font-bold text-emerald-600">{resolvedCount}</p>
        </div>
      </div>

      {/* Add Form Modal */}
      {showAddForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 max-w-lg w-full mx-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Add New Decision</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Provider/Topic</label>
                <input
                  type="text"
                  value={formData.provider}
                  onChange={e => setFormData({ ...formData, provider: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
                  placeholder="e.g., Stephen Mooney, Template - NP"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Question / Decision Needed</label>
                <textarea
                  value={formData.question}
                  onChange={e => setFormData({ ...formData, question: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
                  rows={3}
                  placeholder="What needs to be decided?"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Owner</label>
                  <input
                    type="text"
                    value={formData.owner}
                    onChange={e => setFormData({ ...formData, owner: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
                    placeholder="Who decides?"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                  <select
                    value={formData.status}
                    onChange={e => setFormData({ ...formData, status: e.target.value as Decision['status'] })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none bg-white"
                  >
                    <option value="Open">Open</option>
                    <option value="In Discussion">In Discussion</option>
                    <option value="Resolved">Resolved</option>
                    <option value="Deferred">Deferred</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => setShowAddForm(false)}
                className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleAddDecision}
                disabled={!formData.provider || !formData.question || !formData.owner}
                className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors disabled:opacity-50"
              >
                Add Decision
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Decisions List */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Provider</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Question / Decision</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Owner</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Outcome</th>
              <th className="px-4 py-3"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {decisions.map(decision => (
              <tr key={decision.id} className="hover:bg-gray-50">
                <td className="px-4 py-3 text-sm text-gray-600 whitespace-nowrap">
                  {decision.dateRaised}
                </td>
                <td className="px-4 py-3 text-sm text-gray-900">
                  {decision.provider}
                </td>
                <td className="px-4 py-3 text-sm text-gray-700 max-w-xs">
                  {decision.question}
                </td>
                <td className="px-4 py-3 text-sm text-gray-600">
                  {decision.owner}
                </td>
                <td className="px-4 py-3">
                  <select
                    value={decision.status}
                    onChange={e => handleUpdateStatus(decision.id, e.target.value as Decision['status'])}
                    className={`text-xs font-medium px-2 py-1 rounded ${getStatusColor(decision.status)} border-0 cursor-pointer`}
                  >
                    <option value="Open">Open</option>
                    <option value="In Discussion">In Discussion</option>
                    <option value="Resolved">Resolved</option>
                    <option value="Deferred">Deferred</option>
                  </select>
                </td>
                <td className="px-4 py-3">
                  <input
                    type="text"
                    value={decision.outcome}
                    onChange={e => handleUpdateOutcome(decision.id, e.target.value)}
                    placeholder="Decision outcome..."
                    className="text-sm w-full px-2 py-1 border border-gray-200 rounded focus:ring-1 focus:ring-teal-500 focus:border-teal-500 outline-none"
                  />
                </td>
                <td className="px-4 py-3">
                  <button
                    onClick={() => handleDelete(decision.id)}
                    className="text-gray-400 hover:text-red-600"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {decisions.length === 0 && (
          <div className="p-8 text-center text-gray-500">
            No decisions logged yet. Click "Add Decision" to get started.
          </div>
        )}
      </div>
    </div>
  );
}
