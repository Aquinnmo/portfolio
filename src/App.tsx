import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import { useCallback, useEffect, useRef, useState } from 'react'
import { Background } from './components/Background'
import { FoundryPage } from './components/FoundryPage'
import { PageSwitcher } from './components/PageSwitcher'
import { PortfolioPage } from './components/PortfolioPage'
import { FoundryFooter } from './components/FoundryFooter'
import { SiteFooter } from './components/SiteFooter'
import { ThemeToggle } from './components/ThemeToggle'
import './styling/App.css'

type AppRoute = 'portfolio' | 'foundry'
type RouteTransitionPhase = 'idle' | 'exiting' | 'entering'

const routeTransitionExitMs = 160
const routeTransitionEnterMs = 160

function getRouteFromPath(pathname: string): AppRoute {
  return pathname === '/foundry' ? 'foundry' : 'portfolio'
}

function App() {
  const [route, setRoute] = useState<AppRoute>(() => getRouteFromPath(window.location.pathname))
  const [switcherRoute, setSwitcherRoute] = useState<AppRoute>(() => getRouteFromPath(window.location.pathname))
  const [switcherThemeRoute, setSwitcherThemeRoute] = useState<AppRoute>(() => getRouteFromPath(window.location.pathname))
  const [transitionPhase, setTransitionPhase] = useState<RouteTransitionPhase>('idle')
  const transitionTimeouts = useRef<number[]>([])

  const clearTransitionTimeouts = useCallback(() => {
    transitionTimeouts.current.forEach((timeoutId) => window.clearTimeout(timeoutId))
    transitionTimeouts.current = []
  }, [])

  const transitionToRoute = useCallback((nextRoute: AppRoute, path?: string) => {
    if (transitionPhase !== 'idle') {
      return
    }

    if (nextRoute === route) {
      setSwitcherRoute(nextRoute)
      setSwitcherThemeRoute(nextRoute)
      return
    }

    clearTransitionTimeouts()
    setSwitcherRoute(nextRoute)

    if (path && window.location.pathname !== path) {
      window.history.pushState({}, '', path)
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setRoute(nextRoute)
      setSwitcherThemeRoute(nextRoute)
      setTransitionPhase('idle')
      window.scrollTo({ top: 0, behavior: 'auto' })
      return
    }

    setTransitionPhase('exiting')

    const exitTimeout = window.setTimeout(() => {
      setRoute(nextRoute)
      setSwitcherThemeRoute(nextRoute)
      window.scrollTo({ top: 0, behavior: 'auto' })
      setTransitionPhase('entering')

      const enterTimeout = window.setTimeout(() => {
        setTransitionPhase('idle')
      }, routeTransitionEnterMs)

      transitionTimeouts.current.push(enterTimeout)
    }, routeTransitionExitMs)

    transitionTimeouts.current.push(exitTimeout)
  }, [clearTransitionTimeouts, route, transitionPhase])

  const navigateToRoute = useCallback((nextRoute: AppRoute, path: string) => {
    transitionToRoute(nextRoute, path)
  }, [transitionToRoute])

  useEffect(() => {
    const handlePopState = () => {
      transitionToRoute(getRouteFromPath(window.location.pathname))
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [transitionToRoute])

  useEffect(() => clearTransitionTimeouts, [clearTransitionTimeouts])

  return (
    <div className="site-shell" data-route={route} data-transition-phase={transitionPhase}>
      <SpeedInsights />
      <Analytics />
      <Background />
      <PageSwitcher activeRoute={switcherRoute} themeRoute={switcherThemeRoute} onNavigate={navigateToRoute} />
      <ThemeToggle />

      <div className="route-transition-veil" aria-hidden="true" />
      <div className="route-content">
        {route === 'foundry' ? (
          <FoundryPage onNavigateToPortfolio={() => navigateToRoute('portfolio', '/')} />
        ) : (
          <PortfolioPage />
        )}

        {route === 'foundry' ? <FoundryFooter /> : <SiteFooter />}
      </div>
    </div>
  )
}

export default App
