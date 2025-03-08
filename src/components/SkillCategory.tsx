// -----------------------------------------------------------------------------
// SkillCategory.tsx
// Componente reutilizable que representa una categoría de habilidades (ej. Frontend,
// Backend, IoT, etc.). Muestra un título, un ícono representativo y la lista de
// habilidades como chips (ChipSkill).
// -----------------------------------------------------------------------------

import { useState } from 'react';
import { SiTypescript, SiArduino, SiPostman, SiMongodb, SiPython, SiExpo, SiTsnode, SiProteus, SiRos, SiMqtt } from 'react-icons/si';
import { AiFillCode, AiFillDatabase, AiOutlineQuestion } from 'react-icons/ai';
import { TbBrandCpp, TbBrandReactNative, TbBrandVite } from 'react-icons/tb';
import { FaDisplay, FaFigma, FaGitAlt, FaCode } from "react-icons/fa6";
import { FaReact, FaMicrochip } from 'react-icons/fa';
import { VscChip } from "react-icons/vsc";
import { FiTool } from "react-icons/fi";

type SkillCategoryProps = {
  title: string; // Título de la categoría (p. ej. "Frontend", "Backend").
  description?: string; // Descripción opcional de la categoría
  skills: string[]; // Arreglo de strings que representan las habilidades o tecnologías.
  selectedSkill: string | null; // Habilidad seleccionada globalmente
  onSkillSelect: (skill: string) => void; // Función para seleccionar una habilidad
}

/**
 * @component SkillCategory
 * @description Componente que agrupa las habilidades dentro de una categoría específica,
 * mostrando un ícono, el título y la lista de skills como chips.
 * 
 * @param {SkillCategoryProps} props - Propiedades del componente
 * @returns {React.ReactNode} Elemento que representa una categoría de habilidades
 */
