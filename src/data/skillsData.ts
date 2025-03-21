import React from 'react';
import { FiCpu, FiLayout } from 'react-icons/fi';

export interface SkillNode {
  id: string;
  name: string;
  icon: string;
  level: number; // 1-5 donde 5 es 100%
  category: SkillCategory;
  description: string;
  relatedSkills: string[]; // IDs de habilidades relacionadas
  size?: number; // Tamaño calculado para visualización
  x?: number; // Posición calculada para visualización
  y?: number; // Posición calculada para visualización
  yearsExperience?: number;
  keyProjects?: string[];
}

export type SkillCategory = 'frontend' | 'backend' | 'tools' | 'embedded';

export interface SkillUseCase {
  title: string;
  description: string;
  skills: string[]; // IDs de habilidades usadas
  icon: React.ReactNode;
}

// Definición de habilidades
export const skills: SkillNode[] = [
  // Frontend
  {
    id: 'react',
    name: 'React',
    icon: '/icons/react.svg',
    level: 5,
    category: 'frontend',
    description: 'Amplia experiencia en desarrollo de aplicaciones SPA con React, incluyendo hooks, context API, y gestión avanzada de estado.',
    relatedSkills: ['typescript', 'javascript', 'tailwind', 'redux'],
    yearsExperience: 3,
    keyProjects: ['Portfolio Personal', 'Dashboard Analytics']
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    icon: '/icons/typescript.svg',
    level: 4,
    category: 'frontend',
    description: 'Fuerte conocimiento de TypeScript para desarrollo frontend, incluyendo tipado avanzado e integración con librerías.',
    relatedSkills: ['react', 'javascript', 'node'],
    yearsExperience: 2,
    keyProjects: ['API REST', 'Aplicación de Gestión']
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    icon: '/icons/javascript.svg',
    level: 5,
    category: 'frontend',
    description: 'Dominio de JavaScript ES6+, patrones de diseño, asincronía y manipulación del DOM.',
    relatedSkills: ['typescript', 'react', 'node'],
    yearsExperience: 4,
    keyProjects: ['Librería de Utilidades', 'E-commerce']
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    icon: '/icons/tailwind.svg',
    level: 4,
    category: 'frontend',
    description: 'Creación de interfaces responsivas y modernas utilizando el enfoque utility-first de Tailwind.',
    relatedSkills: ['react', 'css'],
    yearsExperience: 2,
    keyProjects: ['Portfolio Personal', 'Landing Page Corporativa']
  },
  {
    id: 'css',
    name: 'CSS',
    icon: '/icons/css.svg',
    level: 4,
    category: 'frontend',
    description: 'Amplio conocimiento de CSS moderno, incluyendo Grid, Flexbox, variables CSS y animaciones.',
    relatedSkills: ['tailwind'],
    yearsExperience: 5,
    keyProjects: ['Sitio Web Responsive', 'Dashboard de Analítica']
  },
  {
    id: 'redux',
    name: 'Redux',
    icon: '/icons/redux.svg',
    level: 3,
    category: 'frontend',
    description: 'Gestión de estado global para aplicaciones React complejas usando Redux y Redux Toolkit.',
    relatedSkills: ['react', 'typescript'],
    yearsExperience: 2,
    keyProjects: ['E-commerce', 'Aplicación de Gestión']
  },
  {
    id: 'react-native',
    name: 'React Native',
    icon: '/icons/react-native.svg',
    level: 4,
    category: 'frontend',
    description: 'Desarrollo de aplicaciones móviles multiplataforma con rendimiento nativo usando React Native.',
    relatedSkills: ['react', 'typescript', 'javascript', 'expo'],
    yearsExperience: 2,
    keyProjects: ['Aplicación de Seguimiento Fitness', 'App de Gestión de Inventario']
  },
  {
    id: 'framer',
    name: 'Framer Motion',
    icon: '/icons/framer.svg',
    level: 3,
    category: 'frontend',
    description: 'Creación de animaciones fluidas y transiciones para interfaces de usuario en React.',
    relatedSkills: ['react', 'css'],
    yearsExperience: 1,
    keyProjects: ['Portfolio Personal', 'Landing Page Interactiva']
  },
  
  // Backend
  {
    id: 'node',
    name: 'Node.js',
    icon: '/icons/nodejs.svg',
    level: 4,
    category: 'backend',
    description: 'Desarrollo de APIs RESTful y aplicaciones del lado del servidor con Node.js.',
    relatedSkills: ['express', 'typescript', 'mongodb', 'nextjs'],
    yearsExperience: 3,
    keyProjects: ['API de Servicios', 'Microservicios']
  },
  {
    id: 'nextjs',
    name: 'Next.js',
    icon: '/icons/nextjs.svg',
    level: 4,
    category: 'backend',
    description: 'Desarrollo de aplicaciones web full-stack con renderizado del lado del servidor (SSR), generación estática (SSG) y API routes.',
    relatedSkills: ['react', 'node', 'typescript'],
    yearsExperience: 2,
    keyProjects: ['Plataforma de Comercio Electrónico', 'Aplicación Web Empresarial']
  },
  {
    id: 'express',
    name: 'Express',
    icon: '/icons/express.svg',
    level: 4,
    category: 'backend',
    description: 'Creación de APIs robustas y escalables con Express, incluyendo middleware, autenticación y validación.',
    relatedSkills: ['node', 'mongodb'],
    yearsExperience: 3,
    keyProjects: ['API REST', 'Backend de E-commerce']
  },
  {
    id: 'expo',
    name: 'Expo',
    icon: '/icons/expo.svg',
    level: 3,
    category: 'backend',
    description: 'Desarrollo acelerado de aplicaciones React Native utilizando la plataforma Expo, incluyendo API nativas y servicios de despliegue.',
    relatedSkills: ['react-native', 'node', 'javascript'],
    yearsExperience: 2,
    keyProjects: ['Aplicación de Delivery', 'Sistema de Notificaciones Móviles']
  },
  {
    id: 'mongodb',
    name: 'MongoDB',
    icon: '/icons/mongodb.svg',
    level: 3,
    category: 'backend',
    description: 'Diseño e implementación de bases de datos NoSQL con MongoDB, agregaciones y modelado de datos.',
    relatedSkills: ['node', 'express'],
    yearsExperience: 2,
    keyProjects: ['Sistema de Gestión de Datos', 'Aplicación de Análisis']
  },
  {
    id: 'sql',
    name: 'SQL',
    icon: '/icons/postgresql.svg',
    level: 3,
    category: 'backend',
    description: 'Experiencia con bases de datos relacionales, consultas complejas y optimización.',
    relatedSkills: ['node'],
    yearsExperience: 3,
    keyProjects: ['Sistema de Gestión', 'Aplicación de Análisis de Datos']
  },
  {
    id: 'graphql',
    name: 'GraphQL',
    icon: '/icons/graphql.svg',
    level: 2,
    category: 'backend',
    description: 'Implementación de APIs GraphQL para comunicación flexible entre cliente y servidor.',
    relatedSkills: ['node', 'apollo'],
    yearsExperience: 1,
    keyProjects: ['API de Consulta', 'Panel Administrativo']
  },
  {
    id: 'apollo',
    name: 'Apollo',
    icon: '/icons/apollo.svg',
    level: 2,
    category: 'backend',
    description: 'Experiencia con Apollo Server y Client para implementar soluciones GraphQL.',
    relatedSkills: ['graphql', 'react'],
    yearsExperience: 1,
    keyProjects: ['Frontend de Consulta de Datos', 'Dashboard']
  },
  
  // Herramientas
  {
    id: 'git',
    name: 'Git',
    icon: '/icons/git.svg',
    level: 4,
    category: 'tools',
    description: 'Control de versiones avanzado con Git, incluyendo branching, merge conflicts y workflows colaborativos.',
    relatedSkills: ['github'],
    yearsExperience: 4,
    keyProjects: ['Todos los proyectos desarrollados']
  },
  {
    id: 'proteus',
    name: 'Proteus',
    icon: '/icons/proteus.svg',
    level: 4,
    category: 'tools',
    description: 'Diseño y simulación de circuitos electrónicos, esquemas PCB y pruebas de sistemas embebidos virtuales.',
    relatedSkills: ['c-lang', 'arduino', 'microchip-studio'],
    yearsExperience: 3,
    keyProjects: ['Simulación de Sistemas de Control', 'Diseño de PCBs para Proyectos IoT']
  },
  {
    id: 'microchip-studio',
    name: 'Microchip Studio',
    icon: '/icons/microchip.svg',
    level: 3,
    category: 'tools',
    description: 'Desarrollo y depuración de software para microcontroladores AVR y SAM, incluyendo programación a bajo nivel y optimización.',
    relatedSkills: ['c-lang', 'embedded-linux', 'proteus'],
    yearsExperience: 2,
    keyProjects: ['Firmware para Dispositivos IoT', 'Controladores para Sistemas Embebidos']
  },
  {
    id: 'arduino',
    name: 'Arduino',
    icon: '/icons/arduino.svg',
    level: 5,
    category: 'tools',
    description: 'Desarrollo rápido de prototipos y soluciones embebidas utilizando la plataforma Arduino y su ecosistema.',
    relatedSkills: ['c-lang', 'iot', 'mqtt'],
    yearsExperience: 4,
    keyProjects: ['Sistema de Monitoreo Ambiental', 'Control de Actuadores']
  },
  {
    id: 'github',
    name: 'GitHub',
    icon: '/icons/github.svg',
    level: 4,
    category: 'tools',
    description: 'Uso avanzado de GitHub para colaboración, incluyendo Actions, PRs y Issues.',
    relatedSkills: ['git', 'cicd'],
    yearsExperience: 4,
    keyProjects: ['CI/CD Pipeline', 'Proyecto Open Source']
  },
  {
    id: 'docker',
    name: 'Docker',
    icon: '/icons/docker.svg',
    level: 3,
    category: 'tools',
    description: 'Containerización de aplicaciones para desarrollo y despliegue consistentes.',
    relatedSkills: ['cicd', 'aws'],
    yearsExperience: 2,
    keyProjects: ['Microservicios', 'Entorno de Desarrollo']
  },
  {
    id: 'aws',
    name: 'AWS',
    icon: '/icons/aws.svg',
    level: 2,
    category: 'tools',
    description: 'Experiencia con servicios de AWS como EC2, S3, Lambda y CloudFront.',
    relatedSkills: ['docker', 'cicd'],
    yearsExperience: 1,
    keyProjects: ['Despliegue de Aplicación Web', 'Almacenamiento de Medios']
  },
  {
    id: 'cicd',
    name: 'CI/CD',
    icon: '/icons/jenkins.svg',
    level: 3,
    category: 'tools',
    description: 'Implementación de pipelines de integración y despliegue continuo.',
    relatedSkills: ['git', 'github', 'docker'],
    yearsExperience: 2,
    keyProjects: ['Automatización de Despliegues', 'Pruebas Automatizadas']
  },
  {
    id: 'webpack',
    name: 'Webpack',
    icon: '/icons/webpack.svg',
    level: 3,
    category: 'tools',
    description: 'Configuración y optimización de bundlers para aplicaciones frontend modernas.',
    relatedSkills: ['javascript', 'typescript'],
    yearsExperience: 3,
    keyProjects: ['Optimización de Rendimiento', 'Configuración de Proyecto']
  },
  
  // Sistemas Embebidos
  {
    id: 'c-lang',
    name: 'Lenguaje C',
    icon: '/icons/c.svg',
    level: 4,
    category: 'embedded',
    description: 'Desarrollo de software eficiente y de bajo nivel para microcontroladores y sistemas embebidos.',
    relatedSkills: ['embedded-linux', 'arduino', 'mqtt'],
    yearsExperience: 3,
    keyProjects: ['Sistema de Control Industrial', 'Monitoreo de Sensores']
  },
  {
    id: 'mqtt',
    name: 'MQTT',
    icon: '/icons/mqtt.svg',
    level: 3,
    category: 'embedded',
    description: 'Implementación de comunicaciones livianas y eficientes para dispositivos IoT mediante el protocolo MQTT.',
    relatedSkills: ['c-lang', 'iot', 'embedded-linux'],
    yearsExperience: 2,
    keyProjects: ['Red de Sensores', 'Sistema de Monitoreo Remoto']
  },
  {
    id: 'iot',
    name: 'Internet of Things',
    icon: '/icons/iot.svg',
    level: 4,
    category: 'embedded',
    description: 'Diseño e implementación de soluciones conectadas utilizando sensores, microcontroladores y comunicación en red.',
    relatedSkills: ['mqtt', 'embedded-linux', 'c-lang'],
    yearsExperience: 3,
    keyProjects: ['Smart Home', 'Sistema de Monitoreo Industrial']
  },
  {
    id: 'ladder',
    name: 'Ladder Logic',
    icon: '/icons/ladder.svg',
    level: 3,
    category: 'embedded',
    description: 'Programación de controladores lógicos programables (PLCs) utilizando lenguaje Ladder para automatización industrial.',
    relatedSkills: ['c-lang', 'iot'],
    yearsExperience: 2,
    keyProjects: ['Sistema de Control de Procesos', 'Automatización de Maquinaria']
  },
  {
    id: 'embedded-linux',
    name: 'Linux Embebido',
    icon: '/icons/linux.svg',
    level: 3,
    category: 'embedded',
    description: 'Configuración y desarrollo para sistemas Linux embebidos como Raspberry Pi, implementando servicios y aplicaciones de borde.',
    relatedSkills: ['c-lang', 'iot', 'mqtt'],
    yearsExperience: 2,
    keyProjects: ['Gateway IoT', 'Procesamiento de Señales']
  },
  {
    id: 'sensors',
    name: 'Sensores y Actuadores',
    icon: '/icons/sensor.svg',
    level: 4,
    category: 'embedded',
    description: 'Integración de diversos sensores (temperatura, presión, movimiento) y actuadores (motores, relés) en sistemas embebidos.',
    relatedSkills: ['arduino', 'iot', 'c-lang'],
    yearsExperience: 3,
    keyProjects: ['Red de Sensores Inalámbricos', 'Control de Motores']
  }
];

