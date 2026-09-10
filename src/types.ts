export interface Project {
  id: string;
  slug: string;
  title: string;
  role: string; // e.g. "designed & built" | "designed"
  status: 'live' | 'in development' | 'archived' | 'initiative';
  liveUrl: string;
  websiteUrl?: string;
  videoUrl?: string;
  oneLiner: string;
  tagline: string;
  tags: string[];
  problem: string;
  solution: string; // "what I built/designed"
  outcome: string;
  highlights?: string[];
  stack?: string[];
}

export interface Capability {
  id: string;
  tag: string;
  title: string;
  description: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  type: 'experience' | 'education';
  description?: string;
  bullets?: string[];
  metrics?: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  year?: string;
}
