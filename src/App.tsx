import { useEffect, useRef } from 'react'
import './App.css'
import { AboutSection, ContactSection } from './components/InfoSections'
import CaseStudyPage from './components/CaseStudyPage'
import CharmHero from './components/CharmHero'
import { Link } from './components/RouteLink'
import SiteHeader from './components/SiteHeader'
import WorkSection from './components/WorkSection'
import { getProject } from './data/projects'
import { useHomeScrollStory } from './hooks/useHomeScrollStory'
import { useScrollFoundation } from './hooks/useScrollFoundation'
import { parseRoute, useLocation } from './lib/router'

function NotFound() {
  return (
    <section className="not-found" aria-labelledby="not-found-title">
      <div className="not-found__inner">
        <p className="eyebrow">404 / Not found</p>
        <h1 id="not-found-title">That page is not in the archive.</h1>
        <p>
          The work lives in five concept studies. Start from the index and choose
          a chapter.
        </p>
        <Link className="not-found__link" href="/#work">
          Back to the work
          <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </section>
  )
}

function HomeHeroWork() {
  const scopeRef = useRef<HTMLDivElement>(null)
  useHomeScrollStory(scopeRef)

  return (
    <div ref={scopeRef} className="home-hero-work" data-home-story>
      <CharmHero />
      <div className="home-work-entrance">
        <div
          className="work-threshold"
          data-work-threshold
          aria-hidden="true"
        >
          <span className="work-threshold__glow" data-work-glow />
          <span className="work-threshold__line" data-work-line />
          <span className="work-threshold__flare" data-work-flare />
        </div>
        <WorkSection />
      </div>
    </div>
  )
}

function App() {
  useScrollFoundation()
  const location = useLocation()
  const route = parseRoute(location.pathname)
  const project =
    route.name === 'case-study' ? getProject(route.slug) : undefined

  useEffect(() => {
    if (location.hash) {
      const id = decodeURIComponent(location.hash.slice(1))
      const frame = window.requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView()
      })

      return () => window.cancelAnimationFrame(frame)
    }

    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [location.hash, location.pathname])

  return (
    <div className="app-shell">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main">
        {route.name === 'home' && (
          <>
            <HomeHeroWork />
            <AboutSection />
            <ContactSection />
          </>
        )}

        {route.name === 'case-study' && project && (
          <CaseStudyPage project={project} />
        )}

        {(route.name === 'not-found' ||
          (route.name === 'case-study' && !project)) && <NotFound />}
      </main>
    </div>
  )
}

export default App
