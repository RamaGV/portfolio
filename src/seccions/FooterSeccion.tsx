// src/seccions/FooterSeccion.tsx
import { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import IconButton from '../components/IconButton';
import ToggleSwitch from '../components/ToggleSwitch';
import LanguageToggle from '../components/LanguageToggle';
import { navigationLinks, socialLinks, themeOptions } from '../data';

/**
 * @component FooterSeccion
 * @description Componente que renderiza el footer de la aplicación con tres secciones:
 * - Izquierda: Enlaces sociales y de contacto
 * - Centro: Navegación interna del sitio (íconos sin texto)
 * - Derecha: Controles de configuración (tema, idioma, repositorio)
 * 
 * @returns {React.ReactNode} Elemento que representa el footer
 */
export default function FooterSeccion() {
  // Estado para controlar el tema (claro/oscuro)
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  
  // Estado para controlar el idioma (español/inglés)
  const [language, setLanguage] = useState<'es' | 'en'>('es');

  // Función para alternar entre modo claro y oscuro
  const toggleTheme = (newTheme: 'dark' | 'light') => {
    setTheme(newTheme);
    // Aquí iría la lógica para cambiar el tema en toda la aplicación
  };

  // Función para alternar entre idiomas
  const toggleLanguage = (newLanguage: 'es' | 'en') => {
    setLanguage(newLanguage);
    // Aquí iría la lógica para cambiar el idioma en toda la aplicación
  };

  // Función para desplazarse a una sección específica
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer 
      className="
        max-w-5xl w-full p-8 rounded-lg 
        bg-[#171717] 
        shadow-inner shadow-[#232323]
      "
    >
      <div className="max-w-5xl mx-auto w-full flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Sección izquierda - Enlaces sociales y de contacto */}
        <div className="flex items-center gap-4 w-1/3">
          {socialLinks.map((link, index) => (
            <IconButton
              key={`social-${index}`}
              icon={link.icon}
              href={link.href}
              download={link.download}
              target={link.target}
              rel={link.rel}
              className={link.hoverClass}
            />
          ))}
        </div>

        {/* Sección central - Navegación interna (solo íconos) */}
        <div className="flex items-center gap-4 w-1/3">
          {navigationLinks.map((link, index) => (
            <IconButton
              key={`nav-${index}`}
              icon={link.icon}
              onClick={() => scrollToSection(link.sectionId)}
              className="hover:text-white hover:scale-110 hover:shadow-lg hover:shadow-gray-900"
            />
          ))}
        </div>

        {/* Sección derecha - Controles de configuración */}
        <div className="flex items-center gap-4 w-1/3">
          {/* Selector de tema (Dark/Light) */}
          <ToggleSwitch
            options={themeOptions}
            activeOption={theme}
            onToggle={(value) => toggleTheme(value as 'dark' | 'light')}
          />
          
          {/* Selector de idioma (ES/EN) */}
          <LanguageToggle
            activeLanguage={language}
            onToggle={toggleLanguage}
          />
          
          {/* GitHub - Tamaño destacado */}
          <IconButton
            icon={<FaGithub size={20} />}
            href={socialLinks.find(link => link.id === 'github')?.href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 text-gray-300 hover:text-purple-500 shadow-lg shadow-[#151515]"
          />
        </div>
      </div>
    </footer>
  );
}
