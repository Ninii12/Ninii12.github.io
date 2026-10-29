import { useRef } from 'react'
import { useHeroMotion } from '../hooks/useHeroMotion'
import HeroCover from './HeroCover'
import styles from './CharmHero.module.css'

const chapters = ['Beauty', 'Pet', 'Fintech', 'Technology', 'Travel']
const strategy = Array.from('Strategy')
const edge = Array.from('edge.')

export default function CharmHero() {
  const heroRef = useRef<HTMLElement>(null)

  useHeroMotion(heroRef)

  return (
    <div className={styles.sequence} data-hero-sequence>
      <section
        ref={heroRef}
        id="top"
        className={styles.hero}
        data-hero-root
        aria-labelledby="hero-title"
      >
        <div className={styles.grid} data-hero-grid aria-hidden="true" />
        <span className={styles.issueWatermark} aria-hidden="true">
          01
        </span>

        <div className={styles.container}>
          <div className={styles.masthead} data-hero-identity>
            <p className={styles.issueLine} data-hero-kicker>
              <span>Portfolio 2026</span>
              <span className={styles.issueNumber}>Issue 01</span>
              <span>Social media strategy / content direction</span>
            </p>

            <div className={styles.identityRow}>
              <p className={styles.name} data-hero-name>
                <span className={styles.nameLine}>Nancy</span>{' '}
                <span className={styles.nameLine}>
                  <span className={styles.nowrap}>Lawrance</span>{' '}
                </span>
              </p>
              <p className={styles.role} data-hero-role>
                <span>Social Media</span>{' '}
                <span>Strategist / Manager</span>
              </p>
            </div>
          </div>

          <div className={styles.main}>
            <div className={styles.copy} data-hero-copy>
              <h1
                id="hero-title"
                className={styles.title}
                data-hero-title
                aria-label="Strategy with a creative edge."
              >
                <span className={styles.titleVisual} aria-hidden="true">
                  <span className={styles.lineMask} data-hero-line="strategy">
                    <span className={styles.lineInner}>
                      {strategy.map((char, index) => (
                        <span
                          className={styles.char}
                          data-hero-char="strategy"
                          key={`strategy-${index}`}
                        >
                          {char}
                        </span>
                      ))}
                    </span>
                  </span>

                  <span className={styles.lineRow}>
                    <span
                      className={styles.asideMask}
                      data-hero-line="aside"
                    >
                      <span className={styles.titleAside} data-hero-aside>
                        with a
                      </span>
                    </span>

                    <span
                      className={styles.lineMask}
                      data-hero-line="creative"
                    >
                      <span
                        className={`${styles.lineInner} ${styles.titleAccent}`}
                        data-hero-creative
                      >
                        creative
                      </span>
                    </span>
                  </span>

                  <span
                    className={`${styles.lineMask} ${styles.titleEdge}`}
                    data-hero-line="edge"
                  >
                    <span className={styles.lineInner}>
                      {edge.map((char, index) => (
                        <span
                          className={styles.char}
                          data-hero-char="edge"
                          key={`edge-${index}`}
                        >
                          {char}
                        </span>
                      ))}
                      <svg
                        className={styles.titleStar}
                        data-hero-star
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <path
                          d="M12 0c1.1 7.2 4.8 10.9 12 12-7.2 1.1-10.9 4.8-12 12-1.1-7.2-4.8-10.9-12-12C7.2 10.9 10.9 7.2 12 0Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                  </span>
                </span>
              </h1>

              <div className={styles.copyFoot}>
                <p className={styles.intro} data-hero-intro>
                  A social-first portfolio in five chapters — beauty, pet,
                  fintech, technology, and travel. Strategy, story, and the
                  details that make a brand feel remembered.
                </p>

                <div className={styles.actions} data-hero-actions>
                  <a className={styles.cta} href="#work">
                    <span>View the work</span>
                    <span className={styles.ctaArrow} aria-hidden="true">
                      <svg viewBox="0 0 24 24" focusable="false">
                        <path d="M4 12h15M13 6l6 6-6 6" />
                      </svg>
                    </span>
                  </a>
                  <p className={styles.actionNote}>
                    Five chapters. One point of view.
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.art} data-art-stage>
              <figure className={styles.figure}>
                <div className={styles.artScroll} data-hero-art-scroll>
                  <HeroCover />
                </div>
              </figure>
            </div>
          </div>

          <div
            id="chapters"
            className={styles.archiveRow}
            data-hero-archive
          >
            <ul className={styles.chapters} aria-label="Portfolio chapters">
              {chapters.map((chapter, index) => (
                <li key={chapter} className={styles.chapter}>
                  <span className={styles.chapterIndex} aria-hidden="true">
                    0{index + 1}
                  </span>
                  <span>{chapter}</span>
                </li>
              ))}
            </ul>

            <a
              className={styles.scrollCue}
              href="#work"
              data-hero-scroll-cue
              aria-label="Scroll to the work index"
            >
              <span>Scroll</span>
              <span className={styles.scrollLine} aria-hidden="true" />
              <span className={styles.scrollDot} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div
          className={styles.horizon}
          data-hero-horizon
          aria-hidden="true"
        >
          <span className={styles.horizonGlow} />
          <span
            className={styles.horizonLine}
            data-hero-horizon-line
          />
        </div>
      </section>
    </div>
  )
}
