import { useState, useEffect } from 'react';
import { Project } from '../types/Project';

const STORAGE_KEY = 'github_projects';

const defaultProjects: Project[] = [
  {
    id: '1',
    title: {
      ar: 'منصة التجارة الإلكترونية',
      en: 'E-Commerce Platform'
    },
    description: {
      ar: 'منصة تجارة إلكترونية متكاملة مع نظام دفع آمن وإدارة المخزون والتحليلات المتقدمة',
      en: 'Complete e-commerce platform with secure payment system, inventory management, and advanced analytics'
    },
    imageUrl: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    githubUrl: 'https://github.com/username/ecommerce-platform',
    liveUrl: 'https://ecommerce-demo.com',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux'],
    featured: true,
    createdAt: '2024-01-15'
  },
  {
    id: '2',
    title: {
      ar: 'تطبيق إدارة المهام',
      en: 'Task Management App'
    },
    description: {
      ar: 'تطبيق إدارة المهام مع ميزات التعاون الجماعي والتذكيرات الذكية ونظام التقارير',
      en: 'Task management application with team collaboration features, smart reminders, and reporting system'
    },
    imageUrl: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    githubUrl: 'https://github.com/username/task-manager',
    liveUrl: 'https://taskmanager-demo.com',
    technologies: ['Vue.js', 'Firebase', 'Tailwind CSS', 'PWA'],
    featured: true,
    createdAt: '2024-02-10'
  },
  {
    id: '3',
    title: {
      ar: 'لوحة معلومات الطقس',
      en: 'Weather Dashboard'
    },
    description: {
      ar: 'لوحة معلومات الطقس مع توقعات تفصيلية وخرائط تفاعلية وتنبيهات الطقس',
      en: 'Weather dashboard with detailed forecasts, interactive maps, and weather alerts'
    },
    imageUrl: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
    githubUrl: 'https://github.com/username/weather-dashboard',
    technologies: ['JavaScript', 'API Integration', 'Chart.js', 'Leaflet'],
    featured: false,
    createdAt: '2024-03-05'
  }
];

export const useProjects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedProjects = localStorage.getItem(STORAGE_KEY);
    if (savedProjects) {
      setProjects(JSON.parse(savedProjects));
    } else {
      setProjects(defaultProjects);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultProjects));
    }
    setLoading(false);
  }, []);

  const saveProjects = (newProjects: Project[]) => {
    setProjects(newProjects);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newProjects));
  };

  const addProject = (project: Omit<Project, 'id' | 'createdAt'>) => {
    const newProject: Project = {
      ...project,
      id: Date.now().toString(),
      createdAt: new Date().toISOString().split('T')[0]
    };
    const newProjects = [...projects, newProject];
    saveProjects(newProjects);
  };

  const updateProject = (id: string, updates: Partial<Project>) => {
    const newProjects = projects.map(project =>
      project.id === id ? { ...project, ...updates } : project
    );
    saveProjects(newProjects);
  };

  const deleteProject = (id: string) => {
    const newProjects = projects.filter(project => project.id !== id);
    saveProjects(newProjects);
  };

  return {
    projects,
    loading,
    addProject,
    updateProject,
    deleteProject
  };
};