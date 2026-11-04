import { useLayoutEffect, type RefObject } from 'react'
import type { ScrollSceneTools } from '../lib/scroll'
import {
  compactMotionQuery,
  createMediaScene,
  desktopMotionQuery,
} from '../lib/scroll'

type OrbitProfile = {
  /** Revolutions each jelly completes across the hero scroll range. */
  turns: number
  /** Orbit radius, fitted to the stage box: r = min(radiusW·W, radiusH·H). */
  radiusW: number
  radiusH: number
  /** Gentle bell lean toward the direction of travel, in radians. */
  lean: number
  /** Vertical bob amplitude, in percent of each figure's own height. */
  bob: number
}

const DESKTOP_ORBIT: OrbitProfile = {
  turns: 1.5,
  radiusW: 0.34,
  radiusH: 0.42,
  lean: 0.36,
  bob: 1.3,
}

const COMPACT_ORBIT: OrbitProfile = {
  turns: 1,
  radiusW: 0.4,
  radiusH: 0.42,
  lean: 0.36,
  bob: 1.5,
}

/**
 * The bell's centre sits just under a third of the way down the figure, so
 * centring the whole box on the shared circle would swing the bells on
 * smaller private circles. This offset — the gap between a bell centre and
 * its box centre — lets the driver park the *bell* itself on the track.
 */
const BELL_DROP = 0.1875

/**
 * Opening angles: A starts upper-left, B lower-right — diametrically
 * opposite on the shared circle, like the bound pair of the Pisces glyph.
 */
const ANGLE_A = -2.7925 // ~-160°
const ANGLE_B = 0.3491 // ~+20°

/**
 * Drives the two jellyfish around one shared circular track as the hero
 * scrolls — a Pisces-style pair: A circles clockwise, B counter-clockwise,
 * half a turn apart, so their angles close twice per revolution and they
 * meet, cross, and part again — two fish chasing each other's wake.
 *
 * The track spans most of the stage, so the bells genuinely travel across
 * the X/Y plane, while each body only leans a few degrees toward its
 * direction of travel — a circular dance, never a spin. Scale stays constant
 * because size changes masquerade as depth; the scrub stays smoothed for
 * fast and slow scrolling alike; and the depth swap only fires where the two
 * figures actually overlap — at the crossings, where they are superimposed,
 * and opposite each other, where they are apart — so the leader alternates
 * on every pass without a visible jump.
 */
