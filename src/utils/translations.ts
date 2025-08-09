import { Cloud, Code, Database, Wrench } from "lucide-react";

export const profile = {
  name: "Damien Herrero",
  location: "Lyon",
  positionKey: "profile.position",
  experienceKey: "profile.experience",
  descriptionKey: "profile.description",
};

export const projects = [
  {
    name: "logic-gates-learning",
    descriptionKey: "projects.logicGates.description",
    accessKey: "projects.access.private",
    languages: [
      { text: "Next.js", color: "#64748b" },
      { text: "TypeScript", color: "#3178c6" },
    ],
  },
  {
    name: "2d-character-generator",
    descriptionKey: "projects.characterGenerator.description",
    accessKey: "projects.access.public",
    demo: "https://mr-patate.vercel.app",
    languages: [
      { text: "React.js", color: "#61dafb" },
      { text: "TypeScript", color: "#3178c6" },
    ],
  },
  {
    name: "conways-simulation",
    descriptionKey: "projects.conway.description",
    accessKey: "projects.access.public",
    demo: "https://sym-ca.vercel.app",
    languages: [
      { text: "React.js", color: "#61dafb" },
      { text: "TypeScript", color: "#3178c6" },
    ],
  },
  {
    name: "lyon-treasure-hunt",
    descriptionKey: "projects.lyonHunt.description",
    accessKey: "projects.access.private",
    languages: [
      { text: "React.js", color: "#61dafb" },
      { text: "TypeScript", color: "#3178c6" },
    ],
  },
];

export const experiences = [
  {
    company: "Koesio",
    positionKey: "experience.koesio.position",
    location: "Lyon",
    periodKey: "experience.koesio.period",
    descriptionKey: "experience.koesio.description",
    achievementsKey: "experience.koesio.achievements",
    technologies: [
      "Nest.js",
      "React.js",
      "TypeScript",
      "Docker",
      "PostgreSQL",
      "Elasticsearch",
      "Figma",
    ],
  },
  {
    company: "LDLC - LDLC VR Studio",
    positionKey: "experience.ldlc.position",
    location: "Limonest",
    periodKey: "experience.ldlc.period",
    descriptionKey: "experience.ldlc.description",
    achievementsKey: "experience.ldlc.achievements",
    technologies: [
      "Symfony",
      "React.js",
      "TypeScript",
      "Python",
      "Docker",
      "mySQL",
      "Figma",
    ],
  },
];

export const skills = [
  {
    titleKey: "skills.frontend.title",
    icon: Code,
    skills: [
      "React.js",
      "Next.js",
      "Vue.js",
      "TypeScript",
      "Storybook",
      "Tailwind",
      "Zustand",
    ],
  },
  {
    titleKey: "skills.backend.title",
    icon: Database,
    skills: [
      "Nest.js",
      "Express.js",
      "Symfony",
      "Python",
      "PostgreSQL",
      "Elasticsearch",
      "MongoDB",
    ],
  },
  {
    titleKey: "skills.cloud.title",
    icon: Cloud,
    skills: [
      "Docker",
      "Kubernetes",
      "Rancher",
      "Jenkins",
      "CI/CD",
      "Nginx",
      "Linux",
    ],
  },
  {
    titleKey: "skills.tools.title",
    icon: Wrench,
    skills: ["Jira", "Gitlab", "Figma", "Postman"],
  },
];

export const education = [
  {
    institution: "Epitech",
    degreeKey: "education.epitech.degree",
    location: "Lyon",
    period: "2022",
    gpa: "4.0",
    descriptionKey: "education.epitech.description",
    coursesKey: "education.epitech.courses",
    achievementsKey: "education.epitech.achievements",
  },
  {
    institution: "IUT",
    degreeKey: "education.iut.degree",
    location: "Montpellier",
    period: "2015 - 2017",
    descriptionKey: "education.iut.description",
    coursesKey: "education.iut.courses",
    achievementsKey: "education.iut.achievements",
  },
];
