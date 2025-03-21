// src/components/about/FloatingElements.tsx

import React from 'react';
import { motion } from 'framer-motion';

interface FloatingElementProps {
  isInView: boolean;
}

const FloatingElements: React.FC<FloatingElementProps> = ({ isInView }) => {
  // Elementos flotantes para el diseño asimétrico
  const floatingElements = [
    { top: '10%', left: '5%', size: 'w-16 h-16', color: 'bg-primary-200/50 dark:bg-primary-800/30', delay: 0 },
    { top: '60%', right: '8%', size: 'w-24 h-24', color: 'bg-secondary-200/50 dark:bg-secondary-800/30', delay: 0.2 },
    { top: '30%', right: '15%', size: 'w-12 h-12', color: 'bg-accent-200/50 dark:bg-accent-800/30', delay: 0.4 },
    { top: '80%', left: '12%', size: 'w-20 h-20', color: 'bg-primary-300/50 dark:bg-primary-700/30', delay: 0.6 }
  ];

  return (
    <>
      {/* Elementos flotantes para diseño asimétrico */}
      {floatingElements.map((el, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={isInView ? { 
            opacity: 0.7, 
            scale: 1,
            y: [0, -10, 0],
            x: [0, 5, 0]
          } : { opacity: 0, scale: 0.5 }}
          transition={{ 
            duration: 5, 
            repeat: Infinity, 
            repeatType: "reverse",
            delay: el.delay
          }}
          className={`absolute ${el.size} ${el.color} rounded-full blur-lg z-0`}
          style={{ 
            top: el.top, 
            left: el.left, 
            right: el.right 
          }}
        />
      ))}
      
      {/* Decoraciones de borde */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent"></div>
    </>
  );
};

export default FloatingElements; 
