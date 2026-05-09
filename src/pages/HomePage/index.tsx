import { useState } from 'react'
import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'
import { GithubOutlined, LinkedinFilled } from '@ant-design/icons'
import { APP_ROUTES } from '../../app/consts'
import { HOME_PAGE_COPY } from './consts'
import { ProjectsCarousel } from '../../components/ProjectsCarousel'
import styles from './style.module.css';
import profilePhoto from '../../assets/profilePhoto.jpg';
import cvRaw from '../../api/cv.md?raw';
import { CvModal } from '../../components/CvModal';

const summary = cvRaw.split('---')[0].replace('**Summary**', '').trim();

function HomePage() {
  const [cvOpen, setCvOpen] = useState(false)
  const navigate = useNavigate()

  return (
    <>
      <section className={styles.heroGrid}>
        <div className={styles.heroLeft}>
          <h1 className={styles.heroName}>Shushanik Arakelyan</h1>
          <p className={styles.eyebrow}>{HOME_PAGE_COPY.eyebrow}</p>
          <p className={styles.heroText}>{summary}</p>
          <div className={styles.heroActions}>
            <Button className={styles.primaryButton} onClick={() => { const a = document.createElement('a'); a.href = '/cv.pdf'; a.download = 'Shushanik_Arakelyan_CV.pdf'; a.click(); }}>{HOME_PAGE_COPY.ctaPrimary}</Button>
            <Button className={styles.secondaryButton} onClick={() => setCvOpen(true)}>{HOME_PAGE_COPY.ctaSecondary}</Button>
          </div>
          <div className={styles.socialLinks}>
            <a href="https://github.com/Shushanik01" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="GitHub">
              <GithubOutlined />
            </a>
            <a href="https://www.linkedin.com/in/shushanik-arakelyan-4b763b365/" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="LinkedIn">
              <LinkedinFilled />
            </a>
          </div>
        </div>

        <div className={styles.heroRight}>
          <div className={styles.photoWrapper}>
            <div className={styles.orbit1}><span className={styles.electron} /></div>
            <div className={styles.orbit2}><span className={styles.electron} /></div>
            <div className={styles.orbit3}><span className={styles.electron} /></div>
            <div className={styles.photoRing}>
              <div className={styles.photoPlaceholder}>
                <img src={profilePhoto} alt="Profile photo" className={styles.photoImg} />
              </div>
            </div>
            <span className={`${styles.formula} ${styles.f1}`}>E=mc²</span>
            <span className={`${styles.formula} ${styles.f2}`}>F=ma</span>
            <span className={`${styles.formula} ${styles.f3}`}>P=IU</span>
            <span className={`${styles.formula} ${styles.f4}`}>ΔU=A+Q</span>
            <span className={`${styles.formula} ${styles.f5}`}>T=2π√LC</span>
            <span className={`${styles.formula} ${styles.f6}`}>λ=vT</span>
            <span className={`${styles.formula} ${styles.code} ${styles.f7}`}>{'<div />'}</span>
            <span className={`${styles.formula} ${styles.code} ${styles.f8}`}>{'useState()'}</span>
            <span className={`${styles.formula} ${styles.code} ${styles.f9}`}>{'display: flex'}</span>
            <span className={`${styles.formula} ${styles.code} ${styles.f10}`}>{'const () =>'}</span>
            <span className={`${styles.formula} ${styles.code} ${styles.f11}`}>{'<React />'}</span>
            <span className={`${styles.formula} ${styles.code} ${styles.f12}`}>{'border-radius'}</span>
            <span className={`${styles.formula} ${styles.code} ${styles.f13}`}>{'@keyframes'}</span>
            <span className={`${styles.formula} ${styles.code} ${styles.f14}`}>{'npm install'}</span>
            <span className={`${styles.formula} ${styles.code} ${styles.f15}`}>{'useEffect()'}</span>
            <span className={`${styles.formula} ${styles.code} ${styles.f16}`}>{'useRef()'}</span>
            <span className={`${styles.formula} ${styles.code} ${styles.f17}`}>{'useMemo()'}</span>
            <span className={`${styles.formula} ${styles.code} ${styles.f18}`}>{'props.children'}</span>
            <span className={`${styles.formula} ${styles.code} ${styles.f19}`}>{'useCallback()'}</span>
            <span className={`${styles.formula} ${styles.code} ${styles.f20}`}>{'React.memo()'}</span>
            <span className={`${styles.formula} ${styles.code} ${styles.f21}`}>{'key={id}'}</span>
            <span className={`${styles.formula} ${styles.code} ${styles.f22}`}>{'useContext()'}</span>
            <span className={`${styles.formula} ${styles.code} ${styles.f23}`}>{'<Suspense />'}</span>
            <span className={`${styles.formula} ${styles.code} ${styles.f24}`}>{'async/await'}</span>
          </div>
        </div>
      </section>

      <ProjectsCarousel />

      <section className={styles.bannerSection}>
        <p className={styles.spark}>✦ ✦</p>
        <h2 className={styles.bannerTitle}>
          {HOME_PAGE_COPY.ctaBannerPrefix} <span className={styles.bannerAccent}>{HOME_PAGE_COPY.ctaBannerAccent}</span>{' '}
          {HOME_PAGE_COPY.ctaBannerSuffix}
        </h2>
        <Button className={styles.bannerButton} onClick={() => navigate(APP_ROUTES.contact)}>{HOME_PAGE_COPY.ctaBannerButton}</Button>
      </section>
      <CvModal open={cvOpen} onClose={() => setCvOpen(false)} />
    </>
  )
}

export default HomePage
