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

// Blog Posts
export interface BlogPost {
  _id?: string;
  title: string;
  slug: string;
  excerpt: string;
  content?: any[] | string;
  contentMarkdown?: string;
  category?: string;
  readTime?: string;
  publishedAt: string;
}

export const DEFAULT_POSTS: BlogPost[] = [
  {
    _id: '1',
    title: "Why I Switched from Redux to Jotai (And When You Shouldn't)",
    slug: "jotai-vs-redux",
    excerpt: "I spent years building apps with Redux. Then I discovered Jotai, and honestly? It changed how I think about state management.",
    content: `I spent years building apps with Redux. Then I discovered Jotai, and honestly? It changed how I think about state management.

The Problem

At my previous company, we had a Redux store that looked like this:

// store.ts
const rootReducer = combineReducers({
  user: userReducer,
  products: productsReducer,
  cart: cartReducer,
  ui: uiReducer,
  // ... 15 more slices
});

Every feature needed actions, reducers, selectors. Want to update a single boolean? Create an action type, action creator, reducer case, and selector. It worked, but the boilerplate was killing us.

The Switch

When I joined Blueground, we were starting fresh. I suggested Jotai for a new feature, and the team was skeptical. "What's Jotai?" Fair question.

Here's what sold me:

// Before (Redux)
// actions.ts
export const setLoading = (isLoading: boolean) => ({
  type: 'SET_LOADING',
  payload: isLoading
});

// reducer.ts
case 'SET_LOADING':
  return { ...state, isLoading: action.payload };

// component.tsx
const isLoading = useSelector(state => state.ui.isLoading);
dispatch(setLoading(true));

// After (Jotai)
// atoms.ts
export const loadingAtom = atom(false);

// component.tsx
const [isLoading, setIsLoading] = useAtom(loadingAtom);
setIsLoading(true);

That's it. No actions, no reducers, no selectors. Just atoms and hooks.

When It Works

Jotai shines for:
- UI state (modals, toggles, form inputs)
- Derived state (computed values from other atoms)
- Component-level state that needs to be shared

// Derived state example
const itemsAtom = atom([]);
const totalAtom = atom((get) => 
  get(itemsAtom).reduce((sum, item) => sum + item.price, 0)
);

// No memoization needed, no selector complexity
const total = useAtomValue(totalAtom);

When You Shouldn't Switch

Redux still wins for:
- Complex middleware needs (we use Redux Toolkit Query for API state)
- Time-travel debugging (Redux DevTools is unmatched)
- Large teams where everyone already knows Redux

The Real Win

The biggest benefit? Less code means fewer bugs. We reduced our state management code by about 40%, and honestly, I can't remember the last time we had a state-related bug.

But here's the thing: I'm not saying Redux is bad. It's a solid choice. Jotai just fits better for most of what we do day-to-day.

Use the right tool for the job. Sometimes that's Redux. Sometimes it's Jotai. Sometimes it's just useState.`,
    category: "React",
    readTime: "5 min read",
    publishedAt: "2026-01-15T00:00:00Z"
  },
  {
    _id: '2',
    title: "Micro-frontends: The Good, The Bad, and The 'Why Did We Do This?'",
    slug: "micro-frontends-pitfalls",
    excerpt: "We built a micro-frontend architecture at Blueground that serves 7+ teams. It's been running for 3 years, handling 120K+ bookings annually. Here's what I learned.",
    content: `We built a micro-frontend architecture at Blueground that serves 7+ teams. It's been running for 3 years, handling 120K+ bookings annually. Here's what I learned.

Why We Did It

We had 10+ applications that needed to share components, but teams needed to deploy independently. Classic micro-frontend problem.

The solution? Module Federation with Webpack 5. Each team owns their app, but we share a design system and common utilities.

// host-app/webpack.config.js
new ModuleFederationPlugin({
  name: 'host',
  remotes: {
    booking: 'booking@https://booking.example.com/remoteEntry.js',
    search: 'search@https://search.example.com/remoteEntry.js',
  },
  shared: {
    react: { singleton: true },
    'react-dom': { singleton: true },
    '@design-system/components': { singleton: true },
  },
});

What Went Right

Independent deployments: Teams can ship features without coordinating releases. This alone saved us hours of planning meetings.

Shared design system: One source of truth for components. Update a button once, it updates everywhere.

Team autonomy: Each team owns their codebase, their tests, their CI/CD. No more "who broke the build?" Slack messages.

What Went Wrong

Version hell: React 18.1 in the host, React 18.0 in a remote? Good luck debugging that hydration error.

Bundle size: Every remote loads its own runtime. We ended up with 3 React instances in memory. Not great.

Development complexity: Running the full stack locally? Good luck. You need 5 terminals, 5 dev servers, and a prayer.

The Fixes

We solved version conflicts by being strict about shared dependencies:

shared: {
  react: { 
    singleton: true,
    requiredVersion: '^18.2.0', // Enforce version
    strictVersion: true, // Fail if mismatch
  },
}

Bundle size? We moved to a single React instance and lazy-loaded remotes only when needed.

Development? We built a local dev proxy that serves remotes from a CDN in dev mode. Not perfect, but it works.

Should You Do It?

Micro-frontends aren't a silver bullet. They add complexity. But if you have:
- Multiple teams working on different features
- Need for independent deployments
- Shared components but separate codebases

Then yeah, it might be worth it. We reduced deployment dependencies by 60% and increased feature delivery speed by 3x.

But if you're a team of 5 working on one product? Just use a monorepo. Seriously.

The Lesson

Every architecture decision is a trade-off. Micro-frontends gave us autonomy and speed, but cost us simplicity and bundle size.

Know what you're trading, and make sure it's worth it.`,
    category: "Architecture",
    readTime: "6 min read",
    publishedAt: "2025-12-15T00:00:00Z"
  },
  {
    _id: '3',
    title: "Building a Design System with Tailwind (Without Losing Your Mind)",
    slug: "tailwind-design-system",
    excerpt: "I've built design systems with Styled Components, CSS Modules, and even plain CSS. But Tailwind? That's a different game.",
    content: `I've built design systems with Styled Components, CSS Modules, and even plain CSS. But Tailwind? That's a different game.

The Setup

At Blueground, we needed a component library that 10+ applications could use. The catch? It had to work with Tailwind, be type-safe, and not require a PhD in CSS to customize.

Here's what we learned.

The Problem with Utility-First

Tailwind's utility classes are great for one-off components. But when you need a button that's used in 50 places, writing px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 everywhere gets old fast.

The Solution: Component Variants

We used cva (class-variance-authority) to create type-safe component variants:

import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils'; // tailwind-merge utility

const buttonVariants = cva(
  // Base styles
  'inline-flex items-center justify-center rounded-md font-medium transition-colors',
  {
    variants: {
      variant: {
        primary: 'bg-black text-white hover:bg-neutral-800',
        secondary: 'bg-white text-black border-2 border-black hover:bg-neutral-100',
        ghost: 'bg-transparent hover:bg-neutral-100',
      },
      size: {
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-4 py-2 text-base',
        lg: 'px-6 py-3 text-lg',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

interface ButtonProps extends VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
  className?: string;
}

export function Button({ variant, size, className, children, ...props }: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    >
      {children}
    </button>
  );
}

Now we get:
- Type-safe variants (TypeScript knows what's valid)
- Composable classes (can still add custom classes)
- Consistent design (all buttons use the same base)

The Real Win: Custom Utilities

Tailwind's plugin system lets you create custom utilities that match your design system:

// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'brutal-black': '#000000',
        'brutal-white': '#FFFFFF',
      },
      boxShadow: {
        'brutal': '4px 4px 0px 0px #000000',
        'brutal-md': '6px 6px 0px 0px #000000',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.shadow-brutal': {
          'box-shadow': '4px 4px 0px 0px #000000',
        },
      });
    },
  ],
};

The Gotcha: Responsive Design

Tailwind's responsive utilities are great, but they can get messy:

// Don't do this
<div className="text-sm md:text-base lg:text-lg xl:text-xl">

Instead, use container queries (when supported) or create responsive variants:

const textVariants = cva('', {
  variants: {
    responsive: {
      true: 'text-sm md:text-base lg:text-lg',
      false: 'text-base',
    },
  },
});

The Result

We built 50+ components in 3 months. Every app using our design system gets:
- Consistent styling
- Type safety
- Easy customization
- Small bundle size (Tailwind purges unused classes)

The best part? New developers can contribute without learning a custom CSS system. It's just Tailwind, but organized.

The Takeaway

Tailwind doesn't replace a design system. It enables one. Use variants for components, plugins for custom utilities, and keep your design tokens in the config.

Your future self (and your team) will thank you.`,
    category: "CSS",
    readTime: "7 min read",
    publishedAt: "2025-11-15T00:00:00Z"
  },
  {
    _id: '4',
    title: "How We Cut Load Time by 40% (Without Breaking Anything)",
    slug: "performance-optimization",
    excerpt: "Performance optimization is one of those things everyone talks about but few actually do well. Here's how we did it at Blueground, and the mistakes we made along the way.",
    content: `Performance optimization is one of those things everyone talks about but few actually do well. Here's how we did it at Blueground, and the mistakes we made along the way.

The Starting Point

Our app was slow. Initial load: 4.2 seconds. Time to interactive: 6.8 seconds. Users were bouncing. We had to fix it.

The Low-Hanging Fruit

First, we did the obvious stuff:

1. Code splitting
// Before
import { HeavyComponent } from './HeavyComponent';

// After
const HeavyComponent = lazy(() => import('./HeavyComponent'));

2. Image optimization
We switched to Next.js Image component (we were on Next.js at the time). Instant 30% reduction in image payload.

3. Bundle analysis
npm run build -- --analyze

Turns out we were shipping 2.1MB of JavaScript. A third of it was unused. We removed dead code, got it down to 1.4MB.

The Real Wins

But the big improvements came from things most people don't think about:

1. Prefetching critical routes

// Prefetch routes users are likely to visit
<link rel="prefetch" href="/search" />
<link rel="prefetch" href="/booking" />

We analyzed user flows, prefetched the top 3 routes. Saved ~800ms on average.

2. Lazy loading below the fold

// Only load when in viewport
import { useInView } from 'react-intersection-observer';

function LazySection() {
  const { ref, inView } = useInView({ triggerOnce: true });
  
  return (
    <div ref={ref}>
      {inView && <ExpensiveComponent />}
    </div>
  );
}

3. Memoization (but only where it matters)

// Don't do this everywhere
const MemoizedButton = memo(Button); // Usually unnecessary

// Do this for expensive computations
const expensiveValue = useMemo(() => {
  return heavyCalculation(data);
}, [data]);

We memoized 3 components. That's it. The rest didn't need it.

The Mistakes

Over-optimizing too early: We spent a week optimizing a component that rendered once. Waste of time.

Premature code splitting: We split everything into tiny chunks. Result? More network requests, slower overall load. We consolidated.

Ignoring the network: We optimized JavaScript but forgot about fonts. Added font-display: swap, saved 500ms.

The Results

After 2 months:
- Initial load: 2.5 seconds (down from 4.2s)
- Time to interactive: 3.8 seconds (down from 6.8s)
- Bundle size: 840KB (down from 2.1MB)
- Lighthouse score: 95+ (was 72)

The Lesson

Performance isn't about one big change. It's about 20 small ones. Measure everything, optimize what matters, ignore the rest.

And for god's sake, use font-display: swap.`,
    category: "Performance",
    readTime: "6 min read",
    publishedAt: "2025-10-15T00:00:00Z"
  }
];
