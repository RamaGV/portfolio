// src/components/skills/SkillsSkeleton.tsx

import React from 'react';

const SkeletonLoader = () => (
  <div className="animate-pulse flex space-x-2">
    <div className="rounded-full bg-gray-200 dark:bg-gray-700 h-8 w-8"></div>
    <div className="flex-1 space-y-1 py-1">
      <div className="h-2.5 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded"></div>
    </div>
  </div>
);

const SkillsSkeleton: React.FC = () => {
  return (
    <div className="grid grid-cols-3 gap-3">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="bg-white dark:bg-gray-800 rounded-lg p-3 shadow-sm">
          <SkeletonLoader />
        </div>
      ))}
    </div>
  );
};

export default SkillsSkeleton; 