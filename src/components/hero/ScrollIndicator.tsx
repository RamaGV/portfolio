// src/components/hero/ScrollIndicator.tsx

import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowDown } from 'react-icons/fi';

interface ScrollIndicatorProps {
  inView: boolean;
}

const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({ inView }) => {
  return (
    <motion.a
      href="#about"
      initial={{ opacity: 0, y: -10 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
      transition={{ duration: 0.6, delay: 1, repeat: Infinity, repeatType: "reverse" }}
      className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center justify-center z-20"
    >
      <span className="text-sm text-gray-500 dark:text-gray-400 mb-2">Scroll</span>
      <FiArrowDown className="w-5 h-5 text-primary-600 dark:text-primary-400" />
    </motion.a>
  );
};

export default ScrollIndicator; 
