import { useRef } from 'react'
import { useHeroMotion } from '../hooks/useHeroMotion'
import CharmArtwork from './CharmArtwork'
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
        <div className={styles.glow} data-hero-glow aria-hidden="true" />
        <div
          className={styles.aurora}
          data-hero-aurora
          aria-hidden="true"
        />
        <div className={styles.dusk} data-hero-dusk aria-hidden="true" />

        <div className={styles.container}>
          <div className={styles.copy} data-hero-copy>
            <p className={styles.kicker} data-hero-kicker>
              <span>Social media strategy</span>
              <span className={styles.kickerDot} aria-hidden="true" />
              <span>Content direction</span>
            </p>

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

                <span className={styles.asideMask} data-hero-line="aside">
                  <span className={styles.titleAside} data-hero-aside>
                    with a
                  </span>
                </span>

                <span className={styles.lineMask} data-hero-line="creative">
                  <span
                    className={`${styles.lineInner} ${styles.titleAccent}`}
                    data-hero-creative
                  >
                    creative
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
                      <defs>
                        <linearGradient
                          id="hero-star-metal"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="100%"
                        >
                          <stop offset="0%" stopColor="#ffffff" />
                          <stop offset="30%" stopColor="#ff5caf" />
                          <stop offset="62%" stopColor="#aa7bff" />
                          <stop offset="100%" stopColor="#58e8ff" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M12 0c1.1 7.2 4.8 10.9 12 12-7.2 1.1-10.9 4.8-12 12-1.1-7.2-4.8-10.9-12-12C7.2 10.9 10.9 7.2 12 0Z"
                        fill="url(#hero-star-metal)"
                      />
                    </svg>
                  </span>
                </span>
              </span>
            </h1>

            <p className={styles.intro} data-hero-intro>
              A social-first portfolio in five chapters — beauty, pet, fintech,
              technology, and travel. Strategy, story, and the details that make
              a brand feel remembered.
            </p>

            <div className={styles.actions} data-hero-actions>
              <a className={styles.cta} href="#work">
                <span>View work</span>
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

          <div className={styles.art} data-art-stage>
            <figure className={styles.figure}>
              <div className={styles.artScroll} data-hero-art-scroll>
                <CharmArtwork />
              </div>
              <figcaption
                className={styles.caption}
                data-hero-caption
              >
                <span className={styles.captionLabel}>Fig. 01</span>
                <span>Liquid chrome &amp; signal study</span>
              </figcaption>
            </figure>
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
          <span
            className={styles.horizonGlow}
            data-hero-horizon-glow
          />
          <span
            className={styles.horizonLine}
            data-hero-horizon-line
          />
        </div>
      </section>
    </div>
  )
}
