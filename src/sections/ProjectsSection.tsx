// src/components/sections/ProjectsSection.tsx

import { useEffect, useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { 
  FiExternalLink, 
  FiChevronRight, 
  FiChevronLeft, 
  FiX,
  FiCode,
  FiBriefcase,
  FiDownload,
  FiSmartphone
} from 'react-icons/fi';

interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  // Campos opcionales
  longDescription?: string;
  features?: string[];
  role?: string;
  challenges?: string[];
  playStoreLink?: string;
  documentLink?: string;
}

interface ProjectsSectionProps {
  projects: Project[];
}

// Categorías para agrupar proyectos
type ProjectCategory = 'all' | 'frontend' | 'backend' | 'fullstack' | 'mobile';

// Función para determinar la categoría de un proyecto basado en sus tags
const getProjectCategory = (tags: string[]): ProjectCategory => {
  const lowerTags = tags.map(tag => tag.toLowerCase());
  
  if (lowerTags.some(tag => tag.includes('react native') || tag.includes('expo') || tag.includes('mobile'))) {
    return 'mobile';
  }
  
  if (lowerTags.some(tag => tag.includes('node') || tag.includes('express') || tag.includes('mongodb') || tag.includes('postgresql'))) {
    if (lowerTags.some(tag => tag.includes('react') || tag.includes('vue') || tag.includes('angular'))) {
      return 'fullstack';
    }
    return 'backend';
  }
  
  return 'frontend';
};

