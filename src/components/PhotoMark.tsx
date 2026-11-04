import type { ProjectAccent } from '../data/projects'
import styles from './PhotoMark.module.css'

type PhotoMarkProps = {
  accent: ProjectAccent
  index: string
  className?: string
  /** Accepted for drop-in parity; the plate scales with its container. */
  compact?: boolean
}

/**
 * A pearlescent still-life plate — shell, starfish and lily — carrying
 * the case-study number. Rendered from the local asset so it works in
 * dev, preview and production alike.
 */
export default function PhotoMark({
  accent,
  index,
  className,
}: PhotoMarkProps) {
  return (
    <div
      className={`${styles.mark}${className ? ` ${className}` : ''}`}
      data-project={accent}
      aria-hidden="true"
    >
      <img
        className={styles.art}
        src="/case-mark.jpg"
        alt=""
        decoding="async"
        draggable={false}
      />
      <span className={styles.number}>{index}</span>
    </div>
  )
}
