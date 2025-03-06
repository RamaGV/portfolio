// App.tsx

import FondoCircuitoVerde from './components/fondo/CircuitBackground';

function App() {
  return (
    <div className="relative min-h-screen text-white select-none">
      {/* Fondo absoluto en la capa 0 */}
      <div className="absolute inset-0 z-0">
        <FondoCircuitoVerde />
      </div>

      {/* Contenido principal en la capa superior (z-10) */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        {/* Sección de Presentación */}
        <header className="max-w-3xl w-full text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Hey, I'm Felipe Giraldo</h1>
          <p className="text-gray-300 text-lg sm:text-xl">
            Developer &amp; Event Coordinator <br />
            2021 - Present
          </p>
        </header>

        {/* Sección de Experiencia */}
        <section className="max-w-3xl w-full mb-16">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Experience</h2>
          <div className="bg-[#202020] p-4 rounded-lg shadow-inner shadow-[#303030]">
            <h3 className="text-xl font-medium mb-1">Developer &amp; Event Coordinator</h3>
            <p className="text-gray-300 text-sm sm:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              condimentum, elit id cursus euismod, elit erat ornare lorem,
              commodo porta sem est ac nisi.
            </p>
          </div>
        </section>

        {/* Sección de Proyectos */}
        <section className="max-w-3xl w-full mb-16">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Projects</h2>
          
          {/* Ejemplo de un proyecto */}
          <div className="bg-[#202020] p-4 rounded-lg shadow-inner shadow-[#303030] mb-4">
            <h3 className="text-xl font-medium mb-1">Kiwilabs</h3>
            <p className="text-gray-300 text-sm sm:text-base">
              Project description or summary about what Kiwilabs does.
            </p>
          </div>

          {/* Otro proyecto */}
          <div className="bg-[#202020] p-4 rounded-lg shadow-inner shadow-[#303030]">
            <h3 className="text-xl font-medium mb-1">Pacoproject</h3>
            <p className="text-gray-300 text-sm sm:text-base">
              Another project or summary of your work here.
            </p>
          </div>
        </section>

        {/* Footer o más contenido */}
        <footer className="max-w-3xl w-full text-center mt-8">
          <p className="text-gray-400 text-sm">
            © 2025 Felipe Giraldo Portfolio
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
