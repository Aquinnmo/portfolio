import awsIcon from '../assets/portfolio/skills/aws_logo.svg'
import bedrockIcon from '../assets/portfolio/skills/bedrock_logo.svg'
import cIcon from '../assets/portfolio/skills/c_logo.svg'
import claudeIcon from '../assets/portfolio/skills/claude_logo.svg'
import cloudflareIcon from '../assets/portfolio/skills/cloudflare_logo.svg'
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
import mcpServerIcon from '../assets/portfolio/skills/mcp_server.svg'
import nextIcon from '../assets/portfolio/skills/nextjs_logo.svg'
import nodeIcon from '../assets/portfolio/skills/nodejs_logo.svg'
import openaiIcon from '../assets/portfolio/skills/openai_logo.svg'
import pythonIcon from '../assets/portfolio/skills/python_logo.svg'
import reactIcon from '../assets/portfolio/skills/react_logo.svg'
import redisIcon from '../assets/portfolio/skills/redis_logo.svg'
import springBootIcon from '../assets/portfolio/skills/spring_boot_logo.svg'
import supabaseIcon from '../assets/portfolio/skills/supabase_logo.svg'
import typescriptIcon from '../assets/portfolio/skills/typescript_logo.svg'
import vercelIcon from '../assets/portfolio/skills/vercel_logo.svg'
import azureDevOpsIcon from '../assets/portfolio/skills/ado_logo.svg'
import postgresIcon from '../assets/portfolio/skills/postgres_logo.svg'
import sumoLogicIcon from '../assets/portfolio/skills/sumologic_logo.svg'
import slackIcon from '../assets/portfolio/skills/slack_logo.svg'

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
  { name: 'Cloudflare', group: 'tools', icon: { kind: 'asset', src: cloudflareIcon }, color: '#F38020' },
  { name: 'Supabase', group: 'tools', icon: { kind: 'asset', src: supabaseIcon }, color: '#3ecf8e' },
  { name: 'Firebase', group: 'tools', icon: { kind: 'asset', src: firebaseIcon }, color: '#ffca28' },
  { name: 'Docker', group: 'tools', icon: { kind: 'asset', src: dockerIcon }, color: '#2496ed' },
  { name: 'Redis', group: 'tools', icon: { kind: 'asset', src: redisIcon }, color: '#C6302B' },
  { name: 'Kubernetes', group: 'tools', icon: { kind: 'asset', src: kubernetesIcon }, color: '#326ce5' },
  { name: 'AWS', group: 'tools', icon: { kind: 'asset', src: awsIcon }, color: '#f3fbff', invertInDarkMode: true },
  { name: 'Azure DevOps', group: 'tools', icon: { kind: 'asset', src: azureDevOpsIcon }, color: '#0078D4' },
  { name: 'SumoLogic', group: 'tools', icon: { kind: 'asset', src: sumoLogicIcon }, color: '#00AEEF' },
  { name: 'PostGres', group: 'tools', icon: { kind: 'asset', src: postgresIcon }, color: '#FFF', invertInDarkMode: true },

  { name: 'React', group: 'frameworks', icon: { kind: 'asset', src: reactIcon }, color: '#61dafb' },
  { name: 'Spring Boot', group: 'frameworks', icon: { kind: 'asset', src: springBootIcon }, color: '#6DB33F' },
  { name: 'Next.js', group: 'frameworks', icon: { kind: 'asset', src: nextIcon }, color: '#f3fbff', invertInDarkMode: true },
  { name: 'React Native', group: 'frameworks', icon: { kind: 'asset', src: reactIcon }, color: '#f3fbff', monochrome: true },
  { name: 'Expo', group: 'frameworks', icon: { kind: 'asset', src: expoIcon }, color: '#f3fbff', invertInDarkMode: true },
  { name: 'Node.js', group: 'frameworks', icon: { kind: 'asset', src: nodeIcon }, color: '#5fa04e', invertInDarkMode: true },
  { name: 'Slack Bolt', group: 'frameworks', icon: { kind: 'asset', src: slackIcon }, color: '#36C5F0' },

  { name: 'AWS Bedrock', group: 'ai', icon: { kind: 'asset', src: bedrockIcon }, color: '#01A88D' },
  { name: 'ChatGPT API', group: 'ai', icon: { kind: 'asset', src: openaiIcon }, color: '#f3fbff', invertInDarkMode: true },
  { name: 'Claude Code', group: 'ai', icon: { kind: 'asset', src: claudeIcon }, color: '#d77655' },
  { name: 'MCP Servers', group: 'ai', icon: { kind: 'asset', src: mcpServerIcon }, color: '#c5efff', invertInDarkMode: true },
  { name: 'Codex', group: 'ai', icon: { kind: 'asset', src: codexIcon }, color: '#f3fbff', invertInDarkMode: true },
  { name: 'Gemini API', group: 'ai', icon: { kind: 'asset', src: geminiIcon }, color: '#8ab4f8' },
]

export const skillBubbleByName = new Map<string, SkillBubble>(
  skillBubbles.map((skill) => [skill.name, skill]),
)
