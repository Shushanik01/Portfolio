import { useEffect } from 'react'
import styles from './index.module.css'

interface Props {
  open: boolean
  onClose: () => void
}

const SKILLS = [
  'HTML/CSS','JavaScript','React.js','TypeScript','Material UI','Lodash','Axios',
  'AWS','AJAX','Chrome DevTools','Node.js','Express.js','Git','GitHub',
  'Jest','MongoDB','OAuth2','React Router','Serverless','Thunder Client','Postman',
]

const SOFT_SKILLS = [
  'Adaptability','Communication','Managing Teamwork','Problem-solving',
  'Self-awareness','Time Management','Fast Learner',
]

export function CvModal({ open, onClose }: Props) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    if (open) document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, onClose])

  if (!open) return null

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.panel} onClick={e => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose} aria-label="Close">✕</button>

        <div className={styles.inner}>
          {/* Header */}
          <header className={styles.cvHeader}>
            <h1 className={styles.cvName}>Shushanik Arakelyan</h1>
            <p className={styles.cvRole}>Front End Developer</p>
            <div className={styles.cvContacts}>
              <span>Yerevan, Armenia</span>
              <span>041818591</span>
              <span>shushanikarakelyan38@gmail.com</span>
            </div>
          </header>

          {/* Summary */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Summary</h2>
            <p className={styles.summary}>
              Results-driven Frontend Developer with 1+ year of expertise in React and JavaScript,
              currently delivering high-impact web solutions at N2G Brains. Previously gained full-stack
              and cloud engineering experience during an intensive internship at EPAM. Certified in AWS
              Serverless, OutSystems Frontend Development, and Contentstack, demonstrating a strong
              foundation in modern development tools and cloud technologies.
            </p>
          </section>

          {/* Work Experience */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Work Experience</h2>

            <div className={styles.entry}>
              <span className={styles.entryDate}>Nov 2025 – Present</span>
              <div className={styles.entryContent}>
                <p className={styles.entryOrg}>EPAM</p>
                <p className={styles.entryRole}>Full Stack & Cloud Engineering Intern</p>
                <p className={styles.entryDesc}>
                  Developed full-stack applications using modern JavaScript frameworks and implemented
                  cloud solutions with AWS serverless technologies including Lambda, API Gateway, and
                  DynamoDB. Built RESTful APIs, integrated frontend components, and deployed scalable
                  cloud infrastructure. Participated in agile development cycles and code reviews.
                </p>
              </div>
            </div>

            <div className={styles.entry}>
              <span className={styles.entryDate}>May 2025 – Jan 2026</span>
              <div className={styles.entryContent}>
                <p className={styles.entryOrg}>N2G Brains</p>
                <p className={styles.entryRole}>Frontend Developer</p>
                <p className={styles.entryDesc}>
                  Developed and maintained responsive web applications using React and JavaScript.
                  Collaborated with cross-functional teams to translate design mockups into functional,
                  high-performance interfaces. Implemented reusable components and optimized code for
                  performance.
                </p>
              </div>
            </div>

            <div className={styles.entry}>
              <span className={styles.entryDate}>Jan 2024 – Apr 2026</span>
              <div className={styles.entryContent}>
                <p className={styles.entryOrg}>INGO Armenia Insurance Company</p>
                <p className={styles.entryRole}>Medical Claims Specialist</p>
                <p className={styles.entryDesc}>
                  Reviewed and processed medical insurance claims, evaluating documentation for accuracy
                  and compliance. Collaborated with healthcare providers and clients to verify medical
                  information and resolve claim-related inquiries.
                </p>
              </div>
            </div>

            <div className={styles.entry}>
              <span className={styles.entryDate}>Jan 2023 – Jan 2024</span>
              <div className={styles.entryContent}>
                <p className={styles.entryOrg}>FinnLaw</p>
                <p className={styles.entryRole}>Legal Specialist</p>
                <p className={styles.entryDesc}>
                  Provided comprehensive legal support including document preparation and case research.
                  Performed legal, jurisdictional, and judicial translations. Assisted in court and
                  investigative proceedings.
                </p>
              </div>
            </div>
          </section>

          {/* Education */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Education</h2>

            <div className={styles.entry}>
              <span className={styles.entryDate}>Sep 2023 – May 2025</span>
              <div className={styles.entryContent}>
                <p className={styles.entryOrg}>Yerevan State University</p>
                <p className={styles.entryRole}>Master's Degree — Red Diploma</p>
                <p className={styles.entryDesc}>
                  Completed with honors, maintaining outstanding academic performance. Advanced research
                  and problem-solving capabilities through rigorous academic challenges.
                </p>
              </div>
            </div>

            <div className={styles.entry}>
              <span className={styles.entryDate}>Sep 2019 – May 2023</span>
              <div className={styles.entryContent}>
                <p className={styles.entryOrg}>Yerevan State University</p>
                <p className={styles.entryRole}>Bachelor's Degree — Red Diploma</p>
                <p className={styles.entryDesc}>
                  Graduated with honors, demonstrating consistent academic excellence. Developed strong
                  analytical and critical thinking skills.
                </p>
              </div>
            </div>
          </section>

          {/* Skills */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Technical Skills</h2>
            <div className={styles.skillsGrid}>
              {SKILLS.map(s => <span key={s} className={styles.skill}>{s}</span>)}
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Soft Skills</h2>
            <div className={styles.skillsGrid}>
              {SOFT_SKILLS.map(s => <span key={s} className={styles.skill}>{s}</span>)}
            </div>
          </section>

          {/* Languages */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Languages</h2>
            <div className={styles.langsGrid}>
              {[
                { name: 'Armenian', level: 'Native' },
                { name: 'English', level: 'C1 – Fluent' },
                { name: 'Persian', level: 'C2 – Very Good' },
                { name: 'Russian', level: 'B2 – Basic' },
              ].map(l => (
                <div key={l.name} className={styles.langCard}>
                  <span className={styles.langName}>{l.name}</span>
                  <span className={styles.langLevel}>{l.level}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Certificates */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Certificates</h2>
            {[
              { date: 'Feb 2026', name: 'Contentstack Certification' },
              { date: 'Jan – Feb 2026', name: 'AWS Knowledge Based Serverless Training' },
              { date: 'Nov – Dec 2025', name: 'OutSystems Frontend Development Certification' },
            ].map(c => (
              <div key={c.name} className={styles.certEntry}>
                <span className={styles.certDate}>{c.date}</span>
                <span className={styles.certName}>{c.name}</span>
              </div>
            ))}
          </section>

          {/* Download */}
          <div className={styles.downloadRow}>
            <a href="/cv.pdf" download className={styles.downloadBtn}>Download PDF</a>
          </div>
        </div>
      </div>
    </div>
  )
}
