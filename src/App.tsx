// src/App.tsx

import { useState, useEffect } from 'react';
import Layout from './components/layout/Layout';
import HeroSection from './sections/HeroSection';
import AboutMeSection from './sections/AboutMeSection';
import SkillsSection from './sections/SkillsSection';
import ProjectsSection from './sections/ProjectsSection';
import ExperienceSection from './sections/ExperienceSection';
import EducationSection from './sections/EducationSection';
import './App.css';
import portfolio from './data/portfolio.json';
import { skills, skillUseCases } from './data/skillsData';
import { realProjects } from './data/projectsData';
import { education } from './data/education';

function App() {
  const [typingText, setTypingText] = useState('');
  const roles = ['Desarrollador Full Stack', 'Desarrollador DevOps', 'Diseñador Web'];
  
  // Typing effect
  useEffect(() => {
    let index = 0;
    let roleIndex = 0;
    let direction = 'forward';
    let timeout: number = 0;
    
    const typeText = () => {
      const currentRole = roles[roleIndex];
      
      if (direction === 'forward') {
        if (index <= currentRole.length) {
          setTypingText(currentRole.substring(0, index));
          index++;
          
          if (index > currentRole.length) {
            direction = 'wait';
            timeout = window.setTimeout(typeText, 2000); // Esperar al final de la palabra
            return;
          }
        }
      } else if (direction === 'wait') {
        direction = 'backward';
        timeout = window.setTimeout(typeText, 100);
        return;
      } else if (direction === 'backward') {
        if (index >= 0) {
          setTypingText(currentRole.substring(0, index));
          index--;
          
          if (index < 0) {
            direction = 'forward';
            roleIndex = (roleIndex + 1) % roles.length;
            index = 0;
          }
        }
      }
      
      const speed = direction === 'forward' ? 100 : 50;
      timeout = window.setTimeout(typeText, speed);
    };
    
    timeout = window.setTimeout(typeText, 1000);
    
    return () => clearTimeout(timeout);
  }, []);
  
  // Create necessary data structures from portfolio
  const personalInfo = {
    name: portfolio.personalInfo.name,
    title: portfolio.personalInfo.title,
    subtitle: portfolio.personalInfo.subtitle || '',
    location: portfolio.personalInfo.location,
    email: portfolio.personalInfo.email,
    about: portfolio.personalInfo.about || '',
    bio: portfolio.personalInfo.about || '',
    yearsOfExperience: 3,
    completedProjects: portfolio.projects.length,
    skillCount: portfolio.skills.frontend.length + portfolio.skills.backend.length + portfolio.skills.tools.length,
    social: portfolio.personalInfo.social
  };
  
  // Transform projects for the ProjectsSection
  const projectsForSection = realProjects.map(project => ({
    id: String(project.id),
    title: project.title,
    description: project.description,
    longDescription: project.longDescription,
    imageUrl: project.image,
    tags: project.technologies,
    demoUrl: project.demo,
    githubUrl: project.github,
    featured: project.featured || false,
    features: project.features,
    role: project.role,
    challenges: project.challenges,
    playStoreLink: project.playStoreLink,
    documentLink: project.documentLink
  }));

  return (
    <Layout personalInfo={personalInfo}>
      <HeroSection 
        personalInfo={personalInfo} 
        typingText={typingText} 
      />
      
      <AboutMeSection />
      
      <SkillsSection 
        skills={skills}
        useCases={skillUseCases}
      />
      
      <ProjectsSection 
        projects={projectsForSection} 
      />
      
      <ExperienceSection />
      
      <EducationSection 
        education={education} 
      />
    </Layout>
  );
}

export default App;
