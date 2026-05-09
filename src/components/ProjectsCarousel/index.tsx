import { useState } from 'react'
import styles from './index.module.css'

const PROJECTS = [
  {
    title: 'Vet Clinic Application',
    period: 'Feb 2026 — Present',
    description:
      'Developing the frontend for a comprehensive veterinary clinic management system. Building responsive UIs with React to manage patient records, appointments, inventory, and client communications.',
    tags: ['React', 'TypeScript', 'REST API'],
  },
  {
    title: 'Insurance Company Web App',
    period: 'Nov 2025 — Jan 2026',
    description:
      'Developed a modern, responsive insurance company website using React and Material UI. Implemented multi-page architecture with React Router for smooth client-side routing.',
    tags: ['React', 'Material UI', 'React Router'],
  },
  {
    title: 'Movie Discovery Platform',
    period: 'Oct 2025 — Nov 2025',
    description:
      'A dynamic movie discovery app integrated with The Movie Database (TMDb) API delivering real-time data including trending films, cast details, and user ratings.',
    tags: ['React', 'TMDb API', 'JavaScript'],
  },
  {
    title: 'Nike E-Commerce Platform',
    period: 'Aug 2025 — Sep 2025',
    description:
      'A fully-responsive e-commerce app showcasing the Nike footwear collection with a dynamic product catalog, interactive customisation, and a seamless checkout process.',
    tags: ['React', 'CSS Modules', 'JavaScript'],
  },
  {
    title: 'Weather Forecast App',
    period: 'Jun 2025 — Aug 2025',
    description:
      'Integrated with OpenWeatherMap API to deliver accurate meteorological data including current conditions, hourly forecasts, and extended predictions.',
    tags: ['React', 'OpenWeatherMap API', 'JavaScript'],
  },
]

const TOTAL_SLIDES = PROJECTS.length + 1
const GITHUB_SLIDE_INDEX = PROJECTS.length

export function ProjectsCarousel() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent(i => (i - 1 + TOTAL_SLIDES) % TOTAL_SLIDES)
  const next = () => setCurrent(i => (i + 1) % TOTAL_SLIDES)

  return (
    <section id="projects">
      <div className={styles.wrapper}>
        <h2 className={styles.heading}>Projects</h2>
        <p className={styles.sub}>A selection of work I've built</p>

        <div className={styles.carousel}>
          <button className={styles.arrow} onClick={prev} aria-label="Previous">&#8592;</button>

          <div className={styles.track}>
            {PROJECTS.map((project, i) => {
              const offset = i - current
              const isActive = offset === 0
              const isAdjacent = Math.abs(offset) === 1
              return (
                <article
                  key={project.title}
                  className={`${styles.card} ${isActive ? styles.cardActive : ''} ${isAdjacent ? styles.cardAdjacent : ''}`}
                  style={{ '--offset': offset } as React.CSSProperties}
                >
                  <p className={styles.cardPeriod}>{project.period}</p>
                  <h3 className={styles.cardTitle}>{project.title}</h3>
                  <p className={styles.cardDesc}>{project.description}</p>
                  <div className={styles.tags}>
                    {project.tags.map((tag: string) => (
                      <span key={tag} className={styles.tag}>{tag}</span>
                    ))}
                  </div>
                </article>
              )
            })}

            {/* GitHub CTA slide */}
            <a
              href="https://github.com/Shushanik01"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.card} ${styles.githubCard} ${current === GITHUB_SLIDE_INDEX ? styles.cardActive : ''} ${Math.abs(GITHUB_SLIDE_INDEX - current) === 1 ? styles.cardAdjacent : ''}`}
              style={{ '--offset': GITHUB_SLIDE_INDEX - current } as React.CSSProperties}
            >
              <span className={styles.githubIcon}>↗</span>
              <h3 className={styles.cardTitle}>See the rest of my builds</h3>
              <p className={styles.cardDesc}>More projects, experiments, and open-source work live on my GitHub. Click to explore.</p>
              <span className={styles.githubHandle}>github.com/Shushanik01</span>
            </a>
          </div>

          <button className={styles.arrow} onClick={next} aria-label="Next">&#8594;</button>
        </div>

        <div className={styles.dots}>
          {Array.from({ length: TOTAL_SLIDES }).map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
