// src/components/skills/CategorySection.tsx

import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { CategoryConfig, SkillNode } from '../../types/skills';
import CategoryHeader from './CategoryHeader';
import SkillCard from './SkillCard';
import SkillsSkeleton from './SkillsSkeleton';

interface CategorySectionProps {
  category: CategoryConfig;
  skills: SkillNode[];
  isInView: boolean;
  itemVariants: any;
  levelToPercentage: (level: number) => number;
  getLevelLabel: (level: number) => string;
  onOpenDetail: (skill: SkillNode) => void;
  delay?: number;
}

const CategorySection: React.FC<CategorySectionProps> = ({
  category,
  skills,
  isInView,
  itemVariants,
  levelToPercentage,
  getLevelLabel,
  onOpenDetail,
  delay = 0.2
}) => {
  if (skills.length === 0) return null;
  
  return (
    <motion.div
      key={category.id}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay }}
      className="bg-white/50 dark:bg-gray-800/50 rounded-lg p-4 shadow-sm backdrop-blur-sm border border-gray-100 dark:border-gray-700"
    >
      <CategoryHeader category={category} />
      
      <Suspense fallback={<SkillsSkeleton />}>
        <div className="grid grid-cols-3 gap-3">
          {skills.map(skill => (
            <SkillCard
              key={skill.id}
              skill={skill}
              category={category.id}
              levelToPercentage={levelToPercentage}
              getLevelLabel={getLevelLabel}
              onOpenDetail={onOpenDetail}
              itemVariants={itemVariants}
            />
          ))}
        </div>
      </Suspense>
    </motion.div>
  );
};

export default CategorySection; 
