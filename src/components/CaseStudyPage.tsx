import { projects, type Project } from '../data/projects'
import ProjectMark from './ProjectMark'
import { Link } from './RouteLink'
import styles from './CaseStudyPage.module.css'

const sections = [
  { id: 'overview', label: 'The brief' },
  { id: 'audience', label: 'Audience' },
  { id: 'strategy', label: 'Strategic idea' },
  { id: 'pillars', label: 'Content pillars' },
  { id: 'creative-direction', label: 'Creative direction' },
  { id: 'measurement', label: 'Measurement' },
  { id: 'risks', label: 'Risks & limits' },
  { id: 'reflection', label: 'Reflection' },
]

type CaseStudyPageProps = {
  project: Project
}

export default function CaseStudyPage({ project }: CaseStudyPageProps) {
  const currentIndex = projects.findIndex((item) => item.slug === project.slug)
  const previous = projects[(currentIndex - 1 + projects.length) % projects.length]
  const next = projects[(currentIndex + 1) % projects.length]

  return (
    <article
      className={styles.page}
      data-project={project.accent}
      aria-labelledby="case-title"
    >
      <header className={styles.hero}>
        <div className={styles.inner}>
          <div className={styles.heroBar}>
            <Link className={styles.backLink} href="/#work">
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path d="M20 12H5M11 6l-6 6 6 6" />
              </svg>
              All concept work
            </Link>
            <span className={styles.conceptLabel}>Concept project</span>
          </div>

          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <p className="eyebrow">
                {project.category} / Concept {project.index}
              </p>
              <h1 id="case-title" className={styles.title}>
                {project.title}
              </h1>
              <p className={styles.deck}>{project.deck}</p>

              <ul className={styles.channels} aria-label="Proposed channels">
                {project.channels.map((channel) => (
                  <li key={channel}>{channel}</li>
                ))}
              </ul>
            </div>

            <div className={styles.heroMark}>
              <ProjectMark accent={project.accent} index={project.index} />
            </div>
          </div>

          <div className={styles.disclaimer} role="note">
            <span aria-hidden="true">↳</span>
            <p>
              <strong>Self-directed concept project — not client work.</strong>{' '}
              The scenario is hypothetical, the audience observations are
              assumptions to validate, and no campaign or performance results are
              claimed.
            </p>
          </div>
        </div>
      </header>

      <div className={`${styles.inner} ${styles.bodyLayout}`}>
        <aside className={styles.toc}>
          <div className={styles.tocInner}>
            <p className="eyebrow">On this page</p>
            <nav aria-label="Case study sections">
              <ol>
                {sections.map((section, index) => (
                  <li key={section.id}>
                    <a href={`#${section.id}`}>
                      <span>{String(index + 1).padStart(2, '0')}</span>
                      {section.label}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
            <Link className={styles.tocBack} href="/#work">
              Back to all work
            </Link>
          </div>
        </aside>

        <div className={styles.content}>
          <section id="overview" className={styles.section}>
            <div className={styles.sectionHead}>
              <p className="eyebrow">01 / The brief</p>
              <h2>Start with the situation, not the content.</h2>
            </div>
            <div className={styles.prose}>
              <p>{project.scenario}</p>
            </div>
            <div className={styles.challenge}>
              <p className="eyebrow">The challenge</p>
              <h3>{project.challenge.headline}</h3>
              <p>{project.challenge.body}</p>
            </div>
          </section>

          <section id="audience" className={styles.section}>
            <div className={styles.sectionHead}>
              <p className="eyebrow">02 / Audience</p>
              <h2>Who this is for — and what they need.</h2>
            </div>
            <p className={styles.sectionIntro}>
              These segments are working hypotheses. A real project would start by
              testing them against interviews, platform behaviour and existing
              customer knowledge.
            </p>
            <div className={styles.audienceGrid}>
              {project.audience.map((segment, index) => (
                <article key={segment.name} className={styles.audienceCard}>
                  <span className={styles.cardIndex} aria-hidden="true">
                    0{index + 1}
                  </span>
                  <h3>{segment.name}</h3>
                  <p>{segment.detail}</p>
                  <div className={styles.need}>
                    <span>Needs</span>
                    <p>{segment.need}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="strategy" className={styles.section}>
            <div className={styles.sectionHead}>
              <p className="eyebrow">03 / Strategic idea</p>
              <h2>A clear place to stand.</h2>
            </div>

            <blockquote className={styles.hypothesis}>
              <span aria-hidden="true">“</span>
              <p>{project.strategy.hypothesis}</p>
            </blockquote>

            <div className={styles.strategyGrid}>
              <div>
                <p className="eyebrow">Positioning</p>
                <p className={styles.positioning}>
                  {project.strategy.positioning}
                </p>
              </div>
              <div>
                <p className="eyebrow">Promise</p>
                <p className={styles.promise}>{project.strategy.promise}</p>
              </div>
            </div>

            <div className={styles.personality}>
              <span>Personality</span>
              <p>{project.strategy.personality}</p>
            </div>

            <ul className={styles.messages} aria-label="Message directions">
              {project.strategy.messages.map((message) => (
                <li key={message}>{message}</li>
              ))}
            </ul>
          </section>

          <section id="pillars" className={styles.section}>
            <div className={styles.sectionHead}>
              <p className="eyebrow">04 / Content pillars</p>
              <h2>A repeatable content system.</h2>
            </div>
            <ol className={styles.pillars}>
              {project.pillars.map((pillar, index) => (
                <li key={pillar.name}>
                  <span className={styles.pillarIndex} aria-hidden="true">
                    0{index + 1}
                  </span>
                  <div>
                    <h3>{pillar.name}</h3>
                    <p>{pillar.description}</p>
                    <span className={styles.formats}>{pillar.formats}</span>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section id="creative-direction" className={styles.section}>
            <div className={styles.sectionHead}>
              <p className="eyebrow">05 / Creative direction</p>
              <h2>Three ways in.</h2>
            </div>
            <div className={styles.concepts}>
              {project.concepts.map((concept, index) => (
                <article key={concept.title} className={styles.conceptCard}>
                  <span className={styles.cardIndex} aria-hidden="true">
                    0{index + 1}
                  </span>
                  <p className="eyebrow">Proposed concept</p>
                  <h3>{concept.title}</h3>
                  <p className={styles.hook}>{concept.hook}</p>
                  <p>{concept.format}</p>
                  <p className={styles.conceptDetail}>{concept.detail}</p>
                  <span className={styles.ctaLine}>{concept.cta}</span>
                </article>
              ))}
            </div>
          </section>

          <section id="measurement" className={styles.section}>
            <div className={styles.sectionHead}>
              <p className="eyebrow">06 / Measurement</p>
              <h2>Questions, not targets.</h2>
            </div>
            <p className={styles.sectionIntro}>
              This concept does not set performance targets or claim results. It
              proposes questions to test with real people, plus qualitative
              methods for understanding what the content actually did.
            </p>
            <ol className={styles.measurementList}>
              {project.measurement.map((item, index) => (
                <li key={item.question}>
                  <span className={styles.measurementIndex} aria-hidden="true">
                    0{index + 1}
                  </span>
                  <div>
                    <h3>{item.question}</h3>
                    <p>{item.method}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section id="risks" className={styles.section}>
            <div className={styles.sectionHead}>
              <p className="eyebrow">07 / Risks & limits</p>
              <h2>What could go wrong.</h2>
            </div>
            <div className={styles.risks}>
              {project.risks.map((risk) => (
                <div key={risk.risk} className={styles.risk}>
                  <h3>{risk.risk}</h3>
                  <p>{risk.mitigation}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="reflection" className={styles.section}>
            <div className={styles.sectionHead}>
              <p className="eyebrow">08 / Reflection</p>
              <h2>What I take from this.</h2>
            </div>
            <p className={styles.reflection}>{project.reflection}</p>

            <div className={styles.nextSteps}>
              <p className="eyebrow">Next steps if this were real</p>
              <ul>
                {project.nextSteps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ul>
            </div>
          </section>
        </div>
      </div>

      <nav className={styles.caseNav} aria-label="Case study navigation">
        <Link className={styles.caseNavLink} href={`/work/${previous.slug}`}>
          <span>Previous concept</span>
          <strong>{previous.title}</strong>
        </Link>
        <Link
          className={`${styles.caseNavLink} ${styles.caseNavNext}`}
          href={`/work/${next.slug}`}
        >
          <span>Next concept</span>
          <strong>{next.title}</strong>
        </Link>
      </nav>

      <div className={styles.closing}>
        <div className={styles.inner}>
          <p className="eyebrow">Continue the conversation</p>
          <p className={styles.closingTitle}>
            Want to talk through the thinking?
          </p>
          <Link className={styles.closingLink} href="/#contact">
            Contact Nancy
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </article>
  )
}
