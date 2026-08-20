import { contactActions, heroContent } from '../../foundry/foundryContent'
import { FoundryActionLink } from './FoundryActionLink'
import './styling/FoundryHeroSection.css'
import '../styling/actions.css'

export function FoundryHeroSection() {
  return (
      <section className="foundry-hero-section">
        <div className="foundry-hero-copy">
          <h1 id="page-title">{heroContent.title}</h1>
        </div>
        <div className="foundry-hero-detail">
          <p className="foundry-route-summary">{heroContent.summary}</p>
          <p className="foundry-route-detail">{heroContent.detail}</p>
          <div className="foundry-route-actions">
            <FoundryActionLink action={contactActions[0]} />
            <FoundryActionLink action={contactActions[1]} />
          </div>
        </div>
      </section>
    )
}
