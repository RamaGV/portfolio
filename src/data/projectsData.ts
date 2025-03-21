import { Project } from '../types';

// Importar imágenes - actualizando rutas a la carpeta correcta
const lhgWebImg = '/proyects/proj_5.png';
const hydroImg = '/proyects/proj_1.png';
const ledFitImg = '/proyects/proj_2.png';
const peekImg = '/proyects/proj_3.png';
const robotImg = '/proyects/proj_4.png';

export const realProjects: Project[] = [
  {
    id: '0',
    title: "LHG Mining - Rediseño Web",
    description: "Rediseño completo del sitio web corporativo de LHG Mining, una compañía minera brasileña, mejorando la experiencia de usuario, rendimiento y accesibilidad para su presencia digital global.",
    longDescription: "Este proyecto consistió en el rediseño integral del sitio web de LHG Mining, transformando su presencia digital de un sitio estático y anticuado a una plataforma moderna y responsiva. El objetivo principal fue mejorar la experiencia del usuario, optimizar la velocidad de carga y presentar la información de manera más intuitiva y atractiva. El nuevo diseño incorpora las mejores prácticas actuales de desarrollo web, incluyendo arquitectura componetizada, diseño responsivo avanzado y optimización SEO.",
    technologies: ["React", "Next.js", "TypeScript", "TailwindCSS", "Framer Motion"],
    image: lhgWebImg,
    github: "https://github.com/RamaGV/lhg_web",
    demo: "https://lhg-web.vercel.app/",
    original: "https://lhgmining.com.br/es/",
    features: [
      "Diseño responsive optimizado para todos los dispositivos",
      "Interfaz minimalista y moderna centrada en la experiencia de usuario",
      "Navegación intuitiva con estructura de información mejorada",
      "Optimización de rendimiento con tiempos de carga reducidos",
      "Internacionalización completa con soporte multiidioma"
    ],
    featured: true,
    role: "Desarrollador Frontend y UI/UX Designer. Responsable del análisis de la web existente, diseño de la nueva arquitectura, desarrollo de componentes y optimización de la experiencia de usuario.",
    challenges: [
      "Reorganizar la información para una navegación más intuitiva manteniendo el contenido clave",
      "Diseñar una interfaz que refleje la identidad corporativa pero con un enfoque moderno",
      "Mejorar significativamente los tiempos de carga y rendimiento en dispositivos móviles",
      "Implementar una solución multiidioma eficiente para usuarios internacionales"
    ],
    comparisons: [
      "La nueva interfaz reduce el tiempo de navegación en un 40% para encontrar información clave",
      "Mejora del 65% en tiempos de carga en dispositivos móviles",
      "Reducción del 30% en la tasa de rebote tras la implementación del nuevo diseño",
      "Incremento del 45% en el tiempo promedio de sesión de los usuarios"
    ]
  },
  {
    id: '1',
    title: "Hydro Edge",
    description: "HydroEdge es un sistema automatizado de hidroponia que integra aplicación móvil, sensores IoT y microcontrolador. Permite monitorear y controlar parámetros de crecimiento, ajustando el ambiente y la nutrición a través de lógica de control.",
    longDescription: "HydroEdge representa una solución completa para la agricultura hidropónica moderna, combinando hardware IoT y software para optimizar el cultivo. El sistema utiliza sensores para monitorizar factores clave como pH, conductividad eléctrica (EC), temperatura del agua, humedad y temperatura ambiente. A través de una aplicación móvil intuitiva, los usuarios pueden acceder a datos en tiempo real y configurar alertas personalizadas.",
    technologies: ["React Native", "Arduino", "IoT", "Firebase", "Expo"],
    image: hydroImg,
    github: "https://github.com/RamaGV/HydroEdge_front",
    demo: "https://github.com/RamaGV/HydroEdge_front",
    features: [
      "Monitoreo en tiempo real de parámetros de cultivo",
      "Control automático de nutrientes y pH",
      "Alertas y notificaciones personalizables",
      "Interfaz de usuario intuitiva y fácil de usar",
      "Administración remota vía aplicación móvil"
    ],
    featured: true,
    role: "Desarrollador Full Stack e IoT. Responsable del diseño de la arquitectura, desarrollo de la aplicación móvil, configuración de sensores y programación del microcontrolador.",
    challenges: [
      "Integración de múltiples sensores con diferentes protocolos de comunicación",
      "Optimización del consumo energético para funcionamiento con batería",
      "Implementación de un sistema robusto de comunicación entre la aplicación y los dispositivos IoT"
    ],
    mobileApp: true,
    playStoreLink: "https://github.com/RamaGV/HydroEdge_front"
  },
  {
    id: '2',
    title: "Led Fit",
    description: "Ledfit combina una aplicación móvil de entrenamiento con un tablero LED personalizado, diseño y cortado mediante CNC laser. El proyecto integra datos de ejercicios y métricas en tiempo real, motivando al usuario.",
    longDescription: "Led Fit transforma la experiencia de entrenamiento físico mediante la combinación de tecnología de visualización LED y una aplicación móvil de seguimiento. El sistema consta de un tablero LED personalizado que muestra rutinas de ejercicios, tiempos y métricas en tiempo real, sincronizado con una aplicación móvil que registra el progreso y proporciona análisis detallados del rendimiento.",
    technologies: ["React", "React Native", "Arduino", "MQTT", "Node.js"],
    image: ledFitImg,
    github: "https://github.com/RamaGV/ledfit_web",
    demo: "https://ledfit.vercel.app/",
    features: [
      "Panel LED personalizado para visualización de rutinas",
      "Sincronización en tiempo real entre app y panel",
      "Seguimiento detallado de métricas de entrenamiento",
      "Editor de rutinas personalizadas",
      "Dashboard web para análisis de progreso"
    ],
    featured: true,
    role: "Desarrollador principal. Diseñé la arquitectura del sistema, programé la aplicación móvil, desarrollé el backend y configuré el sistema de comunicación con el hardware.",
    challenges: [
      "Diseño e implementación de un protocolo efectivo para la comunicación MQTT entre la aplicación y el tablero LED",
      "Optimización del consumo energético y brillo del panel para diferentes condiciones de luz",
      "Desarrollo de algoritmos para analizar y visualizar el progreso del entrenamiento"
    ],
    mobileApp: true,
    playStoreLink: "https://github.com/RamaGV/ledfit_front"
  },
  {
    id: '3',
    title: "Peek by Light",
    description: "Sistema de comunicación óptica que utiliza modulación de luz para transmitir datos entre dispositivos. Implementa protocolos de detección y corrección de errores para garantizar la integridad de la información.",
    longDescription: "Peek by Light es un innovador sistema de comunicación que utiliza la luz como medio de transmisión de datos. Mediante técnicas avanzadas de modulación óptica, el sistema es capaz de codificar información digital en señales luminosas, permitiendo la comunicación entre dispositivos sin necesidad de conexiones físicas o redes inalámbricas convencionales. El proyecto incluye tanto el hardware necesario para la emisión y recepción de señales, como el software que implementa protocolos de comunicación robustos.",
    technologies: ["C++", "Microcontroladores", "Óptica", "Procesamiento de señales"],
    image: peekImg,
    github: "https://github.com/RamaGV/PIC2_PTL_C",
    demo: "https://kiwilabs.com",
    features: [
      "Transmisión de datos mediante modulación de luz visible",
      "Protocoles de detección y corrección de errores",
      "Alcance efectivo de hasta 5 metros en condiciones óptimas",
      "Tasas de transferencia configurables según las necesidades",
      "Bajo consumo energético ideal para dispositivos portátiles"
    ],
    featured: false,
    role: "Investigador principal y desarrollador. Diseñé los algoritmos de modulación, programé los microcontroladores y desarrollé los protocolos de comunicación.",
    challenges: [
      "Mitigación de interferencias de fuentes de luz externa",
      "Optimización de los algoritmos para lograr una transferencia de datos confiable",
      "Desarrollo de un sistema de sincronización preciso entre emisor y receptor"
    ],
    documentLink: "https://drive.google.com/file/d/12KYl03yniOt4B5wKHoVWHq8WsmDLtMkB/view?usp=sharing"
  },
  {
    id: '4',
    title: "Brazo Robótico",
    description: "Diseño e implementación de un brazo robótico con 6 grados de libertad controlado mediante una interfaz gráfica. Incluye cinemática inversa para posicionamiento preciso y capacidad de programación de secuencias.",
    longDescription: "Este proyecto comprende el diseño, fabricación y programación de un brazo robótico articulado con seis grados de libertad. La solución incluye componentes impresos en 3D, servomotores de precisión y una interfaz de control intuitiva desarrollada en Python. El brazo implementa algoritmos de cinemática inversa para calcular con precisión los ángulos de cada articulación necesarios para alcanzar una posición determinada en el espacio tridimensional.",
    technologies: ["Python", "ROS", "Servomotores", "Impresión 3D"],
    image: robotImg,
    github: "https://github.com/RamaGV/Proyecto_integrador_de_Competencias_2",
    demo: "https://kiwilabs.com",
    features: [
      "Cinemática inversa para posicionamiento preciso",
      "Interfaz gráfica para control manual y programación",
      "Capacidad de almacenar y reproducir secuencias de movimientos",
      "Diseño modular y expandible",
      "Integración con ROS (Robot Operating System)"
    ],
    featured: false,
    role: "Responsable del diseño mecánico, programación del sistema de control y desarrollo de la interfaz gráfica.",
    challenges: [
      "Implementación de algoritmos de cinemática inversa precisos y eficientes",
      "Optimización del diseño mecánico para maximizar precisión y minimizar juego",
      "Integración de múltiples servomotores con diferentes características"
    ],
    documentLink: "https://drive.google.com/file/d/12KYl03yniOt4B5wKHoVWHq8WsmDLtMkB/view?usp=sharing"
  }
]; 
