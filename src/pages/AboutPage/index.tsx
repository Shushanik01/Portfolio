import { Typography } from 'antd'
import { ABOUT_PAGE_COPY, TECH_SKILLS } from './consts'
import styles from './style.module.css';
import CvSection from '../../components/CvSection';

const { Title } = Typography

function AboutPage() {
  return (
    <section className={styles.section}>
      <div className={styles.card}>
        <Title level={2}>{ABOUT_PAGE_COPY.title}</Title>
        <p className={styles.skillsTitle}>{ABOUT_PAGE_COPY.subtitle}</p>
        <div className={styles.skillsGrid}>
          {TECH_SKILLS.map((skill) => (
            <div key={skill.name} className={styles.skillItem} title={skill.name}>
              <img src={skill.src} alt={skill.name} className={styles.skillLogo} />
            </div>
          ))}
        </div>
        <div className={styles.summaryCard}>
          <p className={styles.summaryCardTitle}>{ABOUT_PAGE_COPY.summaryLabel}</p>
          <p className={styles.summaryText}>{ABOUT_PAGE_COPY.summary}</p>
        </div>
        <CvSection section="Professional Experience" />
        <CvSection section="Education" />
      </div>
    </section>
  )
}

export default AboutPage
