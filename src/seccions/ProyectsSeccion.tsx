// -----------------------------------------------------------------------------
// ProyectsSeccion.tsx
// -----------------------------------------------------------------------------
/**
 * @file ProyectsSeccion.tsx
 * @author RamaGV
 * @version 1.0.0
 * @description Sección principal que muestra el portafolio de proyectos.
 * Este componente actúa como contenedor para los elementos individuales
 * de proyecto y gestiona la disposición y animación general de la sección.
 * 
 * @lastModified 2025-03-07
 */

import { useState, useEffect, useRef } from 'react';
import { FaFolderOpen } from 'react-icons/fa';
import ProyectItem, { ProyectItemProps } from '../components/ProyectItem';

/**
 * @component ProyectsSeccion
 * @description Componente que renderiza la sección completa de proyectos,
 * incluyendo el título, filtros opcionales y la cuadrícula de proyectos.
 * 
 * @returns {React.ReactNode} Elemento que representa la sección de proyectos
 */
function ProyectsSeccion() {
  // Estado para controlar la categoría de filtro activa
  const [activeFilter, setActiveFilter] = useState<string>('all');
  
  // Referencia para animación de entrada
  const sectionRef = useRef<HTMLElement>(null);
  
  // Estado para controlar la visibilidad de la sección
  const [isVisible, setIsVisible] = useState(false);

  /**
   * Datos de proyectos
   * En un entorno de producción, estos datos podrían provenir de una API
   * o un CMS para facilitar su actualización sin modificar el código.
   */
  const projects: ProyectItemProps[] = [
    {
      type: "hydro",
      name: "Hydro Edge",
      description: "HydroEdge es un sistema automatizado de hidroponia que integra aplicación móvil, sensores IoT y microcontrolador. Permite monitorear y controlar parámetros de crecimiento, ajustando el ambiente y la nutrición a través de lógica de control.",
      imageUrl: "../src/assets/proyects/proj_1.webp",
      technologies: ["React Native", "Arduino", "IoT", "Firebase"],
      categories: ["web", "mobile", "iot"],
      githubLink: "https://github.com/tu-repo",
      hostLink: "https://kiwilabs.com",
      playStoreLink: "https://kiwilabs.com"
    },
    {
      type: "ledfit",
      name: "Led Fit",
      description: "Ledfit combina una aplicación móvil de entrenamiento con un tablero LED personalizado, diseño y cortado mediante CNC laser. El proyecto integra datos de ejercicios y métricas en tiempo real, motivando al usuario.",
      imageUrl: "../src/assets/proyects/proj_2.webp",
      technologies: ["React", "React Native", "Arduino", "MQTT", "Node.js"],
      categories: ["web", "mobile", "iot"],
      githubLink: "https://github.com/tu-repo",
      hostLink: "https://kiwilabs.com",
      playStoreLink: "https://kiwilabs.com"
    },
    {
      type: "peekByLight",
      name: "Peek by Light",
      description: "Sistema de comunicación óptica que utiliza modulación de luz para transmitir datos entre dispositivos. Implementa protocolos de detección y corrección de errores para garantizar la integridad de la información.",
      imageUrl: "../src/assets/proyects/proj_3.webp",
      technologies: ["C++", "Microcontroladores", "Óptica", "Procesamiento de señales"],
      categories: ["web", "robotics"],
      githubLink: "https://github.com/RamaGV/PIC2_PTL_C",
      hostLink: "https://kiwilabs.com",
      documentLink: "https://drive.google.com/file/d/12KYl03yniOt4B5wKHoVWHq8WsmDLtMkB/view?usp=sharing"
    },
    {
      type: "robotArm",
      name: "Brazo Robótico",
      description: "Diseño e implementación de un brazo robótico con 6 grados de libertad controlado mediante una interfaz gráfica. Incluye cinemática inversa para posicionamiento preciso y capacidad de programación de secuencias.",
      imageUrl: "../src/assets/proyects/proj_4.webp",
      technologies: ["Python", "ROS", "Servomotores", "Impresión 3D"],
      categories: ["web", "robotics"],
      githubLink: "https://github.com/tu-repo",
      hostLink: "https://kiwilabs.com",
      documentLink: "https://drive.google.com/file/d/12KYl03yniOt4B5wKHoVWHq8WsmDLtMkB/view?usp=sharing"
    }
  ];

  /**
   * Categorías disponibles para filtrado
   */
  const categories = [
    { id: 'all', label: 'Todos' },
    { id: 'web', label: 'Web' },
    { id: 'mobile', label: 'Móvil' },
    { id: 'iot', label: 'IoT' },
    { id: 'robotics', label: 'Robótica' }
  ];

  /**
   * Filtra los proyectos según la categoría seleccionada
   * @returns {Array} Proyectos filtrados
   */
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.categories?.includes(activeFilter));

  /**
   * Efecto para detectar cuando la sección entra en el viewport
   */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="projects"
      ref={sectionRef}
      className={`
        max-w-5xl w-full p-8 rounded-lg 
        bg-[#171717] 
        shadow-inner shadow-[#232323]
        transition-opacity duration-1000 ease-in-out
        ${isVisible ? 'opacity-100' : 'opacity-0'}
      `}
    >
      {/* Encabezado con ícono y título */}
      <div className="flex items-center mb-8">
        <div className="mr-6 text-gray-300">
          <FaFolderOpen size={30} />
        </div>
        <h1 className="font-semibold text-3xl text-gray-200">
          Proyectos
        </h1>
      </div>

      {/* Filtros de categorías */}
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map(category => (
          <button
            key={category.id}
            onClick={() => setActiveFilter(category.id)}
            className={`
              px-4 py-1.5 rounded-full text-sm font-medium
              transition-all duration-300
              ${activeFilter === category.id 
                ? 'bg-gray-700 text-white shadow-md' 
                : 'bg-[#232323] text-gray-400 hover:bg-[#2a2a2a]'}
            `}
          >
            {category.label}
          </button>
        ))}
      </div>

      {/* Contenedor en cuadrícula para los proyectos con animación */}
      <div 
        className={`
          grid grid-cols-1 md:grid-cols-2 gap-6 p-2
          transition-all duration-500
        `}
      >
        {filteredProjects.map((project) => (
          <ProyectItem
            key={project.name}
            type={project.type}
            name={project.name}
            description={project.description}
            imageUrl={project.imageUrl}
            technologies={project.technologies}
            githubLink={project.githubLink}
            hostLink={project.hostLink}
            playStoreLink={project.playStoreLink}
            documentLink={project.documentLink}
          />
        ))}
      </div>

      {/* Mensaje cuando no hay proyectos en la categoría seleccionada */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-10 text-gray-400">
          No hay proyectos disponibles en esta categoría.
        </div>
      )}
    </section>
  );
}

export default ProyectsSeccion;
