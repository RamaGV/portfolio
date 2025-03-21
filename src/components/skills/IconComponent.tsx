// src/components/skills/IconComponent.tsx

import React, { useState } from 'react';
import { FiCode } from 'react-icons/fi';
import { skillIcons } from '../../data/skillIcons';
import { SkillNode } from '../../types/skills';

interface IconComponentProps {
  skill: SkillNode;
  size?: 'small' | 'normal' | 'large';
}

const IconComponent: React.FC<IconComponentProps> = ({ skill, size = 'normal' }) => {
  const [useReactIcon, setUseReactIcon] = useState(false);
  
  const sizeClasses = {
    small: 'w-3.5 h-3.5',
    normal: 'w-full h-full',
    large: 'w-10 h-10'
  };
  
  const skillIconData = skillIcons[skill.id] || skillIcons[skill.name.toLowerCase()];
  const IconComponent = (skillIconData?.icon || FiCode) as React.ComponentType<{ className: string; 'aria-hidden'?: string }>;
  const iconColor = skillIconData?.color || 'text-gray-500';
  
  if (useReactIcon || !skill.icon) {
    return (
      <div className={`${sizeClasses[size]} flex items-center justify-center`}>
        <IconComponent className={`${sizeClasses[size]} ${iconColor}`} aria-hidden="true" />
      </div>
    );
  }
  
  return (
    <div className={`${sizeClasses[size]} relative flex items-center justify-center`}>
      <img 
        src={skill.icon} 
        alt=""
        className={`${sizeClasses[size]} object-contain`}
        onError={() => setUseReactIcon(true)}
        aria-hidden="true"
      />
    </div>
  );
};

export default IconComponent; 