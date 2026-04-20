export interface ProjectItem {
  title: string
  description: string
  tech: string[]
  url: string
}

export interface PortfolioData {
  name: string
  role: string
  email: string
  location: string
  about: string
  skills: string[]
  projects: ProjectItem[]
}
