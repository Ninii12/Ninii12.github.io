import { certifications } from '../data/certifications'
import styles from './CertificationsSection.module.css'

export default function CertificationsSection() {
  return (
    <section
      id="certifications"
      className={styles.certifications}
      aria-labelledby="certifications-title"
    >
      <div className={styles.inner}>
        <div className={styles.heading}>
          <div>
            <p className="eyebrow">Certifications / 03</p>
            <h2 id="certifications-title" className={styles.title}>
              Learning,
              <span>on the record.</span>
            </h2>
          </div>

          <p className={styles.note}>
            Formal coursework in social media marketing, alongside the
            self-directed concept studies.
          </p>
        </div>

        {certifications.map((certificate) => {
          const titleId = `certificate-${certificate.slug}`

          return (
            <article
              key={certificate.slug}
              className={styles.record}
              aria-labelledby={titleId}
            >
              <div className={styles.recordMain}>
                <p className={styles.kicker}>Certificate of completion</p>
                <h3 id={titleId} className={styles.course}>
                  {certificate.title}
                </h3>

                <dl className={styles.meta}>
                  <div>
                    <dt>Provider</dt>
                    <dd>{certificate.provider}</dd>
                  </div>
                  <div>
                    <dt>Completed</dt>
                    <dd>
                      <time dateTime={certificate.completedISO}>
                        {certificate.completed}
                      </time>
                    </dd>
                  </div>
                </dl>
              </div>

              <div className={styles.recordAside}>
                <p className={styles.kicker}>Course coverage</p>

                <ol className={styles.coverage}>
                  {certificate.skills.map((skill, index) => (
                    <li key={skill}>
                      <span aria-hidden="true">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      {skill}
                    </li>
                  ))}
                </ol>

                <a
                  className={styles.pdfLink}
                  href={certificate.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View the ${certificate.provider} ${certificate.title} certificate PDF (opens in a new tab)`}
                >
                  <span>View certificate</span>
                  <span className={styles.pdfMeta} aria-hidden="true">
                    PDF ↗
                  </span>
                </a>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
