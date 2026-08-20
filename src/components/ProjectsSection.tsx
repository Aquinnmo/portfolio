import { useState } from 'react'
import { flushSync } from 'react-dom'

import cookedIcon from '../assets/portfolio/project_icons/cooked.png'
import githubIcon from '../assets/portfolio/github_logo.svg'
import moneyballIcon from '../assets/portfolio/project_icons/moneyball.png'
import timberIcon from '../assets/portfolio/project_icons/timber.png'
import rpsIcon from '../assets/portfolio/project_icons/rps.png'
import watIcon from '../assets/portfolio/project_icons/wat.png'
import './styling/ProjectsSection.css'
import './styling/layout.css'
import pdfIcon from '../assets/portfolio/pdf_icon.svg'
import { skillBubbleByName, type SkillBubble } from './skillData'

type ProjectLink = {
  label: string
  href: string
}

type ProjectVisualType = 'dumbbell' | 'bus' | 'chain' | 'fire' | 'baseball'

type Project = {
  name: string
  summary: string
  proof: string[]
  stack: string[]
  links: ProjectLink[]
  icon: string
  visualType: ProjectVisualType
}

function ProjectPngMark({ icon }: { icon: string }) {
  return <img className="project-png-mark" src={icon} alt="" aria-hidden="true" />
}

