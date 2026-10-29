import { projects } from '../data/projects'
import ProjectMark from './ProjectMark'
import { Link } from './RouteLink'
import styles from './WorkSection.module.css'

export default function WorkSection() {
  return (
    <section id="work" className={styles.work} aria-labelledby="work-title">
      <div className={styles.inner}>
        <div className={styles.heading}>
          <div>
            <p className="eyebrow">Index / 01—05</p>
            <h2 id="work-title" className={styles.title}>
              Five concept worlds.
              <span>One strategic point of view.</span>
            </h2>
          </div>

          <div className={styles.note}>
            <p>
              Each project is a self-directed concept study: a proposed strategy,
              not client work.
            </p>
            <p>
              There are no invented clients, testimonials, performance outcomes or
              campaign results here — only the thinking, the audience questions
              and the ideas worth testing.
            </p>
          </div>
        </div>

        <ol className={styles.list}>
          {projects.map((project) => (
            <li key={project.slug}>
              <Link
                className={styles.card}
                href={`/work/${project.slug}`}
                data-project={project.accent}
                aria-label={`${project.title} — concept project`}
              >
                <span className={styles.index} aria-hidden="true">
                  {project.index}
                </span>

                <div className={styles.content}>
                  <div className={styles.meta}>
                    <span className={styles.category}>{project.category}</span>
                    <span className={styles.concept}>Concept project</span>
                  </div>

                  <h3 className={styles.cardTitle}>{project.title}</h3>
                  <span className={styles.deck}>{project.deck}</span>
                  <span className={styles.description}>
                    {project.cardDescription}
                  </span>

                  <span className={styles.action}>
                    View concept
                    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <path d="M4 12h15M13 6l6 6-6 6" />
                    </svg>
                  </span>
                </div>

                <div className={styles.art}>
                  <ProjectMark
                    accent={project.accent}
                    index={project.index}
                    compact
                  />
                </div>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
