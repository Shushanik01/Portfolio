import { useState } from 'react'
import styles from './index.module.css'

// When you have the certificate images, import them here and set the `image` field below:
// import awsCert from '../../assets/certificates/aws-serverless.png'
// import contentstackCert from '../../assets/certificates/contentstack.png'
// import rsSchoolCert from '../../assets/certificates/rs-school.png'
// import agbuCert from '../../assets/certificates/agbu.png'

const CERTIFICATES = [
  {
    title: 'AWS Serverless',
    issuer: 'Amazon Web Services',
    image: null as string | null,
  },
  {
    title: 'Frontend Developer',
    issuer: 'Contentstack',
    image: null as string | null,
  },
  {
    title: 'Frontend Developer',
    issuer: 'RS School',
    image: null as string | null,
  },
  {
    title: 'AI Enhanced Frontend Development',
    issuer: 'AGBU',
    image: null as string | null,
  },
]

export function CertificatesCarousel() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent(i => (i - 1 + CERTIFICATES.length) % CERTIFICATES.length)
  const next = () => setCurrent(i => (i + 1) % CERTIFICATES.length)

  return (
    <section id="certifications">
      <div className={styles.wrapper}>
        <h2 className={styles.heading}>Certifications</h2>
        <p className={styles.sub}>Professional certificates & credentials</p>

        <div className={styles.carousel}>
          <button className={styles.arrow} onClick={prev} aria-label="Previous">&#8592;</button>

          <div className={styles.track}>
            {CERTIFICATES.map((cert, i) => {
              const offset = i - current
              const isActive = offset === 0
              const isAdjacent = Math.abs(offset) === 1
              return (
                <article
                  key={`${cert.issuer}-${cert.title}`}
                  className={`${styles.card} ${isActive ? styles.cardActive : ''} ${isAdjacent ? styles.cardAdjacent : ''}`}
                  style={{ '--offset': offset } as React.CSSProperties}
                >
                  <div className={styles.imageWrapper}>
                    {cert.image ? (
                      <img src={cert.image} alt={`${cert.title} — ${cert.issuer}`} className={styles.certImage} />
                    ) : (
                      <div className={styles.placeholder}>
                        <span className={styles.placeholderIcon}>◈</span>
                        <span className={styles.placeholderText}>Certificate coming soon</span>
                      </div>
                    )}
                  </div>
                  <div className={styles.info}>
                    <p className={styles.issuer}>{cert.issuer}</p>
                    <h3 className={styles.title}>{cert.title}</h3>
                  </div>
                </article>
              )
            })}
          </div>

          <button className={styles.arrow} onClick={next} aria-label="Next">&#8594;</button>
        </div>

        <div className={styles.dots}>
          {CERTIFICATES.map((_, i) => (
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
