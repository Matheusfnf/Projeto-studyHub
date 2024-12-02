import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Sidebar } from './components/layout/Sidebar';
import { useStore } from './store/useStore';
import { SubjectsPage } from './pages/SubjectsPage';
import { TasksPage } from './pages/TasksPage';

function App() {
  const { darkMode } = useStore();

  return (
    <Router>
      <div className={darkMode ? 'dark' : ''}>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 dark:text-white">
          <Header />
          <Sidebar />
          <main className="lg:pl-64 pt-16">
            <div className="container mx-auto px-4 py-8">
              <Routes>
                <Route path="/" element={<TasksPage />} />
                <Route path="/subjects" element={<SubjectsPage />} />
                <Route path="/tasks" element={<TasksPage />} />
                <Route path="/calendar" element={<div>Calendar</div>} />
                <Route path="/notes" element={<div>Notes</div>} />
                <Route path="/mind-maps" element={<div>Mind Maps</div>} />
                <Route path="/analytics" element={<div>Analytics</div>} />
              </Routes>
            </div>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;