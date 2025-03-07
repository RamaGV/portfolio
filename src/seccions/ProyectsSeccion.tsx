// -----------------------------------------------------------------------------
// ProyectsSeccion.tsx
// Sección principal que muestra el título "Proyectos" junto con un ícono,
// y renderiza varios ProyectItem dentro de una cuadrícula.
// -----------------------------------------------------------------------------

import ProyectItem from '../components/proyectSeccion/ProyectItem';

function ProyectsSeccion() {
  return (
    <>
      <section className="max-w-5xl w-full bg-[#171717] p-8 rounded-lg shadow-inner shadow-[#232323]">
        {/* Encabezado */}
        <h1 className="text-2xl font-semibold text-gray-200 mb-2 flex items-center gap-2">
          Proyectos
        </h1>

        {/* Contenedor en cuadrícula para los proyectos */}
        <div className="grid grid-cols-2 gap-4 rounded-xl p-4">
          <ProyectItem
            type="hydro"
            name="Hydro Edge"
            description="Project description or summary about what Kiwilabs does."
            imageUrl="../src/assets/proyects/proj_1.webp"
            githubLink="https://github.com/tu-repo"
            hostLink="https://kiwilabs.com"
          />

          <ProyectItem
            type="ledfit"
            name="Led Fit"
            description="An application to teach and manage English classes."
            imageUrl="../src/assets/proyects/proj_2.webp"
            githubLink="https://github.com/tu-repo"
          />

          <ProyectItem
            type="peekByLight"
            name="Peek by Light"
            description="Project description or summary about what Kiwilabs does."
            imageUrl="../src/assets/proyects/proj_3.webp"
            githubLink="https://github.com/tu-repo"
            hostLink="https://kiwilabs.com"
          />

          <ProyectItem
            type="robotArm"
            name="Brazo Robotico"
            description="Another project or summary of your work here."
            imageUrl="../src/assets/proyects/proj_4.webp"
            githubLink="https://github.com/tu-repo"
          />
        </div>
      </section>
    </>
  );
}

export default ProyectsSeccion;
