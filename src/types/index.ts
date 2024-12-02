export interface Subject {
  id: string;
  name: string;
  color: string;
  description?: string;
}

export interface Task {
  id: string;
  subjectId: string;
  title: string;
  description?: string;
  dueDate: Date;
  completed: boolean;
  priority: 'low' | 'medium' | 'high';
}

export interface Note {
  id: string;
  subjectId: string;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  tags: string[];
}

export interface User {
  id: string;
  name: string;
  email: string;
  preferences: {
    darkMode: boolean;
    emailNotifications: boolean;
  };
}