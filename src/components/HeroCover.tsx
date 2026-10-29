import styles from './HeroCover.module.css'

/**
 * The hero's editorial cover plate.
 *
 * A black magazine cover with a custom geometric emblem, registration marks
 * and one pink accent. The emblem is inline SVG so it stays crisp at every
 * size and remains part of the existing pointer and scroll hook surface.
 */
export default function HeroCover() {
  return (
    <div
      className={styles.cover}
      data-hero-artwork
      data-hero-tilt
      aria-hidden="true"
    >
      <div className={styles.panel} data-hero-cover-panel>
        <span className={styles.insetRule} data-depth="0.12" />

        <div className={styles.topline} data-depth="0.24">
          <span>Portfolio / 2026</span>
          <span>Vol. 01</span>
        </div>

        <div className={styles.emblem} data-depth="0.62">
          <svg
            className={styles.emblemSvg}
            viewBox="70 60 470 440"
            preserveAspectRatio="xMidYMid meet"
            role="presentation"
            focusable="false"
          >
            <path
              className={styles.emblemWhite}
              d="M110 130 L290 90 L310 310 L220 450 L100 420 Z"
            />
            <path
              className={styles.emblemWhite}
              d="M350 300 L520 330 L500 470 L260 440 Z"
            />
            <path
              className={styles.emblemWhite}
              d="M430 110 L520 120 L475 190 Z"
            />
            <path className={styles.emblemCrease} d="M307 350 H500" />
            <rect
              className={styles.emblemPink}
              x="295"
              y="344"
              width="12"
              height="12"
            />
          </svg>
        </div>

        <span className={styles.hairline} data-hero-cover-line data-depth="0.3" />

        <div className={styles.bottomline} data-depth="0.38">
          <span className={styles.issue}>01—05</span>
          <span className={styles.caption}>
            Self-directed
            <br />
            concept studies
          </span>
        </div>

        <span className={styles.pinkBlock} data-depth="0.82" />
      </div>

      <span className={styles.spine} data-hero-cover-spine />
      <span
        className={styles.registration}
        data-hero-cover-registration
        data-depth="0.7"
      />
    </div>
  )
}
