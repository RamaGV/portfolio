// -----------------------------------------------------------------------------
// SkillsSeccion.tsx
// Sección principal que muestra el título "Skills" junto con un ícono,
// y agrupa diferentes categorías de habilidades (Frontend, Backend, etc.)
// dentro de un contenedor. Cada categoría se renderiza con el componente
// SkillCategory.
// -----------------------------------------------------------------------------

import { useState, useRef, useEffect } from 'react';
import { GiBrain } from 'react-icons/gi'; // Icono de cerebro para representar habilidades/conocimiento
import SkillCategory from '../components/SkillCategory';
import { skillCategories } from '../data';

/**
 * @component SkillsSeccion
 * @description Componente que renderiza la sección completa de habilidades,
 * incluyendo el título, icono y las diferentes categorías de habilidades.
 * 
 * @returns {React.ReactNode} Elemento que representa la sección de habilidades
 */
export default function SkillsSeccion() {
  // Referencia para animación de entrada
  const sectionRef = useRef<HTMLElement>(null);
  
  // Estado para controlar la visibilidad de la sección
  const [isVisible, setIsVisible] = useState(false);
  
  // Estado global para la habilidad seleccionada
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

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

  // Función para manejar la selección de habilidades
  const handleSkillSelect = (skill: string) => {
    if (selectedSkill === skill) {
      setSelectedSkill(null); // Deseleccionar si ya está seleccionada
    } else {
      setSelectedSkill(skill); // Seleccionar la nueva habilidad
    }
  };

  return (
    <section
      id="skills"
      ref={sectionRef}
      className={`
        max-w-5xl w-full p-8 rounded-lg 
        bg-[#171717] 
        shadow-inner shadow-[#232323]
        transition-all duration-1000 ease-in-out
        ${isVisible || selectedSkill ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}
      `}
    >
      {/* Encabezado con ícono y título */}
      <div className="flex items-center mb-8">
        <div className="mr-6 text-gray-300">
          <GiBrain size={30} />
        </div>
        <h1 className="font-semibold text-3xl text-gray-200">
          Habilidades
        </h1>
      </div>

      {/* Descripción breve */}
      <p className="text-gray-400 mb-6 text-sm max-w-2xl">
        Conjunto de tecnologías y herramientas que domino, agrupadas por áreas de especialización.
        Cada habilidad representa conocimientos aplicados en proyectos reales.
      </p>

      {/* Contenedor en cuadrícula para las distintas categorías de habilidades */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-2">
        {skillCategories.map((category, index) => (
          <SkillCategory
            key={`skill-category-${index}`}
            title={category.title}
            description={category.description}
            skills={category.skills}
            selectedSkill={selectedSkill}
            onSkillSelect={handleSkillSelect}
          />
        ))}
      </div>
    </section>
  );
}