export default function SkillCategory({ 
  title, 
  description, 
  skills, 
  selectedSkill, 
  onSkillSelect 
}: SkillCategoryProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Mapa de iconos para las categorías
  const iconMap: { [key: string]: any } = {
    frontend: <AiFillCode className="w-6 h-6" />,
    backend: <AiFillDatabase className="w-6 h-6" />,
    mecatrónica: <VscChip className="w-6 h-6" />,
    herramientas: <FiTool className="w-6 h-6" />,
  };

  // Obtener el icono correspondiente o usar uno por defecto
  const icon = iconMap[title.toLowerCase()] || <AiOutlineQuestion className="w-6 h-6" />;

  // Verificar si alguna habilidad de esta categoría está seleccionada
  const hasSelectedSkill = selectedSkill !== null && skills.includes(selectedSkill);

  return (
    <div
      className={`
        flex flex-col p-5 rounded-xl gap-3
        bg-[#1a1a1a] border border-[#232323]
        transform transition-all duration-300
        ${isHovered ? 'scale-105 shadow-lg shadow-[#121212]/40' : 'shadow-md shadow-[#151515]/30'}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Encabezado con ícono y título */}
      <div className="flex items-center mb-2 gap-3">
        <div className={`
          p-2 rounded-lg
          ${isHovered ? 'bg-green-900/20 text-green-400' : 'bg-gray-800/50 text-gray-300'}
          transition-all duration-300
        `}>
          {icon}
        </div>
        <div>
          <h2 className={`
            text-xl font-semibold
            ${isHovered ? 'text-green-600' : 'text-gray-300'}
            transition-colors duration-300
          `}>
            {title}
          </h2>
          {description && (
            <p className="text-gray-400 text-sm mt-1">{description}</p>
          )}
        </div>
      </div>

      {/* Lista de habilidades como chips */}
      <div className="flex flex-wrap gap-2 mt-1">
        {skills.map((skill) => (
          <ChipSkill 
            key={skill} 
            skillName={skill} 
            isSelected={selectedSkill === skill}
            onClick={() => onSkillSelect(skill)}
          />
        ))}
      </div>

      {/* Panel de información detallada cuando se selecciona una habilidad de esta categoría */}
      {hasSelectedSkill && (
        <div className="mt-3 p-3 bg-[#232323] rounded-lg animate-fadeIn">
          <SkillDetail skillName={selectedSkill} />
        </div>
      )}
    </div>
  );
}

type ChipSkillProps = {
  skillName: string;
  isSelected: boolean;
  onClick: () => void;
}

/**
 * @component ChipSkill
 * @description Componente auxiliar para mostrar un "chip" con el nombre de la habilidad,
 * junto con un ícono específico si está mapeado en skillIconMap.
 * 
 * @param {ChipSkillProps} props - Propiedades del componente
 * @returns {React.ReactNode} Elemento que representa un chip de habilidad
 */
function ChipSkill({ skillName, isSelected, onClick }: ChipSkillProps) {
  const [isHovered, setIsHovered] = useState(false);

  /**
   * Mapa de iconos y estilos por nombre de tecnología.
   */
  type SkillData = {
    icon: any;
    background: string;
    border: string;
    color: string;
  }

  const skillIconMap: { [key: string]: SkillData } = {
    "React": { 
      icon: <FaReact className="w-4 h-4" />, 
      background: "bg-cyan-900/20 hover:bg-cyan-900/40", 
      border: "border-cyan-600/30 hover:border-cyan-500/60",
      color: "text-cyan-400"
    },
    "React Native": { 
      icon: <TbBrandReactNative className="w-4 h-4" />, 
      background: "bg-cyan-900/20 hover:bg-cyan-900/40", 
      border: "border-cyan-600/30 hover:border-cyan-500/60",
      color: "text-cyan-400"
    },
    "TypeScript": { 
      icon: <SiTypescript className="w-4 h-4" />, 
      background: "bg-blue-900/20 hover:bg-blue-900/40", 
      border: "border-blue-600/30 hover:border-blue-500/60",
      color: "text-blue-400"
    },
    "Figma": { 
      icon: <FaFigma className="w-4 h-4" />, 
      background: "bg-purple-900/20 hover:bg-purple-900/40", 
      border: "border-purple-600/30 hover:border-purple-500/60",
      color: "text-purple-400"
    },
    "HMI": { 
      icon: <FaDisplay className="w-4 h-4" />, 
      background: "bg-blue-900/20 hover:bg-blue-900/40", 
      border: "border-blue-600/30 hover:border-blue-500/60",
      color: "text-blue-500"
    },
    "Node": { 
      icon: <SiTsnode className="w-4 h-4" />, 
      background: "bg-green-900/20 hover:bg-green-900/40", 
      border: "border-green-600/30 hover:border-green-500/60",
      color: "text-green-400"
    }, 
    "Vite": { 
      icon: <TbBrandVite className="w-4 h-4" />, 
      background: "bg-fuchsia-900/20 hover:bg-fuchsia-900/40", 
      border: "border-fuchsia-600/30 hover:border-fuchsia-500/60",
      color: "text-fuchsia-400"
    },
    "Expo": { 
      icon: <SiExpo className="w-4 h-4" />, 
      background: "bg-slate-900/20 hover:bg-slate-900/40", 
      border: "border-slate-600/30 hover:border-slate-500/60",
      color: "text-slate-400"
    },
    "Python": { 
      icon: <SiPython className="w-4 h-4" />, 
      background: "bg-blue-900/20 hover:bg-blue-900/40", 
      border: "border-blue-600/30 hover:border-blue-500/60",
      color: "text-blue-400"
    },
    "MongoDB": { 
      icon: <SiMongodb className="w-4 h-4" />, 
      background: "bg-green-900/20 hover:bg-green-900/40", 
      border: "border-green-600/30 hover:border-green-500/60",
      color: "text-green-400"
    },
    "Arduino": { 
      icon: <SiArduino className="w-4 h-4" />, 
      background: "bg-blue-900/20 hover:bg-blue-900/40", 
      border: "border-blue-600/30 hover:border-blue-500/60",
      color: "text-blue-500"
    },
    "C++": { 
      icon: <TbBrandCpp className="w-4 h-4" />, 
      background: "bg-blue-900/20 hover:bg-blue-900/40", 
      border: "border-blue-600/30 hover:border-blue-500/60",
      color: "text-blue-500"
    },
    "MQTT": { 
      icon: <SiMqtt className="w-4 h-4" />, 
      background: "bg-violet-900/20 hover:bg-violet-900/40", 
      border: "border-violet-600/30 hover:border-violet-500/60",
      color: "text-violet-400"
    },
    "ROS": { 
      icon: <SiRos className="w-4 h-4" />, 
      background: "bg-blue-900/20 hover:bg-blue-900/40", 
      border: "border-blue-600/30 hover:border-blue-500/60",
      color: "text-blue-500"
    },
    "Ladder": { 
      icon: <FaCode className="w-4 h-4" />, 
      background: "bg-teal-900/20 hover:bg-teal-900/40", 
      border: "border-teal-600/30 hover:border-teal-500/60",
      color: "text-teal-400"
    },
    "Git": { 
      icon: <FaGitAlt className="w-4 h-4" />, 
      background: "bg-orange-900/20 hover:bg-orange-900/40", 
      border: "border-orange-600/30 hover:border-orange-500/60",
      color: "text-orange-500"
    },
    "Atmel Studio": { 
      icon: <FaMicrochip className="w-4 h-4" />, 
      background: "bg-red-900/20 hover:bg-red-900/40", 
      border: "border-red-600/30 hover:border-red-500/60",
      color: "text-red-400"
    },
    "Proteus": { 
      icon: <SiProteus className="w-4 h-4" />, 
      background: "bg-indigo-900/20 hover:bg-indigo-900/40", 
      border: "border-indigo-600/30 hover:border-indigo-500/60",
      color: "text-indigo-400"
    },
    "Postman": { 
      icon: <SiPostman className="w-4 h-4" />, 
      background: "bg-orange-900/20 hover:bg-orange-900/40", 
      border: "border-orange-600/30 hover:border-orange-500/60",
      color: "text-orange-400"
    },
  };

  // Intentamos obtener los datos correspondientes a la skill
  const skillData = skillIconMap[skillName] || {
    icon: <AiOutlineQuestion className="w-4 h-4" />,
    background: "bg-gray-800/20 hover:bg-gray-800/40",
    border: "border-gray-600/30 hover:border-gray-500/60",
    color: "text-gray-400"
  };

  return (
    <div 
      className={`
        flex flex-row items-center px-3 py-2 rounded-xl gap-2
        border transition-all duration-200 cursor-pointer
        ${isSelected 
          ? `${skillData.background.split(' ')[0]} border-green-500/70 ring-1 ring-green-500/30` 
          : `bg-[#232323] ${skillData.border}`
        }
        ${isHovered && !isSelected ? skillData.background : ''}
        ${isHovered || isSelected ? 'shadow-inner shadow-black/20' : ''}
      `}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={skillData.color}>
        {skillData.icon}
      </div>
      <p className={`
        font-medium text-xs
        ${isSelected ? 'text-green-400' : 'text-gray-300'}
      `}>
        {skillName}
      </p>
    </div>
  );
}

type SkillDetailProps = {
  skillName: string;
}

/**
 * @component SkillDetail
 * @description Componente que muestra información detallada sobre una habilidad seleccionada
 * 
 * @param {SkillDetailProps} props - Propiedades del componente
 * @returns {React.ReactNode} Elemento que representa los detalles de una habilidad
 */
function SkillDetail({ skillName }: SkillDetailProps) {
  // Mapa de información detallada por habilidad
  const skillDetailsMap: { [key: string]: { description: string, experience: string, level: number } } = {
    "React": {
      description: "Biblioteca JavaScript para construir interfaces de usuario interactivas",
      experience: "2+ años de experiencia en proyectos profesionales",
      level: 75
    },
    "React Native": {
      description: "Framework para desarrollo de aplicaciones móviles multiplataforma",
      experience: "1+ año desarrollando apps para iOS y Android",
      level: 75
    },
    "TypeScript": {
      description: "Superset de JavaScript con tipado estático",
      experience: "Utilizado en la mayoría de proyectos frontend y backend",
      level: 85
    },
    "Figma": {
      description: "Diseño de interfaces de usuario",
      experience: "1+ año de experiencia en diseño de interfaces",
      level: 66
    },
    "HMI": {
      description: "Diseño de interfaces de usuario para PLCs",
      experience: "1+ año de experiencia en diseño de interfaces y tutoría de estudiantes",
      level: 75
    },

    "Node": {
      description: "Entorno de ejecución de JavaScript del lado del servidor",
      experience: "1+ año de experiencia en implementación de APIs RESTful y servicios backend",
      level: 75
    },
    "Expo": {
      description: "Framework para desarrollo de aplicaciones móviles multiplataforma",
      experience: "1+ año desarrollando apps para iOS y Android",
      level: 80
    },
    "Vite": {
      description: "Framework para desarrollo de aplicaciones web",
      experience: "1+ año desarrollando apps web",
      level: 75
    },
    "Python": {
      description: "Lenguaje de programación de propósito general con enfoque en rendimiento",
      experience: "3+ años utilizando en proyectos de robótica, backend y orientado a objetos",
      level: 75
    },
    "MongoDB": {
      description: "Base de datos NoSQL orientada a documentos",
      experience: "1+ año de experiencia en diseño de esquemas y operaciones CRUD en aplicaciones",
      level: 66
    },

    "Arduino": {
      description: "Plataforma de hardware y software libre para proyectos electrónicos",
      experience: "6+ años desarrollando sistemas embebidos y prototipos IoT",
      level: 90
    },
    "C++": {
      description: "Lenguaje de programación de propósito general con enfoque en rendimiento",
      experience: "10+ años utilizando en proyectos de robótica, sistemas embebidos y orientado a objetos",
      level: 90
    },
    "Ladder": {
      description: "Lenguaje de programación visual para controladores industriales",
      experience: "1+ año utilizado en proyectos de robótica, automatización industrial y tutoría de estudiantes",
      level: 75
    },

    "MQTT": {
      description: "Protocolo de mensajería ligero utilizado en entornos IoT y redes con ancho de banda limitado.",
      experience: "2+ años de experiencia implementando MQTT en proyectos de IoT y automatización industrial.",
      level: 75
    },
    "ROS": {
      description: "Sistema de control de versiones distribuido",
      experience: "Desarrollo en proyectos para robots y sistemas embebidos",
      level: 50
    },

    "Git": {
      description: "Sistema de control de versiones distribuido",
      experience: "+2 años de experiencia en gestión de repositorios, branching y colaboración en equipo",
      level: 66
    },
    "Atmel Studio": { 
      description: "Entorno de desarrollo para microcontroladores Atmel",
      experience: "3+ años desarrollando sistemas embebidos y prototipos IoT",
      level: 80
    },
    "Postman": {
      description: "Herramienta de desarrollo de API",
      experience: "Pruebas de APIs y desarrollo de APIs",
      level: 66
    },
    "Proteus": {
      description: "Simulador de circuitos electrónicos",
      experience: "3+ años de experiencia en diseño y testeo de circuitos electrónicos",
      level: 80
    }
  };

  // Obtener detalles de la habilidad o usar valores por defecto
  const details = skillDetailsMap[skillName] || {
    description: "Tecnología utilizada en proyectos profesionales",
    experience: "Experiencia aplicada en diversos contextos",
    level: 0
  };

  return (
    <div className="text-sm">
      <h3 className="text-green-400 font-medium mb-3">{skillName}</h3>
      <div className="flex flex-col mb-2 gap-1 px-1">
        <p className="text-gray-300">{details.description}</p>
        <p className="text-gray-400">{details.experience}</p>
      </div>
      
      {/* Barra de nivel de habilidad */}
      <div className="w-full bg-gray-700 rounded-full h-1.5 mb-1">
        <div 
          className="bg-green-500 h-1.5 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${details.level}%` }}
        ></div>
      </div>
      <div className="flex justify-between text-xs text-gray-500">
        <span>Principiante</span>
        <span>Avanzado</span>
      </div>
    </div>
  );
}