import React, { useState } from 'react';
import { X, Save, User, Palette } from 'lucide-react';
import { Settings } from '../types/Project';
import { useTranslation } from '../hooks/useTranslation';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  settings: Settings;
  onSave: (settings: Partial<Settings>) => void;
  language: 'ar' | 'en';
  darkMode: boolean;
  onToggleDarkMode: () => void;
  onToggleLanguage: () => void;
}

const SettingsModal: React.FC<SettingsModalProps> = ({
  isOpen,
  onClose,
  settings,
  onSave,
  language,
  darkMode,
  onToggleDarkMode,
  onToggleLanguage
}) => {
  const { t } = useTranslation(language);
  const [formData, setFormData] = useState(settings);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  const colorPresets = [
    { name: 'Blue', primary: '#2563eb', secondary: '#1e40af', accent: '#3b82f6' },
    { name: 'Purple', primary: '#7c3aed', secondary: '#5b21b6', accent: '#8b5cf6' },
    { name: 'Green', primary: '#059669', secondary: '#047857', accent: '#10b981' },
    { name: 'Red', primary: '#dc2626', secondary: '#b91c1c', accent: '#ef4444' },
    { name: 'Orange', primary: '#ea580c', secondary: '#c2410c', accent: '#f97316' },
    { name: 'Pink', primary: '#db2777', secondary: '#be185d', accent: '#ec4899' }
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl w-full max-w-4xl my-8">
        <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">{t('settings')}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
          >
            <X className="h-5 w-5 text-gray-500 dark:text-gray-400" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-8">
          {/* Personal Information */}
          <div>
            <div className="flex items-center mb-4">
              <User className="h-5 w-5 text-gray-600 dark:text-gray-400 mr-2 rtl:mr-0 rtl:ml-2" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {t('personalInfo')}
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {t('name')} (العربية)
                </label>
                <input
                  type="text"
                  value={formData.name.ar}
                  onChange={(e) => setFormData({
                    ...formData,
                    name: { ...formData.name, ar: e.target.value }
                  })}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {t('name')} (English)
                </label>
                <input
                  type="text"
                  value={formData.name.en}
                  onChange={(e) => setFormData({
                    ...formData,
                    name: { ...formData.name, en: e.target.value }
                  })}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {t('title')} (العربية)
                </label>
                <input
                  type="text"
                  value={formData.title.ar}
                  onChange={(e) => setFormData({
                    ...formData,
                    title: { ...formData.title, ar: e.target.value }
                  })}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {t('title')} (English)
                </label>
                <input
                  type="text"
                  value={formData.title.en}
                  onChange={(e) => setFormData({
                    ...formData,
                    title: { ...formData.title, en: e.target.value }
                  })}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {t('bio')} (العربية)
                </label>
                <textarea
                  value={formData.bio.ar}
                  onChange={(e) => setFormData({
                    ...formData,
                    bio: { ...formData.bio, ar: e.target.value }
                  })}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {t('bio')} (English)
                </label>
                <textarea
                  value={formData.bio.en}
                  onChange={(e) => setFormData({
                    ...formData,
                    bio: { ...formData.bio, en: e.target.value }
                  })}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>
            </div>
          </div>

          {/* Appearance Settings */}
          <div>
            <div className="flex items-center mb-4">
              <Palette className="h-5 w-5 text-gray-600 dark:text-gray-400 mr-2 rtl:mr-0 rtl:ml-2" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {t('appearance')}
              </h3>
            </div>
            
            {/* Color Presets */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                Color Themes
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                {colorPresets.map((preset) => (
                  <button
                    key={preset.name}
                    type="button"
                    onClick={() => setFormData({
                      ...formData,
                      primaryColor: preset.primary,
                      secondaryColor: preset.secondary,
                      accentColor: preset.accent
                    })}
                    className="p-3 border border-gray-300 dark:border-gray-600 rounded-lg hover:border-gray-400 dark:hover:border-gray-500 transition-colors"
                  >
                    <div className="flex space-x-1 rtl:space-x-reverse mb-2">
                      <div 
                        className="w-4 h-4 rounded-full" 
                        style={{ backgroundColor: preset.primary }}
                      />
                      <div 
                        className="w-4 h-4 rounded-full" 
                        style={{ backgroundColor: preset.secondary }}
                      />
                      <div 
                        className="w-4 h-4 rounded-full" 
                        style={{ backgroundColor: preset.accent }}
                      />
                    </div>
                    <span className="text-xs text-gray-600 dark:text-gray-400">
                      {preset.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>
            
            {/* Custom Colors */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {t('primaryColor')}
                </label>
                <div className="flex space-x-2 rtl:space-x-reverse">
                  <input
                    type="color"
                    value={formData.primaryColor}
                    onChange={(e) => setFormData({
                      ...formData,
                      primaryColor: e.target.value
                    })}
                    className="w-12 h-10 border border-gray-300 dark:border-gray-600 rounded cursor-pointer"
                  />
                  <input
                    type="text"
                    value={formData.primaryColor}
                    onChange={(e) => setFormData({
                      ...formData,
                      primaryColor: e.target.value
                    })}
                    className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {t('secondaryColor')}
                </label>
                <div className="flex space-x-2 rtl:space-x-reverse">
                  <input
                    type="color"
                    value={formData.secondaryColor}
                    onChange={(e) => setFormData({
                      ...formData,
                      secondaryColor: e.target.value
                    })}
                    className="w-12 h-10 border border-gray-300 dark:border-gray-600 rounded cursor-pointer"
                  />
                  <input
                    type="text"
                    value={formData.secondaryColor}
                    onChange={(e) => setFormData({
                      ...formData,
                      secondaryColor: e.target.value
                    })}
                    className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {t('accentColor')}
                </label>
                <div className="flex space-x-2 rtl:space-x-reverse">
                  <input
                    type="color"
                    value={formData.accentColor}
                    onChange={(e) => setFormData({
                      ...formData,
                      accentColor: e.target.value
                    })}
                    className="w-12 h-10 border border-gray-300 dark:border-gray-600 rounded cursor-pointer"
                  />
                  <input
                    type="text"
                    value={formData.accentColor}
                    onChange={(e) => setFormData({
                      ...formData,
                      accentColor: e.target.value
                    })}
                    className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>
              </div>
            </div>
            
            {/* Theme Toggles */}
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <div className="flex items-center justify-between p-4 border border-gray-300 dark:border-gray-600 rounded-lg">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {t('darkMode')}
                </span>
                <button
                  type="button"
                  onClick={onToggleDarkMode}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    darkMode ? 'bg-blue-600' : 'bg-gray-200 dark:bg-gray-700'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      darkMode ? 'translate-x-6 rtl:-translate-x-6' : 'translate-x-1 rtl:-translate-x-1'
                    }`}
                  />
                </button>
              </div>
              
              <div className="flex items-center justify-between p-4 border border-gray-300 dark:border-gray-600 rounded-lg">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {t('language')} ({language === 'ar' ? 'العربية' : 'English'})
                </span>
                <button
                  type="button"
                  onClick={onToggleLanguage}
                  className="px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm"
                >
                  {language === 'ar' ? 'EN' : 'عر'}
                </button>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-3 rtl:space-x-reverse pt-4 border-t border-gray-200 dark:border-gray-700">
            <button
              type="submit"
              className="flex items-center space-x-2 rtl:space-x-reverse flex-1 bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium justify-center"
            >
              <Save className="h-4 w-4" />
              <span>{t('save')}</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="flex-1 bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-200 py-3 px-4 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors font-medium"
            >
              {t('cancel')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SettingsModal;