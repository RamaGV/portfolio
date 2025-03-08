// src/seccions/ExperiencieSeccion.tsx
import { useState, useRef, useEffect } from 'react';
import { IoBriefcaseOutline } from 'react-icons/io5';
import ExperienceItem from '../components/ExperienceItem';

/**
 * @component ExperiencieSeccion
 * @description Sección que muestra la experiencia profesional en formato de línea de tiempo
 * con efectos interactivos y animaciones para mejorar la experiencia del usuario.
 * 
 * @returns {React.ReactNode} Elemento que representa la sección de experiencia
 */
export default function ExperiencieSeccion() {
  // Referencia para la animación de entrada
  const sectionRef = useRef<HTMLElement>(null);
  
  // Estado para controlar la visibilidad de la sección
  const [isVisible, setIsVisible] = useState(false);

  // Datos de experiencia de ejemplo
  const experiences = [
    {
      startDate: "Feb 2024",
      endDate: "Presente",
      title: "Desarrollador Full Stack",
      company: "TrainingPeek",
      location: "Río Negro, Argentina",
      modality: "Remoto",
      summary: "Desarrollo y mantenimiento de la aplicación trainingpeek.com utilizando Next.js para el frontend y Node.js para el backend.",
      responsibilities: [
        "Desarrollé y diseñé una aplicación web utilizando Next.js para entrenamiento personalizado.",
        "Implementé el backend para gestionar usuarios y pagos utilizando la API de Mercado Pago.",
        "Diseñé y desarrollé la interfaz de usuario, asegurando una experiencia fluida y receptiva."
      ],
      achievements: [
        "Mejoré el rendimiento de la aplicación, logrando una reducción del 30% en los tiempos de carga de las páginas.",
        "Integré con éxito la API de Mercado Pago."
      ]
    },
    {
      startDate: "Jul 2022",
      endDate: "Feb 2023",
      title: "Desarrollador Junior Full Stack",
      company: "DevtionIT",
      location: "Buenos Aires, Argentina",
      modality: "Remoto",
      summary: "Desarrollo y mantenimiento de aplicaciones web utilizando React.js. Colaboré con el equipo para implementar nuevas funciones y corregir errores. Fortalecí mis habilidades en React al trabajar en grandes proyectos en equipo.",
      responsibilities: [
        "Desarrollé y mantuve interfaces de usuario interactivas utilizando React.js.",
        "Colaboré con diseñadores para traducir diseños de usuario en código funcional y responsivo.",
        "Participé en revisiones de código y pruebas para garantizar la calidad del software."
      ],
      achievements: [
        "Implementé funcionalidades clave que mejoraron la experiencia del usuario en un 25%.",
        "Reduje el tiempo de carga inicial de la aplicación en un 40% mediante optimizaciones de código."
      ]
    },
    {
      startDate: "Mar 2021",
      endDate: "Jun 2022",
      title: "Desarrollador y Coordinador de Eventos",
      company: "VolkGames (TV Caracol)",
      location: "Medellín, Colombia",
      modality: "Híbrido",
      summary: "Eventos de juego coordinados y gestionados con participación nacional e internacional. Configure con éxito un servidor en la nube para un evento de juego con más de 300 participantes.",
      responsibilities: [
        "Coordiné eventos de gaming a nivel nacional e internacional.",
        "Desarrollé soluciones técnicas para transmisiones en vivo.",
        "Gestioné equipos de hasta 15 personas durante eventos en vivo."
      ],
      achievements: [
        "Aumenté la participación en eventos en un 45% mediante estrategias de marketing digital.",
        "Desarrollé bots de Discord para automatizar la logística de eventos, reduciendo errores en un 60%."
      ]
    }
  ];

  /**
   * Efecto para detectar cuando la sección entra en el viewport
   */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="experience"
      ref={sectionRef}
      className={`
        max-w-5xl w-full p-8 rounded-lg 
        bg-[#171717] 
        shadow-inner shadow-[#232323]
        transition-opacity duration-1000 ease-in-out
        ${isVisible ? 'opacity-100' : 'opacity-0'}
      `}
    >
      {/* Encabezado */}
      <div className="flex items-center mb-8">
        <div className="mr-6 text-gray-300">
          <IoBriefcaseOutline size={30} />
        </div>
        <h1 className="font-semibold text-3xl text-gray-200">Experiencia</h1>
      </div>

      {/* Contenido */}
      <div className="relative ml-16 md:ml-20">
        {/* Línea vertical de la línea de tiempo */}
        <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gray-700"></div>
        
        {/* Elementos de experiencia */}
        {experiences.map((exp, index) => (
          <ExperienceItem
            key={index}
            startDate={exp.startDate}
            endDate={exp.endDate}
            title={exp.title}
            company={exp.company}
            location={exp.location}
            modality={exp.modality}
            summary={exp.summary}
            responsibilities={exp.responsibilities}
            achievements={exp.achievements}
            isLast={index === experiences.length - 1}
          />
        ))}
      </div>
    </section>
  )
}
