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
  "Senior Frontend Engineer specializing in React & TypeScript, with full-stack capabilities. I build websites, web apps, and custom software for businesses and startups. Based in Paros, Greece — available for remote work worldwide.";

export const HERO_TITLE = {
  primary: "ANTONIS",
  secondary: "SKANDALIS",
};

/** Location for SEO and display (Paros, Greece) */
export const HERO_LOCATION = "Paros, Greece";

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

// Meta Descriptions (Antonis Skandalis first for name search; hire-intent + Paros for local/service)
export const META_DESCRIPTIONS = {
  home: "Antonis Skandalis — Web & app developer in Paros, Greece. Hire a Senior Frontend Engineer for websites, web apps, and custom software. React, TypeScript, full-stack. Remote work available.",
  about:
    "Antonis Skandalis — Senior Frontend Engineer based in Paros, Greece. Background, skills, and experience. Hire for websites, web apps, React, TypeScript. Available for remote projects.",
  projects:
    "Antonis Skandalis — Portfolio of websites and web apps. Senior Frontend Engineer in Paros, Greece. React, Vue, Node.js, TypeScript. Hire for your next project.",
  blog: "Antonis Skandalis — Technical blog on web development, React, performance, and engineering. Senior Frontend Engineer, Paros, Greece.",
  contact:
    "Hire Antonis Skandalis — Get in touch for websites, web apps, or custom software. Web developer in Paros, Greece. Remote work available.",
  notFound: "The page you're looking for doesn't exist.",
};

// Page Titles (name first for "Antonis Skandalis" search; role + location for discovery)
export const PAGE_TITLES = {
  home: "Antonis Skandalis | Web Developer | Paros, Greece",
  about: "Antonis Skandalis | About — Web Developer, Paros, Greece",
  projects: "Antonis Skandalis | Projects — Web & App Developer",
  blog: "Antonis Skandalis | Blog — Web Development",
  contact: "Antonis Skandalis | Contact — Hire Web Developer, Paros",
  notFound: "404 - Page Not Found | Antonis Skandalis",
};

/** SEO keywords: name first, then hire/service, local (Paros/Greece), tech */
export const SEO_KEYWORDS =
  "Antonis Skandalis, hire web developer, web developer Paros, web developer Greece, build website, custom web app, freelance web developer, Senior Frontend Engineer, React developer, TypeScript, Paros Greece, Cyclades, website developer, app developer, frontend developer, remote developer";
