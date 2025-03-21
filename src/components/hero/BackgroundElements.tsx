// src/components/hero/BackgroundElements.tsx

import React from 'react';

const BackgroundElements: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Sombra superior derecha */}
      <div className="absolute top-1/4 right-[10%] w-64 h-64 bg-primary-100 dark:bg-primary-900/20 rounded-full filter blur-3xl opacity-50"></div>
      {/* Sombra inferior izquierda */}
      <div className="absolute bottom-1/4 left-[10%] w-64 h-64 bg-secondary-100 dark:bg-secondary-900/20 rounded-full filter blur-3xl opacity-50"></div>
      {/* Sombra central */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent-100 dark:bg-accent-900/10 rounded-full filter blur-3xl opacity-30"></div>
    </div>
  );
};

export default BackgroundElements; 
