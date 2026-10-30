import { useEffect, useRef } from 'react'
import styles from './WaterBackdrop.module.css'

/**
 * The site-wide water environment.
 *
 * One fixed, full-viewport WebGL canvas renders a pearlescent underwater
 * caustic field tuned to the blush/champagne/lilac palette. It is mounted
 * once at the app shell, below every section, so the environment never
 * restarts across Home, the five case studies and NotFound.
 *
 * Scroll never writes back: the loop only reads window.scrollY, eases it
 * into a drift phase and a soft velocity shimmer, so the GSAP scroll story
 * is untouched. Idle time keeps the surface breathing.
 *
 * Graceful degradation: prefers-reduced-motion paints a single static
 * frame; a hidden tab pauses the loop; if WebGL is unavailable or the
 * context is lost, a CSS gradient fallback paints a calm pearlescent wash.
 */

const VERTEX_SRC = `
attribute vec2 aPosition;
void main() {
  gl_Position = vec4(aPosition, 0.0, 1.0);
}
`

const FRAGMENT_SRC = `
precision mediump float;

uniform vec2 uRes;
uniform float uTime;
uniform float uScroll;
uniform float uVel;

uniform vec3 uBase;
uniform vec3 uBlush;
uniform vec3 uRose;
uniform vec3 uChampagne;
uniform vec3 uLilac;
uniform vec3 uSpec;
uniform float uStrength;

float hash12(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
}

/*
 * Warped caustic veins — light folding through moving water. Five cheap
 * trig-warped passes of the classic refracted-flux construction.
 */
float caustics(vec2 uv, float t) {
  vec2 p = mod(uv * 6.28318, 6.28318) - 250.0;
  vec2 i = p;
  float c = 1.0;
  float inten = 0.0045;
  for (int n = 0; n < 5; n++) {
    float tt = t * (1.0 - (3.5 / float(n + 1)));
    i = p + vec2(
      cos(tt - i.x) + sin(tt + i.y),
      sin(tt - i.y) + cos(tt + i.x)
    );
    c += 1.0 / length(vec2(
      p.x / (sin(i.x + tt) / inten),
      p.y / (cos(i.y + tt) / inten)
    ));
  }
  c /= 5.0;
  c = 1.17 - pow(c, 1.4);
  return clamp(pow(abs(c), 7.0), 0.0, 1.0);
}

void main() {
  vec2 uv = gl_FragCoord.xy / uRes;
  vec2 p = uv - 0.5;
  p.x *= uRes.x / uRes.y;

  /*
   * Scroll stream: sampling the field with a scroll-proportional offset
   * makes the surface drift upward as the page travels down — the visitor
   * moves *through* the water. Velocity adds a whisper of speed shimmer.
   */
  float drift = uScroll * 0.00042;
  vec2 field = p + vec2(drift * 0.4, drift * 0.95) + uVel * 0.012;

  float t = uTime * 0.055;

  // Two caustic layers: broad filaments plus a finer counter-current.
  float fila = caustics(field * 0.55 + vec2(t * 0.3, -t * 0.17), t);
  float fila2 = caustics(field * 1.1 - vec2(t * 0.21, t * 0.11), -t * 0.8);
  float veins = fila * 0.75 + fila2 * 0.45;

  // Slow drifting glow pools — the pearlescent body of the water.
  float d1 = sin(uTime * 0.037 + 1.7);
  float d2 = sin(uTime * 0.029 + 4.1);
  float d3 = sin(uTime * 0.043 + 2.9);
  vec2 cCh = vec2(-0.32 + d1 * 0.1, 0.28 + d2 * 0.08);
  vec2 cBl = vec2(0.34 + d2 * 0.09, 0.18 + d3 * 0.07);
  vec2 cLi = vec2(-0.05 + d3 * 0.11, -0.32 + d1 * 0.09);
  vec2 cRo = vec2(0.12 + d1 * 0.07, 0.42 + d2 * 0.06);

  float wCh = pow(1.0 - clamp(length(field - cCh) * 1.35, 0.0, 1.0), 2.0);
  float wBl = pow(1.0 - clamp(length(field - cBl) * 1.25, 0.0, 1.0), 2.2);
  float wLi = pow(1.0 - clamp(length(field - cLi) * 1.2, 0.0, 1.0), 2.4);
  float wRo = pow(1.0 - clamp(length(field - cRo) * 1.5, 0.0, 1.0), 2.0);

  vec3 col = uBase;
  col = mix(col, uChampagne, wCh * 0.3);
  col = mix(col, uBlush, wBl * 0.32);
  col = mix(col, uLilac, wLi * 0.3);
  col = mix(col, uRose, wRo * 0.24);

  // A whisper more depth toward the bottom of the viewport.
  col = mix(col, uRose, max(0.0, 0.5 - uv.y) * 0.12);

  // Refracted highlights ride the caustic veins.
  float ripple = veins * (0.8 + 0.3 * abs(uVel));
  col = mix(col, uSpec, clamp(ripple, 0.0, 1.0) * 0.3 * uStrength);
  col = mix(col, uLilac, clamp(1.0 - ripple, 0.0, 1.0) * 0.06 * uStrength);

  // Master dial: keeps every deviation anchored around the blush base.
  col = uBase + (col - uBase) * uStrength;

  // Dither so the soft gradients never band.
  col += (hash12(gl_FragCoord.xy + fract(uTime)) - 0.5) / 255.0;

  gl_FragColor = vec4(col, 1.0);
}
`

