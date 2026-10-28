import { useEffect, useState } from 'react'
import { projectSlugs } from '../data/projects'

export type Route =
  | { name: 'home' }
  | { name: 'case-study'; slug: string }
  | { name: 'not-found' }

type LocationState = {
  pathname: string
  hash: string
}

const navigateEvent = 'portfolio:navigate'

export function normalizePath(pathname: string) {
  const normalized = pathname.replace(/\/+$/, '')
  return normalized || '/'
}

export function parseRoute(pathname: string): Route {
  const normalized = normalizePath(pathname)

  if (normalized === '/') {
    return { name: 'home' }
  }

  const match = normalized.match(/^\/work\/([^/]+)$/)

  if (match && projectSlugs.has(match[1])) {
    return { name: 'case-study', slug: match[1] }
  }

  return { name: 'not-found' }
}

function readLocation(): LocationState {
  return {
    pathname: normalizePath(window.location.pathname),
    hash: window.location.hash,
  }
}

export function useLocation() {
  const [location, setLocation] = useState<LocationState>(readLocation)

  useEffect(() => {
    const update = () => setLocation(readLocation())

    window.addEventListener('popstate', update)
    window.addEventListener('hashchange', update)
    window.addEventListener(navigateEvent, update)

    return () => {
      window.removeEventListener('popstate', update)
      window.removeEventListener('hashchange', update)
      window.removeEventListener(navigateEvent, update)
    }
  }, [])

  return location
}

export function navigate(href: string) {
  const url = new URL(href, window.location.href)

  if (url.origin !== window.location.origin) {
    window.location.assign(url.href)
    return
  }

  const nextUrl = `${url.pathname}${url.search}${url.hash}`
  const currentUrl = `${window.location.pathname}${window.location.search}${window.location.hash}`

  if (nextUrl !== currentUrl) {
    window.history.pushState(null, '', nextUrl)
  }

  window.dispatchEvent(new Event(navigateEvent))
}
