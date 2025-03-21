// src/components/about/CallToAction.tsx

import React from 'react';
import { motion } from 'framer-motion';

interface CallToActionProps {
  isInView: boolean;
  text: string;
  href: string;
}

const CallToAction: React.FC<CallToActionProps> = ({ isInView, text, href }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      className="flex justify-center"
    >
      <a 
        href={href} 
        className="btn-primary inline-flex items-center px-6 py-3 font-medium text-base rounded-lg transition-all transform hover:scale-105"
      >
        <span>{text}</span>
        <svg className="ml-2 -mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </a>
    </motion.div>
  );
};

export default CallToAction; 
