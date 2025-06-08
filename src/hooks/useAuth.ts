import { useState, useEffect } from 'react';
import { AdminState } from '../types/Project';

const ADMIN_CREDENTIALS = {
  username: 'admin',
  password: 'admin123' // في الإنتاج، يجب استخدام نظام أمان أقوى
};

export const useAuth = () => {
  const [adminState, setAdminState] = useState<AdminState>({
    isAuthenticated: false,
    isLoading: true
  });

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAdminAuthenticated') === 'true';
    setAdminState({
      isAuthenticated,
      isLoading: false
    });
  }, []);

  const login = (username: string, password: string): boolean => {
    if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
      localStorage.setItem('isAdminAuthenticated', 'true');
      setAdminState({
        isAuthenticated: true,
        isLoading: false
      });
      return true;
    }
    return false;
  };

  const logout = () => {
    localStorage.removeItem('isAdminAuthenticated');
    setAdminState({
      isAuthenticated: false,
      isLoading: false
    });
  };

  return {
    ...adminState,
    login,
    logout
  };
};