function attachJellyOrbit(
  { gsap, ScrollTrigger }: ScrollSceneTools,
  trigger: Element,
  railA: Element | null,
  railB: Element | null,
  profile: OrbitProfile,
) {
  if (!railA || !railB) return

  const jellyA = railA.parentElement
  const jellyB = railB.parentElement
  if (
    !(jellyA instanceof HTMLElement) ||
    !(jellyB instanceof HTMLElement) ||
    jellyA.offsetParent !== jellyB.offsetParent ||
    !(jellyA.offsetParent instanceof HTMLElement)
  ) {
    return
  }

  // Layout boxes only: offset* values ignore every transform, so the
  // geometry stays exact while orbits, parallax and tilt run on top of it.
  const stage = jellyA.offsetParent

  const setter = (rail: Element, property: string) =>
    gsap.quickSetter(rail, property) as (value: number) => void

  // The figures keep a constant size: depth reads from real position and
  // overlap order, never from scale cues.
  const poseAx = setter(railA, 'xPercent')
  const poseAy = setter(railA, 'yPercent')
  const poseAr = setter(railA, 'rotation')

  const poseBx = setter(railB, 'xPercent')
  const poseBy = setter(railB, 'yPercent')
  const poseBr = setter(railB, 'rotation')

  type Box = { x: number; y: number; w: number; h: number }

  const box = (jelly: HTMLElement): Box => ({
    x: jelly.offsetLeft + jelly.offsetWidth / 2,
    y: jelly.offsetTop + jelly.offsetHeight / 2,
    w: jelly.offsetWidth,
    h: jelly.offsetHeight,
  })

  let geometry = {
    radius: Math.min(
      stage.offsetWidth * profile.radiusW,
      stage.offsetHeight * profile.radiusH,
    ),
    // Slightly below centre: leaves the bell apexes headroom at the top of
    // the circle while the long tails still clear the archive row.
    cx: stage.offsetWidth / 2,
    cy: stage.offsetHeight * 0.56,
    a: box(jellyA),
    b: box(jellyB),
  }

  let frontIsA = true

  const settleDepth = (front: boolean) => {
    jellyA.style.zIndex = front ? '2' : '1'
    jellyB.style.zIndex = front ? '1' : '2'
  }

  const pose = (p: number) => {
    const { radius, cx, cy, a, b } = geometry
    const TAU = Math.PI * 2

    // Jelly A circles clockwise, B counter-clockwise, half a turn apart.
    // The radius is constant from the first frame — the circle is the point.
    const uA = ANGLE_A + TAU * profile.turns * p
    const uB = ANGLE_B - TAU * profile.turns * p

    const setJelly = (
      u: number,
      sign: number,
      figure: Box,
      poseX: (value: number) => void,
      poseY: (value: number) => void,
      poseR: (value: number) => void,
      seed: number,
    ) => {
      // Position: real X/Y travel — the bell centre rides the shared circle.
      const px = cx + Math.cos(u) * radius
      const py = cy + Math.sin(u) * radius + BELL_DROP * figure.h
      poseX(((px - figure.x) / figure.w) * 100)
      poseY(
        ((py - figure.y) / figure.h) * 100 +
          profile.bob * Math.sin(u * 2.2 + seed * 1.7),
      )

      // Gentle lean: the bell tips toward its direction of travel — a
      // fraction of the way, never a spin — so the figures steer with the
      // circle while the tentacle chains trail behind the movement.
      const lean =
        profile.lean *
          (-Math.sin(u) * sign + (Math.cos(u) * sign) * 0.25) +
        0.05 * Math.sin(u * 2 + seed)
      poseR((lean * 180) / Math.PI)
    }

    setJelly(uA, 1, a, poseAx, poseAy, poseAr, 1.1)
    setJelly(uB, -1, b, poseBx, poseBy, poseBr, 2.9)

    // Depth swap: flips exactly where the figures overlap — at the
    // crossings, when they are superimposed, and opposite each other, when
    // they are far apart — so the leader alternates on every pass invisibly.
    const lap = (((uA - uB) % TAU) + TAU) % TAU
    const wantFrontA = lap >= Math.PI
    if (wantFrontA !== frontIsA) {
      frontIsA = wantFrontA
      settleDepth(wantFrontA)
    }
  }

  const orbitTrigger = ScrollTrigger.create({
    trigger,
    start: 'top top',
    end: 'bottom bottom',
    scrub: 1.1,
    onUpdate: (self) => pose(self.progress),
    onRefresh: (self) => {
      geometry = {
        radius: Math.min(
          stage.offsetWidth * profile.radiusW,
          stage.offsetHeight * profile.radiusH,
        ),
        cx: stage.offsetWidth / 2,
        cy: stage.offsetHeight * 0.56,
        a: box(jellyA),
        b: box(jellyB),
      }
      pose(self.progress)
    },
  })

  // Match the render to the actual scroll position immediately, so there is
  // never a visible jump between load, entrance and the first scroll pose.
  pose(orbitTrigger.progress)
}

/**
 * Coordinates the desktop hero-to-Work scroll story and the compact,
 * unpinned version used by phones and short viewports.
 *
 * The page is never captured: scrolling stays native and each timeline uses
 * ScrollTrigger's exact progress. The only input-derived effects are a small
 * decorative pink flake and the jellyfish shared-circle orbit on its own
 * scoped trigger; none of it changes scroll position.
 */
