import { useState, useEffect } from 'react';
import { AppState, Settings } from '../types/Project';

const defaultSettings: Settings = {
  name: {
    ar: 'أحمد محمد',
    en: 'Ahmed Mohammed'
  },
  title: {
    ar: 'مطور ويب متخصص',
    en: 'Full Stack Developer'
  },
  bio: {
    ar: 'مطور ويب متخصص في تقنيات الواجهات الأمامية والخلفية مع خبرة في React وNode.js',
    en: 'Full Stack Developer specialized in frontend and backend technologies with expertise in React and Node.js'
  },
  primaryColor: '#2563eb',
  secondaryColor: '#1e40af',
  accentColor: '#3b82f6'
};

const defaultAppState: AppState = {
  language: 'ar',
  darkMode: false,
  settings: defaultSettings
};

export const useAppState = () => {
  const [appState, setAppState] = useState<AppState>(defaultAppState);

  useEffect(() => {
    const savedState = localStorage.getItem('appState');
    if (savedState) {
      try {
        const parsed = JSON.parse(savedState);
        setAppState({ ...defaultAppState, ...parsed });
      } catch (error) {
        console.error('Error parsing saved state:', error);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('appState', JSON.stringify(appState));
    
    // Apply CSS custom properties for colors
    const root = document.documentElement;
    root.style.setProperty('--primary-color', appState.settings.primaryColor);
    root.style.setProperty('--secondary-color', appState.settings.secondaryColor);
    root.style.setProperty('--accent-color', appState.settings.accentColor);
    
    // Apply dark mode class
    if (appState.darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    // Apply RTL for Arabic
    document.documentElement.dir = appState.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = appState.language;
  }, [appState]);

  const updateSettings = (newSettings: Partial<Settings>) => {
    setAppState(prev => ({
      ...prev,
      settings: { ...prev.settings, ...newSettings }
    }));
  };

  const toggleLanguage = () => {
    setAppState(prev => ({
      ...prev,
      language: prev.language === 'ar' ? 'en' : 'ar'
    }));
  };

  const toggleDarkMode = () => {
    setAppState(prev => ({
      ...prev,
      darkMode: !prev.darkMode
    }));
  };

  return {
    appState,
    updateSettings,
    toggleLanguage,
    toggleDarkMode
  };
};