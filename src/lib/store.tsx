'use client';

import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { Employee, Task, RoleType, OwnerType } from './types';
import { roleTemplates } from './templates';
import { generateId, createTasksFromTemplate, getEmployeeStatus } from './utils';
import { seedEmployees } from './seedData';

interface StoreContextType {
  employees: Employee[];
  addEmployee: (name: string, role: RoleType, startDate: string, owner: string) => Employee;
  updateEmployee: (id: string, updates: Partial<Employee>) => void;
  deleteEmployee: (id: string) => void;
  getEmployee: (id: string) => Employee | undefined;
  updateTask: (employeeId: string, taskId: string, updates: Partial<Task>) => void;
  toggleTaskComplete: (employeeId: string, taskId: string) => void;
  isLoading: boolean;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

const STORAGE_KEY = 'fountain_onboarding_employees';

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Load from localStorage on mount, or use seed data if empty
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed.length > 0) {
          setEmployees(parsed);
        } else {
          // Use seed data if localStorage is empty
          setEmployees(seedEmployees);
        }
      } else {
        // Use seed data on first load
        setEmployees(seedEmployees);
      }
    } catch (error) {
      console.error('Error loading from localStorage:', error);
      setEmployees(seedEmployees);
    }
    setIsLoading(false);
  }, []);

  // Save to localStorage whenever employees change
  useEffect(() => {
    if (!isLoading) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(employees));
      } catch (error) {
        console.error('Error saving to localStorage:', error);
      }
    }
  }, [employees, isLoading]);

  const addEmployee = useCallback((name: string, role: RoleType, startDate: string, owner: string): Employee => {
    const template = roleTemplates[role];
    const tasks = createTasksFromTemplate(template, startDate);

    const newEmployee: Employee = {
      id: generateId(),
      name,
      role,
      startDate,
      status: 'not_started',
      owner,
      tasks,
      notes: '',
      createdAt: new Date().toISOString(),
    };

    setEmployees(prev => [...prev, newEmployee]);
    return newEmployee;
  }, []);

  const updateEmployee = useCallback((id: string, updates: Partial<Employee>) => {
    setEmployees(prev => prev.map(emp => {
      if (emp.id === id) {
        const updated = { ...emp, ...updates };
        updated.status = getEmployeeStatus(updated.tasks);
        return updated;
      }
      return emp;
    }));
  }, []);

  const deleteEmployee = useCallback((id: string) => {
    setEmployees(prev => prev.filter(emp => emp.id !== id));
  }, []);

  const getEmployee = useCallback((id: string): Employee | undefined => {
    return employees.find(emp => emp.id === id);
  }, [employees]);

  const updateTask = useCallback((employeeId: string, taskId: string, updates: Partial<Task>) => {
    setEmployees(prev => prev.map(emp => {
      if (emp.id === employeeId) {
        const updatedTasks = emp.tasks.map(task => {
          if (task.id === taskId) {
            return { ...task, ...updates };
          }
          return task;
        });
        return {
          ...emp,
          tasks: updatedTasks,
          status: getEmployeeStatus(updatedTasks),
        };
      }
      return emp;
    }));
  }, []);

  const toggleTaskComplete = useCallback((employeeId: string, taskId: string) => {
    setEmployees(prev => prev.map(emp => {
      if (emp.id === employeeId) {
        const updatedTasks = emp.tasks.map(task => {
          if (task.id === taskId) {
            return {
              ...task,
              isComplete: !task.isComplete,
              completedDate: !task.isComplete ? new Date().toISOString().split('T')[0] : null,
            };
          }
          return task;
        });
        return {
          ...emp,
          tasks: updatedTasks,
          status: getEmployeeStatus(updatedTasks),
        };
      }
      return emp;
    }));
  }, []);

  return (
    <StoreContext.Provider value={{
      employees,
      addEmployee,
      updateEmployee,
      deleteEmployee,
      getEmployee,
      updateTask,
      toggleTaskComplete,
      isLoading,
    }}>
      {children}
    </StoreContext.Provider>
  );
}

export function useStore() {
  const context = useContext(StoreContext);
  if (context === undefined) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return context;
}
