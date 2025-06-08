import { useCallback } from 'react';

export interface Translations {
  // Navigation
  portfolio: { ar: string; en: string };
  adminLogin: { ar: string; en: string };
  logout: { ar: string; en: string };
  
  // Hero Section
  myPortfolio: { ar: string; en: string };
  heroDescription: { ar: string; en: string };
  
  // Projects
  featuredProjects: { ar: string; en: string };
  allProjects: { ar: string; en: string };
  noProjects: { ar: string; en: string };
  noProjectsDescription: { ar: string; en: string };
  viewCode: { ar: string; en: string };
  liveDemo: { ar: string; en: string };
  featured: { ar: string; en: string };
  
  // Admin
  adminPanel: { ar: string; en: string };
  addNewProject: { ar: string; en: string };
  editProject: { ar: string; en: string };
  deleteProject: { ar: string; en: string };
  settings: { ar: string; en: string };
  
  // Forms
  projectTitle: { ar: string; en: string };
  projectDescription: { ar: string; en: string };
  imageUrl: { ar: string; en: string };
  githubUrl: { ar: string; en: string };
  liveUrl: { ar: string; en: string };
  technologies: { ar: string; en: string };
  addTechnology: { ar: string; en: string };
  isFeatured: { ar: string; en: string };
  save: { ar: string; en: string };
  cancel: { ar: string; en: string };
  
  // Login
  username: { ar: string; en: string };
  password: { ar: string; en: string };
  login: { ar: string; en: string };
  invalidCredentials: { ar: string; en: string };
  
  // Settings
  personalInfo: { ar: string; en: string };
  name: { ar: string; en: string };
  title: { ar: string; en: string };
  bio: { ar: string; en: string };
  appearance: { ar: string; en: string };
  primaryColor: { ar: string; en: string };
  secondaryColor: { ar: string; en: string };
  accentColor: { ar: string; en: string };
  darkMode: { ar: string; en: string };
  language: { ar: string; en: string };
  
  // Common
  loading: { ar: string; en: string };
  createdAt: { ar: string; en: string };
  actions: { ar: string; en: string };
  project: { ar: string; en: string };
  close: { ar: string; en: string };
}

const translations: Translations = {
  // Navigation
  portfolio: { ar: 'معرض الأعمال', en: 'Portfolio' },
  adminLogin: { ar: 'دخول الأدمن', en: 'Admin Login' },
  logout: { ar: 'تسجيل خروج', en: 'Logout' },
  
  // Hero Section
  myPortfolio: { ar: 'معرض أعمالي', en: 'My Portfolio' },
  heroDescription: { 
    ar: 'مجموعة مختارة من مشاريعي في مجال تطوير الويب والبرمجة. كل مشروع يحمل قصة فريدة وحلول إبداعية لتحديات حقيقية.',
    en: 'A curated collection of my web development and programming projects. Each project tells a unique story and provides creative solutions to real challenges.'
  },
  
  // Projects
  featuredProjects: { ar: 'المشاريع المميزة', en: 'Featured Projects' },
  allProjects: { ar: 'جميع المشاريع', en: 'All Projects' },
  noProjects: { ar: 'لا توجد مشاريع حالياً', en: 'No Projects Available' },
  noProjectsDescription: { 
    ar: 'ستظهر المشاريع هنا عندما يقوم الأدمن بإضافتها',
    en: 'Projects will appear here when the admin adds them'
  },
  viewCode: { ar: 'عرض الكود', en: 'View Code' },
  liveDemo: { ar: 'معاينة مباشرة', en: 'Live Demo' },
  featured: { ar: 'مميز', en: 'Featured' },
  
  // Admin
  adminPanel: { ar: 'لوحة تحكم الأدمن', en: 'Admin Panel' },
  addNewProject: { ar: 'إضافة مشروع جديد', en: 'Add New Project' },
  editProject: { ar: 'تعديل المشروع', en: 'Edit Project' },
  deleteProject: { ar: 'حذف المشروع', en: 'Delete Project' },
  settings: { ar: 'الإعدادات', en: 'Settings' },
  
  // Forms
  projectTitle: { ar: 'عنوان المشروع', en: 'Project Title' },
  projectDescription: { ar: 'وصف المشروع', en: 'Project Description' },
  imageUrl: { ar: 'رابط الصورة', en: 'Image URL' },
  githubUrl: { ar: 'رابط GitHub', en: 'GitHub URL' },
  liveUrl: { ar: 'رابط المعاينة المباشرة', en: 'Live Demo URL' },
  technologies: { ar: 'التقنيات المستخدمة', en: 'Technologies Used' },
  addTechnology: { ar: 'أضف تقنية', en: 'Add Technology' },
  isFeatured: { ar: 'مشروع مميز', en: 'Featured Project' },
  save: { ar: 'حفظ', en: 'Save' },
  cancel: { ar: 'إلغاء', en: 'Cancel' },
  
  // Login
  username: { ar: 'اسم المستخدم', en: 'Username' },
  password: { ar: 'كلمة المرور', en: 'Password' },
  login: { ar: 'تسجيل دخول', en: 'Login' },
  invalidCredentials: { 
    ar: 'اسم المستخدم أو كلمة المرور غير صحيحة',
    en: 'Invalid username or password'
  },
  
  // Settings
  personalInfo: { ar: 'المعلومات الشخصية', en: 'Personal Information' },
  name: { ar: 'الاسم', en: 'Name' },
  title: { ar: 'المسمى الوظيفي', en: 'Job Title' },
  bio: { ar: 'نبذة تعريفية', en: 'Bio' },
  appearance: { ar: 'المظهر', en: 'Appearance' },
  primaryColor: { ar: 'اللون الأساسي', en: 'Primary Color' },
  secondaryColor: { ar: 'اللون الثانوي', en: 'Secondary Color' },
  accentColor: { ar: 'لون التمييز', en: 'Accent Color' },
  darkMode: { ar: 'الوضع الليلي', en: 'Dark Mode' },
  language: { ar: 'اللغة', en: 'Language' },
  
  // Common
  loading: { ar: 'جاري التحميل...', en: 'Loading...' },
  createdAt: { ar: 'تاريخ الإنشاء', en: 'Created At' },
  actions: { ar: 'إجراءات', en: 'Actions' },
  project: { ar: 'المشروع', en: 'Project' },
  close: { ar: 'إغلاق', en: 'Close' }
};

export const useTranslation = (language: 'ar' | 'en') => {
  const t = useCallback((key: keyof Translations): string => {
    return translations[key][language];
  }, [language]);

  return { t };
};