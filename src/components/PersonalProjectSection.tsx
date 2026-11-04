import { personalProject } from '../data/personalProject'
import styles from './PersonalProjectSection.module.css'

export default function PersonalProjectSection() {
  return (
    <section
      id="personal-project"
      className={styles.personalProject}
      aria-labelledby="personal-project-title"
    >
      <div className={styles.inner}>
        <div className={styles.heading}>
          <div>
            <p className="eyebrow">{personalProject.eyebrow}</p>
            <h2 id="personal-project-title" className={styles.title}>
              {personalProject.title}
              <span>{personalProject.titleAccent}</span>
            </h2>
          </div>

          <p className={styles.note}>{personalProject.deck}</p>
        </div>

        <div className={styles.record}>
          <div className={styles.recordMain}>
            <p className={styles.kicker}>The project</p>
            <p className={styles.intro}>{personalProject.intro}</p>

            <div className={styles.demonstrations}>
              <p className={styles.kicker}>What this demonstrates</p>
              <ul>
                {personalProject.demonstrations.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className={styles.reels}>
              <p className={styles.kicker}>Selected Reels</p>
              <ol>
                {personalProject.reels.map((reel, index) => (
                  <li key={reel.url}>
                    <a
                      href={reel.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${reel.name} Instagram Reel (opens in a new tab)`}
                    >
                      <span className={styles.reelIndex} aria-hidden="true">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span>{reel.name}</span>
                      <span className={styles.reelArrow} aria-hidden="true">
                        ↗
                      </span>
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <aside
            className={styles.recordAside}
            aria-label="Instagram insights and project scope"
          >
            <p className={styles.kicker}>Instagram at a glance</p>
            <dl className={styles.metrics}>
              {personalProject.metrics.map((metric) => (
                <div key={metric.label}>
                  <dt>{metric.label}</dt>
                  <dd>{metric.value}</dd>
                </div>
              ))}
            </dl>

            <div className={styles.collaborationNote}>
              <p className={styles.kicker}>Collaboration note</p>
              <p>{personalProject.collaborationNote}</p>
            </div>

            <p className={styles.scopeNote} role="note">
              {personalProject.scopeNote}
            </p>
          </aside>
        </div>
      </div>
    </section>
  )
}
