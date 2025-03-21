// src/components/sections/SkillsSection.tsx

import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiLayout, FiServer, FiTool, FiCpu } from 'react-icons/fi';
import React from 'react';

// Tipos
import { SkillNode, SkillUseCase, CategoryConfig } from '../types/skills';

// Componentes
import SectionHeader from '../components/skills/SectionHeader';
import CategorySection from '../components/skills/CategorySection';
import SkillDetailModal from '../components/skills/SkillDetailModal';

// Utilidades
import { levelToPercentage, getLevelLabel, filterExcludedSkills, groupSkillsByCategory } from '../utils/skillUtils';
import { containerVariants, itemVariants } from '../utils/animationVariants';

// Estilos CSS personalizados
const CustomCSS = () => (
  <style dangerouslySetInnerHTML={{ __html: `
    :root {
      --color-frontend: #3b82f6;
      --color-backend: #10b981;
      --color-tools: #8b5cf6;
      --color-embedded: #f59e0b;
    }
    
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-20px); }
    }
    
    .animate-float {
      animation: float 15s ease-in-out infinite;
    }
    
    @keyframes pulse-slow {
      0%, 100% { opacity: 0.3; }
      50% { opacity: 0.5; }
    }
    
    .animate-pulse-slow {
      animation: pulse-slow 10s ease-in-out infinite;
    }
  `}} />
);

interface SkillsSectionProps {
  skills: SkillNode[];
  useCases?: SkillUseCase[];
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ 
  skills: allSkills, 
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-100px" });
  
  // Habilidades a excluir
  const excludedSkillIds = [
    'framer', 'css', 'graphql', 'apollo', 'github', 'cicd', 'webpack', 'embedded-linux'
  ];
  
  // Filtrar las habilidades excluidas
  const skills = filterExcludedSkills(allSkills, excludedSkillIds);
  
  // Estados
  const [selectedSkill, setSelectedSkill] = useState<SkillNode | null>(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  
  // Categorías con configuración para visualización
  const categories: CategoryConfig[] = [
    { id: 'frontend', name: 'Frontend', icon: <FiLayout className="w-5 h-5" />, colorClass: 'from-blue-500 to-indigo-600 dark:from-blue-600 dark:to-indigo-700' },
    { id: 'backend', name: 'Backend', icon: <FiServer className="w-5 h-5" />, colorClass: 'from-green-500 to-teal-600 dark:from-green-600 dark:to-teal-700' },
    { id: 'tools', name: 'Herramientas', icon: <FiTool className="w-5 h-5" />, colorClass: 'from-purple-500 to-pink-600 dark:from-purple-600 dark:to-pink-700' },
    { id: 'embedded', name: 'Sistemas Embebidos', icon: <FiCpu className="w-5 h-5" />, colorClass: 'from-orange-500 to-red-600 dark:from-orange-600 dark:to-red-700' }
  ];

  // Agrupación de habilidades por categoría
  const skillsByCategory = groupSkillsByCategory(skills);

  // Funciones para modal de detalle
  const openDetailModal = (skill: SkillNode) => {
    setSelectedSkill(skill);
    setIsDetailModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeDetailModal = () => {
    setIsDetailModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  // Cleanup al desmontar
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  // Organizar las categorías en layout 2x2
  const topCategories = categories.slice(0, 2); // Frontend y Backend
  const bottomCategories = categories.slice(2); // Tools y Embedded

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="py-16 relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden section"
      aria-labelledby="skills-heading"
    >
      {/* Decoraciones de fondo */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent"></div>
      
      {/* Elementos de fondo con efecto de desenfoque */}
      <div className="absolute top-[30%] right-[20%] w-72 h-72 bg-primary-100 dark:bg-primary-900/20 rounded-full filter blur-3xl opacity-30 animate-pulse-slow"></div>
      <div className="absolute bottom-[30%] left-[20%] w-72 h-72 bg-secondary-100 dark:bg-secondary-900/20 rounded-full filter blur-3xl opacity-30 animate-float"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Encabezado de la sección */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <SectionHeader 
            title="Mis Habilidades Técnicas" 
            subtitle="Conjunto de tecnologías y conocimientos desarrollados a lo largo de mi carrera"
            itemVariants={itemVariants}
          />
        </motion.div>
        
        {/* Layout 2x2 de categorías */}
        <div className="space-y-8 mb-12">
          {/* Fila superior: Frontend y Backend */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {topCategories.map((category) => (
              <CategorySection
                key={category.id}
                category={category}
                skills={skillsByCategory[category.id] || []}
                isInView={isInView}
                itemVariants={itemVariants}
                levelToPercentage={levelToPercentage}
                getLevelLabel={getLevelLabel}
                onOpenDetail={openDetailModal}
                delay={0.2}
              />
            ))}
          </div>
          
          {/* Fila inferior: Tools y Embedded */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {bottomCategories.map((category) => (
              <CategorySection
                key={category.id}
                category={category}
                skills={skillsByCategory[category.id] || []}
                isInView={isInView}
                itemVariants={itemVariants}
                levelToPercentage={levelToPercentage}
                getLevelLabel={getLevelLabel}
                onOpenDetail={openDetailModal}
                delay={0.3}
              />
            ))}
          </div>
        </div>
        
        {/* Modal de detalle */}
        <SkillDetailModal
          isOpen={isDetailModalOpen}
          skill={selectedSkill}
          categories={categories}
          onClose={closeDetailModal}
          excludedSkillIds={excludedSkillIds}
          allSkills={skills}
          onSelectRelatedSkill={setSelectedSkill}
          getLevelLabel={getLevelLabel}
        />
      </div>
      
      {/* Estilos CSS personalizados */}
      <CustomCSS />
    </section>
  );
};

export default SkillsSection; 
