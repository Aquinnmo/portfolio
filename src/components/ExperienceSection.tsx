import { useEffect, useRef, useState, type CSSProperties } from 'react'
import './styling/ExperienceSection.css'
import './styling/layout.css'

const experiences = [
  // {
  //   role: 'Full Stack Developer Intern',
  //   company: 'TextNow',
  //   dates: 'Starting September 2027',
  //   summary:
  //     'I am joinging TextNow as a Full Stack Developer Intern in September, helping democratize cellular communication for the masses.',
  //   proof: [],
  //   tags: ['Ruby on Rails', 'Ruby'],
  // },
  {
    role: 'Software Engineering Intern',
    company: 'SPS Commerce',
    dates: 'May 2026 – Aug 2026',
    summary: '',
    proof: [
      'Implemented the entire feature lifecycle for a multi-pipeline deployment assistant Slack app integrating Jira and Azure DevOps, from the planning phase through completion, then defined a roadmap for future iterations.',
      'Refactored to standardize caching of auth credentials platform-wide to use Redis and encryption by default.',
      'Cut support time by 65% through a support agent built on AWS Bedrock, LangChain, and a custom context management solution.',
      'Extended the support agent with custom MCP Tools, enhancing data access for customers and developers.',
      'Created a reusable library for 11 existing and future services by refactoring a mono-repo into distinct modules.',
    ],
    tags: ['Kotlin', 'MCP', 'Azure DevOps', 'Redis', 'AWS Bedrock', 'LangChain'],
  },
  {
    role: 'President, Owner, & Lead Developer',
    company: 'Montgomery Software Foundry Inc.',
    dates: '2025 – Present',
    summary: '',
    proof: [
      'Founded a company to sell a custom SaaS solution to a wheelchair accessible transit company in the GTA.',
      'Updated a paper and Excel-based system to an online workflow using Postgres that prevents data loss.',
      'Developed products to customer specifications through regular discussion about their business use case.',
      'Developing a multi-agent system using RAG for a schools to provide control and visibility into student learning.',
      'Secured client data by constructing company systems in compliance with OWASP Top 10.',
    ],
    tags: ['SaaS', 'Product Design', 'Software Architecture', 'Full Stack Development', 'OWASP'],
  },
  {
    role: 'AI Training Contractor',
    company: 'DataAnnotation',
    dates: 'Jan 2025 - May 2025',
    summary:
      'Reviews generated code and evaluates AI responses for efficiency, readability, correctness, and usefulness.',
    proof: [
      'Checked AI responses to complex prompts for accuracy, instruction following and helpfulness. I explained what could be improved about the response.',
      'Created fine-grained response evaluation criteria to improve the quality of AI responses.',
      'Worked on large scale repos, analyzing code diffs and suggesting changes in under an hour.',
    ],
    tags: ['Code Review', 'Quality Assurance', 'AI Evaluation'],
  },
]

type ExperienceScrollState = {
  activeIndex: number
  phase: ExperienceTimelinePhase
  phaseProgress: number
}

type ExperienceTimelinePhase = 'retreat' | 'transition' | 'final'

type ExperienceTimelineState = ExperienceScrollState & {
  incomingIndex: number | null
  outgoingIndex: number
}

type ExperienceTrackStyle = CSSProperties & {
  '--experience-active-index': number
  '--experience-card-count': number
  '--experience-track-height': string
}

type ExperienceCardStyle = CSSProperties & {
  '--experience-card-filter': string
  '--experience-card-index': number
  '--experience-card-opacity': number
  '--experience-card-transform': string
}

const EXPERIENCE_CARD_HOLD_UNITS = 0.75
const EXPERIENCE_CARD_TRANSITION_UNITS = 1

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max)
}

function smoothstep(value: number) {
  const progress = clamp(value, 0, 1)

  return progress * progress * (3 - 2 * progress)
}

function getExperienceTimelineUnits(cardCount: number) {
  return (
    Math.max(cardCount - 1, 0) * (EXPERIENCE_CARD_HOLD_UNITS + EXPERIENCE_CARD_TRANSITION_UNITS) +
    EXPERIENCE_CARD_HOLD_UNITS
  )
}

