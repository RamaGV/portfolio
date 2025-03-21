export interface Project {
  id: string | number
  title: string
  description: string
  longDescription?: string
  technologies: string[]
  image: string
  github: string
  demo: string
  features?: string[]
  featured?: boolean
  role?: string
  challenges?: string[]
  mobileApp?: boolean
  playStoreLink?: string
  documentLink?: string
}

export interface Experience {
  id?: number | string
  company: string
  title: string
  startDate: string
  endDate: string
  modality: string
  summary: string
  responsibilities: string[]
  achievements: string[]
}

export interface Education {
  id: number | string
  institution: string
  degree: string
  period: string
  description: string
  achievements: string[]
}

export interface Skill {
  name: string
  icon: string
  level: number
}

export interface Skills {
  frontend: Skill[]
  backend: Skill[]
  tools: Skill[]
}

export interface PersonalInfo {
  name: string
  title: string
  subtitle: string
  location: string
  email: string
  about: string
  bio: string
  yearsOfExperience: number
  completedProjects: number
  skillCount: number
  social: {
    github: string
    twitter?: string
  }
} 