import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register once so every scroll scene uses the same plugin instance.
gsap.registerPlugin(ScrollTrigger)

export const fullMotionQuery = '(prefers-reduced-motion: no-preference)'

export const desktopMotionQuery =
  '(min-width: 1000px) and (min-height: 780px) and (prefers-reduced-motion: no-preference)'

/**
 * Phones, tablets, and short desktop viewports receive a scroll-linked
 * treatment without a pinned hero or overlapping Work panel.
 */
export const compactMotionQuery =
  '(prefers-reduced-motion: no-preference) and (max-width: 999px), (prefers-reduced-motion: no-preference) and (max-height: 779px)'

export type ScrollSceneTools = {
  gsap: typeof gsap
  ScrollTrigger: typeof ScrollTrigger
}

export type ScrollSceneCleanup = () => void

/**
 * Creates a scoped batch of GSAP animations for any media query.
 *
 * The setup callback only runs while the query matches. If it returns a
 * cleanup function, GSAP runs that cleanup when the query stops matching or
 * the scene is reverted.
 */
export function createMediaScene(
  scope: Element,
  query: string,
  setup: (tools: ScrollSceneTools) => void | ScrollSceneCleanup,
) {
  const media = gsap.matchMedia(scope)

  media.add(query, () => setup({ gsap, ScrollTrigger }))

  return () => media.revert()
}

/**
 * Creates a scoped batch of GSAP animations that respects reduced motion.
 */
export function createScrollScene(
  scope: Element,
  setup: (tools: ScrollSceneTools) => void | ScrollSceneCleanup,
) {
  return createMediaScene(scope, fullMotionQuery, setup)
}

export { gsap, ScrollTrigger }
