import type { ProjectAccent } from '../data/projects'
import styles from './ProjectMark.module.css'

type ProjectMarkProps = {
  accent: ProjectAccent
  index: string
  className?: string
  compact?: boolean
}

export default function ProjectMark({
  accent,
  index,
  className,
  compact = false,
}: ProjectMarkProps) {
  return (
    <div
      className={`${styles.mark}${compact ? ` ${styles.compact}` : ''}${
        className ? ` ${className}` : ''
      }`}
      data-project={accent}
      aria-hidden="true"
    >
      <span className={styles.glow} />
      <span className={styles.grid} />
      <span className={styles.orbit} />
      <span className={styles.orbitSecondary} />
      <span className={styles.disc} />
      <span className={styles.spark} />
      <span className={styles.index}>{index}</span>
      <span className={styles.caption}>Concept study</span>
    </div>
  )
}
