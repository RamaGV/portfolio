// src/data/socialLinks.ts

import { BiHomeAlt2 } from 'react-icons/bi';
import { FaLinkedin, FaEnvelope, FaFileDownload, FaFolderOpen } from 'react-icons/fa';
import { GiBrain } from 'react-icons/gi';
import { IoBriefcaseOutline } from 'react-icons/io5';
import { HiSun, HiMoon } from 'react-icons/hi';

/**
 * Configuración de los enlaces sociales reutilizables en toda la aplicación
 */
export const socialLinks = [
  {
    id: 'email',
    href: "mailto:contact@ramirovazquez.com",
    icon: <FaEnvelope size={20} />,
    iconSmall: <FaEnvelope size={16} />,
    ariaLabel: "Enviar email",
    hoverClass: "hover:text-yellow-400"
  },
  {
    id: 'linkedin',
    href: "https://linkedin.com/in/ramirovazquez",
    icon: <FaLinkedin size={20} />,
    iconSmall: <FaLinkedin size={16} />,
    ariaLabel: "Perfil de LinkedIn",
    target: "_blank",
    rel: "noopener noreferrer",
    hoverClass: "hover:text-blue-500"
  },
  {
    id: 'cv',
    href: "/cv-ramirovazquez.pdf",
    icon: <FaFileDownload size={20} />,
    iconSmall: <FaFileDownload size={16} />,
    ariaLabel: "Descargar CV",
    download: true,
    hoverClass: "hover:text-red-400"
  },

];

// Configuración de los enlaces de navegación
export const navigationLinks = [
  {
    sectionId: "home",
    icon: <BiHomeAlt2 size={20} />,
  },
  {
    sectionId: "experience",
    icon: <IoBriefcaseOutline size={20} />,
  },
  {
    sectionId: "projects",
    icon: <FaFolderOpen size={20} />,
  },
  {
    sectionId: "skills",
    icon: <GiBrain size={20} />,
  }
];

/**
 * Opciones para el selector de tema
 */
export const themeOptions = [
  { 
    label: "Dark", 
    value: "dark", 
    ariaLabel: "Modo oscuro",
    icon: <HiMoon size={18} />
  },
  { 
    label: "Light", 
    value: "light", 
    ariaLabel: "Modo claro",
    icon: <HiSun size={18} />
  }
];

/**
 * Opciones para el selector de idioma
 */
export const languageOptions = [
  { 
    label: "ES", 
    value: "es", 
    ariaLabel: "Español",
  },
  { 
    label: "EN", 
    value: "en", 
    ariaLabel: "English",
  }
];

/**
 * Datos de categorías de habilidades
 */
export const skillCategories = [
  {
    title: "Frontend",
    description: "Desarrollo de interfaces de usuario interactivas y responsivas",
    skills: ["React", "React Native", "TypeScript", "Figma", "HMI"]
  },
  {
    title: "Backend",
    description: "Implementación de APIs, servicios y bases de datos",
    skills: ["Node", "Expo", "Vite", "Python", "MongoDB"]
  },
  {
    title: "Mecatrónica",
    description: "Integración de sistemas electrónicos y mecánicos con software",
    skills: ["Arduino", "C++", "Ladder", "MQTT", "ROS"]
  },
  {
    title: "Herramientas",
    description: "Software y plataformas para desarrollo y colaboración",
    skills: ["Git", "Atmel Studio", "Postman", "Proteus"]
  }
];
