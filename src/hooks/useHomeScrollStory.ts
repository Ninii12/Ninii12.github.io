import { useLayoutEffect, type RefObject } from 'react'
import {
  compactMotionQuery,
  createMediaScene,
  desktopMotionQuery,
} from '../lib/scroll'

/**
 * Coordinates the desktop hero-to-Work scroll story and the compact,
 * unpinned version used by phones and short viewports.
 *
 * The page is never captured: scrolling stays native and each timeline uses
 * ScrollTrigger's exact `scrub: true` progress. The only input-derived effect
 * is a small decorative pink registration mark; it never changes scroll
 * position.
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
        const caption = scope.querySelector('[data-hero-caption]')
        const archive = scope.querySelector('[data-hero-archive]')
        const scrollCue = scope.querySelector('[data-hero-scroll-cue]')
        const grid = scope.querySelector('[data-hero-grid]')
        const watermark = scope.querySelector('[data-hero-watermark]')
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
          .to(grid, { yPercent: -6, opacity: 0.35, duration: 0.8 }, 0.02)
          .to(watermark, { yPercent: -8, opacity: 0.18, duration: 0.8 }, 0.02)
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
        const grid = scope.querySelector('[data-hero-grid]')
        const watermark = scope.querySelector('[data-hero-watermark]')

        if (!hero) return

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
          .to(grid, { yPercent: -4, opacity: 0.5, duration: 1 }, 0)
          .to(watermark, { yPercent: -5, opacity: 0.2, duration: 1 }, 0)

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
