// src/components/sections/AboutSection.tsx

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { FiCode, FiCheck, FiExternalLink } from 'react-icons/fi';

interface AboutSectionProps {
  personalInfo: {
    name: string;
    bio: string;
    yearsOfExperience: number;
    completedProjects: number;
    skillCount: number;
  };
}

const AboutSection = ({ personalInfo }: AboutSectionProps) => {
  const aboutRef = useRef(null);
  const isInView = useInView(aboutRef, { once: false, margin: "-100px" });
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section 
      id="about" 
      ref={aboutRef} 
      className="py-20 relative bg-white dark:bg-gray-900 overflow-hidden section"
    >
      {/* Background decorations */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent"></div>
      
      {/* Background blur elements */}
      <div className="absolute top-[10%] left-[5%] w-72 h-72 bg-primary-100 dark:bg-primary-900/20 rounded-full filter blur-3xl opacity-50"></div>
      <div className="absolute bottom-[10%] right-[5%] w-72 h-72 bg-secondary-100 dark:bg-secondary-900/20 rounded-full filter blur-3xl opacity-50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col items-center mb-12 text-center"
        >
          <motion.h2 
            variants={itemVariants} 
            className="heading-2 text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Sobre Mí
          </motion.h2>
          
          <motion.div 
            variants={itemVariants}
            className="w-20 h-1.5 bg-primary-500 dark:bg-primary-400 rounded-full mb-6"
          ></motion.div>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl"
          >
            Soy un apasionado ingeniero de sistemas y desarrollador web, enfocado en crear soluciones tecnológicas elegantes y funcionales.
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
          {/* Profile Image Column */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2 flex justify-center"
          >
            <div className="relative max-w-md">
              {/* Code frame around image */}
              <div className="absolute -top-3 -left-3 right-3 bottom-3 border-2 border-primary-400 dark:border-primary-600 rounded-xl z-0"></div>
              
              {/* Status badge */}
              <div className="absolute -top-5 -right-5 bg-white dark:bg-gray-800 px-3 py-1 rounded-lg shadow-md border-2 border-primary-200 dark:border-primary-800 z-20">
                <div className="flex items-center space-x-2">
                  <div className="relative">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full absolute top-0 animate-ping opacity-75"></div>
                  </div>
                  <span className="font-medium text-gray-900 dark:text-white text-sm">Disponible</span>
                </div>
              </div>
              
              {/* Developer info */}
              <div className="absolute -bottom-5 -left-5 bg-white dark:bg-gray-800 px-3 py-1 rounded-lg shadow-md border-2 border-primary-200 dark:border-primary-800 z-20">
                <div className="flex items-center space-x-2">
                  <FiCode className="text-primary-500 dark:text-primary-400" />
                  <span className="font-medium text-gray-900 dark:text-white text-sm">Desarrollador Web</span>
                </div>
              </div>
              
              {/* Main profile image */}
              <div className="relative z-10 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg">
                <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
                  <img 
                    src="/profile.jpg"
                    alt={personalInfo.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://via.placeholder.com/400x400?text=RV';
                    }}
                  />
                </div>
                
                {/* Code comments overlay */}
                <div className="absolute top-2 left-0 right-0 flex justify-center">
                  <div className="bg-white/90 dark:bg-gray-800/90 px-3 py-1 rounded-md text-xs font-mono text-gray-700 dark:text-gray-300">
                    /* Full Stack Developer */
                  </div>
                </div>
                
                <div className="absolute bottom-6 left-0 right-0 flex justify-center">
                  <div className="bg-white/90 dark:bg-gray-800/90 px-3 py-1 rounded-md text-xs font-mono text-gray-700 dark:text-gray-300">
                    // Ingeniería de Sistemas
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Content Column */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="lg:col-span-3"
          >
            {/* Quick stats */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8"
            >
              <div className="card bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 text-center">
                <h3 className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">{personalInfo.yearsOfExperience}+</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Años de Experiencia</p>
              </div>
              <div className="card bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 text-center">
                <h3 className="text-3xl font-bold text-secondary-600 dark:text-secondary-400 mb-2">{personalInfo.completedProjects}+</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Proyectos Completados</p>
              </div>
              <div className="card bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 text-center">
                <h3 className="text-3xl font-bold text-accent-600 dark:text-accent-400 mb-2">{personalInfo.skillCount}+</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Tecnologías Dominadas</p>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                ¿Quién soy?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {personalInfo.bio}
              </p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Mi Trayectoria
              </h3>
              
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <FiCheck className="h-5 w-5 text-primary-500 dark:text-primary-400" />
                  </div>
                  <div className="ml-3">
                    <p className="text-gray-600 dark:text-gray-300">
                      Graduado en <span className="font-medium text-gray-900 dark:text-white">Ingeniería de Sistemas</span>, combinando conocimientos teóricos sólidos con aplicaciones prácticas.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <FiCheck className="h-5 w-5 text-primary-500 dark:text-primary-400" />
                  </div>
                  <div className="ml-3">
                    <p className="text-gray-600 dark:text-gray-300">
                      Especializado en <span className="font-medium text-gray-900 dark:text-white">desarrollo web full stack</span>, con experiencia en múltiples frameworks y tecnologías.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <FiCheck className="h-5 w-5 text-primary-500 dark:text-primary-400" />
                  </div>
                  <div className="ml-3">
                    <p className="text-gray-600 dark:text-gray-300">
                      Experiencia en <span className="font-medium text-gray-900 dark:text-white">metodologías ágiles</span> y colaboración efectiva en equipos multidisciplinarios.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <div className="flex flex-wrap gap-3 mt-8">
                <a 
                  href="#contact" 
                  className="btn-primary inline-flex items-center px-6 py-3 text-sm font-medium rounded-lg transition-all transform hover:scale-105"
                >
                  Contactar
                </a>
                
                <a 
                  href="/CV-Ramiro-Vazquez.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-secondary inline-flex items-center px-6 py-3 text-sm font-medium rounded-lg transition-all transform hover:scale-105"
                >
                  <span>Descargar CV</span>
                  <FiExternalLink className="ml-2 -mr-1 w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 
