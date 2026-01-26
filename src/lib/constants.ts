import type { About, Skill, Experience, Project } from './sanity';

// Hero Section
export const HERO_DESCRIPTION = "Senior Frontend Engineer specializing mostly in React & TypeScript, with full-stack capabilities. Building scalable, performant web applications with modern JavaScript frameworks.";

export const HERO_TITLE = {
  primary: "ANTONIS",
  secondary: "SKANDALIS",
};

export const HERO_CTA = {
  primaryLabel: "View Projects",
  primaryHref: "/projects",
  secondaryLabel: "Get in Touch",
  secondaryHref: "/contact",
};

// About Section
export const DEFAULT_ABOUT: About = {
  _id: 'default',
  backgroundParagraphs: [
    "Hey, I'm <strong>Antonis</strong>, and I've been building web applications for 10 years. What keeps me engaged is the challenge of creating interfaces that feel intuitive and perform well under real-world conditions.",
    "My experience spans startups and established companies, with a consistent focus on clean code, performance, and scalability. React and TypeScript are my primary tools, though I regularly work across the full stack when the project requires it.",
    "When I'm not shipping features, you'll find me tinkering with new tech, crafting a new idea or just playing piano."
  ],
  languages: [
    { language: "Greek", proficiency: "Native" },
    { language: "English", proficiency: "Fluent" },
    { language: "French", proficiency: "Conversational" }
  ],
  softSkills: [
    "Effective Communication",
    "Ownership & Accountability",
    "Cross-functional Collaboration",
    "Technical Leadership & Mentoring",
    "Decision Making",
    "Agile/Scrum Methodologies"
  ]
};

export const DEFAULT_SKILLS: Skill[] = [
  { _id: '1', name: 'TypeScript', level: 85, order: 1 },
  { _id: '2', name: 'JavaScript', level: 90, order: 2 },
  { _id: '3', name: 'React.js', level: 95, order: 3 },
  { _id: '4', name: 'Tailwind CSS', level: 95, order: 4 },
  { _id: '5', name: 'Jest', level: 85, order: 5 },
  { _id: '6', name: 'Design Systems', level: 90, order: 6 },
  { _id: '7', name: 'GraphQL', level: 75, order: 7 },
  { _id: '8', name: 'Cypress', level: 80, order: 8 },
  { _id: '9', name: 'Next.js', level: 85, order: 9 },
  { _id: '10', name: 'Vue.js', level: 70, order: 10 },
  { _id: '11', name: 'Jotai', level: 85, order: 11 },
  { _id: '12', name: 'Redux', level: 70, order: 12 },
  { _id: '13', name: 'React Testing Library', level: 85, order: 13 },
  { _id: '14', name: 'Micro-frontends', level: 90, order: 14 },
  { _id: '15', name: 'Performance Optimization', level: 85, order: 15 },
  { _id: '16', name: 'Node.js', level: 75, order: 16 },
  { _id: '17', name: 'Express.js', level: 70, order: 17 },
  { _id: '18', name: 'PostgreSQL', level: 75, order: 18 },
];

