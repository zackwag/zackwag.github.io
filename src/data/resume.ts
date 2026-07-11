export interface Job {
  title: string;
  dateRange: string;
  datetime: string;
  promotion?: string;
  product: string;
  company: string;
  summary: string;
  bullets: string[];
  technologies: string;
}

export interface Skill {
  name: string;
  yearStart: number;
  yearEnd?: number;
}

export const contact = {
  name: 'Zachary Wagner',
  title: 'Staff Software Engineer',
  location: 'Philadelphia, PA',
  email: 'zack@zackwag.com',
  phone: '(267) 909-5307',
  phoneDisplay: '267-909-5307',
  linkedin: { href: 'https://go.zackwag.com/s/cv', label: 'in/zackwag' },
  github: { href: 'https://go.zackwag.com/s/code', label: '@zackwag' },
  avatar: 'https://avatars.githubusercontent.com/u/5261774',
};

export const about = [
  `I am a Staff Software Engineer with {yearsExperience} of experience designing and building distributed systems at scale. I specialize in Java and Go, with a background spanning C#, Python, and TypeScript. I hold a Bachelor of Science in Computer Science from West Chester University and live in South Philadelphia with my wife Ellen, our daughter Amelia, our son Robert, and our two beagles.`,
  `Outside of work, I enjoy home automation, collecting classic rock vinyl, films, gaming, and cheering for the Phillies — usually all at once.`,
];

export const skills: Skill[] = [
  { name: 'Go', yearStart: 2024 },
  { name: 'k8s', yearStart: 2023 },
  { name: 'TypeScript', yearStart: 2019, yearEnd: 2023 },
  { name: 'Python', yearStart: 2017 },
  { name: 'Java', yearStart: 2017 },
  { name: 'C#', yearStart: 2006, yearEnd: 2017 },
];

export const jobs: Job[] = [
  {
    title: 'Staff Software Engineer',
    dateRange: '2023 – Present',
    datetime: '2023',
    product: 'Bolt Cloud',
    company: 'Warner Bros. Discovery',
    summary: 'Co-lead of the Boundary Orchestration and Enrichment team at Warner Bros. Discovery.',
    bullets: [
      'Co-owns <strong>Kompass</strong>, an Istio Gateway External Processor that applies configurable Kubernetes CRD-based "Boundary Concerns" to govern requests at the cluster edge',
      'Designed and implemented fixed-window rate limiting and S2S Okta JWT authentication as Boundary Concerns',
      'Co-owns <strong>Geolocation</strong>, a service that resolves IPv4/IPv6 addresses to geographic data via Digital Element',
      'Authors LADRs and ADRs and drives cross-team consensus on platform engineering standards',
    ],
    technologies: 'Java, Go, Terraform',
  },
  {
    title: 'Senior Software Engineer',
    dateRange: '2017 – 2023',
    datetime: '2017',
    promotion: 'Joined as Software Engineer, promoted to Senior Software Engineer',
    product: 'xfinity xFi / Xfinity',
    company: 'Comcast',
    summary: 'Joined the xFi Orchestration team at Comcast, evolving with the platform from a monolithic hypermedia API to a suite of modern microservices.',
    bullets: [
      'Contributed to and eventually led decomposition of a monolithic gateway management API into traditional JSON/Spring Boot microservices, using Swagger to define API semantics',
      'Designed and implemented a unified messaging bus on SQS that allowed multiple teams to publish notifications — routing to SMS, email, push, and set-top box channels — reducing cross-team complexity and centralizing notification ownership',
      'Owned notification infrastructure for the xFi/Xfinity app end-to-end, including original setup of APNs (Apple Push Notification service) and Cloudbase integrations',
      'Grew from individual contributor to team lead across the full tenure',
    ],
    technologies: 'Java, Python, TypeScript',
  },
  {
    title: 'Technical Architect',
    dateRange: '2006 – 2017',
    datetime: '2006',
    product: 'Website and CRM System',
    company: 'Greater Philadelphia Chamber of Commerce',
    summary: 'Sole developer on a 4-person IT team at the Greater Philadelphia Chamber of Commerce, starting as an intern and growing into the organization\'s primary technical architect.',
    bullets: [
      'Rewrote the public-facing website in ASP.NET C# and built custom extensions to the organization\'s Weblink CRM, including event management, member management, and a prospecting/sales pipeline system',
      'Integrated a payment gateway, replacing a manual process where staff were hand-writing credit card information — significantly improving security and operational efficiency',
      'Built a room scheduling minisite in ASP.NET MVC, backed by a cached Exchange database, displayed on iPads outside meeting rooms to show real-time availability at a glance',
      'Solely responsible for all technical decisions, development, and maintenance across the organization\'s digital properties for over a decade',
    ],
    technologies: 'C#, Microsoft T-SQL',
  },
];

export const education = {
  degree: 'Bachelor of Science',
  field: 'Computer Science',
  school: 'West Chester University',
  dateRange: '2002 – 2006',
  datetime: '2002',
};

export const experienceStartYear = 2006;
