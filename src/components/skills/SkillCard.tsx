// src/components/skills/SkillCard.tsx

import React from 'react';
import { motion } from 'framer-motion';
import { FiClock, FiInfo } from 'react-icons/fi';
import HorizontalProgress from '../ui/HorizontalProgress';
import { SkillNode, SkillCategory } from '../../types/skills';
import IconComponent from './IconComponent';

interface SkillCardProps {
  skill: SkillNode;
  category: SkillCategory;
  levelToPercentage: (level: number) => number;
  getLevelLabel: (level: number) => string;
  onOpenDetail: (skill: SkillNode) => void;
  itemVariants: any;
}

const SkillCard: React.FC<SkillCardProps> = ({
  skill,
  category,
  levelToPercentage,
  getLevelLabel,
  onOpenDetail,
  itemVariants
}) => {
  return (
    <motion.div
      key={skill.id}
      variants={itemVariants}
      whileHover={{ scale: 1.02, boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)' }}
      className="bg-white dark:bg-gray-800 rounded-lg p-3 border border-gray-100 dark:border-gray-700 
        hover:border-gray-200 dark:hover:border-gray-600 transition-all duration-300"
    >
      <div className="flex items-center gap-2 mb-2">
        <div className={`w-7 h-7 rounded-md flex items-center justify-center p-1
          ${skill.category === 'frontend' ? 'bg-blue-50 dark:bg-blue-900/20' : ''}
          ${skill.category === 'backend' ? 'bg-green-50 dark:bg-green-900/20' : ''}
          ${skill.category === 'tools' ? 'bg-purple-50 dark:bg-purple-900/20' : ''}
          ${skill.category === 'embedded' ? 'bg-orange-50 dark:bg-orange-900/20' : ''}
          ${!['frontend', 'backend', 'tools', 'embedded'].includes(skill.category) ? 'bg-gray-100 dark:bg-gray-700' : ''}
        `}>
          <IconComponent skill={skill} />
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-medium text-gray-900 dark:text-white text-sm truncate">
            {skill.name}
          </h4>
          {skill.yearsExperience && (
            <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
              <FiClock className="w-2.5 h-2.5 mr-1" />
              <span>{skill.yearsExperience} {skill.yearsExperience === 1 ? 'año' : 'años'}</span>
            </div>
          )}
        </div>
      </div>
      
      {/* Barra de progreso */}
      <div className="mb-2">
        <HorizontalProgress 
          percentage={levelToPercentage(skill.level)} 
          height={4} 
          color={`var(--color-${category})`}
          label={getLevelLabel(skill.level)}
          showPercentage={false}
        />
      </div>
      
      {/* Botón de más detalles */}
      <button
        onClick={() => onOpenDetail(skill)}
        className="w-full mt-2 text-xs text-gray-500 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 
          flex items-center justify-center gap-1 py-1 transition-colors"
        aria-label={`Ver más detalles sobre ${skill.name}`}
      >
        <FiInfo className="w-3 h-3" />
        <span>Detalles</span>
      </button>
    </motion.div>
  );
};

export default SkillCard; 