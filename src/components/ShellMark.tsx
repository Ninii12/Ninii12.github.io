import styles from './ShellMark.module.css'

type ShellMarkProps = {
  /** Lets the header slot size the mark while the art stays fluid. */
  className?: string
}

/**
 * The shell monogram — an original Option-6 piece drawn entirely in
 * code: a five-lobed scallop fan in pearlescent pinks, five ribs, a
 * champagne-gold N set in the site's Fraunces, and a pearl nested in
 * the hinge. Transparent, badge-free, and ~5.5 kB inline — no asset
 * fetch in dev, preview or production.
 */
export default function ShellMark({ className }: ShellMarkProps) {
  const label = className ? ` ${className}` : ''

  return (
    <svg
      className={`${styles.mark}${label}`}
      viewBox="0 0 64 64"
      role="presentation"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        {/* Pearl-pink body, brightest upper-left like shell nacre. */}
        <radialGradient id="niniShellBody" cx="0.34" cy="0.26" r="0.95">
          <stop offset="0" stopColor="#fff7fa" />
          <stop offset="0.38" stopColor="#fbc3d8" />
          <stop offset="0.62" stopColor="#f4a9c9" />
          <stop offset="0.84" stopColor="#e78fb3" />
          <stop offset="1" stopColor="#c75c90" />
        </radialGradient>

        {/* Soft luminous lift behind the N — tonal, not a badge. */}
        <radialGradient id="niniHalo" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.85" />
          <stop offset="0.55" stopColor="#ffffff" stopOpacity="0.42" />
          <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>

        {/* Champagne gold: light crest, rich mid, deep engraved base. */}
        <linearGradient id="niniGold" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fff6d6" />
          <stop offset="0.3" stopColor="#f6dc9e" />
          <stop offset="0.55" stopColor="#e7bd6d" />
          <stop offset="0.78" stopColor="#cd9338" />
          <stop offset="1" stopColor="#96601e" />
        </linearGradient>

        {/* The pearl: ivory core with a blush undertone at the rim. */}
        <radialGradient id="niniPearl" cx="0.36" cy="0.3" r="0.85">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="0.5" stopColor="#fdf5ef" />
          <stop offset="0.82" stopColor="#f4dce4" />
          <stop offset="1" stopColor="#dcabc0" />
        </radialGradient>

        {/* Gloss crescent — fades along the shell's left shoulder. */}
        <linearGradient
          id="niniGloss"
          gradientUnits="userSpaceOnUse"
          x1="10"
          y1="34"
          x2="24"
          y2="8"
        >
          <stop offset="0" stopColor="#ffffff" stopOpacity="0" />
          <stop offset="0.55" stopColor="#ffffff" stopOpacity="0.7" />
          <stop offset="1" stopColor="#ffffff" stopOpacity="0.12" />
        </linearGradient>
      </defs>

      {/* The fan: five billows over the rim, flanks tapering to the hinge. */}
      <path
        d="M 7.13 39 C 7.04 38.58, 6.88 37.34, 6.61 36.45 C 6.34 35.56, 5.8 34.61, 5.51 33.64 C 5.22 32.67, 4.87 31.61, 4.86 30.66 C 4.86 29.71, 5.06 28.74, 5.48 27.93 C 5.9 27.12, 6.66 26.43, 7.36 25.82 C 8.07 25.21, 9 24.78, 9.71 24.25 C 10.42 23.72, 11.12 23.28, 11.61 22.63 C 12.1 21.98, 12.38 21.24, 12.64 20.37 C 12.9 19.5, 12.96 18.41, 13.19 17.43 C 13.42 16.45, 13.62 15.3, 14.05 14.47 C 14.48 13.64, 15.07 12.88, 15.77 12.42 C 16.47 11.96, 17.4 11.8, 18.27 11.73 C 19.14 11.66, 20.15 11.91, 21.01 11.97 C 21.88 12.03, 22.71 12.22, 23.46 12.09 C 24.21 11.96, 24.84 11.66, 25.5 11.2 C 26.16 10.73, 26.75 9.94, 27.43 9.3 C 28.11 8.66, 28.82 7.81, 29.58 7.35 C 30.34 6.89, 31.19 6.52, 32 6.52 C 32.81 6.52, 33.66 6.89, 34.42 7.35 C 35.18 7.81, 35.89 8.66, 36.57 9.3 C 37.25 9.94, 37.84 10.73, 38.5 11.2 C 39.16 11.66, 39.79 11.96, 40.54 12.09 C 41.29 12.22, 42.13 12.03, 42.99 11.97 C 43.86 11.91, 44.86 11.66, 45.73 11.73 C 46.6 11.8, 47.53 11.96, 48.23 12.42 C 48.93 12.88, 49.52 13.64, 49.95 14.47 C 50.38 15.3, 50.58 16.45, 50.81 17.43 C 51.05 18.41, 51.1 19.5, 51.36 20.37 C 51.62 21.24, 51.9 21.98, 52.39 22.63 C 52.88 23.28, 53.58 23.72, 54.29 24.25 C 55 24.78, 55.94 25.21, 56.64 25.82 C 57.34 26.43, 58.1 27.12, 58.52 27.93 C 58.94 28.74, 59.15 29.71, 59.14 30.66 C 59.13 31.61, 58.78 32.67, 58.49 33.64 C 58.2 34.61, 57.66 35.56, 57.39 36.45 C 57.12 37.34, 56.96 38.58, 56.87 39
           C 53.6 47.6, 44.6 54.6, 36.0 56.9
           C 34.6 57.4, 33.2 57.7, 32 57.8
           C 30.8 57.7, 29.4 57.4, 28.0 56.9
           C 19.4 54.6, 10.4 47.6, 7.13 39 Z"
        fill="url(#niniShellBody)"
        stroke="#a84d7c"
        strokeOpacity="0.5"
        strokeWidth="0.9"
      />

      {/* Nacre sheens: ivory on the upper-left, a rose blush low-right. */}
      <ellipse
        cx="21.6"
        cy="16.8"
        rx="4.4"
        ry="2.2"
        fill="#fffaf2"
        opacity="0.1"
        transform="rotate(-36 21.6 16.8)"
      />
      <ellipse
        cx="43.2"
        cy="37.6"
        rx="5.6"
        ry="2.8"
        fill="#df6f9b"
        opacity="0.12"
        transform="rotate(-30 43.2 37.6)"
      />

      {/* Five ribs fanning from the hinge to each rim billow. */}
      <g
        fill="none"
        stroke="#c05e8e"
        strokeOpacity="0.55"
        strokeWidth="1.25"
        strokeLinecap="round"
      >
        <path d="M 35.04 54.06 Q 45.79 43.5, 53.76 33.47" />
        <path d="M 33.88 52.23 Q 39.33 34.71, 45.45 20.35" />
        <path d="M 32 51.53 Q 32.85 31.97, 32 15.35" />
        <path d="M 30.12 52.23 Q 23.07 35.29, 18.55 20.35" />
        <path d="M 28.96 54.06 Q 19.47 42.36, 10.24 33.47" />
      </g>

      {/* Deep rose shadow tucked along the lower-right rim. */}
      <path
        d="M 53.4 45.4 C 52.6 51.0, 48.6 55.0, 41.6 56.9"
        fill="none"
        stroke="#b34e7e"
        strokeOpacity="0.24"
        strokeWidth="2.2"
        strokeLinecap="round"
      />

      {/* Gloss and rim light along the upper-left shoulder. */}
      <path
        d="M 11.1 28.33 C 11.42 27.66, 12.29 25.59, 13.03 24.33 C 13.77 23.07, 14.62 21.87, 15.54 20.78 C 16.46 19.69, 18.05 18.28, 18.55 17.78"
        fill="none"
        stroke="url(#niniGloss)"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path
        d="M 9.48 30.61 C 9.75 29.88, 10.46 27.65, 11.1 26.26 C 11.74 24.87, 12.5 23.53, 13.34 22.29 C 14.18 21.05, 15.69 19.41, 16.16 18.83"
        fill="none"
        stroke="#fffaf2"
        strokeOpacity="0.65"
        strokeWidth="1.2"
        strokeLinecap="round"
      />

      {/* Luminous lift, then the engraved champagne N over the fan's heart. */}
      <circle cx="32" cy="26.8" r="12.4" fill="url(#niniHalo)" opacity="0.45" />
      <text
        x="32.35"
        y="27.35"
        textAnchor="middle"
        dominantBaseline="central"
        fontSize="28"
        fontWeight="660"
        fill="#7a4212"
        opacity="0.3"
      >
        N
      </text>
      <text
        x="32"
        y="26.9"
        textAnchor="middle"
        dominantBaseline="central"
        fontSize="28"
        fontWeight="660"
        style={{
          fontFamily: 'var(--font-display)',
          fontVariationSettings: "'SOFT' 0, 'WONK' 0",
        }}
        fill="url(#niniGold)"
        stroke="#6b3f10"
        strokeWidth="0.65"
      >
        N
      </text>

      {/* The pearl: nested into the hinge cusp, grounded by a soft shadow. */}
      <ellipse cx="32" cy="60" rx="5.4" ry="1.25" fill="#152c44" opacity="0.15" />
      <circle cx="32" cy="52.8" r="5.8" fill="url(#niniPearl)" />
      <path
        d="M 35.33 57.55 A 5.8 5.8 0 0 1 28.67 57.55 L 29.59 56.24 A 4.2 4.2 0 0 0 34.41 56.24 Z"
        fill="#c98aa8"
        opacity="0.28"
      />
      <circle cx="30.4" cy="50.4" r="1.55" fill="#ffffff" opacity="0.95" />
      <circle cx="34.0" cy="54.2" r="0.95" fill="#ffffff" opacity="0.45" />
    </svg>
  )
}