const ProjectsSection = ({ projects }: ProjectsSectionProps) => {
  const projectsRef = useRef(null);
  const isInView = useInView(projectsRef, { once: false, margin: "-100px" });
  
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  
  // Redimensionar modal según la ventana
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isModalOpen) return;
      
      if (e.key === 'Escape') {
        setIsModalOpen(false);
      } else if (e.key === 'ArrowRight') {
        handleNextProject();
      } else if (e.key === 'ArrowLeft') {
        handlePrevProject();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen, currentProjectIndex]);
  
  // Agrupar proyectos por categoría
  const categorizedProjects = {
    all: projects,
    frontend: projects.filter(p => getProjectCategory(p.tags) === 'frontend'),
    backend: projects.filter(p => getProjectCategory(p.tags) === 'backend'),
    fullstack: projects.filter(p => getProjectCategory(p.tags) === 'fullstack'),
    mobile: projects.filter(p => getProjectCategory(p.tags) === 'mobile')
  };
  
  const filteredProjects = categorizedProjects[activeCategory];
  
  // Separar proyectos destacados y regulares
  const featuredProjects = filteredProjects.filter(project => project.featured);
  const regularProjects = filteredProjects.filter(project => !project.featured);
  
  // Variantes de animación
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
  
  // Manejar la apertura del modal con detalles del proyecto
  const openProjectDetails = (project: Project, index: number) => {
    setSelectedProject(project);
    setCurrentProjectIndex(index);
    setIsModalOpen(true);
  };
  
  // Navegación entre proyectos en el modal
  const handleNextProject = () => {
    if (filteredProjects.length <= 1) return;
    const nextIndex = (currentProjectIndex + 1) % filteredProjects.length;
    setCurrentProjectIndex(nextIndex);
    setSelectedProject(filteredProjects[nextIndex]);
  };
  
  const handlePrevProject = () => {
    if (filteredProjects.length <= 1) return;
    const prevIndex = (currentProjectIndex - 1 + filteredProjects.length) % filteredProjects.length;
    setCurrentProjectIndex(prevIndex);
    setSelectedProject(filteredProjects[prevIndex]);
  };

  // Definir categorías disponibles
  const categories: { id: ProjectCategory; label: string; icon: React.ReactNode }[] = [
    { id: 'all', label: 'Todos', icon: <FiBriefcase className="w-4 h-4 mr-2" /> },
    { id: 'frontend', label: 'Frontend', icon: <FiCode className="w-4 h-4 mr-2" /> },
    { id: 'backend', label: 'Backend', icon: <FiCode className="w-4 h-4 mr-2" /> },
    { id: 'fullstack', label: 'Full Stack', icon: <FiCode className="w-4 h-4 mr-2" /> },
    { id: 'mobile', label: 'Mobile', icon: <FiCode className="w-4 h-4 mr-2" /> }
  ];

  // Filtrar categorías que no tienen proyectos
  const availableCategories = categories.filter(
    category => category.id === 'all' || categorizedProjects[category.id].length > 0
  );

  return (
    <section 
      id="projects" 
      ref={projectsRef}
      className="py-20 relative bg-white dark:bg-gray-900 overflow-hidden section"
    >
      {/* Background decorations */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent"></div>
      
      {/* Background blur elements */}
      <div className="absolute top-[20%] left-[10%] w-72 h-72 bg-primary-100 dark:bg-primary-900/20 rounded-full filter blur-3xl opacity-50"></div>
      <div className="absolute bottom-[20%] right-[10%] w-72 h-72 bg-secondary-100 dark:bg-secondary-900/20 rounded-full filter blur-3xl opacity-50"></div>
      
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
            Mis Proyectos
          </motion.h2>
          
          <motion.div 
            variants={itemVariants}
            className="w-24 h-1.5 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mb-6"
          ></motion.div>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl"
          >
            Una selección de proyectos que representan mi experiencia y habilidades técnicas
          </motion.p>
        </motion.div>
        
        {/* Categoría de Proyectos */}
        <div className="flex justify-center mb-12 overflow-x-auto py-4 no-scrollbar">
          <div className="inline-flex gap-2 md:gap-4 p-1 bg-gray-100 dark:bg-gray-800 rounded-xl">
            {availableCategories.map((category, index) => (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.3, delay: 0.2 + (index * 0.05) }}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center px-4 py-3 rounded-lg text-sm md:text-base font-medium transition-all ${
                  activeCategory === category.id 
                    ? 'bg-white dark:bg-gray-700 text-primary-600 dark:text-primary-400 shadow-md' 
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700/50'
                }`}
              >
                {category.icon}
                {category.label}
              </motion.button>
            ))}
          </div>
        </div>
        
        {/* Proyectos Destacados */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            {featuredProjects.length > 0 && (
              <div className="mb-16">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 px-2">
                  Proyectos Destacados
                </h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {featuredProjects.map((project, index) => {
                    const projectIndex = filteredProjects.indexOf(project);
                    return (
                      <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.6, delay: 0.2 + (index * 0.1) }}
                        className="group"
                      >
                        <div className="relative rounded-xl overflow-hidden bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col group">
                          {/* Imagen principal */}
                          <div className="relative aspect-w-16 aspect-h-9 bg-gray-100 dark:bg-gray-800 overflow-hidden">
                            <img 
                              src={project.imageUrl} 
                              alt={project.title}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.src = `https://via.placeholder.com/600x340?text=${project.title.split(' ').join('+')}`;
                              }}
                            />
                            
                            {/* Overlay con acciones */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                              <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex space-x-3 mb-4">
                                <button 
                                  onClick={() => openProjectDetails(project, projectIndex)}
                                  className="bg-white text-gray-900 px-4 py-2 rounded-lg hover:bg-primary-500 hover:text-white transition-colors cursor-pointer flex items-center"
                                  aria-label="Ver detalles"
                                >
                                  <span className="mr-1">Ver detalles</span>
                                </button>
                              </div>
                            </div>
                            
                            {/* Etiqueta de destacado */}
                            <div className="absolute top-4 right-4">
                              <span className="inline-block px-3 py-1 bg-gradient-to-r from-primary-500 to-secondary-500 text-white text-xs font-semibold rounded-full">
                                Destacado
                              </span>
                            </div>
                          </div>
                          
                          {/* Contenido del proyecto */}
                          <div className="p-6 flex-1 flex flex-col">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">{project.title}</h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-4 flex-1 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-300">{project.description}</p>
                            
                            {/* Botones de acción */}
                            <div className="flex flex-wrap gap-2">
                              {project.githubUrl && (
                                <a 
                                  href={project.githubUrl} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center justify-center w-10 hover:w-24 px-3 py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs font-medium rounded-lg transition-all duration-300 hover:bg-primary-50 hover:text-primary-600 dark:hover:bg-primary-900/30 dark:hover:text-primary-400 hover:shadow-md hover:-translate-y-0.5 cursor-pointer overflow-hidden"
                                >
                                  <FiCode className="w-4 h-4 transition-colors duration-300 flex-shrink-0" />
                                  <span className="ml-1.5 transition-all duration-300 opacity-0 group-hover:opacity-100 whitespace-nowrap overflow-hidden">Código</span>
                                </a>
                              )}
                              {project.demoUrl && (
                                <a 
                                  href={project.demoUrl} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="hidden inline-flex items-center justify-center w-10 hover:w-20 px-3 py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs font-medium rounded-lg transition-all duration-300 hover:bg-primary-50 hover:text-primary-600 dark:hover:bg-primary-900/30 dark:hover:text-primary-400 hover:shadow-md hover:-translate-y-0.5 cursor-pointer overflow-hidden"
                                >
                                  <FiExternalLink className="w-4 h-4 transition-colors duration-300 flex-shrink-0" />
                                  <span className="ml-1.5 transition-all duration-300 opacity-0 group-hover:opacity-100 whitespace-nowrap overflow-hidden">Demo</span>
                                </a>
                              )}
                              {project.playStoreLink && (
                                <a 
                                  href={project.playStoreLink} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="hidden inline-flex items-center justify-center w-10 hover:w-28 px-3 py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs font-medium rounded-lg transition-all duration-300 hover:bg-primary-50 hover:text-primary-600 dark:hover:bg-primary-900/30 dark:hover:text-primary-400 hover:shadow-md hover:-translate-y-0.5 cursor-pointer overflow-hidden"
                                >
                                  <FiSmartphone className="w-4 h-4 transition-colors duration-300 flex-shrink-0" />
                                  <span className="ml-1.5 transition-all duration-300 opacity-0 group-hover:opacity-100 whitespace-nowrap overflow-hidden">Play Store</span>
                                </a>
                              )}
                              {project.documentLink && (
                                <a 
                                  href={project.documentLink} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center justify-center w-10 hover:w-36 px-3 py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs font-medium rounded-lg transition-all duration-300 hover:bg-primary-50 hover:text-primary-600 dark:hover:bg-primary-900/30 dark:hover:text-primary-400 hover:shadow-md hover:-translate-y-0.5 cursor-pointer overflow-hidden"
                                >
                                  <FiDownload className="w-4 h-4 transition-colors duration-300 flex-shrink-0" />
                                  <span className="ml-1.5 transition-all duration-300 opacity-0 group-hover:opacity-100 whitespace-nowrap overflow-hidden">Documentación</span>
                                </a>
                              )}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            )}
            
            {/* Resto de Proyectos */}
            {regularProjects.length > 0 && (
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 px-2">
                  {featuredProjects.length > 0 ? "Más Proyectos" : "Proyectos"}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {regularProjects.map((project, index) => {
                    const projectIndex = filteredProjects.indexOf(project);
                    return (
                      <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                        className="group"
                      >
                        <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col group">
                          {/* Imagen del proyecto */}
                          <div className="relative aspect-w-16 aspect-h-9 bg-gray-100 dark:bg-gray-800 overflow-hidden">
                            <img 
                              src={project.imageUrl} 
                              alt={project.title}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.src = `https://via.placeholder.com/400x225?text=${project.title.split(' ').join('+')}`;
                              }}
                            />
                            
                            {/* Overlay con acciones */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                              <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex space-x-2">
                                <button 
                                  onClick={() => openProjectDetails(project, projectIndex)}
                                  className="bg-white text-gray-900 px-3 py-2 rounded-lg hover:bg-primary-500 hover:text-white transition-colors text-xs flex items-center cursor-pointer"
                                  aria-label="Ver detalles"
                                >
                                  <span className="mr-1">Ver detalles</span>
                                </button>
                              </div>
                            </div>
                          </div>
                          
                          {/* Contenido del proyecto */}
                          <div className="p-5 flex-1 flex flex-col">
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">{project.title}</h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm line-clamp-3 flex-1 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-300">{project.description}</p>
                            
                            {/* Botones de acción */}
                            <div className="flex flex-wrap gap-1.5">
                              {project.githubUrl && (
                                <a 
                                  href={project.githubUrl} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center justify-center w-9 hover:w-24 px-2.5 py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs font-medium rounded-lg transition-all duration-300 hover:bg-primary-50 hover:text-primary-600 dark:hover:bg-primary-900/30 dark:hover:text-primary-400 hover:shadow-md hover:-translate-y-0.5 cursor-pointer overflow-hidden"
                                >
                                  <FiCode className="w-3.5 h-3.5 transition-colors duration-300 flex-shrink-0" />
                                  <span className="ml-1 transition-all duration-300 opacity-0 group-hover:opacity-100 whitespace-nowrap overflow-hidden">Código</span>
                                </a>
                              )}
                              {project.demoUrl && (
                                <a 
                                  href={project.demoUrl} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="hidden inline-flex items-center justify-center w-9 hover:w-20 px-2.5 py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs font-medium rounded-lg transition-all duration-300 hover:bg-primary-50 hover:text-primary-600 dark:hover:bg-primary-900/30 dark:hover:text-primary-400 hover:shadow-md hover:-translate-y-0.5 cursor-pointer overflow-hidden"
                                >
                                  <FiExternalLink className="w-3.5 h-3.5 transition-colors duration-300 flex-shrink-0" />
                                  <span className="ml-1 transition-all duration-300 opacity-0 group-hover:opacity-100 whitespace-nowrap overflow-hidden">Demo</span>
                                </a>
                              )}
                              {project.playStoreLink && (
                                <a 
                                  href={project.playStoreLink} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="hidden inline-flex items-center justify-center w-9 hover:w-28 px-2.5 py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs font-medium rounded-lg transition-all duration-300 hover:bg-primary-50 hover:text-primary-600 dark:hover:bg-primary-900/30 dark:hover:text-primary-400 hover:shadow-md hover:-translate-y-0.5 cursor-pointer overflow-hidden"
                                >
                                  <FiSmartphone className="w-3.5 h-3.5 transition-colors duration-300 flex-shrink-0" />
                                  <span className="ml-1 transition-all duration-300 opacity-0 group-hover:opacity-100 whitespace-nowrap overflow-hidden">Play Store</span>
                                </a>
                              )}
                              {project.documentLink && (
                                <a 
                                  href={project.documentLink} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center justify-center w-9 hover:w-36 px-2.5 py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs font-medium rounded-lg transition-all duration-300 hover:bg-primary-50 hover:text-primary-600 dark:hover:bg-primary-900/30 dark:hover:text-primary-400 hover:shadow-md hover:-translate-y-0.5 cursor-pointer overflow-hidden"
                                >
                                  <FiDownload className="w-3.5 h-3.5 transition-colors duration-300 flex-shrink-0" />
                                  <span className="ml-1 transition-all duration-300 opacity-0 group-hover:opacity-100 whitespace-nowrap overflow-hidden">Documentación</span>
                                </a>
                              )}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
        
        {/* Modal de Detalles del Proyecto */}
        <AnimatePresence>
          {isModalOpen && selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/75 backdrop-blur-sm"
              onClick={() => setIsModalOpen(false)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Encabezado y controles de navegación */}
                <div className="relative">
                  <div className="aspect-w-16 aspect-h-9">
                    <img 
                      src={selectedProject.imageUrl} 
                      alt={selectedProject.title}
                      className="w-full h-full object-cover object-top rounded-t-xl" 
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = `https://via.placeholder.com/1200x675?text=${selectedProject.title.split(' ').join('+')}`;
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                  
                  {/* Controles de navegación y cierre */}
                  <div className="absolute top-4 right-4 flex space-x-2">
                    {filteredProjects.length > 1 && (
                      <>
                        <button 
                          onClick={(e) => { e.stopPropagation(); handlePrevProject(); }}
                          className="bg-white/80 dark:bg-gray-700/80 p-2 rounded-full text-gray-900 dark:text-white hover:bg-white dark:hover:bg-gray-600 transition-colors backdrop-blur-sm"
                          aria-label="Proyecto anterior"
                        >
                          <FiChevronLeft className="w-5 h-5" />
                        </button>
                        
                        <button 
                          onClick={(e) => { e.stopPropagation(); handleNextProject(); }}
                          className="bg-white/80 dark:bg-gray-700/80 p-2 rounded-full text-gray-900 dark:text-white hover:bg-white dark:hover:bg-gray-600 transition-colors backdrop-blur-sm"
                          aria-label="Proyecto siguiente"
                        >
                          <FiChevronRight className="w-5 h-5" />
                        </button>
                      </>
                    )}
                    
                    <button 
                      onClick={(e) => { e.stopPropagation(); setIsModalOpen(false); }}
                      className="bg-white/80 dark:bg-gray-700/80 p-2 rounded-full text-gray-900 dark:text-white hover:bg-white dark:hover:bg-gray-600 transition-colors backdrop-blur-sm"
                      aria-label="Cerrar"
                    >
                      <FiX className="w-5 h-5" />
                    </button>
                  </div>
                  
                  {/* Título en overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">{selectedProject.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex}
                          className="inline-block px-3 py-1 bg-white/20 text-white text-sm font-medium rounded-full backdrop-blur-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Contenido detallado del proyecto */}
                <div className="p-6">
                  {/* Descripción */}
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Descripción</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      {selectedProject.longDescription || selectedProject.description}
                    </p>
                  </div>
                  
                  {/* Características si existen */}
                  {selectedProject.features && selectedProject.features.length > 0 && (
                    <div className="mb-8">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Características</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {selectedProject.features.map((feature, featureIndex) => (
                          <li 
                            key={featureIndex}
                            className="flex items-start"
                          >
                            <div className="mt-1 mr-2 flex-shrink-0 w-5 h-5 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
                              <div className="w-2 h-2 rounded-full bg-primary-500 dark:bg-primary-400"></div>
                            </div>
                            <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {/* Desafíos superados si existen */}
                  {selectedProject.challenges && selectedProject.challenges.length > 0 && (
                    <div className="mb-8">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Desafíos Superados</h4>
                      <ul className="space-y-2">
                        {selectedProject.challenges.map((challenge, challengeIndex) => (
                          <li 
                            key={challengeIndex}
                            className="flex items-start"
                          >
                            <div className="mt-1 mr-2 flex-shrink-0 w-5 h-5 rounded-full bg-secondary-100 dark:bg-secondary-900/30 flex items-center justify-center">
                              <div className="w-2 h-2 rounded-full bg-secondary-500 dark:bg-secondary-400"></div>
                            </div>
                            <span className="text-gray-700 dark:text-gray-300">{challenge}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {/* Mi rol en el proyecto */}
                  {selectedProject.role && (
                    <div className="mb-8">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Mi Rol</h4>
                      <p className="text-gray-700 dark:text-gray-300">{selectedProject.role}</p>
                    </div>
                  )}
                  
                  {/* Enlaces y botones de acción */}
                  <div className="flex flex-wrap gap-3 mt-6 mb-8">
                    {selectedProject.githubUrl && (
                      <a 
                        href={selectedProject.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2.5 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 text-sm font-medium rounded-lg transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
                      >
                        <FiCode className="w-5 h-5" />
                        <span className="ml-2">Ver Código</span>
                      </a>
                    )}
                    {selectedProject.demoUrl && (
                      <a 
                        href={selectedProject.demoUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hidden inline-flex items-center px-4 py-2.5 bg-primary-100 hover:bg-primary-200 dark:bg-primary-900/20 dark:hover:bg-primary-800/30 text-primary-700 dark:text-primary-300 text-sm font-medium rounded-lg transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
                      >
                        <FiExternalLink className="w-5 h-5" />
                        <span className="ml-2">Ver Demo</span>
                      </a>
                    )}
                    {selectedProject.playStoreLink && (
                      <a 
                        href={selectedProject.playStoreLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hidden inline-flex items-center px-4 py-2.5 bg-green-100 hover:bg-green-200 dark:bg-green-900/20 dark:hover:bg-green-800/30 text-green-700 dark:text-green-300 text-sm font-medium rounded-lg transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
                      >
                        <FiSmartphone className="w-5 h-5" />
                        <span className="ml-2">Ver en Play Store</span>
                      </a>
                    )}
                    {selectedProject.documentLink && (
                      <a 
                        href={selectedProject.documentLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2.5 bg-blue-100 hover:bg-blue-200 dark:bg-blue-900/20 dark:hover:bg-blue-800/30 text-blue-700 dark:text-blue-300 text-sm font-medium rounded-lg transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
                      >
                        <FiDownload className="w-5 h-5" />
                        <span className="ml-2">Descargar Documentación</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProjectsSection; 
