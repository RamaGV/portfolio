// src/components/skills/UseCaseCard.tsx

import React from 'react';
import { motion } from 'framer-motion';
import { SkillNode, SkillUseCase } from '../../types/skills';
import IconComponent from './IconComponent';

interface UseCaseCardProps {
  useCase: SkillUseCase;
  index: number;
  skills: SkillNode[];
  isInView: boolean;
  excludedSkillIds: string[];
  onOpenDetail: (skill: SkillNode) => void;
}

const UseCaseCard: React.FC<UseCaseCardProps> = ({
  useCase,
  index,
  skills,
  isInView,
  excludedSkillIds,
  onOpenDetail
}) => {
  // Gradientes y clases para distintos estilos según el índice
  const gradientColors = [
    "from-blue-500/10 to-indigo-600/5 dark:from-blue-600/20 dark:to-indigo-700/10",
    "from-green-500/10 to-teal-600/5 dark:from-green-600/20 dark:to-teal-700/10",
    "from-purple-500/10 to-pink-600/5 dark:from-purple-600/20 dark:to-pink-700/10",
    "from-orange-500/10 to-red-600/5 dark:from-orange-600/20 dark:to-red-700/10"
  ];
  
  // Iconos de fondo para mayor dimensión visual
  const bgIconClasses = [
    "top-4 right-4 w-32 h-32 text-blue-200/20 dark:text-blue-700/10",
    "bottom-4 right-4 w-32 h-32 text-green-200/20 dark:text-green-700/10",
    "top-4 left-4 w-32 h-32 text-purple-200/20 dark:text-purple-700/10", 
    "bottom-4 left-4 w-32 h-32 text-orange-200/20 dark:text-orange-700/10"
  ];

  // Verificar que hay habilidades válidas (no excluidas)
  const hasValidSkills = useCase.skills.some(skillId => !excludedSkillIds.includes(skillId));
  if (!hasValidSkills) return null;
  
  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 10 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
      transition={{ duration: 0.4, delay: 0.4 + (index * 0.1) }}
      className={`relative overflow-hidden bg-gradient-to-br ${gradientColors[index % gradientColors.length]} 
        backdrop-blur-sm rounded-xl shadow-sm border border-gray-100/80 dark:border-gray-700/80 p-6 
        hover:shadow-md transition-all duration-300 group`}
    >
      {/* Icono de fondo */}
      <div className={`absolute opacity-80 transform -rotate-6 group-hover:rotate-0 transition-transform duration-500 ${bgIconClasses[index % bgIconClasses.length]}`}>
        {useCase.icon}
      </div>
      
      <div className="relative z-10">
        <div className="flex items-start mb-4">
          <div className="w-10 h-10 rounded-lg bg-white dark:bg-gray-800 shadow-sm flex items-center justify-center text-primary-600 dark:text-primary-400 mr-4">
            {useCase.icon}
          </div>
          
          <div>
            <h4 className="text-base md:text-lg font-bold text-gray-900 dark:text-white mb-2">
              {useCase.title}
            </h4>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              {useCase.description}
            </p>
          </div>
        </div>
        
        <div className="pt-3 border-t border-gray-200/50 dark:border-gray-700/50">
          <h5 className="text-xs uppercase font-medium text-gray-700 dark:text-gray-300 mb-3 tracking-wider">
            Habilidades utilizadas
          </h5>
          <div className="flex flex-wrap gap-2">
            {useCase.skills.map(skillId => {
              // Saltar habilidades excluidas
              if (excludedSkillIds.includes(skillId)) return null;
              
              const skill = skills.find(s => s.id === skillId);
              if (!skill) return null;
              
              return (
                <button
                  key={skillId}
                  onClick={() => onOpenDetail(skill)}
                  className="inline-flex items-center px-3 py-1 text-xs bg-white dark:bg-gray-800 
                    rounded-full border border-gray-100 dark:border-gray-700 hover:bg-gray-50 
                    dark:hover:bg-gray-700 transition-colors shadow-sm"
                  aria-label={`Ver detalles de ${skill.name}`}
                >
                  <div className="mr-1.5">
                    <IconComponent skill={skill} size="small" />
                  </div>
                  <span className="font-medium">{skill.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default UseCaseCard; 