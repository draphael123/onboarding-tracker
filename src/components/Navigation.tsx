'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navigation() {
  const pathname = usePathname();
  const [showResources, setShowResources] = useState(false);

  const isActive = (path: string) => pathname === path;
  const isResourcesActive = ['/templates', '/email-templates', '/decision-log', '/offboarding', '/how-to-use'].includes(pathname);

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">F</span>
              </div>
              <span className="text-xl font-semibold text-gray-900">
                Fountain Onboarding
              </span>
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <Link
              href="/"
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive('/')
                  ? 'bg-teal-50 text-teal-700'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              Dashboard
            </Link>

            <Link
              href="/templates"
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive('/templates')
                  ? 'bg-teal-50 text-teal-700'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              Templates
            </Link>

            <Link
              href="/email-templates"
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive('/email-templates')
                  ? 'bg-teal-50 text-teal-700'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              Emails
            </Link>

            <Link
              href="/decision-log"
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive('/decision-log')
                  ? 'bg-teal-50 text-teal-700'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              Decisions
            </Link>

            <Link
              href="/offboarding"
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive('/offboarding')
                  ? 'bg-red-50 text-red-700'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              Offboarding
            </Link>

            <Link
              href="/how-to-use"
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive('/how-to-use')
                  ? 'bg-teal-50 text-teal-700'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              Help
            </Link>

            <Link
              href="/add"
              className="px-4 py-2 bg-teal-600 text-white rounded-lg text-sm font-medium hover:bg-teal-700 transition-colors ml-2"
            >
              + Add Employee
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