function getExperienceTimelineState(totalProgress: number, cardCount: number): ExperienceTimelineState {
  const timelineProgress = totalProgress * getExperienceTimelineUnits(cardCount)

  for (let index = 0; index < cardCount - 1; index += 1) {
    const retreatStart = index * (EXPERIENCE_CARD_HOLD_UNITS + EXPERIENCE_CARD_TRANSITION_UNITS)
    const retreatEnd = retreatStart + EXPERIENCE_CARD_HOLD_UNITS
    const transitionEnd = retreatEnd + EXPERIENCE_CARD_TRANSITION_UNITS

    if (timelineProgress <= retreatEnd) {
      return {
        activeIndex: index,
        incomingIndex: null,
        outgoingIndex: index,
        phase: 'retreat',
        phaseProgress: smoothstep((timelineProgress - retreatStart) / EXPERIENCE_CARD_HOLD_UNITS),
      }
    }

    if (timelineProgress <= transitionEnd) {
      return {
        activeIndex: smoothstep((timelineProgress - retreatEnd) / EXPERIENCE_CARD_TRANSITION_UNITS) < 0.5 ? index : index + 1,
        incomingIndex: index + 1,
        outgoingIndex: index,
        phase: 'transition',
        phaseProgress: smoothstep((timelineProgress - retreatEnd) / EXPERIENCE_CARD_TRANSITION_UNITS),
      }
    }
  }

  return {
    activeIndex: cardCount - 1,
    incomingIndex: null,
    outgoingIndex: cardCount - 1,
    phase: 'final',
    phaseProgress: 0,
  }
}

function getExperienceCardMotion(index: number, timelineState: ExperienceTimelineState) {
  const isOutgoingCard = index === timelineState.outgoingIndex
  const isIncomingCard = index === timelineState.incomingIndex

  if (timelineState.phase === 'retreat' && isOutgoingCard) {
    const retreatProgress = timelineState.phaseProgress

    return {
      opacity: 1,
      zIndex: 120,
      filter: `saturate(${1 - retreatProgress * 0.08}) brightness(${1 - retreatProgress * 0.06})`,
      transform: `translate3d(0, 0, ${(retreatProgress * -8).toFixed(3)}rem) rotate(0deg) scale(${(
        1 -
        retreatProgress * 0.045
      ).toFixed(3)})`,
    }
  }

  if (timelineState.phase === 'transition' && isOutgoingCard) {
    const fadeProgress = timelineState.phaseProgress

    return {
      opacity: clamp(1 - fadeProgress * 1.15, 0, 1),
      zIndex: 90,
      filter: `saturate(${0.92 - fadeProgress * 0.18}) brightness(${0.94 - fadeProgress * 0.2})`,
      transform: `translate3d(0, 0, ${(-8 - fadeProgress * 5).toFixed(3)}rem) rotate(0deg) scale(${(
        0.955 -
        fadeProgress * 0.045
      ).toFixed(3)})`,
    }
  }

  if (timelineState.phase === 'transition' && isIncomingCard) {
    const incomingProgress = timelineState.phaseProgress

    return {
      opacity: incomingProgress,
      zIndex: 120,
      filter: `saturate(${0.86 + incomingProgress * 0.14}) brightness(${0.82 + incomingProgress * 0.18})`,
      transform: `translate3d(0, ${((1 - incomingProgress) * 12).toFixed(3)}rem, 0) rotate(0deg) scale(${(
        0.97 +
        incomingProgress * 0.03
      ).toFixed(3)})`,
    }
  }

  if (timelineState.phase === 'final' && isOutgoingCard) {
    return {
      opacity: 1,
      zIndex: 120,
      filter: 'saturate(1) brightness(1)',
      transform: 'translate3d(0, 0, 0) rotate(0deg) scale(1)',
    }
  }

  return {
    opacity: 0,
    zIndex: 0,
    filter: 'saturate(0.72) brightness(0.72)',
    transform: `translate3d(0, ${index > timelineState.outgoingIndex ? '12rem' : '0'}, -13rem) rotate(0deg) scale(0.9)`,
  }
}

