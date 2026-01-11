import { useState, useEffect } from 'react';
import { saveToStorage, loadFromStorage } from '../utils/storage';

/**
 * Custom hook for localStorage with React state
 */
export const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    return loadFromStorage(key, initialValue);
  });

  useEffect(() => {
    saveToStorage(key, value);
  }, [key, value]);

  return [value, setValue];
};