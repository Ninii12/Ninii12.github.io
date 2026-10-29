import { useLayoutEffect, type RefObject } from 'react'
import {
  createDepthRig,
  createPointerTracker,
  motion,
  pointerMotionQuery,
} from '../lib/motion'
import {
  createMediaScene,
  createScrollScene,
} from '../lib/scroll'

const STRATEGY_CHARS = '[data-hero-char="strategy"]'
const EDGE_CHARS = '[data-hero-char="edge"]'

/**
 * The hero's complete motion system.
 *
 * Reduced-motion visitors receive the finished editorial cover with no
 * transforms. Desktop receives the sticky scroll sequence; smaller screens
 * keep the entrance only and never pin the section.
 */
export function useHeroMotion(scopeRef: RefObject<HTMLElement | null>) {
  useLayoutEffect(() => {
    const scope = scopeRef.current
    if (!scope) return

    const cleanupEntrance = createScrollScene(scope, ({ gsap }) => {
      const kicker = scope.querySelector('[data-hero-kicker]')
      const name = scope.querySelector('[data-hero-name]')
      const role = scope.querySelector('[data-hero-role]')
      const strategyChars = scope.querySelectorAll(STRATEGY_CHARS)
      const aside = scope.querySelector('[data-hero-aside]')
      const creative = scope.querySelector('[data-hero-creative]')
      const edgeChars = scope.querySelectorAll(EDGE_CHARS)
      const star = scope.querySelector('[data-hero-star]')
      const intro = scope.querySelector('[data-hero-intro]')
      const actions = scope.querySelector('[data-hero-actions]')
      const artwork = scope.querySelector('[data-hero-artwork]')
      const coverLine = scope.querySelector('[data-hero-cover-line]')
      const coverSpine = scope.querySelector('[data-hero-cover-spine]')
      const coverRegistration = scope.querySelector(
        '[data-hero-cover-registration]',
      )
      const caption = scope.querySelector('[data-hero-caption]')
      const archive = scope.querySelector('[data-hero-archive]')

      gsap.set(coverLine, { scaleX: 0, transformOrigin: '0% 50%' })

      const entrance = gsap.timeline({
        defaults: { ease: motion.ease.cinematic },
      })

      entrance
        .from(kicker, { y: 12, opacity: 0, duration: 0.8 }, 0)
        .from(
          name,
          {
            y: 34,
            opacity: 0,
            duration: 1.2,
            transformOrigin: '0% 100%',
          },
          0.05,
        )
        .from(
          role,
          {
            y: 14,
            opacity: 0,
            duration: 0.85,
            ease: 'power3.out',
          },
          0.24,
        )
        .from(
          strategyChars,
          {
            yPercent: 118,
            rotateX: -68,
            opacity: 0,
            duration: 1.15,
            stagger: 0.034,
            transformOrigin: '50% 100%',
            transformPerspective: 700,
          },
          0.18,
        )
        .from(aside, { xPercent: -18, opacity: 0, duration: 0.9 }, 0.4)
        .from(
          creative,
          {
            yPercent: 115,
            rotate: 2.4,
            opacity: 0,
            duration: 1.35,
            transformOrigin: '0% 100%',
          },
          0.48,
        )
        .from(
          edgeChars,
          {
            yPercent: 118,
            rotateX: -68,
            opacity: 0,
            duration: 1.05,
            stagger: 0.04,
            transformOrigin: '50% 100%',
            transformPerspective: 700,
          },
          0.64,
        )
        .from(
          star,
          {
            scale: 0,
            rotate: -120,
            opacity: 0,
            duration: 1.1,
            ease: 'back.out(1.7)',
            transformOrigin: '50% 50%',
          },
          1.02,
        )
        .from(intro, { y: 18, opacity: 0, duration: 0.95 }, 0.72)
        .from(actions, { y: 16, opacity: 0, duration: 0.85 }, 0.86)
        .from(
          artwork,
          {
            y: 30,
            scale: 0.96,
            opacity: 0,
            duration: 1.35,
            transformOrigin: '52% 48%',
          },
          0.18,
        )
        .to(coverLine, { scaleX: 1, duration: 1.05 }, 0.46)
        .from(coverSpine, { scaleY: 0, transformOrigin: '50% 0%', duration: 1 }, 0.5)
        .from(
          coverRegistration,
          {
            scale: 0,
            opacity: 0,
            duration: 0.8,
            transformOrigin: '50% 50%',
          },
          0.72,
        )
        .from(caption, { y: 8, opacity: 0, duration: 0.75 }, 0.94)
        .from(archive, { y: 14, opacity: 0, duration: 0.85 }, 1.02)

      return () => entrance.kill()
    })

    const cleanupPointer = createMediaScene(
      scope,
      pointerMotionQuery,
      ({ gsap }) => {
        const stage = scope.querySelector<HTMLElement>('[data-art-stage]')
        const tilt = scope.querySelector<HTMLElement>('[data-hero-artwork]')

        if (!stage || !tilt) return

        const rotationX = gsap.quickTo(tilt, 'rotationX', {
          duration: motion.duration.pointer,
          ease: motion.ease.soft,
        })
        const rotationY = gsap.quickTo(tilt, 'rotationY', {
          duration: motion.duration.pointer,
          ease: motion.ease.soft,
        })

        const setDepth = createDepthRig(
          Array.from(
            scope.querySelectorAll<HTMLElement>('[data-depth]'),
          ).map((element) => {
            const parsed = Number.parseFloat(element.dataset.depth ?? '0.5')
            return {
              element,
              depth: Number.isFinite(parsed) ? parsed : 0.5,
            }
          }),
          { x: 18, y: 12, duration: 0.8 },
        )

        const reset = () => {
          rotationX(0)
          rotationY(0)
          setDepth(0, 0)
        }

        const stopTracking = createPointerTracker({
          stage,
          onMove: ({ x, y }) => {
            rotationX(-y * 2.8)
            rotationY(x * 3.6)
            setDepth(x, y)
          },
          onReset: reset,
        })

        return () => {
          stopTracking()
          reset()
        }
      },
    )

    return () => {
      cleanupPointer()
      cleanupEntrance()
    }
  }, [scopeRef])
}
