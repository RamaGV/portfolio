import { useState, useEffect, ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { PersonalInfo } from '../../types';

interface LayoutProps {
  children: ReactNode;
  personalInfo: PersonalInfo;
}

const Layout = ({ children, personalInfo }: LayoutProps) => {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isDark, setIsDark] = useState<boolean>(false);
  
  // Check for dark mode preference on mount
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (storedTheme === 'dark' || (!storedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);
  
  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDark(prev => {
      const newMode = !prev;
      if (newMode) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
      return newMode;
    });
  };
  
  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100;
      
      sections.forEach((section) => {
        const sectionId = section.getAttribute('id') as string;
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check active section on initial load
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <div className={`min-h-screen flex flex-col ${isDark ? 'dark' : ''} bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300`}>
      <Navbar
        personalInfo={personalInfo}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        isDark={isDark}
        toggleDarkMode={toggleDarkMode}
      />
      <main className="flex-grow pt-20 sm:px-4 lg:px-8">
        {children}
      </main>
      <Footer personalInfo={personalInfo} />
    </div>
  );
};

export default Layout; 