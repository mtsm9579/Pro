import React from 'react';
import { Github, Shield, LogOut, Moon, Sun, Globe, Settings } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

interface HeaderProps {
  isAdmin: boolean;
  onAdminClick: () => void;
  onLogout: () => void;
  onSettingsClick: () => void;
  language: 'ar' | 'en';
  darkMode: boolean;
  onToggleLanguage: () => void;
  onToggleDarkMode: () => void;
  siteName: { ar: string; en: string };
}

const Header: React.FC<HeaderProps> = ({ 
  isAdmin, 
  onAdminClick, 
  onLogout, 
  onSettingsClick,
  language, 
  darkMode, 
  onToggleLanguage, 
  onToggleDarkMode,
  siteName
}) => {
  const { t } = useTranslation(language);

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-700 sticky top-0 z-40 backdrop-blur-sm bg-white/95 dark:bg-gray-900/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <Github className="h-8 w-8 text-gray-900 dark:text-white" />
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">
              {siteName[language]}
            </h1>
          </div>
          
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            {/* Language Toggle */}
            <button
              onClick={onToggleLanguage}
              className="p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
              title={t('language')}
            >
              <Globe className="h-5 w-5" />
            </button>
            
            {/* Dark Mode Toggle */}
            <button
              onClick={onToggleDarkMode}
              className="p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
              title={t('darkMode')}
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            
            {isAdmin ? (
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <button
                  onClick={onSettingsClick}
                  className="flex items-center space-x-2 rtl:space-x-reverse px-3 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                >
                  <Settings className="h-4 w-4" />
                  <span className="hidden sm:inline">{t('settings')}</span>
                </button>
                <button
                  onClick={onLogout}
                  className="flex items-center space-x-2 rtl:space-x-reverse px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                >
                  <LogOut className="h-4 w-4" />
                  <span className="hidden sm:inline">{t('logout')}</span>
                </button>
              </div>
            ) : (
              <button
                onClick={onAdminClick}
                className="flex items-center space-x-2 rtl:space-x-reverse px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Shield className="h-4 w-4" />
                <span className="hidden sm:inline">{t('adminLogin')}</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;