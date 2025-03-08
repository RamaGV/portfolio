// -----------------------------------------------------------------------------
// ProyectItem.tsx
// -----------------------------------------------------------------------------
/**
 * @file ProyectItem.tsx
 * @author RamaGV
 * @version 1.0.0
 * @description Componente reutilizable que representa cada proyecto individual en el portafolio.
 * Este componente sigue el patrón de diseño de componente presentacional, encargándose
 * exclusivamente de la representación visual de los datos del proyecto.
 * 
 * @lastModified 2025-03-07
 */

import { useState, useEffect, useRef } from "react";
import { MdOutlineEnergySavingsLeaf } from "react-icons/md";
import { LuGithub, LuScreenShare } from "react-icons/lu";
import { HiDocumentDownload } from "react-icons/hi";
import { FaPersonRunning } from "react-icons/fa6";
import { GiMechanicalArm } from "react-icons/gi";
import { PiShareNetwork } from "react-icons/pi";
import { SiGoogleplay } from "react-icons/si";

/**
 * Props para el componente ProyectItem
 * @type ProyectItemProps
 */
export type ProyectItemProps = {
  /** Identificador del tipo de proyecto, usado para seleccionar el ícono correspondiente */
  type: string;
  
  /** Nombre o título del proyecto */
  name: string;
  
  /** Descripción detallada del proyecto */
  description: string;
  
  /** URL de la imagen de portada del proyecto */
  imageUrl: string;
  
  /** Lista de tecnologías utilizadas en el proyecto */
  technologies?: string[];
  
  /** Lista de categorías a las que pertenece el proyecto */
  categories?: string[];
  
  /** (Opcional) Enlace al repositorio de código en GitHub */
  githubLink?: string;
  
  /** (Opcional) Enlace a la versión desplegada del proyecto */
  hostLink?: string;
  
  /** (Opcional) Enlace a Google Play Store si es una aplicación móvil */
  playStoreLink?: string;
  
  /** (Opcional) Enlace a documentación o recursos adicionales */
  documentLink?: string;
}

/**
 * @component ProyectItem
 * @description Componente que renderiza un proyecto individual con animaciones
 * y efectos interactivos para mejorar la experiencia del usuario.
 * 
 * @param {ProyectItemProps} props - Propiedades del componente
 * @returns {JSX.Element} Elemento JSX que representa el proyecto
 */
