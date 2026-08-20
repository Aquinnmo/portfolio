import aiFeatureIcon from '../assets/portfolio/skills/ai_brain_data.svg'
import awsIcon from '../assets/portfolio/skills/aws_logo.svg'
import cIcon from '../assets/portfolio/skills/c_logo.svg'
import claudeIcon from '../assets/portfolio/skills/claude_logo.svg'
import codexIcon from '../assets/portfolio/skills/codex_logo.svg'
import cssIcon from '../assets/portfolio/skills/css_logo.svg'
import dockerIcon from '../assets/portfolio/skills/docker_logo.svg'
import expoIcon from '../assets/portfolio/skills/expo_logo.svg'
import firebaseIcon from '../assets/portfolio/skills/firebase_logo.svg'
import geminiIcon from '../assets/portfolio/skills/gemini_logo.svg'
import githubIcon from '../assets/portfolio/skills/github_logo.svg'
import javaIcon from '../assets/portfolio/skills/java_logo.svg'
import kotlinIcon from '../assets/portfolio/skills/kotlin_logo.svg'
import kubernetesIcon from '../assets/portfolio/skills/kubernetes_logo.svg'
import mongoIcon from '../assets/portfolio/skills/mongodb_logo.svg'
import mcpServerIcon from '../assets/portfolio/skills/mcp_server.svg'
import nextIcon from '../assets/portfolio/skills/nextjs_logo.svg'
import nodeIcon from '../assets/portfolio/skills/nodejs_logo.svg'
import pythonIcon from '../assets/portfolio/skills/python_logo.svg'
import reactIcon from '../assets/portfolio/skills/react_logo.svg'
import redisIcon from '../assets/portfolio/skills/redis_logo.svg'
import renderIcon from '../assets/portfolio/skills/render_logo.svg'
import springBootIcon from '../assets/portfolio/skills/spring_boot_logo.svg'
import supabaseIcon from '../assets/portfolio/skills/supabase_logo.svg'
import typescriptIcon from '../assets/portfolio/skills/typescript_logo.svg'
import vercelIcon from '../assets/portfolio/skills/vercel_logo.svg'
import workflowIcon from '../assets/portfolio/skills/workflow_diagram.svg'

export type SkillGroupId = 'languages' | 'tools' | 'frameworks' | 'ai'

export type SkillIcon =
  | {
      kind: 'asset'
      src: string
    }
  | {
      kind: 'monogram'
      label: string
    }

export type SkillBubble = {
  name: string
  group: SkillGroupId
  icon: SkillIcon
  color: string
  invertInDarkMode?: boolean
  invertInLightMode?: boolean
  monochrome?: boolean
}

export const skillBubbles: SkillBubble[] = [
  { name: 'Kotlin', group: 'languages', icon: { kind: 'asset', src: kotlinIcon }, color: '#B125EA' },
  { name: 'TypeScript', group: 'languages', icon: { kind: 'asset', src: typescriptIcon }, color: '#3178c6' },
  { name: 'Python', group: 'languages', icon: { kind: 'asset', src: pythonIcon }, color: '#ffd43b' },
  { name: 'Java', group: 'languages', icon: { kind: 'asset', src: javaIcon }, color: '#e76f00' },
  { name: 'C', group: 'languages', icon: { kind: 'asset', src: cIcon }, color: '#659ad2' },
  { name: 'CSS', group: 'languages', icon: { kind: 'asset', src: cssIcon }, color: '#1572b6' },

  { name: 'GitHub', group: 'tools', icon: { kind: 'asset', src: githubIcon }, color: '#f3fbff', invertInDarkMode: true },
  { name: 'Vercel', group: 'tools', icon: { kind: 'asset', src: vercelIcon }, color: '#f3fbff', invertInDarkMode: true },
  { name: 'Render', group: 'tools', icon: { kind: 'asset', src: renderIcon }, color: '#46e3b7', invertInDarkMode: true },
  { name: 'Supabase', group: 'tools', icon: { kind: 'asset', src: supabaseIcon }, color: '#3ecf8e' },
  { name: 'Firebase', group: 'tools', icon: { kind: 'asset', src: firebaseIcon }, color: '#ffca28' },
  { name: 'MongoDB', group: 'tools', icon: { kind: 'asset', src: mongoIcon }, color: '#47a248' },
  { name: 'Docker', group: 'tools', icon: { kind: 'asset', src: dockerIcon }, color: '#2496ed' },
  { name: 'Redis', group: 'tools', icon: { kind: 'asset', src: redisIcon }, color: '#C6302B' },
  { name: 'Kubernetes', group: 'tools', icon: { kind: 'asset', src: kubernetesIcon }, color: '#326ce5' },
  { name: 'AWS', group: 'tools', icon: { kind: 'asset', src: awsIcon }, color: '#f3fbff', invertInDarkMode: true },
  { name: 'Azure DevOps', group: 'tools', icon: { kind: 'monogram', label: 'Az' }, color: '#0078D4' },
  { name: 'SumoLogic', group: 'tools', icon: { kind: 'monogram', label: 'SL' }, color: '#00AEEF' },
  { name: 'PostGres', group: 'tools', icon: { kind: 'monogram', label: 'Pg' }, color: '#336791' },

  { name: 'React', group: 'frameworks', icon: { kind: 'asset', src: reactIcon }, color: '#61dafb' },
  { name: 'Spring Boot', group: 'frameworks', icon: { kind: 'asset', src: springBootIcon }, color: '#6DB33F' },
  { name: 'Next.js', group: 'frameworks', icon: { kind: 'asset', src: nextIcon }, color: '#f3fbff', invertInDarkMode: true },
  { name: 'React Native', group: 'frameworks', icon: { kind: 'asset', src: reactIcon }, color: '#f3fbff', monochrome: true },
  { name: 'Expo', group: 'frameworks', icon: { kind: 'asset', src: expoIcon }, color: '#f3fbff', invertInDarkMode: true },
  { name: 'Node.js', group: 'frameworks', icon: { kind: 'asset', src: nodeIcon }, color: '#5fa04e', invertInDarkMode: true },
  { name: 'Bolt', group: 'frameworks', icon: { kind: 'monogram', label: '⚡' }, color: '#4A154B' },

  { name: 'Gemini API', group: 'ai', icon: { kind: 'asset', src: geminiIcon }, color: '#8ab4f8' },
  { name: 'Claude Code', group: 'ai', icon: { kind: 'asset', src: claudeIcon }, color: '#d77655' },
  { name: 'Codex', group: 'ai', icon: { kind: 'asset', src: codexIcon }, color: '#f3fbff', invertInDarkMode: true },
  { name: 'AI Feature Design', group: 'ai', icon: { kind: 'asset', src: aiFeatureIcon }, color: '#87dbff', invertInDarkMode: true },
  {
    name: 'Workflows and Integrations',
    group: 'ai',
    icon: { kind: 'asset', src: workflowIcon },
    color: '#b8f7d4',
    invertInDarkMode: true,
  },
  { name: 'MCP Servers', group: 'ai', icon: { kind: 'asset', src: mcpServerIcon }, color: '#c5efff', invertInDarkMode: true },
]

export const skillBubbleByName = new Map<string, SkillBubble>(
  skillBubbles.map((skill) => [skill.name, skill]),
)
