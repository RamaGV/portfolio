// -----------------------------------------------------------------------------
// ProyectItem.tsx
// Componente reutilizable que representa cada proyecto individual. Muestra
// nombre, descripción, tecnologías, una imagen de portada, y enlaces a GitHub
// o la versión en producción, si están disponibles.
// -----------------------------------------------------------------------------

import { LuGithub, LuScreenShare } from "react-icons/lu";

import { MdOutlineEnergySavingsLeaf } from "react-icons/md";
import { FaPersonRunning } from "react-icons/fa6";
import { PiShareNetwork } from "react-icons/pi";
import { GiMechanicalArm } from "react-icons/gi";

interface ProyectItemProps {
  type: string;
  name: string; // Nombre del proyecto (título).
  description: string; // Breve descripción o resumen del proyecto.
  imageUrl: string; // URL de la imagen que se mostrará como portada o screenshot del proyecto.
  githubLink?: string; // (Opcional) Link al repositorio en GitHub.
  hostLink?: string; // (Opcional) Link a la versión en producción (hosting) del proyecto.
}

/**
 * Componente que representa un solo proyecto, mostrando:
 * - Nombre, descripción y tecnologías
 * - Imagen de portada
 * - Enlaces a GitHub y hosting (si existen)
 */
export default function ProyectItem({
  type,
  name,
  description,
  imageUrl,
  githubLink,
  hostLink,
}: ProyectItemProps) {
  const iconMap: { [key: string]: any } = {
    hydro: <MdOutlineEnergySavingsLeaf className="w-6 h-6 shadow-lg shadow-[#121212]" />,
    ledfit: <FaPersonRunning className="w-6 h-6 shadow-lg shadow-[#121212]" />,
    peekByLight: <PiShareNetwork className="w-6 h-6 shadow-lg shadow-[#121212]" />,
    robotArm: <GiMechanicalArm className="w-6 h-6 shadow-lg shadow-[#121212]" />,
  };

  const icon = iconMap[type] || null;

  return (
    <>
      <div
        className="
          flex flex-col p-4 rounded-xl gap-4
          bg-[#171717] border border-[#232323]
          hover:bg-[#181818]
          transform transition-all 
          hover:-translate-y-1
          shadow-lg shadow-[#151515]
          hover:shadow-[#101010]
        "
      >
        {/* Encabezado con ícono y título */}
        <div className="flex items-center mb-1 gap-3 text-gray-200">
          {icon}
          <h2 className="text-xl font-semibold">{name}</h2>
        </div>

        <p className="text-gray-400 text-sm px-2">{description}</p>

        {/* Imagen de portada o screenshot */}
        <img
          className="w-full h-36 object-cover rounded-xl"
          src={imageUrl}
          alt={name}
        />

        {/* Enlaces condicionales a GitHub y Hosting */}
        <div className="flex flex-row items-center justify-between space-x-4">
          {githubLink && (
            <ChipLink link={githubLink} type="github" />
          )}
          {hostLink && (
            <ChipLink link={hostLink} type="host" />
          )}
        </div>
      </div>
    </>
  );
}

/**
 * Componente auxiliar para renderizar un botón/enlace que dirige a
 * GitHub o al hosting en producción, según el tipo especificado.
 */
function ChipLink({ link, type }: { link: string; type: 'github' | 'host' }) {

  return (
    <>
      <a
        className="
          w-full py-2 rounded-xl 
          bg-[#212121] text-gray-500
          hover:text-gray-200
          shadow-lg shadow-[#151515]
          hover:shadow-[#101010]
          transform transition-all
          flex items-center justify-center gap-2
        "
        href={link}
        target="_blank"
        rel="noreferrer"
      >
        {type === 'github' && <LuGithub className="w-4 h-4" />}
        {type === 'host' && <LuScreenShare className="w-4 h-4" />}
      </a>
    </>
  );
}
