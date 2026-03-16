'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { offboardingTasks, offboardingCategories } from '@/lib/offboarding';

interface OffboardingEmployee {
  id: string;
  name: string;
  role: string;
  lastDay: string;
  tasks: {
    taskName: string;
    isComplete: boolean;
    completedDate: string | null;
    notes: string;
  }[];
}

const STORAGE_KEY = 'fountain_offboarding';

export default function OffboardingPage() {
  const [employees, setEmployees] = useState<OffboardingEmployee[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showAddForm, setShowAddForm] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState<string | null>(null);

  const [formData, setFormData] = useState({ name: '', role: '', lastDay: '' });

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      setEmployees(JSON.parse(stored));
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(employees));
    }
  }, [employees, isLoading]);

  const handleAddEmployee = () => {
    const newEmployee: OffboardingEmployee = {
      id: `off-${Date.now()}`,
      name: formData.name,
      role: formData.role,
      lastDay: formData.lastDay,
      tasks: offboardingTasks.map(t => ({
        taskName: t.task,
        isComplete: false,
        completedDate: null,
        notes: '',
      })),
    };
    setEmployees([...employees, newEmployee]);
    setFormData({ name: '', role: '', lastDay: '' });
    setShowAddForm(false);
    setSelectedEmployee(newEmployee.id);
  };

  const handleToggleTask = (employeeId: string, taskName: string) => {
    setEmployees(employees.map(emp => {
      if (emp.id === employeeId) {
        return {
          ...emp,
          tasks: emp.tasks.map(t => {
            if (t.taskName === taskName) {
              return {
                ...t,
                isComplete: !t.isComplete,
                completedDate: !t.isComplete ? new Date().toISOString().split('T')[0] : null,
              };
            }
            return t;
          }),
        };
      }
      return emp;
    }));
  };

  const handleDeleteEmployee = (id: string) => {
    setEmployees(employees.filter(e => e.id !== id));
    if (selectedEmployee === id) setSelectedEmployee(null);
  };

  const currentEmployee = employees.find(e => e.id === selectedEmployee);

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High': return 'bg-red-100 text-red-700';
      case 'Medium': return 'bg-amber-100 text-amber-700';
      case 'Low': return 'bg-gray-100 text-gray-600';
      default: return 'bg-gray-100 text-gray-600';
    }
  };

  if (isLoading) {
    return <div className="flex items-center justify-center min-h-[60vh]">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-600"></div>
    </div>;
  }

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
          <h1 className="text-3xl font-bold text-gray-900">Offboarding</h1>
          <p className="text-gray-600 mt-1">Employee offboarding / termination checklist</p>
        </div>
        <button
          onClick={() => setShowAddForm(true)}
          className="px-4 py-2 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-colors"
        >
          + Start Offboarding
        </button>
      </div>

      {/* Add Form Modal */}
      {showAddForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 max-w-md w-full mx-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Start Offboarding</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Employee Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
                <input
                  type="text"
                  value={formData.role}
                  onChange={e => setFormData({ ...formData, role: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Last Day</label>
                <input
                  type="date"
                  value={formData.lastDay}
                  onChange={e => setFormData({ ...formData, lastDay: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none"
                />
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
                onClick={handleAddEmployee}
                disabled={!formData.name || !formData.role || !formData.lastDay}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors disabled:opacity-50"
              >
                Start Offboarding
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Employee List */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className="p-4 border-b border-gray-200 bg-gray-50">
              <h2 className="font-semibold text-gray-900">Active Offboardings</h2>
            </div>
            {employees.length === 0 ? (
              <div className="p-6 text-center text-gray-500">
                No active offboardings
              </div>
            ) : (
              <div className="divide-y divide-gray-200">
                {employees.map(emp => {
                  const completed = emp.tasks.filter(t => t.isComplete).length;
                  const total = emp.tasks.length;
                  const progress = Math.round((completed / total) * 100);
                  return (
                    <button
                      key={emp.id}
                      onClick={() => setSelectedEmployee(emp.id)}
                      className={`w-full p-4 text-left hover:bg-gray-50 transition-colors ${selectedEmployee === emp.id ? 'bg-red-50' : ''}`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-gray-900">{emp.name}</p>
                          <p className="text-sm text-gray-500">{emp.role}</p>
                          <p className="text-xs text-gray-400 mt-1">Last day: {emp.lastDay}</p>
                        </div>
                        <div className="text-right">
                          <p className={`text-lg font-bold ${progress === 100 ? 'text-emerald-600' : 'text-red-600'}`}>
                            {progress}%
                          </p>
                          <p className="text-xs text-gray-500">{completed}/{total}</p>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* Checklist */}
        <div className="lg:col-span-2">
          {currentEmployee ? (
            <div className="space-y-4">
              <div className="bg-white rounded-xl border border-gray-200 p-4 flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">{currentEmployee.name}</h2>
                  <p className="text-gray-600">{currentEmployee.role} - Last day: {currentEmployee.lastDay}</p>
                </div>
                <button
                  onClick={() => handleDeleteEmployee(currentEmployee.id)}
                  className="text-red-600 hover:text-red-700 text-sm"
                >
                  Delete
                </button>
              </div>

              {offboardingCategories.map(category => {
                const categoryTasks = offboardingTasks.filter(t => t.category === category);
                return (
                  <div key={category} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                    <div className="p-4 border-b border-gray-100 bg-gray-50">
                      <h3 className="font-semibold text-gray-900">{category}</h3>
                    </div>
                    <div className="divide-y divide-gray-100">
                      {categoryTasks.map(task => {
                        const empTask = currentEmployee.tasks.find(t => t.taskName === task.task);
                        return (
                          <div key={task.task} className="p-4 flex items-start gap-3">
                            <button
                              onClick={() => handleToggleTask(currentEmployee.id, task.task)}
                              className={`mt-0.5 flex-shrink-0 w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                                empTask?.isComplete
                                  ? 'bg-emerald-500 border-emerald-500'
                                  : 'border-gray-300 hover:border-red-500'
                              }`}
                            >
                              {empTask?.isComplete && (
                                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                </svg>
                              )}
                            </button>
                            <div className="flex-1">
                              <div className="flex items-center gap-2">
                                <p className={`font-medium ${empTask?.isComplete ? 'text-gray-400 line-through' : 'text-gray-900'}`}>
                                  {task.task}
                                </p>
                                <span className={`text-xs px-2 py-0.5 rounded ${getPriorityColor(task.priority)}`}>
                                  {task.priority}
                                </span>
                              </div>
                              <p className="text-sm text-gray-500 mt-0.5">{task.description}</p>
                              <p className="text-xs text-gray-400 mt-1">Owner: {task.owner}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="bg-white rounded-xl border border-gray-200 p-12 text-center">
              <p className="text-gray-500">Select an employee to view their offboarding checklist</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