function ProjectGlyph({ type }: { type: ProjectVisualType }) {
  if (type === 'dumbbell') {
    return (
      <svg className="project-visual-icon project-visual-icon--svg" viewBox="0 0 64 64" aria-hidden="true">
        <g transform="scale(2)">
          <path vectorEffect="non-scaling-stroke" d="M7,25c-1.7,0-3-1.3-3-3V10c0-1.7,1.3-3,3-3s3,1.3,3,3v12C10,23.7,8.7,25,7,25z" />
          <path vectorEffect="non-scaling-stroke" d="M25,25c-1.7,0-3-1.3-3-3V10c0-1.7,1.3-3,3-3s3,1.3,3,3v12C28,23.7,26.7,25,25,25z" />
          <path vectorEffect="non-scaling-stroke" d="M23,17H9c-0.6,0-1-0.4-1-1s0.4-1,1-1h14c0.6,0,1,0.4,1,1S23.6,17,23,17z" />
          <path vectorEffect="non-scaling-stroke" d="M2,10.2c-1.2,0.4-2,1.5-2,2.8v6c0,1.3,0.8,2.4,2,2.8V10.2z" />
          <path vectorEffect="non-scaling-stroke" d="M30,10.2v11.6c1.2-0.4,2-1.5,2-2.8v-6C32,11.7,31.2,10.6,30,10.2z" />
        </g>
      </svg>
    )
  }

  if (type === 'bus') {
    return (
      <svg className="project-visual-icon project-visual-icon--svg" viewBox="0 0 64 64" aria-hidden="true">
        <g transform="scale(2.6667)">
          <path vectorEffect="non-scaling-stroke" d="M4.36,17.73H1.5V6.27A1.92,1.92,0,0,1,3.41,4.36h14a1.91,1.91,0,0,1,1.85,1.45l1.3,5.24L22.5,12.2v5.53H19.64" />
          <line vectorEffect="non-scaling-stroke" x1="15.82" y1="17.73" x2="8.18" y2="17.73" />
          <circle vectorEffect="non-scaling-stroke" cx="17.73" cy="17.73" r="1.91" />
          <circle vectorEffect="non-scaling-stroke" cx="6.27" cy="17.73" r="1.91" />
          <line vectorEffect="non-scaling-stroke" x1="4.36" y1="11.05" x2="20.59" y2="11.05" />
          <line vectorEffect="non-scaling-stroke" x1="15.82" y1="7.23" x2="15.82" y2="12" />
          <line vectorEffect="non-scaling-stroke" x1="11.05" y1="7.23" x2="11.05" y2="12" />
          <line vectorEffect="non-scaling-stroke" x1="6.27" y1="7.23" x2="6.27" y2="12" />
          <line vectorEffect="non-scaling-stroke" x1="20.59" y1="14.86" x2="22.5" y2="14.86" />
        </g>
      </svg>
    )
  }

  if (type === 'chain') {
    return (
      <svg className="project-visual-icon project-visual-icon--svg" viewBox="0 0 64 64" aria-hidden="true">
        <g transform="scale(2.6667)">
          <path vectorEffect="non-scaling-stroke" d="M9.14,7.23A4.76,4.76,0,0,1,13,5.32h4.78a4.77,4.77,0,1,1,0,9.54H13a4.77,4.77,0,0,1-4.67-3.81" />
          <path vectorEffect="non-scaling-stroke" d="M15.72,13a4.77,4.77,0,0,0-4.67-3.81H6.27a4.77,4.77,0,0,0,0,9.54h4.78a4.76,4.76,0,0,0,3.37-1.39,3.57,3.57,0,0,0,.44-.52" />
        </g>
      </svg>
    )
  }

  if (type === 'baseball') {
    return (
      <svg className="project-visual-icon project-visual-icon--svg" viewBox="0 0 64 64" aria-hidden="true">
        <g transform="scale(2.6667)">
          <circle vectorEffect="non-scaling-stroke" cx="12" cy="12" r="9.5" />
          <path vectorEffect="non-scaling-stroke" d="M5.5,6.5 Q12,9 18.5,6.5" />
          <path vectorEffect="non-scaling-stroke" d="M5.5,17.5 Q12,15 18.5,17.5" />
        </g>
      </svg>
    )
  }

  return (
    <svg className="project-visual-icon project-visual-icon--svg" viewBox="0 0 64 64" aria-hidden="true">
      <g transform="scale(2.6667)">
        <path style={{ fill: 'var(--color-ice-strong)', stroke: 'none' }} d="M5.926 20.574a7.26 7.26 0 0 0 3.039 1.511c.107.035.179-.105.107-.175-2.395-2.285-1.079-4.758-.107-5.873.693-.796 1.68-2.107 1.608-3.865 0-.176.18-.317.322-.211 1.359.703 2.288 2.25 2.538 3.515.394-.386.537-.984.537-1.511 0-.176.214-.317.393-.176 1.287 1.16 3.503 5.097-.072 8.19-.071.071 0 .212.072.177a8.761 8.761 0 0 0 3.003-1.442c5.827-4.5 2.037-12.48-.43-15.116-.321-.317-.893-.106-.893.351-.036.95-.322 2.004-1.072 2.707-.572-2.39-2.478-5.105-5.195-6.441-.357-.176-.786.105-.75.492.07 3.27-2.063 5.352-3.922 8.059-1.645 2.425-2.717 6.89.822 9.808z" />
      </g>
    </svg>
  )
}

function ExternalArrowIcon() {
  return (
    <svg className="project-link-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 17 17 7" />
      <path d="M9 7h8v8" />
    </svg>
  )
}

function DownloadIcon() {
  return (
    <svg className="project-link-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3.75v9.5" />
      <path d="m7.75 9.75 4.25 4.25 4.25-4.25" />
      <path d="M5 16.75v1.5A2.25 2.25 0 0 0 7.25 20.5h9.5A2.25 2.25 0 0 0 19 18.25v-1.5" />
    </svg>
  )
}

function ProjectLinkIcon({ link }: { link: ProjectLink }) {
  if (link.label.toLowerCase().includes('repository')) {
    return <img className="project-link-icon" src={githubIcon} alt="" aria-hidden="true" data-skill-invert-icon="true" />
  }

  if (link.label.toLowerCase().includes('resume')) {
    return <img className="project-link-icon" src={pdfIcon} alt="" aria-hidden="true" />
  }

  if (link.label.toLowerCase().includes('android')) {
    return <DownloadIcon />
  }

  return <ExternalArrowIcon />
}

