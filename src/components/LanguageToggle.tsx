// src/components/LanguageToggle.tsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Props para el componente LanguageToggle
 */
export type LanguageToggleProps = {
  activeLanguage: 'es' | 'en';
  onToggle: (language: 'es' | 'en') => void;
};

/**
 * @component LanguageToggle
 * @description Componente para cambiar entre idiomas con un diseño minimalista
 * y animaciones avanzadas
 */
const LanguageToggle = ({ activeLanguage, onToggle }: LanguageToggleProps) => {
  // Estado para controlar el hover
  const [isHovered, setIsHovered] = useState(false);
  // Estado para controlar la animación de transición
  const [isTransitioning, setIsTransitioning] = useState(false);
  // Estado para almacenar el idioma anterior durante la transición
  const [previousLanguage, setPreviousLanguage] = useState<'es' | 'en'>(activeLanguage);
  
  // Actualizar el idioma anterior cuando cambia el idioma activo
  useEffect(() => {
    if (activeLanguage !== previousLanguage) {
      setPreviousLanguage(activeLanguage);
    }
  }, [activeLanguage]);

  // Función para alternar entre idiomas con animación
  const toggleLanguage = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      
      // Esperar a que termine la animación antes de cambiar el idioma
      setTimeout(() => {
        onToggle(activeLanguage === 'es' ? 'en' : 'es');
        setTimeout(() => {
          setIsTransitioning(false);
        }, 300);
      }, 300);
    }
  };

  // Determinar el idioma alternativo (el que no está activo)
  const alternativeLanguage = activeLanguage === 'es' ? 'en' : 'es';
  
  // Colores según el idioma
  const getBackgroundColor = (lang: 'es' | 'en') => {
    return lang === 'es' ? 'bg-yellow-400' : 'bg-blue-900';
  };
  
  // Color del texto según el idioma y el estado de hover
  const getTextColor = (lang: 'es' | 'en', hovered: boolean) => {
    if (hovered) {
      // En hover, el texto es oscuro para contrastar con el fondo de color
      return lang === 'es' ? 'text-gray-900' : 'text-gray-200';
    } else {
      // Sin hover, el texto es del color correspondiente al idioma
      return lang === 'es' ? 'text-yellow-400' : 'text-blue-400';
    }
  };

  return (
    <div className="
      relative flex items-center justify-center 
      w-12 h-10 
      bg-[#1a1a1a]
      rounded-xl overflow-hidden
    ">
      <button
        onClick={toggleLanguage}
        onMouseEnter={() => !isTransitioning && setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="
          relative w-full h-full 
          flex items-center justify-center 
          transition-all duration-300 ease-in-out
        "
        aria-label={`Cambiar a ${activeLanguage === 'es' ? 'inglés' : 'español'}`}
        disabled={isTransitioning}
      >
        <AnimatePresence mode="wait">
          {/* Fondo coloreado en hover */}
          {isHovered && (
            <motion.div
              key="hover-background"
              className={`absolute inset-0 ${getBackgroundColor(alternativeLanguage)}`}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.3 }}
            />
          )}
          
          {/* Fondo de transición al hacer clic */}
          {isTransitioning && (
            <motion.div
              key="transition-background"
              className={`absolute inset-0 ${getBackgroundColor(alternativeLanguage)}`}
              initial={{ opacity: 1, scale: 1 }}
              animate={{ opacity: 0, scale: 1.2 }}
              transition={{ duration: 0.3}}
            />
          )}
        </AnimatePresence>

        {/* Texto del idioma actual */}
        <motion.span 
          className={`text-sm font-medium z-10 ${
            isHovered 
              ? getTextColor(alternativeLanguage, true) 
              : getTextColor(activeLanguage, false)
          }`}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {isHovered ? alternativeLanguage.toUpperCase() : activeLanguage.toUpperCase()}
        </motion.span>
        
        {/* Línea inferior */}
        {!isHovered && (
          <motion.div
            className={`absolute bottom-0 left-0 right-0 ${getBackgroundColor(activeLanguage)}`}
            initial={{ scaleX: 0, scaleY: 0 }}
            animate={{ scaleX: 1, scaleY: 1 }}
            exit={{ scaleX: 0, scaleY: 0 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </button>
    </div>
  );
};

export default LanguageToggle;
