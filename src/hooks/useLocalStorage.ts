import { useState, useEffect, useCallback } from 'react';

export default function useLocalStorage(key: string, initialState: any[]) {
  const [value, setValue] = useState(() => {
    return getSavedValue(key, initialState);
  });

  function getSavedValue(savedKeyName: string, initialValue: any[]) {
    if (!localStorage.getItem(savedKeyName)) return initialValue;
    const savedValue = JSON.parse(localStorage.getItem(savedKeyName) || '');
    if (savedValue) return savedValue;
    if (initialValue instanceof Function) return initialValue();
    return initialValue;
  }

  const setValueToLocalStorage = useCallback(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  useEffect(() => {
    setValueToLocalStorage();
    console.log(value);
  }, [value, setValueToLocalStorage]);

  return [value, setValue];
}
