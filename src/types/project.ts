export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  shortDescription: string;
  description: string;
  role: string;
  technologies: string[];
  features: string[];
  image: string;
  gallery?: string[];

  hkiNumber?: string;
  hkiApplicationNumber?: string;
  hkiUrl?: string;

  github?: string;
  demo?: string;
}