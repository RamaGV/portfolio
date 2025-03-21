// src/components/skills/SkillDetailModal.tsx

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiCheck, FiClock } from 'react-icons/fi';
import { SkillNode, CategoryConfig } from '../../types/skills';
import IconComponent from './IconComponent';

interface SkillDetailModalProps {
  isOpen: boolean;
  skill: SkillNode | null;
  categories: CategoryConfig[];
  onClose: () => void;
  excludedSkillIds: string[];
  allSkills: SkillNode[];
  onSelectRelatedSkill: (skill: SkillNode) => void;
  getLevelLabel: (level: number) => string;
}

const SkillDetailModal: React.FC<SkillDetailModalProps> = ({
  isOpen,
  skill,
  categories,
  onClose,
  excludedSkillIds,
  allSkills,
  onSelectRelatedSkill,
  getLevelLabel,
}) => {
  if (!skill) return null;

  const categoryConfig = categories.find(c => c.id === skill.category);
  
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center px-4 backdrop-blur-sm bg-black/50"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-labelledby="skill-detail-title"
        >
          <motion.div
            initial={{ scale: 0.9, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 20, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Encabezado del modal */}
            <div className={`p-6 border-b border-gray-100 dark:border-gray-700 bg-gradient-to-r 
              ${categoryConfig?.colorClass} text-white relative`}>
              <button 
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                aria-label="Cerrar modal"
              >
                <FiX className="w-5 h-5" />
              </button>
              
              <div className="flex items-center gap-4">
                <div className={`w-16 h-16 rounded-xl p-3 backdrop-blur-sm
                  ${skill.category === 'frontend' ? 'bg-blue-100/70 dark:bg-blue-900/30' : ''}
                  ${skill.category === 'backend' ? 'bg-green-100/70 dark:bg-green-900/30' : ''}
                  ${skill.category === 'tools' ? 'bg-purple-100/70 dark:bg-purple-900/30' : ''}
                  ${skill.category === 'embedded' ? 'bg-orange-100/70 dark:bg-orange-900/30' : ''}
                  ${!['frontend', 'backend', 'tools', 'embedded'].includes(skill.category) ? 'bg-white/20' : ''}
                `}>
                  <IconComponent skill={skill} />
                </div>
                
                <div>
                  <h3 id="skill-detail-title" className="text-2xl font-bold">{skill.name}</h3>
                  <div className="flex items-center mt-1 text-white/80">
                    <span className="text-sm mr-2">{getLevelLabel(skill.level)}</span>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <div 
                          key={i} 
                          className={`w-2 h-2 mx-0.5 rounded-full 
                            ${i < skill.level ? 'bg-white' : 'bg-white/30'}
                          `}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contenido del modal */}
            <div className="p-6">
              <div className="mb-6">
                <h4 className="text-sm uppercase text-gray-500 dark:text-gray-400 font-medium mb-2">Descripción</h4>
                <p className="text-gray-700 dark:text-gray-300">{skill.description}</p>
              </div>
              
              {skill.yearsExperience && (
                <div className="mb-6">
                  <h4 className="text-sm uppercase text-gray-500 dark:text-gray-400 font-medium mb-2">Experiencia</h4>
                  <div className="flex items-center">
                    <FiClock className="w-5 h-5 mr-2 text-primary-500 dark:text-primary-400" />
                    <span className="text-gray-700 dark:text-gray-300">
                      {skill.yearsExperience} {skill.yearsExperience === 1 ? 'año' : 'años'} de experiencia
                    </span>
                  </div>
                </div>
              )}
              
              {skill.keyProjects && skill.keyProjects.length > 0 && (
                <div className="mb-6">
                  <h4 className="text-sm uppercase text-gray-500 dark:text-gray-400 font-medium mb-2">Proyectos Destacados</h4>
                  <ul className="list-none space-y-1">
                    {skill.keyProjects.map((project, index) => (
                      <li key={index} className="flex items-start">
                        <FiCheck className="w-5 h-5 mr-2 text-green-500 dark:text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 dark:text-gray-300">{project}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {skill.relatedSkills.length > 0 && (
                <div>
                  <h4 className="text-sm uppercase text-gray-500 dark:text-gray-400 font-medium mb-2">Tecnologías Relacionadas</h4>
                  <div className="flex flex-wrap gap-2">
                    {skill.relatedSkills.map(relatedId => {
                      // Filtrar habilidades relacionadas excluidas
                      if (excludedSkillIds.includes(relatedId)) return null;
                      
                      const relatedSkill = allSkills.find(s => s.id === relatedId);
                      if (!relatedSkill) return null;
                      
                      return (
                        <button
                          key={relatedId}
                          onClick={() => onSelectRelatedSkill(relatedSkill)}
                          className={`inline-flex items-center px-3 py-1.5 text-xs rounded-full transition-colors duration-300
                            bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600`}
                        >
                          <div className="mr-1.5">
                            <IconComponent skill={relatedSkill} size="small" />
                          </div>
                          {relatedSkill.name}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SkillDetailModal; 