type Palette = {
  base: [number, number, number]
  blush: [number, number, number]
  rose: [number, number, number]
  champagne: [number, number, number]
  lilac: [number, number, number]
  spec: [number, number, number]
  strength: number
}

/** Matches the token defaults so a missing token changes nothing. */
const FALLBACK_PALETTE: Palette = {
  base: [0.9098, 0.8235, 0.8078],
  blush: [0.9569, 0.8, 0.8235],
  rose: [0.8745, 0.6784, 0.6784],
  champagne: [0.9686, 0.8941, 0.7843],
  lilac: [0.8118, 0.6627, 0.9098],
  spec: [1.0, 0.9804, 0.949],
  strength: 0.75,
}

function readPalette(): Palette {
  const css = getComputedStyle(document.documentElement)

  const hex = (
    name: string,
    fallback: [number, number, number],
  ): [number, number, number] => {
    const value = css.getPropertyValue(name).trim()
    const match = /^#?([0-9a-f]{6})$/i.exec(value)
    if (!match) return fallback
    const n = Number.parseInt(match[1], 16)
    return [
      ((n >> 16) & 255) / 255,
      ((n >> 8) & 255) / 255,
      (n & 255) / 255,
    ]
  }

  const strength = Number.parseFloat(css.getPropertyValue('--water-strength'))

  return {
    base: hex('--water-base', FALLBACK_PALETTE.base),
    blush: hex('--water-blush', FALLBACK_PALETTE.blush),
    rose: hex('--water-rose', FALLBACK_PALETTE.rose),
    champagne: hex('--water-champagne', FALLBACK_PALETTE.champagne),
    lilac: hex('--water-lilac', FALLBACK_PALETTE.lilac),
    spec: hex('--water-spec', FALLBACK_PALETTE.spec),
    strength: Number.isFinite(strength)
      ? Math.min(1.6, Math.max(0, strength))
      : FALLBACK_PALETTE.strength,
  }
}

function compileShader(
  gl: WebGLRenderingContext,
  type: number,
  source: string,
) {
  const shader = gl.createShader(type)
  if (!shader) return null
  gl.shaderSource(shader, source)
  gl.compileShader(shader)
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.warn(
      'Water backdrop: shader compile failed',
      gl.getShaderInfoLog(shader),
    )
    gl.deleteShader(shader)
    return null
  }
  return shader
}

