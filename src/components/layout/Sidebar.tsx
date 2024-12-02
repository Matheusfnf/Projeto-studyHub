import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Layout,
  Calendar,
  CheckSquare,
  FolderOpen,
  FileText,
  Network,
  BarChart2,
} from 'lucide-react';

const navigation = [
  { name: 'Dashboard', to: '/', icon: Layout },
  { name: 'Subjects', to: '/subjects', icon: FolderOpen },
  { name: 'Tasks', to: '/tasks', icon: CheckSquare },
  { name: 'Calendar', to: '/calendar', icon: Calendar },
  { name: 'Notes', to: '/notes', icon: FileText },
  { name: 'Mind Maps', to: '/mind-maps', icon: Network },
  { name: 'Analytics', to: '/analytics', icon: BarChart2 },
];

export function Sidebar() {
  return (
    <aside className="hidden lg:flex h-screen w-64 flex-col fixed left-0 top-0 bottom-0 bg-white border-r dark:bg-gray-900 dark:border-gray-800">
      <div className="flex-1 flex flex-col pt-20 pb-4 overflow-y-auto">
        <nav className="mt-5 flex-1 px-2 space-y-1">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.to}
              className={({ isActive }) =>
                `group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                  isActive
                    ? 'bg-indigo-100 text-indigo-600 dark:bg-indigo-900/50 dark:text-indigo-400'
                    : 'text-gray-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800'
                }`
              }
            >
              <item.icon className="mr-3 h-5 w-5 flex-shrink-0" />
              {item.name}
            </NavLink>
          ))}
        </nav>
      </div>
    </aside>
  );
}