import React from 'react';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = ({ darkMode, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className="p-3 rounded-lg bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all"
      aria-label="Toggle theme"
    >
      {darkMode ? (
        <Sun className="text-yellow-500" size={24} />
      ) : (
        <Moon className="text-gray-700" size={24} />
      )}
    </button>
  );
};

export default ThemeToggle;