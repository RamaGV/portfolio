// src/components/about/RevealSection.tsx

import React, { useRef } from 'react';
import { motion, useInView, Variants } from 'framer-motion';

interface RevealSectionProps {
  title: string;
  children: React.ReactNode;
  align?: 'left' | 'right' | 'center';
  delay?: number;
}

const RevealSection: React.FC<RevealSectionProps> = ({ 
  title, 
  children, 
  align = 'left', 
  delay = 0 
}) => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-100px" });
  
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: delay,
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const alignmentClasses = {
    left: "items-start text-left",
    right: "items-end text-right",
    center: "items-center text-center"
  };

  return (
    <motion.div
      ref={sectionRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className={`flex flex-col ${alignmentClasses[align]} mb-12`}
    >
      <motion.div variants={itemVariants} className="mb-2">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white inline-block border-b-2 border-primary-500 dark:border-primary-400 pb-1">
          {title}
        </h3>
      </motion.div>
      
      <motion.div variants={itemVariants} className="w-full">
        {children}
      </motion.div>
    </motion.div>
  );
};

export default RevealSection; 