export function useHomeScrollStory(scopeRef: RefObject<HTMLElement | null>) {
  useLayoutEffect(() => {
    const scope = scopeRef.current
    if (!scope) return

    const cleanupDesktop = createMediaScene(
      scope,
      desktopMotionQuery,
      ({ gsap, ScrollTrigger }) => {
        const root = document.documentElement
        const sequence = scope.querySelector('[data-hero-sequence]')
        const copy = scope.querySelector('[data-hero-copy]')
        const kicker = scope.querySelector('[data-hero-kicker]')
        const name = scope.querySelector('[data-hero-name]')
        const role = scope.querySelector('[data-hero-role]')
        const identity = scope.querySelector('[data-hero-identity]')
        const title = scope.querySelector('[data-hero-title]')
        const lineStrategy = scope.querySelector('[data-hero-line="strategy"]')
        const lineAside = scope.querySelector('[data-hero-line="aside"]')
        const lineCreative = scope.querySelector('[data-hero-line="creative"]')
        const lineEdge = scope.querySelector('[data-hero-line="edge"]')
        const star = scope.querySelector('[data-hero-star]')
        const intro = scope.querySelector('[data-hero-intro]')
        const actions = scope.querySelector('[data-hero-actions]')
        const art = scope.querySelector('[data-art-stage]')
        const artScroll = scope.querySelector('[data-hero-art-scroll]')
        const railA = scope.querySelector('[data-jelly="a"]')
        const railB = scope.querySelector('[data-jelly="b"]')
        const caption = scope.querySelector('[data-hero-caption]') ?? []
        const archive = scope.querySelector('[data-hero-archive]')
        const scrollCue = scope.querySelector('[data-hero-scroll-cue]') ?? []
        const grid = scope.querySelector('[data-hero-grid]')
        const watermark = scope.querySelector('[data-hero-watermark]') ?? []
        const horizon = scope.querySelector('[data-hero-horizon]')
        const horizonLine = scope.querySelector('[data-hero-horizon-line]')
        const thresholdLine = scope.querySelector('[data-work-line]')
        const flare = scope.querySelector<HTMLElement>('[data-work-flare]')

        if (!sequence || !horizon || !horizonLine) return

        root.dataset.heroMotion = 'active'

        gsap.set(horizon, { opacity: 0, yPercent: 12 })
        gsap.set(horizonLine, { scaleX: 0.18, transformOrigin: '50% 50%' })
        gsap.set(thresholdLine, {
          scaleX: 0.32,
          transformOrigin: '50% 50%',
        })
        gsap.set(flare, { opacity: 0, xPercent: 0 })

        attachJellyOrbit(
          { gsap, ScrollTrigger },
          sequence,
          railA,
          railB,
          DESKTOP_ORBIT,
        )

        let settleTimer = 0
        const flareX = gsap.quickTo(flare, 'xPercent', {
          duration: 0.5,
          ease: 'power3.out',
        })
        const flareOpacity = gsap.quickTo(flare, 'opacity', {
          duration: 0.35,
          ease: 'power2.out',
        })

        const resetFlare = () => {
          flareOpacity(0)
          flareX(0)
        }

        const story = gsap.timeline({
          defaults: { ease: 'none' },
          scrollTrigger: {
            trigger: sequence,
            start: 'top top',
            end: 'bottom bottom',
            scrub: true,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              const velocity = gsap.utils.clamp(
                -1,
                1,
                self.getVelocity() / 2400,
              )

              flareX(velocity * 16)
              flareOpacity(Math.min(0.7, Math.abs(velocity) * 1.15))

              window.clearTimeout(settleTimer)
              settleTimer = window.setTimeout(resetFlare, 160)
            },
          },
        })

        story
          .addLabel('depart', 0)
          .to(kicker, { y: -22, opacity: 0, duration: 0.14 }, 0.01)
          .to(scrollCue, { y: 10, opacity: 0, duration: 0.1 }, 0)
          .to(archive, { y: 20, opacity: 0, duration: 0.16 }, 0.02)
          .to(caption, { y: 10, opacity: 0, duration: 0.18 }, 0.08)
          .to(name, { y: -38, opacity: 0, duration: 0.22 }, 0.08)
          .to(role, { y: -18, opacity: 0, duration: 0.18 }, 0.1)
          .to(grid, { yPercent: -6, opacity: 0, duration: 0.8 }, 0.02)
          .to(watermark, { yPercent: -8, opacity: 0.06, duration: 0.8 }, 0.02)
          .to(copy, {
            y: -16,
            scale: 0.98,
            transformOrigin: '0% 50%',
            duration: 0.7,
          }, 0.04)
          .to(art, {
            xPercent: -9,
            yPercent: -2,
            scale: 1.04,
            duration: 0.34,
          }, 0.05)
          .to(artScroll, { rotate: -2.4, duration: 0.34 }, 0.05)
          .to(lineStrategy, {
            x: -22,
            rotate: -0.25,
            duration: 0.4,
          }, 0.12)
          .to(lineAside, { x: 16, duration: 0.4 }, 0.12)
          .to(lineCreative, { x: -14, duration: 0.4 }, 0.12)
          .to(lineEdge, {
            x: -20,
            rotate: -0.3,
            duration: 0.4,
          }, 0.12)
          .to(intro, { y: -28, opacity: 0, duration: 0.2 }, 0.2)
          .to(actions, { y: -22, opacity: 0, duration: 0.18 }, 0.24)
          .to(star, { rotate: 90, opacity: 0, duration: 0.3 }, 0.44)

          .addLabel('transform', 0.1)
          .to(art, {
            xPercent: -26,
            yPercent: 8,
            scale: 1.2,
            duration: 0.3,
          }, 0.44)
          .to(artScroll, { rotate: 9, duration: 0.3 }, 0.44)
          .to(title, {
            x: -8,
            scale: 0.96,
            transformOrigin: '0% 50%',
            duration: 0.55,
          }, 0.38)
          .to(lineAside, { opacity: 0, duration: 0.28 }, 0.52)
          .to(lineStrategy, {
            x: -32,
            opacity: 0,
            duration: 0.34,
          }, 0.54)
          .to(lineCreative, {
            x: -22,
            opacity: 0,
            duration: 0.34,
          }, 0.56)
          .to(lineEdge, {
            x: -34,
            rotate: -0.5,
            opacity: 0,
            duration: 0.32,
          }, 0.54)
          .to(identity, { opacity: 0, duration: 0.2 }, 0.46)

          .addLabel('apex', 0.44)
          .to(horizon, {
            opacity: 1,
            yPercent: 0,
            duration: 0.22,
          }, 0.4)
          .to(horizonLine, { scaleX: 1, duration: 0.24 }, 0.42)
          .to(copy, { opacity: 0, duration: 0.16 }, 0.84)

          .addLabel('handoff', 0.67)
          .to(art, {
            xPercent: -26,
            yPercent: 34,
            scale: 1.1,
            duration: 0.33,
          }, 0.67)
          .to(artScroll, { rotate: 17, duration: 0.33 }, 0.67)
          .to(horizon, { y: '-40svh', duration: 0.33 }, 0.67)
          .to(thresholdLine, { scaleX: 1, duration: 0.22 }, 0.67)

        const refreshFrame = window.requestAnimationFrame(() => {
          ScrollTrigger.refresh()
        })

        return () => {
          window.clearTimeout(settleTimer)
          window.cancelAnimationFrame(refreshFrame)
          delete root.dataset.heroMotion
          window.requestAnimationFrame(() => ScrollTrigger.refresh())
        }
      },
    )

    const cleanupCompact = createMediaScene(
      scope,
      compactMotionQuery,
      ({ gsap, ScrollTrigger }) => {
        const hero = scope.querySelector('[data-hero-root]')
        const copy = scope.querySelector('[data-hero-copy]')
        const art = scope.querySelector('[data-art-stage]')
        const artScroll = scope.querySelector('[data-hero-art-scroll]')
        const railA = scope.querySelector('[data-jelly="a"]')
        const railB = scope.querySelector('[data-jelly="b"]')
        const grid = scope.querySelector('[data-hero-grid]')
        const watermark = scope.querySelector('[data-hero-watermark]') ?? []

        if (!hero) return

        attachJellyOrbit(
          { gsap, ScrollTrigger },
          hero,
          railA,
          railB,
          COMPACT_ORBIT,
        )

        const compact = gsap.timeline({
          defaults: { ease: 'none' },
          scrollTrigger: {
            trigger: hero,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
            invalidateOnRefresh: true,
          },
        })

        compact
          .to(copy, { y: -12, duration: 1 }, 0)
          .to(art, { y: 24, scale: 1.025, duration: 1 }, 0)
          .to(artScroll, { rotate: 1.6, duration: 1 }, 0)
          .to(grid, { yPercent: -4, opacity: 0, duration: 1 }, 0)
          .to(watermark, { yPercent: -5, opacity: 0.06, duration: 1 }, 0)

        const refreshFrame = window.requestAnimationFrame(() => {
          ScrollTrigger.refresh()
        })

        return () => {
          window.cancelAnimationFrame(refreshFrame)
          window.requestAnimationFrame(() => ScrollTrigger.refresh())
        }
      },
    )

    return () => {
      cleanupCompact()
      cleanupDesktop()
    }
  }, [scopeRef])
}
