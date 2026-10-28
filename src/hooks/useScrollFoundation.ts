import { useEffect } from 'react'
import { ScrollTrigger } from '../lib/scroll'

/**
 * Keeps ScrollTrigger's cached page measurements accurate.
 *
 * This creates no animations and does not replace native scrolling. It
 * simply refreshes the measurements now, after web fonts finish loading,
 * and once the whole page (including images) has loaded.
 */
export function useScrollFoundation() {
  useEffect(() => {
    let active = true

    const refresh = () => {
      if (active) {
        ScrollTrigger.refresh()
      }
    }

    refresh()

    if (document.fonts.status === 'loading') {
      void document.fonts.ready.then(refresh).catch(() => {})
    }

    window.addEventListener('load', refresh)

    return () => {
      active = false
      window.removeEventListener('load', refresh)
    }
  }, [])
}