function useExperienceScrollProgress(cardCount: number) {
  const trackRef = useRef<HTMLDivElement>(null)
  const [scrollState, setScrollState] = useState<ExperienceTimelineState>({
    activeIndex: 0,
    incomingIndex: null,
    outgoingIndex: 0,
    phase: 'retreat',
    phaseProgress: 0,
  })

  useEffect(() => {
    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const visualViewport = window.visualViewport
    let animationFrame = 0

    const updateScrollState = () => {
      animationFrame = 0

      if (reducedMotionQuery.matches || !trackRef.current) {
        setScrollState((currentState) =>
          currentState.activeIndex === 0 && currentState.phase === 'retreat' && currentState.phaseProgress === 0
            ? currentState
            : { activeIndex: 0, incomingIndex: null, outgoingIndex: 0, phase: 'retreat', phaseProgress: 0 },
        )
        return
      }

      const trackRect = trackRef.current.getBoundingClientRect()
      const trackTop = trackRect.top + window.scrollY
      const viewportHeight = visualViewport?.height ?? window.innerHeight
      const scrollDistance = Math.max(trackRef.current.offsetHeight - viewportHeight, 1)
      const totalProgress = clamp((window.scrollY - trackTop) / scrollDistance, 0, 1)
      const timelineState = getExperienceTimelineState(totalProgress, cardCount)

      setScrollState((currentState) => {
        if (
          currentState.activeIndex === timelineState.activeIndex &&
          currentState.phase === timelineState.phase &&
          Math.abs(currentState.phaseProgress - timelineState.phaseProgress) < 0.003
        ) {
          return currentState
        }

        return {
          activeIndex: timelineState.activeIndex,
          incomingIndex: timelineState.incomingIndex,
          outgoingIndex: timelineState.outgoingIndex,
          phase: timelineState.phase,
          phaseProgress: timelineState.phaseProgress,
        }
      })
    }

    const requestScrollStateUpdate = () => {
      if (animationFrame === 0) {
        animationFrame = window.requestAnimationFrame(updateScrollState)
      }
    }

    updateScrollState()
    window.addEventListener('scroll', requestScrollStateUpdate, { passive: true })
    window.addEventListener('resize', requestScrollStateUpdate)
    visualViewport?.addEventListener('scroll', requestScrollStateUpdate, { passive: true })
    visualViewport?.addEventListener('resize', requestScrollStateUpdate)
    reducedMotionQuery.addEventListener('change', requestScrollStateUpdate)

    return () => {
      if (animationFrame !== 0) {
        window.cancelAnimationFrame(animationFrame)
      }

      window.removeEventListener('scroll', requestScrollStateUpdate)
      window.removeEventListener('resize', requestScrollStateUpdate)
      visualViewport?.removeEventListener('scroll', requestScrollStateUpdate)
      visualViewport?.removeEventListener('resize', requestScrollStateUpdate)
      reducedMotionQuery.removeEventListener('change', requestScrollStateUpdate)
    }
  }, [cardCount])

  return { scrollState, trackRef }
}

export function ExperienceSection() {
  const { scrollState, trackRef } = useExperienceScrollProgress(experiences.length)
  const experienceTrackStyle = {
    '--experience-active-index': scrollState.activeIndex,
    '--experience-card-count': experiences.length,
    '--experience-track-height': `${(getExperienceTimelineUnits(experiences.length) + 1) * 50}svh`,
  } as ExperienceTrackStyle

  return (
    <section className="section-shell content-section experience-section" aria-labelledby="experience-title">
      <div
        className="experience-scroll-track"
        data-experience-active-index={scrollState.activeIndex}
        data-experience-phase={scrollState.phase}
        data-experience-phase-progress={scrollState.phaseProgress.toFixed(3)}
        ref={trackRef}
        style={experienceTrackStyle}
      >
        <div className="experience-sticky-viewport">
          <div className="section-heading-row">
            <h2 id="experience-title">Experience</h2>
          </div>
          <div className="experience-card-stage">
            <div className="experience-list">
              {experiences.map((experience, index) => {
                const cardMotion = getExperienceCardMotion(index, scrollState)

                return (
                  <article
                    className="experience-card"
                    data-experience-card-index={index}
                    data-experience-card-state={
                      index === scrollState.activeIndex
                        ? 'active'
                        : index < scrollState.activeIndex
                          ? 'past'
                          : 'future'
                    }
                    key={`${experience.company}-${experience.role}`}
                    style={
                      {
                        '--experience-card-filter': cardMotion.filter,
                        '--experience-card-index': index,
                        '--experience-card-opacity': cardMotion.opacity,
                        '--experience-card-transform': cardMotion.transform,
                        zIndex: cardMotion.zIndex,
                      } as ExperienceCardStyle
                    }
                  >
                    <div className="experience-card-header">
                      <div>
                        <h3>{experience.role}</h3>
                        <p className="experience-company">{experience.company}</p>
                      </div>
                      <p className="experience-dates">{experience.dates}</p>
                    </div>
                    {experience.summary && <p className="experience-summary">{experience.summary}</p>}
                    <ul className="experience-proof-list">
                      {experience.proof.map((proofPoint) => (
                        <li key={proofPoint}>{proofPoint}</li>
                      ))}
                    </ul>
                    <ul className="experience-tags" aria-label={`${experience.company} skill tags`}>
                      {experience.tags.map((tag) => (
                        <li key={tag}>{tag}</li>
                      ))}
                    </ul>
                  </article>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