// Casos de uso de habilidades
export const skillUseCases: SkillUseCase[] = [
  {
    title: 'Desarrollo Frontend Moderno',
    description: 'Creación de interfaces de usuario interactivas y responsivas utilizando las mejores prácticas actuales.',
    skills: ['react', 'typescript', 'tailwind', 'react-native'],
    icon: React.createElement(FiLayout, { size: 24 })
  },
  {
    title: 'Arquitectura Full Stack',
    description: 'Construcción de aplicaciones completas con frontend y backend integrados de forma eficiente.',
    skills: ['react', 'node', 'express', 'mongodb', 'nextjs'],
    icon: React.createElement(FiLayout, { size: 24 })
  },
  {
    title: 'Desarrollo para Aplicaciones',
    description: 'Creación de aplicaciones móviles y web con rendimiento optimizado y experiencia de usuario fluida.',
    skills: ['react-native', 'expo', 'typescript', 'redux'],
    icon: React.createElement(FiLayout, { size: 24 })
  },
  {
    title: 'Soluciones IoT',
    description: 'Desarrollo de sistemas conectados que integran hardware, software y comunicaciones para soluciones inteligentes.',
    skills: ['c-lang', 'mqtt', 'iot', 'arduino', 'proteus'],
    icon: React.createElement(FiCpu, { size: 24 })
  }
];

export default {
  skills,
  skillUseCases
}; 