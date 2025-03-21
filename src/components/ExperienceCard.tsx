import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiCalendar, 
  FiChevronRight, 
  FiMapPin, 
  FiChevronDown, 
  FiChevronUp,
  FiAward,
  FiList
} from 'react-icons/fi';
import { Experience } from '../types';

interface ExperienceCardProps {
  experience: Experience;
  isEven: boolean;
}

export const ExperienceCard = ({ experience, isEven }: ExperienceCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Calcular el período completo
  const period = `${experience.startDate} - ${experience.endDate}`;

  // Variantes para las animaciones
  const contentVariants = {
    collapsed: { 
      height: 0, 
      opacity: 0,
      transition: { duration: 0.4, ease: "easeInOut" } 
    },
    expanded: { 
      height: "auto", 
      opacity: 1,
      transition: { duration: 0.4, ease: "easeInOut", staggerChildren: 0.1 } 
    }
  };

  const itemVariants = {
    collapsed: { 
      opacity: 0, 
      y: 10,
      transition: { duration: 0.2 } 
    },
    expanded: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.3 } 
    }
  };

  return (
    <div className={`w-full bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 ${isExpanded ? 'shadow-lg' : ''}`}>
      {/* Encabezado de la tarjeta */}
      <div className="p-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{experience.title}</h3>
            <p className="text-primary-600 dark:text-primary-400 font-medium">{experience.company}</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 mt-3 md:mt-0">
            <div className="bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-200 text-sm font-medium py-1 px-3 rounded-full flex items-center whitespace-nowrap">
              <FiCalendar className="mr-1.5 h-3.5 w-3.5" />
              <span>{period}</span>
            </div>
            
            <div className="bg-gray-100 dark:bg-gray-700/50 text-gray-800 dark:text-gray-200 text-sm font-medium py-1 px-3 rounded-full flex items-center whitespace-nowrap">
              <FiMapPin className="mr-1.5 h-3.5 w-3.5" />
              <span>{experience.modality}</span>
            </div>
          </div>
        </div>
        
        {/* Resumen */}
        <p className="text-gray-600 dark:text-gray-300 mb-4">{experience.summary}</p>
        
        {/* Botón para expandir/colapsar */}
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center text-primary-600 dark:text-primary-400 font-medium hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
        >
          {isExpanded ? (
            <>
              <span>Mostrar menos</span>
              <FiChevronUp className="ml-1 h-4 w-4" />
            </>
          ) : (
            <>
              <span>Mostrar más</span>
              <FiChevronDown className="ml-1 h-4 w-4" />
            </>
          )}
        </button>
      </div>
      
      {/* Contenido expandible */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial="collapsed"
            animate="expanded"
            exit="collapsed"
            variants={contentVariants}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 space-y-6">
              {/* Línea divisoria con gradiente */}
              <div className="h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent"></div>
              
              {/* Responsabilidades */}
              {experience.responsibilities && experience.responsibilities.length > 0 && (
                <motion.div variants={itemVariants}>
                  <h4 className="flex items-center text-md font-semibold text-gray-900 dark:text-white mb-3">
                    <FiList className="mr-2 h-4 w-4 text-primary-500 dark:text-primary-400" />
                    Responsabilidades
                  </h4>
                  <ul className="space-y-2">
                    {experience.responsibilities.map((responsibility, index) => (
                      <li key={index} className="flex items-start">
                        <FiChevronRight className="h-4 w-4 text-primary-500 dark:text-primary-400 mt-1 flex-shrink-0" />
                        <span className="ml-2 text-gray-600 dark:text-gray-300">{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
              
              {/* Logros */}
              {experience.achievements && experience.achievements.length > 0 && (
                <motion.div variants={itemVariants}>
                  <h4 className="flex items-center text-md font-semibold text-gray-900 dark:text-white mb-3">
                    <FiAward className="mr-2 h-4 w-4 text-primary-500 dark:text-primary-400" />
                    Logros destacados
                  </h4>
                  <ul className="space-y-2">
                    {experience.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start">
                        <div className="mt-1 mr-2 flex-shrink-0 w-5 h-5 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-primary-500 dark:bg-primary-400"></div>
                        </div>
                        <span className="text-gray-600 dark:text-gray-300">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}; 