const projects: Project[] = [
  {
    name: 'Timber',
    icon: timberIcon,
    visualType: 'dumbbell',
    summary:
      'Mobile-first workout app currently being submitted to the Apple App Store and Google Play Store.',
    proof: [
      'Architected the app around minimizing user interaction, with workouts that auto-fill dynamically.',
      'Made user data portable and consent-gated: data export on demand, with AI and social features exclusively opt-in.',
      'Implemented a simple and easy-to-use interface to make data digestible and visually appealing.',
    ],
    stack: ['React Native', 'Expo', 'Firebase', 'TypeScript', 'Vercel'],
    links: [
      { label: 'Web Preview', href: 'https://pump.adam-montgomery.ca' },
      {
        label: 'Android APK',
        href: 'https://expo.dev/accounts/aquinnmo/projects/pump-pal/builds/f3f89684-df21-4f9c-af2c-ad3c53cdbd48',
      },
      { label: 'Repository', href: 'https://github.com/Aquinnmo/pump-pal' },
    ],
  },
  {
    name: 'Moneyball',
    icon: moneyballIcon,
    visualType: 'baseball',
    summary:
      'Simplifies complex MLB and Statcast analytics into plain-English behaviours instead of overwhelming users with KPIs.',
    proof: [
      'Originally built as a Jupyter Notebook, then expanded into a self-hosted Spring Boot service.',
      'Processed .csv files with 120+ fields and 500+ records to evaluate baseball games at a pitch-by-pitch level.',
      'Set up a daily scheduled task to collect season data, aggregating player and team overviews for expected leaderboards and standings.',
    ],
    stack: ['Kotlin', 'React', 'Spring Boot', 'TypeScript', 'GitHub', 'Render'],
    links: [
      { label: 'View website', href: 'https://aquinnmo.github.io/moneyball' },
      { label: 'Frontend Repository', href: 'https://github.com/Aquinnmo/moneyball' },
      { label: 'Backend Repository', href: 'https://github.com/Aquinnmo/moneyball-spring' },
    ],
  },
  {
    name: 'Custom Enterprise Databasing System',
    icon: watIcon,
    visualType: 'bus',
    summary:
      'Custom maintenance, inventory, and tracking system for a York Region busing company operating hundreds of machines.',
    proof: [
      'Created an easy-to-use set of online maintenance tickets stored in a Postgres database for simple querying.',
      'Designed a role-based login system using tokens and hashed passwords.',
      'Leveraged AI to write unit-tests on edge functions to ensure reliability in production.',
      'Secured client data by constructing the system in compliance with OWASP top 10.',
    ],
    stack: ['Next.js', 'Supabase', 'TypeScript', 'Vercel'],
    links: [],
  },
  {
    name: 'Rock, Paper, Scissors',
    icon: rpsIcon,
    visualType: 'chain',
    summary:
      'Interactive exploration of strategy and prediction in Rock, Paper, Scissors, built around algorithms that beat human play.',
    proof: [
      'Researched human tendencies when playing rock, paper, scissors. I used empirical data to design strategies that exploited human tendencies.',
      'Used dynamic-length Markov Chains to create weighted predicitions based on the user\'s previous moves.',
      'Implemented transition tables, weighted probabilites, and tiebreaker fall-backs to optimize algorithms.',
    ],
    stack: ['Next.js', 'TypeScript', 'Vercel'],
    links: [
      { label: 'View website', href: 'https://rps.adam-montgomery.ca' },
      { label: 'Repository', href: 'https://github.com/Aquinnmo/rps-web' },
    ],
  },
  {
    name: 'Am I Cooked?',
    icon: cookedIcon,
    visualType: 'fire',
    summary:
      'Resume and survey-based readiness tool that gives students Gemini-powered feedback for the job search.',
    proof: [
      'Built with two fellow students to help peers evaluate job-market readiness in under 36 hours.',
      'Supported both survey-based input and resume upload flows for feedback generation. We received 50+ responses in under an hour.',
      'Used Google Gemini to generate practical job-search feedback from user responses.',
    ],
    stack: ['React', 'TypeScript', 'MongoDB', 'Node.js', 'Render', 'Vercel'],
    links: [
      { label: 'View website', href: 'https://cooked.adam-montgomery.ca' },
      { label: 'Repository', href: 'https://github.com/Aquinnmo/am-i-cooked' },
    ],
  },
]

