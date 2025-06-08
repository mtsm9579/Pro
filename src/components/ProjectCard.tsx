import React from 'react';
import { Github, ExternalLink, Calendar, Star } from 'lucide-react';
import { Project } from '../types/Project';
import { useTranslation } from '../hooks/useTranslation';

interface ProjectCardProps {
  project: Project;
  language: 'ar' | 'en';
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, language }) => {
  const { t } = useTranslation(language);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group">
      {project.featured && (
        <div className="absolute top-4 right-4 rtl:right-auto rtl:left-4 z-10">
          <div className="bg-yellow-400 text-black px-3 py-1 rounded-full flex items-center space-x-1 rtl:space-x-reverse text-sm font-medium">
            <Star className="h-4 w-4 fill-current" />
            <span>{t('featured')}</span>
          </div>
        </div>
      )}
      
      <div className="relative overflow-hidden">
        <img
          src={project.imageUrl}
          alt={project.title[language]}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white flex-1">
            {project.title[language]}
          </h3>
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 ml-3 rtl:ml-0 rtl:mr-3">
            <Calendar className="h-4 w-4 mr-1 rtl:mr-0 rtl:ml-1" />
            <span>{project.createdAt}</span>
          </div>
        </div>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 leading-relaxed">
          {project.description[language]}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm rounded-full font-medium transition-colors hover:bg-blue-200 dark:hover:bg-blue-900/50"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex space-x-3 rtl:space-x-reverse">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 rtl:space-x-reverse px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors flex-1 justify-center"
          >
            <Github className="h-4 w-4" />
            <span>{t('viewCode')}</span>
          </a>
          
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 rtl:space-x-reverse px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex-1 justify-center"
            >
              <ExternalLink className="h-4 w-4" />
              <span>{t('liveDemo')}</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;