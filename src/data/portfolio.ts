import type { PortfolioData } from '../types/portfolio'

export const portfolioData: PortfolioData = {
  name: 'MR',
  role: 'Frontend Developer',
  email: 'mr@example.com',
  location: 'Your City, Your Country',
  about:
    'I build responsive, accessible, and modern web interfaces with React and TypeScript. This starter structure is ready for your real projects, experience, and contact details.',
  skills: [
    'React',
    'TypeScript',
    'Ant Design',
    'Vite',
    'Redux Toolkit',
    'REST API',
    'Figma',
  ],
  projects: [
    {
      title: 'E-Commerce Dashboard',
      description:
        'Admin dashboard for managing products, orders, and analytics with reusable UI components.',
      tech: ['React', 'TypeScript', 'Ant Design'],
      url: 'https://example.com',
    },
    {
      title: 'Task Management App',
      description:
        'Collaborative kanban app with filters, drag and drop, and role based permissions.',
      tech: ['React', 'Vite', 'React Query'],
      url: 'https://example.com',
    },
  ],
}