export default function WaterBackdrop() {
  const backdropRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const container = backdropRef.current
    const canvas = canvasRef.current
    if (!container || !canvas) return

    const useFallback = () => {
      container.classList.add(styles.fallback)
      if (canvas.parentNode) canvas.remove()
    }

    const gl =
      (canvas.getContext('webgl', {
        antialias: false,
        depth: false,
        stencil: false,
        alpha: false,
      }) as WebGLRenderingContext | null) ??
      (canvas.getContext('experimental-webgl') as WebGLRenderingContext | null)

    if (!gl) {
      useFallback()
      return
    }

    const vertex = compileShader(gl, gl.VERTEX_SHADER, VERTEX_SRC)
    const fragment = compileShader(gl, gl.FRAGMENT_SHADER, FRAGMENT_SRC)
    const program = gl.createProgram()
    if (!vertex || !fragment || !program) {
      useFallback()
      return
    }
    gl.attachShader(program, vertex)
    gl.attachShader(program, fragment)
    gl.linkProgram(program)
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.warn(
        'Water backdrop: program link failed',
        gl.getProgramInfoLog(program),
      )
      useFallback()
      return
    }
    gl.useProgram(program)

    // One triangle covering the viewport.
    const buffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 3, -1, -1, 3]),
      gl.STATIC_DRAW,
    )
    const position = gl.getAttribLocation(program, 'aPosition')
    gl.enableVertexAttribArray(position)
    gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0)

    const u = {} as Record<string, WebGLUniformLocation | null>
    for (const name of [
      'uRes',
      'uTime',
      'uScroll',
      'uVel',
      'uBase',
      'uBlush',
      'uRose',
      'uChampagne',
      'uLilac',
      'uSpec',
      'uStrength',
    ]) {
      u[name] = gl.getUniformLocation(program, name)
    }

    const palette = readPalette()
    gl.uniform3f(u.uBase, ...palette.base)
    gl.uniform3f(u.uBlush, ...palette.blush)
    gl.uniform3f(u.uRose, ...palette.rose)
    gl.uniform3f(u.uChampagne, ...palette.champagne)
    gl.uniform3f(u.uLilac, ...palette.lilac)
    gl.uniform3f(u.uSpec, ...palette.spec)
    gl.uniform1f(u.uStrength, palette.strength)

    // Render at a soft fraction of the viewport: fewer pixels per frame and
    // the CSS upscale doubles as the dreamy, out-of-focus finish.
    let width = 2
    let height = 2
    const resize = () => {
      const cssW = Math.max(1, window.innerWidth)
      const cssH = Math.max(1, window.innerHeight)
      const scale = Math.min(1, Math.sqrt(920_000 / (cssW * cssH)))
      width = Math.round(cssW * scale)
      height = Math.round(cssH * scale)
      canvas.width = width
      canvas.height = height
      gl.viewport(0, 0, width, height)
      gl.uniform2f(u.uRes, width, height)
    }

    let smoothScroll = window.scrollY
    let smoothVelocity = 0

    const drawFrame = () => {
      const target = window.scrollY
      const delta = target - smoothScroll
      smoothScroll += delta * 0.16
      smoothVelocity += (delta - smoothVelocity) * 0.12

      gl.uniform1f(u.uTime, performance.now() / 1000)
      gl.uniform1f(u.uScroll, smoothScroll)
      gl.uniform1f(
        u.uVel,
        Math.max(-1, Math.min(1, smoothVelocity / 220)),
      )
      gl.drawArrays(gl.TRIANGLES, 0, 3)
    }

    let raf = 0
    let running = false

    const tick = () => {
      drawFrame()
      raf = window.requestAnimationFrame(tick)
    }

    const start = () => {
      if (!running) {
        running = true
        raf = window.requestAnimationFrame(tick)
      }
    }

    const stop = () => {
      if (running) {
        running = false
        window.cancelAnimationFrame(raf)
        raf = 0
      }
    }

    const reducedQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const syncMotion = () => {
      if (reducedQuery.matches || document.hidden) {
        stop()
        // A single calm frame keeps the environment present but still.
        drawFrame()
      } else {
        start()
      }
    }
    syncMotion()

    const onResize = () => {
      resize()
      if (!running) drawFrame()
    }

    const onContextLost = (event: Event) => {
      event.preventDefault()
      stop()
      useFallback()
    }

    resize()
    window.addEventListener('resize', onResize)
    document.addEventListener('visibilitychange', syncMotion)
    reducedQuery.addEventListener('change', syncMotion)
    canvas.addEventListener('webglcontextlost', onContextLost, {
      passive: true,
    })

    return () => {
      stop()
      window.removeEventListener('resize', onResize)
      document.removeEventListener('visibilitychange', syncMotion)
      reducedQuery.removeEventListener('change', syncMotion)
      canvas.removeEventListener('webglcontextlost', onContextLost)
      gl.getExtension('WEBGL_lose_context')?.loseContext()
    }
  }, [])

  return (
    <div ref={backdropRef} className={styles.backdrop} aria-hidden="true">
      <canvas ref={canvasRef} className={styles.canvas} />
    </div>
  )
}
