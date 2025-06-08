import React, { useState } from 'react';
import { useAuth } from './hooks/useAuth';
import { useProjects } from './hooks/useProjects';
import { useAppState } from './hooks/useAppState';
import { useTranslation } from './hooks/useTranslation';
import Header from './components/Header';
import LoginModal from './components/LoginModal';
import ProjectCard from './components/ProjectCard';
import AdminPanel from './components/AdminPanel';
import SettingsModal from './components/SettingsModal';
import { Code2, Sparkles } from 'lucide-react';

function App() {
  const { isAuthenticated, isLoading, login, logout } = useAuth();
  const { projects, loading, addProject, updateProject, deleteProject } = useProjects();
  const { appState, updateSettings, toggleLanguage, toggleDarkMode } = useAppState();
  const { t } = useTranslation(appState.language);
  
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSettingsModal, setShowSettingsModal] = useState(false);

  const featuredProjects = projects.filter(p => p.featured);
  const regularProjects = projects.filter(p => !p.featured);

  if (loading || isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">{t('loading')}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      <Header
        isAdmin={isAuthenticated}
        onAdminClick={() => setShowLoginModal(true)}
        onLogout={logout}
        onSettingsClick={() => setShowSettingsModal(true)}
        language={appState.language}
        darkMode={appState.darkMode}
        onToggleLanguage={toggleLanguage}
        onToggleDarkMode={toggleDarkMode}
        siteName={appState.settings.name}
      />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center mb-6">
            <Code2 className="h-16 w-16 text-blue-600 mr-4 rtl:mr-0 rtl:ml-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              {appState.settings.name[appState.language]}
            </h1>
          </div>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
            {appState.settings.title[appState.language]}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
            {appState.settings.bio[appState.language]}
          </p>
        </div>

        {/* Admin Panel */}
        {isAuthenticated && (
          <AdminPanel
            projects={projects}
            onAddProject={addProject}
            onUpdateProject={updateProject}
            onDeleteProject={deleteProject}
            language={appState.language}
          />
        )}

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <section className="mb-12">
            <div className="flex items-center mb-8">
              <Sparkles className="h-6 w-6 text-yellow-500 mr-3 rtl:mr-0 rtl:ml-3" />
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                {t('featuredProjects')}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project) => (
                <ProjectCard 
                  key={project.id} 
                  project={project} 
                  language={appState.language}
                />
              ))}
            </div>
          </section>
        )}

        {/* Regular Projects */}
        {regularProjects.length > 0 && (
          <section>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              {t('allProjects')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularProjects.map((project) => (
                <ProjectCard 
                  key={project.id} 
                  project={project} 
                  language={appState.language}
                />
              ))}
            </div>
          </section>
        )}

        {/* Empty State */}
        {projects.length === 0 && !isAuthenticated && (
          <div className="text-center py-16">
            <Code2 className="h-24 w-24 text-gray-300 dark:text-gray-600 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {t('noProjects')}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              {t('noProjectsDescription')}
            </p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-600 dark:text-gray-400">
            <p>
              © 2024 {appState.settings.name[appState.language]}. 
              {appState.language === 'ar' 
                ? ' تم التطوير بـ ❤️' 
                : ' Made with ❤️'
              }
            </p>
          </div>
        </div>
      </footer>

      <LoginModal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        onLogin={login}
        language={appState.language}
      />

      <SettingsModal
        isOpen={showSettingsModal}
        onClose={() => setShowSettingsModal(false)}
        settings={appState.settings}
        onSave={updateSettings}
        language={appState.language}
        darkMode={appState.darkMode}
        onToggleDarkMode={toggleDarkMode}
        onToggleLanguage={toggleLanguage}
      />
    </div>
  );
}

export default App;