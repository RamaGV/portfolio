import { FC, ReactNode } from 'react';

interface SectionContainerProps {
  id: string;
  className?: string;
  children: ReactNode;
}

export const SectionContainer: FC<SectionContainerProps> = ({ 
  id, 
  className = '',
  children
}) => {
  return (
    <section 
      id={id}
      className={`
        py-20 relative bg-gradient-to-br from-gray-50 to-white 
        dark:from-gray-900 dark:to-gray-800 overflow-hidden section
        ${className}
      `.trim()}
    >
      {/* Separadores superiores e inferiores */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent"></div>
      
      {/* Elementos de fondo con blur */}
      <div className="absolute top-[15%] right-[10%] w-72 h-72 bg-primary-100 dark:bg-primary-900/20 rounded-full filter blur-3xl opacity-50"></div>
      <div className="absolute bottom-[15%] left-[10%] w-72 h-72 bg-secondary-100 dark:bg-secondary-900/20 rounded-full filter blur-3xl opacity-50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {children}
      </div>
    </section>
  );
}; 