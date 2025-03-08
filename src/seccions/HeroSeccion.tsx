// src/seccions/HeroSeccion.tsx

import { HiOutlineLocationMarker } from 'react-icons/hi';
import ButtonHire from '../components/ButtonHire';
import IconButton from '../components/IconButton';
import { socialLinks } from '../data';

/**
 * @component HeroSeccion
 * @description Sección principal del portfolio que muestra la presentación personal
 */
export default function HeroSeccion() {

  return (
    <section 
      id="home"
      className="
        flex flex-col items-center p-8 justify-between
        max-w-5xl w-full bg-[#171717] rounded-lg
        shadow-inner shadow-[#232323]
      "
    >
      {/* Contenedor principal con espaciado adecuado */}
      <div className="w-full flex flex-row items-center gap-8">
        {/* Columna izquierda: Imagen de perfil */}
        <div className="w-1/3 flex justify-center p-2">
          <img
            className="
              w-full h-full rounded-3xl object-cover 
              shadow-lg shadow-black/30
            "
            src="../src/assets/perfil.webp"
            alt="Ramiro Vazquez"
            loading="eager"
          />
        </div>

        {/* Columna derecha: Información personal */}
        <div className="w-2/3 flex flex-col gap-4 items-start justify-between">
          {/* Fila superior: Botón de disponibilidad y enlaces sociales */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full gap-4 sm:gap-0">
            <ButtonHire />
            <div className="flex items-center gap-2">
              {socialLinks.slice().reverse().map((link, index) => (
                <IconButton
                  key={`hero-social-${index}`}
                  icon={link.iconSmall}
                  href={link.href}
                  download={link.download}
                  target={link.target}
                  rel={link.rel}
                  className={link.hoverClass}
                />
              ))}
            </div>
          </div>

          {/* Nombre */}
          <div className="mt-2">
            <h1 className="text-4xl font-bold text-white">
              Ramiro Vazquez
            </h1>
          </div>

          {/* Descripción personal */}
          <div className="flex flex-col gap-3 text-gray-300 text-sm leading-relaxed">
            <p>
              Soy estudiante de ingeniería en mecatrónica con sólida formación
              en sistemas y experiencia en soluciones tecnológicas.
            </p>
            <p>
              He trabajado con microcontroladores, desarrollo web y aplicaciones móviles,
              sistemas embebidos, automatización con lógica ladder y GRAFCET.
            </p>
          </div>

          <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#1a1a1a] text-gray-400 text-sm border border-[#232323]">
            <HiOutlineLocationMarker className="w-4 h-4 text-gray-300" />
            <span>Uruguay</span>
          </div>
        </div>
      </div>
    </section>
  );
}
