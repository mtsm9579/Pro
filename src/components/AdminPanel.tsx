import React, { useState } from 'react';
import { Plus, Edit, Trash2, Star } from 'lucide-react';
import { Project } from '../types/Project';
import { useTranslation } from '../hooks/useTranslation';
import ProjectForm from './ProjectForm';

interface AdminPanelProps {
  projects: Project[];
  onAddProject: (project: Omit<Project, 'id' | 'createdAt'>) => void;
  onUpdateProject: (id: string, updates: Partial<Project>) => void;
  onDeleteProject: (id: string) => void;
  language: 'ar' | 'en';
}

const AdminPanel: React.FC<AdminPanelProps> = ({
  projects,
  onAddProject,
  onUpdateProject,
  onDeleteProject,
  language
}) => {
  const { t } = useTranslation(language);
  const [showForm, setShowForm] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | undefined>();

  const handleEdit = (project: Project) => {
    setEditingProject(project);
    setShowForm(true);
  };

  const handleFormSubmit = (projectData: Omit<Project, 'id' | 'createdAt'>) => {
    if (editingProject) {
      onUpdateProject(editingProject.id, projectData);
    } else {
      onAddProject(projectData);
    }
    setEditingProject(undefined);
  };

  const handleFormClose = () => {
    setShowForm(false);
    setEditingProject(undefined);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{t('adminPanel')}</h2>
        <button
          onClick={() => setShowForm(true)}
          className="flex items-center space-x-2 rtl:space-x-reverse px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors w-full sm:w-auto justify-center"
        >
          <Plus className="h-4 w-4" />
          <span>{t('addNewProject')}</span>
        </button>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <th className="text-right rtl:text-left py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">
                {t('project')}
              </th>
              <th className="text-right rtl:text-left py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">
                {t('technologies')}
              </th>
              <th className="text-center py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">
                {t('featured')}
              </th>
              <th className="text-center py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">
                {t('createdAt')}
              </th>
              <th className="text-center py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">
                {t('actions')}
              </th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr key={project.id} className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                <td className="py-4 px-4">
                  <div className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img
                      src={project.imageUrl}
                      alt={project.title[language]}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                    <div className="min-w-0 flex-1">
                      <h3 className="font-medium text-gray-900 dark:text-white truncate">
                        {project.title[language]}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-1">
                        {project.description[language]}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs rounded-full">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </td>
                <td className="py-4 px-4 text-center">
                  {project.featured && (
                    <Star className="h-5 w-5 text-yellow-500 fill-current mx-auto" />
                  )}
                </td>
                <td className="py-4 px-4 text-center text-sm text-gray-500 dark:text-gray-400">
                  {project.createdAt}
                </td>
                <td className="py-4 px-4 text-center">
                  <div className="flex justify-center space-x-2 rtl:space-x-reverse">
                    <button
                      onClick={() => handleEdit(project)}
                      className="p-2 text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/30 rounded-lg transition-colors"
                    >
                      <Edit className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => onDeleteProject(project.id)}
                      className="p-2 text-red-600 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-900/30 rounded-lg transition-colors"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {projects.length === 0 && (
        <div className="text-center py-8 text-gray-500 dark:text-gray-400">
          {language === 'ar' 
            ? 'لا توجد مشاريع محفوظة. قم بإضافة مشروعك الأول!'
            : 'No projects saved. Add your first project!'
          }
        </div>
      )}
      
      <ProjectForm
        isOpen={showForm}
        onClose={handleFormClose}
        onSubmit={handleFormSubmit}
        editProject={editingProject}
        language={language}
      />
    </div>
  );
};

export default AdminPanel;