export default function ProyectItem({
  type,
  name,
  description,
  imageUrl,
  technologies = [],
  githubLink,
  hostLink,
  playStoreLink,
  documentLink,
}: ProyectItemProps) {
  // Estado para controlar la animación de hover
  const [isHovered, setIsHovered] = useState(false);
  
  // Referencia al elemento para animaciones basadas en scroll
  const projectRef = useRef<HTMLDivElement>(null);
  
  // Estado para controlar la animación de entrada
  const [isVisible, setIsVisible] = useState(false);

  // Mapa de íconos según el tipo de proyecto
  const iconMap: { [key: string]: any } = {
    hydro: <MdOutlineEnergySavingsLeaf className="w-6 h-6 shadow-lg shadow-[#121212]" />,
    ledfit: <FaPersonRunning className="w-6 h-6 shadow-lg shadow-[#121212]" />,
    peekByLight: <PiShareNetwork className="w-6 h-6 shadow-lg shadow-[#121212]" />,
    robotArm: <GiMechanicalArm className="w-6 h-6 shadow-lg shadow-[#121212]" />,
  };

  // Seleccionar el ícono correspondiente o null si no existe
  const icon = iconMap[type] || null;

  /**
   * Efecto para detectar cuando el componente entra en el viewport
   * e iniciar la animación de entrada
   */
  useEffect(() => {
    // Configuración del observer para detectar intersección
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 } // Activar cuando al menos 10% del elemento es visible
    );

    // Observar el elemento si existe
    if (projectRef.current) {
      observer.observe(projectRef.current);
    }

    // Limpiar observer al desmontar
    return () => {
      if (projectRef.current) {
        observer.unobserve(projectRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={projectRef}
      className={`
        flex flex-col p-4 rounded-xl gap-4
        justify-between
        bg-[#171717] border border-[#232323]
        transform transition-all duration-500
        shadow-lg shadow-[#151515]
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
        ${isHovered ? "bg-[#1a1a1a] -translate-y-1 shadow-xl shadow-[#101010]" : ""}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Header: Ícono y título del proyecto */}
      <div className="flex items-center mb-1 gap-3 text-gray-300">
        <div className={`transition-transform duration-300 ${isHovered ? "scale-110" : ""}`}>
          {icon}
        </div>
        <h2 className="text-xl font-semibold">{name}</h2>
      </div>

      {/* Descripción del proyecto */}
      <p className="text-gray-400 text-sm px-2 leading-relaxed">{description}</p>

      {/* Tecnologías utilizadas (si existen) */}
      {technologies.length > 0 && (
        <div className="flex flex-wrap gap-2 px-2">
          {technologies.map((tech, index) => (
            <span 
              key={index} 
              className="text-xs bg-[#232323] text-gray-400 px-2 py-1 rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>
      )}

      {/* Imagen de portada con efecto de zoom en hover */}
      <div className="overflow-hidden rounded-xl">
        <img
          className={`
            w-full h-36 object-cover rounded-xl
            transition-transform duration-500
            ${isHovered ? "scale-105" : "scale-100"}
          `}
          src={imageUrl}
          alt={`Imagen del proyecto ${name}`}
          loading="lazy"
        />
      </div>

      {/* Enlaces a recursos externos */}
      <div className="flex flex-row items-center justify-between space-x-4">
        {githubLink && (
          <ChipLink link={githubLink} type="github" isHovered={isHovered} />
        )}
        {hostLink && (
          <ChipLink link={hostLink} type="host" isHovered={isHovered} />
        )}
        {playStoreLink && (
          <ChipLink link={playStoreLink} type="playstore" isHovered={isHovered} />
        )}
        {documentLink && (
          <ChipLink link={documentLink} type="document" isHovered={isHovered} />
        )}
      </div>
    </div>
  );
}

/**
 * Props para el componente ChipLink
 * @type ChipLinkProps
 */
type ChipLinkProps = {
  /** URL del enlace */
  link: string;
  
  /** Tipo de enlace para determinar el ícono a mostrar */
  type: 'github' | 'host' | 'playstore' | 'document';
  
  /** Estado de hover del componente padre */
  isHovered: boolean;
}

/**
 * @component ChipLink
 * @description Componente auxiliar que renderiza un botón/enlace con ícono
 * para los diferentes recursos externos del proyecto.
 * 
 * @param {ChipLinkProps} props - Propiedades del componente
 * @returns {JSX.Element} Elemento JSX que representa el enlace
 */
function ChipLink({ link, type, isHovered }: ChipLinkProps) {
  // Mapa de etiquetas según el tipo de enlace
  const labelMap: { [key: string]: string } = {
    github: 'Código',
    host: 'Demo',
    playstore: 'Play Store',
    document: 'Documentación'
  };

  return (
    <a
      className={`
        w-full py-2 rounded-xl 
        bg-[#212121] text-gray-500
        hover:text-gray-200
        shadow-lg 
        transform transition-all duration-300
        flex items-center justify-center gap-2
        ${isHovered ? "bg-[#252525] shadow-[#0a0a0a]" : "shadow-[#151515]"}
      `}
      href={link}
      target="_blank"
      rel="noreferrer"
      aria-label={`Ver ${labelMap[type]} del proyecto`}
    >
      {/* Ícono según el tipo de enlace */}
      {type === 'github' && <LuGithub className="w-4 h-4" />}
      {type === 'host' && <LuScreenShare className="w-4 h-4" />}
      {type === 'playstore' && <SiGoogleplay className="w-4 h-4" />}
      {type === 'document' && <HiDocumentDownload className="w-4 h-4"/> }
      
      {/* Mostrar etiqueta en hover */}
      {isHovered && (
        <span className={`text-xs transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}>
          {labelMap[type]}
        </span>
      )}
    </a>
  );
}
