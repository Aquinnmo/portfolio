import { product } from '../../foundry/foundryContent'
import timberIcon from '../../assets/portfolio/project_icons/timber.png'
import './styling/FoundryProductSection.css'
import './styling/_shared.css'
import '../styling/layout.css'
import '../styling/actions.css'

export function FoundryProductSection() {
  return (
    <section className="content-section foundry-section" aria-labelledby="foundry-product-heading">
      <div className="section-heading-row">
        <h2 id="foundry-product-heading">Our Apps</h2>
        <p className="foundry-section-summary">Products we design, build, and ship ourselves.</p>
      </div>
      <article className="foundry-product">
        <img className="foundry-product-icon" src={timberIcon} alt="" aria-hidden="true" />
        <div className="foundry-product-copy">
          <p className="foundry-section-eyebrow">{product.status}</p>
          <h3>{product.name}</h3>
          <p className="foundry-product-tagline">{product.tagline}</p>
          <p>{product.description}</p>
          <div className="foundry-product-actions">
            {product.links.map((link) => (
              <a
                key={link.label}
                className={`hero-action ${link.variant === 'primary' ? 'hero-action-primary' : 'hero-action-secondary'}`}
                href={link.href}
                target="_blank"
                rel="noreferrer"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </article>
    </section>
  )
}
