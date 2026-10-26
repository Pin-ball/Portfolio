import type { LucideIcon } from 'lucide-react'
import { Cloud, Code, Database, Wrench } from 'lucide-react'

type Language = {
  name: string
  color: string
}

const NEXT: Language = { name: 'Next.js', color: '#64748b' }
const REACT: Language = { name: 'React.js', color: '#61dafb' }
const TYPESCRIPT: Language = { name: 'TypeScript', color: '#3178c6' }

type Project = {
  id: 'logicGates' | 'characterGenerator' | 'conway' | 'lyonHunt'
  name: string
  access: 'public' | 'private'
  demo?: string
  languages: Language[]
}

type Experience = {
  id: 'koesio' | 'ldlc'
  company: string
  location: string
  technologies: string[]
}

type SkillGroup = {
  id: 'frontend' | 'backend' | 'cloud' | 'tools'
  icon: LucideIcon
  skills: string[]
}

type Education = {
  id: 'epitech' | 'iut'
  institution: string
  location: string
  period: string
  gpa?: string
}

export const PROFILE = {
  name: 'Damien Herrero',
  location: 'Lyon',
  careerStartYear: 2022,
  linkedin: 'https://www.linkedin.com/in/damien-herrero-b110111bb/',
  email: 'herrero.damien.1@gmail.com',
}

export const PROJECTS: Project[] = [
  {
    id: 'logicGates',
    name: 'logic-gates-learning',
    access: 'private',
    languages: [NEXT, TYPESCRIPT],
  },
  {
    id: 'characterGenerator',
    name: '2d-character-generator',
    access: 'public',
    demo: 'https://mr-patate.vercel.app',
    languages: [REACT, TYPESCRIPT],
  },
  {
    id: 'conway',
    name: 'conways-simulation',
    access: 'public',
    demo: 'https://sym-ca.vercel.app',
    languages: [REACT, TYPESCRIPT],
  },
  {
    id: 'lyonHunt',
    name: 'lyon-treasure-hunt',
    access: 'private',
    languages: [REACT, TYPESCRIPT],
  },
]

export const EXPERIENCES: Experience[] = [
  {
    id: 'koesio',
    company: 'Koesio',
    location: 'Lyon',
    technologies: [
      'Nest.js',
      'React.js',
      'TypeScript',
      'Docker',
      'PostgreSQL',
      'Elasticsearch',
      'Figma',
    ],
  },
  {
    id: 'ldlc',
    company: 'LDLC - LDLC VR Studio',
    location: 'Limonest',
    technologies: ['Symfony', 'React.js', 'TypeScript', 'Python', 'Docker', 'mySQL', 'Figma'],
  },
]

export const SKILLS: SkillGroup[] = [
  {
    id: 'frontend',
    icon: Code,
    skills: ['React.js', 'Next.js', 'Vue.js', 'TypeScript', 'Storybook', 'Tailwind', 'Zustand'],
  },
  {
    id: 'backend',
    icon: Database,
    skills: [
      'Nest.js',
      'Express.js',
      'Symfony',
      'Python',
      'PostgreSQL',
      'Elasticsearch',
      'MongoDB',
    ],
  },
  {
    id: 'cloud',
    icon: Cloud,
    skills: ['Docker', 'Kubernetes', 'Rancher', 'Jenkins', 'CI/CD', 'Nginx', 'Linux'],
  },
  {
    id: 'tools',
    icon: Wrench,
    skills: ['Jira', 'Gitlab', 'Figma', 'Postman'],
  },
]

export const EDUCATION: Education[] = [
  {
    id: 'epitech',
    institution: 'Epitech',
    location: 'Lyon',
    period: '2022',
    gpa: '4.0',
  },
  {
    id: 'iut',
    institution: 'IUT',
    location: 'Montpellier',
    period: '2015 - 2017',
  },
]
