import { Button } from 'antd'
import { HOME_PAGE_COPY, PHILOSOPHY_TOP_CARDS } from './consts'
import { splitHeroTitle } from './utils'
import styles from './style.module.css';
import CvSection from '../../api/cv.md?raw';
import Markdown from 'react-markdown';
// import elipse from '../../assets/Ellipse 23.png';
// import logo from '../../assets/Logo.png'

function HomePage() {
  const heroTitle = splitHeroTitle(
    HOME_PAGE_COPY.heroTitleStart,
    HOME_PAGE_COPY.heroTitleAccent,
    HOME_PAGE_COPY.heroTitleEnd,
  )

  const sections = CvSection.split('---');
  const summary = sections[0].replace('**Summary**', '').trim()
  return (
    <>
      <section className={styles.heroGrid}>
        <div className={styles.heroLeft}>
          <p className={styles.eyebrow}>{HOME_PAGE_COPY.eyebrow}</p>
          <h1 className={styles.heroTitle}>
            <span className={styles.heroLine}>{heroTitle.start}</span>
            <span className={`${styles.heroLine} ${styles.accent}`}>{heroTitle.accent}</span>
            <span className={styles.heroLine}>{heroTitle.end}</span>
          </h1>
          <p className={styles.heroText}>{HOME_PAGE_COPY.heroText}</p>
          <div className={styles.heroActions}>
            <Button className={styles.primaryButton}>{HOME_PAGE_COPY.ctaPrimary}</Button>
            <Button className={styles.secondaryButton}>{HOME_PAGE_COPY.ctaSecondary}</Button>
          </div>
        </div>

        <div className={styles.heroRight}>
          <div className={styles.heroVisual}>
            {/* <div className={styles.heroVisualOuterRing} />
            <div className={styles.heroVisualRing} />
            <div className={styles.heroVisualCore} /> */}
            <Markdown>{summary}</Markdown>
          </div>
        </div>
      </section>

      <section id="service" className={styles.philosophySection}>
        <h2 className={styles.sectionTitle}>{HOME_PAGE_COPY.philosophyTitle}</h2>
        <div className={styles.philosophyGrid}>
          <article className={styles.philosophyArticle}>
            <span className={styles.philosophyWatermark} aria-hidden="true">A</span>
            <div className={styles.compassMark}>⌖</div>
            <h3 className={styles.philosophyHeading}>{HOME_PAGE_COPY.philosophySubtitle}</h3>
            <p className={styles.philosophyText}>{HOME_PAGE_COPY.philosophyText}</p>
          </article>

          <div className={styles.rightPanel}>
            <div className={styles.topCards}>
              {PHILOSOPHY_TOP_CARDS.map((card) => (
                <article key={card.title} className={styles.card}>
                  <p className={styles.cardTitle}>{card.title}</p>
                  <p className={styles.cardBody}>{card.body}</p>
                  {'tags' in card && card.tags ? (
                    <div className={styles.tagRow}>
                      {card.tags.map((tag) => (
                        <span key={tag} className={styles.tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </article>
              ))}
            </div>
            <article className={styles.featureCard}>
              <p className={styles.featureText}>Precision in Every Pixel</p>
            </article>
          </div>
        </div>
      </section>

      <section id="projects" className={styles.bannerSection}>
        <p className={styles.spark}>✦ ✦</p>
        <h2 className={styles.bannerTitle}>
          {HOME_PAGE_COPY.ctaBannerPrefix} <span className={styles.bannerAccent}>{HOME_PAGE_COPY.ctaBannerAccent}</span>{' '}
          {HOME_PAGE_COPY.ctaBannerSuffix}
        </h2>
        <Button className={styles.bannerButton}>{HOME_PAGE_COPY.ctaBannerButton}</Button>
      </section>
    </>
  )
}

export default HomePage
