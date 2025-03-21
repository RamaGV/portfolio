import { useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { EducationCard } from '../components/EducationCard';
import { Education } from '../types';
import { FiBook, FiArrowRight } from 'react-icons/fi';

interface EducationSectionProps {
  education: Education[];
}

const EducationSection = ({ education }: EducationSectionProps) => {
  const educationRef = useRef(null);
  const isInView = useInView(educationRef, { once: false, margin: "-100px" });
  
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
      id="education" 
      ref={educationRef}
      className="py-20 relative bg-white dark:bg-gray-900 overflow-hidden section"
    >
      {/* Background decorations */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent"></div>
      
      {/* Background blur elements */}
      <div className="absolute top-[20%] right-[10%] w-72 h-72 bg-secondary-100 dark:bg-secondary-900/20 rounded-full filter blur-3xl opacity-40"></div>
      <div className="absolute bottom-[20%] left-[10%] w-72 h-72 bg-primary-100 dark:bg-primary-900/20 rounded-full filter blur-3xl opacity-40"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col items-center mb-16 text-center"
        >
          <motion.h2 
            variants={itemVariants} 
            className="heading-2 text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Educación
          </motion.h2>
          
          <motion.div 
            variants={itemVariants}
            className="w-24 h-1.5 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mb-6"
          ></motion.div>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl"
          >
            Mi formación académica y certificaciones en el ámbito tecnológico.
          </motion.p>
        </motion.div>
        
        {/* Education timeline */}
        <div className="relative">
          {/* Timeline line - Con degradado similar a experiencia */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-secondary-200 via-secondary-400 to-primary-400 dark:from-secondary-900 dark:via-secondary-700 dark:to-primary-700 transform -translate-x-1/2"></div>
          
          {/* Education cards */}
          <AnimatePresence mode="wait">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-10 md:space-y-16"
            >
              {education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.6, delay: 0.2 + (index * 0.1) }}
                  className="relative"
                >
                  {/* Estructura diferente para desktop y móvil */}
                  <div className={`md:flex ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                    {/* Punto de la línea temporal (solo en desktop) */}
                    <div className="hidden md:block absolute left-1/2 top-8 transform -translate-x-1/2 z-10">
                      <div className="w-10 h-10 rounded-full border-4 border-white dark:border-gray-900 bg-secondary-500 dark:bg-secondary-600 shadow-lg flex items-center justify-center">
                        <FiBook className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    
                    {/* Fecha destacada para móvil */}
                    <div className="md:hidden flex items-center space-x-2 mb-3">
                      <div className="w-8 h-8 rounded-full bg-secondary-500 dark:bg-secondary-600 shadow-md flex items-center justify-center">
                        <FiBook className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-lg font-semibold text-secondary-600 dark:text-secondary-400">
                        {edu.period}
                      </span>
                    </div>
                    
                    {/* Tarjeta de educación */}
                    <div className={`md:w-[48%] z-20 ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}>
                      <EducationCard education={edu} />
                    </div>
                    
                    {/* Flecha conectora (solo desktop) */}
                    <div className={`hidden md:block absolute top-8 ${index % 2 === 0 ? 'left-[48%] -translate-x-full' : 'right-[48%] translate-x-full'}`}>
                      <FiArrowRight className={`w-6 h-6 text-secondary-500 dark:text-secondary-400 ${index % 2 === 1 ? 'transform rotate-180' : ''}`} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default EducationSection; 