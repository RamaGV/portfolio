import React from 'react';
import { motion } from 'framer-motion';

interface HorizontalProgressProps {
  percentage: number;
  height?: number;
  color?: string;
  label?: string;
  showLabel?: boolean;
  showPercentage?: boolean;
  className?: string;
}

const HorizontalProgress: React.FC<HorizontalProgressProps> = ({
  percentage,
  height = 8,
  color = '#3b82f6',
  label,
  showLabel = true,
  showPercentage = true,
  className = '',
}) => {
  // Asegurar que el porcentaje esté entre 0 y 100
  const clampedPercentage = Math.min(Math.max(percentage, 0), 100);
  
  return (
    <div className={`flex flex-col w-full ${className}`}>
      {/* Barra base y de progreso */}
      <div 
        className="w-full rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700"
        style={{ height: `${height}px` }}
      >
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${clampedPercentage}%` }}
          transition={{ 
            duration: 1, 
            ease: "easeOut",
            delay: 0.2
          }}
          className="h-full rounded-full"
          style={{ 
            background: `${color}`,
            boxShadow: `0 0 8px ${color}50` 
          }}
        />
      </div>
      
      {/* Etiqueta y porcentaje */}
      {(showLabel || showPercentage) && (
        <div className="flex justify-between items-center mt-1.5 text-xs">
          {showLabel && label ? (
            <span className="text-gray-700 dark:text-gray-300 font-medium">
              {label}
            </span>
          ) : (
            <span></span>
          )}
          
          {showPercentage && (
            <span className="text-gray-600 dark:text-gray-400 font-medium">
              {Math.round(clampedPercentage)}%
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default HorizontalProgress; 