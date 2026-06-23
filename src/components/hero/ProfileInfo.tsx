// src/components/hero/ProfileInfo.tsx

import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiDatabase, FiLayers } from 'react-icons/fi';
import SkillCard from './SkillCard';

interface ProfileInfoProps {
  name: string;
  subtitle: string;
  typingText: string;
  inView: boolean;
}

const ProfileInfo: React.FC<ProfileInfoProps> = ({ name, subtitle, typingText, inView }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="order-2 lg:order-1 px-4 lg:px-8"
    >
      <div className="relative">
        {/* Componente de saludo */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-2 inline-block"
        >
          {/* <span className="bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-200 text-sm font-medium py-1 px-3 rounded-full">
            ¡Hola! 👋 Soy
          </span> */}
        </motion.div>
        
        {/* Componente de nombre */}
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 leading-tight"
        >
          {name}
        </motion.h1>
        
        {/* Texto de introducción */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="h-12 mb-6"
        >
          <h2 className="text-xl sm:text-2xl text-primary-600 dark:text-primary-400 font-semibold">
            <span className="typing-cursor">{">"}</span> {typingText}
            <span className="inline-block w-1.5 h-6 ml-1 bg-primary-600 dark:bg-primary-400 animate-pulse"></span>
          </h2>
        </motion.div>
        
        {/* Componente de texto de introducción */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-lg"
        >
          {subtitle}
        </motion.p>

        {/* Componente de tarjetas de habilidades */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6 mb-8"
        >
          <SkillCard 
            icon={<FiCode className="h-5 w-5" />}
            title="Frontend"
            skills="React, React Native"
            bgColor="bg-primary-100"
            textColor="text-primary-600"
            darkBgColor="dark:bg-primary-900/30"
            darkTextColor="dark:text-primary-400"
          />
          
          <SkillCard 
            icon={<FiDatabase className="h-5 w-5" />}
            title="Backend"
            skills="Node.js, Python"
            bgColor="bg-secondary-100"
            textColor="text-secondary-600"
            darkBgColor="dark:bg-secondary-900/30"
            darkTextColor="dark:text-secondary-400"
          />
          
          <SkillCard 
            icon={<FiLayers className="h-5 w-5" />}
            title="DevOps"
            skills="Docker, AWS"
            bgColor="bg-accent-100"
            textColor="text-accent-600"
            darkBgColor="dark:bg-accent-900/30"
            darkTextColor="dark:text-accent-400"
          />
        </motion.div>

        {/* Componente de botones de contacto */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-wrap gap-4"
        >
          {/* <a 
            href="#contact" 
            className="
                btn-primary inline-flex items-center px-6 py-3 
                font-medium text-sm rounded-lg 
                transition-all transform hover:scale-105
            "
          >
            <span>Contactar</span>
            <svg className="ml-2 -mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a> */}
          
          <a 
            href="#projects" 
            className="btn-secondary inline-flex items-center px-6 py-3 font-medium text-sm rounded-lg transition-all transform hover:scale-105"
          >
            <span>Ver Proyectos</span>
            <svg className="ml-2 -mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z" />
            </svg>
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProfileInfo; 
