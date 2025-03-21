// src/components/hero/ProfileImage.tsx

import React from 'react';
import { motion } from 'framer-motion';

interface ProfileImageProps {
  name: string;
  location: string;
  inView: boolean;
}

const ProfileImage: React.FC<ProfileImageProps> = ({ name, location, inView }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="order-1 lg:order-2 flex justify-center lg:justify-end px-4 lg:px-8 relative"
    >
      <div className="relative">
        {/* Sombra superior izquierda */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="absolute -top-6 -left-6 w-20 h-20 bg-primary-200 dark:bg-primary-800/50 rounded-full z-0"
        ></motion.div>
        
        {/* Sombra inferior derecha */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="absolute -bottom-6 -right-6 w-24 h-24 bg-secondary-200 dark:bg-secondary-800/50 rounded-full z-0"
        ></motion.div>
        
        {/* Decoraciones de paréntesis de código */}
        <motion.div
          initial={{ x: -10, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : { x: -10, opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="absolute -left-8 top-1/2 -translate-y-1/2 text-5xl text-primary-300 dark:text-primary-700 font-mono font-bold z-10"
        >
          {"{"}
        </motion.div> 
        <motion.div
          initial={{ x: 10, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : { x: 10, opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="absolute -right-8 top-1/2 -translate-y-1/2 text-5xl text-primary-300 dark:text-primary-700 font-mono font-bold z-10"
        >
          {"}"}
        </motion.div>
        
        {/* Componente de imagen de perfil */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative z-10"
        >
          <div className="
            w-64 h-64 sm:w-80 sm:h-80 rounded-2xl overflow-hidden 
            border-4 border-white dark:border-gray-800 shadow-2xl 
            transform rotate-3 hover:rotate-0 transition-all duration-300"
          >
            <img 
              src="/profile.jpg" 
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
        
        {/* Componente de ubicación */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 px-4 py-2 rounded-lg shadow-lg border-2 border-primary-200 dark:border-primary-800 z-20"
        >
          <div className="flex items-center">
            <div className="relative mr-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full absolute top-0 animate-ping opacity-75"></div>
            </div>
            <span className="font-medium text-gray-900 dark:text-white text-sm">{location}</span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProfileImage; 
