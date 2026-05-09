const skillModules = import.meta.glob('../../assets/skills/*.{png,jpg,jpeg,svg,webp}', { eager: true })

export const TECH_SKILLS = Object.entries(skillModules).map(([path, mod]) => ({
  name: path.split('/').pop()?.replace(/\.[^.]+$/, '') ?? '',
  src: (mod as { default: string }).default,
}))

export const ABOUT_PAGE_COPY = {
  title: 'SKILLS',
  subtitle: 'Tech Stack',
  summaryLabel: 'Summary',
  summary: 'Results-driven Frontend Developer with 1+ year of expertise in React and JavaScript, currently delivering high-impact web solutions at N2G Brains. Previously gained full-stack and cloud engineering experience during an intensive internship at EPAM. Certified in AWS Serverless, OutSystems Frontend Development, and Contentstack, demonstrating a strong foundation in modern development tools and cloud technologies. Proven ability to build scalable, user-focused applications while continuously expanding technical capabilities.',
  educationLabel: 'Education',
} as const
