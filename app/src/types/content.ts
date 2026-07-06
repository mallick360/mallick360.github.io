export interface SocialLink {
  label: string
  url: string
  icon: 'linkedin' | 'github'
}

export interface Experience {
  company: string
  role: string
  location: string
  duration: string
  bullets: string[]
  stack?: string[]
}

export interface Project {
  title: string
  category: string
  description: string
  image: string
  stack?: string[]
  githubUrl?: string
  liveUrl?: string
}

export interface SkillItem {
  name: string
  icon: string
}

export interface SkillCategory {
  heading: string
  items: SkillItem[]
}

export interface Achievement {
  value: number
  suffix?: string
  label: string
}

export interface ArchitecturePillar {
  title: string
  description: string
  items: string[]
}
