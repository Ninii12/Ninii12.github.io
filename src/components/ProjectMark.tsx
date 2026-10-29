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
      <span className={styles.texture} />
      <span className={styles.frame} />
      <span className={styles.kicker}>Concept study</span>
      <span className={styles.index}>{index}</span>
      <span className={styles.rule} />
      <span className={styles.caption}>Portfolio / 2026</span>
      <span className={styles.accent} />
    </div>
  )
}
