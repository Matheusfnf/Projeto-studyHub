import React from 'react';
import { Trash2 } from 'lucide-react';
import { useStore } from '../store/useStore';
import { SubjectForm } from '../components/subjects/SubjectForm';

export function SubjectsPage() {
  const { subjects, addSubject, removeSubject } = useStore();

  return (
    <div className="space-y-8">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <h2 className="text-lg font-semibold mb-4">Add New Subject</h2>
        <SubjectForm onSubmit={addSubject} />
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
        <div className="p-6">
          <h2 className="text-lg font-semibold mb-4">Your Subjects</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {subjects.map((subject) => (
              <div
                key={subject.id}
                className="p-4 rounded-lg border"
                style={{ borderColor: subject.color }}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium">{subject.name}</h3>
                    {subject.description && (
                      <p className="text-sm text-gray-500 mt-1">
                        {subject.description}
                      </p>
                    )}
                  </div>
                  <button
                    onClick={() => removeSubject(subject.id)}
                    className="text-gray-400 hover:text-red-500"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}