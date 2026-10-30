import type { CSSProperties, FC } from 'react'
import styles from './JellyfishArt.module.css'

type ChainDef = {
  /** Strand root along the rim. */
  x: number
  /** Segment joints, in viewBox Y units, from rim downward. */
  joints: [number, number, number]
  /** Root stroke width; segments taper from this. */
  width: number
  /** Root stroke opacity; segments fade toward the tip. */
  opacity: number
  /** Signed bend amplitude; alternating per strand for variety. */
  bend: number
}

/**
 * Eleven tentacle chains. Each is built from three linked segments so the
 * wave can travel from the rim to the tip; length and bend vary per strand.
 */
const CHAINS: ChainDef[] = [
  { x: 52, joints: [286, 354, 452], width: 1.2, opacity: 0.45, bend: 12 },
  { x: 76, joints: [292, 360, 464], width: 1.6, opacity: 0.6, bend: -14 },
  { x: 98, joints: [282, 348, 444], width: 1.2, opacity: 0.4, bend: 13 },
  { x: 118, joints: [296, 366, 470], width: 2.2, opacity: 0.75, bend: -16 },
  { x: 140, joints: [290, 358, 462], width: 1.4, opacity: 0.5, bend: 15 },
  { x: 160, joints: [286, 352, 456], width: 1.9, opacity: 0.65, bend: -13 },
  { x: 180, joints: [294, 364, 468], width: 1.3, opacity: 0.45, bend: 14 },
  { x: 198, joints: [288, 354, 458], width: 2, opacity: 0.68, bend: -15 },
  { x: 216, joints: [284, 350, 448], width: 1.2, opacity: 0.42, bend: 12 },
  { x: 232, joints: [250, 336, 424], width: 1.6, opacity: 0.5, bend: -11 },
  { x: 248, joints: [236, 318, 396], width: 1.1, opacity: 0.38, bend: 9 },
]

/**
 * Splits one strand into three connected cubic segments. Segment starts and
 * ends chain at shared joints, and each segment keeps a gentle S-bend so the
 * chain reads as one flowing strand while every part can lag independently.
 */
function buildChain(chain: ChainDef): [string, string, string] {
  const { x, joints, bend } = chain
  const [j1, j2, j3] = joints
  const y0 = 206
  const mid1 = (y0 + j1) / 2
  const mid2 = (j1 + j2) / 2
  const mid3 = (j2 + j3) / 2

  const end1 = x + bend * 0.2
  const end2 = x - bend * 0.15
  const end3 = x + bend * 0.05

  const seg1 = `M${x} ${y0}C${x - bend} ${mid1 - 6},${x + bend * 0.6} ${
    mid1 + 10
  },${end1} ${j1}`
  const seg2 = `M${end1} ${j1}C${end1 - bend * 0.9} ${mid2 - 8},${
    end1 + bend * 0.55
  } ${mid2 + 12},${end2} ${j2}`
  const seg3 = `M${end2} ${j2}C${end2 + bend * 0.8} ${mid3 - 6},${
    end2 - bend * 0.5
  } ${mid3 + 8},${end3} ${j3}`

  return [seg1, seg2, seg3]
}

type JellyfishProps = {
  /** Gradient id prefix so the two instances never collide. */
  prefix: string
  /** Waveform phase offset, in seconds, separating the two bodies. */
  phase: number
}

const SPARKLES = [
  { cx: 58, cy: 86, r: 2, o: 0.85, delay: 0 },
  { cx: 96, cy: 60, r: 1.6, o: 0.55, delay: 0.6 },
  { cx: 138, cy: 44, r: 2, o: 0.8, delay: 1.3 },
  { cx: 180, cy: 58, r: 1.7, o: 0.6, delay: 2.1 },
  { cx: 222, cy: 84, r: 2, o: 0.85, delay: 0.9 },
  { cx: 246, cy: 120, r: 1.5, o: 0.5, delay: 2.9 },
  { cx: 86, cy: 138, r: 1.4, o: 0.45, delay: 1.7 },
  { cx: 214, cy: 132, r: 1.8, o: 0.6, delay: 0.4 },
  { cx: 160, cy: 96, r: 1.6, o: 0.55, delay: 2.5 },
  { cx: 70, cy: 180, r: 1.2, o: 0.4, delay: 3.3 },
  { cx: 238, cy: 164, r: 1.2, o: 0.42, delay: 1.1 },
]

