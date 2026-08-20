import { contactActions, founderContent } from '../../foundry/foundryContent'
import profilePhoto from '../../assets/portfolio/pfp.jpeg'
import { FoundryActionLink } from './FoundryActionLink'
import './styling/FoundryFounderSection.css'
import './styling/_shared.css'
import '../styling/layout.css'

export function FoundryFounderSection() {
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
          <FoundryActionLink action={contactActions[2]} />
        </div>
      </div>
    </section>
  )
}
