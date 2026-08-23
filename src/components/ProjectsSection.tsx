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

type Project = {
  name: string
  proof: string[]
  stack: string[]
  links: ProjectLink[]
  icon: string
}

function ProjectPngMark({ icon }: { icon: string }) {
  return <img className="project-png-mark" src={icon} alt="" aria-hidden="true" />
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
    proof: [
      'Currently submitting my mobile-first workout app to the iOS and the Android app stores.',
      'Architected my app around minimizing user interaction, having workouts auto-fill dynamically.',
      'Made data portable and consent-gated: users have data export on demand, with AI and social features being exclusively opt-in.',
    ],
    stack: ['React Native', 'Expo', 'Firebase', 'TypeScript', 'Cloudflare'],
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
    proof: [
      'Simplified complex analytics from the official MLB and Statcast APIs to describe behaviours in plain English instead of overwhelming users with numerical KPIs they do not understand.',
      'Originally built as a Jupyter Notebook then expanded into a self-hosted Spring Boot service.',
      'Processed .csv files with 120+ fields with 500+ records for each game to evaluate at a pitch-by-pitch level.',
      'A daily scheduled task collects season data, aggregating player and team overviews for expected leaderboards and standings.',
    ],
    stack: ['Kotlin', 'Spring Boot', 'Jupyter Notebook', 'React'],
    links: [
      { label: 'View website', href: 'https://moneyball.adam-montgomery.ca' },
      { label: 'Frontend Repository', href: 'https://github.com/Aquinnmo/moneyball' },
      { label: 'Backend Repository', href: 'https://github.com/Aquinnmo/moneyball-spring' },
    ],
  },
  {
    name: 'Custom Enterprise Databasing System',
    icon: watIcon,
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
              <ProjectPngMark icon={project.icon} />
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
