    // src/components/sections/ExperienceSection.tsx

import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { FiBriefcase, FiClock, FiArrowRight } from 'react-icons/fi';
import { ExperienceCard } from '../components/ExperienceCard';
import { Experience } from '../types';
import { experiences } from '../data/experiences';

interface ExperienceSectionProps {
  experiences?: Experience[];
}

const ExperienceSection = ({ experiences: propExperiences }: ExperienceSectionProps) => {
  // Usar las experiencias proporcionadas por props o las del archivo de datos
  const experienceData = propExperiences || experiences;
  
  const experienceRef = useRef(null);
  const isInView = useInView(experienceRef, { once: false, margin: "-100px" });
  
  const [selectedPeriod, setSelectedPeriod] = useState<string | null>(null);
  
  // Calcular períodos de tiempo para los filtros
  const allPeriods = experienceData.map(exp => {
    const year = exp.startDate.split(" ")[1];
    return year;
  });
  
  const uniquePeriods = [...new Set(allPeriods)].sort((a, b) => Number(b) - Number(a));
  
  // Filtrar experiencias por período seleccionado
  const filteredExperiences = selectedPeriod 
    ? experienceData.filter(exp => exp.startDate.includes(selectedPeriod))
    : experienceData;
  
  // Animación de contenedor
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  
  // Animación de elementos
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
      id="experience" 
      ref={experienceRef}
      className="py-20 relative bg-white dark:bg-gray-900 overflow-hidden section"
    >
      {/* Decoraciones de fondo */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent"></div>
      
      {/* Elementos de fondo con blur */}
      <div className="absolute top-[20%] left-[10%] w-72 h-72 bg-primary-100 dark:bg-primary-900/20 rounded-full filter blur-3xl opacity-40"></div>
      <div className="absolute bottom-[20%] right-[10%] w-72 h-72 bg-secondary-100 dark:bg-secondary-900/20 rounded-full filter blur-3xl opacity-40"></div>
      
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
            Mi Experiencia Profesional
          </motion.h2>
          
          <motion.div 
            variants={itemVariants}
            className="w-24 h-1.5 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mb-6"
          ></motion.div>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl"
          >
            Mi trayectoria como desarrollador y las habilidades que he adquirido a lo largo de estos años
          </motion.p>
        </motion.div>
        
        {/* Filtros por año (opcional si hay varios años) */}
        {uniquePeriods.length > 1 && (
          <div className="flex justify-center mb-12 overflow-x-auto no-scrollbar">
            <div className="inline-flex items-center space-x-2 p-1 bg-gray-100 dark:bg-gray-800 rounded-lg">
              <button
                onClick={() => setSelectedPeriod(null)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  selectedPeriod === null 
                    ? 'bg-white dark:bg-gray-700 text-primary-600 dark:text-primary-400 shadow-sm' 
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                <FiClock className="inline mr-1.5 h-3.5 w-3.5" />
                Todos
              </button>
              
              {uniquePeriods.map(period => (
                <button
                  key={period}
                  onClick={() => setSelectedPeriod(period)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                    selectedPeriod === period 
                      ? 'bg-white dark:bg-gray-700 text-primary-600 dark:text-primary-400 shadow-sm' 
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  {period}
                </button>
              ))}
            </div>
          </div>
        )}
        
        {/* Línea de tiempo de experiencia */}
        <div className="relative">
          {/* Línea temporal visible solo en pantallas medianas o más grandes */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-200 via-primary-400 to-secondary-400 dark:from-primary-900 dark:via-primary-700 dark:to-secondary-700 transform -translate-x-1/2"></div>
          
          {/* Tarjetas de experiencia */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedPeriod || 'all'}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-10 md:space-y-16"
            >
              {filteredExperiences.map((experience, index) => (
                <motion.div
                  key={experience.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.6, delay: 0.2 + (index * 0.1) }}
                  className="relative"
                >
                  {/* Estructura diferente para desktop y móvil */}
                  <div className={`md:flex ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                    {/* Punto de la línea temporal (solo en desktop) */}
                    <div className="hidden md:block absolute left-1/2 top-8 transform -translate-x-1/2 z-10">
                      <div className="w-10 h-10 rounded-full border-4 border-white dark:border-gray-900 bg-primary-500 dark:bg-primary-600 shadow-lg flex items-center justify-center">
                        <FiBriefcase className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    
                    {/* Fecha destacada para móvil */}
                    <div className="md:hidden flex items-center space-x-2 mb-3">
                      <div className="w-8 h-8 rounded-full bg-primary-500 dark:bg-primary-600 shadow-md flex items-center justify-center">
                        <FiBriefcase className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-lg font-semibold text-primary-600 dark:text-primary-400">
                        {experience.startDate} - {experience.endDate}
                      </span>
                    </div>
                    
                    {/* Tarjeta de experiencia */}
                    <div className={`md:w-[48%] z-20 ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}>
                      <ExperienceCard experience={experience} />
                    </div>
                    
                    {/* Flecha conectora (solo desktop) */}
                    <div className={`hidden md:block absolute top-8 ${index % 2 === 0 ? 'left-[48%] -translate-x-full' : 'right-[48%] translate-x-full'}`}>
                      <FiArrowRight className={`w-6 h-6 text-primary-500 dark:text-primary-400 ${index % 2 === 1 ? 'transform rotate-180' : ''}`} />
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

export default ExperienceSection; 
