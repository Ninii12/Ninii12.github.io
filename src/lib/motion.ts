import { gsap } from 'gsap'

export const finePointerQuery = '(hover: hover) and (pointer: fine)'

export const pointerMotionQuery =
  '(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)'

export const motion = {
  ease: {
    cinematic: 'expo.out',
    soft: 'power3.out',
    scrub: 'none',
  },
  duration: {
    entrance: 1.15,
    reflection: 1.55,
    pointer: 0.8,
  },
} as const

export type PointerState = {
  x: number
  y: number
  clientX: number
  clientY: number
}

type PointerTrackerOptions = {
  stage: HTMLElement
  onMove: (state: PointerState) => void
  onReset: () => void
}

function clamp(value: number) {
  return Math.min(1, Math.max(-1, value))
}

/**
 * Normalises pointer movement inside a stage without doing any animation.
 *
 * GSAP quick setters can then be shared by any number of depth layers. The
 * tracker only starts on precise pointers and throttles work to one frame.
 */
export function createPointerTracker({
  stage,
  onMove,
  onReset,
}: PointerTrackerOptions) {
  let frame = 0
  let clientX = 0
  let clientY = 0

  const apply = () => {
    frame = 0
    const bounds = stage.getBoundingClientRect()

    if (!bounds.width || !bounds.height) return

    onMove({
      x: clamp(((clientX - bounds.left) / bounds.width) * 2 - 1),
      y: clamp(((clientY - bounds.top) / bounds.height) * 2 - 1),
      clientX,
      clientY,
    })
  }

  const handleMove = (event: PointerEvent) => {
    clientX = event.clientX
    clientY = event.clientY

    if (!frame) {
      frame = window.requestAnimationFrame(apply)
    }
  }

  const reset = () => {
    if (frame) {
      window.cancelAnimationFrame(frame)
      frame = 0
    }

    onReset()
  }

  stage.addEventListener('pointermove', handleMove)
  stage.addEventListener('pointerleave', reset)
  window.addEventListener('blur', reset)

  return () => {
    if (frame) {
      window.cancelAnimationFrame(frame)
    }

    stage.removeEventListener('pointermove', handleMove)
    stage.removeEventListener('pointerleave', reset)
    window.removeEventListener('blur', reset)
  }
}

/**
 * Creates a quick transform setter for a depth-aware pointer rig.
 */
export function createDepthRig(
  elements: Array<{ element: Element; depth: number }>,
  options: { x: number; y: number; duration?: number },
) {
  const setters = elements.map(({ element, depth }) => ({
    depth,
    xTo: gsap.quickTo(element, 'x', {
      duration: options.duration ?? motion.duration.pointer,
      ease: motion.ease.soft,
    }),
    yTo: gsap.quickTo(element, 'y', {
      duration: options.duration ?? motion.duration.pointer,
      ease: motion.ease.soft,
    }),
  }))

  return (x: number, y: number) => {
    for (const setter of setters) {
      setter.xTo(x * options.x * setter.depth)
      setter.yTo(y * options.y * setter.depth)
    }
  }
}

export { gsap }
