export type FoundryAction = {
  label: string
  href: string
  variant: 'primary' | 'secondary'
}

export type FoundryService = {
  title: string
  description: string
  problem: string
  outcome: string
}

export type FoundryItem = {
  title: string
  description: string
}

export type FoundryProcessStep = FoundryItem

export type FoundryCaseStudy = {
  eyebrow: string
  title: string
  summary: string
  problem: string
  approach: string
  outcome: string
}

export type FoundryFounderContent = {
  title: string
  description: string
  closing: string
  strengths: string[]
}

export const foundryContactHref = 'mailto:adammontcompany@gmail.com'

export const heroContent = {
  title: 'Montgomery Software Foundry Inc.',
  eyebrow: 'Custom software for small business operations',
  summary:
    'Practical custom software for small businesses that need dependable tools, cleaner operations, and to move away from fragile manual workflows.',
  detail:
    'The Foundry turns paper, spreadsheets, and scattered business processes into focused web software built around the way the work actually gets done.',
}

export const contactActions: FoundryAction[] = [
  {
    label: 'Get in touch',
    href: foundryContactHref,
    variant: 'primary',
  },
  {
    label: 'Current work',
    href: '#current-work',
    variant: 'secondary',
  },
  {
    label: 'Let us help',
    href: foundryContactHref,
    variant: 'secondary',
  },
]

export const caseStudy: FoundryCaseStudy = {
  eyebrow: 'Current work',
  title: 'Modernizing Fleet Maintenance',
  summary:
    'We created fleet management software for a busing company to help them more accurately maintain their fleet, giving them insights into when vehicles need a check up.',
  problem:
    'A transit company in the GTA relied on paper and Excel-based workflows that made records harder to protect and act on.',
  approach:
    'We documented customer specifications and shaped them into a custom application for the way the business actually operates.',
  outcome:
    'The new digital workflow is reduces manual handling, prevents data loss, and makes everyday information easier to manage.',
}

export const services: FoundryService[] = [
  {
    title: 'Legacy System Modernization',
    description:
      'Replace brittle tools with safer, faster systems that match how your business workflow.',
    problem: 'For teams depending on paper and spreadsheets or tools that only one person knows how to operate.',
    outcome: 'Less manual re-entry, clearer ownership, and a system that can grow with the business.',
  },
  {
    title: 'Custom-Built Web Applications',
    description:
      'Design and build dependable tools, portals, and workflows around your exact needs.',
    problem: 'For workflows where off-the-shelf software doesn\'t quite fit, and forces the business to work around the tool.',
    outcome: 'Purpose-built software for the operations that off-the-shelf tools do just can\'t do.',
  },
  {
    title: 'Operational Dashboards',
    description:
      'Turn scattered business data into clear dashboards that make performance and priorities easy to track.',
    problem: 'For owners and operators who need status, exceptions, and priorities visible without hunting through files.',
    outcome: 'A clearer operating picture for owners who need to scan status, priorities, and risk quickly.',
  },
]

export const differentiators: FoundryItem[] = [
  {
    title: 'Partnership Mindset',
    description:
      'Work stays focused on your goals, constraints, and operations from the first conversation onward.',
  },
  {
    title: 'Full Stack Craftsmanship',
    description:
      'We handle what you see and what you don\'t need to see, presented to you as one connected system.',
  },
  {
    title: 'Security First Delivery',
    description:
      'Every build is grounded in secure coding practices, reviews, and release habits that support confident launches.',
  },
]

export const engagementSteps: FoundryProcessStep[] = [
  {
    title: 'Discover',
    description: 'Map your workflow, pain points, and success criteria.',
  },
  {
    title: 'Visualize',
    description: 'Turn the plan into screens, roles, and data flow.',
  },
  {
    title: 'Build',
    description: 'We work our magic to develop the product without you touching any code.',
  },
  {
    title: 'Launch',
    description: 'Move the team onto the new workflow with a smooth handoff.',
  },
  {
    title: 'Support',
    description: 'Refine the system as usage reveals new needs.',
  },
]

export const founderContent: FoundryFounderContent = {
  title: 'Meet the Founder',
  description:
    'I established Montgomery Software Foundry Inc. in summer 2025 to help small business owners use software without having to decode the technology first. Our expertise lets you specialize in doing what you do best.',
  closing: 'If a workflow is slowing the business down, the first step is a clear conversation about what needs to change.',
  strengths: ['Full stack development', 'Product design', 'Secure delivery', 'Client specifications'],
}
