// -----------------------------------------------------------------------------
// SkillsSeccion.tsx
// Sección principal que muestra el título "Skills" junto con un ícono,
// y agrupa diferentes categorías de habilidades (Frontend, Backend, etc.)
// dentro de un contenedor. Cada categoría se renderiza con el componente
// SkillCategory.
// -----------------------------------------------------------------------------

import SkillCategory from '../components/skillsSeccion/SkillCategory';

function SkillsSeccion() {
  return (
    <>
      <section className="max-w-5xl w-full bg-[#171717] p-8 rounded-lg shadow-inner shadow-[#232323]">
        {/* Encabezado */}
        <h1 className="text-2xl font-semibold text-gray-200 mb-2 flex items-center gap-2">
          Skills
        </h1>

        {/* Contenedor en cuadrícula para las distintas categorías de habilidades */}
        <div className="grid grid-cols-2 gap-4 rounded-xl p-4">
          <SkillCategory
            title="Frontend"
            skills={["React", "React Native", "TypeScript", "Figma", "HMI"]}
          />  
          <SkillCategory
            title="Backend"
            skills={["Node", "Expo", "Vite", "Python", "MongoDB"]}
          />
          <SkillCategory
            title="Mecatrónica"
            skills={["Arduino", "C++", "Ladder", "MQTT", "ROS"]}
          />
          <SkillCategory
            title="Herramientas"
            skills={["Git", "Atmel Studio", "Postman", "Proteus"]}
          />
        </div>
      </section>
    </>
  );
}

export default SkillsSeccion;
