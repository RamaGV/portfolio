// src/seccions/HeroSeccion.tsx

import { HiOutlineLocationMarker } from 'react-icons/hi';

import ButtonHire from '../components/heroSeccion/ButtonHire';
import ButtonLink from '../components/heroSeccion/ButtonLink';

function HeroSeccion() {
  return (
    <>
      <section className="flex flex-row items-center justify-around max-w-5xl w-full bg-[#171717] p-8 rounded-lg shadow-inner shadow-[#232323]">
        {/* Imagen de perfil */}
        <div className='w-1/3'>
          <img
            className="w-52 h-52 rounded-3xl object-cover"
            src="../src/assets/perfil.webp"
            alt="FelipeGiraldoAvatar"
          />
        </div>

        {/* Contenido de la presentación */}
        <div className="flex flex-col w-full h-full gap-2 items-start justify-around text-left">
          {/* Botones: [Hire me] & [Email, Linkedin, CV] */}
          <div className="flex flex-row items-center justify-between w-full mb-2">
            <ButtonHire />
            <div className='flex flex-row gap-2'>
              <ButtonLink icon="correo" link="mailto:tu_correo@ejemplo.com" />
              <ButtonLink icon="linkedin" link="https://www.linkedin.com/in/tu-perfil/" />
              <ButtonLink icon="cv" link="/cv.pdf" />
            </div>
          </div>

          {/* Nombre y descripción */}
          <h1 className="text-3xl font-bold"> Ramiro Vazquez </h1>
          <div className="flex flex-col items-start justify-between gap-2 text-gray-400 text-sm">
            <span>
              Soy estudiante de ingeniería en mecatrónica con sólida formación
              en sistemas y experiencia en soluciones tecnológicas. 
            </span>
            <span>
              He trabajado con microcontroladores, desarrollo web y aplicaciones móviles,
              sistemas embebidos, automatización con lógica ladder y GRAFCET.
            </span>
          </div>

          {/* Ubicación (ícono + texto) */}
          <div className="flex items-center gap-1 text-gray-400 text-sm">
            <HiOutlineLocationMarker className="w-5 h-5" />
            <span className=''>Uruguay</span>
          </div>
        </div>
      </section>
    </>
  )
}

export default HeroSeccion
