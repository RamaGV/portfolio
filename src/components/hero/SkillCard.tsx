// src/components/hero/SkillCard.tsx

import React from 'react';

interface SkillCardProps {
  icon: React.ReactElement;
  title: string;
  skills: string;
  bgColor: string;
  textColor: string;
  darkBgColor: string;
  darkTextColor: string;
}

const SkillCard: React.FC<SkillCardProps> = ({
  icon,
  title,
  skills,
  bgColor,
  textColor,
  darkBgColor,
  darkTextColor
}) => {
  return (
    <div className="flex items-center space-x-2 bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm hover:shadow-md transition-all border border-gray-100 dark:border-gray-700">
      <div className={`p-2 rounded-md ${bgColor} ${darkBgColor} ${textColor} ${darkTextColor}`}>
        {icon}
      </div>
      <div>
        <h3 className="font-medium text-gray-900 dark:text-white text-sm">{title}</h3>
        <p className="text-xs text-gray-500 dark:text-gray-400">{skills}</p>
      </div>
    </div>
  );
};

export default SkillCard; 
