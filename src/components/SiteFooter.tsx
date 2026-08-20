import resumePdf from '../assets/portfolio/adam_montgomery_resume.pdf'
import './styling/footer.css'
import emailIcon from '../assets/portfolio/email_icon.svg'
import githubIcon from '../assets/portfolio/github_logo.svg'
import linkedInIcon from '../assets/portfolio/LinkedIn_icon.svg'
import pdfIcon from '../assets/portfolio/pdf_icon.svg'

type FooterLink = {
  label: string
  href: string
  icon: string
  external: boolean
  emphasis?: 'primary'
  invertInDarkMode?: boolean
  invertInLightMode?: boolean
}

const footerLinks: FooterLink[] = [
  {
    label: 'GitHub',
    href: 'https://github.com/Aquinnmo',
    icon: githubIcon,
    external: true,
    emphasis: 'primary',
    invertInLightMode: true,
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/adam-montgomery-05a936315',
    icon: linkedInIcon,
    external: true,
    emphasis: 'primary',
  },
  {
    label: 'Download My Resume',
    href: resumePdf,
    icon: pdfIcon,
    external: true,
    invertInDarkMode: true,
  },
  {
    label: 'Email',
    href: 'mailto:adammontcompany@gmail.com',
    icon: emailIcon,
    external: false,
    invertInDarkMode: true,
  },
]

export function SiteFooter() {
  return (
    <footer className="site-footer" aria-label="Contact">
      <div className="footer-contact">
        <h2>Let&rsquo;s Build</h2>
        <p className="footer-summary">
          I&rsquo;m searching for software engineering, data science, and GenAI roles for the Fall 2026 semester.
        </p>
        <nav className="footer-links" aria-label="Contact links">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              className={`footer-link ${link.emphasis === 'primary' ? 'footer-link-primary' : ''}`}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noreferrer' : undefined}
              data-skill-invert-icon={link.invertInDarkMode ? 'true' : undefined}
              data-skill-invert-icon-light={link.invertInLightMode ? 'true' : undefined}
            >
              <img src={link.icon} alt="" aria-hidden="true" />
              <span>{link.label}</span>
            </a>
          ))}
        </nav>
      </div>
    </footer>
  )
}
