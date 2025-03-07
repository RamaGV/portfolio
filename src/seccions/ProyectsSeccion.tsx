// -----------------------------------------------------------------------------
// ProyectsSeccion.tsx
// Sección principal que muestra el título "Proyectos" junto con un ícono,
// y renderiza varios ProyectItem dentro de una cuadrícula.
// -----------------------------------------------------------------------------

import ProyectItem from '../components/proyectSeccion/ProyectItem';

function ProyectsSeccion() {
  return (
    <>
      <section className="
          max-w-5xl w-full p-8 rounded-lg 
          bg-[#171717] 
          shadow-inner shadow-[#232323]
        "
      >
        {/* Encabezado */}
        <h1 className="mb-2 font-semibold text-3xl text-gray-200">
          Proyectos
        </h1>

        {/* Contenedor en cuadrícula para los proyectos */}
        <div className="grid grid-cols-2 gap-4 rounded-xl p-4">
          <ProyectItem
            type="hydro"
            name="Hydro Edge"
            description="HydroEdge es un sistema automatizado de hidroponia que integra aplicación móvil, sensores IoT y microcontrolador. Permite monitorear y controlar parámetros de crecimiento, ajustando el ambiente y la nutrición a través de lógica de control."
            imageUrl="../src/assets/proyects/proj_1.webp"
            githubLink="https://github.com/tu-repo"
            hostLink="https://kiwilabs.com"
            playStoreLink="https://kiwilabs.com"
          />

          <ProyectItem
            type="ledfit"
            name="Led Fit"
            description="Ledfit combina una aplicación móvil de entrenamiento con un tablero LED personalizado, diseño y cortado mediante CNC laser. El proyecto integra datos de ejercicios y métricas en tiempo real, motivando al usuario."
            imageUrl="../src/assets/proyects/proj_2.webp"
            githubLink="https://github.com/tu-repo"
            hostLink="https://kiwilabs.com"
            playStoreLink="https://kiwilabs.com"
          />

          <ProyectItem
            type="peekByLight"
            name="Peek by Light"
            description="Project description or summary about what Kiwilabs does."
            imageUrl="../src/assets/proyects/proj_3.webp"
            githubLink="https://github.com/RamaGV/PIC2_PTL_C"
            documentLink="https://drive.google.com/file/d/12KYl03yniOt4B5wKHoVWHq8WsmDLtMkB/view?usp=sharing"
          />

          <ProyectItem
            type="robotArm"
            name="Brazo Robotico"
            description="Another project or summary of your work here."
            imageUrl="../src/assets/proyects/proj_4.webp"
            githubLink="https://github.com/tu-repo"
            hostLink="https://kiwilabs.com"
          />
        </div>
      </section>
    </>
  );
}

export default ProyectsSeccion;