const STARLETS = [
  { x: 118, y: 72, o: 0.9, delay: 0.3 },
  { x: 196, y: 110, o: 0.65, delay: 2.2 },
  { x: 60, y: 150, o: 0.55, delay: 3.7 },
]

const STARLET_PATH = 'M0 -6L1.4 -1.4L6 0L1.4 1.4L0 6L-1.4 1.4L-6 0L-1.4 -1.4Z'

/** The scalloped dome path, reused by the outer membrane and the mid layer. */
const DOME_PATH =
  'M30 174C30 102 78 30 150 30C222 30 270 102 270 174C270 186 264 193 256 197Q246 212 234 201Q226 214 214 203Q202 216 190 204Q178 215 166 203Q154 216 142 204Q130 215 118 203Q106 214 96 202Q88 212 76 201Q60 210 44 196C36 193 30 186 30 174Z'

const PLEAT_PATHS = [
  'M150 40C112 66 88 116 80 192',
  'M150 40C124 74 110 128 104 196',
  'M150 40C148 76 146 132 146 198',
  'M150 40C172 74 186 128 190 196',
  'M150 40C186 66 212 116 222 192',
]

/**
 * A translucent, pearlescent jellyfish drawn entirely in SVG so it glows on
 * the blush paper: pale pink, dusty rose, lilac and lavender membranes, a
 * champagne heart, a white rim light and chains of trailing strands. All
 * softness is gradient-baked; no SVG filters are used, so every animated
 * element stays cheap to repaint.
 */
