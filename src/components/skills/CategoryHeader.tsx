// src/components/skills/CategoryHeader.tsx

import React from 'react';
import { CategoryConfig } from '../../types/skills';

interface CategoryHeaderProps {
  category: CategoryConfig;
}

const CategoryHeader: React.FC<CategoryHeaderProps> = ({ category }) => {
  return (
    <div className="flex items-center mb-4 space-x-3">
      <div className={`w-8 h-8 flex items-center justify-center rounded-lg bg-gradient-to-r ${category.colorClass} text-white`}>
        {category.icon}
      </div>
      <h3 className="text-lg font-bold text-gray-800 dark:text-white">
        {category.name}
      </h3>
      <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700 ml-2"></div>
    </div>
  );
};

export default CategoryHeader; 