// src/components/skills/SectionHeader.tsx

import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  itemVariants: any;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, itemVariants }) => {
  return (
    <div className="flex flex-col items-center mb-8 text-center">
      <motion.h2 
        id="skills-heading"
        variants={itemVariants} 
        className="heading-2 text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4"
      >
        {title}
      </motion.h2>
      
      <motion.div 
        variants={itemVariants}
        className="w-20 h-1.5 bg-gradient-to-r from-primary-500 to-secondary-500 dark:from-primary-400 dark:to-secondary-400 rounded-full mb-5"
      ></motion.div>
      
      <motion.p 
        variants={itemVariants}
        className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl"
      >
        {subtitle}
      </motion.p>
    </div>
  );
};

export default SectionHeader; 