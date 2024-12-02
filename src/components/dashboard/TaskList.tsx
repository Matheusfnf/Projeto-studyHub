import React from 'react';
import { CheckCircle2, Circle } from 'lucide-react';
import { useStore } from '../../store/useStore';
import { format } from 'date-fns';

export function TaskList() {
  const { tasks, toggleTaskComplete } = useStore();

  const sortedTasks = [...tasks].sort(
    (a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime()
  );

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Upcoming Tasks</h2>
      <div className="space-y-2">
        {sortedTasks.map((task) => (
          <div
            key={task.id}
            className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm dark:bg-gray-800"
          >
            <div className="flex items-center space-x-3">
              <button
                onClick={() => toggleTaskComplete(task.id)}
                className="text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400"
              >
                {task.completed ? (
                  <CheckCircle2 className="h-5 w-5" />
                ) : (
                  <Circle className="h-5 w-5" />
                )}
              </button>
              <div>
                <p
                  className={`font-medium ${
                    task.completed ? 'line-through text-gray-400' : ''
                  }`}
                >
                  {task.title}
                </p>
                <p className="text-sm text-gray-500">
                  Due: {format(new Date(task.dueDate), 'MMM d, yyyy')}
                </p>
              </div>
            </div>
            <span
              className={`px-2 py-1 text-xs rounded-full ${
                task.priority === 'high'
                  ? 'bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300'
                  : task.priority === 'medium'
                  ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300'
                  : 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300'
              }`}
            >
              {task.priority}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}