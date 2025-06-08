export interface Project {
  id: string;
  title: {
    ar: string;
    en: string;
  };
  description: {
    ar: string;
    en: string;
  };
  imageUrl: string;
  githubUrl: string;
  liveUrl?: string;
  technologies: string[];
  featured: boolean;
  createdAt: string;
}

export interface AdminState {
  isAuthenticated: boolean;
  isLoading: boolean;
}

export interface Settings {
  name: {
    ar: string;
    en: string;
  };
  title: {
    ar: string;
    en: string;
  };
  bio: {
    ar: string;
    en: string;
  };
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
}

export interface AppState {
  language: 'ar' | 'en';
  darkMode: boolean;
  settings: Settings;
}