export const DEFAULT_EXPERIENCES: Experience[] = [
  {
    _id: '1',
    title: 'Senior Frontend Software Engineer',
    company: 'Blueground',
    location: 'Remote',
    startDate: '2021-06-01',
    isCurrent: true,
    description: 'Collaborating with cross-functional teams of 40+ members to deliver high-impact features for high-traffic applications managing 120K+ annual bookings',
    achievements: [
      'Led development of micro-frontend architecture serving 7+ teams, enabling 3x faster feature delivery and reducing deployment dependencies by 60%',
      'Architected reusable UI component library adopted across 10+ applications company-wide, reducing development time by 30%',
      'Optimized application performance achieving 99.9% uptime and reducing initial load time by 40%',
      'Established frontend best practices, coding standards, and documentation improving team velocity',
      'Mentored junior engineers through structured workshops, code reviews, and pair programming sessions'
    ],
    technologies: ['React', 'TypeScript', 'Micro-frontends', 'Design Systems', 'Tailwind CSS', 'Storybook', 'Jest', 'React Testing Library', 'GraphQL', 'CI/CD', 'Responsive Design'],
    order: 1
  },
  {
    _id: '2',
    title: 'Full-stack Software Engineer (Contractor)',
    company: 'Paris School of Economics',
    location: 'Remote',
    startDate: '2017-04-01',
    isCurrent: true,
    description: 'Backend engineer for wid.world project, maintaining and enhancing AWS infrastructure serving global economic research data',
    achievements: [
      'Built full-stack solutions using React and Express.js for data visualization and management interfaces',
      'Optimized database queries and API performance handling large-scale economic datasets'
    ],
    technologies: ['React', 'Express.js', 'AWS', 'PostgreSQL', 'Node.js'],
    order: 2
  },
  {
    _id: '3',
    title: 'Mid-Senior Frontend Software Engineer',
    company: 'Omilia',
    location: 'Remote',
    startDate: '2020-03-01',
    endDate: '2021-03-01',
    description: 'Developed enterprise-grade conversational AI applications using React, TypeScript, Redux, and Styled Components',
    achievements: [
      'Created company-wide reusable component library increasing development consistency by 50%',
      'Implemented unit testing framework and CI/CD pipelines improving code reliability and reducing deployment time by 35%',
      'Collaborated with UX team to deliver accessible, responsive interfaces meeting WCAG 2.1 AA standards'
    ],
    technologies: ['React', 'TypeScript', 'Redux', 'Styled Components', 'Storybook', 'Jest', 'React Testing Library', 'GraphQL', 'CI/CD'],
    order: 3
  },
  {
    _id: '4',
    title: 'Frontend Software Engineer',
    company: 'OPAP',
    location: 'Athens, Greece',
    startDate: '2018-04-01',
    endDate: '2020-04-01',
    description: 'Enhanced operational efficiency for sales operations teams by developing internal tools managing 1,000+ retail locations',
    achievements: [
      'Built real-time systems tracking store development lifecycle from location scouting through contract signing, renovation, and launch',
      'Implemented responsive design patterns ensuring seamless experience across desktop and mobile devices'
    ],
    technologies: ['React', 'JavaScript', 'Responsive Design'],
    order: 4
  },
  {
    _id: '5',
    title: 'Software Engineer',
    company: 'Ecole Polytechnique (LIX Research Team)',
    location: 'Paris, France',
    startDate: '2016-03-01',
    endDate: '2016-11-01',
    description: 'Built and managed large-scale PostgreSQL database for wid.world project integrating multiple international data sources',
    achievements: [
      'Developed admin interface for database operations using React, improving data management efficiency by 40%',
      'Integrated RESTful APIs and deployed infrastructure on AWS (EC2, S3, RDS)'
    ],
    technologies: ['Python', 'PostgreSQL', 'AWS', 'EC2', 'S3', 'RDS', 'Lambda', 'API Gateway'],
    order: 5
  },
  {
    _id: '6',
    title: 'B.Sc. in Informatics',
    company: 'Athens University of Economics and Business',
    location: 'Athens, Greece',
    startDate: '2011-09-01',
    endDate: '2016-07-01',
    description: 'Studied computer science with a focus on web engineering and software development',
    order: 6
  }
];

