// Types for default data (now using Content Collections)
export interface About {
  backgroundParagraphs: string[];
  languages?: Array<{ language: string; proficiency: string }>;
  softSkills?: string[];
}

export interface Skill {
  name: string;
  category?: string;
  level: number;
  order?: number;
}

export interface Experience {
  title: string;
  company: string;
  location?: string;
  startDate: string;
  endDate?: string;
  isCurrent?: boolean;
  description: string;
  achievements?: string[];
  technologies?: string[];
  order?: number;
}

export interface Project {
  title: string;
  slug: string;
  description: string;
  tags: string[];
  highlights?: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  publishedAt: string;
}

// Hero Section
export const HERO_DESCRIPTION =
  "Senior Frontend Engineer specializing mostly in React & TypeScript, with full-stack capabilities. Building scalable, performant web applications with modern JavaScript frameworks.";

export const HERO_TITLE = {
  primary: "ANTONIS",
  secondary: "SKANDALIS",
};

export const HERO_CTA = {
  primaryLabel: "Get in Touch",
  primaryHref: "/contact",
  secondaryLabel: "View Projects",
  secondaryHref: "/projects",
};

/** Values that resonate with me */
export interface ValueItem {
  title: string;
  description: string;
}

export const VALUES: ValueItem[] = [
  {
    title: "Default to transparency",
    description:
      "I choose transparency as a way to work and collaborate. Sharing context early, writing down decisions, and being honest about trade-offs helps everyone move in the same direction.",
  },
  {
    title: "Improve consistently",
    description:
      "I strive to get better every day, not in competition with others but with my past self. Small, steady improvements in code, process, and communication compound over time.",
  },
  {
    title: "Ownership & autonomy",
    description:
      "My time and focus matter. I want to own the things I build and have a say in what I work on, not just execute someone else's backlog without input.",
  },
  {
    title: "Show gratitude",
    description:
      "I'm grateful for the tools, teams, and opportunities that make this work possible. I try to give back through mentoring, open source, and clear documentation.",
  },
  {
    title: "Choose optimism",
    description:
      "I assume good intent and believe that hard problems can be solved with the right approach and collaboration. Constructive feedback and honest dialogue are part of that.",
  },
  {
    title: "Value over hours",
    description:
      "I believe the time I spend working is, at best, indirectly related to the value of what I create. I want to collaborate with others who are just as passionate about the work as I am.",
  },
];

// Navigation Cards
export const NAVIGATION_CARDS = {
  about: {
    title: "About",
    description:
      "The story behind the code. What drives me, what I've learned, and why I do what I do.",
    label: "Learn More",
    href: "/about",
    icon: "👤",
  },
  projects: {
    title: "Projects",
    description:
      "Real work, real results. See what happens when code meets creativity.",
    label: "View Projects",
    href: "/projects",
    icon: "💼",
  },
  blog: {
    title: "Blog",
    description:
      "Technical articles and insights on web development and engineering.",
    label: "Read Articles",
    href: "/blog",
    icon: "📝",
  },
  contact: {
    title: "Contact",
    description:
      "Got an idea? Let's make it happen. I'm always up for interesting conversations.",
    label: "Get in Touch",
    href: "/contact",
    icon: "✉️",
  },
};

// Meta Descriptions
export const META_DESCRIPTIONS = {
  home: "Antonis Skandalis - Senior Frontend Engineer specializing mostly in React & TypeScript, with full-stack capabilities. Building scalable, performant web applications with modern JavaScript frameworks.",
  about:
    "Learn more about Antonis Skandalis - Senior Frontend Engineer specializing in React & TypeScript, with full-stack capabilities. Background, skills, and experience.",
  projects:
    "Featured projects by Antonis Skandalis, Senior Frontend Engineer specializing mostly in React & TypeScript, with full-stack capabilities. Showcasing expertise in React, Vue, Node.js, TypeScript, and modern web technologies.",
  blog: "Technical blog posts by Antonis Skandalis, Senior Frontend Engineer specializing mostly in React & TypeScript, with full-stack capabilities. About React patterns, performance optimization, and modern web technologies.",
  contact:
    "Get in touch with Antonis Skandalis for freelance opportunities, collaborations, or just to say hello.",
  notFound: "The page you're looking for doesn't exist.",
};

// Page Titles
export const PAGE_TITLES = {
  home: "Antonis Skandalis | Senior Frontend Engineer Portfolio",
  about: "About | Antonis Skandalis - Senior Frontend Engineer",
  projects: "Projects | Antonis Skandalis",
  blog: "Blog | Antonis Skandalis",
  contact: "Contact | Antonis Skandalis",
  notFound: "404 - Page Not Found | Antonis Skandalis",
};
