import { create } from 'zustand';
import { Subject, Task, Note, User } from '../types';

interface Store {
  subjects: Subject[];
  tasks: Task[];
  notes: Note[];
  user: User | null;
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
  addSubject: (subject: Omit<Subject, 'id'>) => void;
  removeSubject: (id: string) => void;
  addTask: (task: Omit<Task, 'id'>) => void;
  removeTask: (id: string) => void;
  toggleTaskComplete: (taskId: string) => void;
  addNote: (note: Note) => void;
}

export const useStore = create<Store>((set) => ({
  subjects: [],
  tasks: [],
  notes: [],
  user: null,
  darkMode: false,
  setDarkMode: (darkMode) => set({ darkMode }),
  addSubject: (subject) =>
    set((state) => ({
      subjects: [...state.subjects, { ...subject, id: crypto.randomUUID() }],
    })),
  removeSubject: (id) =>
    set((state) => ({
      subjects: state.subjects.filter((subject) => subject.id !== id),
      tasks: state.tasks.filter((task) => task.subjectId !== id),
    })),
  addTask: (task) =>
    set((state) => ({
      tasks: [...state.tasks, { ...task, id: crypto.randomUUID() }],
    })),
  removeTask: (id) =>
    set((state) => ({
      tasks: state.tasks.filter((task) => task.id !== id),
    })),
  toggleTaskComplete: (taskId) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      ),
    })),
  addNote: (note) => set((state) => ({ notes: [...state.notes, note] })),
}));