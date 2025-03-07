// App.tsx

import FondoCircuitoVerde from './components/fondo/CircuitBackground';

import HeroSeccion from './seccions/HeroSeccion';
import ExperiencieSeccino from './seccions/ExperiencieSeccion';
import ProyectsSeccion from './seccions/ProyectsSeccion';
import SkillsSeccion from './seccions/SkillsSeccion';
import DevSeccion from './seccions/DevSeccion'; 
import FooterSeccion from './seccions/FooterSeccion';

function App() {
  return (
    <div className="relative min-h-screen text-white select-none font-sans">
      {/* Fondo animado en la capa 0 */}
      <div className="absolute inset-0 z-0">
        <FondoCircuitoVerde />
      </div>

      {/* Contenido en la capa superior (z-10) */}
      <div className="relative flex flex-col gap-12 items-center justify-around h-full z-10 py-12">

        <HeroSeccion />

        <ExperiencieSeccino />
        
        <ProyectsSeccion />

        <SkillsSeccion />

        <DevSeccion />

        <FooterSeccion />

      </div>
    </div>
  );
}

export default App;
