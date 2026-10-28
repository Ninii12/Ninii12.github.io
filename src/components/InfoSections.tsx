import { site } from '../data/site'
import { Link } from './RouteLink'
import styles from './InfoSections.module.css'

const aboutIntro =
  'I’m an aspiring Social Media Strategist interested in the space between what brands want to say and what audiences actually need. This page is about how I think, what I’m building and where I want to go next.'

const principles = [
  {
    title: 'Listen before making',
    text: 'The best starting point is usually a better question. I want to understand the audience, the category and the business before deciding what the content should be.',
  },
  {
    title: 'Make the useful thing interesting',
    text: 'Utility and creativity are not opposites. A clear explanation, a good story and a beautiful execution can all live in the same post.',
  },
  {
    title: 'Measure honestly, then ask why',
    text: 'Numbers tell you what happened, not why. I want to pair platform data with qualitative signals and be willing to change my mind.',
  },
]

export function AboutSection() {
  return (
    <section
      id="about"
      className={styles.about}
      aria-labelledby="about-title"
    >
      <div className={styles.inner}>
        <div className={styles.aboutTop}>
          <div>
            <p className="eyebrow">About / 03</p>
            <h2 id="about-title" className={styles.aboutTitle}>
              Curious about people.
              <span>Deliberate about content.</span>
            </h2>
          </div>

          <div className={styles.aboutLead}>
            <p className={styles.lede}>{aboutIntro}</p>
            <Link className={styles.textLink} href="#contact">
              Start a conversation
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>

        <div className={styles.aboutGrid}>
          <aside className={styles.facts} aria-label="At a glance">
            <p className="eyebrow">At a glance</p>
            <dl>
              <div>
                <dt>Role</dt>
                <dd>{site.title}</dd>
              </div>
              <div>
                <dt>Location</dt>
                <dd>{site.location}</dd>
              </div>
              <div>
                <dt>Availability</dt>
                <dd>{site.availability}</dd>
              </div>
            </dl>
            <p className={styles.factsNote}>
              This is a concept portfolio. The work is self-directed and the
              thinking is shared as a proposal, not as client experience.
            </p>
          </aside>

          <div className={styles.principlesWrap}>
            <div className={styles.principlesHead}>
              <p className="eyebrow">Working principles</p>
              <p>
                Not rules. More like a set of habits for making better decisions.
              </p>
            </div>

            <ol className={styles.principles}>
              {principles.map((principle, index) => (
                <li key={principle.title}>
                  <span className={styles.principleIndex} aria-hidden="true">
                    0{index + 1}
                  </span>
                  <h3>{principle.title}</h3>
                  <p>{principle.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}

export function ContactSection() {
  return (
    <section
      id="contact"
      className={`${styles.contact} theme-dark`}
      aria-labelledby="contact-title"
    >
      <div className={styles.inner}>
        <p className="eyebrow">Contact / 04</p>

        <div className={styles.contactGrid}>
          <h2 id="contact-title" className={styles.contactTitle}>
            Let’s make something
            <span>meaningful.</span>
          </h2>

          <div className={styles.contactBody}>
            <p>
              Open to remote opportunities. If you are hiring, building a team
              or have a question about the work, email is the simplest way to
              reach me.
            </p>

            <a className={styles.email} href={`mailto:${site.email}`}>
              {site.email}
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path d="M4 12h15M13 6l6 6-6 6" />
              </svg>
            </a>

            <div className={styles.contactLinks}>
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile (opens in a new tab)"
              >
                GitHub / Ninii12
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </div>

        <div className={styles.contactFooter}>
          <span>{site.name}</span>
          <span>{site.location}</span>
          <span>Concept portfolio / 2026</span>
        </div>
      </div>
    </section>
  )
}
