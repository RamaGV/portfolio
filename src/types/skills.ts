// src/types/skills.ts

import { ReactNode } from 'react';

export type SkillCategory = 'frontend' | 'backend' | 'tools' | 'embedded';

export interface SkillNode {
  id: string;
  name: string;
  icon: string;
  level: number; // 1-5 donde 5 es 100%
  category: SkillCategory;
  description: string;
  relatedSkills: string[]; // IDs de habilidades relacionadas
  yearsExperience?: number;
  keyProjects?: string[];
}

export interface SkillUseCase {
  title: string;
  description: string;
  skills: string[]; // IDs de habilidades usadas
  icon: ReactNode;
}

export interface CategoryConfig {
  id: SkillCategory;
  name: string;
  icon: ReactNode;
  colorClass: string;
} 