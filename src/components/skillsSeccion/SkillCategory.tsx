// -----------------------------------------------------------------------------
// SkillCategory.tsx
// Componente reutilizable que representa una categoría de habilidades (ej. Frontend,
// Backend, IoT, etc.). Muestra un título, un ícono representativo y la lista de
// habilidades como chips (ChipSkill).
// -----------------------------------------------------------------------------


import { SiTypescript, SiArduino, SiPostman, SiMongodb, SiPython, SiExpo, SiTsnode, SiProteus, SiRos, SiMqtt } from 'react-icons/si';
import { AiFillCode, AiFillDatabase, AiOutlineQuestion } from 'react-icons/ai';
import { TbBrandCpp, TbBrandReactNative, TbBrandVite } from 'react-icons/tb';
import { FaDisplay, FaFigma, FaGitAlt, FaCode } from "react-icons/fa6";
import { FaReact, FaMicrochip } from 'react-icons/fa';
import { VscChip } from "react-icons/vsc";
import { FiTool } from "react-icons/fi";

interface SkillCategoryProps {
  title: string; // Título de la categoría (p. ej. "Frontend", "Backend").
  skills: string[]; // Arreglo de strings que representan las habilidades o tecnologías.
}

/**
 * Componente que agrupa las habilidades dentro de una categoría específica,
 * mostrando un ícono, el título y la lista de skills como chips.
 */
export default function SkillCategory({ title, skills }: SkillCategoryProps) {
  const iconMap: { [key: string]: any } = {
    frontend: <AiFillCode className="w-6 h-6" />,
    backend: <AiFillDatabase className="w-6 h-6" />,
    mecatrónica: <VscChip className="w-6 h-6" />,
    herramientas: <FiTool className="w-6 h-6" />,
  };

  const icon = iconMap[title.toLowerCase()] || <AiOutlineQuestion className="w-6 h-6" />;

  return (
    <>
      <div
        className="
          flex flex-col p-4 rounded-xl gap-2
          bg-[#171717] border border-[#232323]
          hover:bg-[#181818]
          transform transition-all
          hover:-translate-y-1
          shadow-lg shadow-[#151515]
          hover:shadow-[#121212]
        "
      >
        {/* Encabezado con ícono y título */}
        <div className="flex items-center mb-4 gap-2 text-gray-200">
          {icon}
          <h2 className="text-xl font-semibold">{title}</h2>
        </div>

        {/* Lista de habilidades como chips */}
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <ChipSkill key={skill} skillName={skill} />
          ))}
        </div>
      </div>
    </>
  );
}

/**
 * Componente auxiliar para mostrar un "chip" con el nombre de la habilidad,
 * junto con un ícono específico si está mapeado en skillIconMap.
 */
function ChipSkill({ skillName }: { skillName: string }) {
  /**
   * Mapa de iconos por nombre de tecnología.
   * Ajusta según tus skills reales o añade más casos según necesites.
   */
  interface SkillData {
    icon: any;
    background: string;
    border: string;
  }

  const skillIconMap: { [key: string]: SkillData } = {
    "React": { icon: <FaReact className="w-4 h-4 text-cyan-400" />, background: "hover:bg-cyan-900", border: "hover:border-cyan-600" },
    "React Native": { icon: <TbBrandReactNative className="w-4 h-4 text-cyan-400" />, background: "hover:bg-cyan-900", border: "hover:border-cyan-600" },
    "TypeScript": { icon: <SiTypescript className="w-4 h-4 text-blue-400" />, background: "hover:bg-blue-900", border: "hover:border-blue-600" },
    "Figma": { icon: <FaFigma className="w-4 h-4 text-purple-400 text-" />, background: "hover:bg-purple-900", border: "hover:border-purple-600" },
    "HMI": { icon: <FaDisplay className="w-4 h-4 text-blue-500" />, background: "hover:bg-blue-900", border: "hover:border-blue-600" },

    "Node": { icon: <SiTsnode className="w-4 h-4 text-green-400" />, background: "hover:bg-green-900", border: "hover:border-green-600" }, 
    "Vite": { icon: <TbBrandVite className="w-4 h-4 text-fuchsia-400" />, background: "hover:bg-fuchsia-900", border: "hover:border-fuchsia-600" },
    "Expo": { icon: <SiExpo className="w-4 h-4 text-slate-400" />, background: "hover:bg-slate-900", border: "hover:border-slate-600" },
    "Python": { icon: <SiPython className="w-4 h-4 text-blue-400" />, background: "hover:bg-gray-900", border: "hover:border-blue-600" },
    "MongoDB": { icon: <SiMongodb className="w-4 h-4 text-green-400" />, background: "hover:bg-green-900", border: "hover:border-green-600" },

    "Arduino": { icon: <SiArduino className="w-4 h-4 text-blue-500" />, background: "hover:bg-blue-900", border: "hover:border-blue-600" },
    "C++": { icon: <TbBrandCpp className="w-4 h-4 text-blue-500" />, background: "hover:bg-blue-900", border: "hover:border-blue-600" },
    "MQTT": { icon: <SiMqtt className="w-4 h-4 text-violet-400" />, background: "hover:bg-violet-900", border: "hover:border-violet-600" },
    "ROS": { icon: <SiRos className="w-4 h-4 text-blue-500" />, background: "hover:bg-blue-900", border: "hover:border-blue-600" },
    "Ladder": { icon: <FaCode className="w-4 h-4 text-teal-400" />, background: "hover:bg-teal-900", border: "hover:border-teal-600" },

    "Git": { icon: <FaGitAlt className="w-4 h-4 text-orange-500" />, background: "hover:bg-orange-900", border: "hover:border-orange-600" },
    "Atmel Studio": { icon: <FaMicrochip className="w-4 h-4 text-red-400" />, background: "hover:bg-red-900", border: "hover:border-red-600" },
    "Proteus": { icon: <SiProteus className="w-4 h-4 text-indigo-400" />, background: "hover:bg-indigo-900", border: "hover:border-indigo-600" },
    "Postman": { icon: <SiPostman className="w-4 h-4 text-orange-400" />, background: "hover:bg-orange-900", border: "hover:border-orange-600" },
  };

  // Intentamos obtener el ícono correspondiente a la skill, si no existe usamos un ícono de fallback
  const skillData = skillIconMap[skillName] || <AiOutlineQuestion className="w-4 h-4 border-gray-400" />;

  return (
    <>
      <div 
        className={`
          flex flex-row items-center px-3 py-2 rounded-xl gap-2
          bg-[#2A2A2A] border border-[#2A2A2A]
          hover:shadow-inner hover:shadow-[#121212]
          text-xs text-gray-300
          ${skillData.background}
          ${skillData.border}
        `}
        >
        {skillData.icon}
        <p className='font-semibold'>
          {skillName}
        </p>
      </div>
    </>
  );
}
 