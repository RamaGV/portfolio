// App.tsx

import FondoCircuitoVerde from './components/fondo/CircuitBackground';

import HeroSeccion from './seccions/HeroSeccion';
import ExperiencieSeccion from './seccions/ExperiencieSeccion';
import ProyectsSeccion from './seccions/ProyectsSeccion';
import SkillsSeccion from './seccions/SkillsSeccion';
import FooterSeccion from './seccions/FooterSeccion';

function App() {
  return (
    <div className="relative">
      {/* Fondo animado en la capa 0 */}
      <div className="absolute inset-0 z-0">
        <FondoCircuitoVerde />
      </div>

      {/* Contenido en la capa superior (z-10) */}
      <div className="relative  text-white select-none py-12">
        <div className="flex min-h-screen flex-col items-center justify-around h-full space-y-12">
          <HeroSeccion />

          <ExperiencieSeccion />
          
          <ProyectsSeccion />

          <SkillsSeccion />

          <FooterSeccion />
        </div>
      </div>
    </div>
  );
}

export default App;
