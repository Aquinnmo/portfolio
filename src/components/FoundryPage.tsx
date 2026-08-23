import { FoundryCaseStudySection } from './foundry/FoundryCaseStudySection'
import { FoundryDifferentiatorsSection } from './foundry/FoundryDifferentiatorsSection'
import { FoundryFounderSection } from './foundry/FoundryFounderSection'
import { FoundryHeroSection } from './foundry/FoundryHeroSection'
import { FoundryProcessSection } from './foundry/FoundryProcessSection'
import { FoundryServicesSection } from './foundry/FoundryServicesSection'
import './styling/FoundryPage.css'
import './styling/layout.css'

export function FoundryPage({ onNavigateToPortfolio }: { onNavigateToPortfolio: () => void }) {
  return (
    <main className="page-flow foundry-page-flow" aria-labelledby="page-title">
      <FoundryHeroSection />
      <FoundryServicesSection />
      <FoundryCaseStudySection />
      <FoundryDifferentiatorsSection />
      <FoundryProcessSection />
      <FoundryFounderSection onNavigateToPortfolio={onNavigateToPortfolio} />
    </main>
  )
}