const Jellyfish: FC<JellyfishProps> = ({ prefix, phase }) => {
  const ramp = [1, 0.72, 0.52]
  const fade = [1, 0.88, 0.74]

  return (
    <svg
      className={styles.svg}
      viewBox="0 0 300 480"
      role="presentation"
      focusable="false"
    >
      <defs>
        <radialGradient id={`${prefix}-halo`} cx="50%" cy="48%" r="52%">
          <stop offset="0%" stopColor="#FFF6EC" stopOpacity="0.48" />
          <stop offset="55%" stopColor="#F9DCD9" stopOpacity="0.26" />
          <stop offset="100%" stopColor="#E8D2CE" stopOpacity="0" />
        </radialGradient>
        <radialGradient id={`${prefix}-bell`} cx="50%" cy="38%" r="76%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.72" />
          <stop offset="28%" stopColor="#FBEAE4" stopOpacity="0.6" />
          <stop offset="52%" stopColor="#EABBD9" stopOpacity="0.52" />
          <stop offset="78%" stopColor="#C7A2E0" stopOpacity="0.46" />
          <stop offset="100%" stopColor="#9E7FC8" stopOpacity="0.32" />
        </radialGradient>
        <radialGradient id={`${prefix}-bell-mid`} cx="50%" cy="42%" r="60%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.42" />
          <stop offset="55%" stopColor="#EAC4DD" stopOpacity="0.26" />
          <stop offset="100%" stopColor="#B89CD6" stopOpacity="0.14" />
        </radialGradient>
        <radialGradient id={`${prefix}-core`} cx="50%" cy="46%" r="50%">
          <stop offset="0%" stopColor="#FFF6E0" stopOpacity="0.95" />
          <stop offset="45%" stopColor="#F7DDB1" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#F2C9CE" stopOpacity="0" />
        </radialGradient>
        <radialGradient id={`${prefix}-core-hot`} cx="50%" cy="48%" r="50%">
          <stop offset="0%" stopColor="#FFFDF5" stopOpacity="0.8" />
          <stop offset="55%" stopColor="#FFEECE" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#FFF6E0" stopOpacity="0" />
        </radialGradient>
        <radialGradient id={`${prefix}-bath`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#CBA6E4" stopOpacity="0.3" />
          <stop offset="60%" stopColor="#CBA6E4" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#CBA6E4" stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`${prefix}-ribbon`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#CDA3E2" stopOpacity="0.78" />
          <stop offset="55%" stopColor="#E9AABE" stopOpacity="0.52" />
          <stop offset="100%" stopColor="#EAC2A2" stopOpacity="0.12" />
        </linearGradient>
        <linearGradient id={`${prefix}-tent`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#C66E8C" stopOpacity="0.9" />
          <stop offset="55%" stopColor="#CE9AA4" stopOpacity="0.42" />
          <stop offset="100%" stopColor="#C66E8C" stopOpacity="0" />
        </linearGradient>
        <linearGradient id={`${prefix}-rim`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </linearGradient>
        <linearGradient id={`${prefix}-shade`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#6E5578" stopOpacity="0.42" />
          <stop offset="100%" stopColor="#6E5578" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Ambient halo lifting the body off the blush paper */}
      <ellipse
        cx="150"
        cy="150"
        rx="124"
        ry="144"
        fill={`url(#${prefix}-halo)`}
      />

      <g className={styles.bodyTilt}>
        {/* Tentacle chains — each strand waves in three lagging segments */}
        <g fill="none">
          {CHAINS.map((chain, strandIndex) => {
            const segments = buildChain(chain)
            const sweep = (path: number) =>
              (((strandIndex * 0.53 + path * 0.95 + phase) % 3.6) * -1).toFixed(
                2,
              )

            return (
              <g key={chain.x}>
                {segments.map((d, segIndex) => (
                  <path
                    key={segIndex}
                    className={
                      segIndex === 0
                        ? styles.chainSeg
                        : `${styles.chainSeg} ${
                            segIndex === 1 ? styles.seg2 : styles.seg3
                          }`
                    }
                    d={d}
                    stroke={`url(#${prefix}-tent)`}
                    strokeWidth={chain.width * ramp[segIndex]}
                    strokeOpacity={chain.opacity * fade[segIndex]}
                    strokeLinecap="round"
                    style={
                      {
                        '--sway-delay': `${sweep(segIndex)}s`,
                      } as CSSProperties
                    }
                  />
                ))}
              </g>
            )
          })}
        </g>

        {/* Ruffled oral arms — tucked under the dome */}
        <g fill={`url(#${prefix}-ribbon)`}>
          <path
            className={styles.ribA}
            opacity="0.38"
            d="M120 202C104 244 118 276 100 314C88 338 100 356 92 386C106 374 114 382 110 404C124 388 132 392 128 366C138 336 126 306 138 274C148 246 138 220 146 204Z"
          />
          <path
            className={styles.ribC}
            opacity="0.5"
            d="M144 204C140 240 152 264 146 296C142 320 152 338 148 362C140 352 134 358 138 378C126 366 124 348 130 330C138 304 128 282 138 254C144 234 140 216 144 204Z"
          />
          <path
            className={styles.ribB}
            opacity="0.4"
            d="M180 202C196 244 182 276 200 314C212 338 200 356 208 386C194 374 186 382 190 404C176 388 168 392 172 366C162 336 174 306 162 274C152 246 162 220 154 204Z"
          />
        </g>

        {/* Bell: outer glass, lagging mid layer, breathing champagne core */}
        <g className={styles.bell}>
          <path fill={`url(#${prefix}-bell)`} opacity="0.78" d={DOME_PATH} />

          <g className={styles.bellMid}>
            <path
              fill={`url(#${prefix}-bell-mid)`}
              opacity="0.6"
              d={DOME_PATH}
            />
            <g
              className={styles.pleats}
              fill="none"
              stroke="#FFFFFF"
              strokeOpacity="0.3"
              strokeWidth="1.3"
              strokeLinecap="round"
            >
              {PLEAT_PATHS.map((d) => (
                <path key={d} d={d} />
              ))}
            </g>
          </g>

          <g className={styles.coreGlow}>
            <ellipse
              cx="150"
              cy="120"
              rx="86"
              ry="80"
              fill={`url(#${prefix}-bath)`}
            />
            <ellipse
              cx="150"
              cy="116"
              rx="58"
              ry="54"
              fill={`url(#${prefix}-core)`}
              opacity="0.85"
            />
            <ellipse
              cx="150"
              cy="112"
              rx="31"
              ry="30"
              fill={`url(#${prefix}-core-hot)`}
              opacity="0.7"
            />
          </g>

          {/* Wide soft under-rim shade instead of a blur filter */}
          <path
            fill="none"
            stroke={`url(#${prefix}-shade)`}
            strokeWidth="7"
            strokeLinecap="round"
            opacity="0.55"
            d="M46 200C72 213 98 216 150 216C202 216 228 213 254 200"
          />

          {/* Pearlescent rim light */}
          <path
            fill="none"
            stroke={`url(#${prefix}-rim)`}
            strokeWidth="2.4"
            strokeLinecap="round"
            opacity="0.75"
            d="M34 166C36 104 82 44 144 34"
          />
          <path
            fill="none"
            stroke={`url(#${prefix}-rim)`}
            strokeWidth="1.9"
            strokeLinecap="round"
            opacity="0.5"
            d="M156 32C218 42 262 100 266 160"
          />
          {/* Faint echo on the scalloped underside */}
          <path
            fill="none"
            stroke="#FFFFFF"
            strokeOpacity="0.28"
            strokeWidth="1.5"
            strokeLinecap="round"
            d="M46 204Q60 213 76 206Q88 217 100 207Q112 219 124 208Q136 220 148 208Q160 221 172 209Q184 219 196 209Q208 219 220 208Q232 217 244 207Q254 214 260 202"
          />
        </g>

        {/* Surface sparkle — pearl dust on the bell */}
        {SPARKLES.map((sparkle) => (
          <circle
            key={`${sparkle.cx}-${sparkle.cy}`}
            className={styles.spark}
            cx={sparkle.cx}
            cy={sparkle.cy}
            r={sparkle.r}
            fill="#FFFDF6"
            opacity={sparkle.o}
            style={{ animationDelay: `${sparkle.delay}s` }}
          />
        ))}
        {STARLETS.map((starlet) => (
          <g
            key={`${starlet.x}-${starlet.y}`}
            transform={`translate(${starlet.x} ${starlet.y})`}
          >
            <path
              className={styles.spark}
              d={STARLET_PATH}
              fill="#FDF4DE"
              opacity={starlet.o}
              style={{ animationDelay: `${starlet.delay}s` }}
            />
          </g>
        ))}
      </g>
    </svg>
  )
}

/**
 * The hero artwork: two jellyfish spiralling around each other on the blush
 * field. The scroll story drives the braid on the rails, the pointer rig owns
 * parallax, and this component only adds the ambient swim from CSS.
 */
export default function JellyfishArt() {
  return (
    <div
      className={styles.stage}
      data-hero-artwork
      data-hero-tilt
      aria-hidden="true"
    >
      <div
        className={`${styles.jelly} ${styles.jellyLarge}`}
        data-depth="0.55"
      >
        <div className={styles.rail} data-jelly="a">
          <div className={styles.driftLarge}>
            <Jellyfish prefix="ja" phase={0} />
          </div>
        </div>
      </div>
      <div
        className={`${styles.jelly} ${styles.jellySmall}`}
        data-depth="0.82"
      >
        <div className={styles.rail} data-jelly="b">
          <div className={styles.driftSmall}>
            <Jellyfish prefix="jb" phase={2.2} />
          </div>
        </div>
      </div>
    </div>
  )
}
