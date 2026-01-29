import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(),
    excerpt: z.string(),
    category: z.string().optional(),
    readTime: z.string().optional(),
    publishedAt: z.string().or(z.date()),
    image: z.string().optional(),
    architectureImage: z.string().optional(),
    architectureImageAlt: z.string().optional(),
    architectureImageCaption: z.string().optional(),
  }),
  transform: ({ data, id }) => ({
    ...data,
    slug: data.slug || id.split('/').pop()?.replace('.md', '') || '',
  }),
});

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(),
    description: z.string(),
    tags: z.array(z.string()),
    highlights: z.array(z.string()).optional(),
    liveUrl: z.string().url().optional(),
    githubUrl: z.string().url().optional(),
    featured: z.boolean().optional().default(false),
    publishedAt: z.string().or(z.date()),
  }),
  transform: ({ data, id }) => ({
    ...data,
    slug: data.slug || id.split('/').pop()?.replace('.md', '') || '',
  }),
});

const experienceCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    company: z.string(),
    location: z.string().optional(),
    startDate: z.string(),
    endDate: z.string().optional(),
    isCurrent: z.boolean().optional().default(false),
    description: z.string(),
    achievements: z.array(z.string()).optional(),
    technologies: z.array(z.string()).optional(),
    order: z.number().optional().default(0),
  }),
});

const skillsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    category: z.string().optional(),
    level: z.number().min(0).max(100),
    order: z.number().optional().default(0),
  }),
});

const aboutCollection = defineCollection({
  type: 'data',
  schema: z.object({
    backgroundParagraphs: z.array(z.string()),
    languages: z.array(z.object({
      language: z.string(),
      proficiency: z.string(),
    })).optional(),
    softSkills: z.array(z.string()).optional(),
  }),
});

export const collections = {
  blog: blogCollection,
  projects: projectsCollection,
  experience: experienceCollection,
  skills: skillsCollection,
  about: aboutCollection,
};
