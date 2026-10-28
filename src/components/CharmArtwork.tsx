import styles from './CharmArtwork.module.css'

const spherePath =
  'M382 182 C498 181 602 256 624 370 C646 486 592 584 508 640 C426 694 322 690 242 640 C158 588 120 496 136 396 C154 288 242 198 342 185 C355 183 368 182 382 182 Z'

const shardA =
  'M-12 -42 L34 -56 L58 -12 L42 38 L-6 56 L-38 22 L-30 -22 Z'
const shardB =
  'M0 -58 L48 -20 L38 34 L-8 58 L-40 16 L-28 -30 Z'
const shardC =
  'M-34 -30 L28 -48 L44 12 L4 44 L-38 20 Z'
const shardD =
  'M0 -46 L38 -14 L26 38 L-20 50 L-34 4 Z'
const glassA =
  'M-44 -28 L26 -42 L44 8 L6 42 L-38 18 Z'

export default function CharmArtwork() {
  return (
    <div
      className={styles.artwork}
      data-hero-artwork
      data-hero-tilt
      aria-hidden="true"
    >
      <svg
        className={styles.svg}
        viewBox="0 0 760 860"
        role="presentation"
        focusable="false"
      >
        <defs>
          <radialGradient id="chromeHalo" cx="50%" cy="47%" r="54%">
            <stop offset="0%" className={styles.haloWhite} />
            <stop offset="52%" className={styles.haloRose} />
            <stop offset="100%" className={styles.haloClear} />
          </radialGradient>

          <radialGradient id="chromeBase" cx="31%" cy="23%" r="86%">
            <stop offset="0%" className={styles.baseWhite} />
            <stop offset="11%" className={styles.basePearl} />
            <stop offset="27%" className={styles.baseSilver} />
            <stop offset="45%" className={styles.baseGrey} />
            <stop offset="61%" className={styles.basePlum} />
            <stop offset="80%" className={styles.baseDeep} />
            <stop offset="100%" className={styles.baseBlack} />
          </radialGradient>

          <linearGradient
            id="plumReflection"
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop offset="0%" className={styles.plumClear} />
            <stop offset="22%" className={styles.plumSoft} />
            <stop offset="62%" className={styles.plumDeep} />
            <stop offset="100%" className={styles.plumBlack} />
          </linearGradient>

          <radialGradient id="softboxLight" cx="50%" cy="50%" r="50%">
            <stop offset="0%" className={styles.softWhite} />
            <stop offset="48%" className={styles.softMid} />
            <stop offset="100%" className={styles.softClear} />
          </radialGradient>

          <radialGradient id="roseReflection" cx="50%" cy="50%" r="50%">
            <stop offset="0%" className={styles.roseCore} />
            <stop offset="58%" className={styles.roseMid} />
            <stop offset="100%" className={styles.roseClear} />
          </radialGradient>

          <radialGradient id="hotReflection" cx="50%" cy="50%" r="50%">
            <stop offset="0%" className={styles.hotCore} />
            <stop offset="42%" className={styles.hotMid} />
            <stop offset="76%" className={styles.hotEdge} />
            <stop offset="100%" className={styles.hotClear} />
          </radialGradient>

          <linearGradient
            id="iceReflection"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" className={styles.iceBright} />
            <stop offset="38%" className={styles.iceMid} />
            <stop offset="100%" className={styles.iceClear} />
          </linearGradient>

          <linearGradient
            id="violetReflection"
            x1="4%"
            y1="0%"
            x2="96%"
            y2="100%"
          >
            <stop offset="0%" className={styles.violetClear} />
            <stop offset="34%" className={styles.violetMid} />
            <stop offset="68%" className={styles.violetBright} />
            <stop offset="100%" className={styles.violetClear} />
          </linearGradient>

          <linearGradient
            id="spectrumRim"
            x1="8%"
            y1="10%"
            x2="92%"
            y2="90%"
          >
            <stop offset="0%" className={styles.spectrumIce} />
            <stop offset="28%" className={styles.spectrumClear} />
            <stop offset="54%" className={styles.spectrumMagenta} />
            <stop offset="78%" className={styles.spectrumWhite} />
            <stop offset="100%" className={styles.spectrumViolet} />
          </linearGradient>

          <linearGradient
            id="sphereRim"
            x1="12%"
            y1="8%"
            x2="88%"
            y2="96%"
          >
            <stop offset="0%" className={styles.rimWhite} />
            <stop offset="34%" className={styles.rimClear} />
            <stop offset="72%" className={styles.rimRose} />
            <stop offset="100%" className={styles.rimWhite} />
          </linearGradient>

          <linearGradient
            id="shardChromeA"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" className={styles.shardWhite} />
            <stop offset="12%" className={styles.shardLight} />
            <stop offset="26%" className={styles.shardSilver} />
            <stop offset="40%" className={styles.shardGrey} />
            <stop offset="50%" className={styles.shardDeep} />
            <stop offset="58%" className={styles.shardWhite} />
            <stop offset="70%" className={styles.shardRose} />
            <stop offset="84%" className={styles.shardPlum} />
            <stop offset="100%" className={styles.shardSilver} />
          </linearGradient>

          <linearGradient
            id="shardChromeB"
            x1="8%"
            y1="100%"
            x2="92%"
            y2="0%"
          >
            <stop offset="0%" className={styles.shardDeep} />
            <stop offset="12%" className={styles.shardPlum} />
            <stop offset="28%" className={styles.shardSilver} />
            <stop offset="40%" className={styles.shardWhite} />
            <stop offset="52%" className={styles.shardGrey} />
            <stop offset="66%" className={styles.shardRose} />
            <stop offset="80%" className={styles.shardPearl} />
            <stop offset="100%" className={styles.shardWhite} />
          </linearGradient>

          <linearGradient
            id="shardChromeC"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" className={styles.shardPearl} />
            <stop offset="14%" className={styles.shardWhite} />
            <stop offset="30%" className={styles.shardSilver} />
            <stop offset="44%" className={styles.shardDeep} />
            <stop offset="54%" className={styles.shardWhite} />
            <stop offset="68%" className={styles.shardRose} />
            <stop offset="84%" className={styles.shardPlum} />
            <stop offset="100%" className={styles.shardSilver} />
          </linearGradient>

          <linearGradient
            id="shardSheen"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" className={styles.sheenWhite} />
            <stop offset="54%" className={styles.sheenMid} />
            <stop offset="100%" className={styles.sheenClear} />
          </linearGradient>

          <linearGradient
            id="shardEdge"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" className={styles.edgeWhite} />
            <stop offset="48%" className={styles.edgeRose} />
            <stop offset="100%" className={styles.edgeClear} />
          </linearGradient>

          <linearGradient
            id="glassFill"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" className={styles.glassWhite} />
            <stop offset="56%" className={styles.glassRose} />
            <stop offset="100%" className={styles.glassClear} />
          </linearGradient>

          <linearGradient
            id="glassStroke"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" className={styles.glassEdgeWhite} />
            <stop offset="54%" className={styles.glassEdgeRose} />
            <stop offset="100%" className={styles.glassEdgeClear} />
          </linearGradient>

          <linearGradient
            id="ringChrome"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" className={styles.ringWhite} />
            <stop offset="34%" className={styles.ringSilver} />
            <stop offset="62%" className={styles.ringPlum} />
            <stop offset="84%" className={styles.ringRose} />
            <stop offset="100%" className={styles.ringWhite} />
          </linearGradient>

          <linearGradient
            id="cursorChrome"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" className={styles.cursorWhite} />
            <stop offset="42%" className={styles.cursorSilver} />
            <stop offset="78%" className={styles.cursorGrey} />
            <stop offset="100%" className={styles.cursorPlum} />
          </linearGradient>

          <linearGradient
            id="playChrome"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" className={styles.playWhite} />
            <stop offset="38%" className={styles.playRose} />
            <stop offset="74%" className={styles.playSilver} />
            <stop offset="100%" className={styles.playPlum} />
          </linearGradient>

          <radialGradient id="contactFade" cx="50%" cy="50%" r="50%">
            <stop offset="0%" className={styles.contactDeep} />
            <stop offset="62%" className={styles.contactMid} />
            <stop offset="100%" className={styles.contactClear} />
          </radialGradient>

          <clipPath id="sphereClip">
            <path d={spherePath} />
          </clipPath>

          <filter
            id="contactBlur"
            x="-30%"
            y="-100%"
            width="160%"
            height="300%"
          >
            <feGaussianBlur stdDeviation="14" />
          </filter>

          <filter
            id="liquidWarp"
            x="-14%"
            y="-14%"
            width="128%"
            height="128%"
          >
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.006 0.012"
              numOctaves="2"
              seed="11"
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="9"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>

          <filter
            id="softBlur18"
            x="-60%"
            y="-60%"
            width="220%"
            height="220%"
          >
            <feGaussianBlur stdDeviation="18" />
          </filter>

          <filter
            id="softBlur8"
            x="-40%"
            y="-40%"
            width="180%"
            height="180%"
          >
            <feGaussianBlur stdDeviation="8" />
          </filter>

          <filter
            id="softBlur4"
            x="-40%"
            y="-40%"
            width="180%"
            height="180%"
          >
            <feGaussianBlur stdDeviation="4" />
          </filter>

          <filter
            id="softBlur2"
            x="-40%"
            y="-40%"
            width="180%"
            height="180%"
          >
            <feGaussianBlur stdDeviation="2" />
          </filter>

          <filter
            id="shardShadow"
            x="-50%"
            y="-50%"
            width="200%"
            height="220%"
          >
            <feDropShadow
              dx="0"
              dy="14"
              stdDeviation="12"
              className={styles.shadow}
            />
          </filter>

          <filter
            id="glassShadow"
            x="-50%"
            y="-50%"
            width="200%"
            height="220%"
          >
            <feDropShadow
              dx="0"
              dy="10"
              stdDeviation="10"
              className={styles.glassShadow}
            />
          </filter>
        </defs>

        <ellipse
          cx="382"
          cy="430"
          rx="336"
          ry="348"
          fill="url(#chromeHalo)"
        />

        <ellipse
          cx="382"
          cy="704"
          rx="190"
          ry="28"
          fill="url(#contactFade)"
          filter="url(#contactBlur)"
          opacity="0.82"
        />

        <g>
          <ellipse
            data-art="orbit"
            cx="384"
            cy="430"
            rx="314"
            ry="224"
            transform="rotate(-17 384 430)"
            fill="none"
            stroke="url(#ringChrome)"
            strokeWidth="1"
            strokeDasharray="1 8"
            opacity="0.34"
          />

          <g data-art="detail" data-depth="0.22">
            <g
              className={styles.secondary}
              transform="translate(188 300) rotate(-15)"
            >
              <rect
                x="-68"
                y="-90"
                width="136"
                height="180"
                rx="34"
                fill="url(#glassFill)"
                stroke="url(#glassStroke)"
                strokeWidth="1.1"
                opacity="0.68"
              />
              <circle
                cx="0"
                cy="0"
                r="30"
                fill="none"
                stroke="url(#ringChrome)"
                strokeWidth="1"
                opacity="0.75"
              />
              <circle
                cx="36"
                cy="-48"
                r="3.2"
                fill="var(--white)"
                opacity="0.72"
              />
            </g>
          </g>

          <g data-art="shard" data-depth="0.36">
            <g
              className={styles.secondary}
              transform="translate(508 166) rotate(18) scale(0.72)"
              filter="url(#shardShadow)"
              opacity="0.68"
            >
              <path
                d={shardB}
                fill="url(#shardChromeB)"
                stroke="url(#shardEdge)"
                strokeWidth="1"
              />
              <path
                d="M0 -58 L48 -20 L10 10 L-28 -30 Z"
                fill="url(#shardSheen)"
                opacity="0.66"
              />
            </g>
          </g>

          <g data-art="shard" data-depth="0.3">
            <g
              className={styles.secondary}
              transform="translate(132 552) rotate(-38) scale(0.52)"
              filter="url(#shardShadow)"
              opacity="0.6"
            >
              <path
                d={shardC}
                fill="url(#shardChromeC)"
                stroke="url(#shardEdge)"
                strokeWidth="1"
              />
              <path
                d="M-34 -30 L28 -48 L10 8 L-26 4 Z"
                fill="url(#shardSheen)"
                opacity="0.56"
              />
            </g>
          </g>
        </g>

        <g data-art="sphere" data-depth="0.28">
          <path d={spherePath} fill="url(#chromeBase)" />

          <g clipPath="url(#sphereClip)">
            <g filter="url(#liquidWarp)">
              <path
                d="M108 508 C184 464 250 512 324 494 C402 476 446 434 510 450 C566 464 608 496 656 464 L656 720 L108 720 Z"
                fill="var(--plum-950)"
                opacity="0.66"
                filter="url(#softBlur2)"
              />
              <path
                d="M108 508 C184 464 250 512 324 494 C402 476 446 434 510 450 C566 464 608 496 656 464 L656 720 L108 720 Z"
                fill="url(#plumReflection)"
                opacity="0.34"
              />
              <path
                d="M108 498 C184 454 250 502 324 484 C402 466 446 424 510 440 C566 454 608 486 656 454"
                fill="none"
                stroke="var(--white)"
                strokeWidth="5"
                opacity="0.34"
                filter="url(#softBlur4)"
              />
              <path
                d="M108 497 C184 454 250 502 324 484 C402 466 446 424 510 440 C566 454 608 486 656 454"
                fill="none"
                stroke="var(--white)"
                strokeWidth="1.6"
                opacity="0.96"
              />
              <path
                d="M156 636 C280 692 486 686 610 604"
                fill="none"
                stroke="var(--chrome-300)"
                strokeWidth="22"
                opacity="0.34"
                filter="url(#softBlur8)"
              />
              <path
                d="M176 650 C296 698 472 691 590 618"
                fill="none"
                stroke="var(--white)"
                strokeWidth="2"
                opacity="0.54"
                filter="url(#softBlur2)"
              />
              <ellipse
                cx="506"
                cy="390"
                rx="52"
                ry="140"
                transform="rotate(17 506 390)"
                fill="url(#roseReflection)"
                opacity="0.92"
                filter="url(#softBlur18)"
              />
              <path
                d="M472 236 C534 302 558 386 548 470 C540 534 514 590 472 626 C522 566 534 496 526 424 C518 348 492 288 472 236 Z"
                fill="var(--plum-950)"
                opacity="0.18"
                filter="url(#softBlur8)"
              />
            </g>

            <g
              className={styles.screen}
              data-hero-reflection
              data-depth="0.46"
            >
              <ellipse
                cx="488"
                cy="372"
                rx="212"
                ry="286"
                transform="rotate(21 488 372)"
                fill="url(#hotReflection)"
                opacity="0.7"
              />
              <path
                d="M112 402 C218 306 326 248 472 218 L560 286 C390 326 262 414 176 546 Z"
                fill="url(#iceReflection)"
                opacity="0.32"
              />
              <path
                d="M118 578 C244 650 424 654 572 564 L632 636 C462 746 224 722 104 626 Z"
                fill="url(#violetReflection)"
                opacity="0.42"
              />
              <path
                d="M146 482 C238 434 338 468 438 430 C512 402 558 360 614 372"
                fill="none"
                stroke="url(#spectrumRim)"
                strokeWidth="2.4"
                opacity="0.7"
              />
            </g>

            <g
              className={styles.screen}
              data-hero-reflection
              data-depth="0.7"
            >
              <ellipse
                cx="438"
                cy="304"
                rx="18"
                ry="126"
                transform="rotate(29 438 304)"
                fill="url(#iceReflection)"
                opacity="0.7"
              />
              <ellipse
                cx="540"
                cy="438"
                rx="11"
                ry="104"
                transform="rotate(18 540 438)"
                fill="url(#roseReflection)"
                opacity="0.72"
              />
            </g>

            <g
              className={styles.screen}
              data-hero-reflection
              data-depth="0.78"
            >
              <path
                d="M208 344 L298 220 L346 232 L254 374 Z"
                fill="var(--metal-white)"
                opacity="0.12"
              />
              <path
                d="M352 226 C388 244 406 268 420 298 L388 318 L340 252 Z"
                fill="url(#iceReflection)"
                opacity="0.44"
              />
              <path
                d="M178 332 L224 318 L196 398 L154 414 Z"
                fill="var(--metal-white)"
                opacity="0.14"
              />
              <path
                d="M194 340 L332 224"
                fill="none"
                stroke="var(--metal-white)"
                strokeWidth="1.6"
                opacity="0.36"
              />
              <path
                d="M210 570 C300 612 414 614 508 572"
                fill="none"
                stroke="url(#spectrumRim)"
                strokeWidth="1.4"
                opacity="0.56"
              />
            </g>

            <ellipse
              cx="300"
              cy="300"
              rx="82"
              ry="148"
              transform="rotate(-28 300 300)"
              fill="url(#softboxLight)"
              opacity="0.94"
              filter="url(#softBlur18)"
            />

            <ellipse
              cx="283"
              cy="288"
              rx="32"
              ry="11"
              transform="rotate(-34 283 288)"
              fill="var(--white)"
              opacity="0.94"
              filter="url(#softBlur2)"
            />

            <ellipse
              cx="236"
              cy="374"
              rx="10"
              ry="62"
              transform="rotate(-36 236 374)"
              fill="var(--white)"
              opacity="0.42"
              filter="url(#softBlur4)"
            />

            <path
              d="M166 468 C172 354 244 246 366 194"
              fill="none"
              stroke="var(--white)"
              strokeWidth="1.4"
              opacity="0.42"
              filter="url(#softBlur2)"
            />

            <ellipse
              cx="438"
              cy="256"
              rx="12"
              ry="34"
              transform="rotate(36 438 256)"
              fill="var(--white)"
              opacity="0.4"
              filter="url(#softBlur4)"
            />

            <path
              d="M212 392 C296 356 364 376 444 336"
              fill="none"
              stroke="var(--white)"
              strokeWidth="1.6"
              opacity="0.48"
              filter="url(#softBlur2)"
            />

            <path
              d="M240 592 C326 640 442 638 536 584"
              fill="none"
              stroke="var(--rosewater-100)"
              strokeWidth="2"
              opacity="0.28"
              filter="url(#softBlur4)"
            />

            <path
              d="M466 248 C522 304 548 372 544 444"
              fill="none"
              stroke="var(--plum-700)"
              strokeWidth="8"
              opacity="0.16"
              filter="url(#softBlur8)"
            />

            <path
              d={spherePath}
              fill="none"
              stroke="var(--plum-950)"
              strokeWidth="20"
              strokeOpacity="0.28"
              filter="url(#softBlur8)"
            />
          </g>

          <path
            d={spherePath}
            fill="none"
            stroke="url(#sphereRim)"
            strokeWidth="1.8"
          />
          <path
            className={styles.screen}
            data-hero-reflection
            data-depth="0.54"
            d={spherePath}
            fill="none"
            stroke="url(#spectrumRim)"
            strokeWidth="2.2"
            opacity="0.58"
          />
          <path
            d="M156 424 C162 312 240 218 360 186"
            fill="none"
            stroke="var(--metal-white)"
            strokeWidth="2.1"
            opacity="0.78"
          />
          <path
            d="M180 582 C252 648 350 680 458 676"
            fill="none"
            stroke="url(#spectrumRim)"
            strokeWidth="2.4"
            opacity="0.7"
          />
          <circle
            cx="168"
            cy="402"
            r="3.2"
            fill="var(--metal-white)"
            opacity="0.9"
          />
          <path
            d={spherePath}
            fill="none"
            stroke="var(--plum-950)"
            strokeWidth="0.8"
            opacity="0.16"
          />
        </g>

        <g>
          <path
            data-art="orbit"
            d="M148 570 C238 676 410 728 566 654"
            fill="none"
            stroke="url(#ringChrome)"
            strokeWidth="1.1"
            strokeDasharray="1 9"
            opacity="0.38"
          />

          <g data-art="shard" data-depth="1">
            <g
              transform="translate(586 626) rotate(-12) scale(0.92)"
              filter="url(#shardShadow)"
            >
              <path
                d={shardA}
                fill="url(#shardChromeA)"
                stroke="url(#shardEdge)"
                strokeWidth="1"
              />
              <path
                d="M-12 -42 L34 -56 L18 2 L-30 -22 Z"
                fill="url(#shardSheen)"
                opacity="0.72"
              />
              <path
                d="M-38 22 L-6 56 L8 10 Z"
                fill="var(--plum-950)"
                opacity="0.32"
              />
            </g>
          </g>

          <g data-art="shard" data-depth="0.82">
            <g
              transform="translate(208 250) rotate(-26) scale(0.72)"
              filter="url(#shardShadow)"
            >
              <path
                d={shardB}
                fill="url(#shardChromeB)"
                stroke="url(#shardEdge)"
                strokeWidth="1"
              />
              <path
                d="M0 -58 L48 -20 L12 8 L-28 -30 Z"
                fill="url(#shardSheen)"
                opacity="0.7"
              />
              <path
                d="M0 -58 L-28 -30 L-8 58 Z"
                fill="var(--plum-950)"
                opacity="0.22"
              />
            </g>
          </g>

          <g data-art="play" data-depth="0.72">
            <g
              transform="translate(654 486) rotate(9) scale(0.95)"
              filter="url(#glassShadow)"
            >
              <path
                d="M-58 -30 L30 -52 L58 8 L12 46 L-46 20 Z"
                fill="url(#glassFill)"
                stroke="url(#glassStroke)"
                strokeWidth="1.2"
              />
              <path
                d="M-15 -18 L27 0 L-15 18 Z"
                fill="url(#playChrome)"
                stroke="var(--white)"
                strokeOpacity="0.7"
                strokeWidth="0.8"
              />
              <path
                d="M-48 -22 L22 -40 L8 0 L-36 12 Z"
                fill="var(--white)"
                opacity="0.12"
              />
            </g>
          </g>

          <g data-art="shard" data-depth="0.58">
            <g
              transform="translate(318 724) rotate(14) scale(0.4)"
              filter="url(#shardShadow)"
            >
              <path
                d={shardD}
                fill="url(#shardChromeA)"
                stroke="url(#shardEdge)"
                strokeWidth="1"
              />
              <path
                d="M0 -46 L38 -14 L12 8 L-20 4 Z"
                fill="url(#shardSheen)"
                opacity="0.64"
              />
            </g>
          </g>

          <g data-art="glass" data-depth="0.62">
            <g
              transform="translate(170 536) rotate(-14) scale(0.78)"
              filter="url(#glassShadow)"
            >
              <path
                d={glassA}
                fill="url(#glassFill)"
                stroke="url(#glassStroke)"
                strokeWidth="1.1"
              />
              <path
                d="M-40 -22 L17 -35 L7 18 L-28 12 Z"
                fill="var(--white)"
                opacity="0.12"
              />
            </g>
          </g>

          <g data-art="reticle" data-depth="0.5">
            <g
              transform="translate(610 272) rotate(-8)"
              opacity="0.84"
            >
              <circle
                r="76"
                fill="none"
                stroke="url(#ringChrome)"
                strokeWidth="1.2"
                strokeDasharray="2 8"
              />
              <circle
                r="34"
                fill="none"
                stroke="url(#ringChrome)"
                strokeWidth="0.9"
                opacity="0.62"
              />
              <path
                d="M-86 0h12M74 0h12M0 -86v12M0 74v12"
                stroke="url(#ringChrome)"
                strokeWidth="1.2"
              />
              <path
                d="M0 0 L0 27 L8 20 L14 31 L19 28 L13 17 L23 15 Z"
                transform="translate(62 -50)"
                fill="url(#cursorChrome)"
                stroke="var(--white)"
                strokeOpacity="0.62"
                strokeWidth="0.8"
              />
            </g>
          </g>

          <g data-art="detail" data-depth="0.35">
            <g
              className={styles.secondary}
              transform="translate(122 648)"
              opacity="0.5"
            >
              <path
                d="M0 0 L54 28 L30 70"
                fill="none"
                stroke="url(#ringChrome)"
                strokeWidth="0.8"
              />
              <path
                d="M0 0 L30 70"
                fill="none"
                stroke="url(#ringChrome)"
                strokeWidth="0.8"
                opacity="0.5"
              />
              <rect
                x="-5"
                y="-5"
                width="10"
                height="10"
                transform="rotate(45)"
                fill="url(#cursorChrome)"
              />
              <rect
                x="-5"
                y="-5"
                width="10"
                height="10"
                transform="translate(54 28) rotate(45)"
                fill="url(#cursorChrome)"
              />
              <rect
                x="-5"
                y="-5"
                width="10"
                height="10"
                transform="translate(30 70) rotate(45)"
                fill="url(#cursorChrome)"
              />
            </g>
          </g>

          <g data-art="annotation" data-depth="0.22">
            <text
              className={`${styles.microLabel} ${styles.secondary}`}
              x="528"
              y="158"
              textAnchor="middle"
              transform="rotate(-5 528 158)"
            >
              SIGNAL / 01
            </text>
          </g>
        </g>
      </svg>
    </div>
  )
}
