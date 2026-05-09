import styles from './style.module.css'
import awsCert from '../../assets/certificates/aws-knowledge-serverless-training-badge.png'
import outsystemsCert from '../../assets/certificates/Outsystems.jpg'

const CERTIFICATES = [
  {
    title: 'AWS Serverless',
    issuer: 'Amazon Web Services',
    image: awsCert as string,
  },
  {
    title: 'Frontend Developer',
    issuer: 'OutSystems',
    image: outsystemsCert as string,
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

function CertificatesPage() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h1 className={styles.heading}>Certifications</h1>
        <p className={styles.sub}>Professional certificates &amp; credentials</p>
        <div className={styles.grid}>
          {CERTIFICATES.map((cert) => (
            <article key={`${cert.issuer}-${cert.title}`} className={styles.card}>
              <div className={styles.imageWrapper}>
                {cert.image ? (
                  <img
                    src={cert.image}
                    alt={`${cert.title} — ${cert.issuer}`}
                    className={styles.certImage}
                  />
                ) : (
                  <div className={styles.placeholder}>
                    <span className={styles.placeholderIcon}>◈</span>
                    <span className={styles.placeholderText}>Certificate coming soon</span>
                  </div>
                )}
              </div>
              <div className={styles.info}>
                <p className={styles.issuer}>{cert.issuer}</p>
                <h2 className={styles.title}>{cert.title}</h2>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CertificatesPage
