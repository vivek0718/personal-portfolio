
export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  demoUrl?: string;
  imageUrl: string;
}

export interface Skill {
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'tools' | 'languages';
  proficiency: number;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  score: string;
  tags?: string[];
}

export type Theme = 'light' | 'dark';
