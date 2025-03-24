// Interfaces
interface Social {
  github: string;
}

interface PersonalInfo {
  name: string;
  title: string;
  subtitle: string;
  location: string;
  email: string;
  about: string;
  social: Social;
}

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  image: string;
  github: string;
  demo: string;
  features?: string[];
}

interface Experience {
  id: number;
  company: string;
  position: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

interface Education {
  id: number;
  institution: string;
  degree: string;
  period: string;
  description: string;
  achievements: string[];
}

interface Skill {
  name: string;
  level: string;
  description: string;
}

interface Skills {
  frontend: Skill[];
  backend: Skill[];
  tools: Skill[];
}

interface PortfolioData {
  personalInfo: PersonalInfo;
  projects: Project[];
  experiences: Experience[];
  education: Education[];
  skills: Skills;
}

// Import data from JSON
import portfolioData from './portfolio.json';

// Export the data
export const personalInfo = portfolioData.personalInfo;
export const projects = portfolioData.projects;
export const experiences = portfolioData.experiences;
export const education = portfolioData.education;
export const skills = portfolioData.skills;

// Export the full data object
export default portfolioData; 