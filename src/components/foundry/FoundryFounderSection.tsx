import type { MouseEvent } from 'react'
import { contactActions, founderContent } from '../../foundry/foundryContent'
import profilePhoto from '../../assets/portfolio/pfp.jpeg'
import { FoundryActionLink } from './FoundryActionLink'
import './styling/FoundryFounderSection.css'
import './styling/_shared.css'
import '../styling/layout.css'
import '../styling/actions.css'

export function FoundryFounderSection({ onNavigateToPortfolio }: { onNavigateToPortfolio: () => void }) {
  const handleNavigateToPortfolio = (event: MouseEvent<HTMLAnchorElement>) => {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
      return
    }

    event.preventDefault()
    onNavigateToPortfolio()
  }

  return (
    <section className="content-section foundry-section foundry-founder" aria-labelledby="foundry-founder-heading">
      <div className="foundry-founder-header">
        <h2 id="foundry-founder-heading">{founderContent.title}</h2>
      </div>
      <div className="foundry-founder-layout">
        <figure className="foundry-founder-portrait">
          <img src={profilePhoto} alt="Adam Montgomery" />
        </figure>
        <div className="foundry-founder-copy">
          <p>{founderContent.description}</p>
          <div className="foundry-founder-actions">
            <FoundryActionLink action={contactActions[2]} />
            <a className="hero-action hero-action-secondary" href="/" onClick={handleNavigateToPortfolio}>
              More About Me
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
