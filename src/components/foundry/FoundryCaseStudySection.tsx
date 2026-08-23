import { caseStudy } from '../../foundry/foundryContent'
import './styling/FoundryCaseStudySection.css'
import './styling/_shared.css'
import '../styling/layout.css'

export function FoundryCaseStudySection() {
  return (
    <section className="content-section foundry-section" id="current-work" aria-labelledby="foundry-case-study-heading">
      <div className="foundry-case-study">
        <div className="foundry-case-study-header">
          <p className="foundry-section-eyebrow">{caseStudy.eyebrow}</p>
          <h2 id="foundry-case-study-heading">{caseStudy.title}</h2>
          <p className="foundry-case-study-summary">{caseStudy.summary}</p>
        </div>
        <div className="foundry-case-transform">
          <article className="foundry-case-card foundry-case-card--before">
            <p className="foundry-case-tag">Before</p>
            <p>{caseStudy.problem}</p>
          </article>
          <div className="foundry-case-seam" aria-hidden="true">
            <span className="foundry-case-seam-line" />
          </div>
          <div className="foundry-case-approach">
            <p className="foundry-case-tag">Approach</p>
            <p>{caseStudy.approach}</p>
          </div>
          <div className="foundry-case-seam foundry-case-seam--right" aria-hidden="true">
            <span className="foundry-case-seam-line" />
          </div>
          <article className="foundry-case-card foundry-case-card--after">
            <p className="foundry-case-tag">After</p>
            <p>{caseStudy.outcome}</p>
          </article>
        </div>
      </div>
    </section>
  )
}
