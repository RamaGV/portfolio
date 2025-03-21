// src/utils/skillUtils.ts

import { SkillCategory, SkillNode } from '../types/skills';

/**
 * Convierte el nivel de habilidad (1-5) a porcentaje (0-100)
 */
export const levelToPercentage = (level: number): number => (level / 5) * 100;

/**
 * Devuelve la etiqueta correspondiente al nivel de habilidad
 */
export const getLevelLabel = (level: number): string => {
  if (level >= 5) return 'Experto';
  if (level >= 4) return 'Avanzado';
  if (level >= 3) return 'Intermedio';
  if (level >= 2) return 'Básico';
  return 'Principiante';
};

/**
 * Agrupa las habilidades por categoría
 */
export const groupSkillsByCategory = (skills: SkillNode[]): Record<SkillCategory, SkillNode[]> => {
  return skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<SkillCategory, SkillNode[]>);
};

/**
 * Filtra las habilidades excluyendo las que están en la lista
 */
export const filterExcludedSkills = (skills: SkillNode[], excludedIds: string[]): SkillNode[] => {
  return skills.filter(skill => !excludedIds.includes(skill.id));
}; 