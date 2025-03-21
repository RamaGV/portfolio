import { Experience } from '../types';

export const experiences: Experience[] = [
  {
    startDate: "Feb 2024",
    endDate: "Presente",
    title: "Desarrollador Full Stack y IoT Freelancer",
    company: "Proyectos Independientes",
    modality: "Remoto",
    summary: "Desarrollo de soluciones tecnológicas personalizadas como freelancer, enfocadas en aplicaciones móviles y sistemas IoT. Combinación de habilidades en desarrollo de software y sistemas embebidos para crear productos completos.",
    responsibilities: [
      "Desarrollé una aplicación móvil multiplataforma utilizando React Native y Firebase para gestión de datos en tiempo real.",
      "Diseñé e implementé un sistema de hidroponía automatizado con tecnología IoT, integrando sensores y control remoto vía smartphone con protocolos de comunicación industrial.",
      "Programé microcontroladores ESP32 para monitoreo y control de paraámetros ambientales (temperatura, humedad, pH, nutrientes).",
      "Desarrolle APIs RESTful para la comunicación entre dispositivos IoT y aplicaciones móviles.",
      "Desarrolle un sistema de exportación automatizada de datos a Excel, implementando macros y visualización de tendencias."
    ],
    achievements: [
      "Diseño e implementación de un sistema de hidroponía IoT que redujo en un 40% el consumo de agua y optimizó el crecimiento de cultivos.",
      "Implementación de controladores PID para regular parámetros críticos en tiempo real.",
      "Optimización del consumo energético en dispositivos IoT, logrando una autonomía de hasta 3 meses con una sola carga de batería."
    ]
  },
  {
    startDate: "Jul 2022",
    endDate: "Mar 2024",
    title: "Desarrollador Junior de Sistemas Embebidos",
    company: "Proyectos Universitarios",
    modality: "Híbrido",
    summary: "Diseño e implementación de soluciones de hardware y software para sistemas embebidos. Responsable principal de la programación de microcontroladores y configuración de sensores en proyectos integradores universitarios.",
    responsibilities: [
      "Desarrollé firmware para microcontroladores (Arduino, ESP32, PIC) para el control de sensores y actuadores.",
      "Diseñé e implementé interfaces HMI para PLCs, facilitando la visualización y control de procesos industriales.",
      "Realicé integración de sensores diversos (temperatura, presión, nivel, proximidad) con sistemas de control.",
      "Configuré protocolos de comunicación industrial (Modbus, I2C, SPI) entre dispositivos y sistemas."
    ],
    achievements: [
      "Desarrollé un sistema de monitoreo ambiental con sensores IoT que mejoró la precisión de mediciones.",
      "Implementé un sistema de control automático para un proceso de manufactura que redujo el tiempo de operación en un 40%.",
      "Optimicé el consumo energético de dispositivos embebidos, extendiendo la vida útil de baterías en un 25% en proyectos portátiles."
    ]
  },
  {
    startDate: "Mar 2021",
    endDate: "Jun 2022",
    title: "Coordinador de Grupo de Estudio",
    company: "Proyecto Comunitario",
    modality: "Híbrido",
    summary: "Creé y coordiné un grupo de estudio para el desarrollo web y aplicaciones. Identificamos problemas en la sociedad que pudieran abordarse mediante soluciones de software, desarrollando productos viables sin ánimo de lucro.",
    responsibilities: [
      "Organicé y lideré un grupo de estudio con egresados de la Lic. de Tecnologías de la Información.",
      "Facilité la identificación de problemas sociales que pudieran resolverse mediante soluciones tecnológicas.",
      "Coordiné el desarrollo colaborativo de productos de software viables sin fines comerciales.",
      "Implementé metodologías ágiles para el aprendizaje práctico y desarrollo de proyectos."
    ],
    achievements: [
      "Formé un grupo de 5 profesionales y estudiantes avanzados comprometidos con el aprendizaje colaborativo.",
      "Desarrollamos 2 proyectos de software que abordaron necesidades reales en la comunidad local.",
      "Implementamos un sistema de mentoría peer-to-peer que mejoró significativamente las habilidades técnicas."
    ]
  }
]; 
