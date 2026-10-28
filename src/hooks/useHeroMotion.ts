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
 * Reduced-motion visitors receive the finished, vivid composition with no
 * transforms. Desktop receives the sticky scroll sequence; smaller screens
 * keep the entrance only and never pin the section.
 */
export function useHeroMotion(scopeRef: RefObject<HTMLElement | null>) {
  useLayoutEffect(() => {
    const scope = scopeRef.current
    if (!scope) return

    const cleanupEntrance = createScrollScene(scope, ({ gsap }) => {
      const kicker = scope.querySelector('[data-hero-kicker]')
      const strategyChars = scope.querySelectorAll(STRATEGY_CHARS)
      const aside = scope.querySelector('[data-hero-aside]')
      const creative = scope.querySelector('[data-hero-creative]')
      const edgeChars = scope.querySelectorAll(EDGE_CHARS)
      const star = scope.querySelector('[data-hero-star]')
      const intro = scope.querySelector('[data-hero-intro]')
      const actions = scope.querySelector('[data-hero-actions]')
      const artwork = scope.querySelector('[data-hero-artwork]')
      const caption = scope.querySelector('[data-hero-caption]')
      const archive = scope.querySelector('[data-hero-archive]')
      const shards = scope.querySelectorAll('[data-art="shard"]')
      const reflections = scope.querySelectorAll('[data-hero-reflection]')
      const orbit = scope.querySelectorAll('[data-art="orbit"]')

      const entrance = gsap.timeline({
        defaults: { ease: motion.ease.cinematic },
      })

      entrance
        .from(kicker, { y: 12, opacity: 0, duration: 0.8 }, 0)
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
          0.08,
        )
        .from(aside, { xPercent: -14, opacity: 0, duration: 0.9 }, 0.3)
        .from(
          creative,
          {
            yPercent: 115,
            rotate: 2.4,
            opacity: 0,
            duration: 1.35,
            transformOrigin: '0% 100%',
          },
          0.4,
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
          0.58,
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
          0.96,
        )
        .from(intro, { y: 18, opacity: 0, duration: 0.95 }, 0.66)
        .from(actions, { y: 16, opacity: 0, duration: 0.85 }, 0.8)
        .from(
          artwork,
          {
            y: 30,
            scale: 0.94,
            rotate: -1.4,
            opacity: 0,
            duration: 1.55,
            transformOrigin: '52% 48%',
          },
          0.12,
        )
        .from(
          shards,
          {
            y: 24,
            scale: 0.82,
            rotate: -3,
            opacity: 0,
            duration: 1.05,
            stagger: 0.075,
            transformOrigin: '50% 50%',
          },
          0.42,
        )
        .from(
          reflections,
          { x: -18, opacity: 0, duration: 1.25, stagger: 0.1 },
          0.5,
        )
        .from(orbit, { opacity: 0, duration: 0.9, stagger: 0.06 }, 0.35)
        .from(caption, { y: 8, opacity: 0, duration: 0.75 }, 0.94)
        .from(archive, { y: 14, opacity: 0, duration: 0.85 }, 1.02)
    })

    const cleanupPointer = createMediaScene(
      scope,
      pointerMotionQuery,
      ({ gsap }) => {
        const stage = scope.querySelector<HTMLElement>('[data-art-stage]')
        const tilt = scope.querySelector<HTMLElement>('[data-hero-artwork]')
        const creative = scope.querySelector<HTMLElement>(
          '[data-hero-creative]',
        )

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
            scope.querySelectorAll<SVGGraphicsElement>('[data-depth]'),
          ).map((element) => {
            const parsed = Number.parseFloat(element.dataset.depth ?? '0.5')
            return {
              element,
              depth: Number.isFinite(parsed) ? parsed : 0.5,
            }
          }),
          { x: 24, y: 17, duration: 0.8 },
        )

        const resetLight = () => {
          rotationX(0)
          rotationY(0)
          setDepth(0, 0)
          stage.style.setProperty('--light-x', '50%')
          stage.style.setProperty('--light-y', '44%')
          creative?.style.setProperty('--metal-pointer', '0%')
        }

        const stopTracking = createPointerTracker({
          stage,
          onMove: ({ x, y }) => {
            rotationX(-y * 3.8)
            rotationY(x * 4.6)
            setDepth(x, y)
            stage.style.setProperty('--light-x', `${50 + x * 12}%`)
            stage.style.setProperty('--light-y', `${44 + y * 10}%`)
            creative?.style.setProperty('--metal-pointer', `${x * 7}%`)
          },
          onReset: resetLight,
        })

        return () => {
          stopTracking()
          resetLight()
        }
      },
    )

    return () => {
      cleanupPointer()
      cleanupEntrance()
    }
  }, [scopeRef])
}
