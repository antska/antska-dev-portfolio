import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// Sanity client configuration
export const sanityClient = createClient({
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID || '',
  dataset: import.meta.env.PUBLIC_SANITY_DATASET || 'production',
  apiVersion: import.meta.env.PUBLIC_SANITY_API_VERSION || '2024-01-01',
  useCdn: true,
});

// Image URL builder
const builder = imageUrlBuilder(sanityClient);

export const urlFor = (source: any) => {
  return builder.image(source);
};

// Types
export interface Project {
  _id: string;
  title: string;
  slug: string;
  description: string;
  content?: any[];
  image?: any;
  tags: string[];
  highlights?: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  publishedAt: string;
}

export interface Post {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  content?: any[];
  image?: any;
  category?: string;
  readTime?: string;
  publishedAt: string;
}

export interface Experience {
  _id: string;
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

export interface Skill {
  _id: string;
  name: string;
  category?: string;
  level: number;
  order?: number;
}

export interface About {
  _id: string;
  summary?: string;
  backgroundParagraphs: string[];
  background?: any[];
  languages?: Array<{ language: string; proficiency: string }>;
  softSkills?: string[];
}

// Queries
const projectsQuery = `*[_type == "project"] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  description,
  content[]{
    ...,
    _type == "image" => {
      ...,
      asset->{
        _id,
        url,
        metadata
      }
    }
  },
  image,
  tags,
  highlights,
  liveUrl,
  githubUrl,
  featured,
  publishedAt
}`;

const projectBySlugQuery = `*[_type == "project" && slug.current == $slug][0] {
  _id,
  title,
  "slug": slug.current,
  description,
  content[]{
    ...,
    _type == "image" => {
      ...,
      asset->{
        _id,
        url,
        metadata
      }
    }
  },
  image,
  tags,
  highlights,
  liveUrl,
  githubUrl,
  featured,
  publishedAt
}`;

const postsQuery = `*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  excerpt,
  content,
  image,
  category,
  readTime,
  publishedAt
}`;

const postBySlugQuery = `*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  "slug": slug.current,
  excerpt,
  content,
  image,
  category,
  readTime,
  publishedAt
}`;

// Fetch functions
export const getProjects = async (): Promise<Project[]> => {
  if (!import.meta.env.PUBLIC_SANITY_PROJECT_ID) {
    return [];
  }
  try {
    return await sanityClient.fetch(projectsQuery);
  } catch (error) {
    console.error('Error fetching projects from Sanity:', error);
    return [];
  }
};

export const getProjectBySlug = async (slug: string): Promise<Project | null> => {
  if (!import.meta.env.PUBLIC_SANITY_PROJECT_ID) {
    return null;
  }
  return await sanityClient.fetch(projectBySlugQuery, { slug });
};

export const getPosts = async (): Promise<Post[]> => {
  if (!import.meta.env.PUBLIC_SANITY_PROJECT_ID) {
    return [];
  }
  return await sanityClient.fetch(postsQuery);
};

export const getPostBySlug = async (slug: string): Promise<Post | null> => {
  if (!import.meta.env.PUBLIC_SANITY_PROJECT_ID) {
    return null;
  }
  return await sanityClient.fetch(postBySlugQuery, { slug });
};

// Experience queries
const experiencesQuery = `*[_type == "experience"] | order(order asc, startDate desc) {
  _id,
  title,
  company,
  location,
  startDate,
  endDate,
  isCurrent,
  description,
  achievements,
  technologies,
  order
}`;

// Skills queries
const skillsQuery = `*[_type == "skill"] | order(category asc, order asc) {
  _id,
  name,
  category,
  level,
  order
}`;

// About query
const aboutQuery = `*[_type == "about"][0] {
  _id,
  backgroundParagraphs,
  background,
  languages,
  softSkills
}`;

// Fetch functions
export const getExperiences = async (): Promise<Experience[]> => {
  if (!import.meta.env.PUBLIC_SANITY_PROJECT_ID) {
    return [];
  }
  return await sanityClient.fetch(experiencesQuery);
};

export const getSkills = async (): Promise<Skill[]> => {
  if (!import.meta.env.PUBLIC_SANITY_PROJECT_ID) {
    return [];
  }
  return await sanityClient.fetch(skillsQuery);
};

export const getAbout = async (): Promise<About | null> => {
  if (!import.meta.env.PUBLIC_SANITY_PROJECT_ID) {
    return null;
  }
  return await sanityClient.fetch(aboutQuery);
};
