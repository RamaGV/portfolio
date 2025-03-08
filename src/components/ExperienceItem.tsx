// src/components/ExperienceItem.tsx

import { useState } from 'react';
import { IoChevronDown, IoChevronUp } from 'react-icons/io5';

// Cambio de interface a type
type ExperienceItemProps = {
  startDate: string;
  endDate: string;
  title: string;
  company: string;
  location: string;
  modality: string;
  summary: string;
  responsibilities: string[];
  achievements: string[];
  isLast: boolean;
}

/**
 * @component ExperienceItem
 * @description Componente que renderiza un elemento individual de experiencia
 * en la línea de tiempo con efectos interactivos y detalles expandibles.
 * 
 * @param {ExperienceItemProps} props - Propiedades del componente
 * @returns {React.ReactNode} Elemento que representa un item de experiencia
 */
export default function ExperienceItem({
  startDate,
  endDate,
  title,
  company,
  location,
  modality,
  summary,
  responsibilities,
  achievements,
  isLast
}: ExperienceItemProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  // Alternar la expansión de detalles
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`relative ${isLast ? 'mb-0' : 'mb-16'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Círculo en la línea de tiempo con transición de color */}
      <div className={`
        absolute -left-2.5 top-1.5 
        w-5 h-5 rounded-full 
        z-10
        transition-all duration-300 ease-in-out
        ${isHovered || isExpanded
          ? 'bg-green-500 scale-110 shadow-md shadow-green-900/50' 
          : 'bg-gray-700 border-2 border-gray-600'}
      `}></div>
      
      {/* Fechas en formato vertical */}
      <div className="absolute -left-16 md:-left-20 top-0 flex flex-col items-end">
        <div className={`
          text-sm font-medium mb-1
          transition-all duration-300 ease-in-out
          ${isHovered || isExpanded ? 'text-green-400 scale-105' : 'text-gray-400'}
        `}>
          {endDate}
        </div>
        <div className={`
          text-sm font-medium
          transition-all duration-300 ease-in-out
          ${isHovered || isExpanded ? 'text-green-400 scale-105' : 'text-gray-400'}
        `}>
          {startDate}
        </div>
      </div>
      
      {/* Contenido de la experiencia */}
      <div 
        className={`
          pl-8 
          transition-all duration-300 ease-in-out
          rounded-lg p-4
          ${isHovered || isExpanded
            ? 'transform translate-x-2 bg-[#1e1e1e] shadow-lg shadow-black/30' 
            : 'bg-transparent'}
        `}
      >
        {/* Información básica siempre visible */}
        <div className="mb-2">
          <h3 className={`
            text-xl font-bold 
            transition-all duration-300
            ${isHovered || isExpanded ? 'text-green-400' : 'text-gray-200'}
          `}>
            {title}
          </h3>
          <h4 className="text-gray-400">{company}</h4>
          <div className="text-gray-500 text-sm mt-1">
            {location} - {modality}
          </div>
        </div>
        
        {/* Resumen siempre visible */}
        <p className="text-gray-300 text-sm leading-relaxed mb-3">{summary}</p>
        
        {/* Detalles expandibles */}
        {isExpanded && (
          <div className="mt-4 animate-fadeIn">
            {/* Responsabilidades */}
            {responsibilities.length > 0 && (
              <div className="mb-3">
                <h5 className="text-gray-300 font-medium mb-2">Responsabilidades:</h5>
                <ul className="list-disc list-inside text-gray-400 text-sm space-y-1 pl-2">
                  {responsibilities.map((resp, idx) => (
                    <li key={idx}>{resp}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {/* Logros */}
            {achievements.length > 0 && (
              <div>
                <h5 className="text-gray-300 font-medium mb-2">Logros:</h5>
                <ul className="list-disc list-inside text-gray-400 text-sm space-y-1 pl-2">
                  {achievements.map((achievement, idx) => (
                    <li key={idx}>{achievement}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
        
        {/* Botón para expandir/colapsar */}
        <button 
          onClick={toggleExpand}
          className={`
            mt-6 flex items-center gap-1 text-sm
            transition-colors duration-200
            ${isExpanded ? 'text-green-400' : 'text-gray-500'}
            hover:text-green-400
          `}
        >
          {isExpanded ? (
            <>
              <IoChevronUp className="w-4 h-4" />
              <span>Ver menos</span>
            </>
          ) : (
            <>
              <IoChevronDown className="w-4 h-4" />
              <span>Ver más</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};
