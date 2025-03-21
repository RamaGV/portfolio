// src/components/about/SectionHeader.tsx

import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  isInView: boolean;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, isInView }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center mb-16 text-center"
    >
      <h2 className="heading-2 text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
        {title}
      </h2>
      
      <div className="w-20 h-1.5 bg-primary-500 dark:bg-primary-400 rounded-full mb-6"></div>
      
      <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl">
        {subtitle}
      </p>
    </motion.div>
  );
};

export default SectionHeader; 