// Projects Section
export const DEFAULT_PROJECTS: Project[] = [
  {
    _id: '1',
    title: "ioannisloukis.com",
    slug: "ioannisloukis",
    description: "Personal photography portfolio for my client (Ioannis Loukis), who specializes in interior and architectural photography.",
    content: ["Personal photography portfolio for my client (Ioannis Loukis), who specializes in interior and architectural photography. Built with Nuxt.js and Vue.js, achieving 90+ Lighthouse scores across Performance, Accessibility, Best Practices, and SEO. Features clean, custom modern design with optimized content delivery and GSAP animations."],
    tags: ["Nuxt.js", "Vue.js", "Tailwind CSS", "GSAP", "PWA", "SEO"],
    highlights: [
      "Achieved 90+ Lighthouse scores across all metrics",
      "Progressive Web App with offline capabilities",
      "GSAP animations for smooth portfolio interactions"
    ],
    featured: true,
    publishedAt: new Date().toISOString()
  },
  {
    _id: '2',
    title: "mathisieinai.gr",
    slug: "mathisieinai",
    description: "Website for a local learning center in Paros, Greece.",
    content: ["Website for a local learning center in Paros, Greece. Built with Next.js and React, optimized for local SEO to help students find courses and programs. Achieved 90+ Lighthouse scores with PWA capabilities for easy access on mobile devices."],
    tags: ["Next.js", "React", "Tailwind CSS", "PWA", "SEO"],
    highlights: [
      "Achieved 90+ Lighthouse scores across all metrics",
      "Progressive Web App functionality",
      "Local SEO optimization for Paros market"
    ],
    featured: true,
    publishedAt: new Date().toISOString()
  },
  {
    _id: '3',
    title: "alikirestaurant.com",
    slug: "aliki-restaurant",
    description: "Website for a local restaurant in Paros island, Greece.",
    content: ["Website for a local restaurant in Paros island, Greece. Built with Next.js and React, featuring menu displays, location information, and contact details. Mobile-first PWA design ensures seamless browsing for tourists and locals, with 90+ Lighthouse scores."],
    tags: ["Next.js", "React", "Tailwind CSS", "PWA", "SEO"],
    highlights: [
      "Achieved 90+ Lighthouse scores across all metrics",
      "Progressive Web App for offline menu access",
      "Optimized for mobile-first restaurant browsing"
    ],
    featured: true,
    publishedAt: new Date().toISOString()
  },
  {
    _id: '4',
    title: "helenstudios.com",
    slug: "helen-studios",
    description: "Website for local apartments in Paros, Greece.",
    content: ["Website for local apartments in Paros, Greece. Built with GatsbyJS and TypeScript, integrated with a CMS for easy content management. Features optimized image galleries showcasing the apartments, with PWA capabilities and 90+ Lighthouse scores."],
    tags: ["GatsbyJS", "React", "TypeScript", "Tailwind CSS", "CMS", "PWA"],
    highlights: [
      "Achieved 90+ Lighthouse scores across all metrics",
      "CMS integration for easy content updates",
      "Progressive Web App for booking convenience"
    ],
    featured: true,
    publishedAt: new Date().toISOString()
  },
  {
    _id: '5',
    title: "bugbuster.gr",
    slug: "bugbuster",
    description: "Service-based business website with contact forms and service information.",
    content: ["Service-based business website with contact forms and service information. Built with React and Next.js, achieving 90+ Lighthouse scores across Performance, Accessibility, Best Practices, and SEO. Features clean, custom modern design with optimized content delivery and GSAP animations."],
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    highlights: [
      "Achieved 90+ Lighthouse scores across all metrics",
      "Accessible forms and navigation",
      "Local SEO optimization for service discovery"
    ],
    featured: true,
    publishedAt: new Date().toISOString()
  },
  {
    _id: '6',
    title: "athanasiakidonieos.com",
    slug: "athanasiakidonieos",
    description: "Professional services website with clear service offerings and contact information.",
    content: ["Professional services website with clear service offerings and contact information. Built with React and Next.js, achieving 90+ Lighthouse scores across Performance, Accessibility, Best Practices, and SEO. Features clean, custom modern design with optimized content delivery and GSAP animations."],
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    highlights: [
      "Achieved 90+ Lighthouse scores across all metrics",
      "SEO-optimized content structure",
      "Professional design with clear call-to-actions"
    ],
    featured: true,
    publishedAt: new Date().toISOString()
  },
  {
    _id: '7',
    title: "Jobelo (Personal Project)",
    slug: "jobelo",
    description: "Job-matching web application connecting candidates with companies.",
    content: ["Job-matching web application connecting candidates with companies. Built with React and TypeScript, achieving 90+ Lighthouse scores across Performance, Accessibility, Best Practices, and SEO. Features clean, custom modern design with optimized content delivery and GSAP animations."],
    tags: ["React", "TypeScript", "React Query", "Node.js"],
    highlights: [
      "Currently in development",
      "Job-matching web application connecting candidates with companies",
      "Built core frontend architecture and matching flows",
      "Focus on UX, component reusability, and scalable state management",
    ],
    featured: true,
    publishedAt: new Date().toISOString()
  }
];

// Navigation Cards
export const NAVIGATION_CARDS = {
  about: {
    title: "About",
    description: "The story behind the code. What drives me, what I've learned, and why I do what I do.",
    label: "Learn More",
    href: "/about",
    icon: "👤"
  },
  projects: {
    title: "Projects",
    description: "Real work, real results. See what happens when code meets creativity.",
    label: "View Projects",
    href: "/projects",
    icon: "💼"
  },
  blog: {
    title: "Blog",
    description: "Technical articles and insights on web development and engineering.",
    label: "Read Articles",
    href: "/blog",
    icon: "📝"
  },
  contact: {
    title: "Contact",
    description: "Got an idea? Let's make it happen. I'm always up for interesting conversations.",
    label: "Get in Touch",
    href: "/contact",
    icon: "✉️"
  }
};

// Meta Descriptions
export const META_DESCRIPTIONS = {
  home: "Antonis Skandalis - Senior Frontend Engineer specializing mostly in React & TypeScript, with full-stack capabilities. Building scalable, performant web applications with modern JavaScript frameworks.",
  about: "Learn more about Antonis Skandalis - Senior Frontend Engineer specializing in React & TypeScript, with full-stack capabilities. Background, skills, and experience.",
  projects: "Featured projects by Antonis Skandalis, Senior Frontend Engineer specializing mostly in React & TypeScript, with full-stack capabilities. Showcasing expertise in React, Vue, Node.js, TypeScript, and modern web technologies.",
  blog: "Technical blog posts by Antonis Skandalis, Senior Frontend Engineer specializing mostly in React & TypeScript, with full-stack capabilities. About React patterns, performance optimization, and modern web technologies.",
  contact: "Get in touch with Antonis Skandalis for freelance opportunities, collaborations, or just to say hello.",
  notFound: "The page you're looking for doesn't exist."
};

// Page Titles
export const PAGE_TITLES = {
  home: "Antonis Skandalis | Senior Frontend Engineer Portfolio",
  about: "About | Antonis Skandalis - Senior Frontend Engineer",
  projects: "Projects | Antonis Skandalis",
  blog: "Blog | Antonis Skandalis",
  contact: "Contact | Antonis Skandalis",
  notFound: "404 - Page Not Found | Antonis Skandalis"
};
