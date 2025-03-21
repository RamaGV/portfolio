// src/components/about/ProfileCard.tsx

import React from 'react';
import { motion } from 'framer-motion';

interface ProfileCardProps {
  name: string;
  isInView: boolean;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ name, isInView }) => {
  return (
    <div className="relative mb-8">
      <div className="absolute -top-3 -left-3 right-3 bottom-3 border-2 border-primary-400 dark:border-primary-600 rounded-xl z-0"></div>
      
      <div className="relative z-10 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg">
        <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden">
          <img 
            src="/profile.jpg"
            alt={name}
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = 'https://via.placeholder.com/400x300?text=Mi+Foto';
            }}
            loading="lazy"
          />
        </div>
      </div>
      
      {/* Badge de disponibilidad */}
      <motion.div 
        className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 px-4 py-2 rounded-lg shadow-md border-2 border-green-200 dark:border-green-800 z-20"
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex items-center space-x-2">
          <div className="relative">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full absolute top-0 animate-ping opacity-75"></div>
          </div>
          <span className="font-medium text-gray-900 dark:text-white text-sm">Disponible para proyectos</span>
        </div>
      </motion.div>
    </div>
  );
};

export default ProfileCard; 