import React from 'react';
import { useStore } from '../store/useStore';
import { TaskForm } from '../components/tasks/TaskForm';
import { TaskList } from '../components/dashboard/TaskList';

export function TasksPage() {
  const { addTask } = useStore();

  const handleAddTask = (taskData: any) => {
    addTask({
      ...taskData,
      completed: false,
      dueDate: new Date(taskData.dueDate),
    });
  };

  return (
    <div className="space-y-8">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <h2 className="text-lg font-semibold mb-4">Add New Task</h2>
        <TaskForm onSubmit={handleAddTask} />
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <TaskList />
      </div>
    </div>
  );
}