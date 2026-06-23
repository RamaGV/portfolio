// src/sections/AboutMeSection.tsx

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// Imported components
import FloatingElements from '../components/about/FloatingElements';
import SectionHeader from '../components/about/SectionHeader';
import RevealSection from '../components/about/RevealSection';
import AnimatedCode from '../components/about/AnimatedCode';
import CallToAction from '../components/about/CallToAction';
import ProfileCard from '../components/about/ProfileCard';

// Componente principal AboutMeSection
const AboutMeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section 
      id="about" 
      ref={ref}
      className="py-20 relative bg-white dark:bg-gray-900 overflow-hidden section"
    >
      {/* Elementos flotantes y decoraciones de fondo */}
      <FloatingElements isInView={isInView} />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Encabezado de la sección */}
        <SectionHeader 
          title="Sobre Mí"
          subtitle="Desarrollador apasionado por crear soluciones tecnológicas elegantes y funcionales con un enfoque en la experiencia de usuario y el código limpio."
          isInView={isInView}
        />
        
        {/* Estructura asimétrica de dos columnas para contenido principal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-16">
          {/* Columna izquierda (más estrecha) */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <ProfileCard />
              <AnimatedCode />
            </motion.div>
          </div>
          
          {/* Columna derecha (más ancha) - Storytelling visual */}
          <div className="lg:col-span-7">
            <RevealSection title="Mi Trayectoria Profesional" align="left">
              <div className="prose dark:prose-invert max-w-none">
                <p className="mb-4">
                Con una sólida formación en desarrollo web, he transformado conceptos y requerimientos complejos en soluciones digitales funcionales y elegantes,
                a través de diversos proyectos, he 
                perfeccionado
                mi capacidad para traducir necesidades de negocio en código eficiente.
                </p>
                <p className="mb-4">
                A través de diversos proyectos, he mejorado mi capacidad para traducir necesidades de negocio en código eficiente. Cada desafío me ha permitido refinar mis habilidades técnicas mientras aprendo nuevas formas de abordar problemas.
                </p>
                <p>
                Lo que más disfruto es ver cómo las soluciones que desarrollo tienen un impacto positivo en la experiencia del usuario final.
                </p>
              </div>
            </RevealSection>


            <RevealSection title="Enfoque Técnico" align="left" delay={0.3}>
              <div className="prose dark:prose-invert max-w-none">
                <p className="mb-4">
                  Mi trabajo se centra en crear aplicaciones web y móviles que sean tanto funcionales como intuitivas para el usuario. Las áreas donde puedo aportar valor incluyen:
                </p>
                <ul className="space-y-2 pl-5 list-disc marker:text-primary-500 dark:marker:text-primary-400">
                  <li>Desarrollo de interfaces responsivas y accesibles</li>
                  <li>Implementación de APIs y conexión con bases de datos</li>
                  <li>Optimización de rendimiento web</li>
                  <li>Desarrollo de aplicaciones móviles con React Native y Flutter</li>
                  <li>Integración de servicios en la nube y arquitecturas serverless</li>
                  <li>Colaboración efectiva en equipos de desarrollo</li>
                </ul>
                <p className="mt-4">
                  Busco constantemente ampliar mis conocimientos técnicos para adaptarme a las nuevas tecnologías y metodologías que surgen en este campo tan dinámico.
                </p>
              </div>
            </RevealSection>
          </div>
        </div>
        
        {/* Llamada a la acción 
        <CallToAction 
          isInView={isInView}
          text="Trabajemos Juntos"
          href="#contact"
        />
        */}
      </div>
    </section>
  );
};

export default AboutMeSection; 