function ProjectStackItem({ skill }: { skill: SkillBubble }) {
  return (
    <li className="project-stack-item" key={skill.name}>
      {skill.icon.kind === 'asset' ? (
        <img
          className="project-stack-icon"
          src={skill.icon.src}
          alt=""
          aria-hidden="true"
          data-skill-invert-icon={skill.invertInDarkMode ? 'true' : undefined}
          data-skill-invert-icon-light={skill.invertInLightMode ? 'true' : undefined}
          data-skill-monochrome={skill.monochrome ? 'true' : undefined}
        />
      ) : (
        <span className="project-stack-icon project-stack-monogram" aria-hidden="true">
          {skill.icon.label}
        </span>
      )}
      <span className="project-stack-name">{skill.name}</span>
    </li>
  )
}

function ProjectContent({ project }: { project: Project }) {
  return (
    <>
      <p className="project-summary">{project.summary}</p>
      {project.proof.length > 0 && (
        <ul className="project-proof-list">
          {project.proof.map((proofPoint) => (
            <li key={proofPoint}>{proofPoint}</li>
          ))}
        </ul>
      )}
      <ul className="project-stack" aria-label={`${project.name} tech stack`}>
        {project.stack.map((stackItem) => {
          const skill = skillBubbleByName.get(stackItem)

          if (!skill) {
            return (
              <li className="project-stack-item" key={stackItem}>
                <span className="project-stack-name">{stackItem}</span>
              </li>
            )
          }

          return <ProjectStackItem key={skill.name} skill={skill} />
        })}
      </ul>
      {project.links.length > 0 && (
        <div className="project-links" aria-label={`${project.name} links`}>
          {project.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className={
                link.label === 'Web Preview' || link.label === 'View website'
                  ? 'project-link-arrow-hover'
                  : undefined
              }
            >
              <ProjectLinkIcon link={link} />
              {link.label}
            </a>
          ))}
        </div>
      )}
    </>
  )
}

export function ProjectsSection() {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0)
  const activeProject = projects[activeProjectIndex]

  function handleProjectSelect(index: number) {
    if (index === activeProjectIndex) return

    if (!document.startViewTransition || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setActiveProjectIndex(index)
      return
    }

    document.startViewTransition(() => flushSync(() => setActiveProjectIndex(index)))
  }

  return (
    <section className="section-shell content-section" aria-labelledby="projects-title">
      <div className="section-heading-row">
        <h2 id="projects-title">Projects</h2>
      </div>
      <div className="project-gallery">
        <div className="project-icon-row" aria-label="Choose featured project">
          {projects.map((project, index) => (
            <button
              className="project-icon-card"
              key={project.name}
              type="button"
              aria-pressed={index === activeProjectIndex}
              data-project-icon-active={index === activeProjectIndex ? 'true' : undefined}
              onClick={() => handleProjectSelect(index)}
              aria-label={`Feature ${project.name}`}
            >
              <ProjectGlyph type={project.visualType} />
            </button>
          ))}
        </div>
        <article
          className="project-card project-focus-card"
          aria-labelledby="active-project-title"
        >
          <div className="project-card-header">
            <h3 id="active-project-title">{activeProject.name}</h3>
          </div>
          <div className="project-focus-mark" aria-hidden="true">
            <ProjectPngMark icon={activeProject.icon} />
          </div>
          <div className="project-focus-content">
            <ProjectContent project={activeProject} />
          </div>
        </article>
      </div>
    </section>
  )
}
