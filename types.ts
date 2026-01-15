import { LucideIcon } from "lucide-react";

export interface Project {
  id: number;
  title: string;
  category: 'Web' | 'Mobile' | 'Branding';
  image: string;
}

export interface Skill {
  name: string;
  level: number; // 0 to 100
  icon: string; // Placeholder string
}

export interface Experience {
  year: string;
  company: string;
  role: string;
  description: string;
}

export interface Testimonial {
  id: number;
  name: string;
  company: string;
  text: string;
  avatar: string;
}

export interface NavLink {
  label: string;
  href: string;
}